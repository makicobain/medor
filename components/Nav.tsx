'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const OR = '#EF9204'
const BLACK = '#0A0A0A'

function IconHome({ active }: { active: boolean }) {
  return active ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={OR}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" stroke={BLACK} strokeWidth="1.5" strokeLinejoin="round"/></svg>
  )
}
function IconCarte({ active }: { active: boolean }) {
  return active ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={OR}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke={BLACK} strokeWidth="1.5"/><circle cx="12" cy="9" r="2.5" stroke={BLACK} strokeWidth="1.5"/></svg>
  )
}
function IconCollection({ active }: { active: boolean }) {
  return active ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={OR}><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1" stroke={BLACK} strokeWidth="1.5"/><rect x="13" y="3" width="8" height="8" rx="1" stroke={BLACK} strokeWidth="1.5"/><rect x="3" y="13" width="8" height="8" rx="1" stroke={BLACK} strokeWidth="1.5"/><rect x="13" y="13" width="8" height="8" rx="1" stroke={BLACK} strokeWidth="1.5"/></svg>
  )
}
function IconProfil({ active }: { active: boolean }) {
  return active ? (
    <svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill={OR}/><path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" fill={OR}/></svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke={BLACK} strokeWidth="1.5"/><path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke={BLACK} strokeWidth="1.5" strokeLinecap="round"/></svg>
  )
}

const tabs = [
  { href: '/',             label: 'Accueil',    Icon: IconHome       },
  { href: '/carte',        label: 'Carte',      Icon: IconCarte      },
  { href: '/bibliotheque', label: 'Collection', Icon: IconCollection },
  { href: '/profil',       label: 'Profil',     Icon: IconProfil     },
]

export default function Nav() {
  const pathname = usePathname()
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)
  const isAjouter = pathname.startsWith('/ajouter')

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-5 px-4">
      <nav
        className="flex items-center justify-around w-full max-w-sm px-4"
        style={{
          height: 64,
          background: 'white',
          borderRadius: 9999,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
        }}>

        {tabs.slice(0, 2).map(({ href, label, Icon }) => {
          const active = isActive(href)
          return (
            <Link key={href} href={href} className="flex flex-col items-center gap-[2px] px-2">
              <Icon active={active} />
              <span style={{ fontSize: 10, color: active ? OR : BLACK, fontFamily: 'Roboto, sans-serif' }}>{label}</span>
            </Link>
          )
        })}

        {/* Bouton + central */}
        <Link href="/ajouter" className="flex items-center justify-center px-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: isAjouter ? OR : BLACK }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
            </svg>
          </div>
        </Link>

        {tabs.slice(2).map(({ href, label, Icon }) => {
          const active = isActive(href)
          return (
            <Link key={href} href={href} className="flex flex-col items-center gap-[2px] px-2">
              <Icon active={active} />
              <span style={{ fontSize: 10, color: active ? OR : BLACK, fontFamily: 'Roboto, sans-serif' }}>{label}</span>
            </Link>
          )
        })}

      </nav>
    </div>
  )
}
