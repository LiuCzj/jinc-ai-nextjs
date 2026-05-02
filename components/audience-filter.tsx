'use client';

import { useState } from 'react';
import PostCard from './PostCard';  // 注意大小写

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  audience: string;
  readingTime: number;
}

export default function AudienceFilter({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState<'all' | 'public' | 'professional'>('all');

  const filteredPosts =
    filter === 'all' ? posts : posts.filter((p) => p.audience === filter);

  return (
    <>
      <div className="flex gap-3 my-6 flex-wrap">
        {[
          { key: 'all', label: '📋 全部' },
          { key: 'public', label: '📖 科普入门' },
          { key: 'professional', label: '🔬 技术深潜' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key as typeof filter)}
            className={`px-5 py-2 rounded-lg border border-border font-medium text-sm transition-all ${
              filter === key
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-card text-muted-foreground hover:bg-secondary'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div id="post-list">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}