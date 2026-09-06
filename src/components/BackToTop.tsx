import { useEffect, useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import { colors } from '../design-system/tokens.stylex'
import { shared } from '../design-system/shared.stylex'
import { Icon } from './Icon'

const styles = stylex.create({
  button: {
    position: 'fixed',
    zIndex: 50,
    padding: '0.5rem',
    borderRadius: '9999px',
    backgroundColor: colors.surface,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.separator,
    transition:
      'opacity 0.3s var(--ease), transform 0.3s var(--ease), color 0.3s var(--ease)',
    boxShadow:
      '0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.06)',
    color: {
      default: colors.secondary,
      ':hover': colors.heading,
    },
    cursor: 'pointer',
    bottom: '2rem',
    right: {
      default: '1rem',
      '@media (min-width: 1024px)': 'auto',
    },
    left: {
      default: 'auto',
      '@media (min-width: 1024px)': '50%',
    },
    opacity: 0,
    transform: {
      default: 'translateY(1rem)',
      '@media (min-width: 1024px)':
        'translateX(calc(42rem / 2 + 2rem)) translateY(1rem)',
    },
    pointerEvents: 'none',
  },
  visible: {
    opacity: 1,
    pointerEvents: 'auto',
    transform: {
      default: 'translateY(0)',
      '@media (min-width: 1024px)':
        'translateX(calc(42rem / 2 + 2rem)) translateY(0)',
    },
  },
  icon: {
    width: '1.25rem',
    height: '1.25rem',
  },
})

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight)
      const isVisible = scrollPercentage > 0.1 && scrollTop > 200
      setVisible(isVisible)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      {...stylex.props(styles.button, visible && styles.visible)}
      aria-label="Back to top"
    >
      <span {...stylex.props(shared.srOnly)}>Back to top</span>
      <Icon icon="arrow-up" {...stylex.props(styles.icon)} />
    </button>
  )
}
