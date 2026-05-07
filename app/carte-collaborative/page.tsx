'use client'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { supabase, MedalDB } from '@/lib/supabase'
import { useAuth } from '@/lib/auth'

export default function CarteCollaborativePage() {
  const { user } = useAuth()
  const router = useRouter()
  const [medals, setMedals] = useState<MedalDB[]>([])
  const [loading, setLoading] = useState(true)
  const [mapReady, setMapReady] = useState(false)
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const LRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  // Charger toutes les médailles partagées
  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from('medals')
        .select('*, profiles(id, pseudo, photo_url)')
        .eq('shared', true)
        .not('latitude', 'is', null)
        .not('longitude', 'is', null)
      setMedals(data ?? [])
      setLoading(false)
    }
    load()
  }, [])

  // Utilisateurs uniques
  const users = Array.from(
    new Map(medals.map(m => [m.user_id, m.profiles])).entries()
  ).map(([id, profile]) => ({ id, profile }))

  const filtered = selectedUser ? medals.filter(m => m.user_id === selectedUser) : medals

  // Init Leaflet
  useEffect(() => {
    if (mapInstanceRef.current) return
    const init = () => {
      if (!mapRef.current) return
      import('leaflet').then(L => {
        if (mapInstanceRef.current) return
        delete (L.Icon.Default.prototype as any)._getIconUrl
        const map = L.map(mapRef.current!, { center: [46.6034, 1.8883], zoom: 5, preferCanvas: true, renderer: L.canvas() })
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '© OpenStreetMap © CARTO', subdomains: 'abcd', maxZoom: 19,
        }).addTo(map)
        mapInstanceRef.current = map
        LRef.current = L
        setTimeout(() => { map.invalidateSize(); setMapReady(true) }, 300)
      })
    }
    const t = setTimeout(init, 100)
    return () => { clearTimeout(t); if (mapInstanceRef.current) { mapInstanceRef.current.remove(); mapInstanceRef.current = null; LRef.current = null } }
  }, [])

  // Update markers
  useEffect(() => {
    if (!mapReady || !mapInstanceRef.current || !LRef.current) return
    const map = mapInstanceRef.current
    const L = LRef.current
    markersRef.current.forEach(m => m.remove())
    markersRef.current = []

    // Couleurs par utilisateur
    const colors = ['#B5174B', '#3B6FD4', '#2E9E5B', '#C8973A', '#7B00F7', '#E67E22']
    const userColors = new Map(users.map(({ id }, i) => [id, colors[i % colors.length]]))

    filtered.forEach(medal => {
      const color = userColors.get(medal.user_id) ?? '#B5174B'
      const pseudo = medal.profiles?.pseudo ?? 'Collectionneur'
      const isMe = medal.user_id === user?.id

      const icon = L.divIcon({
        className: '',
        html: `<div style="width:28px;height:28px;border-radius:50%;background:${color};border:2.5px solid white;display:flex;align-items:center;justify-content:center;font-size:13px;box-shadow:0 2px 6px rgba(0,0,0,0.25);">🏅</div>`,
        iconSize: [28, 28], iconAnchor: [14, 28], popupAnchor: [0, -30],
      })

      const marker = L.marker([medal.latitude!, medal.longitude!], { icon }).addTo(map)
      marker.bindPopup(`
        <div style="padding:10px 12px;min-width:160px;font-family:system-ui,sans-serif;">
          <p style="font-size:10px;color:${color};font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 3px 0;">
            ${isMe ? '👤 Moi' : '👥 ' + pseudo}
          </p>
          <p style="font-weight:700;font-size:13px;color:#1A1A2E;margin:0 0 2px 0;">${medal.titre}</p>
          ${medal.lieu_nom ? `<p style="font-size:11px;color:#9090A8;margin:0;">📍 ${medal.lieu_nom}</p>` : ''}
        </div>
      `, { maxWidth: 200 })
      markersRef.current.push(marker)
    })

    setTimeout(() => mapInstanceRef.current?.invalidateSize(), 100)
  }, [mapReady, filtered.length, selectedUser])

  return (
    <div className="min-h-screen bg-bg">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />

      <div className="bg-primary px-5 pt-6 pb-5">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">←</button>
          <div>
            <h1 className="text-white font-bold text-xl">Carte collaborative</h1>
            <p className="text-white/60 text-xs">{filtered.length} médaille{filtered.length !== 1 ? 's' : ''} partagée{filtered.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>

      {/* Filtre par ami */}
      {users.length > 0 && (
        <div className="flex gap-2 px-5 py-3 overflow-x-auto bg-white border-b border-gray-100" style={{ scrollbarWidth: 'none' }}>
          <button onClick={() => setSelectedUser(null)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all whitespace-nowrap
              ${!selectedUser ? 'bg-primary border-primary text-white' : 'bg-white border-gray-200 text-soft'}`}>
            Tous
          </button>
          {users.map(({ id, profile }) => (
            <button key={id} onClick={() => setSelectedUser(selectedUser === id ? null : id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all whitespace-nowrap
                ${selectedUser === id ? 'bg-primary border-primary text-white' : 'bg-white border-gray-200 text-soft'}`}>
              {profile?.photo_url
                ? <img src={profile.photo_url} className="w-4 h-4 rounded-full object-cover" alt="" />
                : <span>👤</span>}
              {id === user?.id ? 'Moi' : profile?.pseudo ?? 'Collectionneur'}
            </button>
          ))}
        </div>
      )}

      {/* Carte */}
      <div className="mx-5 mt-4 rounded-2xl overflow-hidden" style={{ height: 340, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <div ref={mapRef} style={{ width: '100%', height: '100%', background: '#f0ebe3' }} />
      </div>

      {/* Liste */}
      <div className="px-5 pt-4 pb-24">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <p className="text-soft text-sm">Chargement des médailles...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 gap-3">
            <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
              <span className="text-3xl">🗺</span>
            </div>
            <p className="text-sm text-soft text-center leading-relaxed max-w-[220px]">
              {user
                ? "Aucune médaille partagée pour l'instant.\nActive le partage sur tes médailles géolocalisées !"
                : "Connecte-toi pour voir les médailles de tes amis !"}
            </p>
            {!user && (
              <button onClick={() => router.push('/connexion')}
                className="bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded-xl"
                style={{ boxShadow: '0 4px 12px rgba(181,23,75,0.3)' }}>
                Se connecter
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold text-soft uppercase tracking-wider mb-1">Médailles sur la carte</p>
            {filtered.map(medal => {
              const isMe = medal.user_id === user?.id
              return (
                <div key={medal.id} className="flex items-center gap-3 bg-white rounded-xl p-3"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                  <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center overflow-hidden flex-shrink-0"
                    style={{ border: '2px solid rgba(200,151,58,0.3)' }}>
                    {medal.photos?.[0]
                      ? <img src={medal.photos[0]} alt="" className="w-full h-full object-cover" />
                      : <span className="text-xl">🏅</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-dark truncate">{medal.titre}</p>
                    <p className="text-xs text-soft mt-0.5">
                      {isMe ? '👤 Moi' : `👥 ${medal.profiles?.pseudo ?? 'Collectionneur'}`}
                      {medal.lieu_nom ? ` · 📍 ${medal.lieu_nom}` : ''}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
