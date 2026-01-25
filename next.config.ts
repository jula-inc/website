import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // trailing slashを統一してリダイレクトループを防ぐ
  trailingSlash: false,
  
  // 本番環境でのパフォーマンス最適化
  poweredByHeader: false,
  
  // 画像最適化
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
