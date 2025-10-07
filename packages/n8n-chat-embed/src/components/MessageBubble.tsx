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

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image size={12} />
      case 'video': return <Video size={12} />
      case 'audio': return <Volume2 size={12} />
      default: return <File size={12} />
    }
  }

  const handleFileClick = (file: any) => {
    if (file.type === 'image') {
      // Open image in new tab for full view
      window.open(file.url, '_blank')
    } else {
      // Download file
      const link = document.createElement('a')
      link.href = file.url
      link.download = file.name
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const renderMediaFile = (file: any, index: number) => {
    const renderPreview = () => {
      if (file.type === 'image') {
        return (
          <img
            src={file.url}
            alt={file.name}
            className="message-media-chip-thumbnail"
          />
        )
      }
      return (
        <div className="message-media-chip-icon">
          {getFileIcon(file.type)}
        </div>
      )
    }

    return (
      <div
        key={index}
        className="message-media-chip"
        onClick={() => handleFileClick(file)}
        style={{ cursor: 'pointer' }}
        title={file.type === 'image' ? 'Click to view full size' : 'Click to download'}
      >
        {renderPreview()}
        <span className="message-media-chip-name" title={file.name}>
          {file.name}
        </span>
      </div>
    )
  }

  return (
    <div className={`message-bubble ${isUser ? 'user' : 'bot'}`}>
      <div className="message-content">
        {message.files && message.files.length > 0 && (
          <div className="message-media-list">
            {message.files.map((file, index) => renderMediaFile(file, index))}
          </div>
        )}
        {message.content.trim() && (
          isUser ? (
            <p dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }} />
          ) : (
            <p dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }} />
          )
        )}
      </div>
      {showTimestamp && (
        <div className="message-timestamp">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      )}
    </div>
  )
}