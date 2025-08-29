# Claude Code Repository Documentation

## Repository Overview

This is a **monorepo for AI-powered front-end tools** using Turbo and npm workspaces. The primary focus is creating configurable, production-ready React components for AI chat interfaces.

## Current Packages

### 1. n8n-chat-embed-widget (`packages/n8n-chat-embed/`)

**Status**: ✅ Production Ready (v1.0.0-beta.5)

A fully-featured, mobile-responsive chat embed widget specifically designed for n8n webhook integration.

**Key Features**:
- 📱 **Mobile-First Design** with comprehensive iOS Safari keyboard handling
- 🎯 **n8n Integration** with proper sessionId/chatInput format
- 📎 **Multi-Media Upload** support (images, videos, audio, documents)
- 🎨 **Highly Configurable** theming and positioning
- 🌐 **Dual Distribution** (npm package + CDN-ready JavaScript)
- ♿ **Accessibility** compliant with proper ARIA labels
- 🚀 **Performance Optimized** with lazy loading and efficient re-renders

**Architecture**:
- React 18 + TypeScript
- Vite build system (dual output: ESM + UMD)
- Mobile detection utilities with Visual Viewport API
- CSS custom properties for theming
- Comprehensive error handling and loading states

## Important Technical Details

### n8n Webhook Integration

**Required Request Format**:
```javascript
{
  sessionId: string,    // Persistent session identifier
  chatInput: string     // User message content
}
```

**Response Parsing**:
The widget checks response fields in this order:
1. `result.output` (n8n's standard output field)
2. `result.response`
3. `result.message`
4. `result.text`

**Current Webhook URL**: `https://quietnoise.app.n8n.cloud/webhook/6652abaf-27d7-482b-b2dd-9679dd2cbff0/chat`

### Mobile Responsiveness Implementation

The widget implements **comprehensive mobile responsiveness** with special attention to iOS Safari's unique viewport behavior:

**Key Technologies**:
- **Visual Viewport API**: Modern browsers keyboard detection
- **iOS Keyboard Detection**: Custom implementation for Safari
- **CSS Environment Variables**: Safe area insets for notched devices
- **Dynamic Viewport Heights**: 100dvh support with fallbacks

**Mobile Classes Applied**:
- `.chat-embed--mobile`: General mobile optimizations
- `.chat-embed--ios`: iOS-specific styles
- `.chat-embed--android`: Android-specific styles  
- `.chat-embed--keyboard-open`: Active when virtual keyboard is visible

### Build System

**Commands**:
```bash
npm run build        # Library build (ESM + UMD)
npm run build:cdn    # CDN build (standalone with React bundled)
npm run dev          # Development server
npm run lint         # TypeScript/ESLint checks
```

**Outputs**:
- `dist/` - npm package files
- `cdn/` - CDN-ready files with React bundled

## Testing & Examples

### Mobile Testing
**File**: `examples/mobile-responsive-test.html`

Comprehensive mobile testing interface with:
- Device detection and capabilities
- Real-time keyboard status monitoring  
- Multiple chat positioning modes
- Debug panel with viewport metrics
- Touch/keyboard interaction tests

### CDN Examples
**Files**: `examples/cdn-example.html`, `examples/react-example.html`

Production examples showing both CDN and React integration methods.

## Development Workflow

### Publishing Process
1. Update version in `package.json`
2. Run `npm run build && npm run build:cdn`
3. Run `npm publish --tag beta` for beta releases
4. Test with CDN links: `https://unpkg.com/n8n-chat-embed-widget@{version}/cdn/`

### Version History
- **v1.0.0-beta.5**: Mobile responsiveness with keyboard handling
- **v1.0.0-beta.4**: n8n integration fixes (sessionId/chatInput format)
- **v1.0.0-beta.3**: CDN build fixes and button functionality
- **v1.0.0-beta.2**: Media upload and theming improvements
- **v1.0.0-beta.1**: Initial release

## Architecture Decisions

### Why Turbo Monorepo?
- Enables multiple related packages with shared tooling
- Efficient builds with caching
- Simplified dependency management across packages

### Why Dual Build Output?
- **Library Build**: For npm installations in React projects
- **CDN Build**: For direct browser usage without build tools

### Why Mobile-First CSS?
- Ensures optimal mobile experience (primary use case)
- Progressive enhancement for larger screens
- Better performance on mobile devices

### Why Custom Mobile Detection?
- Browser detection alone is insufficient for mobile optimization
- Keyboard handling requires different approaches per platform
- Visual Viewport API support varies across browsers

## File Structure

```
packages/n8n-chat-embed/
├── src/
│   ├── components/         # React components
│   │   ├── ChatEmbed.tsx  # Main widget component
│   │   ├── MessageBubble.tsx
│   │   ├── FileUpload.tsx
│   │   ├── MediaPreview.tsx
│   │   └── TypingIndicator.tsx
│   ├── utils/
│   │   └── mobile.ts      # Mobile detection & keyboard handling
│   ├── styles.css         # Mobile-first CSS with responsive design
│   ├── types.ts           # TypeScript interfaces
│   ├── index.ts           # Library exports
│   ├── cdn.tsx           # CDN entry point
│   └── cdn-direct.ts     # Direct global export
├── examples/              # Usage examples and testing
├── dist/                  # Built library files
├── cdn/                   # Built CDN files
├── package.json
├── tsconfig.json
├── vite.config.ts         # Library build config
└── vite.cdn.config.ts     # CDN build config
```

## Future Package Ideas

Based on the established patterns, future packages could include:
- **openai-chat-embed**: Similar widget for OpenAI API
- **anthropic-chat-embed**: Claude API integration
- **ai-chat-analytics**: Usage tracking and analytics
- **ai-voice-interface**: Voice input/output components
- **ai-workflow-builder**: Visual workflow creation tools

## Common Patterns Established

1. **Mobile-First Development**: All components should prioritize mobile UX
2. **Dual Distribution**: Provide both npm and CDN distribution methods
3. **TypeScript-First**: Full type safety across all packages
4. **Accessibility**: WCAG compliance for all interactive components  
5. **Performance**: Optimize for bundle size and runtime performance
6. **Testing**: Provide comprehensive examples and testing interfaces

## Troubleshooting Common Issues

### CDN Integration Issues
- Ensure both JS and CSS files are loaded
- Check console for global object availability (`window.N8nChatEmbed`)
- Verify webhook URL is accessible

### Mobile Keyboard Issues
- Test on actual iOS Safari (simulator behavior differs)
- Check Visual Viewport API support in target browsers
- Verify viewport meta tag includes `interactive-widget=resizes-content`

### n8n Integration Issues
- Ensure webhook accepts both FormData (files) and JSON (text-only)
- Check response format (should include `output` field)
- Verify CORS configuration on n8n webhook

## Resources

- **NPM Package**: `n8n-chat-embed-widget@beta`
- **CDN**: `https://unpkg.com/n8n-chat-embed-widget@latest/cdn/`
- **GitHub Issues**: Report issues with mobile responsiveness or n8n integration
- **Testing URL**: Use `mobile-responsive-test.html` for comprehensive mobile testing

---

**Last Updated**: August 2024  
**Current Maintainer**: Claude (AI Assistant)  
**Package Status**: Production Ready (Beta)