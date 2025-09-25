import React from 'react'
import { MessageSuggestionsProps } from '../types'

export const MessageSuggestions: React.FC<MessageSuggestionsProps> = ({
  suggestions,
  visible,
  onSuggestionClick,
  maxVisible = 10
}) => {
  if (!visible || suggestions.length === 0) {
    return null
  }

  const visibleSuggestions = suggestions.slice(0, maxVisible)

  const handleSuggestionClick = (text: string) => {
    onSuggestionClick(text)
  }

  const handleKeyDown = (e: React.KeyboardEvent, text: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSuggestionClick(text)
    }
  }

  return (
    <div className="message-suggestions" role="group" aria-label="Message suggestions">
      {visibleSuggestions.map((suggestion) => (
        <button
          key={suggestion.id}
          className="suggestion-chip"
          onClick={() => handleSuggestionClick(suggestion.text)}
          onKeyDown={(e) => handleKeyDown(e, suggestion.text)}
          type="button"
          tabIndex={0}
          aria-label={`Send message: ${suggestion.text}`}
        >
          {suggestion.text}
        </button>
      ))}
    </div>
  )
}