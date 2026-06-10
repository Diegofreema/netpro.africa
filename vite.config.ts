import { defineConfig, loadEnv } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function normalizeBasePath(value?: string) {
  const rawValue = value?.trim() || '/'

  if (rawValue === '/') {
    return '/'
  }

  const trimmedValue = rawValue.replace(/^\/+|\/+$/g, '')

  return trimmedValue ? `/${trimmedValue}/` : '/'
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: normalizeBasePath(env.VITE_APP_BASE_PATH),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return;
            if (id.includes('react-dom') || id.includes('/react/') || id.includes('/scheduler/')) return 'vendor-react';
            if (id.includes('@tanstack')) return 'vendor-tanstack';
            if (id.includes('/three/') || id.includes('/ogl/') || id.includes('/gsap/')) return 'vendor-3d';
            if (id.includes('/motion/')) return 'vendor-motion';
          },
        },
      },
    },
  }
})
