import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore'
import { db } from './firebase'

const COMMENTS_COLLECTION = 'community_comments'

// Get all top-level comments (parent comments)
export const getTopLevelComments = async () => {
  if (!db) {
    console.log('Firebase db not available')
    return []
  }

  try {
    const commentsRef = collection(db, COMMENTS_COLLECTION)
    const q = query(
      commentsRef,
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    
    const comments = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      comments.push({
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdAt),
        updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate() : new Date(data.updatedAt || data.createdAt)
      })
    })
    
    // Filter to only top-level comments (no parentId)
    return comments.filter(comment => !comment.parentId)
  } catch (error) {
    console.error('Error fetching comments:', error)
    return []
  }
}

// Get replies for a specific comment
export const getReplies = async (parentId) => {
  if (!db) {
    return []
  }

  try {
    const commentsRef = collection(db, COMMENTS_COLLECTION)
    const q = query(
      commentsRef,
      orderBy('createdAt', 'asc')
    )
    const querySnapshot = await getDocs(q)
    
    const replies = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      if (data.parentId === parentId) {
        replies.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdAt),
          updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate() : new Date(data.updatedAt || data.createdAt)
        })
      }
    })
    
    return replies
  } catch (error) {
    console.error('Error fetching replies:', error)
    return []
  }
}

// Get all comments with their replies (nested structure)
export const getAllCommentsWithReplies = async () => {
  if (!db) {
    return []
  }

  try {
    const commentsRef = collection(db, COMMENTS_COLLECTION)
    const q = query(
      commentsRef,
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    
    const allComments = []
    const commentsMap = new Map()
    
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      // Helper function to convert Firestore Timestamp to Date
      const convertToDate = (timestamp) => {
        if (!timestamp) return new Date()
        if (timestamp.toDate && typeof timestamp.toDate === 'function') {
          return timestamp.toDate()
        }
        if (timestamp instanceof Date) {
          return timestamp
        }
        if (typeof timestamp === 'string' || typeof timestamp === 'number') {
          return new Date(timestamp)
        }
        return new Date()
      }
      
      const comment = {
        id: doc.id,
        ...data,
        createdAt: convertToDate(data.createdAt),
        updatedAt: convertToDate(data.updatedAt || data.createdAt),
        replies: []
      }
      commentsMap.set(doc.id, comment)
      allComments.push(comment)
    })
    
    // Build nested structure
    const topLevelComments = []
    allComments.forEach(comment => {
      if (comment.parentId) {
        // This is a reply, add it to its parent's replies array
        const parent = commentsMap.get(comment.parentId)
        if (parent) {
          parent.replies.push(comment)
        }
      } else {
        // This is a top-level comment
        topLevelComments.push(comment)
      }
    })
    
    // Sort replies by date (oldest first)
    topLevelComments.forEach(comment => {
      comment.replies.sort((a, b) => a.createdAt - b.createdAt)
    })
    
    return topLevelComments
  } catch (error) {
    console.error('Error fetching comments with replies:', error)
    return []
  }
}

// Create a new comment
export const createComment = async (commentData) => {
  if (!db) {
    throw new Error('Firebase db not available')
  }

  try {
    const commentsRef = collection(db, COMMENTS_COLLECTION)
    const docRef = await addDoc(commentsRef, {
      ...commentData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
    return docRef.id
  } catch (error) {
    console.error('Error creating comment:', error)
    throw error
  }
}

// Update a comment
export const updateComment = async (commentId, commentData) => {
  if (!db) {
    throw new Error('Firebase db not available')
  }

  try {
    const docRef = doc(db, COMMENTS_COLLECTION, commentId)
    await updateDoc(docRef, {
      ...commentData,
      updatedAt: serverTimestamp()
    })
  } catch (error) {
    console.error('Error updating comment:', error)
    throw error
  }
}

// Delete a comment
export const deleteComment = async (commentId) => {
  if (!db) {
    throw new Error('Firebase db not available')
  }

  try {
    const docRef = doc(db, COMMENTS_COLLECTION, commentId)
    await deleteDoc(docRef)
  } catch (error) {
    console.error('Error deleting comment:', error)
    throw error
  }
}

// Listen to comments in real-time (optional, for future enhancement)
export const subscribeToComments = (callback) => {
  if (!db) {
    return () => {}
  }

  // For now, return a no-op unsubscribe function
  // In the future, you can use onSnapshot here for real-time updates
  return () => {}
}

