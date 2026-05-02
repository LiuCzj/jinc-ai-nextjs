'use client'

import { useEffect, useState } from 'react'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { AnimatedHomeHeader, AnimatedGrid, AnimatedItem } from '@/components/MotionLayout'
import AudienceFilter from '@/components/audience-filter'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const [posts, setPosts] = useState<ReturnType<typeof getAllPosts>>([])
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')

  useEffect(() => {
    setPosts(getAllPosts())
  }, [])

  // 根据 search 参数过滤（同时标题或标签包含关键词）
  const filtered = searchQuery
    ? posts.filter(
        p =>
          p.title.includes(searchQuery) ||
          p.tags.some(t => t.includes(searchQuery))
      )
    : posts

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <AnimatedHomeHeader />
      <AudienceFilter posts={filtered} />

      <AnimatedGrid>
        {filtered.map((post: any) => (
          <AnimatedItem key={post.slug}>
            <PostCard post={post} />
          </AnimatedItem>
        ))}
      </AnimatedGrid>
    </div>
  )
}