import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { remark } from "remark";
import remarkHtml from "remark-html";
import Giscus from "@/components/giscus";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "404" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = (await remark().use(remarkHtml).process(post.content)).toString();

  return (
    <article className="bg-surface rounded-xl p-8 my-8 border border-border shadow-[var(--shadow)]">
      {/* 文章头部 */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-text-light">
          <time>{post.date}</time>
          <span className="mx-1">·</span>
          <span>{post.readingTime} 分钟阅读</span>
          <span className="mx-1">·</span>
          <span className="bg-accent text-white px-2 py-0.5 rounded-full text-xs font-semibold uppercase">
            {post.audience === "professional" ? "技术深潜" : "科普入门"}
          </span>
        </div>
      </header>

      {/* 文章正文 */}
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* 标签 */}
      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
        <span className="font-semibold text-text mr-1">标签：</span>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#f1f5f9] dark:bg-[#1e293b] text-text-light px-3 py-0.5 rounded-full text-xs font-medium border border-border"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Giscus 评论区 */}
      <Giscus />
    </article>
  );
}