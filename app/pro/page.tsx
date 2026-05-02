import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { AnimatedGrid, AnimatedItem } from '@/components/MotionLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pro 专栏 - 锦创AI',
  description: '进阶实战教程与商业级项目解析，面向专业读者。',
};

export default function ProPage() {
  const posts = getAllPosts().filter((p) => p.audience === 'professional');

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
          Pro 专栏
        </h1>
        <p className="text-muted-foreground">进阶实战教程与商业级项目解析。</p>
      </div>

      {posts.length > 0 ? (
        <AnimatedGrid>
          {posts.map((post) => (
            <AnimatedItem key={post.slug}>
              <PostCard post={post} />
            </AnimatedItem>
          ))}
        </AnimatedGrid>
      ) : (
        <p className="text-muted-foreground text-sm">技术深潜文章即将上线...</p>
      )}
    </div>
  );
}