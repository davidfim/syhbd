import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the app works on GitHub Pages at any path (e.g. .../syhbd/ or .../syaibd/)
  base: './',
})
