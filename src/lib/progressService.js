import { db } from './firebase'
import { doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore'

const PROGRESS_COLLECTION = 'user_progress'
const ACTIVITIES_COLLECTION = 'user_activities'

/**
 * Get user progress data
 * @param {string} userId - The user's Firebase Auth UID
 * @returns {Promise<Object>} User progress data
 */
export const getUserProgress = async (userId) => {
  try {
    const progressRef = doc(db, PROGRESS_COLLECTION, userId)
    const progressSnap = await getDoc(progressRef)
    
    if (progressSnap.exists()) {
      return progressSnap.data()
    }
    
    // Return default progress if not found
    return {
      dsaSolved: [],
      jsSolved: [],
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: null,
      totalSolved: 0,
      dsaCount: 0,
      jsCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  } catch (error) {
    console.error('Error getting user progress:', error)
    throw error
  }
}

/**
 * Mark a DSA problem as solved
 * @param {string} userId - The user's Firebase Auth UID
 * @param {string} problemId - The problem ID or slug
 * @returns {Promise<void>}
 */
export const markDSAProblemSolved = async (userId, problemId) => {
  try {
    const progressRef = doc(db, PROGRESS_COLLECTION, userId)
    const progressSnap = await getDoc(progressRef)
    
    const now = new Date().toISOString()
    const today = new Date().toISOString().split('T')[0]
    
    let progressData
    if (progressSnap.exists()) {
      progressData = progressSnap.data()
      const solved = progressData.dsaSolved || []
      
      // Check if already solved
      if (solved.includes(problemId)) {
        return // Already solved
      }
      
      // Add to solved list
      solved.push(problemId)
      
      progressData.dsaSolved = solved
      progressData.dsaCount = solved.length
      progressData.totalSolved = (progressData.dsaCount || 0) + (progressData.jsCount || 0)
      progressData.updatedAt = now
      
      // Update streak
      progressData = updateStreak(progressData, today)
      
      await updateDoc(progressRef, progressData)
    } else {
      // Create new progress document
      progressData = {
        dsaSolved: [problemId],
        jsSolved: [],
        currentStreak: 1,
        longestStreak: 1,
        lastActivityDate: today,
        totalSolved: 1,
        dsaCount: 1,
        jsCount: 0,
        createdAt: now,
        updatedAt: now
      }
      await setDoc(progressRef, progressData)
    }
    
    // Add activity
    await addActivity(userId, {
      type: 'dsa_solved',
      problemId,
      timestamp: now
    })
  } catch (error) {
    console.error('Error marking DSA problem as solved:', error)
    throw error
  }
}

/**
 * Mark a JavaScript question as solved
 * @param {string} userId - The user's Firebase Auth UID
 * @param {string} questionId - The question ID
 * @returns {Promise<void>}
 */
export const markJSQuestionSolved = async (userId, questionId) => {
  try {
    const progressRef = doc(db, PROGRESS_COLLECTION, userId)
    const progressSnap = await getDoc(progressRef)
    
    const now = new Date().toISOString()
    const today = new Date().toISOString().split('T')[0]
    
    let progressData
    if (progressSnap.exists()) {
      progressData = progressSnap.data()
      const solved = progressData.jsSolved || []
      
      // Check if already solved
      if (solved.includes(questionId)) {
        return // Already solved
      }
      
      // Add to solved list
      solved.push(questionId)
      
      progressData.jsSolved = solved
      progressData.jsCount = solved.length
      progressData.totalSolved = (progressData.dsaCount || 0) + (progressData.jsCount || 0)
      progressData.updatedAt = now
      
      // Update streak
      progressData = updateStreak(progressData, today)
      
      await updateDoc(progressRef, progressData)
    } else {
      // Create new progress document
      progressData = {
        dsaSolved: [],
        jsSolved: [questionId],
        currentStreak: 1,
        longestStreak: 1,
        lastActivityDate: today,
        totalSolved: 1,
        dsaCount: 0,
        jsCount: 1,
        createdAt: now,
        updatedAt: now
      }
      await setDoc(progressRef, progressData)
    }
    
    // Add activity
    await addActivity(userId, {
      type: 'js_solved',
      questionId,
      timestamp: now
    })
  } catch (error) {
    console.error('Error marking JS question as solved:', error)
    throw error
  }
}

/**
 * Update streak based on activity date
 * @param {Object} progressData - Current progress data
 * @param {string} today - Today's date in YYYY-MM-DD format
 * @returns {Object} Updated progress data
 */
const updateStreak = (progressData, today) => {
  const lastActivityDate = progressData.lastActivityDate
  
  if (!lastActivityDate) {
    // First activity
    progressData.currentStreak = 1
    progressData.longestStreak = 1
    progressData.lastActivityDate = today
    return progressData
  }
  
  const lastDate = new Date(lastActivityDate)
  const todayDate = new Date(today)
  const diffTime = todayDate - lastDate
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) {
    // Same day, streak continues
    return progressData
  } else if (diffDays === 1) {
    // Consecutive day, increment streak
    progressData.currentStreak = (progressData.currentStreak || 0) + 1
    if (progressData.currentStreak > (progressData.longestStreak || 0)) {
      progressData.longestStreak = progressData.currentStreak
    }
    progressData.lastActivityDate = today
  } else {
    // Streak broken, reset to 1
    progressData.currentStreak = 1
    progressData.lastActivityDate = today
  }
  
  return progressData
}

/**
 * Add an activity to user's activity log
 * @param {string} userId - The user's Firebase Auth UID
 * @param {Object} activity - Activity data
 * @returns {Promise<void>}
 */
export const addActivity = async (userId, activity) => {
  try {
    const activitiesRef = collection(db, ACTIVITIES_COLLECTION)
    await setDoc(doc(activitiesRef), {
      userId,
      ...activity,
      createdAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error adding activity:', error)
    // Don't throw - activities are not critical
  }
}

/**
 * Get user activities
 * @param {string} userId - The user's Firebase Auth UID
 * @param {number} limitCount - Maximum number of activities to retrieve
 * @returns {Promise<Array>} Array of activities
 */
export const getUserActivities = async (userId, limitCount = 50) => {
  try {
    const activitiesRef = collection(db, ACTIVITIES_COLLECTION)
    const q = query(
      activitiesRef,
      where('userId', '==', userId),
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
    console.error('Error getting user activities:', error)
    // Return empty array on error
    return []
  }
}

/**
 * Add a custom activity (like GitHub contribution)
 * @param {string} userId - The user's Firebase Auth UID
 * @param {string} type - Activity type (e.g., 'github_commit', 'article_read')
 * @param {Object} data - Additional activity data
 * @returns {Promise<void>}
 */
export const addCustomActivity = async (userId, type, data = {}) => {
  try {
    await addActivity(userId, {
      type,
      ...data,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error adding custom activity:', error)
    throw error
  }
}

/**
 * Get progress statistics
 * @param {string} userId - The user's Firebase Auth UID
 * @returns {Promise<Object>} Progress statistics
 */
export const getProgressStats = async (userId) => {
  try {
    const progress = await getUserProgress(userId)
    const activities = await getUserActivities(userId, 100)
    
    // Calculate weekly/monthly stats
    const now = new Date()
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    
    const weeklyActivities = activities.filter(act => {
      const actDate = new Date(act.timestamp)
      return actDate >= weekAgo
    })
    
    const monthlyActivities = activities.filter(act => {
      const actDate = new Date(act.timestamp)
      return actDate >= monthAgo
    })
    
    return {
      ...progress,
      weeklySolved: weeklyActivities.filter(a => a.type === 'dsa_solved' || a.type === 'js_solved').length,
      monthlySolved: monthlyActivities.filter(a => a.type === 'dsa_solved' || a.type === 'js_solved').length,
      totalActivities: activities.length
    }
  } catch (error) {
    console.error('Error getting progress stats:', error)
    throw error
  }
}

