/**
 * Load the YouTube IFrame Player API once (singleton).
 * @returns {Promise<void>}
 */
export function loadYouTubeIframeAPI() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.YT && window.YT.Player) return Promise.resolve()

  if (!window.__ytIframeApiPromise) {
    window.__ytIframeApiPromise = new Promise((resolve) => {
      const previous = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = function () {
        if (typeof previous === 'function') previous()
        resolve()
      }

      const existing = document.querySelector('script[src*="youtube.com/iframe_api"]')
      if (!existing) {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        tag.async = true
        document.head.appendChild(tag)
      } else {
        const poll = setInterval(() => {
          if (window.YT && window.YT.Player) {
            clearInterval(poll)
            resolve()
          }
        }, 50)
        setTimeout(() => {
          clearInterval(poll)
          resolve()
        }, 10000)
      }
    })
  }

  return window.__ytIframeApiPromise
}
