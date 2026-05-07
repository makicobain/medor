const CACHE_NAME = 'medor-v1'
const STATIC_ASSETS = [
  '/',
  '/bibliotheque',
  '/carte',
  '/ajouter',
  '/profil',
  '/wishlist',
  '/parametres',
  '/manifest.json',
]

// Installation : mise en cache des assets statiques
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  )
  self.skipWaiting()
})

// Activation : supprime les anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  )
  self.clients.claim()
})

// Fetch : cache-first pour les assets, network-first pour les pages
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // Ignore les requêtes non-HTTP et les extensions Chrome
  if (!request.url.startsWith('http')) return

  // Pour les assets statiques (JS, CSS, fonts, images) → cache first
  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'font' ||
    request.destination === 'image' ||
    url.pathname.startsWith('/_next/static')
  ) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached
        return fetch(request).then(response => {
          const clone = response.clone()
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone))
          return response
        })
      })
    )
    return
  }

  // Pour les pages → network first, fallback cache
  event.respondWith(
    fetch(request)
      .then(response => {
        const clone = response.clone()
        caches.open(CACHE_NAME).then(cache => cache.put(request, clone))
        return response
      })
      .catch(() => caches.match(request))
  )
})
