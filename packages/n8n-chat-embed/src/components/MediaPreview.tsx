import React from 'react'
import { X, File, Image, Video, Volume2 } from 'lucide-react'
import { MediaPreviewProps, MediaFile } from '../types'

export const MediaPreview: React.FC<MediaPreviewProps> = ({
  files,
  onRemoveFile
}) => {
  if (files.length === 0) return null

  const getFileIcon = (type: MediaFile['type']) => {
    switch (type) {
      case 'image': return <Image size={14} />
      case 'video': return <Video size={14} />
      case 'audio': return <Volume2 size={14} />
      default: return <File size={14} />
    }
  }

  const handleFileClick = (file: MediaFile, e: React.MouseEvent) => {
    // Don't trigger if clicking the remove button
    if ((e.target as HTMLElement).closest('.media-preview-chip-remove')) {
      return
    }

    if (file.type === 'image') {
      // Open image in new tab for preview
      window.open(file.url, '_blank')
    } else {
      // For documents/audio/video, open in new tab to preview
      window.open(file.url, '_blank')
    }
  }

  const renderPreview = (file: MediaFile) => {
    if (file.type === 'image') {
      return (
        <img
          src={file.url}
          alt={file.name}
          className="media-preview-chip-thumbnail"
        />
      )
    }
    return (
      <div className="media-preview-chip-icon">
        {getFileIcon(file.type)}
      </div>
    )
  }

  return (
    <div className="media-preview">
      <div className="media-preview-list">
        {files.map((file) => (
          <div
            key={file.id}
            className="media-preview-chip"
            onClick={(e) => handleFileClick(file, e)}
            style={{ cursor: 'pointer' }}
            title="Click to preview"
          >
            {renderPreview(file)}
            <span className="media-preview-chip-name" title={file.name}>
              {file.name.length > 25 ? `${file.name.substring(0, 25)}...` : file.name}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onRemoveFile(file.id)
              }}
              className="media-preview-chip-remove"
              title="Remove file"
              aria-label="Remove file"
            >
              <X size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}