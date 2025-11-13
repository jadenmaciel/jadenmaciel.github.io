import '@testing-library/jest-dom';
import 'vitest-axe/extend-expect';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import * as axeMatchers from 'vitest-axe/matchers';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Extend Vitest's expect with vitest-axe matchers
expect.extend(axeMatchers);

// Cleanup after each test case
afterEach(() => {
  cleanup();
});

