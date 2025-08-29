import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { ChatEmbed } from './components/ChatEmbed'
import { ChatConfig } from './types'
import './styles.css'

declare global {
  interface Window {
    N8nChatEmbed: {
      init: (containerId: string, config: ChatConfig) => void
      create: (config: ChatConfig) => HTMLElement
    }
  }
}

const N8nChatEmbedLib = {
  init: (containerId: string, config: ChatConfig) => {
    const container = document.getElementById(containerId)
    if (!container) {
      console.error(`Container with ID "${containerId}" not found`)
      return
    }

    const root = createRoot(container)
    root.render(<ChatEmbed config={config} />)
  },

  create: (config: ChatConfig): HTMLElement => {
    const container = document.createElement('div')
    container.className = 'n8n-chat-embed-container'
    
    const root = createRoot(container)
    root.render(<ChatEmbed config={config} />)
    
    return container
  }
}

// Auto-init if script has data attributes
document.addEventListener('DOMContentLoaded', () => {
  const scripts = document.querySelectorAll('script[src*="n8n-chat-embed"]')
  
  scripts.forEach((script) => {
    const webhookUrl = script.getAttribute('data-webhook-url')
    const containerId = script.getAttribute('data-container-id')
    const autoInit = script.getAttribute('data-auto-init')
    
    if (webhookUrl && (containerId || autoInit === 'true')) {
      const config: ChatConfig = {
        n8nWebhookUrl: webhookUrl,
        title: script.getAttribute('data-title') || undefined,
        subtitle: script.getAttribute('data-subtitle') || undefined,
        placeholder: script.getAttribute('data-placeholder') || undefined,
        theme: (script.getAttribute('data-theme') as 'light' | 'dark' | 'auto') || 'light',
        position: (script.getAttribute('data-position') as any) || 'bottom-right',
        width: parseInt(script.getAttribute('data-width') || '350'),
        height: parseInt(script.getAttribute('data-height') || '500'),
        showTypingIndicator: script.getAttribute('data-show-typing') !== 'false',
        showTimestamps: script.getAttribute('data-show-timestamps') === 'true',
        // New toggle functionality
        initialState: (script.getAttribute('data-initial-state') as 'open' | 'closed') || (script.getAttribute('data-show-toggle') === 'true' ? 'closed' : 'open'),
        showToggleButton: script.getAttribute('data-show-toggle') === 'true',
        popupMessage: script.getAttribute('data-popup-message') || undefined,
        // New media upload functionality
        enableFileUpload: script.getAttribute('data-enable-file-upload') === 'true',
        enableCamera: script.getAttribute('data-enable-camera') === 'true',
        enableAudio: script.getAttribute('data-enable-audio') === 'true',
        maxFileSize: parseInt(script.getAttribute('data-max-file-size') || '10'),
        maxFiles: parseInt(script.getAttribute('data-max-files') || '5'),
        allowedFileTypes: script.getAttribute('data-allowed-file-types')?.split(',').map(t => t.trim()) || []
      }

      if (containerId) {
        N8nChatEmbedLib.init(containerId, config)
      } else if (autoInit === 'true') {
        const container = N8nChatEmbedLib.create(config)
        document.body.appendChild(container)
      }
    }
  })
})

export default N8nChatEmbedLib

// Make available globally - ensure it's set immediately after export
if (typeof window !== 'undefined') {
  window.N8nChatEmbed = N8nChatEmbedLib
  console.log('N8nChatEmbed loaded and available globally')
}