import { motion } from 'motion/react'
import Link from 'next/link'
import * as React from 'react'

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
}

const dummyPosts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and start building your first app.',
    date: '2023-05-01',
  },
  {
    id: 2,
    title: 'Advanced TypeScript Techniques',
    excerpt: 'Dive deep into TypeScript and explore advanced features.',
    date: '2023-05-15',
  },
  {
    id: 3,
    title: 'The Future of Web Development',
    excerpt: 'Explore upcoming trends and technologies in web development.',
    date: '2023-05-30',
  },
  // Add more dummy posts as needed
]

export const BlogList: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-12"
    >
      {dummyPosts.map((post) => (
        <motion.article
          key={post.id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="border-b border-gray-200 pb-8 last:border-b-0"
        >
          <Link href={`/blog/${post.id}`} className="group">
            <h2 className="mb-2 text-2xl font-semibold text-gray-800 transition-colors group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-400">
              {post.title}
            </h2>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              {post.date}
            </p>
            <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  )
}
