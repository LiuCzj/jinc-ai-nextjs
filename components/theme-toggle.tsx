"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="w-20 h-9 rounded-lg border border-border bg-card"
        aria-label="加载中"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="bg-card border border-border text-foreground px-3 py-1.5 rounded-lg text-sm cursor-pointer transition hover:bg-secondary"
      aria-label={isDark ? "切换到明亮模式" : "切换到暗黑模式"}
    >
      {isDark ? "☀️ 明亮" : "🌙 暗黑"}
    </button>
  );
}