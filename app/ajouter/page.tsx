'use client'
import { useEffect, useState, useRef, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getAllMedals, createMedal, updateMedal, addCustomTag, getCustomTags } from '@/hooks/storage'
import { MedalFormData, DEFAULT_TAGS } from '@/constants/types'

const MDP_LOGO = "https://www.figma.com/api/mcp/asset/212910e0-f28e-41aa-b226-524a13b77a66"

const EMPTY: MedalFormData = {
  titre: '', description: '', serie: '', annee: '', etat: '', tags: [],
  latitude: undefined, longitude: undefined, typeLocalisation: '', lieuNom: '',
  lieuAchat: '', dateAcquisition: '', notes: '', photos: [], shared: false,
}

type Suggestion = {
  display_name: string
  lat: string
  lon: string
  address?: { city?: string; town?: string; village?: string; road?: string }
}

function AjouterForm() {
  const router = useRouter()
  const params = useSearchParams()
  const editId = params.get('editId')
  const isEdit = !!editId
  const fileRef = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<any>(null)

  const [form, setForm] = useState<MedalFormData>(EMPTY)
  const [customTags, setCustomTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [adresse, setAdresse] = useState('')
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [geocodeOk, setGeocodeOk] = useState(false)

  useEffect(() => {
    setCustomTags(getCustomTags())
    const nom = params.get('nom')
    const ville = params.get('ville')
    const lat = params.get('lat')
    const lng = params.get('lng')
    const adr = params.get('adresse')
    if (nom && !editId) {
      setForm(prev => ({ ...prev, titre: nom, lieuNom: ville || '',
        latitude: lat ? parseFloat(lat) : undefined,
        longitude: lng ? parseFloat(lng) : undefined }))
      if (adr) setAdresse(decodeURIComponent(adr))
    }
    if (editId) {
      const medal = getAllMedals().find(m => m.id === editId)
      if (medal) { const { id, dateCreation, dateModification, ...rest } = medal; setForm(rest) }
    }
  }, [editId])

  const set = <K extends keyof MedalFormData>(key: K, val: MedalFormData[K]) =>
    setForm(prev => ({ ...prev, [key]: val }))

  const toggleTag = (tag: string) =>
    set('tags', form.tags.includes(tag) ? form.tags.filter(t => t !== tag) : [...form.tags, tag])

  const handleAddTag = () => {
    const tag = newTag.trim()
    if (!tag) return
    addCustomTag(tag)
    setCustomTags(prev => Array.from(new Set([...prev, tag])))
    toggleTag(tag)
    setNewTag('')
  }

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(e.target.files ?? []).forEach(file => {
      const reader = new FileReader()
      reader.onload = ev => set('photos', [...form.photos, ev.target?.result as string])
      reader.readAsDataURL(file)
    })
  }

  // Autocomplétion avec debounce
  const handleAdresseChange = (val: string) => {
    setAdresse(val)
    setGeocodeOk(false)
    setSuggestions([])

    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (val.length < 3) { setShowSuggestions(false); return }

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(val)}&format=json&limit=5&addressdetails=1&accept-language=fr`,
          { headers: { 'Accept-Language': 'fr' } }
        )
        const data: Suggestion[] = await res.json()
        setSuggestions(data)
        setShowSuggestions(data.length > 0)
      } catch {}
    }, 350)
  }

  const handleSelectSuggestion = (s: Suggestion) => {
    setAdresse(s.display_name)
    setForm(prev => ({
      ...prev,
      latitude: parseFloat(s.lat),
      longitude: parseFloat(s.lon),
      lieuNom: prev.lieuNom || s.address?.city || s.address?.town || s.address?.village || s.display_name.split(',')[0],
    }))
    setSuggestions([])
    setShowSuggestions(false)
    setGeocodeOk(true)
  }

  const handleSave = async () => {
    if (!form.titre.trim()) { setError('Le titre est requis.'); return }
    setSaving(true)
    if (isEdit && editId) { updateMedal(editId, form); router.push(`/medal/${editId}`) }
    else { const medal = createMedal(form); router.push(`/medal/${medal.id}`) }
  }

  const allTags = Array.from(new Set([...DEFAULT_TAGS, ...customTags])).sort()

  return (
    <div className="min-h-screen bg-bg pb-10">
      <div className="bg-dark px-4 pt-4 pb-4">
        <img src={MDP_LOGO} alt="Monnaie de Paris" className="h-[58px] w-auto object-contain" style={{ mixBlendMode: 'lighten' }} />
      </div>

      <div className="px-5 pt-4 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="text-text text-xl">←</button>
          <h1 className="text-[24px] font-medium text-text">{isEdit ? 'Modifier' : 'Ajouter une médaille'}</h1>
        </div>

        {/* Photo */}
        <div>
          <p className="text-sm font-medium text-text mb-2">Photo</p>
          <div className="flex gap-3 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <button onClick={() => fileRef.current?.click()}
              className="w-[116px] h-[113px] flex-shrink-0 rounded-2xl bg-card border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="#717182"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>
              <span className="text-sm text-muted">Ajouter</span>
            </button>
            <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={handlePhoto} />
            {form.photos.map((uri, i) => (
              <div key={i} className="relative w-[116px] h-[113px] flex-shrink-0 rounded-2xl overflow-hidden">
                <img src={uri} alt="" className="w-full h-full object-cover" />
                <button onClick={() => set('photos', form.photos.filter((_, j) => j !== i))}
                  className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/50 text-white text-[10px] flex items-center justify-center">✕</button>
              </div>
            ))}
          </div>
        </div>

        {/* Informations générales */}
        <Card title="Informations générales">
          <Row label="Titre *">
            <input className="flex-1 py-3 text-sm text-text bg-transparent outline-none placeholder:text-muted/50"
              placeholder="Nom de la pièce" value={form.titre ?? ''}
              onChange={e => set('titre', e.target.value)} />
          </Row>
          <Row label="Année">
            <input className="flex-1 py-3 text-sm text-text bg-transparent outline-none placeholder:text-muted/50"
              placeholder="Ex : 2024" value={form.annee ?? ''}
              onChange={e => set('annee', e.target.value)} />
          </Row>
          <Row label="Couleur" last>
            <input className="flex-1 py-3 text-sm text-text bg-transparent outline-none placeholder:text-muted/50"
              placeholder="Ex : Or" value={form.etat ?? ''}
              onChange={e => set('etat', e.target.value)} />
          </Row>
        </Card>

        {/* Tags */}
        <Card title="Tags">
          <div className="p-3 flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button key={tag} onClick={() => toggleTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-all
                  ${form.tags.includes(tag) ? 'bg-or text-white border-or' : 'bg-bg text-text border-gray-200'}`}>
                {tag}
              </button>
            ))}
            <div className="flex gap-2 w-full mt-1">
              <input className="flex-1 bg-bg border border-gray-200 rounded-full px-3 py-1.5 text-sm outline-none placeholder:text-muted/60"
                placeholder="Nouveau tag..." value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddTag()} />
              <button onClick={handleAddTag}
                className="px-4 py-1.5 bg-or-light border border-or text-or text-sm rounded-full">+ Créer</button>
            </div>
          </div>
        </Card>

        {/* Emplacement avec autocomplétion */}
        <div>
          <p className="text-sm font-medium text-text mb-2">Emplacement</p>
          <div className="bg-card rounded-2xl overflow-visible px-4 relative" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <Row label="Lieu illustré">
              <input className="flex-1 py-3 text-sm text-text bg-transparent outline-none placeholder:text-muted/50"
                placeholder="Ex : Tour Eiffel, Paris"
                value={form.lieuNom ?? ''}
                onChange={e => set('lieuNom', e.target.value)} />
            </Row>

            {/* Adresse avec autocomplétion */}
            <div className={`flex items-center gap-3 relative ${!form.latitude ? '' : 'border-b-0'}`}>
              <span className="text-xs text-muted w-24 flex-shrink-0 py-3">Adresse</span>
              <input
                className="flex-1 py-3 text-sm text-text bg-transparent outline-none placeholder:text-muted/50"
                placeholder="Tapez une adresse..."
                value={adresse}
                onChange={e => handleAdresseChange(e.target.value)}
                onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                autoComplete="off"
              />
              {geocodeOk && <span className="text-green-500 text-sm pr-1 flex-shrink-0">✓</span>}
            </div>

            {/* Dropdown suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-2xl overflow-hidden z-50"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
                {suggestions.map((s, i) => {
                  const parts = s.display_name.split(',')
                  const main = parts[0]
                  const sub = parts.slice(1, 3).join(',').trim()
                  return (
                    <button key={i} onMouseDown={() => handleSelectSuggestion(s)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-bg transition-colors
                        ${i < suggestions.length - 1 ? 'border-b border-gray-100' : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#EF9204" className="flex-shrink-0 mt-0.5">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-text truncate">{main}</p>
                        {sub && <p className="text-xs text-muted truncate">{sub}</p>}
                      </div>
                    </button>
                  )
                })}
              </div>
            )}

            {/* Confirmation localisation */}
            {form.latitude && form.longitude && (
              <div className="py-2 border-t border-gray-100">
                <p className="text-xs text-green-600">
                  📍 Localisée — apparaîtra sur la carte
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Carte collaborative */}
        <Card title="Carte collaborative">
          <div className="px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text">Partager sur la carte</p>
              <p className="text-xs text-muted mt-0.5">Visible par tous les utilisateurs</p>
            </div>
            <button onClick={() => set('shared' as any, !(form as any).shared)}
              className={`w-12 h-6 rounded-full transition-all relative ${(form as any).shared ? 'bg-or' : 'bg-gray-300'}`}>
              <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all shadow-sm ${(form as any).shared ? 'left-6' : 'left-0.5'}`} />
            </button>
          </div>
        </Card>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button onClick={handleSave} disabled={saving}
          className="w-full bg-or text-white py-3 rounded-2xl font-medium text-[16px] disabled:opacity-60">
          {saving ? 'Enregistrement...' : isEdit ? 'Enregistrer les modifications' : 'Ajouter à ma collection'}
        </button>
      </div>
    </div>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-medium text-text mb-2">{title}</p>
      <div className="bg-card rounded-2xl overflow-hidden px-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        {children}
      </div>
    </div>
  )
}

function Row({ label, children, last }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${!last ? 'border-b border-gray-100' : ''}`}>
      <span className="text-xs text-muted w-24 flex-shrink-0 py-3">{label}</span>
      {children}
    </div>
  )
}

export default function AjouterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg flex items-center justify-center"><p className="text-muted">Chargement...</p></div>}>
      <AjouterForm />
    </Suspense>
  )
}
