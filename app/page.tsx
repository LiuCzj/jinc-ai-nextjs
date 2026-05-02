'use client'
import { motion } from 'framer-motion'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard' // 首字母大写！

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        {/* 头像呼吸动画：平滑的放大缩小 */}
        <motion.div 
          animate={{ scale: [1, 1.08, 1] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/10 shadow-2xl"
        >
          <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          锦创AI
        </motion.h1>
        <p className="text-muted-foreground max-w-md mx-auto italic font-medium">
          “专注于机器学习与时间序列的 AI 技术博客”
        </p>
      </div>

      {/* 列表交错进入动效 */}
      <motion.div 
        initial="hidden" animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid gap-6"
      >
        {posts.map((post) => (
          <motion.div 
            key={post.slug} 
            variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}