'use client';

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

interface SearchItem {
  slug: string;
  title: string;
  content: string;
  tags: string[];
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const fuseRef = useRef<Fuse<SearchItem> | null>(null);

  useEffect(() => {
    fetch('/api/search')
      .then((res) => res.json())
      .then((data) => {
        fuseRef.current = new Fuse(data, {
          keys: [
            { name: 'title', weight: 0.5 },
            { name: 'tags', weight: 0.3 },
            { name: 'content', weight: 0.2 },
          ],
          threshold: 0.4,
        });
      });
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (!fuseRef.current || value.trim().length < 1) {
      setResults([]);
      return;
    }
    setResults(fuseRef.current.search(value.trim()).slice(0, 8).map((r) => r.item));
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="🔍 搜索文章、标签..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full p-3 border border-input rounded-lg bg-card text-foreground text-sm transition focus:outline-none focus:border-ring focus:shadow-[0_0_0_3px_hsl(var(--ring)/0.1)]"
        autoComplete="off"
      />
      {results.length > 0 && (
        <div className="mt-4">
          {results.map((item) => (
            <div key={item.slug} className="bg-card rounded-xl p-4 mb-3 border border-border">
              <Link
                href={`/posts/${item.slug}`}
                className="font-semibold text-foreground hover:text-accent no-underline"
              >
                {item.title}
              </Link>
              <p className="text-muted-foreground text-xs mt-1">
                {item.content.substring(0, 120)}...
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full text-xs border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}