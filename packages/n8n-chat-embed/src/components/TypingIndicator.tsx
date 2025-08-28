import React from 'react'
import { TypingIndicatorProps } from '../types'

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ visible }) => {
  if (!visible) return null

  return (
    <div className="typing-indicator">
      <div className="typing-indicator__content">
        <span className="typing-indicator__dot"></span>
        <span className="typing-indicator__dot"></span>
        <span className="typing-indicator__dot"></span>
      </div>
    </div>
  )
}