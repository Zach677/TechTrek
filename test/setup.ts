/* eslint-disable import/newline-after-import,import/first */
import '@testing-library/jest-dom';

// only inject in the dom environment
if (
  // not node runtime
  typeof window !== 'undefined' &&
  // not edge runtime
  typeof (globalThis as any).EdgeRuntime !== 'string'
) {
  // test with canvas
  await import('vitest-canvas-mock');
}

// node runtime
if (typeof window === 'undefined') {
  // test with polyfill crypto
  const { Crypto } = await import('@peculiar/webcrypto');

  Object.defineProperty(global, 'crypto', {
    value: new Crypto(),
    writable: true,
  });
}

