import * as stylex from '@stylexjs/stylex'

import { Footer } from '@/components/Footer'
import {
  ConstellationChrome,
  ConstellationMap,
} from '@/components/constellation'
import { shared } from '../design-system/shared.stylex'
import { featuredProjects } from '../../data/projects'

const styles = stylex.create({
  shell: {
    minHeight: '100dvh',
    display: 'flex',
    flexDirection: 'column',
    paddingInline: 'clamp(1.25rem, 4vw, 2.5rem)',
    paddingTop: 'clamp(1.25rem, 3vw, 2rem)',
    paddingBottom: 'clamp(1.25rem, 3vw, 2rem)',
    boxSizing: 'border-box',
  },
  chrome: {
    flexShrink: 0,
    position: 'relative',
    zIndex: 4,
  },
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 0,
    position: 'relative',
    marginBlock: '0.75rem',
  },
  mapFrame: {
    width: '100%',
    maxWidth: '56rem',
    height: 'min(68dvh, 36rem)',
    minHeight: '20rem',
    position: 'relative',
  },
  footer: {
    flexShrink: 0,
    position: 'relative',
    zIndex: 4,
  },
})

export default function RootPage() {
  const featured = featuredProjects()

  return (
    <div {...stylex.props(styles.shell)}>
      <div {...stylex.props(styles.chrome)}>
        <ConstellationChrome />
      </div>
      <main {...stylex.props(styles.main)}>
        <h1 {...stylex.props(shared.srOnly)}>zaxh — constellation</h1>
        <div {...stylex.props(styles.mapFrame)}>
          <ConstellationMap projects={featured} mode="featured" showArc />
        </div>
      </main>
      <div {...stylex.props(styles.footer)}>
        <Footer variant="constellation" />
      </div>
    </div>
  )
}
