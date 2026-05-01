'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';
import Search from './search';
// 引入 motion 库
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/popular', label: '科普入门' },
  { href: '/pro', label: '技术深潜' },
  { href: '/projects', label: '项目' },
  { href: '/about', label: '关于' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    // 1. 让整个头部固定在顶部
    // 2. 背景色用 var(--bg) 并加上透明度 backdrop-blur 实现毛玻璃效果
    <header className="sticky top-0 z-50 w-full bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex items-center justify-between py-5">
          <Link href="/" className="text-xl font-bold text-[var(--text)] no-underline">
            锦创AI
          </Link>
          
          {/* 导航链接部分 */}
          <ul className="flex gap-8 text-base font-semibold">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`relative pb-1 transition-colors no-underline ${
                      isActive
                        ? 'text-[var(--text)]'
                        : 'text-[var(--text-light)] hover:text-[var(--text)]'
                    }`}
                  >
                    {item.label}
                    {/* 当链接被选中（处于当前页面）时，显示一个带动画的下划线 */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />
        </nav>
        <Search />
      </div>
    </header>
  );
}