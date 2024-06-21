import daysyui from 'daisyui'
import type { Config } from 'tailwindcss'

const twConfig: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [daysyui],
}

export default twConfig
