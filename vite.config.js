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

// Plugin to ensure react-vendor loads synchronously before other vendor chunks
const reactVendorFirstPlugin = () => {
  return {
    name: 'react-vendor-first',
    transformIndexHtml(html) {
      // Extract all modulepreload links
      const preloadRegex = /<link rel="modulepreload"[^>]*>/g
      const preloads = html.match(preloadRegex) || []
      
      // Separate react-vendor from others
      const reactVendorPreload = preloads.find(link => link.includes('react-vendor'))
      const vendorPreload = preloads.find(link => 
        link.includes('vendor') && 
        !link.includes('react-vendor') && 
        !link.includes('firebase-vendor') && 
        !link.includes('editor-vendor') && 
        !link.includes('3d-vendor')
      )
      const otherPreloads = preloads.filter(link => 
        link !== reactVendorPreload && 
        link !== vendorPreload
      )
      
      if (reactVendorPreload) {
        // Remove all preload links
        let newHtml = html.replace(preloadRegex, '')
        
        // Find the script tag position
        const scriptMatch = html.match(/<script[^>]*src="[^"]*index[^"]*\.js"[^>]*>/)
        if (scriptMatch) {
          // Insert react-vendor FIRST, then vendor (if exists), then others, before the script tag
          // This ensures React loads before vendor chunk executes
          const preloadsToInsert = [
            reactVendorPreload,
            ...(vendorPreload ? [vendorPreload] : []),
            ...otherPreloads
          ].join('\n    ')
          newHtml = newHtml.replace(
            scriptMatch[0],
            `${preloadsToInsert}\n    ${scriptMatch[0]}`
          )
        }
        
        return newHtml
      }
      
      return html
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), firebaseResolutionPlugin(), reactVendorFirstPlugin()],
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
    dedupe: ['react', 'react-dom', 'firebase'],
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
            // React and ALL React-dependent libraries should be in react-vendor
            // This ensures React is available when these libraries need it
            // IMPORTANT: React must be in this chunk and load first
            // Be VERY aggressive - include anything that might use React
            if (
              id.includes('react') || 
              id.includes('react-dom') || 
              id.includes('react-router') ||
              id.includes('next-themes') ||
              id.includes('sonner') ||
              id.includes('react-hook-form') ||
              id.includes('@hookform') ||
              id.includes('cmdk') ||
              id.includes('embla-carousel-react') ||
              id.includes('input-otp') ||
              id.includes('lucide-react') ||
              id.includes('react-day-picker') ||
              id.includes('react-resizable-panels') ||
              id.includes('recharts') ||
              id.includes('vaul') ||
              id.includes('@radix-ui') || // Radix UI components need React
              id.includes('class-variance-authority') || // Used with React components
              id.includes('zod') || // Often used with React Hook Form
              id.includes('tailwind-merge') || // Often used with React components
              id.includes('clsx') || // Often used with React components
              id.includes('date-fns') // Sometimes used in React components
            ) {
              return 'react-vendor'
            }
            if (id.includes('@monaco-editor')) {
              return 'editor-vendor'
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return '3d-vendor'
            }
            // Only truly non-React libraries should be in vendor
            // This should be minimal - mostly build tools
            return 'vendor'
          }
        },
        // Ensure proper chunk loading order
        chunkFileNames: (chunkInfo) => {
          // Ensure react-vendor loads first by naming it with a prefix
          if (chunkInfo.name === 'react-vendor') {
            return 'assets/react-vendor-[hash].js'
          }
          return 'assets/[name]-[hash].js'
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

