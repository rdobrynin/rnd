import { sentryVitePlugin } from '@sentry/vite-plugin';
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import scss from 'sass';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    //   @todo enable if upgrade billing plan on Sentry
    // sentryVitePlugin({
    //   org: 'unith-96',
    //   project: 'customer-panel-frontend',
    // }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        implementation: scss,
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      enabled: true,
      reporter: ['text'],
    },
  },

  server: {
    host: '0.0.0.0',
  },

  // build: {
  //   sourcemap: true,
  // },
});
