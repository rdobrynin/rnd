import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import * as path from 'path';

// https://vite.dev/config/
// @ts-ignore
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ts-ignore
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
  },
})
