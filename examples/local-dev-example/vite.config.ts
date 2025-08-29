import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: ['..', '../..', '../../..']
    }
  },
  optimizeDeps: {
    exclude: ['n8n-chat-embed-widget']
  },
  resolve: {
    alias: {
      'n8n-chat-embed-widget': '../../../packages/n8n-chat-embed/src'
    }
  }
})