import Link from 'next/link'

export default function PostCard({ post }: { post: any }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold px-2 py-1 rounded bg-primary/10 text-primary uppercase">
            {post.category || '技术文章'}
          </span>
          <time className="text-xs text-muted-foreground">{post.date}</time>
        </div>
        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {post.description}
        </p>
      </div>
    </Link>
  )
}