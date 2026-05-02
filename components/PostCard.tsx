'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categoryMap: Record<string, string> = {
  'public': '科普入门',
  'professional': '技术深潜',
  'projects': '项目展示',
};

export default function PostCard({ post }: { post: any }) {
  if (!post) return null

  const categoryLabel = categoryMap[post.audience] || 'AI 技术';

  return (
    <Link href={`/posts/${post.slug}`}>
      <motion.div
        whileHover={{ scale: 1.02, translateY: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all shadow-sm cursor-pointer"
      >
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
            {categoryLabel}
          </span>
          <time className="text-xs text-muted-foreground">{post.date}</time>
        </div>
        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
          {post.description}
        </p>
      </motion.div>
    </Link>
  )
}