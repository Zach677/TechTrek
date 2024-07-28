import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'

require('./cssAsPlugin')

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
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
          // 浅葱
          primary: '#33A6B8',

          secondary: '#A8D8B9',

          accent: '#33A6B8',
        },
      },
      {
        dark: {
          'color-scheme': 'dark',
          // 桃
          primary: '#F596AA',
          // 洗朱
          secondary: '#FB966E',
          accent: '#F596AA',
        },
      },
    ],
    darkTheme: 'dark',
  },

  plugins: [
    typography,
    daisyui,

    require('@tailwindcss/container-queries'),
    require('tailwindcss-animated'),
  ],
}

export default config
