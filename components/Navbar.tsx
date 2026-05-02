'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';
import Search from './search';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, MessageCircle, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/popular', label: '科普入门' },
  { href: '/pro', label: '技术深潜' },
  { href: '/projects', label: '项目' },
  { href: '/about', label: '关于' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [showWechat, setShowWechat] = useState(false);
  const wechatRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭微信二维码
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wechatRef.current && !wechatRef.current.contains(e.target as Node)) {
        setShowWechat(false);
      }
    };
    if (showWechat) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showWechat]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 relative">
        <nav className="flex items-center justify-between py-4">
          {/* 左侧 Logo */}
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary no-underline shrink-0">
            锦创<span className="text-accent">AI</span>
          </Link>

          {/* 中间导航链接（居中） */}
          <ul className="hidden lg:flex gap-1 text-sm font-semibold absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative px-3 py-2">
                  <Link href={item.href} className="block no-underline">
                    <motion.span
                      whileHover={{ y: -2 }}
                      className={`transition-colors ${isActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      {item.label}
                    </motion.span>
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

          {/* 右侧社交图标 + 主题切换 */}
          <div className="flex items-center gap-4 shrink-0">
            <motion.a whileHover={{ y: -2 }} href="https://github.com/LiuCzj" target="_blank" className="text-muted-foreground hover:text-accent transition" title="GitHub">
              <Github size={18} />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="https://blog.csdn.net/datafenxi?spm=1000.2115.3001.10640" target="_blank" className="text-muted-foreground hover:text-accent transition" title="CSDN">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="3" width="20" height="18" rx="2"/>
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">C</text>
              </svg>
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="https://www.zhihu.com/people/datafenxi" target="_blank" className="text-muted-foreground hover:text-accent transition" title="知乎">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <text x="12" y="18" textAnchor="middle" fontSize="18" fontWeight="bold">知</text>
              </svg>
            </motion.a>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => setShowWechat(!showWechat)}
              className="text-muted-foreground hover:text-accent transition"
              title="微信公众号"
            >
              <MessageCircle size={18} />
            </motion.button>
            <motion.a whileHover={{ y: -2 }} href="mailto:placeholder@example.com" className="text-muted-foreground hover:text-accent transition" title="邮箱">
              <Mail size={18} />
            </motion.a>
            <span className="w-px h-6 bg-border mx-1" />
            <ThemeToggle />
          </div>
        </nav>

        {/* 微信二维码弹出 */}
        <AnimatePresence>
          {showWechat && (
            <motion.div
              ref={wechatRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-6 top-16 bg-card border border-border rounded-xl p-4 shadow-xl z-50 flex flex-col items-center"
            >
              <button
                onClick={() => setShowWechat(false)}
                className="self-end text-muted-foreground hover:text-foreground -mt-1 -mr-1"
              >
                <X size={16} />
              </button>
              <img src="/images/wechat-qrcode.jpg" alt="微信公众号：锦创AI" width="120" className="rounded-lg" />
              <p className="text-xs mt-2 text-muted-foreground">扫码关注「锦创AI」</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 搜索框 */}
        <Search />
      </div>
    </header>
  );
}