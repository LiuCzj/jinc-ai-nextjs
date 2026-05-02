import { getAllPosts } from '@/lib/posts';
import { AnimatedHomeHeader } from '@/components/MotionLayout';
import AudienceFilter from '@/components/audience-filter';
import type { Metadata } from 'next';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '首页 - 锦创AI',
    description: '专注于机器学习与时间序列的AI技术博客',
  };
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const allPosts = getAllPosts();
  const params = await searchParams;
  const searchQuery = params?.search as string | undefined;

  const posts = searchQuery
    ? allPosts.filter(
        (p) =>
          p.title.includes(searchQuery) ||
          p.tags.some((t) => t.includes(searchQuery))
      )
    : allPosts;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <AnimatedHomeHeader />
      <AudienceFilter posts={posts} />
    </div>
  );
}