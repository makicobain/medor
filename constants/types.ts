export type Medal = {
  id: string
  titre: string
  description?: string
  serie?: string
  annee?: string
  etat?: string
  tags: string[]
  latitude?: number
  longitude?: number
  typeLocalisation?: string
  lieuNom?: string
  lieuAchat?: string
  dateAcquisition?: string
  notes?: string
  photos: string[]
  shared?: boolean
  dateCreation: string
  dateModification: string
}

export type MedalFormData = Omit<Medal, 'id' | 'dateCreation' | 'dateModification'>

export const DEFAULT_TAGS = [
  'Paris', 'Monument', 'UNESCO', 'Château', 'Nature',
  'Bretagne', 'Normandie', 'Provence', 'Musée', 'Rare',
  'Église', 'Fleuve', 'Île-de-France', 'Montagne', 'Littoral',
]

export const ETATS = ['Neuf', 'Très bon état', 'Bon état', 'État moyen', 'Mauvais état']

export const TYPE_LOCALISATION = ["Lieu illustré", "Lieu d'achat", "Lieu de collection", "Autre"]
