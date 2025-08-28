import React, { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

interface ToggleButtonProps {
  isOpen: boolean
  onClick: () => void
  position: 'bottom-right' | 'bottom-left'
  primaryColor: string
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isOpen,
  onClick,
  position,
  primaryColor
}) => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (!isOpen) {
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
    onClick()
  }

  return (
    <div className={`chat-toggle-container chat-toggle-button--${position}`}>
      {showPopup && !isOpen && (
        <div 
          className={`chat-popup-message chat-popup-message--${position}`}
          onClick={handlePopupClick}
        >
          <div className="chat-popup-content">
            Hey! How can I help you?
          </div>
          <button 
            className="chat-popup-close"
            onClick={(e) => {
              e.stopPropagation()
              setShowPopup(false)
            }}
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