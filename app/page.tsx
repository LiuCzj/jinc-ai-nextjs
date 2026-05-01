import { getAllPosts } from "@/lib/posts";
import AudienceFilter from "@/components/audience-filter";
import MotionWrapper from "@/components/motion-wrapper";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <MotionWrapper delay={0.1}>
        <section className="text-center py-8">
          <img
            src="/images/avatar.png"
            alt="头像"
            width={100}
            height={100}
            className="rounded-full mx-auto shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-3xl font-bold mt-4 mb-1 tracking-tight">锦创AI</h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            专注于机器学习、时间序列与计算机视觉的AI技术博客。提供科普入门与技术深潜内容。
          </p>
        </section>
      </MotionWrapper>

      <MotionWrapper delay={0.2}>
        <AudienceFilter posts={posts} />
      </MotionWrapper>
    </>
  );
}