import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Plugin to fix Firebase v12 resolution issue
const firebaseResolutionPlugin = () => {
  return {
    name: 'firebase-resolution-fix',
    enforce: 'pre',
    resolveId(source) {
      // Prevent resolving 'firebase' as a package entry point
      if (source === 'firebase' && !source.includes('/')) {
        return false // Let Vite handle it normally
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), firebaseResolutionPlugin()],
  server: {
    port: 3011,
    host: true,  
    open: true,  
    strictPort: false, 
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['firebase'],
    conditions: ['import', 'module', 'browser', 'default'],
    mainFields: ['module', 'jsnext:main', 'jsnext'],
  },
  build: {
    // Enable code splitting and optimization
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Handle Firebase modules separately
          if (id.includes('firebase')) {
            return 'firebase-vendor'
          }
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor'
            }
            if (id.includes('@radix-ui')) {
              return 'ui-vendor'
            }
            if (id.includes('@monaco-editor')) {
              return 'editor-vendor'
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return '3d-vendor'
            }
            return 'vendor'
          }
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification (using esbuild - built into Vite, no extra dependency needed)
    minify: 'esbuild',
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'sonner',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
      'firebase/storage',
    ],
    exclude: ['@monaco-editor/react'], // Let Monaco load dynamically
  },
})

