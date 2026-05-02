'use client';

import { useState } from 'react';
import { Github, Mail, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showWechat, setShowWechat] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <div className="flex justify-center gap-6 mb-6 items-center">
          <motion.a whileHover={{ y: -3 }} href="https://github.com/LiuCzj" target="_blank" className="text-muted-foreground hover:text-accent transition" title="GitHub">
            <Github size={20} />
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href="https://blog.csdn.net/datafenxi?spm=1000.2115.3001.10640" target="_blank" className="text-muted-foreground hover:text-accent transition" title="CSDN">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="3" width="20" height="18" rx="2"/>
              <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">C</text>
            </svg>
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href="https://www.zhihu.com/people/datafenxi" target="_blank" className="text-muted-foreground hover:text-accent transition" title="知乎">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <text x="12" y="18" textAnchor="middle" fontSize="18" fontWeight="bold">知</text>
            </svg>
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href="mailto:placeholder@example.com" className="text-muted-foreground hover:text-accent transition" title="邮箱">
            <Mail size={20} />
          </motion.a>
          <motion.button whileHover={{ y: -3 }} onClick={() => setShowWechat(!showWechat)} className="text-muted-foreground hover:text-accent transition" title="微信公众号">
            <MessageCircle size={20} />
          </motion.button>
        </div>

        <AnimatePresence>
          {showWechat && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 overflow-hidden"
            >
              <img src="/images/wechat-qrcode.jpg" alt="微信公众号：锦创AI" width="120" className="mx-auto rounded-xl shadow-lg" />
              <p className="text-xs mt-2 text-muted-foreground">扫码关注「锦创AI」</p>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-sm text-muted-foreground">
          © {currentYear} 锦创AI · 由 <a href="https://nextjs.org" target="_blank" className="hover:text-accent">Next.js</a> & <a href="https://vercel.com" target="_blank" className="hover:text-accent">Vercel</a> 驱动
        </p>
      </div>
    </footer>
  );
}