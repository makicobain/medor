'use client'
import { Medal, MedalFormData } from '@/constants/types'
import { v4 as uuidv4 } from 'uuid'

const KEY = 'medor_medals'
const TAGS_KEY = 'medor_tags'

export function getAllMedals(): Medal[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

export function saveMedals(medals: Medal[]) {
  localStorage.setItem(KEY, JSON.stringify(medals))
}

export function createMedal(data: MedalFormData): Medal {
  const medals = getAllMedals()
  const now = new Date().toISOString()
  const medal: Medal = { ...data, id: uuidv4(), dateCreation: now, dateModification: now }
  saveMedals([medal, ...medals])
  return medal
}

export function updateMedal(id: string, data: Partial<MedalFormData>): void {
  const medals = getAllMedals()
  const idx = medals.findIndex(m => m.id === id)
  if (idx === -1) return
  medals[idx] = { ...medals[idx], ...data, dateModification: new Date().toISOString() }
  saveMedals(medals)
}

export function deleteMedal(id: string): void {
  saveMedals(getAllMedals().filter(m => m.id !== id))
}

export function getCustomTags(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(TAGS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

export function addCustomTag(tag: string): void {
  const tags = getCustomTags()
  if (!tags.includes(tag)) localStorage.setItem(TAGS_KEY, JSON.stringify([...tags, tag]))
}

export function exportJSON(): string {
  return JSON.stringify({ version: '1.0', exportDate: new Date().toISOString(), medals: getAllMedals() }, null, 2)
}
