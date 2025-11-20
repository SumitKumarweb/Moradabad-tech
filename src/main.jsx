import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './contexts/AuthContext'
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
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)

