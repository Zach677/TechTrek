import * as stylex from '@stylexjs/stylex'
import { useRouteError } from 'react-router'

import { ReadableArea } from '@/components/ReadableArea'
import { NavBar } from '@/components/NavBar'

const styles = stylex.create({
  article: {
    maxWidth: '42rem',
    marginInline: 'auto',
    marginTop: '3rem',
  },
})

export default function ErrorBoundary() {
  const error = useRouteError() as Error
  return (
    <ReadableArea>
      <NavBar />
      <main {...stylex.props(styles.article)}>
        <header className="article-head">
          <p className="reg-label article-kicker">Error</p>
          <h1 className="page-title">Something went sideways</h1>
        </header>
        <div className="error-detail">{error.toString()}</div>
      </main>
    </ReadableArea>
  )
}
