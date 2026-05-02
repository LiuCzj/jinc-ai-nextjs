'use client'

import { motion } from 'framer-motion'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Image from 'next/image'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        {/* 头像呼吸感动画 */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20"
        >
          <Image 
            src="/avatar.png" // 请确保你的 public 文件夹下有这个图片，或者替换为你的图片路径
            alt="Avatar"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
        >
          锦创AI
        </motion.h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          专注于机器学习、时间序列与计算机视觉的 AI 技术博客。提供科普入门与技术深潜内容。
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6"
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={item}>
            <PostCard post={post} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}