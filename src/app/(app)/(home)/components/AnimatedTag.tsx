import React, { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
        className="relative inline-block px-4 py-2 text-sm transition-colors duration-300"
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            backgroundColor: isHovered
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(255,255,255,0)',
          }}
        />
        <motion.span
          animate={{
            color: isHovered ? '#ffffff' : '#b0b0b0',
          }}
        >
          {children}
        </motion.span>
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-full"
          animate={{
            backgroundColor: isHovered
              ? 'rgba(74, 144, 226, 0)'
              : 'rgba(74, 144, 226, 0.3)',
            opacity: isHovered ? 0 : 1,
          }}
        />
      </Link>
    </motion.div>
  )
}
