/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'chat-primary': 'var(--chat-primary)',
        'chat-background': 'var(--chat-background)',
        'chat-text': 'var(--chat-text)',
        'chat-user-bubble': 'var(--chat-user-bubble)',
        'chat-bot-bubble': 'var(--chat-bot-bubble)'
      },
      spacing: {
        'chat-padding': 'var(--chat-padding)',
        'chat-header-height': 'var(--chat-header-height)',
        'chat-min-touch-target': 'var(--chat-min-touch-target)'
      },
      borderRadius: {
        'chat': 'var(--chat-border-radius)'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false // Disable Tailwind's CSS reset to avoid conflicts
  }
}