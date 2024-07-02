/* eslint-disable react/jsx-key */
import { memo, useMemo } from 'react'
import type { ReactNode } from 'react'

import { XIcon } from '~/components/icons/platform/XIcon'
import { MotionButtonBase } from '~/components/ui/button'
import { FloatPopover } from '~/components/ui/float-popover'

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
export const SocialIcon = memo((props: SocialIconProps) => {
  const { id, type } = props

  const [name, Icon, iconBg, hrefFn] = useMemo(() => {
    const [name, Icon, iconBg, hrefFn] = (iconSet as any)[type as any] || []
    return [name, Icon, iconBg, hrefFn]
  }, [type])

  if (!name) return null
  const href = hrefFn(id)

  return (
    <FloatPopover
      type="tooltip"
      triggerElement={
        <MotionButtonBase
          className="flex aspect-square size-10 rounded-full text-2xl text-white center"
          style={{
            background: iconBg,
          }}
        >
          <a
            target="_blank"
            href={href}
            className="flex center"
            rel="noreferrer"
          >
            {Icon}
          </a>
        </MotionButtonBase>
      }
    >
      {name}
    </FloatPopover>
  )
})
SocialIcon.displayName = 'SocialIcon'
