// @ts-check
import { defineConfig, GLOB_TS_SRC } from "eslint-config-hyoban"

export default defineConfig(
  {
    formatting: false,
    lessOpinionated: true,
    ignores: ["resources/**"],
    preferESM: false,
    projectService: {
      defaultProject: "tsconfig.json",
    },
    typeChecked: "essential",
  },
  {
    files: GLOB_TS_SRC,
    rules: {
      "require-await": "off",
      "@typescript-eslint/require-await": "warn",
      "@typescript-eslint/await-thenable": "warn",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-misused-promises": "off",
    },
  },
  {
    settings: {
      tailwindcss: {
        whitelist: ["center"],
      },
    },
    rules: {
      "@eslint-react/no-clone-element": 0,
      "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": 0,
      // NOTE: Disable this temporarily
      "react-compiler/react-compiler": 0,
      "no-restricted-syntax": 0,
    },
  },
  {
    files: ["**/*.tsx"],
    // rules: {
    //   '@stylistic/jsx-self-closing-comp': 'error',
    // },
  },
)
