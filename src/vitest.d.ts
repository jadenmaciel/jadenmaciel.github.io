/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />

import '@testing-library/jest-dom';
import 'vitest-axe/extend-expect';

import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import type { AxeMatchers } from 'vitest-axe/matchers';

declare global {
  namespace Vi {
    interface Assertion<T = any> extends TestingLibraryMatchers<T, void>, AxeMatchers {}
    interface AsymmetricMatchersContaining extends TestingLibraryMatchers<any, void>, AxeMatchers {}
  }
}

// Also extend the vitest module for non-global mode
declare module 'vitest' {
  interface Assertion<T = any> extends TestingLibraryMatchers<T, void>, AxeMatchers {}
  interface AsymmetricMatchersContaining extends TestingLibraryMatchers<any, void>, AxeMatchers {}
}
