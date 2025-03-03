import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/lib/theme'

export const metadata: Metadata = {
  title: 'Ayman Amkassou | Research & Engineering Portfolio',
  description: 'Software engineering student and research assistant with experience at Oracle Labs.',
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-grow py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
