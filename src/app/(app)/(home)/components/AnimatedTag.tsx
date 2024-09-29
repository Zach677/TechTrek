import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ReactNode } from 'react'
import React, { useState } from 'react'

interface TagProps {
  href: string
  children: ReactNode
}

export const AnimatedTag: React.FC<TagProps> = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Link
        href={href}
        className="relative inline-block px-4 py-2 text-sm font-medium transition-all duration-300"
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            backgroundColor: isHovered
              ? 'rgba(50, 173, 230, 0.1)'
              : 'rgba(255,255,255,0)',
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          animate={{
            color: isHovered ? 'var(--primary-color)' : 'var(--text-color)',
          }}
          transition={{ duration: 0.2 }}
          className="relative z-10"
        >
          {children}
        </motion.span>
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-0"
          animate={{
            width: isHovered ? '100%' : '0%',
            backgroundColor: 'var(--primary-color)',
          }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  )
}
