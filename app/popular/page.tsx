import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { AnimatedGrid, AnimatedItem } from '@/components/MotionLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '科普入门 - 锦创AI',
  description: '阅读量最高的人工智能科普文章，让每个人都能看懂AI。',
};

export default function PopularPage() {
  const posts = getAllPosts().filter((p) => p.audience === 'public');

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">热门文章</h1>
        <p className="text-muted-foreground">阅读量最高的技术深度长文。</p>
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
        <p className="text-muted-foreground text-sm">科普入门文章即将上线...</p>
      )}
    </div>
  );
}