import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where
} from 'firebase/firestore'
import { db } from './firebase'

const DSA_COLLECTION = 'dsa_problems'

// Get all DSA problems
export const getAllDSAProblems = async () => {
  try {
    const problemsRef = collection(db, DSA_COLLECTION)
    let querySnapshot
    
    // Try to order by createdAt, but fallback to getting all if that fails
    try {
      const q = query(problemsRef, orderBy('createdAt', 'desc'))
      querySnapshot = await getDocs(q)
    } catch (orderError) {
      // If ordering fails (e.g., no index), just get all documents
      console.warn('Could not order by createdAt, fetching all:', orderError)
      querySnapshot = await getDocs(problemsRef)
    }
    
    const problems = []
    querySnapshot.forEach((doc) => {
      problems.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    // Sort manually if createdAt exists, otherwise keep original order
    problems.sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        return new Date(b.createdAt) - new Date(a.createdAt)
      }
      return 0
    })
    
    return problems
  } catch (error) {
    console.error('Error fetching DSA problems:', error)
    throw error
  }
}

// Get DSA problems by difficulty
export const getDSAProblemsByDifficulty = async (difficulty) => {
  try {
    const problemsRef = collection(db, DSA_COLLECTION)
    let querySnapshot
    
    // Try to filter and order, but fallback if that fails
    try {
      const q = query(
        problemsRef, 
        where('difficulty', '==', difficulty),
        orderBy('createdAt', 'desc')
      )
      querySnapshot = await getDocs(q)
    } catch (queryError) {
      // If query fails, get all and filter manually
      console.warn('Could not use compound query, filtering manually:', queryError)
      const allSnapshot = await getDocs(problemsRef)
      const problems = []
      allSnapshot.forEach((doc) => {
        const data = doc.data()
        if (data.difficulty?.toLowerCase() === difficulty.toLowerCase()) {
          problems.push({
            id: doc.id,
            ...data
          })
        }
      })
      // Sort manually if createdAt exists
      problems.sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return new Date(b.createdAt) - new Date(a.createdAt)
        }
        return 0
      })
      return problems
    }
    
    const problems = []
    querySnapshot.forEach((doc) => {
      problems.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    return problems
  } catch (error) {
    console.error('Error fetching DSA problems by difficulty:', error)
    throw error
  }
}

// Get a single DSA problem by ID
export const getDSAProblemById = async (id) => {
  try {
    const docRef = doc(db, DSA_COLLECTION, id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error fetching DSA problem:', error)
    throw error
  }
}

// Create a new DSA problem
export const createDSAProblem = async (problemData) => {
  try {
    const problemsRef = collection(db, DSA_COLLECTION)
    const docRef = await addDoc(problemsRef, {
      ...problemData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
    return docRef.id
  } catch (error) {
    console.error('Error creating DSA problem:', error)
    throw error
  }
}

// Update a DSA problem
export const updateDSAProblem = async (id, problemData) => {
  try {
    const docRef = doc(db, DSA_COLLECTION, id)
    await updateDoc(docRef, {
      ...problemData,
      updatedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error updating DSA problem:', error)
    throw error
  }
}

// Delete a DSA problem
export const deleteDSAProblem = async (id) => {
  try {
    const docRef = doc(db, DSA_COLLECTION, id)
    await deleteDoc(docRef)
  } catch (error) {
    console.error('Error deleting DSA problem:', error)
    throw error
  }
}

