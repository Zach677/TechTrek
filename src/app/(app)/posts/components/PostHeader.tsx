import { motion } from 'motion/react'
import * as React from 'react'

export const BlogHeader: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200">
        My Blog
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Exploring ideas, sharing knowledge, and documenting my journey
      </p>
    </motion.header>
  )
}
