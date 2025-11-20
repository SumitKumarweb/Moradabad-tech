import { db } from './firebase'
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  orderBy, 
  where,
  updateDoc,
  deleteDoc,
  limit
} from 'firebase/firestore'

const ADMIN_COLLECTION = 'admins'
const PROFILES_COLLECTION = 'profiles'
const PROGRESS_COLLECTION = 'user_progress'
const ACTIVITIES_COLLECTION = 'user_activities'

/**
 * Check if a user is an admin
 * @param {string} email - Admin email
 * @param {string} password - Admin password (in production, use proper hashing)
 * @returns {Promise<boolean>} True if admin credentials are valid
 */
export const verifyAdminCredentials = async (email, password) => {
  try {
    // For security, store admin credentials in Firestore
    // In production, use proper password hashing (bcrypt, etc.)
    const adminsRef = collection(db, ADMIN_COLLECTION)
    const q = query(adminsRef, where('email', '==', email))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const adminDoc = querySnapshot.docs[0]
      const adminData = adminDoc.data()
      // Simple password check (in production, use hashed passwords)
      if (adminData.password === password && adminData.isActive) {
        return { isValid: true, adminId: adminDoc.id }
      }
    }
    return { isValid: false }
  } catch (error) {
    console.error('Error verifying admin credentials:', error)
    throw error
  }
}

/**
 * Get all users with their profiles
 * @returns {Promise<Array>} Array of user data with profiles
 */
export const getAllUsers = async () => {
  try {
    const profilesRef = collection(db, PROFILES_COLLECTION)
    const querySnapshot = await getDocs(profilesRef)
    
    const users = []
    for (const docSnap of querySnapshot.docs) {
      const profileData = docSnap.data()
      const userId = docSnap.id
      
      // Get user progress
      const progressRef = doc(db, PROGRESS_COLLECTION, userId)
      const progressSnap = await getDoc(progressRef)
      const progress = progressSnap.exists() ? progressSnap.data() : null
      
      users.push({
        id: userId,
        ...profileData,
        progress: progress || {
          dsaSolved: [],
          jsSolved: [],
          totalSolved: 0,
          dsaCount: 0,
          jsCount: 0,
          currentStreak: 0,
          longestStreak: 0
        }
      })
    }
    
    return users.sort((a, b) => {
      const dateA = new Date(a.createdAt || 0)
      const dateB = new Date(b.createdAt || 0)
      return dateB - dateA
    })
  } catch (error) {
    console.error('Error getting all users:', error)
    throw error
  }
}

/**
 * Get user by ID with complete profile and progress
 * @param {string} userId - User ID
 * @returns {Promise<Object>} Complete user data
 */
export const getUserById = async (userId) => {
  try {
    const profileRef = doc(db, PROFILES_COLLECTION, userId)
    const profileSnap = await getDoc(profileRef)
    
    if (!profileSnap.exists()) {
      return null
    }
    
    const profileData = profileSnap.data()
    
    // Get user progress
    const progressRef = doc(db, PROGRESS_COLLECTION, userId)
    const progressSnap = await getDoc(progressRef)
    const progress = progressSnap.exists() ? progressSnap.data() : null
    
    // Get user activities
    const activitiesRef = collection(db, ACTIVITIES_COLLECTION)
    const activitiesQuery = query(
      activitiesRef,
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(50)
    )
    const activitiesSnapshot = await getDocs(activitiesQuery)
    const activities = []
    activitiesSnapshot.forEach((doc) => {
      activities.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    return {
      id: userId,
      ...profileData,
      progress: progress || {
        dsaSolved: [],
        jsSolved: [],
        totalSolved: 0,
        dsaCount: 0,
        jsCount: 0,
        currentStreak: 0,
        longestStreak: 0
      },
      activities
    }
  } catch (error) {
    console.error('Error getting user by ID:', error)
    throw error
  }
}

/**
 * Get admin analytics dashboard data
 * @returns {Promise<Object>} Analytics data
 */
export const getAdminAnalytics = async () => {
  try {
    // Get all users
    const users = await getAllUsers()
    const totalUsers = users.length
    
    // Calculate statistics
    let totalDSASolved = 0
    let totalJSSolved = 0
    let totalProblemsSolved = 0
    let usersWithProgress = 0
    let activeUsers = 0
    const now = new Date()
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    
    // User registration over time
    const registrationData = {}
    const solveDataByDay = {}
    
    users.forEach(user => {
      // Registration data
      if (user.createdAt) {
        const date = new Date(user.createdAt).toISOString().split('T')[0]
        registrationData[date] = (registrationData[date] || 0) + 1
      }
      
      // Progress statistics
      if (user.progress) {
        usersWithProgress++
        totalDSASolved += user.progress.dsaCount || 0
        totalJSSolved += user.progress.jsCount || 0
        totalProblemsSolved += user.progress.totalSolved || 0
        
        // Check if user was active in last 7 days
        if (user.progress.updatedAt) {
          const updatedAt = new Date(user.progress.updatedAt)
          if (updatedAt >= sevenDaysAgo) {
            activeUsers++
          }
        }
      }
      
      // Activity data
      if (user.activities) {
        user.activities.forEach(activity => {
          if (activity.timestamp) {
            const date = new Date(activity.timestamp).toISOString().split('T')[0]
            if (!solveDataByDay[date]) {
              solveDataByDay[date] = { dsa: 0, js: 0 }
            }
            if (activity.type === 'dsa_solved') {
              solveDataByDay[date].dsa++
            } else if (activity.type === 'js_solved') {
              solveDataByDay[date].js++
            }
          }
        })
      }
    })
    
    // Calculate average solves per user
    const avgDSAPerUser = usersWithProgress > 0 ? (totalDSASolved / usersWithProgress).toFixed(2) : 0
    const avgJSPerUser = usersWithProgress > 0 ? (totalJSSolved / usersWithProgress).toFixed(2) : 0
    
    // Top users by solves
    const topUsers = users
      .filter(u => u.progress && u.progress.totalSolved > 0)
      .sort((a, b) => (b.progress.totalSolved || 0) - (a.progress.totalSolved || 0))
      .slice(0, 10)
      .map(u => ({
        id: u.id,
        name: u.name || u.email || 'Anonymous',
        email: u.email,
        totalSolved: u.progress.totalSolved || 0,
        dsaCount: u.progress.dsaCount || 0,
        jsCount: u.progress.jsCount || 0,
        currentStreak: u.progress.currentStreak || 0
      }))
    
    // Difficulty distribution (if available)
    const difficultyStats = {
      easy: 0,
      medium: 0,
      hard: 0
    }
    
    return {
      totalUsers,
      totalDSASolved,
      totalJSSolved,
      totalProblemsSolved,
      usersWithProgress,
      activeUsers,
      avgDSAPerUser: parseFloat(avgDSAPerUser),
      avgJSPerUser: parseFloat(avgJSPerUser),
      topUsers,
      registrationData,
      solveDataByDay,
      difficultyStats
    }
  } catch (error) {
    console.error('Error getting admin analytics:', error)
    throw error
  }
}

/**
 * Update user profile (admin function)
 * @param {string} userId - User ID
 * @param {Object} updates - Profile updates
 * @returns {Promise<void>}
 */
export const updateUserProfile = async (userId, updates) => {
  try {
    const profileRef = doc(db, PROFILES_COLLECTION, userId)
    await updateDoc(profileRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error updating user profile:', error)
    throw error
  }
}

/**
 * Delete user (admin function)
 * @param {string} userId - User ID
 * @returns {Promise<void>}
 */
export const deleteUser = async (userId) => {
  try {
    // Delete profile
    const profileRef = doc(db, PROFILES_COLLECTION, userId)
    await deleteDoc(profileRef)
    
    // Delete progress
    const progressRef = doc(db, PROGRESS_COLLECTION, userId)
    const progressSnap = await getDoc(progressRef)
    if (progressSnap.exists()) {
      await deleteDoc(progressRef)
    }
    
    // Note: User auth account deletion should be handled separately via Firebase Admin SDK
  } catch (error) {
    console.error('Error deleting user:', error)
    throw error
  }
}

/**
 * Get recent activities across all users
 * @param {number} limitCount - Number of activities to retrieve
 * @returns {Promise<Array>} Array of recent activities
 */
export const getRecentActivities = async (limitCount = 50) => {
  try {
    const activitiesRef = collection(db, ACTIVITIES_COLLECTION)
    const q = query(
      activitiesRef,
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    )
    
    const querySnapshot = await getDocs(q)
    const activities = []
    querySnapshot.forEach((doc) => {
      activities.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    return activities
  } catch (error) {
    console.error('Error getting recent activities:', error)
    throw error
  }
}

