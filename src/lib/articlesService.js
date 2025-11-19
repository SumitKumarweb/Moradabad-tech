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
import { articles as staticArticles } from './articles'

const ARTICLES_COLLECTION = 'articles'

// Get all articles
export const getAllArticles = async () => {
  // Helper function to return sorted static articles
  const getStaticArticles = () => {
    return staticArticles
      .map((article, index) => ({
        id: `static-${index}`,
        ...article
      }))
      .sort((a, b) => {
        // Sort by date descending (newest first)
        const dateA = new Date(a.date || 0)
        const dateB = new Date(b.date || 0)
        return dateB - dateA
      })
  }

  // If db is not available, return static articles
  if (!db) {
    console.log('Firebase db not available, using static articles')
    return getStaticArticles()
  }

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
    
    // If Firebase returns articles, use them; otherwise fall back to static articles
    if (articles.length > 0) {
      return articles
    } else {
      // Fallback to static articles
      console.log('No articles found in Firebase, using static articles')
      return getStaticArticles()
    }
  } catch (error) {
    console.error('Error fetching articles from Firebase, using static articles:', error)
    // Fallback to static articles if Firebase fails
    return getStaticArticles()
  }
}

// Get a single article by slug
export const getArticleBySlug = async (slug) => {
  // Helper function to find static article by slug
  const getStaticArticle = (slug) => {
    const staticArticle = staticArticles.find(article => article.slug === slug)
    if (staticArticle) {
      return {
        id: `static-${staticArticles.indexOf(staticArticle)}`,
        ...staticArticle
      }
    }
    return null
  }

  // If db is not available, return static article
  if (!db) {
    console.log('Firebase db not available, checking static articles')
    return getStaticArticle(slug)
  }

  try {
    const articlesRef = collection(db, ARTICLES_COLLECTION)
    const q = query(articlesRef, where('slug', '==', slug))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      return {
        id: doc.id,
        ...doc.data()
      }
    }
    
    // Fallback to static articles
    return getStaticArticle(slug)
  } catch (error) {
    console.error('Error fetching article from Firebase, checking static articles:', error)
    // Fallback to static articles if Firebase fails
    return getStaticArticle(slug)
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

