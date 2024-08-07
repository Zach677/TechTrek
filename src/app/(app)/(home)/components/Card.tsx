import { ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { isSupportIcon, SocialIcon } from '~/components/modules/home/SocialIcon'

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

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex min-h-[380px] max-w-md flex-col items-center justify-between rounded-lg bg-gradient-to-br from-base-100 to-base-200 p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8"
    >
      <div className="flex w-full flex-col items-center">
        <nav className="mb-6 flex justify-center space-x-4">
          <AnimatedTag href="/">我</AnimatedTag>
          <AnimatedTag href="/blog">文章</AnimatedTag>
          <AnimatedTag href="/friends">朋友们</AnimatedTag>
          <AnimatedTag href="/project">小项目</AnimatedTag>
        </nav>

        <motion.div
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
          className="mb-3 text-center text-2xl font-bold text-base-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Star
        </motion.h1>
        <motion.p
          className="mb-8 text-center text-base text-base-content/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {typedText}
        </motion.p>
      </div>

      <motion.ul
        className="mt-auto flex flex-wrap justify-center gap-4 lg:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {Object.entries(socialConfig).map(([type, id]) => {
          if (!isSupportIcon(type)) return null
          return (
            <motion.li
              key={type}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              <SocialIcon id={id} type={type} />
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
  mail: 'i@ssstttar.com',
  // 添加其他社交媒体
}
