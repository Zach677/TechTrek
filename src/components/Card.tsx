import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
}

interface TagProps {
  href: string;
  children: ReactNode;
}

const Tag = ({ href, children }: TagProps) => (
  <Link href={href} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:opacity-80 transition-opacity">
    {children}
  </Link>
);

export default function Card({ children }: CardProps) {
  return (
    <div className="p-8 text-center bg-base-100 rounded-3xl shadow-lg">
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <Tag href="/">我</Tag>
        <Tag href="/blog">文章</Tag>
        <Tag href="/friends">朋友们</Tag>
      </div>

      <div className="relative inline-block mb-4">
        <Image
          src="/Star.png"
          alt="Avatar"
          width={128}
          height={128}
          className="rounded-full"
        />
      </div>

      <h1 className="text-2xl font-semibold text-base-content mb-1">Star</h1>
      <p className="text-base-content/70 mb-4">Love Coding.</p>

      <div className="flex justify-center space-x-3 mt-6">
        {/* 这里添加彩色的社交媒体图标 */}
      </div>

      {children}
    </div>
  );
}