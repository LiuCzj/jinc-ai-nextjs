'use client'
import { motion } from 'framer-motion'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Image from 'next/image'

export default function Home() {
  const posts = getAllPosts()
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <motion.div 
          animate={{ scale: [1, 1.08, 1] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/10"
        >
          <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
        </motion.div>
        <h1 className="text-4xl font-black mb-4">锦创AI</h1>
        <p className="text-muted-foreground">专注于机器学习与时间序列的 AI 技术博客</p>
      </div>

      <motion.div 
        initial="hidden" animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="grid gap-6"
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
            <PostCard post={post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}