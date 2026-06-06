const DEFAULT_SITE_ORIGIN = 'https://netpro.africa'

function stripTrailingSlashes(value: string) {
  return value.replace(/\/+$/, '')
}

export function normalizeBasePath(value?: string) {
  const rawValue = value?.trim() || '/'

  if (rawValue === '/') {
    return '/'
  }

  const trimmedValue = rawValue.replace(/^\/+|\/+$/g, '')

  return trimmedValue ? `/${trimmedValue}/` : '/'
}

export const siteOrigin = stripTrailingSlashes(import.meta.env.VITE_SITE_ORIGIN || DEFAULT_SITE_ORIGIN)
export const appBasePath = normalizeBasePath(import.meta.env.BASE_URL || import.meta.env.VITE_APP_BASE_PATH || '/')
export const routerBasePath = appBasePath === '/' ? '/' : stripTrailingSlashes(appBasePath)

export function withBasePath(path: string) {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('data:')) {
    return path
  }

  const cleanPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`

  if (appBasePath === '/') {
    return cleanPath
  }

  if (cleanPath === '/') {
    return routerBasePath
  }

  return `${routerBasePath}${cleanPath}`
}

export function assetUrl(path: string) {
  return withBasePath(path)
}

export function absoluteUrl(path: string) {
  const resolvedPath = withBasePath(path)

  return `${siteOrigin}${resolvedPath === '/' ? '' : resolvedPath}`
}
