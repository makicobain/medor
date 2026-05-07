'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/auth'

const OR = '#EF9204'
const MDP_LOGO = "https://www.figma.com/api/mcp/asset/212910e0-f28e-41aa-b226-524a13b77a66"

const navItems = [
  { href: '/',             label: 'Accueil'    },
  { href: '/carte',        label: 'Carte'      },
  { href: '/bibliotheque', label: 'Collection' },
  { href: '/profil',       label: 'Profil'     },
  { href: '/parametres',   label: 'Paramètres' },
]

export default function Topbar() {
  const pathname = usePathname()
  const { user, profile } = useAuth()
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)
  const photoUrl = profile?.photo_url || user?.user_metadata?.avatar_url || ''

  return (
    <header className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 items-center"
      style={{ height: 64, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>

      {/* Logo */}
      <div className="bg-[#1C1B1F] flex items-center justify-center flex-shrink-0"
        style={{ width: 200, height: 64 }}>
        <img src={MDP_LOGO} alt="Monnaie de Paris" className="h-9 w-auto object-contain" style={{ mixBlendMode: 'lighten' }} />
      </div>

      {/* Nav */}
      <nav className="flex items-center gap-1 px-6 flex-1">
        {navItems.map(({ href, label }) => {
          const active = isActive(href)
          return (
            <Link key={href} href={href}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
              style={{
                background: active ? '#FEF3DC' : 'transparent',
                color: active ? OR : '#0A0A0A',
              }}>
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Actions droite */}
      <div className="flex items-center gap-3 px-6">
        <Link href="/ajouter"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium"
          style={{ background: OR }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>
          Ajouter
        </Link>

        {/* Avatar */}
        <Link href="/profil">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 border-2 flex-shrink-0"
            style={{ borderColor: OR }}>
            {photoUrl
              ? <img src={photoUrl} alt="" className="w-full h-full object-cover" />
              : <svg width="36" height="36" viewBox="0 0 24 24" fill="#717182"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>}
          </div>
        </Link>
      </div>
    </header>
  )
}
