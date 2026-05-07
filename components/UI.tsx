import { Medal } from '@/constants/types'
import Link from 'next/link'

export function TagPill({ label, active, onClick, small, color }: {
  label: string; active?: boolean; onClick?: () => void; small?: boolean; color?: 'blue' | 'green' | 'red'
}) {
  const colorMap = {
    blue: 'bg-tag-blue text-tag-blue-text',
    green: 'bg-tag-green text-tag-green-text',
    red: 'bg-primary-light text-primary',
  }
  const base = `inline-flex items-center rounded-full font-medium transition-all cursor-pointer select-none
    ${small ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1'}
    ${active
      ? 'bg-primary text-white shadow-sm'
      : color ? colorMap[color] : 'bg-gray-100 text-mid hover:bg-primary-light hover:text-primary'}`
  return onClick
    ? <button className={base} onClick={onClick}>{label}</button>
    : <span className={base}>{label}</span>
}

export function MedalThumb({ uri, size = 52 }: { uri?: string; size?: number }) {
  return (
    <div
      style={{ width: size, height: size, border: '2px solid rgba(200,151,58,0.3)', borderRadius: '50%' }}
      className="bg-gold-light flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
      {uri
        ? <img src={uri} alt="" className="w-full h-full object-cover" />
        : <span style={{ fontSize: size * 0.42 }}>🏅</span>}
    </div>
  )
}

export function MedalCard({ medal }: { medal: Medal }) {
  const tagColors: ('blue' | 'green' | 'red')[] = ['blue', 'green', 'red']
  return (
    <Link href={`/medal/${medal.id}`}
      className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition-all active:scale-95"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <div className="flex justify-center pt-4 pb-3 bg-gradient-to-b from-primary-light to-white">
        <div
          className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center overflow-hidden"
          style={{ border: '2.5px solid rgba(200,151,58,0.4)', boxShadow: '0 4px 12px rgba(200,151,58,0.2)' }}>
          {medal.photos[0]
            ? <img src={medal.photos[0]} alt="" className="w-full h-full object-cover" />
            : <span className="text-3xl">🏅</span>}
        </div>
      </div>
      <div className="px-2.5 pb-3">
        <p className="text-[12px] font-semibold text-dark leading-tight text-center mb-1 line-clamp-2">{medal.titre}</p>
        {medal.serie && <p className="text-[10px] text-soft text-center mb-1.5 truncate">{medal.serie}</p>}
        {medal.annee && <p className="text-[10px] text-soft text-center mb-1.5">{medal.annee}</p>}
        <div className="flex flex-wrap gap-1 justify-center">
          {medal.tags.slice(0, 2).map((t, i) => (
            <TagPill key={t} label={t} small color={tagColors[i % 3]} />
          ))}
          {medal.etat && <TagPill label={medal.etat} small color="green" />}
        </div>
      </div>
    </Link>
  )
}

export function MedalRow({ medal }: { medal: Medal }) {
  return (
    <Link href={`/medal/${medal.id}`}
      className="flex items-center gap-3 p-3 bg-white rounded-2xl hover:shadow-md transition-all"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <div
        className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center overflow-hidden flex-shrink-0"
        style={{ border: '2px solid rgba(200,151,58,0.35)' }}>
        {medal.photos[0]
          ? <img src={medal.photos[0]} alt="" className="w-full h-full object-cover" />
          : <span className="text-2xl">🏅</span>}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-dark truncate">{medal.titre}</p>
        <p className="text-xs text-soft truncate mt-0.5">{[medal.serie, medal.annee].filter(Boolean).join(' • ')}</p>
        <div className="flex gap-1 mt-1 flex-wrap">
          {medal.tags.slice(0, 2).map((t, i) => (
            <TagPill key={t} label={t} small color={(['blue', 'green', 'red'] as const)[i % 3]} />
          ))}
        </div>
      </div>
      <span className="text-soft text-xl">›</span>
    </Link>
  )
}

export function StatCard({ label, value, sub, accent, href }: {
  label: string; value: number | string; sub?: string; accent?: boolean; href?: string
}) {
  const inner = (
    <div
      className={`rounded-2xl p-4 transition-all ${accent ? 'bg-primary text-white' : 'bg-white'}`}
      style={accent
        ? { boxShadow: '0 4px 16px rgba(181,23,75,0.3)' }
        : { boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
      <p className={`text-[10px] uppercase tracking-wider font-semibold mb-1.5 ${accent ? 'text-white/70' : 'text-soft'}`}>{label}</p>
      <p className={`text-3xl font-bold ${accent ? 'text-white' : 'text-primary'}`}>{value}</p>
      {sub && <p className={`text-xs mt-0.5 ${accent ? 'text-white/70' : 'text-soft'}`}>{sub}</p>}
    </div>
  )
  return href ? <Link href={href} className="block">{inner}</Link> : <div>{inner}</div>
}

export function PageHeader({ title, count, action }: {
  title: string; count?: string; action?: React.ReactNode
}) {
  return (
    <div className="px-5 pt-5 pb-3 bg-white" style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}>
      <div className="flex items-center justify-between mb-0.5">
        <h1 className="text-xl font-bold text-primary">{title}</h1>
        {action}
      </div>
      {count && <p className="text-xs text-soft">{count}</p>}
    </div>
  )
}

export function SearchBar({ value, onChange, placeholder }: {
  value: string; onChange: (v: string) => void; placeholder?: string
}) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 mx-5 mt-3"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9090A8" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        className="flex-1 bg-transparent text-sm text-dark outline-none placeholder:text-soft"
        placeholder={placeholder ?? 'Rechercher...'}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {value && (
        <button onClick={() => onChange('')}
          className="text-soft text-xs w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center">
          ✕
        </button>
      )}
    </div>
  )
}

export function SortBar({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 px-5 py-2">
      {label && <span className="text-xs text-soft whitespace-nowrap">Trier par :</span>}
      {children}
    </div>
  )
}

export function EmptyState({ icon = '🏅', message }: { icon?: string; message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3">
      <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
        <span className="text-3xl">{icon}</span>
      </div>
      <p className="text-sm text-soft text-center max-w-[200px] leading-relaxed whitespace-pre-line">{message}</p>
    </div>
  )
}

export function AddFab({ href }: { href: string }) {
  return (
    <Link href={href}
      className="fixed bottom-20 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-light z-10"
      style={{ boxShadow: '0 4px 16px rgba(181,23,75,0.4)', right: 'calc(50% - 192px + 16px)' }}>
      +
    </Link>
  )
}
