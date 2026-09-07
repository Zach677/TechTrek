import * as stylex from '@stylexjs/stylex'

import { Footer } from '@/components/Footer'
import {
  ConstellationChrome,
  ConstellationMap,
} from '@/components/constellation'
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
  stage: {
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
  srTitle: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
  },
})

export default function RootPage() {
  const featured = featuredProjects()

  return (
    <div {...stylex.props(styles.shell)}>
      <h1 {...stylex.props(styles.srTitle)}>zaxh — constellation</h1>
      <div {...stylex.props(styles.chrome)}>
        <ConstellationChrome />
      </div>
      <div {...stylex.props(styles.stage)}>
        <div {...stylex.props(styles.mapFrame)}>
          <ConstellationMap projects={featured} mode="featured" showArc />
        </div>
      </div>
      <div {...stylex.props(styles.footer)}>
        <Footer variant="constellation" />
      </div>
    </div>
  )
}
