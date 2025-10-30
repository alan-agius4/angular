import {defineConfig} from 'vitest/config';

export default defineConfig({
  resolve: {
    mainFields: ['es2020', 'browser', 'module', 'main'],
    preserveSymlinks: true,
    optimizeDeps: {
      noDiscovery: true,
    },
  },
});
