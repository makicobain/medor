'use client'
import { useState } from 'react'
import { PageHeader, EmptyState, AddFab } from '@/components/UI'

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-bg">
      <PageHeader title="Wishlist" count="0 médaille à acquérir" />
      <EmptyState icon="♡" message={"Votre wishlist est vide.\nAjoutez des médailles à acquérir !"} />
      <AddFab href="/ajouter" />
    </div>
  )
}
