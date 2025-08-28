# n8n Chat Embed Widget

A production-ready, mobile-responsive chat widget specifically designed for n8n webhook integration. Features comprehensive mobile support, multi-media uploads, and extensive customization options.

## ✨ Features

- 📱 **Mobile-First Design** - Comprehensive iOS Safari keyboard handling and responsive design
- 🎨 **Fully Configurable** - Customize colors, themes, positioning, and behavior
- 📎 **Multi-Media Upload** - Support for images, videos, audio, and documents with drag-and-drop
- 🌙 **Dark/Light Themes** - Built-in theme support with custom color options
- 🔌 **Dual Distribution** - Use as React component or via CDN (no build required)
- ⚡ **TypeScript Support** - Full type safety and IntelliSense
- 🎯 **N8n Optimized** - Proper sessionId/chatInput format, handles n8n response structure
- ♿ **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation
- 🚀 **Performance** - Optimized for mobile networks and lower-powered devices

## 🚀 Quick Start

### CDN Usage (Recommended)

**Method 1: Auto-initialization**
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, interactive-widget=resizes-content">
    <link rel="stylesheet" href="https://unpkg.com/n8n-chat-embed-widget@latest/cdn/style.css">
</head>
<body>
    <!-- Auto-initializes as floating chat -->
    <script 
        src="https://unpkg.com/n8n-chat-embed-widget@latest/cdn/n8n-chat-embed.umd.js"
        data-webhook-url="your-n8n-webhook-url"
        data-auto-init="true"
        data-title="AI Assistant"
        data-theme="light"
    ></script>
</body>
</html>
```

**Method 2: Manual initialization**
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, interactive-widget=resizes-content">
    <link rel="stylesheet" href="https://unpkg.com/n8n-chat-embed-widget@latest/cdn/style.css">
</head>
<body>
    <div id="chat-container"></div>
    
    <script src="https://unpkg.com/n8n-chat-embed-widget@latest/cdn/n8n-chat-embed.umd.js"></script>
    <script>
        N8nChatEmbed.init('chat-container', {
            n8nWebhookUrl: 'your-n8n-webhook-url',
            title: 'AI Assistant',
            enableFileUpload: true
        });
    </script>
</body>
</html>
```

### NPM Installation

```bash
npm install n8n-chat-embed-widget@latest
```

```jsx
import { ChatEmbed } from 'n8n-chat-embed-widget';
import 'n8n-chat-embed-widget/dist/style.css';

function App() {
    return (
        <ChatEmbed 
            config={{
                n8nWebhookUrl: 'your-n8n-webhook-url',
                title: 'AI Assistant',
                enableFileUpload: true
            }}
        />
    );
}
```

## 📱 Mobile-First Design

This widget is built **mobile-first** with comprehensive support for:

- **iOS Safari Keyboard Handling**: Proper viewport adjustment when virtual keyboard appears
- **Safe Area Support**: Handles iPhone X+ notches and other device-specific areas  
- **Touch Optimization**: 44px minimum touch targets, optimized gesture handling
- **Responsive Breakpoints**: Seamless experience from phones to desktops
- **Performance**: Optimized for mobile networks and lower-powered devices

## Configuration Options

```typescript
interface ChatConfig {
  n8nWebhookUrl: string              // Required: Your n8n webhook URL
  title?: string                     // Chat widget title
  subtitle?: string                  // Chat widget subtitle
  placeholder?: string               // Input placeholder text
  theme?: 'light' | 'dark' | 'auto' // Theme selection
  colors?: {                         // Custom color scheme
    primary?: string
    background?: string
    userBubble?: string
    botBubble?: string
    text?: string
  }
  maxFileSize?: number              // Max file size in bytes (default: 10MB)
  allowedFileTypes?: string[]       // Allowed MIME types
  showTypingIndicator?: boolean     // Show typing animation
  showTimestamps?: boolean          // Show message timestamps
  enableFileUpload?: boolean        // Enable file uploads
  maxFiles?: number                 // Max files per message
  position?: 'bottom-right' | 'bottom-left' | 'inline'
  width?: number                    // Widget width in pixels
  height?: number                   // Widget height in pixels
  zIndex?: number                   // CSS z-index
}
```

## File Upload Support

The component supports multiple file types:

- **Images**: JPG, PNG, GIF, WebP, SVG
- **Videos**: MP4, WebM, MOV, AVI
- **Audio**: MP3, WAV, OGG, M4A
- **Documents**: PDF, DOC, DOCX, TXT

Files are automatically validated for size and type, with preview generation for images and videos.

## 🔧 n8n Integration

### Webhook Request Format

The widget sends requests in the format n8n expects:

```javascript
// Text-only messages
{
  "sessionId": "session_1691234567_abc123",
  "chatInput": "Hello, how can you help me?"
}

// Messages with files (sent as FormData)  
{
  "sessionId": "session_1691234567_abc123",
  "chatInput": "Here are some images",
  "file_0": File,
  "file_1": File
}
```

### Response Handling

The widget parses n8n responses in this order:
1. `response.output` (n8n standard output)
2. `response.response`
3. `response.message`
4. `response.text`

### Session Management

- Automatic session ID generation and persistence
- Stored in `localStorage` as `n8n_session_id`  
- Maintains conversation context across page reloads

## Styling

The component includes comprehensive CSS with CSS custom properties for easy theming:

```css
.chat-embed {
  --chat-primary: #007bff;
  --chat-background: #ffffff;
  --chat-user-bubble: #007bff;
  --chat-bot-bubble: #f1f3f4;
  --chat-text: #333333;
}
```

## Events

```typescript
// Message sent/received
onMessage?: (message: ChatMessage) => void

// Error handling
onError?: (error: Error) => void

// File upload
onFileUpload?: (files: MediaFile[]) => void
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build

# Build CDN version
npm run build:cdn

# Lint code
npm run lint
```

## License

MIT