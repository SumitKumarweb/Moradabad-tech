import { db } from './firebase'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'

const PROGRESS_COLLECTION = 'user_progress'
const USERS_COLLECTION = 'users' // User profile collection if exists

/**
 * Get total user count
 * @returns {Promise<number>} Total number of users
 */
export const getTotalUserCount = async () => {
  try {
    // Count users from user_progress collection (users who have progress)
    const progressRef = collection(db, PROGRESS_COLLECTION)
    const snapshot = await getDocs(progressRef)
    return snapshot.size
  } catch (error) {
    console.error('Error getting user count:', error)
    // Return a default value or estimate
    return 0
  }
}

/**
 * Get user display name and email from profile
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User info with displayName and email
 */
const getUserInfo = async (userId) => {
  try {
    // Try to get from users collection if exists
    const userRef = doc(db, USERS_COLLECTION, userId)
    const userSnap = await getDoc(userRef)
    
    if (userSnap.exists()) {
      const data = userSnap.data()
      return {
        displayName: data.displayName || data.name || 'Anonymous',
        email: data.email || '',
        photoURL: data.photoURL || ''
      }
    }
    
    // Fallback to default
    return {
      displayName: 'Anonymous',
      email: '',
      photoURL: ''
    }
  } catch (error) {
    // If collection doesn't exist, that's okay - use defaults
    return {
      displayName: 'Anonymous',
      email: '',
      photoURL: ''
    }
  }
}

/**
 * Calculate user score based on various metrics
 * @param {Object} progress - User progress data
 * @returns {number} Total score
 */
const calculateScore = (progress) => {
  const dsaCount = progress.dsaCount || 0
  const jsCount = progress.jsCount || 0
  const totalSolved = progress.totalSolved || 0
  const currentStreak = progress.currentStreak || 0
  const longestStreak = progress.longestStreak || 0
  
  // Scoring system:
  // - DSA problems: 10 points each
  // - JS questions: 5 points each
  // - Current streak: 2 points per day
  // - Longest streak bonus: 1 point per day
  // - Total solved bonus: 1 point per problem
  
  const dsaScore = dsaCount * 10
  const jsScore = jsCount * 5
  const streakScore = currentStreak * 2
  const longestStreakBonus = longestStreak * 1
  const totalSolvedBonus = totalSolved * 1
  
  return dsaScore + jsScore + streakScore + longestStreakBonus + totalSolvedBonus
}

/**
 * Get leaderboard data
 * @param {number} limitCount - Maximum number of users to return
 * @returns {Promise<Array>} Array of ranked users
 */
export const getLeaderboard = async (limitCount = 100) => {
  try {
    const progressRef = collection(db, PROGRESS_COLLECTION)
    const snapshot = await getDocs(progressRef)
    
    const leaderboard = []
    
    // Process all users
    for (const docSnap of snapshot.docs) {
      const userId = docSnap.id
      const progress = docSnap.data()
      
      // Calculate score
      const score = calculateScore(progress)
      
      // Get user info
      const userInfo = await getUserInfo(userId)
      
      leaderboard.push({
        userId,
        displayName: userInfo.displayName,
        email: userInfo.email,
        photoURL: userInfo.photoURL,
        score,
        totalSolved: progress.totalSolved || 0,
        dsaCount: progress.dsaCount || 0,
        jsCount: progress.jsCount || 0,
        currentStreak: progress.currentStreak || 0,
        longestStreak: progress.longestStreak || 0,
        lastActivityDate: progress.lastActivityDate || null
      })
    }
    
    // Sort by score (descending)
    leaderboard.sort((a, b) => b.score - a.score)
    
    // Add rank
    leaderboard.forEach((user, index) => {
      user.rank = index + 1
    })
    
    // Return top N users
    return leaderboard.slice(0, limitCount)
  } catch (error) {
    console.error('Error getting leaderboard:', error)
    throw error
  }
}

/**
 * Get current user's rank
 * @param {string} userId - Current user ID
 * @returns {Promise<Object>} User's rank and position
 */
export const getUserRank = async (userId) => {
  try {
    const leaderboard = await getLeaderboard(1000) // Get more users to find rank
    const userIndex = leaderboard.findIndex(user => user.userId === userId)
    
    if (userIndex === -1) {
      return {
        rank: null,
        totalUsers: leaderboard.length,
        isInTop: false
      }
    }
    
    return {
      rank: leaderboard[userIndex].rank,
      totalUsers: leaderboard.length,
      isInTop: userIndex < 10, // Top 10
      userData: leaderboard[userIndex]
    }
  } catch (error) {
    console.error('Error getting user rank:', error)
    throw error
  }
}

