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
  }
})
