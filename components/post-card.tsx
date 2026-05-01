import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  audience: string;
  readingTime: number;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article
      className="bg-surface rounded-xl p-6 mb-5 shadow-[var(--shadow)] border border-border transition-all hover:-translate-y-0.5 hover:shadow-lg"
      data-audience={post.audience}
    >
      <div className="text-xs text-text-light mb-2">
        <time>{post.date}</time>
        <span className="mx-1">·</span>
        <span className="bg-accent text-white px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide">
          {post.audience === "professional" ? "技术深潜" : "科普入门"}
        </span>
      </div>
      <h2 className="text-xl font-semibold mb-2">
        <Link href={`/posts/${post.slug}`} className="text-text hover:text-accent no-underline">
          {post.title}
        </Link>
      </h2>
      <p className="text-text-light text-sm mb-3">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#f1f5f9] dark:bg-[#1e293b] text-text-light px-3 py-0.5 rounded-full text-xs font-medium border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}