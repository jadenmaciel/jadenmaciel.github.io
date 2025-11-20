/// <reference types="vitest/globals" />

import '@testing-library/jest-dom';
import 'vitest-axe/extend-expect';

import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import type { AxeMatchers } from 'vitest-axe/matchers';

declare global {
  namespace Vi {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface Assertion<T = any> extends TestingLibraryMatchers<T, void>, AxeMatchers {}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface AsymmetricMatchersContaining extends TestingLibraryMatchers<any, void>, AxeMatchers {}
  }
}

// Also extend the vitest module for non-global mode
declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Assertion<T = any> extends TestingLibraryMatchers<T, void>, AxeMatchers {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface AsymmetricMatchersContaining extends TestingLibraryMatchers<any, void>, AxeMatchers {}
}
