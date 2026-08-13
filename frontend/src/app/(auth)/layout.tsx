import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 bg-[radial-gradient(800px_circle_at_center,color-mix(in_srgb,var(--color-primary)_30%,transparent)_0%,transparent_50%)]">
      <div className='border border-border rounded-[24px] w-[460px] h-[703px] p-12 bg-card'>
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  )
}
