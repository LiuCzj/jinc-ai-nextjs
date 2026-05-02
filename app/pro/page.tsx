'use client'
import { motion } from 'framer-motion'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard' // 修复：这里首字母必须大写！

export default function ProPage() {
  const posts = getAllPosts() // 如果你有获取Pro文章的逻辑，请在这里替换

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
          Pro 专栏
        </h1>
        <p className="text-muted-foreground">进阶实战教程与商业级项目解析。</p>
      </div>

      <motion.div 
        initial="hidden" animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
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