import { db, storage, auth } from './firebase'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { updateProfile } from 'firebase/auth'

/**
 * Get user profile data from Firestore
 * @param {string} userId - The user's Firebase Auth UID
 * @returns {Promise<Object|null>} User profile data or null if not found
 */
export const getUserProfile = async (userId) => {
  try {
    const profileRef = doc(db, 'profiles', userId)
    const profileSnap = await getDoc(profileRef)
    
    if (profileSnap.exists()) {
      return profileSnap.data()
    }
    return null
  } catch (error) {
    // Ignore AbortError - it's harmless and occurs when component unmounts
    if (error.name === 'AbortError' || error.code === 'cancelled') {
      console.log('Profile fetch was cancelled (component unmounted)')
      return null
    }
    console.error('Error getting user profile:', error)
    throw error
  }
}

/**
 * Create or update user profile in Firestore
 * @param {string} userId - The user's Firebase Auth UID
 * @param {Object} profileData - Profile data to save
 * @returns {Promise<void>}
 */
export const saveUserProfile = async (userId, profileData) => {
  try {
    const profileRef = doc(db, 'profiles', userId)
    const profileSnap = await getDoc(profileRef)
    
    const dataToSave = {
      ...profileData,
      updatedAt: new Date().toISOString()
    }
    
    // Add createdAt only if profile doesn't exist
    if (!profileSnap.exists()) {
      dataToSave.createdAt = new Date().toISOString()
    }
    
    await setDoc(profileRef, dataToSave, { merge: true })
  } catch (error) {
    console.error('Error saving user profile:', error)
    throw error
  }
}

/**
 * Upload a file to Firebase Storage
 * @param {File} file - The file to upload
 * @param {string} userId - The user's Firebase Auth UID
 * @param {string} fileType - Type of file ('photo' or 'resume')
 * @returns {Promise<string>} Download URL of the uploaded file
 */
export const uploadFile = async (file, userId, fileType) => {
  try {
    const fileExtension = file.name.split('.').pop()
    const fileName = `${fileType}_${userId}_${Date.now()}.${fileExtension}`
    const storageRef = ref(storage, `profiles/${userId}/${fileName}`)
    
    await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(storageRef)
    
    return downloadURL
  } catch (error) {
    console.error('Error uploading file:', error)
    
    // Check for CORS errors
    const errorMessage = error.message || ''
    const errorCode = error.code || ''
    
    if (errorMessage.includes('CORS') || errorMessage.includes('blocked by CORS policy') || 
        errorMessage.includes('preflight') || errorCode === 'storage/cors-error') {
      const corsError = new Error(
        'Storage upload failed due to CORS configuration. Please configure CORS in Firebase Console.'
      )
      corsError.code = 'storage/cors-error'
      corsError.originalError = error
      throw corsError
    }
    
    if (errorCode === 'storage/unauthorized') {
      const authError = new Error(
        'You do not have permission to upload files. Please check Firebase Storage rules.'
      )
      authError.code = errorCode
      throw authError
    }
    
    if (errorCode === 'storage/quota-exceeded') {
      const quotaError = new Error('Storage quota exceeded. Please contact support.')
      quotaError.code = errorCode
      throw quotaError
    }
    
    // Check for network errors
    if (errorMessage.includes('ERR_FAILED') || errorMessage.includes('network') || 
        errorMessage.includes('Failed to fetch')) {
      const networkError = new Error('Network error. Please check your connection and try again.')
      networkError.code = 'network-error'
      throw networkError
    }
    
    throw error
  }
}

/**
 * Delete a file from Firebase Storage
 * @param {string} fileUrl - The URL of the file to delete
 * @returns {Promise<void>}
 */
export const deleteFile = async (fileUrl) => {
  try {
    if (!fileUrl) return
    
    // Extract the file path from the URL
    const urlParts = fileUrl.split('/')
    const fileName = urlParts[urlParts.length - 1].split('?')[0]
    const pathParts = fileUrl.split('/o/')[1]?.split('?')[0]
    
    if (pathParts) {
      const decodedPath = decodeURIComponent(pathParts)
      const fileRef = ref(storage, decodedPath)
      await deleteObject(fileRef)
    }
  } catch (error) {
    console.error('Error deleting file:', error)
    // Don't throw - file deletion is not critical
  }
}

/**
 * Update user profile with file uploads
 * @param {string} userId - The user's Firebase Auth UID
 * @param {Object} profileData - Profile data including files
 * @param {File|null} photoFile - Photo file to upload (optional)
 * @param {File|null} resumeFile - Resume file to upload (optional)
 * @param {string|null} existingPhotoUrl - Existing photo URL to preserve if no new photo (optional)
 * @returns {Promise<void>}
 */
export const updateProfileWithFiles = async (userId, profileData, photoFile = null, resumeFile = null, existingPhotoUrl = null) => {
  try {
    const updatedData = { ...profileData }
    
    // Upload photo if provided
    if (photoFile) {
      // Delete old photo if exists
      if (existingPhotoUrl) {
        try {
          await deleteFile(existingPhotoUrl)
        } catch (error) {
          console.warn('Could not delete old photo:', error)
          // Continue even if deletion fails
        }
      }
      
      const photoUrl = await uploadFile(photoFile, userId, 'photo')
      updatedData.photoUrl = photoUrl
      
      // Also update Firebase Auth profile photo
      const user = auth.currentUser
      if (user && user.uid === userId) {
        try {
          await updateProfile(user, { 
            photoURL: photoUrl,
            displayName: profileData.name || user.displayName
          })
        } catch (error) {
          console.warn('Could not update Auth profile photo:', error)
          // Continue even if Auth update fails
        }
      }
    } else if (existingPhotoUrl) {
      // Preserve existing photo URL if no new photo uploaded
      updatedData.photoUrl = existingPhotoUrl
    }
    
    // Upload resume if provided
    if (resumeFile) {
      const resumeUrl = await uploadFile(resumeFile, userId, 'resume')
      updatedData.resumeUrl = resumeUrl
    }
    
    // Always save profile data to Firestore (including photoUrl)
    await saveUserProfile(userId, updatedData)
    
    // Update Auth display name if changed
    const user = auth.currentUser
    if (user && user.uid === userId && profileData.name && profileData.name !== user.displayName) {
      try {
        await updateProfile(user, { displayName: profileData.name })
      } catch (error) {
        console.warn('Could not update Auth display name:', error)
        // Continue even if Auth update fails
      }
    }
  } catch (error) {
    console.error('Error updating profile with files:', error)
    throw error
  }
}

