import * as stylex from '@stylexjs/stylex'
import { Link } from 'react-router'

import { Reader } from '@/components/reader'
import { FormattedTime } from '@/components/FormattedTime'
import { BackToTop } from '@/components/BackToTop'
import { colors, fonts, typeScale } from '../design-system/tokens.stylex'
import { shared } from '../design-system/shared.stylex'
import postIndex from 'virtual:postIndex'

const styles = stylex.create({
  article: {
    maxWidth: '42rem',
    marginInline: 'auto',
  },
  crumb: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '3rem',
  },
  folio: {
    display: 'flex',
    gap: '1.25rem',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
  },
  title: {
    fontFamily: fonts.serif,
    fontSize: 'clamp(2.3rem, 5.5vw, 3.6rem)',
    lineHeight: 1.15,
    fontWeight: 500,
    letterSpacing: '-0.01em',
    marginTop: 0,
    marginBottom: '1.25rem',
    color: colors.heading,
  },
  lede: {
    fontStyle: 'italic',
    fontSize: typeScale.copy16,
    lineHeight: typeScale.copy16Lh,
    color: colors.secondary,
    marginTop: 0,
    marginBottom: '3rem',
    maxWidth: '36rem',
  },
  reader: {
    // class md-reader kept for residual CSS (nested MDX)
  },
  pager: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    marginTop: '4rem',
    paddingTop: '1.5rem',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: colors.separatorSoft,
  },
  pagerLink: {
    maxWidth: '46%',
  },
  pagerTitle: {
    fontFamily: fonts.serif,
    fontSize: typeScale.copy16,
    fontWeight: 500,
    lineHeight: 1.4,
  },
  pagerEnd: {
    textAlign: 'right',
    marginLeft: 'auto',
    maxWidth: '46%',
  },
})

function Pager({ slug }: { slug: string }) {
  const idx = postIndex.findIndex((p) => p.slug === slug)
  if (idx === -1) return null

  const newer = idx > 0 ? postIndex[idx - 1] : undefined
  const older = idx < postIndex.length - 1 ? postIndex[idx + 1] : undefined
  if (!newer && !older) return null

  return (
    <nav {...stylex.props(styles.pager)}>
      {older ? (
        <Link
          {...stylex.props(shared.inkLink, styles.pagerLink)}
          to={`/post/${older.slug}`}
        >
          <span {...stylex.props(styles.pagerTitle)}>← {older.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {newer ? (
        <Link
          {...stylex.props(shared.inkLink, styles.pagerEnd)}
          to={`/post/${newer.slug}`}
        >
          <span {...stylex.props(styles.pagerTitle)}>{newer.title} →</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}

export default function PostPage(props: {
  postModule: PostModule
  slug: string
}) {
  const { postModule, slug } = props
  const { metadata, default: contentComponent } = postModule
  const { title, description, date, tags } = metadata
  const parsedDate = date ? new Date(date) : undefined
  const hasTags = !!tags && tags.length > 0

  // A "page" (about / friends) isn't in the post index — it owns its own hero,
  // so we render only the article body and skip the editorial header + pager.
  const isPost = postIndex.some((p) => p.slug === slug)

  if (!isPost) {
    return (
      <main {...stylex.props(styles.article)}>
        <div className="md-reader">
          <Reader contentComponent={contentComponent} />
        </div>
        <BackToTop />
      </main>
    )
  }

  return (
    <main {...stylex.props(styles.article)}>
      <div {...stylex.props(styles.crumb)}>
        <Link {...stylex.props(shared.inkLink, shared.regLabel)} to="/">
          ← Index
        </Link>
      </div>

      {parsedDate || hasTags ? (
        <div {...stylex.props(styles.folio)}>
          {parsedDate ? (
            <FormattedTime {...stylex.props(shared.regLabel)} dateTime={parsedDate} />
          ) : null}
          {hasTags ? (
            <span {...stylex.props(shared.regLabel)}>{tags!.join(' · ')}</span>
          ) : null}
        </div>
      ) : null}

      <h1 {...stylex.props(styles.title)}>{title}</h1>
      {description ? <p {...stylex.props(styles.lede)}>{description}</p> : null}

      <article className="md-reader">
        <Reader contentComponent={contentComponent} />
      </article>

      <Pager slug={slug} />
      <BackToTop />
    </main>
  )
}
