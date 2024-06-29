import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { GitHubBrandIcon } from '../icons/platform/GitHubBrandIcon'
import { MailIcon } from '../icons/platform/MailIcon'
import { XIcon } from '../icons/platform/XIcon'

interface CardProps {
  children?: ReactNode
}

interface TagProps {
  href: string
  children: ReactNode
}

const Tag = ({ href, children }: TagProps) => (
  <Link
    href={href}
    className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary transition-opacity hover:opacity-80"
  >
    {children}
  </Link>
)

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-3xl bg-base-100 p-8 text-center shadow-lg">
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        <Tag href="/">我</Tag>
        <Tag href="/blog">文章</Tag>
        <Tag href="/friends">朋友们</Tag>
      </div>
      <div className="relative mb-4 inline-block">
        <Image
          src="/Star.png"
          alt="Avatar"
          width={128}
          height={128}
          className="rounded-full"
        />
      </div>
      <h1 className="mb-1 text-2xl font-semibold text-base-content">Star</h1>
      <p className="mb-4 text-base-content/70">Love Coding.</p>

      <div className="mt-6 flex justify-center space-x-4">
        <Link
          href="https://github.com/Ssttar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333] transition-transform hover:scale-110"
        >
          <GitHubBrandIcon className="h-5 w-5 text-white" />
        </Link>
        <Link
          href="https://x.com/Ssttar123"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#536471] transition-transform hover:scale-110"
        >
          <XIcon className="h-5 w-5 text-white" />
        </Link>
        <Link
          href="mailto:i@ssstttar.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EA4335] transition-transform hover:scale-110"
        >
          <MailIcon className="h-7 w-7 text-white" />
        </Link>
        {/* 这里添加彩色的社交媒体图标 */}
      </div>
      {children}
    </div>
  )
}
