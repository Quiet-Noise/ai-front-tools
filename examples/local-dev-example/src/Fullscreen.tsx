import React from 'react'
import { ChatEmbed } from 'n8n-chat-embed-widget'
import './Fullscreen.css'

const WEBHOOK_URL = 'https://quietnoise.app.n8n.cloud/webhook/6652abaf-27d7-482b-b2dd-9679dd2cbff0/chat'

function Fullscreen() {
  // Get webhook URL from query parameter or use default
  const urlParams = new URLSearchParams(window.location.search)
  const webhookUrl = urlParams.get('webhook') || WEBHOOK_URL

  const config = {
    n8nWebhookUrl: webhookUrl,
    title: 'AI Assistant',
    subtitle: 'How can I help you today?',
    theme: 'light' as const,
    position: 'inline' as const,
    width: '100%',
    height: '100%',
    placeholder: 'Type your message...',
    enableFileUpload: true,
    enableAudio: true,
    maxFiles: 5,
    allowedFileTypes: [],
    showTimestamps: false,
    showTypingIndicator: true,
    enableMessageSuggestions: true,
    initialSuggestions: [
      'Tell me about your services',
      'How can you help me?',
      'Show me an example'
    ],
    colors: {
      primary: '#007bff',
      background: '#ffffff',
      userBubble: '#007bff',
      botBubble: '#f1f3f4',
      text: '#333333'
    }
  }

  return (
    <div className="fullscreen-container">
      <ChatEmbed config={config} />
    </div>
  )
}

export default Fullscreen
