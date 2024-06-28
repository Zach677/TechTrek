// src/app/components/layout/header/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-base-200">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">我的主页</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">首页</Link></li>
            <li><Link href="/about">关于</Link></li>
            <li><Link href="/projects">项目</Link></li>
            <li><Link href="/blog">博客</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}