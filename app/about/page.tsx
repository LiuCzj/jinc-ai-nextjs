export const metadata = { title: "关于我" };

export default function AboutPage() {
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-6">关于我</h1>
      <div className="bg-surface rounded-xl p-6 border border-border">
        <p className="mb-4">
          👋 你好，我是锦创AI的创作者，一名长期穿梭在数据与算法之间的AI从业者。
        </p>
        <p className="mb-2">
          <strong>核心领域</strong>：机器学习、深度学习、时间序列分析、计算机视觉、数据分析。
        </p>
        <p className="mb-4">
          <strong>写这个博客的初衷</strong>：把看似高深的AI知识拆解成每个人都能看懂的内容，同时也记录自己在实际项目中的思考与复盘。
        </p>
        <blockquote className="border-l-4 border-accent pl-4 italic text-text-light">
          相信好的技术分享应该让同行有收获，让大众看得懂。
        </blockquote>
      </div>
    </div>
  );
}