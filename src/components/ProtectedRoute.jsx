import { Navigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Loader2 } from 'lucide-react'

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { currentUser } = useAuth()

  // Show loading state while checking auth
  if (currentUser === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  // For admin routes, you can add additional checks here
  // For now, we'll allow any authenticated user to access admin panel
  // You can enhance this by checking user roles from Firestore

  return children
}

