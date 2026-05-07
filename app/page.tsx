'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { getAllMedals } from '@/hooks/storage'
import { Medal } from '@/constants/types'
import { useAuth } from '@/lib/auth'

const MDP_LOGO = "https://www.figma.com/api/mcp/asset/212910e0-f28e-41aa-b226-524a13b77a66"

function MiniMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  useEffect(() => {
    if (mapInstanceRef.current) return
    const init = () => {
      if (!mapRef.current) return
      import('leaflet').then(L => {
        if (mapInstanceRef.current) return
        delete (L.Icon.Default.prototype as any)._getIconUrl
        const map = L.map(mapRef.current!, { center: [46.6034, 1.8883], zoom: 5, zoomControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false, touchZoom: false, preferCanvas: true })
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '', subdomains: 'abcd', maxZoom: 19 }).addTo(map)
        mapInstanceRef.current = map
        setTimeout(() => map.invalidateSize(), 300)
      })
    }
    const t = setTimeout(init, 200)
    return () => { clearTimeout(t); if (mapInstanceRef.current) { mapInstanceRef.current.remove(); mapInstanceRef.current = null } }
  }, [])
  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
}

export default function AccueilPage() {
  const [medals, setMedals] = useState<Medal[]>([])
  const { profile } = useAuth()
  useEffect(() => { setMedals(getAllMedals()) }, [])
  const recent = medals.slice(0, 5)

  return (
    <div className="min-h-screen bg-bg pb-24 lg:pb-0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />

      {/* Header mobile seulement */}
      <div className="bg-[#1C1B1F] px-4 pt-4 pb-4 lg:hidden">
        <img src={MDP_LOGO} alt="Monnaie de Paris" className="h-[58px] w-auto object-contain" style={{ mixBlendMode: 'lighten' }} />
      </div>

      <div className="px-5 py-4 lg:px-0 lg:py-0 flex flex-col gap-5">
        <h1 className="text-[24px] font-medium text-text">
          Bienvenue, {profile?.pseudo ?? 'Collectionneur'}
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/bibliotheque" className="bg-or rounded-2xl p-4 lg:p-6">
            <p className="text-white text-sm lg:text-base font-normal">Total médailles</p>
            <p className="text-white text-[32px] font-normal mt-1">{medals.length}</p>
          </Link>
          <div className="bg-card rounded-2xl p-4 lg:p-6" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <p className="text-text text-sm lg:text-base font-normal">Points obtenus</p>
            <p className="text-or text-[32px] font-normal mt-1">{medals.length * 10}</p>
          </div>
          <div className="bg-card rounded-2xl p-4 lg:p-6" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <p className="text-text text-sm lg:text-base font-normal">Géolocalisées</p>
            <p className="text-or text-[32px] font-normal mt-1">{medals.filter(m => m.latitude).length}</p>
          </div>
          <div className="bg-card rounded-2xl p-4 lg:p-6" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <p className="text-text text-sm lg:text-base font-normal">Séries</p>
            <p className="text-or text-[32px] font-normal mt-1">{new Set(medals.map(m => m.serie).filter(Boolean)).size}</p>
          </div>
        </div>

        {/* Carte + Dernières médailles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Carte */}
          <div className="bg-card rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center justify-between px-5 pt-4 pb-3">
              <p className="text-[18px] font-medium text-text">Carte interactive</p>
              <Link href="/carte" className="text-or text-sm font-medium">Voir plus →</Link>
            </div>
            <Link href="/carte" className="block">
              <div className="overflow-hidden pointer-events-none" style={{ height: 220 }}>
                <MiniMap />
              </div>
            </Link>
            <div className="pb-2" />
          </div>

          {/* Dernières médailles */}
          <div className="bg-card rounded-2xl p-5" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center justify-between mb-4">
              <p className="text-[18px] font-medium text-text">Dernières médailles</p>
              <Link href="/bibliotheque" className="text-or text-sm font-medium">Voir tout →</Link>
            </div>
            {recent.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted text-sm">Aucune médaille encore.</p>
                <Link href="/ajouter" className="text-or text-sm font-medium mt-2 block">+ Ajouter votre première médaille</Link>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {recent.map(medal => (
                  <Link key={medal.id} href={`/medal/${medal.id}`}
                    className="flex items-center gap-4 bg-bg rounded-xl px-4 py-[10px] hover:bg-or-light transition-colors">
                    <div className="w-9 h-9 rounded-full bg-or-light flex items-center justify-center overflow-hidden flex-shrink-0">
                      {medal.photos[0] ? <img src={medal.photos[0]} alt="" className="w-full h-full object-cover rounded-full" /> : <span className="text-lg">🏅</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text truncate">{medal.titre}</p>
                      <p className="text-xs text-muted truncate">{medal.lieuNom || medal.serie || 'Non défini'}</p>
                    </div>
                    <span className="text-muted text-sm">→</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
