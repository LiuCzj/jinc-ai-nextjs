import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { AnimatedGrid, AnimatedItem } from '@/components/MotionLayout'

export default function PopularPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">热门文章</h1>
        <p className="text-muted-foreground">阅读量最高的技术深度长文。</p>
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