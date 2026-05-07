'use client'
import { useEffect, useState } from 'react'

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Enregistre le service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error)
    }

    // Détecte si déjà installé
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // iOS Safari
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(ios)

    // Android / Chrome : intercepte l'event d'installation
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowBanner(true)
    }
    window.addEventListener('beforeinstallprompt', handler)

    // Affiche le banner iOS après 3 secondes si pas encore installé
    if (ios && !localStorage.getItem('medor_pwa_dismissed')) {
      setTimeout(() => setShowBanner(true), 3000)
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') setIsInstalled(true)
      setDeferredPrompt(null)
      setShowBanner(false)
    }
  }

  const handleDismiss = () => {
    setShowBanner(false)
    localStorage.setItem('medor_pwa_dismissed', '1')
  }

  if (isInstalled || !showBanner) return null

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-sm z-50 animate-in">
      <div className="bg-white rounded-2xl p-4 flex items-start gap-3"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
        {/* Icône */}
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0"
          style={{ boxShadow: '0 4px 12px rgba(181,23,75,0.3)' }}>
          <span className="text-2xl">🏅</span>
        </div>

        {/* Texte */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-dark text-sm">Installer Médor</p>
          {isIOS ? (
            <p className="text-xs text-soft mt-0.5 leading-relaxed">
              Appuie sur <span className="font-semibold">⬆ Partager</span> puis{' '}
              <span className="font-semibold">« Sur l'écran d'accueil »</span>
            </p>
          ) : (
            <p className="text-xs text-soft mt-0.5">
              Installe l'app sur ton téléphone pour l'utiliser hors ligne
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-1.5 flex-shrink-0">
          {!isIOS && (
            <button onClick={handleInstall}
              className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap"
              style={{ boxShadow: '0 2px 8px rgba(181,23,75,0.3)' }}>
              Installer
            </button>
          )}
          <button onClick={handleDismiss}
            className="text-soft text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-50 whitespace-nowrap">
            Plus tard
          </button>
        </div>
      </div>
    </div>
  )
}
