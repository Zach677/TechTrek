import * as stylex from '@stylexjs/stylex'
import { Link } from 'react-router'

import { FormattedTime } from '@/components/FormattedTime'
import { colors, fonts, typeScale } from '../design-system/tokens.stylex'
import { shared } from '../design-system/shared.stylex'
import postIndex from 'virtual:postIndex'

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
  index: {
    marginTop: '5.5rem',
  },
  indexHead: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    marginBottom: '0.25rem',
    paddingBottom: '0.75rem',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: colors.separator,
  },
  nowrap: {
    whiteSpace: 'nowrap',
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
  },
  itemLink: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: '1.25rem',
    paddingBlock: '1.35rem',
    textDecoration: 'none',
    color: 'inherit',
    flexWrap: {
      default: 'nowrap',
      '@media (max-width: 720px)': 'wrap',
    },
    rowGap: {
      default: null,
      '@media (max-width: 720px)': '0.3rem',
    },
    transition: 'transform 0.4s var(--ease-spring)',
    transform: {
      default: null,
      ':hover': {
        default: null,
        '@media (hover: hover)': 'translateX(10px)',
      },
    },
  },
  title: {
    flexGrow: {
      default: 1,
      '@media (max-width: 720px)': 1,
    },
    flexShrink: {
      default: 1,
      '@media (max-width: 720px)': 1,
    },
    flexBasis: {
      default: '0%',
      '@media (max-width: 720px)': '100%',
    },
    minWidth: 0,
    fontFamily: fonts.serif,
    fontSize: 'clamp(1.4rem, 2.6vw, 1.875rem)',
    fontWeight: 500,
    lineHeight: 1.3,
    color: colors.heading,
  },
  date: {
    flexGrow: 0,
    flexShrink: 0,
    fontFamily: fonts.mono,
    fontSize: typeScale.label12,
    lineHeight: typeScale.label12Lh,
    color: colors.secondary,
    whiteSpace: 'nowrap',
  },
  empty: {
    marginTop: '1.5rem',
    color: colors.secondary,
    fontStyle: 'italic',
  },
})

function PostItem({ post }: { post: PostMetadata }) {
  const date = new Date(post.date!)

  return (
    <li {...stylex.props(styles.item)}>
      <Link {...stylex.props(styles.itemLink)} to={`/post/${post.slug}`}>
        <span {...stylex.props(styles.title)}>{post.title}</span>
        <FormattedTime {...stylex.props(styles.date)} dateTime={date} />
      </Link>
    </li>
  )
}

export default function RootPage() {
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

      <section {...stylex.props(styles.index)}>
        <div {...stylex.props(styles.indexHead)}>
          <span {...stylex.props(shared.regLabel)}>Recent writing</span>
          <span {...stylex.props(shared.regLabel, styles.nowrap)}>
            {postIndex.length} {postIndex.length === 1 ? 'entry' : 'entries'}
          </span>
        </div>

        {postIndex.length > 0 ? (
          <ul {...stylex.props(styles.list)}>
            {postIndex.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </ul>
        ) : (
          <p {...stylex.props(styles.empty)}>No posts yet. Stay tuned!</p>
        )}
      </section>
    </main>
  )
}
