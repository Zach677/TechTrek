'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { JSX } from 'react'

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])
  // TODO add style link
  return (
    <footer className="py-8 text-center text-gray-400">
      <span className="text-lg">
        © {currentYear}{' '}
        <a href="https://ssstttar.com" target="_blank">
          <span className="font-medium">STAR'S HOME</span>
        </a>
      </span>
      <br />
      <span className="text-lg">
        Power by{' '}
        <a href="https://github.com/Ssttar/TechTrek" target="_blank">
          <span className="font-medium">TechTrek</span>
        </a>
      </span>
    </footer>
  )
}
