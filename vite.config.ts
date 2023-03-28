import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { generateAlias } from './src/helper';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 7000,
  },
  resolve: {
    alias: generateAlias(__dirname),
  },
});
