import { Navigate } from 'react-router-dom'
import { useAdmin } from '@/contexts/AdminContext'
import { Loader2 } from 'lucide-react'

export default function AdminProtectedRoute({ children }) {
  const { isAdmin } = useAdmin()

  // Show loading state while checking admin status
  if (isAdmin === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  // Redirect to admin login if not authenticated
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}

