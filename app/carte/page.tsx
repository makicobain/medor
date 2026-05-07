'use client'
import { useEffect, useState, useRef, useMemo } from 'react'
import Link from 'next/link'
import { getAllMedals } from '@/hooks/storage'
import { Medal } from '@/constants/types'
import { MDP_SITES } from '@/constants/mdpSites'

const MDP_LOGO = "https://www.figma.com/api/mcp/asset/212910e0-f28e-41aa-b226-524a13b77a66"

type Mode = 'collaborative' | 'collection'

export default function CartePage() {
  const [medals, setMedals] = useState<Medal[]>([])
  const [mode, setMode] = useState<Mode>('collaborative')
  const [search, setSearch] = useState('')
  const [mapReady, setMapReady] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const LRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  useEffect(() => { setMedals(getAllMedals()) }, [])

  const filteredSites = useMemo(() => {
    if (!search.trim()) return MDP_SITES
    const q = search.toLowerCase()
    return MDP_SITES.filter(s => s.nom.toLowerCase().includes(q) || s.ville.toLowerCase().includes(q))
  }, [search])

  const geoMedals = medals.filter(m => m.latitude && m.longitude)

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

    if (mode === 'collaborative') {
      ;(window as any).__medorAddSite = (nom: string, ville: string, lat: number, lng: number, adresse: string) => {
        const p = new URLSearchParams({ nom, ville, lat: String(lat), lng: String(lng), adresse })
        window.location.href = '/ajouter?' + p.toString()
      }
      const icon = L.divIcon({
        className: '',
        html: `<div style="width:22px;height:22px;border-radius:50%;background:#EF9204;border:2px solid white;box-shadow:0 2px 5px rgba(0,0,0,0.3);"></div>`,
        iconSize: [22, 22], iconAnchor: [11, 22], popupAnchor: [0, -24],
      })
      filteredSites.forEach(site => {
        const enc = (s: string) => encodeURIComponent(s)
        const marker = L.marker([site.lat, site.lng], { icon }).addTo(map)
        marker.bindPopup(`
          <div style="padding:10px 12px;min-width:160px;font-family:'Roboto',sans-serif;">
            <p style="font-weight:600;font-size:13px;color:#0A0A0A;margin:0 0 2px 0;">${site.nom}</p>
            <p style="font-size:11px;color:#717182;margin:0 0 8px 0;">📍 ${site.ville}</p>
            <button onclick="window.__medorAddSite(decodeURIComponent('${enc(site.nom)}'),decodeURIComponent('${enc(site.ville)}'),${site.lat},${site.lng},decodeURIComponent('${enc(site.adresse || '')}'))"
              style="width:100%;background:#EF9204;color:white;border:none;border-radius:8px;padding:7px;font-size:12px;font-weight:600;cursor:pointer;">
              + Ajouter
            </button>
          </div>
        `, { maxWidth: 200 })
        markersRef.current.push(marker)
      })
      map.setView([46.6034, 1.8883], 5)
    } else {
      const icon = L.divIcon({
        className: '',
        html: `<div style="width:26px;height:26px;border-radius:50%;background:white;border:2.5px solid #EF9204;display:flex;align-items:center;justify-content:center;font-size:13px;box-shadow:0 2px 8px rgba(239,146,4,0.3);">🏅</div>`,
        iconSize: [26, 26], iconAnchor: [13, 26], popupAnchor: [0, -28],
      })
      geoMedals.forEach(medal => {
        const marker = L.marker([medal.latitude!, medal.longitude!], { icon }).addTo(map)
        marker.bindPopup(`
          <div style="padding:10px 12px;min-width:140px;font-family:'Roboto',sans-serif;">
            <p style="font-weight:600;font-size:13px;color:#0A0A0A;margin:0 0 4px 0;">${medal.titre}</p>
            ${medal.lieuNom ? `<p style="font-size:11px;color:#717182;margin:0 0 6px 0;">📍 ${medal.lieuNom}</p>` : ''}
            <a href="/medal/${medal.id}" style="font-size:12px;color:#EF9204;font-weight:600;">Voir →</a>
          </div>
        `, { maxWidth: 180 })
        markersRef.current.push(marker)
      })
      if (geoMedals.length > 0) {
        const group = L.featureGroup(geoMedals.map(m => L.marker([m.latitude!, m.longitude!])))
        map.fitBounds(group.getBounds().pad(0.3))
      }
    }
    setTimeout(() => mapInstanceRef.current?.invalidateSize(), 100)
  }, [mapReady, mode, filteredSites.length, geoMedals.length])

  const listItems = mode === 'collaborative' ? filteredSites.slice(0, 50) : geoMedals

  return (
    <div className="min-h-screen bg-bg pb-24">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />

      {/* Header */}
      <div className="bg-dark px-4 pt-4 pb-4">
        <img src={MDP_LOGO} alt="Monnaie de Paris" className="h-[58px] w-auto object-contain" style={{ mixBlendMode: 'lighten' }} />
      </div>

      <div className="px-5 pt-4">
        <h1 className="text-[24px] font-medium text-text mb-0.5">Carte des emplacements</h1>
        <p className="text-muted text-sm mb-4">1074 sites répertoriés</p>

        {/* Toggle */}
        <div className="flex gap-3 mb-4">
          <button onClick={() => setMode('collaborative')}
            className={`flex-1 py-3 rounded-2xl text-sm font-medium border transition-all
              ${mode === 'collaborative' ? 'bg-or text-white border-or' : 'bg-card text-text border-gray-200'}`}>
            Carte collaborative
          </button>
          <button onClick={() => setMode('collection')}
            className={`flex-1 py-3 rounded-2xl text-sm font-medium border transition-all
              ${mode === 'collection' ? 'bg-or text-white border-or' : 'bg-card text-text border-gray-200'}`}>
            Ma collection
          </button>
        </div>

        {/* Carte */}
        <div className="rounded-2xl overflow-hidden mb-4" style={{ height: 347, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div ref={mapRef} style={{ width: '100%', height: '100%', background: '#f0ebe3' }} />
        </div>

        {/* Recherche (mode sites) */}
        {mode === 'collaborative' && (
          <div className="flex items-center gap-2 bg-card rounded-xl px-3 py-2.5 mb-3"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#717182"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <input className="flex-1 bg-transparent text-sm text-text outline-none placeholder:text-muted"
              placeholder="Rechercher..."
              value={search}
              onChange={e => setSearch(e.target.value)} />
          </div>
        )}

        {/* Liste */}
        <div className="flex flex-col gap-2 pb-4">
          {mode === 'collaborative' ? (
            <>
              <p className="text-[10px] font-medium text-muted uppercase tracking-wider">{filteredSites.length} sites touristiques</p>
              {filteredSites.slice(0, 50).map((site, i) => (
                <div key={i} className="flex items-center gap-3 bg-card rounded-xl px-4 py-3"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                  <div className="w-2 h-2 rounded-full bg-or flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text truncate">{site.nom}</p>
                    <p className="text-xs text-muted">📍 {site.ville}</p>
                  </div>
                </div>
              ))}
              {filteredSites.length > 50 && (
                <p className="text-xs text-muted text-center py-2">+ {filteredSites.length - 50} autres — affinez la recherche</p>
              )}
            </>
          ) : (
            <>
              <p className="text-[10px] font-medium text-muted uppercase tracking-wider">{geoMedals.length} médailles localisées</p>
              {geoMedals.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted text-sm">Aucune médaille géolocalisée.</p>
                  <Link href="/ajouter" className="text-or text-sm font-medium mt-1 block">+ Ajouter une médaille</Link>
                </div>
              ) : geoMedals.map(m => (
                <Link key={m.id} href={`/medal/${m.id}`}
                  className="flex items-center gap-3 bg-card rounded-xl px-4 py-3"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                  <div className="w-2 h-2 rounded-full bg-or flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text truncate">{m.titre}</p>
                    {m.lieuNom && <p className="text-xs text-muted">📍 {m.lieuNom}</p>}
                  </div>
                  <span className="text-muted">›</span>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
