import { db } from './firebase'
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore'

const SUBMISSIONS_COLLECTION = 'machine_coding_submissions'

/**
 * Save a machine coding submission
 * @param {string} userId - The user's Firebase Auth UID
 * @param {string} problemId - The problem ID
 * @param {string} problemType - 'react' or 'javascript'
 * @param {string} code - The code submission
 * @param {Object} metadata - Additional metadata (title, difficulty, etc.)
 * @returns {Promise<string>} Submission document ID
 */
export const saveSubmission = async (userId, problemId, problemType, code, metadata = {}) => {
  try {
    const submissionsRef = collection(db, SUBMISSIONS_COLLECTION)
    const newDocRef = doc(submissionsRef)
    await setDoc(newDocRef, {
      userId,
      problemId,
      problemType,
      code,
      ...metadata,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
    return newDocRef.id
  } catch (error) {
    console.error('Error saving submission:', error)
    throw error
  }
}

/**
 * Save or update a machine coding submission
 * @param {string} userId - The user's Firebase Auth UID
 * @param {string} problemId - The problem ID
 * @param {string} problemType - 'react' or 'javascript'
 * @param {string} code - The code submission
 * @param {Object} metadata - Additional metadata (title, difficulty, etc.)
 * @returns {Promise<string>} Submission document ID
 */
export const saveOrUpdateSubmission = async (userId, problemId, problemType, code, metadata = {}) => {
  try {
    // Check if submission already exists
    const existingSubmission = await getSubmission(userId, problemId, problemType)
    
    if (existingSubmission) {
      // Update existing submission
      const submissionRef = doc(db, SUBMISSIONS_COLLECTION, existingSubmission.id)
      await setDoc(submissionRef, {
        ...existingSubmission,
        code,
        ...metadata,
        updatedAt: new Date().toISOString()
      }, { merge: true })
      return existingSubmission.id
    } else {
      // Create new submission
      const submissionsRef = collection(db, SUBMISSIONS_COLLECTION)
      const newDocRef = doc(submissionsRef)
      await setDoc(newDocRef, {
        userId,
        problemId,
        problemType,
        code,
        ...metadata,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
      return newDocRef.id
    }
  } catch (error) {
    console.error('Error saving/updating submission:', error)
    throw error
  }
}

/**
 * Get a specific submission
 * @param {string} userId - The user's Firebase Auth UID
 * @param {string} problemId - The problem ID
 * @param {string} problemType - 'react' or 'javascript'
 * @returns {Promise<Object|null>} Submission data or null if not found
 */
export const getSubmission = async (userId, problemId, problemType) => {
  try {
    const submissionsRef = collection(db, SUBMISSIONS_COLLECTION)
    // Query without orderBy to avoid index requirement
    const q = query(
      submissionsRef,
      where('userId', '==', userId),
      where('problemId', '==', problemId),
      where('problemType', '==', problemType)
    )
    
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      // Sort manually and get the most recent one
      const docs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      docs.sort((a, b) => {
        const dateA = new Date(a.updatedAt || a.createdAt || 0)
        const dateB = new Date(b.updatedAt || b.createdAt || 0)
        return dateB - dateA
      })
      return docs[0]
    }
    return null
  } catch (error) {
    console.error('Error getting submission:', error)
    throw error
  }
}

/**
 * Get all submissions for a user
 * @param {string} userId - The user's Firebase Auth UID
 * @param {string} problemType - 'react' or 'javascript' (optional)
 * @returns {Promise<Array>} Array of submissions
 */
export const getUserSubmissions = async (userId, problemType = null) => {
  try {
    const submissionsRef = collection(db, SUBMISSIONS_COLLECTION)
    let q
    
    if (problemType) {
      q = query(
        submissionsRef,
        where('userId', '==', userId),
        where('problemType', '==', problemType)
      )
    } else {
      q = query(
        submissionsRef,
        where('userId', '==', userId)
      )
    }
    
    const querySnapshot = await getDocs(q)
    const submissions = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    // Sort manually by updatedAt
    submissions.sort((a, b) => {
      const dateA = new Date(a.updatedAt || a.createdAt || 0)
      const dateB = new Date(b.updatedAt || b.createdAt || 0)
      return dateB - dateA
    })
    
    return submissions
  } catch (error) {
    console.error('Error getting user submissions:', error)
    throw error
  }
}

/**
 * Get all submissions for a specific problem
 * @param {string} problemId - The problem ID
 * @param {string} problemType - 'react' or 'javascript'
 * @returns {Promise<Array>} Array of submissions
 */
export const getProblemSubmissions = async (problemId, problemType) => {
  try {
    const submissionsRef = collection(db, SUBMISSIONS_COLLECTION)
    const q = query(
      submissionsRef,
      where('problemId', '==', problemId),
      where('problemType', '==', problemType)
    )
    
    const querySnapshot = await getDocs(q)
    const submissions = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    // Sort manually by updatedAt
    submissions.sort((a, b) => {
      const dateA = new Date(a.updatedAt || a.createdAt || 0)
      const dateB = new Date(b.updatedAt || b.createdAt || 0)
      return dateB - dateA
    })
    
    return submissions
  } catch (error) {
    console.error('Error getting problem submissions:', error)
    throw error
  }
}

