'use client'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { getAllMedals, deleteMedal } from '@/hooks/storage'
import { Medal } from '@/constants/types'

const MDP_LOGO = "https://www.figma.com/api/mcp/asset/212910e0-f28e-41aa-b226-524a13b77a66"

export default function MedalDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [medal, setMedal] = useState<Medal | null>(null)
  const [photoIdx, setPhotoIdx] = useState(0)

  useEffect(() => {
    const all = getAllMedals()
    setMedal(all.find(m => m.id === id) ?? null)
  }, [id])

  if (!medal) return (
    <div className="flex items-center justify-center h-64">
      <p className="text-muted text-sm">Médaille introuvable.</p>
    </div>
  )

  const handleDelete = () => {
    if (!confirm(`Supprimer "${medal.titre}" ?`)) return
    deleteMedal(medal.id)
    router.push('/bibliotheque')
  }

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Header */}
      <div className="bg-dark px-4 pt-4 pb-4">
        <img src={MDP_LOGO} alt="Monnaie de Paris" className="h-[58px] w-auto object-contain" style={{ mixBlendMode: 'lighten' }} />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => router.back()} className="text-or font-medium">← Retour</button>
        <div className="flex gap-2">
          <Link href={`/ajouter?editId=${medal.id}`}
            className="px-4 py-1.5 bg-or-light border border-or text-or text-sm rounded-full font-medium">
            ✏ Modifier
          </Link>
          <button onClick={handleDelete}
            className="w-9 h-9 rounded-full bg-bg flex items-center justify-center border border-gray-200">
            🗑
          </button>
        </div>
      </div>

      <div className="px-5 flex flex-col gap-4">
        {/* Photo */}
        <div className="bg-card rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          {medal.photos.length > 0 ? (
            <>
              <div className="h-52 relative">
                <img src={medal.photos[photoIdx]} alt="" className="w-full h-full object-cover" />
              </div>
              {medal.photos.length > 1 && (
                <div className="flex justify-center gap-1.5 py-2">
                  {medal.photos.map((_, i) => (
                    <button key={i} onClick={() => setPhotoIdx(i)}
                      className={`w-1.5 h-1.5 rounded-full ${i === photoIdx ? 'bg-or' : 'bg-gray-300'}`} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="h-44 bg-or-light flex items-center justify-center">
              <span className="text-6xl">🏅</span>
            </div>
          )}
        </div>

        {/* Titre + tags */}
        <div className="bg-card rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h1 className="text-[20px] font-medium text-text">{medal.titre}</h1>
          {medal.serie && <p className="text-muted text-sm mt-0.5">{medal.serie}</p>}
          {medal.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {medal.tags.map(t => (
                <span key={t} className="px-3 py-1 bg-or text-white text-xs rounded-full">{t}</span>
              ))}
            </div>
          )}
        </div>

        {/* Infos */}
        <div className="bg-card rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p className="text-sm font-medium text-text px-4 pt-4 pb-2">Informations générales</p>
          {[
            { label: 'Année', value: medal.annee },
            { label: 'État', value: medal.etat },
            { label: 'Acquisition', value: medal.dateAcquisition },
            { label: "Lieu d'achat", value: medal.lieuAchat },
            { label: 'Lieu illustré', value: medal.lieuNom },
            { label: 'Réf.', value: `#${medal.id.slice(0,6).toUpperCase()}` },
          ].filter(f => f.value).map((f, i, arr) => (
            <div key={f.label} className={`flex justify-between items-center px-4 py-3 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <span className="text-sm text-muted">{f.label}</span>
              <span className="text-sm font-medium text-text">{f.value}</span>
            </div>
          ))}
        </div>

        {/* Notes */}
        {medal.notes && (
          <div className="bg-card rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <p className="text-sm font-medium text-text mb-2">Notes</p>
            <p className="text-sm text-muted leading-relaxed">{medal.notes}</p>
          </div>
        )}

        {/* Voir sur la carte */}
        {medal.latitude && medal.longitude && (
          <Link href="/carte" className="flex items-center gap-3 bg-card border border-or/30 rounded-2xl p-4"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <span className="text-or text-xl">◎</span>
            <span className="flex-1 text-sm font-medium text-or">Voir sur la carte</span>
            <span className="text-or">›</span>
          </Link>
        )}
      </div>
    </div>
  )
}
