'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/auth'

const OR = '#EF9204'
const BLACK = '#0A0A0A'

function IconHome({ active }: { active: boolean }) {
  const c = active ? OR : BLACK
  return active
    ? <svg width="20" height="20" viewBox="0 0 24 24" fill={c}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
    : <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/></svg>
}
function IconCarte({ active }: { active: boolean }) {
  const c = active ? OR : BLACK
  return active
    ? <svg width="20" height="20" viewBox="0 0 24 24" fill={c}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
    : <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke={c} strokeWidth="1.5"/><circle cx="12" cy="9" r="2.5" stroke={c} strokeWidth="1.5"/></svg>
}
function IconCollection({ active }: { active: boolean }) {
  const c = active ? OR : BLACK
  return active
    ? <svg width="20" height="20" viewBox="0 0 24 24" fill={c}><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg>
    : <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1" stroke={c} strokeWidth="1.5"/><rect x="13" y="3" width="8" height="8" rx="1" stroke={c} strokeWidth="1.5"/><rect x="3" y="13" width="8" height="8" rx="1" stroke={c} strokeWidth="1.5"/><rect x="13" y="13" width="8" height="8" rx="1" stroke={c} strokeWidth="1.5"/></svg>
}
function IconProfil({ active }: { active: boolean }) {
  const c = active ? OR : BLACK
  return active
    ? <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill={c}/><path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" fill={c}/></svg>
    : <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.5"/><path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>
}
function IconSettings({ active }: { active: boolean }) {
  const c = active ? OR : BLACK
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke={c} strokeWidth="1.5"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke={c} strokeWidth="1.5"/></svg>
}

const MDP_LOGO = "https://www.figma.com/api/mcp/asset/212910e0-f28e-41aa-b226-524a13b77a66"

const navItems = [
  { href: '/',             label: 'Accueil',    Icon: IconHome       },
  { href: '/carte',        label: 'Carte',      Icon: IconCarte      },
  { href: '/bibliotheque', label: 'Collection', Icon: IconCollection },
  { href: '/profil',       label: 'Profil',     Icon: IconProfil     },
  { href: '/parametres',   label: 'Paramètres', Icon: IconSettings   },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { user, profile } = useAuth()

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen bg-white border-r border-gray-100 fixed left-0 top-0 z-40"
      style={{ boxShadow: '2px 0 12px rgba(0,0,0,0.04)' }}>

      {/* Logo */}
      <div className="bg-[#1C1B1F] px-6 py-5 flex items-center justify-center" style={{ minHeight: 80 }}>
        <img src={MDP_LOGO} alt="Monnaie de Paris" className="h-10 w-auto object-contain" style={{ mixBlendMode: 'lighten' }} />
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
        {navItems.map(({ href, label, Icon }) => {
          const active = isActive(href)
          return (
            <Link key={href} href={href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
              style={{
                background: active ? '#FEF3DC' : 'transparent',
                color: active ? OR : BLACK,
              }}>
              <Icon active={active} />
              <span className="text-sm font-medium">{label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Bouton ajouter */}
      <div className="px-4 pb-4">
        <Link href="/ajouter"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-medium"
          style={{ background: OR }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>
          Ajouter une médaille
        </Link>
      </div>

      {/* Profil */}
      <div className="px-4 pb-6 border-t border-gray-100 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            {profile?.photo_url || user?.user_metadata?.avatar_url
              ? <img src={profile?.photo_url || user?.user_metadata?.avatar_url} alt="" className="w-full h-full object-cover" />
              : <svg width="36" height="36" viewBox="0 0 24 24" fill="#717182"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#0A0A0A] truncate">{profile?.pseudo ?? (user ? 'Collectionneur' : 'Invité')}</p>
            <p className="text-xs text-[#717182] truncate">{user?.email ?? 'Non connecté'}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
