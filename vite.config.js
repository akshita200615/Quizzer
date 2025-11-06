import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This tells Vite that your app will live in a sub-folder
  // on GitHub, like .../Quizzer/
  base: '/Quizzer/',
})