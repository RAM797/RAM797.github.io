import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed at the user-site root (https://ram797.github.io), so base is '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 2048,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
        },
      },
    },
  },
})
