import * as stylex from '@stylexjs/stylex'
import { Link } from 'react-router'

import { colors, fonts, typeScale } from '../design-system/tokens.stylex'
import { shared } from '../design-system/shared.stylex'
import { Logo } from './Logo'

const styles = stylex.create({
  nav: {
    height: '5.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wordmark: {
    fontFamily: fonts.logoLatin,
    fontStyle: 'italic',
    fontSize: typeScale.copy16,
    lineHeight: typeScale.copy16Lh,
    fontWeight: 500,
    color: colors.heading,
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    position: 'relative',
    fontFamily: fonts.serif,
    fontStyle: 'italic',
    fontSize: typeScale.copy15,
    lineHeight: typeScale.copy15Lh,
    color: {
      default: colors.secondary,
      ':hover': colors.heading,
    },
    transition: 'color 0.25s var(--ease)',
    '::after': {
      content: {
        default: null,
        '@media (pointer: coarse)': '""',
      },
      position: 'absolute',
      inset: '-12px -10px',
      display: {
        default: 'none',
        '@media (pointer: coarse)': 'block',
      },
    },
  },
})

export const NavBar = () => {
  return (
    <nav {...stylex.props(styles.nav)}>
      <Link {...stylex.props(styles.wordmark)} to="/">
        <Logo />
      </Link>
      <div {...stylex.props(styles.links)}>
        <Link {...stylex.props(styles.link, shared.inkLink)} to="/">
          index
        </Link>
        <Link {...stylex.props(styles.link, shared.inkLink)} to="/page/about">
          about
        </Link>
        <Link {...stylex.props(styles.link, shared.inkLink)} to="/page/friends">
          friends
        </Link>
      </div>
    </nav>
  )
}
