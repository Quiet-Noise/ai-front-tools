import React from 'react'
import { File, Image, Video, Volume2 } from 'lucide-react'
import { MessageBubbleProps } from '../types'

// Simple markdown parser for WhatsApp/Telegram style formatting
const parseMarkdown = (text: string): string => {
  let parsed = text
  
  // First, temporarily replace URLs with placeholders to protect them
  const urlPlaceholders: { [key: string]: string } = {}
  let urlCounter = 0
  
  // Store markdown links first: [text](url)
  parsed = parsed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
    const encodedUrl = encodeURI(url.trim())
    const placeholder = `XXXXXURLPLACEHOLDER${urlCounter++}XXXXX`
    urlPlaceholders[placeholder] = `<a href="${encodedUrl}" target="_blank" rel="noopener noreferrer">${linkText}</a>`
    return placeholder
  })
  
  // Store plain URLs
  parsed = parsed.replace(/(https?:\/\/[^\s<]+)/g, (match, url) => {
    const encodedUrl = encodeURI(url.trim())
    const placeholder = `XXXXXURLPLACEHOLDER${urlCounter++}XXXXX`
    urlPlaceholders[placeholder] = `<a href="${encodedUrl}" target="_blank" rel="noopener noreferrer">${url}</a>`
    return placeholder
  })
  
  // Now process formatting on the protected text
  // Bold: **text** or __text__
  parsed = parsed.replace(/\*\*((?:(?!\*\*).)+)\*\*/g, '<strong>$1</strong>')
  parsed = parsed.replace(/__((?:(?!__).)+)__/g, '<strong>$1</strong>')
  
  // Italic: *text* or _text_ (but avoid URL placeholders)
  parsed = parsed.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>')
  parsed = parsed.replace(/(?<!_)_([^_\n]+?)_(?!_)/g, '<em>$1</em>')
  
  // Line breaks
  parsed = parsed.replace(/\n/g, '<br>')
  
  // Restore URLs
  Object.keys(urlPlaceholders).forEach(placeholder => {
    parsed = parsed.replace(placeholder, urlPlaceholders[placeholder])
  })
  
  return parsed
}

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
        {message.content.trim() && (
          isUser ? (
            <p>{message.content}</p>
          ) : (
            <p dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }} />
          )
        )}
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