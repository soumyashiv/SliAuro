import { useSyncExternalStore } from 'react'

export type Route = 'home' | 'product' | 'docs' | 'contact' | 'get-started'

const pages: Route[] = ['product', 'docs', 'contact', 'get-started']

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

function getSnapshot() {
  return window.location.hash
}

/** Reads the current page from the URL hash: "#product" -> "product". Anything unknown is the home page. */
export function useRoute(): Route {
  const hash = useSyncExternalStore(subscribe, getSnapshot, () => '')
  const name = hash.replace(/^#\/?/, '')
  return pages.find((page) => page === name) ?? 'home'
}
