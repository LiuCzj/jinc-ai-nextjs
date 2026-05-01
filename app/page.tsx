import { getAllPosts } from '@/lib/posts';
import AudienceFilter from '@/components/audience-filter';

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <section className="text-center py-8">
        <img
          src="/images/avatar.png"
          alt="头像"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
        <h1 className="text-3xl font-bold mt-4 mb-1 tracking-tight">锦创AI</h1>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          专注于机器学习、时间序列与计算机视觉的AI技术博客。提供科普入门与技术深潜内容。
        </p>
        <div className="flex justify-center gap-3 mt-5 flex-wrap">
          <span className="bg-secondary text-secondary-foreground border border-border px-3 py-1 rounded-full text-xs">🤖 机器学习</span>
          <span className="bg-secondary text-secondary-foreground border border-border px-3 py-1 rounded-full text-xs">📈 时间序列</span>
          <span className="bg-secondary text-secondary-foreground border border-border px-3 py-1 rounded-full text-xs">👁️ 计算机视觉</span>
        </div>
      </section>

      <AudienceFilter posts={posts} />
    </>
  );
}