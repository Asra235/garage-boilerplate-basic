import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { PageHeader } from '@/components/layout/PageHeader'
import { CreateNoteForm } from '@/components/CreateNoteForm'
import { NotesList } from '@/components/NotesList'

export const metadata: Metadata = { title: 'Notes' }

export default async function NotesPage() {
  await requireAuth()
  return (
    <div className="space-y-6">
      <PageHeader title="Notes" description="Your personal notes" />
      <CreateNoteForm />
      <NotesList />
    </div>
  )
}