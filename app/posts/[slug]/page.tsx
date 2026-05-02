import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { marked } from "marked";
import Giscus from "@/components/giscus";
import TagLink from "@/components/TagLink";

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

  const htmlContent = marked(post.content);

  // 受众标签映射
  const audienceLabel =
    post.audience === "professional" ? "技术深潜" :
    post.audience === "projects" ? "项目展示" : "科普入门";

  return (
    <article className="bg-card rounded-xl p-8 my-8 border border-border shadow-sm">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-muted-foreground flex items-center flex-wrap gap-2">
          <time>{post.date}</time>
          <span>·</span>
          <span>{post.readingTime} 分钟阅读</span>
          <span>·</span>
          <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-semibold uppercase">
            {audienceLabel}
          </span>
        </div>
      </header>

      <div
        className="prose dark:prose-invert max-w-none text-foreground"
        dangerouslySetInnerHTML={{ __html: htmlContent as string }}
      />

      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
        <span className="font-semibold text-foreground mr-1">标签：</span>
        {post.tags.map((tag, index) => (
          <TagLink key={tag} tag={tag} index={index} />
        ))}
      </div>

      <Giscus />
    </article>
  );
}