# Development Guide

## Repository Structure

This is a **Turbo monorepo** for AI-powered front-end tools. The structure is designed to support multiple related packages with shared build tools and workflows.

```
ai-front-tools/
├── packages/                 # Individual packages
│   └── n8n-chat-embed/      # Main chat widget package
├── examples/                 # Usage examples and testing
├── turbo.json               # Turbo configuration
├── package.json             # Root workspace configuration
├── CLAUDE.md               # Claude documentation
├── DEVELOPMENT.md          # This file
└── README.md               # Project overview
```

## Development Workflow

### Prerequisites

- Node.js 18+ 
- npm 9+
- Git

### Setup

```bash
# Clone repository
git clone <repository-url>
cd ai-front-tools

# Install dependencies (root + all packages)
npm install

# Start development server for n8n-chat-embed
cd packages/n8n-chat-embed
npm run dev
```

### Available Scripts

**Root level (affects all packages):**
```bash
npm run build        # Build all packages
npm run clean        # Clean all dist folders
npm run lint         # Lint all packages
npm run test         # Test all packages
```

**Package level (n8n-chat-embed):**
```bash
npm run dev          # Development server with HMR
npm run build        # Library build (ESM + UMD + types)
npm run build:cdn    # CDN build (standalone with React)
npm run lint         # ESLint + TypeScript checks
npm run test         # Jest test runner
npm run clean        # Remove dist folder
```

## Build System

### Dual Build Strategy

Each package supports **dual distribution**:

1. **Library Build** (`npm run build`)
   - ESM module for modern bundlers
   - UMD module for legacy support  
   - TypeScript declarations
   - External React/ReactDOM (peer dependencies)

2. **CDN Build** (`npm run build:cdn`)
   - Standalone UMD with React bundled
   - Direct browser usage (no bundler needed)
   - Larger file size but zero dependencies

### Build Configuration

**Library Build** (`vite.config.ts`):
```typescript
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
```

**CDN Build** (`vite.cdn.config.ts`):
```typescript
export default defineConfig({
  build: {
    lib: {
      entry: 'src/cdn.tsx',
      formats: ['umd']
    },
    rollupOptions: {
      external: [], // Bundle everything
    }
  }
})
```

## Package Architecture

### n8n-chat-embed Structure

```
src/
├── components/           # React components
│   ├── ChatEmbed.tsx    # Main component with mobile detection
│   ├── MessageBubble.tsx # Individual message rendering
│   ├── FileUpload.tsx   # Drag-and-drop file handling
│   ├── MediaPreview.tsx # File preview component  
│   └── TypingIndicator.tsx # Bot typing animation
├── utils/
│   └── mobile.ts        # Mobile detection and keyboard handling
├── types.ts             # TypeScript interfaces
├── styles.css           # Mobile-first CSS with custom properties
├── index.ts             # Library entry point
├── cdn.tsx              # CDN entry point with React rendering
└── cdn-direct.ts        # Direct global export for CDN
```

### Key Design Patterns

**Mobile-First CSS:**
```css
/* Default styles are for mobile */
.chat-embed {
  width: 100vw;
  height: 100vh;
}

/* Desktop overrides */
@media (min-width: 768px) {
  .chat-embed {
    width: 350px;
    height: 500px;
  }
}
```

**CSS Custom Properties for Theming:**
```css
:root {
  --chat-primary: #007bff;
  --chat-background: #ffffff;
  --chat-mobile-padding: 16px;
  --chat-safe-area-bottom: env(safe-area-inset-bottom, 0px);
}
```

**Component Composition:**
```tsx
<ChatEmbed>
  <Header />
  <Messages>
    {messages.map(msg => <MessageBubble />)}
    <TypingIndicator />
  </Messages>
  <InputArea>
    <FileUpload />
    <TextInput />
    <SendButton />
  </InputArea>
</ChatEmbed>
```

## Mobile Development

### Device Detection Strategy

The mobile implementation uses a **multi-layered detection approach**:

1. **Basic Detection**: User agent + touch capability
2. **Feature Detection**: Visual Viewport API, Virtual Keyboard API
3. **Runtime Detection**: Keyboard state, viewport changes

### Keyboard Handling Architecture

**iOS Safari (Primary Challenge):**
- Uses Visual Viewport API when available
- Fallback to window resize events
- Focus/blur event correlation
- Custom `IOSKeyboardDetector` class

**Modern Browsers:**
- Virtual Keyboard API (Chrome 94+)
- Opt out of automatic viewport behavior
- Direct keyboard geometry access
- Custom `VirtualKeyboardHandler` class

**Fallback Strategy:**
- Window resize detection with debouncing
- Height difference analysis (>150px = keyboard open)
- Input focus/blur correlation

### CSS Mobile Patterns

**Safe Area Handling:**
```css
.chat-embed {
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: max(env(safe-area-inset-bottom), var(--chat-keyboard-height));
}
```

**Touch Target Optimization:**
```css
:root {
  --chat-min-touch-target: 44px; /* Apple HIG requirement */
}

.chat-embed__send-button {
  min-width: var(--chat-min-touch-target);
  min-height: var(--chat-min-touch-target);
}
```

**Keyboard-Aware Layouts:**
```css
.chat-embed--keyboard-open {
  height: calc(var(--chat-viewport-height) - var(--chat-keyboard-height));
  transition: height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

## Testing Strategy

### Mobile Testing

**Test File:** `examples/mobile-responsive-test.html`

Features:
- Real device information display
- Live keyboard state monitoring
- Multiple positioning modes
- Debug viewport metrics
- Touch interaction verification

**Testing Checklist:**
- [ ] iOS Safari (real device, not simulator)
- [ ] Android Chrome
- [ ] Desktop Chrome/Firefox/Safari
- [ ] Landscape/portrait rotation
- [ ] Virtual keyboard appearance/dismissal
- [ ] Safe area handling on notched devices
- [ ] Touch target accessibility

### Integration Testing

**Example Files:**
- `examples/cdn-example.html` - Basic CDN integration
- `examples/react-example.html` - React component usage
- `examples/mobile-responsive-test.html` - Comprehensive mobile testing

**n8n Testing:**
- Session persistence across page reloads
- File upload handling (FormData vs JSON)
- Response parsing (output/response/message/text)
- Error handling and retry logic

## Publishing Workflow

### Version Management

**Beta Releases:**
```bash
# Update version in package.json
npm version prerelease --preid=beta

# Build both distributions
npm run build && npm run build:cdn

# Publish to npm with beta tag
npm publish --tag beta
```

**Production Releases:**
```bash
# Update to stable version
npm version minor # or major/patch

# Build and publish
npm run build && npm run build:cdn
npm publish
```

### CDN Distribution

**Automatic via unpkg.com:**
- Library: `https://unpkg.com/n8n-chat-embed-widget@latest/cdn/`
- CSS: `https://unpkg.com/n8n-chat-embed-widget@latest/cdn/style.css`
- JS: `https://unpkg.com/n8n-chat-embed-widget@latest/cdn/n8n-chat-embed.umd.js`

### Quality Gates

Before publishing:
1. ✅ TypeScript compilation without errors
2. ✅ ESLint passes without warnings
3. ✅ Both build outputs generated successfully
4. ✅ CDN example loads and functions
5. ✅ Mobile test passes on real iOS device
6. ✅ n8n integration test passes

## Adding New Packages

### Package Creation Template

```bash
# Create new package directory
mkdir packages/new-package

# Initialize package.json
cd packages/new-package
npm init -y

# Add to root workspace
# Edit root package.json:
{
  "workspaces": [
    "packages/*"
  ]
}

# Add Turbo configuration
# Edit turbo.json:
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}
```

### Shared Dependencies

**Development Tools** (managed at root level):
- TypeScript
- ESLint + configs  
- Vite + plugins
- Jest (if needed)

**Runtime Dependencies** (per package):
- React (peer dependency pattern)
- Package-specific utilities

### Package Naming Convention

- **Scoped:** `@ai-front-tools/package-name` (if npm organization available)
- **Public:** `ai-package-name-widget` (current pattern)

### Required Files per Package

```
packages/new-package/
├── src/
│   ├── index.ts         # Main entry point
│   ├── components/      # React components (if applicable)
│   ├── utils/           # Utility functions
│   ├── types.ts         # TypeScript definitions
│   └── styles.css       # Component styles (if applicable)
├── package.json         # Package configuration
├── tsconfig.json        # TypeScript config (extends root)
├── vite.config.ts       # Build configuration
├── README.md            # Package documentation
└── examples/            # Usage examples
```

## Troubleshooting

### Common Build Issues

**TypeScript Errors:**
```bash
# Clear TypeScript cache
npx tsc --build --clean

# Regenerate declarations
npm run build
```

**Module Resolution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Vite Build Issues:**
```bash
# Clear Vite cache
rm -rf dist .vite
npm run build
```

### Mobile Testing Issues

**iOS Simulator vs Real Device:**
- Keyboard behavior differs significantly
- Always test on real iOS Safari
- Visual Viewport API may not work in simulator

**Android Chrome Issues:**
- Virtual Keyboard API availability varies
- Test across different Android versions
- Check Chrome flags for experimental features

### CDN Integration Issues

**Global Object Not Available:**
```javascript
// Check if loaded
if (typeof N8nChatEmbed === 'undefined') {
  console.error('CDN script not loaded properly');
}

// Wait for DOM + script
document.addEventListener('DOMContentLoaded', () => {
  if (window.N8nChatEmbed) {
    // Safe to use
  }
});
```

**CSS Not Loading:**
```html
<!-- Ensure CSS loads before JS -->
<link rel="stylesheet" href="...style.css">
<script src="...n8n-chat-embed.umd.js"></script>
```

## Performance Considerations

### Bundle Size Optimization

**Library Build:** ~42KB (external React)
**CDN Build:** ~488KB (bundled React)

**Optimization Strategies:**
- Tree shaking enabled
- Production builds only
- External dependencies in library build
- CSS compression and minification

### Runtime Performance

**Mobile Optimizations:**
- Lazy loading of components
- Debounced resize/scroll listeners  
- Efficient re-render patterns with React.memo
- Touch event passive listeners

**Memory Management:**
- Cleanup event listeners on unmount
- Clear timeouts and intervals
- Remove DOM nodes properly

## Security Considerations

### File Upload Security

**Client-Side Validation:**
- File type checking (MIME + extension)
- File size limits
- Malicious file detection patterns

**Server-Side Requirements:**
- Always validate files server-side
- Scan for malware
- Limit file storage and processing

### XSS Prevention

**Input Sanitization:**
- All user input is treated as text
- No `dangerouslySetInnerHTML` usage
- Proper React escaping patterns

**Content Security Policy:**
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' unpkg.com;">
```

---

This guide provides comprehensive information for maintaining and extending the AI front-end tools repository. Keep it updated as new packages are added and patterns evolve.