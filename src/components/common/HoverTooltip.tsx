import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import * as React from 'react'

interface HoverTooltipProps {
  /** 要显示的内容 */
  children: ReactNode
  /** 悬停时显示的文本 */
  tooltipText: string
  /** 可选的自定义样式类名 */
  className?: string
}

export const HoverTooltip: React.FC<HoverTooltipProps> = ({
  children,
  tooltipText,
  className = '',
}) => {
  return (
    <motion.div
      className={`group relative ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
      <span className="absolute inset-x-0 top-full mt-1 text-center text-xs text-gray-400 opacity-0 transition-opacity group-hover:opacity-100">
        {tooltipText}
      </span>
    </motion.div>
  )
}
