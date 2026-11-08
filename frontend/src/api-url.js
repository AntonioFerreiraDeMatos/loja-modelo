const LOCAL_API_URL = 'http://localhost:3000/api'
import { LOJA } from './loja.config.js'

const PRODUCTION_API_URL = LOJA.apiUrl

export function resolveApiUrl(configuredUrl, isDevelopment) {
  const configured = typeof configuredUrl === 'string'
    ? configuredUrl.trim()
    : ''
  const pointsToLoopback = /^https?:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?(?:\/|$)/i
    .test(configured)

  const baseUrl = configured && (!pointsToLoopback || isDevelopment)
    ? configured
    : isDevelopment
      ? LOCAL_API_URL
      : PRODUCTION_API_URL

  return baseUrl.replace(/\/+$/, '')
}
