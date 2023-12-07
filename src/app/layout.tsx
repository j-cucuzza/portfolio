import type { Metadata } from 'next'
import Nav from './components/nav'
import { Exo_2 } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'

const exo2 = Exo_2({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Justin Cucuzza',
  description: 'Portfolio for Justin Cucuzza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={exo2.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
