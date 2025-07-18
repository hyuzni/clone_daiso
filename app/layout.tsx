import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daiso Mall',
  description: 'A practice clone of the Daiso Mall, created by Hyuzni.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  )
}
