import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // 如果仍部署到 GitHub Pages 需要此配置；Vercel 自动优化
  },
};

export default nextConfig;