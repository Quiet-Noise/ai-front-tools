import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'cdn',
    lib: {
      entry: 'src/cdn.tsx',
      name: 'N8nChatEmbed',
      formats: ['umd'],
      fileName: 'n8n-chat-embed',
    },
    rollupOptions: {
      output: {
        // Bundle React and ReactDOM for standalone usage
        globals: {},
      },
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
})