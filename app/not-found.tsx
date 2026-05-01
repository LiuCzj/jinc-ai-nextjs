import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-24">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-text-light mb-6">页面去了另一个维度 🌀</p>
      <Link
        href="/"
        className="inline-block px-6 py-2.5 bg-accent text-white rounded-lg no-underline hover:opacity-90"
      >
        ← 返回首页
      </Link>
    </div>
  );
}