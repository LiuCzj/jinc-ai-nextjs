import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/post-card';

export const metadata = {
  title: '技术深潜',
};

export default function ProPage() {
  const posts = getAllPosts().filter((p) => p.audience === 'professional');

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-6">技术深潜</h1>
      <p className="text-muted-foreground mb-6">
        深度技术文章，涵盖项目复盘、算法推导、工程实践，适合同行交流与简历加分。
      </p>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}