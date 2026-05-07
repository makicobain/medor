'use client'
import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { getAllMedals, getCustomTags } from '@/hooks/storage'
import { Medal, DEFAULT_TAGS } from '@/constants/types'

const MDP_LOGO = "https://www.figma.com/api/mcp/asset/212910e0-f28e-41aa-b226-524a13b77a66"

export default function CollectionPage() {
  const [medals, setMedals] = useState<Medal[]>([])
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  useEffect(() => { setMedals(getAllMedals()) }, [])

  const allTags = Array.from(new Set([...DEFAULT_TAGS, ...getCustomTags()])).sort()
  const filtered = useMemo(() => {
    let r = [...medals]
    if (search.trim()) { const q = search.toLowerCase(); r = r.filter(m => m.titre.toLowerCase().includes(q) || m.serie?.toLowerCase().includes(q)) }
    if (activeTag) r = r.filter(m => m.tags.includes(activeTag))
    return r
  }, [medals, search, activeTag])

  return (
    <div className="min-h-screen bg-bg pb-24 lg:pb-0">
      {/* Header mobile */}
      <div className="bg-[#1C1B1F] px-4 pt-4 pb-4 lg:hidden">
        <img src={MDP_LOGO} alt="Monnaie de Paris" className="h-[58px] w-auto object-contain" style={{ mixBlendMode: 'lighten' }} />
      </div>

      <div className="px-5 pt-4 lg:px-0 lg:pt-0">
        {/* Titre + recherche */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
          <div>
            <h1 className="text-[24px] font-medium text-text">Ma collection</h1>
            <p className="text-muted text-sm">{medals.length} pièce{medals.length !== 1 ? 's' : ''} répertoriée{medals.length !== 1 ? 's' : ''}</p>
          </div>
          {/* Recherche desktop */}
          <div className="hidden lg:flex items-center gap-2 bg-card rounded-xl px-4 py-2.5 w-72"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#717182"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <input className="flex-1 bg-transparent text-sm text-text outline-none placeholder:text-muted"
              placeholder="Rechercher..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4" style={{ scrollbarWidth: 'none' }}>
          {['Tous', ...allTags].map(t => (
            <button key={t} onClick={() => setActiveTag(t === 'Tous' ? null : t)}
              className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all"
              style={{
                background: (t === 'Tous' ? !activeTag : activeTag === t) ? '#EF9204' : 'white',
                color: (t === 'Tous' ? !activeTag : activeTag === t) ? 'white' : '#0A0A0A',
                borderColor: (t === 'Tous' ? !activeTag : activeTag === t) ? '#EF9204' : '#e5e7eb',
              }}>
              {t}
            </button>
          ))}
        </div>

        {/* Grille */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <span className="text-5xl">🏅</span>
            <p className="text-muted text-sm text-center">Aucune médaille.</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-3">
            {filtered.map(medal => (
              <Link key={medal.id} href={`/medal/${medal.id}`}
                className="bg-card rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div className="flex justify-center pt-4 pb-2">
                  <div className="w-[52px] h-[51px] rounded-full bg-or-light flex items-center justify-center overflow-hidden">
                    {medal.photos[0] ? <img src={medal.photos[0]} alt="" className="w-full h-full object-cover" /> : <span className="text-2xl">🏅</span>}
                  </div>
                </div>
                <div className="px-2 pb-3 text-center">
                  <p className="text-[12px] font-medium text-text leading-tight line-clamp-2">{medal.titre}</p>
                  <p className="text-[10px] text-muted mt-0.5 truncate">{medal.serie || medal.annee || ''}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
