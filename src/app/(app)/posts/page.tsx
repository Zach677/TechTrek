'use client'

import { motion } from 'motion/react'
import * as React from 'react'

import { BlogHeader } from './components/PostHeader'
import { BlogList } from './components/PostList'

export default function PostsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <BlogHeader />
      <BlogList />
    </motion.div>
  )
}
