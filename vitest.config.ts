import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
    // coverage: {
    //   all: false,
    //   exclude: [
    //     '__mocks__/**',
    //     // just ignore the migration code
    //     // we will use pglite in the future
    //     // so the coverage of this file is not important
    //     'src/database/client/core/db.ts',
    //   ],
    //   provider: 'v8',
    //   reporter: ['text', 'json', 'lcov', 'text-summary'],
    //   reportsDirectory: './coverage/app',
    // },
    deps: {
      inline: ['vitest-canvas-mock'],
    },
    environment: 'happy-dom',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
    ],
    globals: true,
    setupFiles: './test/setup.ts',
  },
});