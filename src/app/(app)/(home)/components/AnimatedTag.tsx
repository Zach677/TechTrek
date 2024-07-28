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
            color: isHovered ? '#32ADE6' : '#4a4a4a',
          }}
        >
          {children}
        </motion.span>
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-[#ff6b6b]"
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  )
}
