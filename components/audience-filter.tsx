"use client";

import { useState } from "react";
import PostCard from "./post-card";

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
  const [filter, setFilter] = useState<"all" | "public" | "professional">("all");

  const filteredPosts =
    filter === "all" ? posts : posts.filter((p) => p.audience === filter);

  return (
    <>
      {/* 筛选按钮 */}
      <div className="flex gap-3 my-6 flex-wrap">
        {[
          { key: "all", label: "📋 全部" },
          { key: "public", label: "📖 科普入门" },
          { key: "professional", label: "🔬 技术深潜" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key as typeof filter)}
            className={`px-5 py-2 rounded-lg border border-border font-medium text-sm transition-all ${
              filter === key
                ? "bg-accent text-white border-accent"
                : "bg-surface text-text-light hover:bg-border"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 文章列表 */}
      <div id="post-list">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
