import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithms: ['gzip', 'brotliCompress'], threshold: 1024 }),
  ],
  build: {
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'vendor-react-dom'
            if (id.includes('react')) return 'vendor-react'
          }
        },
      },
    },
  },
})
