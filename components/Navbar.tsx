'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';
import { motion } from 'framer-motion';
import { Github, Mail, MessageCircle } from 'lucide-react';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/popular', label: '科普入门' },
  { href: '/pro', label: '技术深潜' },
  { href: '/projects', label: '项目' },
  { href: '/about', label: '关于' },
];

const socialLinks = [
  { href: 'https://github.com/LiuCzj', icon: Github, label: 'GitHub' },
  { href: 'https://blog.csdn.net/datafenxi?spm=1000.2115.3001.10640', icon: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="3" width="20" height="18" rx="2"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">C</text>
    </svg>
  ), label: 'CSDN' },
  { href: 'https://www.zhihu.com/people/datafenxi', icon: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <text x="12" y="18" textAnchor="middle" fontSize="18" fontWeight="bold">知</text>
    </svg>
  ), label: '知乎' },
  { href: '#wechat', icon: MessageCircle, label: '微信' },
  { href: 'mailto:placeholder@example.com', icon: Mail, label: '邮箱' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary no-underline">
            锦创<span className="text-accent">AI</span>
          </Link>

          <ul className="hidden lg:flex gap-1 text-sm font-semibold">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative px-3 py-2">
                  <Link
                    href={item.href}
                    className={`transition-colors no-underline ${isActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
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

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, color: '#3b82f6' }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
            <span className="w-px h-6 bg-border mx-1" />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}