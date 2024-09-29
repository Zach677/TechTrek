'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { SocialMaps } from './components/SocialMaps'

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col px-6 py-40">
      <div className="mb-40 flex flex-col items-center space-y-8 md:flex-row md:items-start md:space-x-20 md:space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="shrink-0"
        >
          <Image
            src="/zach.png"
            alt="Avatar"
            width={180}
            height={180}
            className="rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grow text-center md:text-left"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Zach</h1>
          <p className="mb-6 text-xl text-gray-600">
            Hi, I'm Zach. I love coding and exploring new technologies. Welcome
            to my personal space where I share my thoughts and projects.
          </p>
          <SocialMaps />
        </motion.div>
      </div>
    </div>
  )
}
