import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { execSync } from 'child_process';

// Plugin to automatically generate sitemap before build
const generateSitemapPlugin = () => {
  return {
    name: 'generate-sitemap',
    buildStart() {
      try {
        console.log('🔄 Generating sitemap.xml...');
        execSync('node scripts/generateSitemap.js', { stdio: 'inherit' });
        console.log('✅ Sitemap generated successfully!');
      } catch (error) {
        console.error('❌ Error generating sitemap:', error.message);
        // Don't fail the build if sitemap generation fails
      }
    },
  };
};

export default defineConfig({
  plugins: [react(), generateSitemapPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-tabs', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
  },
});
