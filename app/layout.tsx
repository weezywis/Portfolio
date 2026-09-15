import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wendy Ekong | Executive Assistant, HR & Project Operations',
  description: 'Wendy Ekong helps founders and teams stay organized, move projects forward, and build better systems.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
