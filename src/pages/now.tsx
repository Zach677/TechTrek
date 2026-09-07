import { useEffect, useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import { Link } from 'react-router'

import { colors, fonts, typeScale } from '../design-system/tokens.stylex'
import { shared } from '../design-system/shared.stylex'
import { daypart, fmtTime, moonPhase } from '@/lib/almanac'

interface NowClock {
  part: string
  time: string
  glyph: string
  phase: string
}

const styles = stylex.create({
  main: {
    maxWidth: '42rem',
  },
  title: {
    fontFamily: fonts.serif,
    fontStyle: 'italic',
    fontWeight: 500,
    fontSize: 'clamp(2.5rem, 6.5vw, 4rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
    margin: '2rem 0 0.75rem',
    color: colors.heading,
  },
  lede: {
    margin: '0 0 2.5rem',
    maxWidth: '34rem',
    fontSize: typeScale.copy15,
    lineHeight: typeScale.copy15Lh,
    color: colors.secondary,
    fontStyle: 'italic',
  },
  body: {
    maxWidth: '36rem',
    fontSize: typeScale.copy15,
    lineHeight: 1.9,
    color: colors.body,
  },
  p: {
    margin: '0 0 1.25rem',
  },
  list: {
    margin: '0 0 1.5rem',
    paddingLeft: '1.25rem',
  },
  li: {
    marginBottom: '0.5rem',
  },
  almanac: {
    marginTop: '3rem',
    paddingTop: '1.5rem',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: colors.separatorSoft,
    fontStyle: 'italic',
    fontSize: typeScale.copy15,
    lineHeight: typeScale.copy15Lh,
    color: colors.secondary,
  },
  moon: {
    color: colors.accent,
    fontStyle: 'normal',
  },
  more: {
    marginTop: '2.5rem',
  },
  moreLink: {
    fontFamily: fonts.serif,
    fontStyle: 'italic',
    fontSize: typeScale.copy16,
    color: colors.body,
  },
})

export default function NowPage() {
  const [now, setNow] = useState<NowClock | null>(null)
  const [visits, setVisits] = useState(0)

  useEffect(() => {
    function tick() {
      const d = new Date()
      const moon = moonPhase(d)
      setNow({
        part: daypart(d).en.toLowerCase(),
        time: fmtTime.format(d),
        glyph: moon.glyph,
        phase: moon.en.toLowerCase(),
      })
    }
    tick()
    const id = setInterval(tick, 30000)

    try {
      const KEY = 'zaxh-almanac-visits'
      let n = parseInt(localStorage.getItem(KEY) || '0', 10)
      if (!sessionStorage.getItem(KEY)) {
        n += 1
        localStorage.setItem(KEY, String(n))
        sessionStorage.setItem(KEY, '1')
      }
      setVisits(n)
    } catch {
      /* storage unavailable */
    }

    return () => clearInterval(id)
  }, [])

  return (
    <main {...stylex.props(styles.main)}>
      <h1 {...stylex.props(styles.title)}>Now</h1>
      <p {...stylex.props(styles.lede)}>
        A living snapshot — what I&apos;m doing these days, not a changelog.
      </p>

      <div {...stylex.props(styles.body)}>
        <p {...stylex.props(styles.p)}>Right now I&apos;m focused on:</p>
        <ul {...stylex.props(styles.list)}>
          <li {...stylex.props(styles.li)}>
            Turning zaxh.org into a quiet personal hub (this site).
          </li>
          <li {...stylex.props(styles.li)}>
            Shipping and polishing mitori and ApplePackage on macOS / Swift.
          </li>
          <li {...stylex.props(styles.li)}>
            Small private tools — bookkeeping, WeChat posts, agent skills.
          </li>
        </ul>
        <p {...stylex.props(styles.p)}>
          Still writing code so the cat and dog can have a better life. More
          soon.
        </p>
      </div>

      <p {...stylex.props(styles.almanac)}>
        Right now it&apos;s {now ? now.part : '—'} here —{' '}
        {now ? now.time : '--:--'}, under a{' '}
        <span {...stylex.props(styles.moon)}>{now ? now.glyph : '☽'}</span>{' '}
        {now ? now.phase : 'crescent'}.{' '}
        {visits > 1 ? `You've opened this page ${visits} times now. ` : ''}
        To be continued…
      </p>

      <p {...stylex.props(styles.more)}>
        <Link {...stylex.props(shared.inkLink, styles.moreLink)} to="/projects">
          See projects →
        </Link>
      </p>
    </main>
  )
}
