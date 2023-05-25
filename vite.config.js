import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


export default defineConfig({
  base: "/Quiz-robusto-react",
  plugins: [react()],
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  }


})
