'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="py-8 text-center text-gray-400">
      <motion.span
        className="inline-block text-lg"
        whileHover={{ scale: 1.05 }}
      >
        © {currentYear}{' '}
        <a
          href="https://ssstttar.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative font-medium text-gray-600"
        >
          STAR'S HOME
          <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100" />
        </a>
      </motion.span>
      <br />
      <motion.span
        className="mt-1 inline-block text-lg"
        whileHover={{ scale: 1.05 }}
      >
        Powered by{' '}
        <a
          href="https://github.com/Ssttar/TechTrek"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative font-medium text-gray-600"
        >
          TechTrek
          <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100" />
        </a>
      </motion.span>
    </footer>
  )
}
