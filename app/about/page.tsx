'use client'; // 需要客户端能力来运行动画

import { User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        {/* 动态头像 */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl"
        >
          <img src="/images/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
        </motion.div>
        <h1 className="text-3xl font-bold mb-4">关于我</h1>
        <p className="text-muted-foreground max-w-md mx-auto">长期穿梭在数据与算法之间的AI从业者</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-accent" size={24} />
            <h2 className="text-xl font-bold">核心领域</h2>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              机器学习 / 深度学习
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              时间序列分析
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              计算机视觉
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              数据分析
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-accent" size={24} />
            <h2 className="text-xl font-bold">写博客的初衷</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            把看似高深的AI知识拆解成每个人都能看懂的内容，同时也记录自己在实际项目中的思考与复盘。
          </p>
          <blockquote className="mt-6 border-l-3 border-accent pl-4 italic text-muted-foreground">
            相信好的技术分享应该让同行有收获，让大众看得懂。
          </blockquote>
        </div>
      </div>
    </div>
  );
}