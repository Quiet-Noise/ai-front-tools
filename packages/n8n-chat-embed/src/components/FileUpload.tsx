import React, { useRef, useState, useEffect } from 'react'
import { Paperclip, Camera, Mic, Upload, X, Plus } from 'lucide-react'
import { FileUploadProps, MediaFile } from '../types'
import { detectDevice } from '../utils/mobile'

export const FileUpload: React.FC<FileUploadProps> = ({
  onFilesSelected,
  maxFiles,
  maxFileSize,
  allowedTypes,
  enableCamera,
  enableAudio
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const [recordingTime, setRecordingTime] = useState(0)
  const [recordingInterval, setRecordingInterval] = useState<NodeJS.Timeout | null>(null)
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const deviceInfo = detectDevice()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMenu])

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
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  const openCamera = async () => {
    console.log('📷 Opening camera...')
    
    // Check if camera APIs are supported
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('❌ getUserMedia not supported')
      alert('Camera is not supported in this browser.')
      return
    }
    
    // Arc browser specific checks and workarounds
    if (deviceInfo.isArc) {
      console.log('🌐 Arc browser detected - applying compatibility fixes...')
      // Arc browser may need special handling for permissions
      try {
        // For Arc browser, use a more direct approach
        const constraints = { video: { facingMode: 'user' } }
        console.log('🔧 Arc: Using enhanced video constraints')
        
        // Test permissions state first
        if (navigator.permissions) {
          const cameraPermission = await navigator.permissions.query({ name: 'camera' as PermissionName })
          if (cameraPermission.state === 'denied') {
            alert('Camera access is blocked in Arc. Please:\n1. Click the shield icon in the address bar\n2. Allow camera access\n3. Refresh the page')
            return
          }
        }
      } catch (e) {
        console.log('🔧 Arc: Could not check permissions, continuing...')
      }
    }

    // Check if we're on HTTPS or localhost (required for camera access)
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
      console.error('❌ Camera requires HTTPS')
      alert('Camera access requires HTTPS. Please use a secure connection.')
      return
    }

    try {
      // First check permissions
      console.log('🔍 Checking camera permissions...')
      
      if (navigator.permissions) {
        try {
          const permission = await navigator.permissions.query({ name: 'camera' as PermissionName })
          console.log('📋 Camera permission state:', permission.state)
          
          if (permission.state === 'denied') {
            alert('Camera permission is denied. Please enable camera access in your browser settings and reload the page.')
            return
          }
        } catch (permError) {
          console.log('⚠️ Could not check permissions:', permError)
          // Continue anyway - some browsers don't support permissions API
        }
      }

      console.log('🎥 Requesting camera access...')
      
      // Request camera with basic constraints first
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'user'
        } 
      })
      
      console.log('✅ Camera access granted, stream:', stream)
      console.log('📊 Video tracks:', stream.getVideoTracks().length)
      
      if (videoRef.current) {
        console.log('📹 Setting up video element...')
        videoRef.current.srcObject = stream
        
        // Set video attributes
        videoRef.current.autoplay = true
        videoRef.current.playsInline = true
        videoRef.current.muted = true
        
        // Wait for video to be ready
        videoRef.current.onloadedmetadata = () => {
          console.log('📹 Video metadata loaded, dimensions:', videoRef.current?.videoWidth, 'x', videoRef.current?.videoHeight)
          if (videoRef.current) {
            videoRef.current.play()
              .then(() => {
                console.log('▶️ Video playing successfully')
                setIsCameraOpen(true)
              })
              .catch((playError) => {
                console.error('❌ Error playing video:', playError)
                alert('Could not start camera preview. Please try again.')
              })
          }
        }
        
        videoRef.current.oncanplay = () => {
          console.log('📹 Video can play')
        }
        
        videoRef.current.onerror = (error) => {
          console.error('❌ Video element error:', error)
          alert('Video playback error.')
        }
        
      } else {
        console.error('❌ Video ref not available')
        alert('Video element not ready. Please try again.')
      }
    } catch (error) {
      console.error('❌ Error accessing camera:', error)
      const err = error as any
      
      // More detailed error handling
      if (err.name === 'NotAllowedError') {
        alert('Camera permission denied. Please:\n1. Click "Allow" when prompted\n2. Check your browser settings\n3. Reload the page and try again')
      } else if (err.name === 'NotFoundError') {
        alert('No camera found. Please:\n1. Connect a camera\n2. Check camera connections\n3. Try again')
      } else if (err.name === 'NotReadableError') {
        alert('Camera is already in use by another application. Please:\n1. Close other camera apps\n2. Try again')
      } else if (err.name === 'OverconstrainedError') {
        alert('Camera constraints not supported. Trying with basic settings...')
        // Retry with minimal constraints
        try {
          const basicStream = await navigator.mediaDevices.getUserMedia({ video: true })
          if (videoRef.current) {
            videoRef.current.srcObject = basicStream
            setIsCameraOpen(true)
          }
        } catch (basicError) {
          alert('Could not access camera with any settings.')
        }
      } else {
        alert(`Camera error: ${err.message || 'Unknown error'}\n\nPlease:\n1. Allow camera permissions\n2. Use HTTPS\n3. Try a different browser`)
      }
    }
  }

  const capturePhoto = async () => {
    if (!videoRef.current || !canvasRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    if (!context) return

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    context.drawImage(video, 0, 0)

    canvas.toBlob(async (blob) => {
      if (blob) {
        const file = new File([blob], `photo-${Date.now()}.jpg`, { type: 'image/jpeg' })
        try {
          const mediaFile = await createMediaFile(file)
          onFilesSelected([mediaFile])
        } catch (error) {
          console.error('Error processing captured photo:', error)
          alert('Error processing captured photo')
        }
      }
    }, 'image/jpeg', 0.8) // Slightly lower quality for camera captures

    closeCamera()
  }

  const closeCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
      videoRef.current.srcObject = null
    }
    setIsCameraOpen(false)
  }

  const startRecording = async () => {
    console.log('🎤 Starting audio recording...')
    
    // Check if MediaRecorder is supported
    if (!MediaRecorder || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('❌ MediaRecorder or getUserMedia not supported')
      alert('Audio recording is not supported in this browser.')
      return
    }
    
    // Arc browser specific audio fixes
    if (deviceInfo.isArc) {
      console.log('🌐 Arc browser detected - using enhanced audio recording...')
      
      // Arc browser audio compatibility checks
      try {
        if (navigator.permissions) {
          const micPermission = await navigator.permissions.query({ name: 'microphone' as PermissionName })
          if (micPermission.state === 'denied') {
            alert('Microphone access is blocked in Arc. Please:\n1. Click the shield icon in the address bar\n2. Allow microphone access\n3. Refresh the page')
            return
          }
        }
      } catch (e) {
        console.log('🔧 Arc: Could not check microphone permissions, continuing...')
      }
    }

    try {
      console.log('🔍 Requesting microphone permission...')
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        } 
      })
      
      console.log('✅ Microphone access granted')
      
      // Arc browser optimized MediaRecorder settings
      let recorderOptions: MediaRecorderOptions = {}
      if (deviceInfo.isArc) {
        // Arc browser works better with specific audio formats
        if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
          recorderOptions.mimeType = 'audio/webm;codecs=opus'
        } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
          recorderOptions.mimeType = 'audio/mp4'
        }
      } else {
        // Standard browser settings
        if (MediaRecorder.isTypeSupported('audio/webm')) {
          recorderOptions.mimeType = 'audio/webm'
        }
      }
      
      const recorder = new MediaRecorder(stream, recorderOptions)
      const chunks: Blob[] = []

      recorder.ondataavailable = (event) => {
        console.log('📊 Audio data available:', event.data.size, 'bytes')
        if (event.data.size > 0) {
          chunks.push(event.data)
        }
      }

      recorder.onstop = async () => {
        console.log('🛑 Recording stopped, creating file...')
        const mimeType = recorder.mimeType || 'audio/wav'
        const blob = new Blob(chunks, { type: mimeType })
        const extension = mimeType.includes('webm') ? 'webm' : 'wav'
        const file = new File([blob], `recording-${Date.now()}.${extension}`, { type: mimeType })
        
        console.log('📁 Created audio file:', file.name, file.size, 'bytes')
        try {
          const mediaFile = await createMediaFile(file)
          onFilesSelected([mediaFile])
        } catch (error) {
          console.error('Error processing audio recording:', error)
          alert('Error processing audio recording')
        }
        
        // Stop all audio tracks
        stream.getTracks().forEach(track => track.stop())
      }

      recorder.onerror = (event) => {
        console.error('❌ Recording error:', event)
        alert('Recording failed. Please try again.')
      }

      recorder.start(1000) // Collect data every second
      setMediaRecorder(recorder)
      setIsRecording(true)
      setRecordingTime(0)
      
      console.log('🔴 Recording started')

      // Start timer
      const interval = setInterval(() => {
        setRecordingTime(prev => prev + 1)
      }, 1000)
      setRecordingInterval(interval)

    } catch (error) {
      console.error('❌ Error accessing microphone:', error)
      const err = error as any
      if (err.name === 'NotAllowedError') {
        alert('Microphone permission denied. Please allow microphone access and try again.')
      } else if (err.name === 'NotFoundError') {
        alert('No microphone found. Please connect a microphone and try again.')
      } else {
        alert(`Could not access microphone: ${err.message || 'Unknown error'}`)
      }
    }
  }

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop()
    }
    
    setIsRecording(false)
    setMediaRecorder(null)
    
    if (recordingInterval) {
      clearInterval(recordingInterval)
      setRecordingInterval(null)
    }
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
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

      {/* Camera modal */}
      {isCameraOpen && (
        <div className="camera-modal">
          <div className="camera-container">
            <video ref={videoRef} autoPlay playsInline className="camera-video" />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <div className="camera-controls">
              <button onClick={capturePhoto} className="capture-button">
                <Camera size={24} />
              </button>
              <button onClick={closeCamera} className="close-camera-button">
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload menu */}
      <div className="upload-menu" ref={menuRef}>
        {isRecording ? (
          <button
            onClick={stopRecording}
            className="upload-button recording"
            title={`Recording ${formatTime(recordingTime)}`}
          >
            <div className="recording-indicator" />
            {formatTime(recordingTime)}
          </button>
        ) : (
          <>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="upload-button menu-toggle"
              title="Add media"
            >
              <Plus size={18} />
            </button>

            {showMenu && (
              <div className="upload-menu-dropdown">
                <button
                  onClick={() => {
                    openFileDialog()
                    setShowMenu(false)
                  }}
                  className="upload-menu-item"
                  title="Upload files"
                >
                  <Paperclip size={16} />
                  <span>Files</span>
                </button>

                {enableCamera && (
                  <button
                    onClick={() => {
                      openCamera()
                      setShowMenu(false)
                    }}
                    className="upload-menu-item"
                    title="Take photo"
                  >
                    <Camera size={16} />
                    <span>Camera</span>
                  </button>
                )}

                {enableAudio && (
                  <button
                    onClick={() => {
                      startRecording()
                      setShowMenu(false)
                    }}
                    className="upload-menu-item"
                    title="Record audio"
                  >
                    <Mic size={16} />
                    <span>Audio</span>
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}