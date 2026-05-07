import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import PWAInstaller from '@/components/PWAInstaller'
import { AuthProvider } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Médor — Mini Médailles MdP',
  description: 'Répertoire personnel de mini médailles de la Monnaie de Paris',
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Médor' },
}

export const viewport: Viewport = {
  themeColor: '#1C1B1F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Médor" />
      </head>
      <body className="min-h-screen bg-bg">
        <AuthProvider>
          {/* Desktop layout */}
          <div className="hidden lg:flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 min-h-screen bg-bg">
              <div className="max-w-6xl mx-auto px-8 py-8">
                {children}
              </div>
            </main>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden max-w-md mx-auto min-h-screen flex flex-col relative shadow-2xl bg-bg overflow-hidden">
            <main className="flex-1 pb-24">
              {children}
            </main>
            <Nav />
          </div>

          <PWAInstaller />
        </AuthProvider>
      </body>
    </html>
  )
}
