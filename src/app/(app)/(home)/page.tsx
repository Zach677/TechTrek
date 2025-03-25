"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

import { SocialMaps } from "./components/SocialMaps"

// Import the dummy posts data
interface Post {
  id: number
  title: string
  excerpt: string
  date: string
}

const dummyPosts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and start building your first app.",
    date: "2023-05-01",
  },
  {
    id: 2,
    title: "Advanced TypeScript Techniques",
    excerpt: "Dive deep into TypeScript and explore advanced features.",
    date: "2023-05-15",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Explore upcoming trends and technologies in web development.",
    date: "2023-05-30",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Header section with avatar in top-left */}
      <div className="mb-10 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mr-4 shrink-0"
        >
          <Image src="/zach.png" alt="Avatar" width={80} height={80} className="rounded-full" />
        </motion.div>
        <h1 className="text-4xl font-medium">Zach</h1>
      </div>

      {/* Personal introduction section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <p className="mb-4 text-xl leading-loose">
          Hi, I'm Zach. I love coding and exploring new technologies. Welcome to my personal space
          where I share my thoughts and projects.
        </p>
        <SocialMaps />
      </motion.div>

      {/* Posts section directly below introduction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-12"
      >
        <h2 className="mb-8 text-2xl font-semibold">Recent Posts</h2>

        {dummyPosts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="border-b border-gray-200 pb-8 last:border-b-0"
          >
            <Link href={`/posts/${post.id}`} className="group">
              <h3 className="mb-2 text-xl font-semibold text-gray-800 transition-colors group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-400">
                {post.title}
              </h3>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}
