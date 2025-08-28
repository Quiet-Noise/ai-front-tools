import React from 'react'
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
  return (
    <button
      onClick={onClick}
      className={`chat-toggle-button chat-toggle-button--${position}`}
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
  )
}