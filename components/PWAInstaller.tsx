'use client'
import { useEffect, useState } from 'react'

export default function PWAInstaller() {
  const [prompt, setPrompt] = useState<any>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handler = (e: any) => { e.preventDefault(); setPrompt(e); setShow(true) }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  if (!show) return null

  return (
    // Only show on mobile
    <div className="fixed bottom-24 left-4 right-4 z-50 lg:hidden">
      <div className="bg-white rounded-2xl p-4 flex items-center gap-3" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
        <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
          <img src="/icon-192.png" alt="Médor" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-[#0A0A0A]">Installer Médor</p>
          <p className="text-xs text-[#717182]">Installe l'app sur ton téléphone pour l'utiliser hors ligne</p>
        </div>
        <div className="flex flex-col gap-1">
          <button onClick={() => { prompt?.prompt(); setShow(false) }}
            className="px-3 py-1.5 bg-[#B5174B] text-white text-xs font-semibold rounded-lg">
            Installer
          </button>
          <button onClick={() => setShow(false)}
            className="px-3 py-1.5 text-[#717182] text-xs">
            Plus tard
          </button>
        </div>
      </div>
    </div>
  )
}
