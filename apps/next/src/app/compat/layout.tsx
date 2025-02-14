import {VisualEditing} from 'next-sanity'
import {unstable_cache} from 'next/cache'
import {draftMode} from 'next/headers'
import '../../tailwind.css'
import {Timesince} from '../Timesince'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {children}
        {(await draftMode()).isEnabled && <VisualEditing />}
        <a className="fixed bottom-1 left-1 block rounded bg-slate-900 px-2 py-1 text-xs text-slate-100">
          app-router:{' '}
          {(await draftMode()).isEnabled
            ? 'draftMode'
            : process.env.NEXT_PUBLIC_VERCEL_ENV || 'development'}
          {', '}
          <span className="text-slate-300">
            served: <Timesince since={await getCachedServed()} />
          </span>
        </a>
      </body>
    </html>
  )
}

const getCachedServed = unstable_cache(async () => new Date().toJSON(), ['compat-test'], {
  revalidate: 1,
})
