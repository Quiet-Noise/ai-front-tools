import React, { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

interface ToggleButtonProps {
  isOpen: boolean
  onClick: () => void
  position: 'bottom-right' | 'bottom-left'
  primaryColor: string
  popupMessage?: string
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isOpen,
  onClick,
  position,
  primaryColor,
  popupMessage = 'How can I help you?'
}) => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Check if popup has already been shown this session
    const popupShown = sessionStorage.getItem('n8n-chat-popup-shown')
    
    if (!isOpen && !popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 5000)

      return () => clearTimeout(timer)
    } else {
      setShowPopup(false)
    }
  }, [isOpen])

  const handleClick = () => {
    setShowPopup(false)
    onClick()
  }

  const handlePopupClick = () => {
    setShowPopup(false)
    sessionStorage.setItem('n8n-chat-popup-shown', 'true')
    onClick()
  }

  const handlePopupClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowPopup(false)
    sessionStorage.setItem('n8n-chat-popup-shown', 'true')
  }

  return (
    <div className={`chat-toggle-container chat-toggle-button--${position}`}>
      {showPopup && !isOpen && (
        <div 
          className={`chat-popup-message chat-popup-message--${position}`}
          onClick={handlePopupClick}
        >
          <div className="chat-popup-content">
            {popupMessage}
          </div>
          <button 
            className="chat-popup-close"
            onClick={handlePopupClose}
          >
            ×
          </button>
        </div>
      )}
      
      <button
        onClick={handleClick}
        className="chat-toggle-button"
        style={{
          backgroundColor: primaryColor,
          '--chat-primary': primaryColor
        } as React.CSSProperties}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X size={24} className="toggle-icon" />
        ) : (
          <MessageCircle size={24} className="toggle-icon" />
        )}
      </button>
    </div>
  )
}