export const metadata = { title: '项目展示' };

export default function ProjectsPage() {
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-6">项目展示</h1>
      <p className="text-muted-foreground mb-6">这里将展示我的代表性项目。</p>
      <div className="bg-card rounded-xl p-6 border border-border">
        <ul className="space-y-4">
          <li>
            <strong>项目一：时间序列预测平台</strong>
            <p className="text-muted-foreground text-sm">使用自研Transformer模型，应用于供应链需求预测</p>
          </li>
          <li>
            <strong>项目二：工业缺陷检测系统</strong>
            <p className="text-muted-foreground text-sm">基于YOLOv8与异常检测算法，部署至边缘设备</p>
          </li>
        </ul>
      </div>
    </div>
  );
}