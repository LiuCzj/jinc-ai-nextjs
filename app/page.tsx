import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { AnimatedHomeHeader, AnimatedGrid, AnimatedItem } from '@/components/MotionLayout'
import AudienceFilter from '@/components/audience-filter'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const allPosts = getAllPosts()
  const params = await searchParams
  const searchQuery = params?.search as string | undefined

  // 服务端根据搜索参数过滤
  const posts = searchQuery
    ? allPosts.filter(
        p =>
          p.title.includes(searchQuery) ||
          p.tags.some(t => t.includes(searchQuery))
      )
    : allPosts

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <AnimatedHomeHeader />
      <AudienceFilter posts={posts} />

      <AnimatedGrid>
        {posts.map((post: any) => (
          <AnimatedItem key={post.slug}>
            <PostCard post={post} />
          </AnimatedItem>
        ))}
      </AnimatedGrid>
    </div>
  )
}