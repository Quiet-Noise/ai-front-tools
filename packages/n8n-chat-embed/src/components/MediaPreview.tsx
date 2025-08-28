import React from 'react'
import { X, File, Image, Video, Volume2 } from 'lucide-react'
import { MediaPreviewProps, MediaFile } from '../types'

export const MediaPreview: React.FC<MediaPreviewProps> = ({
  files,
  onRemoveFile
}) => {
  if (files.length === 0) return null

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  const getFileIcon = (type: MediaFile['type']) => {
    switch (type) {
      case 'image': return <Image size={16} />
      case 'video': return <Video size={16} />
      case 'audio': return <Volume2 size={16} />
      default: return <File size={16} />
    }
  }

  const renderPreview = (file: MediaFile) => {
    switch (file.type) {
      case 'image':
        return (
          <img
            src={file.url}
            alt={file.name}
            className="media-preview-image"
          />
        )
      case 'video':
        return (
          <video
            src={file.url}
            className="media-preview-video"
            controls
            preload="metadata"
          />
        )
      case 'audio':
        return (
          <audio
            src={file.url}
            className="media-preview-audio"
            controls
            preload="metadata"
          />
        )
      default:
        return (
          <div className="media-preview-document">
            {getFileIcon(file.type)}
            <span className="document-name">{file.name}</span>
          </div>
        )
    }
  }

  return (
    <div className="media-preview">
      <div className="media-preview-list">
        {files.map((file) => (
          <div key={file.id} className="media-preview-item">
            <div className="media-preview-content">
              {renderPreview(file)}
            </div>
            
            <div className="media-preview-info">
              <div className="media-preview-details">
                <span className="file-name" title={file.name}>
                  {file.name.length > 20 ? `${file.name.substring(0, 20)}...` : file.name}
                </span>
                <span className="file-size">{formatFileSize(file.size)}</span>
              </div>
              
              <button
                onClick={() => onRemoveFile(file.id)}
                className="remove-file-button"
                title="Remove file"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}