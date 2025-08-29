import React from 'react'
import FloatingChatButton from './FloatingChatButton'

const FloatingChatExample: React.FC = () => {
  const webhookUrl = 'https://quietnoise.app.n8n.cloud/webhook/ttc4f704-257e-4b10-8830-471f7c5e6605'
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      backgroundColor: '#f9fafb',
      fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800',
          color: '#111827',
          marginBottom: '1rem'
        }}>
          Quiet Noise Chat Demo
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563',
          marginBottom: '3rem',
          lineHeight: '1.6'
        }}>
          This page demonstrates the floating chat button component using the n8n-chat-embed-widget React package. 
          The chat button should appear in the bottom-right corner with Quiet Noise styling.
        </p>
        
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            Features
          </h2>
          <ul style={{ 
            textAlign: 'left', 
            color: '#4b5563',
            lineHeight: '1.8'
          }}>
            <li>✅ Mobile-responsive design with iOS Safari keyboard handling</li>
            <li>✅ File upload support (images, videos, audio, documents)</li>
            <li>✅ Camera and audio recording capabilities</li>
            <li>✅ Quiet Noise themed colors (#0d9488)</li>
            <li>✅ Smooth animations and hover effects</li>
            <li>✅ Accessibility compliant with proper focus states</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            Usage Instructions
          </h2>
          <p style={{ 
            color: '#4b5563',
            lineHeight: '1.6',
            textAlign: 'left'
          }}>
            1. Look for the chat button in the bottom-right corner<br/>
            2. Click to open the chat interface<br/>
            3. Type messages or upload files to test the integration<br/>
            4. The chat connects to the n8n webhook for AI responses
          </p>
        </div>
      </div>

      {/* The floating chat button component */}
      <FloatingChatButton
        webhookUrl={webhookUrl}
        title="Alex MDCC International"
        subtitle=""
      />
    </div>
  )
}

export default FloatingChatExample