import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "5173-gayathrig578-bdlwebsite-byvpflqyyil.ws-us121.gitpod.io"
    ],
  },
})
