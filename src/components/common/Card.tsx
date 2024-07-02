import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { SocialIcon } from '~/components/modules/home/SocialIcon'

interface TagProps {
  href: string
  children: ReactNode
}

const Tag = ({ href, children }: TagProps) => (
  <Link
    href={href}
    className="rounded-full bg-primary/10 px-4 py-2 text-sm text-primary transition-opacity hover:opacity-80"
  >
    {children}
  </Link>
)

export const Card: Component = ({ children }) => {
  return (
    <div className="mx-auto flex h-[380px] max-w-md flex-col items-center justify-between rounded-lg bg-base-100 p-8 shadow-lg">
      <div className="flex w-full flex-col items-center">
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          <Tag href="/">我</Tag>
          <Tag href="/blog">文章</Tag>
          <Tag href="/friends">朋友们</Tag>
        </div>

        <div className="relative mb-6">
          <Image
            src="/Star.png"
            alt="Avatar"
            width={120}
            height={120}
            className="mx-auto rounded-full"
          />
        </div>
        <h1 className="mb-2 text-center text-2xl font-semibold text-base-content">
          Star
        </h1>
        <p className="mb-6 text-center text-base text-base-content/70">
          Love Coding.
        </p>
      </div>

      <ul className="mt-8 flex flex-wrap gap-4 center lg:mx-auto lg:mt-5 lg:justify-start">
        <SocialIcon type="github" id="Ssttar" />
        <SocialIcon type="x" id="Ssttar123" />
        <SocialIcon type="mail" id="i@ssstttar.com" />
        <SocialIcon type="rss" id="https://ssstttar.com/feed" />
      </ul>
      {children}
    </div>
  )
}
