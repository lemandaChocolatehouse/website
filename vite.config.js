import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://chocolate-house-backend-main.vercel.app',
        changeOrigin: true,
        secure: false, // if needed to avoid SSL issues
        rewrite: (path) => path.replace(/^\/api/, ''), // Adjust this based on your API routes
      },
    },
  },
})
