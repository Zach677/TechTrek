import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
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
    // deps: {
    //   inline: ['vitest-canvas-mock'],
    // },
    environment: 'happy-dom',
    exclude: [
      '**/node_modules/**',
    ],
    globals: true,
    setupFiles: './test/setup.ts',
  },
});