'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { JSX } from 'react'

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="py-8 text-center text-gray-400">
      <span className="text-lg">
        © {currentYear}{' '}
        <StyledLink href="https://ssstttar.com" target="_blank">
          <span className="font-medium">STAR'S HOME</span>
        </StyledLink>
      </span>
      <br />
      <span className="text-lg">
        Power by{' '}
        <StyledLink href="https://github.com/Ssttar/TechTrek" target="_blank">
          <span className="font-medium">TechTrek</span>
        </StyledLink>
      </span>
    </footer>
  )
}

const StyledLink = (
  props: JSX.IntrinsicElements['a'] & {
    external?: boolean
  },
) => {
  const { external, ...rest } = props
  const As = external ? 'a' : Link

  return (
    // @ts-ignore
    <As
      className="shiro-link--underline"
      target={props.external ? '_blank' : props.target}
      {...rest}
    >
      {props.children}
    </As>
  )
}
