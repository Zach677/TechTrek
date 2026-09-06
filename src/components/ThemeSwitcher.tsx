import { type MouseEventHandler, useSyncExternalStore } from 'react'
import * as stylex from '@stylexjs/stylex'
import { type IconType, Icon } from '@/components/Icon'
import { type Theme, themeManager } from '@/theme'
import { colors } from '../design-system/tokens.stylex'

const styles = stylex.create({
  root: {
    // view-transition-name for theme chrome
    viewTransitionName: 'theme-switcher',
    position: 'relative',
    padding: '2px',
    backgroundColor: colors.separator,
    borderRadius: '9999px',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.06)',
  },
  thumb: {
    position: 'absolute',
    width: '30px',
    height: '30px',
    backgroundColor: colors.paper,
    boxShadow: '0 1px 2px rgba(0,0,0,0.12)',
    borderRadius: '9999px',
    zIndex: 10,
    transition: 'background-color 0.3s, left 0.3s var(--ease-spring) 0s',
  },
  row: {
    position: 'relative',
    display: 'flex',
    zIndex: 20,
  },
  button: {
    position: 'relative',
    display: 'flex',
    width: '30px',
    height: '30px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderWidth: 0,
    backgroundColor: 'transparent',
    transition: 'color 0.2s var(--ease)',
    '::after': {
      content: {
        default: null,
        '@media (pointer: coarse)': '""',
      },
      position: 'absolute',
      inset: '-8px',
      display: {
        default: 'none',
        '@media (pointer: coarse)': 'block',
      },
    },
  },
  active: {
    color: colors.heading,
  },
  inactive: {
    color: {
      default: colors.secondary,
      ':hover': colors.heading,
    },
  },
})

function ThemeRadioButton({
  active,
  icon,
  title,
  onClick,
}: {
  active: boolean
  icon: IconType
  title: string
  onClick: MouseEventHandler
}) {
  return (
    <button
      {...stylex.props(styles.button, active ? styles.active : styles.inactive)}
      role="radio"
      aria-label={title}
      aria-checked={active}
      onClick={onClick}
    >
      <Icon icon={icon} size="15px" />
    </button>
  )
}

const INDICATOR_OFFSET_MAP: Record<Theme, number> = {
  dark: 2,
  system: 32,
  light: 62,
}

export function ThemeSwitcher() {
  const currentTheme = useSyncExternalStore<Theme>(
    (onStoreChange) => {
      return themeManager.registerListener(onStoreChange)
    },
    () => themeManager.getTheme(),
    () => 'system',
  )

  function changeTheme(theme: Theme) {
    themeManager.setTheme(theme)
  }

  return (
    <div {...stylex.props(styles.root)} aria-label="Theme Switcher">
      <div
        {...stylex.props(styles.thumb)}
        style={{ left: INDICATOR_OFFSET_MAP[currentTheme] }}
      />

      <div {...stylex.props(styles.row)}>
        <ThemeRadioButton
          active={currentTheme === 'dark'}
          icon="moon"
          title="Dark"
          onClick={() => changeTheme('dark')}
        />
        <ThemeRadioButton
          active={currentTheme === 'system'}
          icon="display"
          title="System"
          onClick={() => changeTheme('system')}
        />
        <ThemeRadioButton
          active={currentTheme === 'light'}
          icon="sun"
          title="Light"
          onClick={() => changeTheme('light')}
        />
      </div>
    </div>
  )
}
