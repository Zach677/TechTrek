'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Zach's Home
        </Link>
        <ul className="flex space-x-6">
          {['Home', 'Posts', 'Friends'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-800"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
