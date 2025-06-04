import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extends: {
      colors: {
        // grape : "rgba(var(--grape))"
        grape: "rgba(114, 35, 204)",
      }
    }
  },
  plugins: [react(), tailwindcss()],
})
