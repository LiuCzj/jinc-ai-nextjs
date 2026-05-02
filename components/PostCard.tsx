'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PostCard({ post }: { post: any }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <motion.div 
        whileHover={{ scale: 1.01, translateY: -2 }}
        className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all shadow-sm cursor-pointer"
      >
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-500 uppercase">
            {post.category || '技术文章'}
          </span>
          <time className="text-xs text-muted-foreground">{post.date}</time>
        </div>
        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {post.description}
        </p>
      </motion.div>
    </Link>
  )
}