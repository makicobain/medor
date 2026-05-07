'use client'
import { useEffect, useState } from 'react'
import { getAllMedals, exportJSON, saveMedals } from '@/hooks/storage'
import { Medal } from '@/constants/types'

const MDP_LOGO = "https://www.figma.com/api/mcp/asset/212910e0-f28e-41aa-b226-524a13b77a66"

export default function ParamPage() {
  const [medals, setMedals] = useState<Medal[]>([])
  useEffect(() => { setMedals(getAllMedals()) }, [])

  const series = [...new Set(medals.map(m => m.serie).filter(Boolean))]

  const dl = (content: string, name: string, type: string) => {
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(new Blob([content], { type })), download: name
    })
    a.click()
  }

  return (
    <div className="min-h-screen bg-bg pb-24">
      <div className="bg-dark px-4 pt-4 pb-4 lg:hidden">
        <img src={MDP_LOGO} alt="Monnaie de Paris" className="h-[58px] w-auto object-contain" style={{ mixBlendMode: 'lighten' }} />
      </div>

      <div className="px-5 pt-4 flex flex-col gap-4">
        <h1 className="text-[24px] font-medium text-text">Paramètres</h1>

        <Card title="Résumé">
          {[
            { l: 'Médailles', v: medals.length },
            { l: 'Géolocalisées', v: medals.filter(m => m.latitude).length },
            { l: 'Photos', v: medals.reduce((a, m) => a + m.photos.length, 0) },
            { l: 'Séries', v: series.length },
          ].map((r, i, arr) => (
            <div key={r.l} className={`flex justify-between items-center py-3 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <span className="text-sm text-text">{r.l}</span>
              <span className="text-sm font-medium text-or">{r.v}</span>
            </div>
          ))}
        </Card>

        <Card title="Export">
          <ActionBtn icon="📦" title="JSON" sub="Sauvegarde complète" onClick={() => dl(exportJSON(), `medor_${Date.now()}.json`, 'application/json')} />
          <ActionBtn icon="📊" title="CSV" sub="Données textuelles" onClick={() => {
            const h = ['id','titre','serie','annee','tags','lieuNom','latitude','longitude']
            const rows = medals.map(m => h.map(k => { const v=(m as any)[k]; return Array.isArray(v)?`"${v.join(',')}"`:`"${v??''}"`}).join(','))
            dl([h.join(','),...rows].join('\n'), `medor_${Date.now()}.csv`, 'text/csv')
          }} last />
        </Card>

        {series.length > 0 && (
          <Card title={`Séries (${series.length})`}>
            {series.map((s, i) => (
              <div key={s as string} className={`flex justify-between items-center py-3 ${i < series.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <span className="text-sm text-text">{s}</span>
                <span className="text-xs text-muted">{medals.filter(m => m.serie === s).length} pièce{medals.filter(m => m.serie === s).length > 1 ? 's' : ''}</span>
              </div>
            ))}
          </Card>
        )}

        <Card title="Danger">
          <ActionBtn icon="🗑" title="Vider la collection" sub="Action irréversible" danger
            onClick={() => { if (!confirm('Supprimer toutes les médailles ?')) return; saveMedals([]); setMedals([]) }} last />
        </Card>

        <p className="text-xs text-muted text-center">Médor · v1.0 · Données locales</p>
      </div>
    </div>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-medium text-muted uppercase tracking-wider mb-2 text-[10px]">{title}</p>
      <div className="bg-card rounded-2xl overflow-hidden px-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        {children}
      </div>
    </div>
  )
}

function ActionBtn({ icon, title, sub, onClick, last, danger }: any) {
  return (
    <button onClick={onClick}
      className={`w-full flex items-center gap-3 py-3 text-left ${!last ? 'border-b border-gray-100' : ''}`}>
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg ${danger ? 'bg-red-50' : 'bg-or-light'}`}>{icon}</div>
      <div className="flex-1">
        <p className={`text-sm font-medium ${danger ? 'text-red-600' : 'text-text'}`}>{title}</p>
        <p className="text-xs text-muted mt-0.5">{sub}</p>
      </div>
      <span className={`text-lg ${danger ? 'text-red-400' : 'text-muted'}`}>›</span>
    </button>
  )
}
