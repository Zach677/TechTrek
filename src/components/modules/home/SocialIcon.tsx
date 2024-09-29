// https://github.com/Innei/Shiro/blob/main/src/components/modules/home/SocialIcon.tsx
import type { ReactNode } from 'react'
import { memo, useMemo } from 'react'

import { XIcon } from '~/components/icons/platform/XIcon'

interface SocialIconProps {
  type: string
  id: string
}

const iconSet: Record<
  string,
  [string, ReactNode, string, (id: string) => string]
> = {
  github: [
    'Github',
    <i className="icon-[mingcute--github-line]" />,
    '#181717',
    (id) => `https://github.com/${id}`,
  ],
  x: ['x', <XIcon />, 'rgba(36,46,54,1.00)', (id) => `https://x.com/${id}`],
  mail: [
    'Email',
    <i className="icon-[mingcute--mail-line]" />,
    '#D44638',
    (id) => `mailto:${id}`,
  ],
  get email() {
    return this.mail
  },
  get feed() {
    return this.rss
  },
  rss: [
    'RSS',
    <i className="icon-[mingcute--rss-line]" />,
    '#FFA500',
    (id) => id,
  ],
}
const icons = Object.keys(iconSet)

export const isSupportIcon = (icon: string) => icons.includes(icon)
export const getSocialIconName = (type: string): string => {
  return iconSet[type]?.[0] || type.charAt(0).toUpperCase() + type.slice(1)
}
export const SocialIcon = memo((props: SocialIconProps) => {
  const { id, type } = props

  const [name, Icon, iconBg, hrefFn] = useMemo(() => {
    const [name, Icon, iconBg, hrefFn] = (iconSet as any)[type as any] || []
    return [name, Icon, iconBg, hrefFn]
  }, [type])

  if (!name) return null
  const href = hrefFn(id)

  // TODO add Pop-up animation
  return (
    <div title={name}>
      <a
        target="_blank"
        href={href}
        className="flex aspect-square size-10 items-center justify-center rounded-full text-2xl text-white"
        style={{
          background: iconBg,
        }}
        rel="noreferrer"
      >
        {Icon}
      </a>
    </div>
  )
})
SocialIcon.displayName = 'SocialIcon'
