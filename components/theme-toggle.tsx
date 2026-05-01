"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-16 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="bg-surface border border-border text-text px-3 py-1.5 rounded-lg text-sm cursor-pointer transition hover:bg-border"
      aria-label="切换暗色模式"
    >
      🌓 模式
    </button>
  );
}