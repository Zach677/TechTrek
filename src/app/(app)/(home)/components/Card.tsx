import { motion } from 'framer-motion'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

import { HoverTooltip } from '~/components/common/HoverTooltip'
import {
  getSocialIconName,
  isSupportIcon,
  SocialIcon,
} from '~/components/modules/home/SocialIcon'

import { AnimatedTag } from './AnimatedTag'

export const Card: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Love Coding.'

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= fullText.length; i++) {
        setTypedText(fullText.slice(0, i))
        await new Promise((resolve) => setTimeout(resolve, 100))
      }
    }
    typeText()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto flex min-h-[380px] max-w-md flex-col items-center justify-between rounded-lg bg-gradient-to-br from-base-100 to-base-200 p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8"
    >
      <motion.div
        variants={itemVariants}
        className="flex w-full flex-col items-center"
      >
        <motion.nav
          variants={itemVariants}
          className="mb-6 flex justify-center space-x-4"
        >
          <AnimatedTag href="/">我</AnimatedTag>
          <AnimatedTag href="/blog">文章</AnimatedTag>
          <AnimatedTag href="/friends">朋友们</AnimatedTag>
          <AnimatedTag href="/project">小项目</AnimatedTag>
        </motion.nav>

        <motion.div
          variants={itemVariants}
          className="relative mb-8"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src="/Star.png"
            alt="Avatar"
            width={140}
            height={140}
            className="mx-auto rounded-full shadow-md"
          />
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{
              border: '2px solid #32ADE6',
              borderTopColor: 'transparent',
            }}
          />
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="mb-3 text-center text-2xl font-bold text-base-content"
        >
          Star
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mb-8 text-center text-base text-base-content/80"
        >
          {typedText}
        </motion.p>
      </motion.div>

      <motion.ul
        variants={itemVariants}
        className="mt-auto flex flex-wrap justify-center gap-4 lg:justify-start"
      >
        {Object.entries(socialConfig).map(([type, id]) => {
          if (!isSupportIcon(type)) return null
          return (
            <motion.li
              key={type}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              <HoverTooltip tooltipText={getSocialIconName(type)}>
                <SocialIcon id={id} type={type} />
              </HoverTooltip>
            </motion.li>
          )
        })}
      </motion.ul>
      {children}
    </motion.div>
  )
}

const socialConfig = {
  x: 'Zach98899',
  github: 'Zach677',
  rss: 'https://ssstttar.com/feed',
  email: 'i@ssstttar.com',
  // 添加其他社交媒体
}
