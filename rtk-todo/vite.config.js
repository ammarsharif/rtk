import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
