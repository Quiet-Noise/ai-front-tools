import React, { useState, useRef, useEffect, useCallback } from 'react'
import { X, Send } from 'lucide-react'
import { ChatEmbedProps, ChatMessage, MediaFile } from '../types'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'
import { FileUpload } from './FileUpload'
import { MediaPreview } from './MediaPreview'
import { ToggleButton } from './ToggleButton'
import { useDeviceDetection } from '../hooks'

export const ChatEmbed: React.FC<ChatEmbedProps> = ({
  config,
  onMessage,
  onError,
  onClose
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(config.initialState !== 'closed')
  const [pendingFiles, setPendingFiles] = useState<MediaFile[]>([])
  const [sessionId] = useState(() => {
    let id = localStorage.getItem('n8n_session_id')
    if (!id) {
      id = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('n8n_session_id', id)
    }
    return id
  })
  
  const deviceInfo = useDeviceDetection()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Configuration merging (needs to be before effects)
  const defaultConfig = {
    title: 'Chat',
    subtitle: 'How can I help you?',
    placeholder: 'Type your message...',
    theme: 'light' as const,
    colors: {
      primary: '#007bff',
      background: '#ffffff',
      userBubble: '#007bff',
      botBubble: '#f1f3f4',
      text: '#333333'
    },
    showTypingIndicator: true,
    showTimestamps: false,
    position: 'bottom-right' as const,
    width: 350,
    height: 500,
    zIndex: 1000,
    initialState: 'open' as const,
    showToggleButton: false,
    enableFileUpload: false,
    enableCamera: false,
    enableAudio: false,
    maxFileSize: 10,
    maxFiles: 5,
    allowedFileTypes: []
  }

  const mergedConfig = { ...defaultConfig, ...config }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView()
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto-focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const generateId = () => `${Date.now()}-${Math.random()}`

  const sendToN8n = async (message: string, media?: MediaFile) => {
    try {
      if (media) {
        // Send with media as FormData
        const formData = new FormData()
        formData.append('sessionId', sessionId)
        formData.append('chatInput', message)
        formData.append('data', media.file)

        const response = await fetch(config.n8nWebhookUrl, {
          method: 'POST',
          body: formData
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        return result.output || result.response || result.message || result.text || 'Response received'
      } else {
        // Send as JSON (original behavior)
        const payload = {
          sessionId: sessionId,
          chatInput: message
        }

        const response = await fetch(config.n8nWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        return result.output || result.response || result.message || result.text || 'Response received'
      }
    } catch (error) {
      console.error('Error sending to n8n:', error)
      throw error
    }
  }

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() && pendingFiles.length === 0) return
    if (isLoading) return

    const messageContent = inputValue.trim() || ''
    const filesToSend = [...pendingFiles]
    
    setInputValue('')
    setPendingFiles([])
    setIsLoading(true)
    
    if (config.showTypingIndicator) {
      setIsTyping(true)
    }

    try {
      // Send each media file as a separate message
      for (let i = 0; i < filesToSend.length; i++) {
        const file = filesToSend[i]
        const isLastFile = i === filesToSend.length - 1
        const caption = isLastFile && messageContent ? messageContent : ''
        
        // Create user message for this media
        const userMessage: ChatMessage = {
          id: generateId(),
          type: 'user',
          content: caption,
          timestamp: new Date(),
          files: [file]
        }

        setMessages(prev => [...prev, userMessage])
        onMessage?.(userMessage)

        // Send to n8n
        const response = await sendToN8n(caption, file)
        
        const botMessage: ChatMessage = {
          id: generateId(),
          type: 'bot',
          content: response,
          timestamp: new Date()
        }

        setMessages(prev => [...prev, botMessage])
        onMessage?.(botMessage)
      }

      // If there's text but no files, send text-only message
      if (messageContent && filesToSend.length === 0) {
        const userMessage: ChatMessage = {
          id: generateId(),
          type: 'user',
          content: messageContent,
          timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        onMessage?.(userMessage)

        const response = await sendToN8n(messageContent)
        
        const botMessage: ChatMessage = {
          id: generateId(),
          type: 'bot',
          content: response,
          timestamp: new Date()
        }

        setMessages(prev => [...prev, botMessage])
        onMessage?.(botMessage)
      }
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: generateId(),
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
      onError?.(error as Error)
    } finally {
      setIsLoading(false)
      setIsTyping(false)
      // Clean up file URLs
      filesToSend.forEach(file => URL.revokeObjectURL(file.url))
    }
  }, [inputValue, pendingFiles, isLoading, config, onMessage, onError])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFilesSelected = useCallback((files: MediaFile[]) => {
    setPendingFiles(prev => {
      const newFiles = [...prev, ...files]
      return newFiles.slice(0, mergedConfig.maxFiles)
    })
  }, [mergedConfig.maxFiles])

  const handleRemoveFile = useCallback((fileId: string) => {
    setPendingFiles(prev => {
      const fileToRemove = prev.find(f => f.id === fileId)
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.url)
      }
      return prev.filter(f => f.id !== fileId)
    })
  }, [])

  const handleToggle = useCallback(() => {
    setIsOpen(prev => {
      const newState = !prev
      // If closing the chat, call the onClose callback
      if (!newState && onClose) {
        onClose()
      }
      return newState
    })
  }, [onClose])

  // Handle initial state for floating widgets
  const shouldShowToggleButton = mergedConfig.position !== 'inline' && mergedConfig.showToggleButton
  const isInline = mergedConfig.position === 'inline'


  // For floating widgets, we need a container to position both toggle and chat together
  if (shouldShowToggleButton) {
    return (
      <div className={`chat-widget-container chat-widget-container--${mergedConfig.position}${!isOpen ? ' chat-closed' : ''}`}>
        {/* Toggle Button for floating widgets */}
        <ToggleButton
          isOpen={isOpen}
          onClick={handleToggle}
          position={mergedConfig.position as 'bottom-right' | 'bottom-left'}
          primaryColor={mergedConfig.colors.primary || '#007bff'}
        />

        {/* Main Chat Interface */}
        {isOpen && (
          <div 
            ref={chatContainerRef}
            className={`chat-embed chat-embed--${mergedConfig.theme} chat-embed--${mergedConfig.position}${
              deviceInfo.isMobile ? ' chat-embed--mobile' : ''
            } chat-embed--open`}
            style={{
              '--chat-primary': mergedConfig.colors.primary,
              '--chat-background': mergedConfig.colors.background,
              '--chat-user-bubble': mergedConfig.colors.userBubble,
              '--chat-bot-bubble': mergedConfig.colors.botBubble,
              '--chat-text': mergedConfig.colors.text,
              '--chat-width': `${mergedConfig.width}px`,
              '--chat-height': `${mergedConfig.height}px`,
              zIndex: mergedConfig.zIndex
            } as React.CSSProperties}
          >
      <div className="chat-embed__header">
        <div className="chat-embed__header-content">
          <h3 className="chat-embed__title">{mergedConfig.title}</h3>
          {mergedConfig.subtitle && (
            <p className="chat-embed__subtitle">{mergedConfig.subtitle}</p>
          )}
        </div>
        {mergedConfig.position !== 'inline' && (
          <button 
            className="chat-embed__close-button"
            onClick={handleToggle}
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="chat-embed__messages">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            showTimestamp={mergedConfig.showTimestamps}
          />
        ))}
        <TypingIndicator visible={isTyping} />
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-embed__input-area">
        {/* Media Preview */}
        {pendingFiles.length > 0 && (
          <MediaPreview
            files={pendingFiles}
            onRemoveFile={handleRemoveFile}
          />
        )}

        <div className="chat-embed__input-row">
          {/* File Upload Controls - moved to left side */}
          {mergedConfig.enableFileUpload && (
            <FileUpload
              onFilesSelected={handleFilesSelected}
              maxFiles={mergedConfig.maxFiles}
              maxFileSize={mergedConfig.maxFileSize}
              allowedTypes={mergedConfig.allowedFileTypes}
              enableCamera={mergedConfig.enableCamera}
              enableAudio={mergedConfig.enableAudio}
            />
          )}
          
          <div className="chat-embed__input-container">
            <textarea
              ref={inputRef}
              className="chat-embed__input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={mergedConfig.placeholder}
              disabled={isLoading}
              rows={1}
              style={{ resize: 'none' }}
            />
            
          </div>
          
          <button
            className="chat-embed__send-button"
            onClick={handleSendMessage}
            disabled={isLoading || (!inputValue.trim() && pendingFiles.length === 0)}
          >
            {isLoading ? (
              <div className="chat-embed__loading-spinner" />
            ) : (
              <Send size={18} className="chat-embed__send-icon" />
            )}
          </button>
        </div>
        </div>
        </div>
        )}
      </div>
    )
  }

  // For inline widgets, return the chat interface directly
  return (
    <div 
      ref={chatContainerRef}
      className={`chat-embed chat-embed--${mergedConfig.theme} chat-embed--${mergedConfig.position}${
        deviceInfo.isMobile ? ' chat-embed--mobile' : ''
      }`}
      style={{
        '--chat-primary': mergedConfig.colors.primary,
        '--chat-background': mergedConfig.colors.background,
        '--chat-user-bubble': mergedConfig.colors.userBubble,
        '--chat-bot-bubble': mergedConfig.colors.botBubble,
        '--chat-text': mergedConfig.colors.text,
        '--chat-width': `${mergedConfig.width}px`,
        '--chat-height': `${mergedConfig.height}px`,
        zIndex: mergedConfig.zIndex
      } as React.CSSProperties}
    >
      <div className="chat-embed__header">
        <div className="chat-embed__header-content">
          <h3 className="chat-embed__title">{mergedConfig.title}</h3>
          {mergedConfig.subtitle && (
            <p className="chat-embed__subtitle">{mergedConfig.subtitle}</p>
          )}
        </div>
        {mergedConfig.position !== 'inline' && (
          <button 
            className="chat-embed__close-button"
            onClick={handleToggle}
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="chat-embed__messages">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            showTimestamp={mergedConfig.showTimestamps}
          />
        ))}
        <TypingIndicator visible={isTyping} />
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-embed__input-area">
        {/* Media Preview */}
        {pendingFiles.length > 0 && (
          <MediaPreview
            files={pendingFiles}
            onRemoveFile={handleRemoveFile}
          />
        )}

        <div className="chat-embed__input-row">
          {/* File Upload Controls - moved to left side */}
          {mergedConfig.enableFileUpload && (
            <FileUpload
              onFilesSelected={handleFilesSelected}
              maxFiles={mergedConfig.maxFiles}
              maxFileSize={mergedConfig.maxFileSize}
              allowedTypes={mergedConfig.allowedFileTypes}
              enableCamera={mergedConfig.enableCamera}
              enableAudio={mergedConfig.enableAudio}
            />
          )}
          
          <div className="chat-embed__input-container">
            <textarea
              ref={inputRef}
              className="chat-embed__input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={mergedConfig.placeholder}
              disabled={isLoading}
              rows={1}
              style={{ resize: 'none' }}
            />
            
          </div>
          
          <button
            className="chat-embed__send-button"
            onClick={handleSendMessage}
            disabled={isLoading || (!inputValue.trim() && pendingFiles.length === 0)}
          >
            {isLoading ? (
              <div className="chat-embed__loading-spinner" />
            ) : (
              <Send size={18} className="chat-embed__send-icon" />
            )}
          </button>
        </div>
        </div>
    </div>
  )
}