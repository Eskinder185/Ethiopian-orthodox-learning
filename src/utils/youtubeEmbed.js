import { extractYouTubeId } from './extractYouTubeId.js'

/**
 * Canonical watch URL for opening in a new tab.
 * @param {string} videoId
 * @returns {string}
 */
export function getYouTubeWatchUrl(videoId) {
  if (!videoId || typeof videoId !== 'string') return ''
  return `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`
}

/**
 * Embed URL for iframe (no autoplay; modest branding via origin if needed later).
 * @param {string} videoId
 * @returns {string}
 */
export function getYouTubeEmbedUrl(videoId) {
  if (!videoId || typeof videoId !== 'string') return ''
  return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`
}

/**
 * Parse any supported YouTube URL or raw id → 11-char id or null.
 * Re-exports logic from extractYouTubeId for chant library consumers.
 */
export { extractYouTubeId }
