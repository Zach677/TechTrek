"use client"

import { motion } from "motion/react"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          Zach's Home
        </Link>
        <ul className="flex space-x-6 px-4 font-medium">
          {["Home", "Posts", "Friends"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-primary hover:text-secondary"
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
