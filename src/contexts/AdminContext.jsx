import { createContext, useContext, useState, useCallback, useMemo } from 'react'
import { verifyAdminCredentials } from '@/lib/adminService'

const AdminContext = createContext({})

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(() => {
    // Check if admin session exists in localStorage
    return localStorage.getItem('adminSession') === 'true'
  })
  const [adminEmail, setAdminEmail] = useState(() => {
    return localStorage.getItem('adminEmail') || null
  })

  const login = useCallback(async (email, password) => {
    try {
      const result = await verifyAdminCredentials(email, password)
      if (result.isValid) {
        setIsAdmin(true)
        setAdminEmail(email)
        localStorage.setItem('adminSession', 'true')
        localStorage.setItem('adminEmail', email)
        return { success: true }
      } else {
        return { success: false, error: 'Invalid admin credentials' }
      }
    } catch (error) {
      console.error('Admin login error:', error)
      return { success: false, error: error.message || 'Failed to login' }
    }
  }, [])

  const logout = useCallback(() => {
    setIsAdmin(false)
    setAdminEmail(null)
    localStorage.removeItem('adminSession')
    localStorage.removeItem('adminEmail')
  }, [])

  const value = useMemo(() => ({
    isAdmin,
    adminEmail,
    login,
    logout
  }), [isAdmin, adminEmail, login, logout])

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}

