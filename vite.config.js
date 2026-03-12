import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/databricks-workspace-guide/',
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    port: 8000,
    open: true,
  },
});
