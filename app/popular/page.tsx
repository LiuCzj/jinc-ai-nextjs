import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/post-card';

export const metadata = {
  title: '科普入门',
};

export default function PopularPage() {
  const posts = getAllPosts().filter((p) => p.audience === 'public');

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-6">科普入门</h1>
      <p className="text-muted-foreground mb-6">面向大众的AI科普文章，让每个人都跟上智能时代的脚步。</p>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}