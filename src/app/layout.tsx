import type { Metadata } from 'next'
import './globals.css'
import NavBar from './components/navbar'


export const metadata: Metadata = {
  title: 'Restobar Casa Serrano - Melipilla',
  description: 'Menu virtual',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
