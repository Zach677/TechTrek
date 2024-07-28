/* eslint-disable react/no-unknown-property */
'use client'

import { useEffect, useState } from 'react'

export const NotFound404: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute h-64 w-64 animate-blob rounded-full bg-blue-300 opacity-70 mix-blend-multiply blur-xl filter"
        style={{
          left: `${position.x / 5}px`,
          top: `${position.y / 5}px`,
        }}
      ></div>
      <div
        className="animation-delay-2000 absolute h-64 w-64 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"
        style={{
          right: `${position.x / 5}px`,
          bottom: `${position.y / 5}px`,
        }}
      ></div>
      <h1 className="relative z-10 mb-8 text-9xl font-bold text-gray-800">
        404
      </h1>
      <p className="relative z-10 mb-8 text-2xl text-gray-600">
        Oops! Page not found
      </p>
      <a
        href="/"
        className="relative z-10 transform rounded-full bg-blue-500 px-6 py-3 text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600"
      >
        Return Home
      </a>
    </div>
  )
}
