import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This tells Vite your app will live at: akshita200615.github.io/Quizzer/
  base: '/Quizzer/',
})