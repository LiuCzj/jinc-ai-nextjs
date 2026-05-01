import Link from 'next/link';

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
      className="bg-card rounded-xl p-6 mb-5 border border-border transition-all hover:-translate-y-0.5 hover:shadow-lg"
      data-audience={post.audience}
    >
      <div className="text-xs text-muted-foreground mb-2">
        <time>{post.date}</time>
        <span className="mx-1">·</span>
        <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide">
          {post.audience === 'professional' ? '技术深潜' : '科普入门'}
        </span>
      </div>
      <h2 className="text-xl font-semibold mb-2">
        <Link href={`/posts/${post.slug}`} className="text-foreground hover:text-accent no-underline">
          {post.title}
        </Link>
      </h2>
      <p className="text-muted-foreground text-sm mb-3">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-secondary text-secondary-foreground px-3 py-0.5 rounded-full text-xs font-medium border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}