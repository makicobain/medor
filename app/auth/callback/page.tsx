'use client'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function AuthCallbackPage() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) window.location.replace('/')
    })

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) window.location.replace('/')
      else {
        // Pas de session après 3s → retour accueil quand même
        setTimeout(() => window.location.replace('/'), 3000)
      }
    })
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8F8FC' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🏅</div>
        <p style={{ fontWeight: 600, color: '#1A1A2E', marginBottom: 8 }}>Connexion en cours...</p>
        <p style={{ color: '#9090A8', fontSize: 14 }}>Redirection automatique</p>
      </div>
    </div>
  )
}
