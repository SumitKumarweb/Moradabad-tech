import { db, storage } from './firebase'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'

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
    await setDoc(profileRef, {
      ...profileData,
      updatedAt: new Date().toISOString()
    }, { merge: true })
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
 * @returns {Promise<void>}
 */
export const updateProfileWithFiles = async (userId, profileData, photoFile = null, resumeFile = null) => {
  try {
    const updatedData = { ...profileData }
    
    // Upload photo if provided
    if (photoFile) {
      const photoUrl = await uploadFile(photoFile, userId, 'photo')
      updatedData.photoUrl = photoUrl
    }
    
    // Upload resume if provided
    if (resumeFile) {
      const resumeUrl = await uploadFile(resumeFile, userId, 'resume')
      updatedData.resumeUrl = resumeUrl
    }
    
    // Save profile data
    await saveUserProfile(userId, updatedData)
  } catch (error) {
    console.error('Error updating profile with files:', error)
    throw error
  }
}

