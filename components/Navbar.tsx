'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';
import Search from './search';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/popular', label: '科普入门' },
  { href: '/pro', label: '技术深潜' },
  { href: '/projects', label: '项目' },
  { href: '/about', label: '关于' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        {/* 顶部导航栏 */}
        <nav className="flex items-center justify-between py-5">
          <Link href="/" className="text-xl font-bold text-foreground no-underline">
            锦创AI
          </Link>

          {/* 导航链接 */}
          <ul className="flex gap-8 text-base font-semibold">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`relative pb-1 transition-colors no-underline ${
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* 主题切换 */}
          <ThemeToggle />
        </nav>

        {/* 全局搜索框（基于 Fuse.js 和 /api/search） */}
        <Search />
      </div>
    </header>
  );
}