import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://drdppqmedterensavirc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZHBwcW1lZHRlcmVuc2F2aXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NzQ3NjUsImV4cCI6MjA5MzU1MDc2NX0.8y-KCWYnf54wR4cIgKM60FU4jUhbuAeU_dqJimleRWI',
  {
    auth: {
      persistSession: true,
      storageKey: 'medor-auth',
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    }
  }
)

export type Profile = {
  id: string
  pseudo: string
  bio?: string
  localisation?: string
  depuis?: string
  specialisation?: string
  photo_url?: string
}

export type MedalDB = {
  id: string
  user_id: string
  titre: string
  description?: string
  serie?: string
  annee?: string
  etat?: string
  tags: string[]
  latitude?: number
  longitude?: number
  type_localisation?: string
  lieu_nom?: string
  lieu_achat?: string
  date_acquisition?: string
  notes?: string
  photos: string[]
  shared: boolean
  created_at: string
  updated_at: string
  profiles?: Profile
}
