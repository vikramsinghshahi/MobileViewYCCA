import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ghPages } from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // base: mode === 'production' ? '/MobileViewYCCA/' : '/', // Set base URL conditionally
  server: {
    historyApiFallback: true, // Handle client-side routing for dev
  },
}));