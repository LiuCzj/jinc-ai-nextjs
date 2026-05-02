'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">锦创AI</Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/">首页</Link>
            <Link href="/category/intro">科普入门</Link>
            <Link href="/category/deep">技术深潜</Link>
          </div>

          {/* 搜索框动效 */}
          <motion.div 
            whileFocus={{ scale: 1.02 }}
            className="relative"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder="搜索文章..."
              className="bg-secondary/50 border-none rounded-full py-1.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary w-40 md:w-64 transition-all"
            />
          </motion.div>

          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}