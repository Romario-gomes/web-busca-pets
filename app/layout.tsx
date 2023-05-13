import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import ToasterProvider from './components/providers/ToasterProvider'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({
  subsets: ['latin']
})


export const metadata = {
  title: 'Busca Pets',
  description: 'Busca Pets Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
