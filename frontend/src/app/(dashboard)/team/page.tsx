import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { PageHeader } from '@/components/layout/PageHeader'
import { getServerSession } from '@/actions/auth.actions'
import { adminDb } from '@/lib/firebase/admin'
import { team } from '../../../../public/team'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Team' }

export default async function TeamPage() {

  await requireAuth()
  const session = await getServerSession()
  const profileSnap = session ? await adminDb.collection('users').doc(session.uid).get() : null

const displayName = profileSnap?.exists
    ? (profileSnap.data()?.displayName as string | null)
    : null

  const greetingName = displayName ?? session?.email ?? null
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[28px] font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Welcome back{greetingName ? `, ${greetingName}` : ''}.
        </p>
      </div>  
      {/* <PageHeader title="Team Workspace" description={`Welcome back, ${greetingName}`} />
      {/* <CreateNoteForm />
      <NotesList /> */}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(['Metric One', 'Metric Two', 'Metric Three'] as const).map((title) => (
          <div
            key={title}
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-card"
          >
            <p className="text-sm font-medium text-zinc-500">{title}</p>
            <p className="mt-2 text-3xl font-bold">—</p>
          </div>
        ))}
      </div>

      {/* Team member / button section */}
      <div className='flex items-center justify-between'>
      <div className=''>
        <h2 className="text-[18px] font-bold tracking-tight">Team Members</h2>
        <p className="mt-1 text-sm text-zinc-500">Meet the team behind this project</p>
      </div>

      <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover">Add Member</button>

      </div>

       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 items-start">

        {team.map(({ name, role, bio, image }) => (
            <div key={name} className="text-center rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-card">
            <Image src={image || "/images-hardcoded/placeholder.png"} width="64" height="64" className="mx-auto" alt={`A photo of ${image}`}></Image>
            <div className='pt-4'>
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm text-primary">{role}</p>
            </div>
            <p className="text-sm text-zinc-500 py-4">{bio}</p>
            <hr className='border-border' />
            {/* socials */}
            <div className='pt-4 flex justify-center gap-2'>
                <Image src="/message.png" width="28" height="28" alt={`Send ${name} a message`}/>
                <Image src="/email.png" width="28" height="28" alt={`Send ${name} an email`}/>
            </div>

            </div>
            // line divider

            


        ))}

        </div> 

    </div>
  )
}