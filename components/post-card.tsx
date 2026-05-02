import Link from 'next/link'

export default function PostCard({ post }: { post: any }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all shadow-sm">
        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
        <p className="text-muted-foreground text-sm line-clamp-2">{post.description}</p>
        <div className="mt-4 flex gap-2">
          {post.tags?.map((tag: string) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">#{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}