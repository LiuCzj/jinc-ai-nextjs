'use client'

import { motion } from 'framer-motion'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard' // 确保你有这个组件

// 定义动画参数
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // 每个卡片间隔 0.1 秒依次进入
    }
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
      {/* 头部文字动效 */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          锦创AI
        </h1>
        <p className="text-muted-foreground">专注于机器学习与时间序列的 AI 技术博客</p>
      </motion.div>

      {/* 文章列表交错动效 */}
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