import Link from 'next/link';
// import Layout from '~/components/layout/Layout';
import '~/styles/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">我的个人主页</h1>
        <div className="bg-base-200 shadow-out-sm rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">欢迎来到我的个人主页</h2>
          <p className="text-base-content mb-4">
            这是一个使用Next.js和Tailwind CSS构建的示例主页，采用了自定义的UI Kit颜色方案。
          </p>
          <div className="flex space-x-4 mt-6">
            <Link href="/about" className="btn btn-primary">
              了解更多
            </Link>
            <button className="btn btn-outline btn-secondary">联系我</button>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-out-sm hover:shadow-lg transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-accent">我的技能</h3>
              <p>在这里列出您的主要技能和专长。</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-out-sm hover:shadow-lg transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-info">项目展示</h3>
              <p>展示您最引以为豪的项目和作品。</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-out-sm hover:shadow-lg transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-success">博客文章</h3>
              <p>分享您的最新思考和技术文章。</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}