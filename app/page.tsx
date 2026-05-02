import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { AnimatedHomeHeader, AnimatedGrid, AnimatedItem } from '@/components/MotionLayout'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <AnimatedHomeHeader />

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