import * as stylex from '@stylexjs/stylex'
import { Link } from 'react-router'

import { NOW_LABEL, NOW_STATUS } from '../../../data/now-status'
import { colors, fonts, typeScale } from '../../design-system/tokens.stylex'
import './constellation.css'

const styles = stylex.create({
  bar: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '1.5rem',
    width: '100%',
    pointerEvents: 'none',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.55rem',
    fontFamily: fonts.mono,
    fontSize: typeScale.label12,
    lineHeight: typeScale.label12Lh,
    letterSpacing: '0.04em',
    color: colors.secondary,
    pointerEvents: 'auto',
  },
  link: {
    color: {
      default: colors.secondary,
      ':hover': colors.heading,
    },
    textDecoration: 'none',
    transition: 'color 0.2s var(--ease)',
    outline: {
      default: 'none',
      ':focus-visible': `2px solid ${colors.accent}`,
    },
    outlineOffset: {
      default: null,
      ':focus-visible': '3px',
    },
    borderRadius: '2px',
  },
  sep: {
    color: colors.separator,
    userSelect: 'none',
  },
  now: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.2rem',
    pointerEvents: 'auto',
    textDecoration: 'none',
    outline: {
      default: 'none',
      ':focus-visible': `2px solid ${colors.accent}`,
    },
    outlineOffset: {
      default: null,
      ':focus-visible': '3px',
    },
    borderRadius: '2px',
  },
  nowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    fontFamily: fonts.mono,
    fontSize: typeScale.label12,
    letterSpacing: '0.06em',
    color: colors.heading,
  },
  nowStatus: {
    fontFamily: fonts.mono,
    fontSize: typeScale.caption10,
    letterSpacing: '0.04em',
    color: colors.secondary,
  },
})

const NAV = [
  { to: '/projects', label: 'projects' },
  { to: '/about', label: 'about' },
] as const

export function ConstellationChrome() {
  return (
    <div {...stylex.props(styles.bar)}>
      <nav {...stylex.props(styles.nav)} aria-label="Primary">
        {NAV.map((item, i) => (
          <span key={item.to} style={{ display: 'contents' }}>
            {i > 0 ? (
              <span {...stylex.props(styles.sep)} aria-hidden="true">
                ·
              </span>
            ) : null}
            <Link {...stylex.props(styles.link)} to={item.to}>
              {item.label}
            </Link>
          </span>
        ))}
      </nav>

      <Link {...stylex.props(styles.now)} to="/now" aria-label={`Now: ${NOW_STATUS}`}>
        <span {...stylex.props(styles.nowRow)}>
          <span className="cx-now-dot" aria-hidden="true" />
          {NOW_LABEL}
        </span>
        <span {...stylex.props(styles.nowStatus)}>{NOW_STATUS}</span>
      </Link>
    </div>
  )
}
