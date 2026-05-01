"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // mounted 状态可以确保只在客户端渲染图标，避免水合不匹配
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // 还没挂载时，显示一个占位按钮，防止布局跳动
    return (
      <button
        className="w-16 h-9 rounded-lg border border-border bg-card"
        aria-label="切换暗色模式"
      />
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="bg-card border border-border text-foreground px-3 py-1.5 rounded-lg text-sm cursor-pointer transition hover:bg-secondary"
      aria-label="切换暗色模式"
    >
      {resolvedTheme === "dark" ? "☀️ 明亮" : "🌙 暗黑"}
    </button>
  );
}