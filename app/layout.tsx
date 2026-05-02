import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <div className="animate-in fade-in duration-700">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}