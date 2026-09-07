import * as stylex from '@stylexjs/stylex'
import { Link } from 'react-router'

import { colors, fonts, typeScale } from '../design-system/tokens.stylex'
import { shared } from '../design-system/shared.stylex'
import { featuredProjects } from '../../data/projects'

const WORDMARK = 'zaxh'

const styles = stylex.create({
  main: {
    marginTop: '2.5rem',
  },
  masthead: {
    fontFamily: fonts.serif,
    fontStyle: 'italic',
    fontSize: 'clamp(5rem, 16vw, 13rem)',
    lineHeight: 0.95,
    fontWeight: 500,
    letterSpacing: '-0.02em',
    color: colors.heading,
    margin: 0,
  },
  letter: {
    display: 'inline-block',
    transition: 'transform 0.45s var(--ease-spring), color 0.3s var(--ease)',
    transform: {
      default: null,
      ':hover': {
        default: null,
        '@media (hover: hover) and (prefers-reduced-motion: no-preference)':
          'translateY(-0.08em) rotate(-2deg)',
      },
    },
    color: {
      default: colors.heading,
      ':hover': {
        default: null,
        '@media (hover: hover) and (prefers-reduced-motion: no-preference)':
          colors.accent,
      },
    },
  },
  tagline: {
    marginTop: '1.75rem',
    marginBottom: 0,
    maxWidth: '34rem',
    fontSize: typeScale.title20,
    lineHeight: typeScale.title20Lh,
    fontStyle: 'italic',
    color: colors.secondary,
  },
  em: {
    fontStyle: 'italic',
    color: colors.heading,
    backgroundImage: `linear-gradient(${colors.accent}, ${colors.accent})`,
    backgroundSize: '100% 1px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 100%',
  },
  status: {
    marginTop: '1rem',
    maxWidth: '34rem',
    fontSize: typeScale.copy15,
    lineHeight: typeScale.copy15Lh,
    color: colors.body,
  },
  section: {
    marginTop: '4.5rem',
  },
  sectionHead: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    marginBottom: '0.25rem',
    paddingBottom: '0.75rem',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: colors.separator,
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  item: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: colors.separatorSoft,
    paddingBlock: '1.25rem',
  },
  name: {
    fontFamily: fonts.serif,
    fontSize: 'clamp(1.25rem, 2.4vw, 1.6rem)',
    fontWeight: 500,
    lineHeight: 1.3,
    color: colors.heading,
    margin: 0,
  },
  oneLiner: {
    marginTop: '0.35rem',
    marginBottom: 0,
    fontSize: typeScale.copy15,
    lineHeight: typeScale.copy15Lh,
    color: colors.secondary,
    maxWidth: '36rem',
  },
  portals: {
    marginTop: '3.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.25rem 1.75rem',
  },
  portal: {
    fontFamily: fonts.serif,
    fontStyle: 'italic',
    fontSize: typeScale.copy16,
    color: colors.body,
  },
})

export default function RootPage() {
  const featured = featuredProjects(3)

  return (
    <main {...stylex.props(styles.main)}>
      <h1 {...stylex.props(styles.masthead)} aria-label={WORDMARK}>
        {WORDMARK.split('').map((ch, i) => (
          <span key={i} {...stylex.props(styles.letter)} aria-hidden="true">
            {ch}
          </span>
        ))}
      </h1>

      <p {...stylex.props(styles.tagline)}>
        I write code so my <em {...stylex.props(styles.em)}>cat</em> and{' '}
        <em {...stylex.props(styles.em)}>dog</em> can have a better life.
      </p>
      <p {...stylex.props(styles.status)}>
        Software engineer. Shipping small tools, Swift apps, and quiet
        infrastructure — currently shaping this site into a personal hub.
      </p>

      <section {...stylex.props(styles.section)}>
        <div {...stylex.props(styles.sectionHead)}>
          <span {...stylex.props(shared.regLabel)}>Featured projects</span>
          <Link {...stylex.props(shared.inkLink, shared.regLabel)} to="/projects">
            All projects →
          </Link>
        </div>
        <ul {...stylex.props(styles.list)}>
          {featured.map((project) => (
            <li key={project.slug} {...stylex.props(styles.item)}>
              <h2 {...stylex.props(styles.name)}>{project.name}</h2>
              <p {...stylex.props(styles.oneLiner)}>{project.oneLiner}</p>
            </li>
          ))}
        </ul>
      </section>

      <nav {...stylex.props(styles.portals)} aria-label="Site sections">
        <Link {...stylex.props(shared.inkLink, styles.portal)} to="/projects">
          projects
        </Link>
        <Link {...stylex.props(shared.inkLink, styles.portal)} to="/about">
          about
        </Link>
        <Link {...stylex.props(shared.inkLink, styles.portal)} to="/now">
          now
        </Link>
      </nav>
    </main>
  )
}
