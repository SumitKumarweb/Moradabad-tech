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

const ARTICLES_COLLECTION = 'articles'

// Get all articles
export const getAllArticles = async () => {
  try {
    const articlesRef = collection(db, ARTICLES_COLLECTION)
    const q = query(articlesRef, orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q)
    
    const articles = []
    querySnapshot.forEach((doc) => {
      articles.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    return articles
  } catch (error) {
    console.error('Error fetching articles:', error)
    throw error
  }
}

// Get a single article by slug
export const getArticleBySlug = async (slug) => {
  try {
    const articlesRef = collection(db, ARTICLES_COLLECTION)
    const q = query(articlesRef, where('slug', '==', slug))
    const querySnapshot = await getDocs(q)
    
    if (querySnapshot.empty) {
      return null
    }
    
    const doc = querySnapshot.docs[0]
    return {
      id: doc.id,
      ...doc.data()
    }
  } catch (error) {
    console.error('Error fetching article:', error)
    throw error
  }
}

// Get a single article by ID
export const getArticleById = async (id) => {
  try {
    const docRef = doc(db, ARTICLES_COLLECTION, id)
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
    console.error('Error fetching article:', error)
    throw error
  }
}

// Create a new article
export const createArticle = async (articleData) => {
  try {
    const articlesRef = collection(db, ARTICLES_COLLECTION)
    const docRef = await addDoc(articlesRef, {
      ...articleData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
    return docRef.id
  } catch (error) {
    console.error('Error creating article:', error)
    throw error
  }
}

// Update an article
export const updateArticle = async (id, articleData) => {
  try {
    const docRef = doc(db, ARTICLES_COLLECTION, id)
    await updateDoc(docRef, {
      ...articleData,
      updatedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error updating article:', error)
    throw error
  }
}

// Delete an article
export const deleteArticle = async (id) => {
  try {
    const docRef = doc(db, ARTICLES_COLLECTION, id)
    await deleteDoc(docRef)
  } catch (error) {
    console.error('Error deleting article:', error)
    throw error
  }
}

