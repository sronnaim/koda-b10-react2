import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindCss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindCss()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
