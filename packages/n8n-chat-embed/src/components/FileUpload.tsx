import React, { useRef } from 'react'
import { Paperclip } from 'lucide-react'
import { FileUploadProps, MediaFile } from '../types'

export const FileUpload: React.FC<FileUploadProps> = ({
  onFilesSelected,
  maxFiles,
  maxFileSize,
  allowedTypes
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const generateId = () => `${Date.now()}-${Math.random()}`

  const getFileType = (file: File): 'image' | 'video' | 'audio' | 'document' => {
    if (file.type.startsWith('image/')) return 'image'
    if (file.type.startsWith('video/')) return 'video'
    if (file.type.startsWith('audio/')) return 'audio'
    return 'document'
  }

  const compressImage = async (file: File, maxSizeMB: number = 1): Promise<File> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      
      img.onload = () => {
        // Calculate new dimensions to reduce file size
        let { width, height } = img
        const maxDimension = 1920 // Max width or height
        
        if (width > height && width > maxDimension) {
          height = (height * maxDimension) / width
          width = maxDimension
        } else if (height > maxDimension) {
          width = (width * maxDimension) / height
          height = maxDimension
        }
        
        canvas.width = width
        canvas.height = height
        
        // Draw and compress
        ctx?.drawImage(img, 0, 0, width, height)
        
        // Start with high quality and reduce if needed
        let quality = 0.8
        const compress = () => {
          canvas.toBlob((blob) => {
            if (blob) {
              const sizeMB = blob.size / (1024 * 1024)
              if (sizeMB > maxSizeMB && quality > 0.1) {
                quality -= 0.1
                compress()
              } else {
                const compressedFile = new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now()
                })
                resolve(compressedFile)
              }
            } else {
              resolve(file) // Fallback to original
            }
          }, 'image/jpeg', quality)
        }
        
        compress()
      }
      
      img.onerror = () => resolve(file) // Fallback to original
      img.src = URL.createObjectURL(file)
    })
  }

  const compressFile = async (file: File): Promise<File> => {
    const maxSizeMB = 1
    const fileSizeMB = file.size / (1024 * 1024)
    
    // If file is already under 1MB, return as-is
    if (fileSizeMB <= maxSizeMB) {
      return file
    }
    
    // Only compress images
    if (file.type.startsWith('image/')) {
      try {
        return await compressImage(file, maxSizeMB)
      } catch (error) {
        console.warn('Image compression failed, using original:', error)
        return file
      }
    }
    
    // For other file types, just warn if over limit
    if (fileSizeMB > maxSizeMB) {
      console.warn(`File ${file.name} is ${fileSizeMB.toFixed(1)}MB, which may be too large`)
    }
    
    return file
  }

  const createMediaFile = async (file: File): Promise<MediaFile> => {
    const compressedFile = await compressFile(file)
    return {
      file: compressedFile,
      id: generateId(),
      type: getFileType(compressedFile),
      url: URL.createObjectURL(compressedFile),
      name: file.name, // Keep original name
      size: compressedFile.size
    }
  }

  const validateFile = (file: File): boolean => {
    // Check file size (convert MB to bytes)
    if (file.size > maxFileSize * 1024 * 1024) {
      alert(`File ${file.name} is too large. Maximum size is ${maxFileSize}MB.`)
      return false
    }

    // Check file type if allowedTypes is specified
    if (allowedTypes.length > 0) {
      const isAllowed = allowedTypes.some(type => 
        type === '*' || file.type.includes(type) || file.name.endsWith(type)
      )
      if (!isAllowed) {
        alert(`File type not allowed: ${file.type}`)
        return false
      }
    }

    return true
  }

  const handleFileSelect = async (files: FileList | null) => {
    if (!files) return

    const validFiles: MediaFile[] = []
    const fileArray = Array.from(files)

    for (const file of fileArray) {
      if (validFiles.length >= maxFiles) {
        alert(`Maximum ${maxFiles} files allowed`)
        break
      }

      if (validateFile(file)) {
        try {
          const mediaFile = await createMediaFile(file)
          validFiles.push(mediaFile)
        } catch (error) {
          console.error('Error processing file:', file.name, error)
          alert(`Error processing file: ${file.name}`)
        }
      }
    }

    if (validFiles.length > 0) {
      onFilesSelected(validFiles)
    }

    // Clear the input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="file-upload">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={allowedTypes.length > 0 ? allowedTypes.join(',') : '*'}
        onChange={(e) => handleFileSelect(e.target.files)}
        style={{ display: 'none' }}
      />

      {/* Attach button */}
      <button
        onClick={openFileDialog}
        className="upload-button"
        title="Attach files"
      >
        <Paperclip size={18} />
      </button>
    </div>
  )
}