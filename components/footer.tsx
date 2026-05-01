'use client';

import { useState } from 'react';
import { Github, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const [showWechat, setShowWechat] = useState(false);

  return (
    <footer className="max-w-3xl mx-auto px-6 mt-16 py-8 border-t border-border text-center text-text-light text-sm">
      <div className="flex justify-center gap-6 mb-4 items-center">
        {/* GitHub */}
        <a href="https://github.com/LiuCzj" target="_blank" className="text-text-light hover:text-accent transition" title="GitHub">
          <Github size={20} />
        </a>
        {/* CSDN */}
        <a href="https://blog.csdn.net/datafenxi?spm=1000.2115.3001.10640" target="_blank" className="text-text-light hover:text-accent transition" title="CSDN">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="3" width="20" height="18" rx="2"/>
            <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">C</text>
          </svg>
        </a>
        {/* 知乎 */}
        <a href="https://www.zhihu.com/people/datafenxi" target="_blank" className="text-text-light hover:text-accent transition" title="知乎">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <text x="12" y="18" textAnchor="middle" fontSize="18" fontWeight="bold">知</text>
          </svg>
        </a>
        {/* 邮箱 */}
        <a href="mailto:placeholder@example.com" className="text-text-light hover:text-accent transition" title="邮箱">
          <Mail size={20} />
        </a>
        {/* 微信 */}
        <button onClick={() => setShowWechat(!showWechat)} className="text-text-light hover:text-accent transition" title="微信公众号">
          <MessageCircle size={20} />
        </button>
      </div>

      {showWechat && (
        <div className="mb-4">
          <img src="/images/wechat-qrcode.jpg" alt="微信公众号：锦创AI" width="160" className="mx-auto rounded-xl shadow-lg" />
          <p className="text-xs mt-2 text-text-light">扫码关注「锦创AI」</p>
        </div>
      )}

      <p>© 2026 锦创AI · 由 Next.js & Vercel 驱动</p>
    </footer>
  );
}