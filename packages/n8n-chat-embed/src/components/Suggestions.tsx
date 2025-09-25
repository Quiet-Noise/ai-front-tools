import React from 'react'

export interface SuggestionsProps {
  suggestions: string[]
  onSuggestionClick: (suggestion: string) => void
}

export const Suggestions: React.FC<SuggestionsProps> = ({ suggestions, onSuggestionClick }) => {
  if (!suggestions || suggestions.length === 0) {
    return null
  }

  return (
    <div className="chat-suggestions">
      <div className="chat-suggestions__list">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="chat-suggestions__item"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}