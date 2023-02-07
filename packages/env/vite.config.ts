/// <reference types="vitest" />
import { defineConfig } from 'vite';

import { join } from 'path';
import dts from 'vite-plugin-dts';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/env',
  plugins: [
    dts({
      tsConfigFilePath: join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.mjs',
      name: 'env',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['zod'],
    },
  },
});
