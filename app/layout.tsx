import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="animate-in fade-in duration-1000">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}