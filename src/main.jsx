import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './contexts/AuthContext'
import { AdminProvider } from './contexts/AdminContext'
import './index.css'

// Suppress harmless abort errors from browser extensions or external scripts
window.addEventListener('unhandledrejection', (event) => {
  // Suppress abort errors from external sources (like browser extensions)
  if (event.reason?.name === 'AbortError' || 
      event.reason?.message?.includes('aborted') ||
      event.reason?.message?.includes('frame_ant')) {
    event.preventDefault()
    return
  }
  
  // Handle lazy loading errors (when module import fails)
  if (event.reason?.message?.includes('Failed to fetch dynamically imported module') ||
      event.reason?.message?.includes('Unexpected token') ||
      event.reason?.code === 'MODULE_NOT_FOUND') {
    console.error('Lazy loading error:', event.reason)
    // Prevent default to avoid showing error in console
    event.preventDefault()
    // Optionally reload the page or redirect
    // window.location.reload()
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AdminProvider>
      <App />
      </AdminProvider>
    </AuthProvider>
  </React.StrictMode>,
)

