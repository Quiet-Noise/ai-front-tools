import React from 'react'
import { File, Image, Video, Volume2 } from 'lucide-react'
import { MessageBubbleProps } from '../types'

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, showTimestamp = false }) => {
  const isUser = message.type === 'user'
  
  const renderMediaFile = (file: any, index: number) => {
    switch (file.type) {
      case 'image':
        return (
          <img
            key={index}
            src={file.url}
            alt={file.name}
            className="message-media-image"
            style={{ maxWidth: '200px', maxHeight: '150px', borderRadius: '8px', marginTop: '8px' }}
          />
        )
      case 'video':
        return (
          <video
            key={index}
            src={file.url}
            controls
            className="message-media-video"
            style={{ maxWidth: '200px', maxHeight: '150px', borderRadius: '8px', marginTop: '8px' }}
          />
        )
      case 'audio':
        return (
          <div key={index} className="message-media-audio" style={{ marginTop: '8px' }}>
            <audio src={file.url} controls style={{ width: '200px' }} />
          </div>
        )
      default:
        return (
          <div key={index} className="message-media-document" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '8px', 
            backgroundColor: 'rgba(0,0,0,0.1)', 
            borderRadius: '8px', 
            marginTop: '8px',
            maxWidth: '200px'
          }}>
            <File size={16} />
            <span style={{ fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {file.name}
            </span>
          </div>
        )
    }
  }
  
  return (
    <div className={`message-bubble ${isUser ? 'user' : 'bot'}`}>
      <div className="message-content">
        {message.content.trim() && <p>{message.content}</p>}
        {message.files && message.files.map((file, index) => renderMediaFile(file, index))}
      </div>
      {showTimestamp && (
        <div className="message-timestamp">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      )}
    </div>
  )
}