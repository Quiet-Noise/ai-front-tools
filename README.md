# AI Front Tools

A monorepo of production-ready, mobile-first React components for AI-powered user interfaces.

## 🎯 Mission

Create high-quality, reusable components that make it easy to integrate AI chat functionality into web applications with excellent mobile experience and comprehensive customization options.

## 📦 Packages

### n8n-chat-embed-widget

**Status**: ✅ Production Ready (v1.0.0-beta.5)

A fully-featured, mobile-responsive chat widget specifically designed for n8n webhook integration.

```bash
npm install n8n-chat-embed-widget@beta
```

**Key Features:**
- 📱 **Mobile-First Design** with iOS Safari keyboard handling
- 🎨 **Highly Configurable** theming and positioning  
- 📎 **Multi-Media Upload** support with drag-and-drop
- 🌐 **Dual Distribution** (npm + CDN)
- 🎯 **n8n Optimized** integration

[📖 Full Documentation →](./packages/n8n-chat-embed/README.md)

## 🚀 Quick Start

### CDN Usage (Zero Setup)

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, interactive-widget=resizes-content">
    <link rel="stylesheet" href="https://unpkg.com/n8n-chat-embed-widget@latest/cdn/style.css">
</head>
<body>
    <div id="chat"></div>
    <script src="https://unpkg.com/n8n-chat-embed-widget@latest/cdn/n8n-chat-embed.umd.js"></script>
    <script>
        N8nChatEmbed.render('chat', {
            n8nWebhookUrl: 'your-n8n-webhook-url',
            title: 'AI Assistant'
        });
    </script>
</body>
</html>
```

### React Integration

```jsx
import { ChatEmbed } from 'n8n-chat-embed-widget';
import 'n8n-chat-embed-widget/dist/style.css';

function App() {
    return (
        <ChatEmbed 
            config={{
                n8nWebhookUrl: 'your-n8n-webhook-url',
                title: 'AI Assistant',
                enableFileUpload: true,
                theme: 'dark'
            }}
        />
    );
}
```

## 🏗️ Architecture

### Monorepo Structure

```
ai-front-tools/
├── packages/                # Individual npm packages
│   └── n8n-chat-embed/    # Main chat widget
├── examples/               # Usage examples and testing  
├── turbo.json             # Build orchestration
└── package.json           # Workspace configuration
```

### Technology Stack

- **Build System**: Turbo + Vite
- **Frontend**: React 18 + TypeScript
- **Styling**: Mobile-first CSS with custom properties
- **Distribution**: Dual builds (ESM/UMD + CDN)
- **Quality**: ESLint + TypeScript + Comprehensive testing

### Design Principles

1. **Mobile-First**: Optimized for mobile devices, enhanced for desktop
2. **Accessibility**: WCAG 2.1 compliant with proper ARIA labels
3. **Performance**: Optimized bundle sizes and runtime efficiency
4. **Developer Experience**: Full TypeScript support with comprehensive docs
5. **Flexibility**: Highly configurable without compromising defaults

## 📱 Mobile Excellence

### Advanced Mobile Features

- **iOS Safari Keyboard Handling**: Visual Viewport API + custom detection
- **Safe Area Support**: Proper insets for notched devices (iPhone X+)
- **Touch Optimization**: 44px minimum touch targets per Apple HIG
- **Responsive Design**: Fluid layouts across all screen sizes
- **Performance**: Optimized for mobile networks and lower-powered devices

### Cross-Browser Compatibility

| Feature | Chrome | Safari | Firefox | Edge |
|---------|--------|--------|---------|------|
| Basic Functionality | ✅ 88+ | ✅ 14+ | ✅ 85+ | ✅ 88+ |
| Visual Viewport API | ✅ 88+ | ✅ 13+ | ❌ | ✅ 88+ |
| Virtual Keyboard API | ✅ 94+ | ❌ | ❌ | ✅ 94+ |
| CSS Environment Variables | ✅ 69+ | ✅ 11.1+ | ✅ 65+ | ✅ 79+ |

## 🧪 Testing & Examples

### Comprehensive Testing Suite

- **Mobile Testing**: `examples/mobile-responsive-test.html`
  - Real device information and capabilities
  - Live keyboard detection and viewport monitoring
  - Multiple chat positioning modes
  - Debug panels with detailed metrics

- **Integration Examples**: 
  - CDN usage examples
  - React component integration
  - n8n webhook testing
  - File upload demonstrations

### Quality Assurance

- Real device testing (iOS Safari priority)
- Comprehensive browser compatibility testing
- Accessibility compliance verification
- Performance benchmarking
- Security validation

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone and install
git clone <repository-url>
cd ai-front-tools
npm install

# Start development
cd packages/n8n-chat-embed
npm run dev
```

### Build Commands

```bash
# Build all packages
npm run build

# Build specific package
cd packages/n8n-chat-embed
npm run build        # Library build
npm run build:cdn    # CDN build
```

### Publishing

```bash
# Beta release
npm version prerelease --preid=beta
npm run build && npm run build:cdn
npm publish --tag beta

# Production release  
npm version minor
npm run build && npm run build:cdn
npm publish
```

[📖 Detailed Development Guide →](./DEVELOPMENT.md)

## 🎨 Customization

### Theming System

The components use CSS custom properties for comprehensive theming:

```css
:root {
  --chat-primary: #007bff;
  --chat-background: #ffffff;  
  --chat-user-bubble: #007bff;
  --chat-bot-bubble: #f1f3f4;
  --chat-text: #333333;
  --chat-mobile-padding: 16px;
  --chat-safe-area-bottom: env(safe-area-inset-bottom, 0px);
}
```

### Configuration Options

Extensive configuration without losing sensible defaults:

- **Visual**: Colors, themes, dimensions, positioning
- **Functional**: File uploads, typing indicators, timestamps  
- **Mobile**: Responsive breakpoints, touch targets, keyboard handling
- **Integration**: Webhook URLs, session management, error handling

## 🚀 Roadmap

### Planned Packages

Based on established patterns:

- **openai-chat-embed**: OpenAI API integration
- **anthropic-chat-embed**: Claude API integration  
- **ai-chat-analytics**: Usage tracking and analytics
- **ai-voice-interface**: Voice input/output components
- **ai-workflow-builder**: Visual workflow creation tools

### Upcoming Features

- **Progressive Web App** support
- **Voice input/output** integration
- **Advanced file handling** (OCR, document parsing)
- **Multi-language** support
- **Advanced analytics** and session management

## 📖 Documentation

- [📘 Repository Overview](./CLAUDE.md) - Comprehensive guide for Claude/AI assistants
- [🔧 Development Guide](./DEVELOPMENT.md) - Technical architecture and workflows
- [📦 Package Documentation](./packages/n8n-chat-embed/README.md) - n8n widget specifics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`  
3. Test thoroughly (especially mobile)
4. Run quality checks: `npm run lint && npm run build`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Contribution Guidelines

- **Mobile-first development** required
- **Accessibility compliance** mandatory
- **TypeScript** for all new code
- **Comprehensive testing** including real devices
- **Documentation** updates for new features

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🔗 Links

- **n8n Chat Widget**: https://npmjs.com/package/n8n-chat-embed-widget
- **CDN Distribution**: https://unpkg.com/n8n-chat-embed-widget@latest/cdn/
- **Issues**: GitHub Issues
- **n8n Platform**: https://n8n.io/

---

**Built with ❤️ for the AI and automation community**

*Creating the building blocks for the next generation of AI-powered user interfaces*