import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { AnimatedGrid, AnimatedItem } from '@/components/MotionLayout'

export default function ProPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
          Pro 专栏
        </h1>
        <p className="text-muted-foreground">进阶实战教程与商业级项目解析。</p>
      </div>

      <AnimatedGrid>
        {posts?.map((post: any) => (
          <AnimatedItem key={post.slug}>
            <PostCard post={post} />
          </AnimatedItem>
        ))}
      </AnimatedGrid>
    </div>
  )
}