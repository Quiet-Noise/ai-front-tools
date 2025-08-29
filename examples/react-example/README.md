# N8n Chat Embed - React Example

This is a comprehensive React example showcasing the n8n chat embed widget with live webhook integration.

## 🚀 Features

- **Live N8n Integration** - Connected to real webhook endpoint
- **Multiple Themes** - Light, dark, custom branded, and mobile-optimized
- **Interactive Demo** - Switch between different configurations
- **Floating Chat** - Toggle floating chat widget
- **Activity Logging** - Real-time message and event tracking
- **Responsive Design** - Works on desktop and mobile
- **TypeScript Support** - Full type safety

## 📦 Installation

```bash
npm install
```

## 🔧 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔗 Live Webhook

This example is connected to:
```
https://quietnoise.app.n8n.cloud/webhook/6652abaf-27d7-482b-b2dd-9679dd2cbff0/chat
```

Your messages will be processed by a real n8n workflow!

## 🎨 Demo Configurations

### Light Theme
- Clean, modern interface
- File uploads enabled (5 max)
- Timestamps shown
- Blue primary color

### Dark Theme
- Dark mode styling
- Enhanced file support (10 max)
- Typing indicators
- Purple accent color

### Custom Branded
- Custom color scheme
- Branded styling
- Limited file uploads (3 max)
- Custom messaging

### Mobile Optimized
- Mobile-friendly design
- Touch-optimized interactions
- Red accent color
- Compact layout

## 📊 Features Demonstrated

- **Message Handling** - onMessage callback with logging
- **Error Handling** - onError callback with alerts
- **File Upload Tracking** - onFileUpload callback
- **Dynamic Configuration** - Switching between configs
- **Floating Widget** - Bottom-right positioned chat
- **Real-time Updates** - Live activity log

## 🛠️ Configuration Options

```typescript
interface ChatConfig {
  n8nWebhookUrl: string              // Your n8n webhook URL
  title?: string                     // Chat widget title
  subtitle?: string                  // Chat widget subtitle
  theme?: 'light' | 'dark' | 'auto' // Theme selection
  position?: 'bottom-right' | 'bottom-left' | 'inline'
  width?: number                     // Widget width
  height?: number                    // Widget height
  enableFileUpload?: boolean         // Enable file uploads
  maxFiles?: number                  // Max files per message
  showTypingIndicator?: boolean      // Show typing animation
  showTimestamps?: boolean           // Show message timestamps
  colors?: {                         // Custom colors
    primary?: string
    background?: string
    userBubble?: string
    botBubble?: string
    text?: string
  }
}
```

## 🎯 Usage in Your App

```tsx
import { ChatEmbed, ChatConfig } from 'n8n-chat-embed-widget'

function MyComponent() {
  const config: ChatConfig = {
    n8nWebhookUrl: 'your-webhook-url',
    title: 'Support Chat',
    theme: 'light',
    enableFileUpload: true
  }

  return (
    <ChatEmbed
      config={config}
      onMessage={(message) => console.log(message)}
      onError={(error) => console.error(error)}
      onFileUpload={(files) => console.log(files)}
    />
  )
}
```

## 🌐 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Mobile Support

The widget is fully responsive and includes:
- Touch-friendly interactions
- Optimized file upload on mobile
- Responsive breakpoints
- Mobile-specific styling

## 🔧 Customization

The example shows how to:
- Customize colors and themes
- Handle different positions
- Configure file upload settings
- Implement event callbacks
- Switch configurations dynamically
- Add floating widgets

## 🚀 Production Notes

For production use:
1. Replace the webhook URL with your own
2. Configure appropriate CORS settings
3. Set up proper error handling
4. Add authentication if needed
5. Test on various devices and browsers