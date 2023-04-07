import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';

/* eslint-disable @typescript-eslint/no-unsafe-call */
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
});
