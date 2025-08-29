import React from 'react'
import { ChatEmbed, ChatConfig } from 'n8n-chat-embed-widget'
import './FloatingChatButton.css'

interface FloatingChatButtonProps {
  webhookUrl: string
  title?: string
  subtitle?: string
}

const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({
  webhookUrl,
  title = "Alex MDCC International",
  subtitle = ""
}) => {
  const config: ChatConfig = {
    n8nWebhookUrl: webhookUrl,
    title,
    subtitle,
    theme: 'light',
    position: 'bottom-right',
    width: 350,
    height: 500,
    initialState: 'closed',
    showToggle: true,
    enableFileUpload: true,
    enableCamera: true,
    enableAudio: true,
    maxFileSize: 10,
    maxFiles: 5,
    placeholder: 'Type a message...',
    colors: {
      primary: '#0d9488',
      background: '#ffffff',
      userBubble: '#0d9488',
      botBubble: '#f3f4f6',
      text: '#111827'
    }
  }

  const handleMessage = (message: any) => {
    console.log('Chat message:', message)
  }

  const handleError = (error: Error) => {
    console.error('Chat error:', error)
  }

  const handleFileUpload = (files: any[]) => {
    console.log('Files uploaded:', files)
  }

  return (
    <div className="floating-chat-button">
      <ChatEmbed
        config={config}
        onMessage={handleMessage}
        onError={handleError}
        onFileUpload={handleFileUpload}
      />
    </div>
  )
}

export default FloatingChatButton