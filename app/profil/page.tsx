'use client'
import { useEffect, useState, useRef } from 'react'
import { useAuth } from '@/lib/auth'
import { supabase } from '@/lib/supabase'
import { getAllMedals } from '@/hooks/storage'
import { Medal } from '@/constants/types'
import { useRouter } from 'next/navigation'

const MDP_LOGO = "https://www.figma.com/api/mcp/asset/212910e0-f28e-41aa-b226-524a13b77a66"

export default function ProfilPage() {
  const { user, profile, signInWithGoogle, signOut, refreshProfile } = useAuth()
  const router = useRouter()
  const [medals, setMedals] = useState<Medal[]>([])
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({ pseudo: '', localisation: '', depuis: '2026', specialisation: '' })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => { setMedals(getAllMedals()) }, [])

  useEffect(() => {
    if (profile) setForm({
      pseudo: profile.pseudo ?? '',
      localisation: profile.localisation ?? '',
      depuis: profile.depuis ?? '2026',
      specialisation: profile.specialisation ?? '',
    })
  }, [profile])

  const nbSeries = new Set(medals.map(m => m.serie).filter(Boolean)).size

  const handleSave = async () => {
    if (!user) return
    setSaving(true)
    await supabase.from('profiles').update(form).eq('id', user.id)
    await refreshProfile()
    setEditing(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
    setSaving(false)
  }

  const photoUrl = profile?.photo_url || user?.user_metadata?.avatar_url || ''

  const successes = [
    { icon: '🥇', label: 'Première médaille', desc: 'Ajoutez votre 1ère médaille', done: medals.length >= 1 },
    { icon: '🏆', label: 'Bébé collectionneur', desc: '10 médailles dans la collection', done: medals.length >= 10 },
    { icon: '🌍', label: 'Explorateur', desc: '10 médailles sur la carte', done: medals.filter(m => m.latitude).length >= 10 },
  ]

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Header */}
      <div className="bg-dark px-4 pt-4 pb-4">
        <img src={MDP_LOGO} alt="Monnaie de Paris" className="h-[58px] w-auto object-contain" style={{ mixBlendMode: 'lighten' }} />
      </div>

      <div className="px-5 pt-4 flex flex-col gap-4">
        {/* Titre */}
        <div className="flex items-center justify-between">
          <h1 className="text-[24px] font-medium text-text">Mon profil</h1>
          {user && (
            <button onClick={() => setEditing(!editing)}
              className="w-8 h-8 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A0A0A">
                <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
              </svg>
            </button>
          )}
        </div>

        {/* Profil card */}
        <div className="bg-card rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-[78px] h-[78px] rounded-full bg-bg flex items-center justify-center overflow-hidden flex-shrink-0">
                {photoUrl
                  ? <img src={photoUrl} alt="" className="w-full h-full object-cover" />
                  : <svg width="50" height="50" viewBox="0 0 24 24" fill="#717182"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>}
              </div>
              {editing && user && (
                <>
                  <button onClick={() => fileRef.current?.click()}
                    className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-or flex items-center justify-center shadow">
                    <span className="text-white text-xs">📷</span>
                  </button>
                  <input ref={fileRef} type="file" accept="image/*" className="hidden"
                    onChange={async e => {
                      const file = e.target.files?.[0]
                      if (!file || !user) return
                      const path = `${user.id}/avatar.${file.name.split('.').pop()}`
                      const { error } = await supabase.storage.from('avatars').upload(path, file, { upsert: true })
                      if (!error) {
                        const { data } = supabase.storage.from('avatars').getPublicUrl(path)
                        await supabase.from('profiles').update({ photo_url: data.publicUrl }).eq('id', user.id)
                        await refreshProfile()
                      }
                    }} />
                </>
              )}
            </div>
            <div className="flex-1">
              {editing ? (
                <input className="text-[18px] font-medium text-text bg-bg rounded-lg px-3 py-1.5 w-full outline-none"
                  value={form.pseudo} onChange={e => setForm(p => ({ ...p, pseudo: e.target.value }))}
                  placeholder="Ton pseudo" />
              ) : (
                <p className="text-[18px] font-medium text-text">{profile?.pseudo ?? (user ? 'Collectionneur' : 'Invité')}</p>
              )}
              <p className="text-muted text-sm mt-0.5">Membre depuis {profile?.depuis ?? form.depuis}</p>
            </div>
          </div>
        </div>

        {/* Connexion Google si pas connecté */}
        {!user && (
          <div className="bg-card rounded-2xl p-5 flex flex-col gap-3" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <p className="text-sm text-muted text-center">Connecte-toi pour synchroniser ta collection et accéder à la carte collaborative.</p>
            <button onClick={signInWithGoogle}
              className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 rounded-xl py-3 font-medium text-text">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuer avec Google
            </button>
          </div>
        )}

        {/* Formulaire édition */}
        {editing && user && (
          <div className="bg-card rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <p className="text-[10px] font-medium text-muted uppercase tracking-wider px-4 pt-3 pb-1">Modifier le profil</p>
            {[
              { label: 'Localisation', key: 'localisation', placeholder: 'Ex. Nice, France' },
              { label: 'Depuis', key: 'depuis', placeholder: '2026' },
              { label: 'Spécialisation', key: 'specialisation', placeholder: 'Ex. Châteaux...' },
            ].map((f, i, arr) => (
              <div key={f.key} className={`flex items-center px-4 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <span className="text-xs text-muted w-28 flex-shrink-0 py-3">{f.label}</span>
                <input className="flex-1 py-3 text-sm text-text bg-transparent outline-none placeholder:text-muted/50"
                  placeholder={f.placeholder}
                  value={(form as any)[f.key]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} />
              </div>
            ))}
            <div className="px-4 pb-4 pt-2">
              <button onClick={handleSave} disabled={saving}
                className="w-full bg-or text-white py-3 rounded-xl font-medium text-sm disabled:opacity-60">
                {saving ? 'Enregistrement...' : '✓ Enregistrer'}
              </button>
            </div>
          </div>
        )}

        {saved && (
          <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <p className="text-sm text-green-700 font-medium">Profil mis à jour !</p>
          </div>
        )}

        {/* Carte collaborative */}
        <button onClick={() => router.push('/carte-collaborative')}
          className="flex items-center gap-3 bg-card rounded-2xl p-4 border border-or/20 text-left"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div className="w-10 h-10 rounded-xl bg-or-light flex items-center justify-center flex-shrink-0">
            <span className="text-xl">🗺</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-or">Carte collaborative</p>
            <p className="text-xs text-muted mt-0.5">Voir les médailles partagées par tous</p>
          </div>
          <span className="text-or text-lg">›</span>
        </button>

        {/* Détails collection */}
        <div className="bg-card rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p className="text-[18px] font-medium text-text px-5 pt-4 pb-3">Détails de la collection</p>
          {[
            { label: 'Localisation', value: profile?.localisation || 'Non définie' },
            { label: 'Membre depuis', value: profile?.depuis || '2026' },
            { label: 'Nombre de médailles', value: medals.length },
          ].map((row, i, arr) => (
            <div key={row.label} className={`flex justify-between items-center px-5 py-3 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <span className="text-sm text-text">{row.label}</span>
              <span className="text-sm font-medium text-text">{row.value}</span>
            </div>
          ))}
        </div>

        {/* Succès */}
        <div className="bg-card rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          {successes.map((s, i, arr) => (
            <div key={s.label} className={`flex items-center gap-3 px-4 py-3 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''} ${!s.done ? 'opacity-40' : ''}`}>
              <div className="w-11 h-11 rounded-full bg-or-light flex items-center justify-center flex-shrink-0 text-2xl">{s.icon}</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text">{s.label}</p>
                <p className="text-xs text-muted mt-0.5">{s.desc}</p>
              </div>
              {s.done && <span className="text-green-500 font-bold">✓</span>}
            </div>
          ))}
        </div>

        {user && (
          <button onClick={signOut} className="w-full py-3 rounded-xl border border-gray-200 text-muted text-sm font-medium bg-card">
            Se déconnecter
          </button>
        )}
      </div>
    </div>
  )
}
