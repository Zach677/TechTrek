import { addDynamicIconSelectors } from '@iconify/tailwind'
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

require('./cssAsPlugin')

const UIKitColors = {
  // Label
  label: {
    primary: {
      dark: '#FFF',
      light: '#000',
    },
  },

  // Background
  background: {
    primary: {
      light: '#fff',
      dark: '#1C1C1E',
    },
  },
}

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
      fontFamily: {
        sans: 'var(--font-sans),system-ui,-apple-system,PingFang SC,"Microsoft YaHei",Segoe UI,Roboto,Helvetica,noto sans sc,hiragino sans gb,"sans-serif",Apple Color Emoji,Segoe UI Emoji,Not Color Emoji',
        serif:
          '"Noto Serif CJK SC","Noto Serif SC",var(--font-serif),"Source Han Serif SC","Source Han Serif",source-han-serif-sc,SongTi SC,SimSum,"Hiragino Sans GB",system-ui,-apple-system,Segoe UI,Roboto,Helvetica,"Microsoft YaHei","WenQuanYi Micro Hei",sans-serif',
        mono: `"OperatorMonoSSmLig Nerd Font","Cascadia Code PL","FantasqueSansMono Nerd Font","operator mono",JetBrainsMono,"Fira code Retina","Fira code","Consolas", Monaco, "Hannotate SC", monospace, -apple-system`,
      },
    },
  },

  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          'color-scheme': 'light',

          primary: '#33A6B8',

          secondary: '#A8D8B9',

          'base-100': UIKitColors.background.primary.light,
          'base-content': UIKitColors.label.primary.light,
        },
      },
      {
        dark: {
          'color-scheme': 'dark',

          primary: '#F596AA',

          secondary: '#FB966E',

          'base-100': UIKitColors.background.primary.dark,
          'base-content': UIKitColors.label.primary.dark,
        },
      },
    ],
    darkTheme: 'dark',
  },

  plugins: [
    addDynamicIconSelectors(),
    typography,
    daisyui,

    require('@tailwindcss/container-queries'),
    require('tailwindcss-animated'),
  ],
}

export default config
