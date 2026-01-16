import { execSync } from 'node:child_process';
import { cpSync } from 'node:fs';

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  outDir: 'dist',
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: false,
  bundle: false,
  format: ['cjs'],
  skipNodeModulesBundle: true,
  treeshake: false,
  keepNames: true,
  shims: true,
  onSuccess: async () => {
    // Resolve TypeScript path aliases in compiled files
    execSync('tsc-alias -p tsconfig.json', { stdio: 'inherit' });
    // Copy translation files
    cpSync('src/utils/translations', 'dist/translations', { recursive: true });
  },
  loader: {
    '.json': 'copy',
    '.yml': 'copy',
  },
  tsconfig: './tsconfig.json',
});
