/**
 * Script to set up admin credentials in Firestore
 * 
 * Usage:
 * 1. Make sure you have Firebase Admin SDK configured
 * 2. Run: node scripts/setupAdmin.js
 * 
 * Or manually add to Firestore:
 * Collection: admins
 * Document: (auto-generated ID)
 * Fields:
 *   - email: "admin@example.com"
 *   - password: "your-secure-password" (in production, use hashed passwords)
 *   - isActive: true
 *   - createdAt: (timestamp)
 */

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBA5p5m7xrdmNjvIfDs6uZAtTVY-Jspo44",
  authDomain: "moradabad-tech.firebaseapp.com",
  projectId: "moradabad-tech",
  storageBucket: "moradabad-tech.firebasestorage.app",
  messagingSenderId: "948009675838",
  appId: "1:948009675838:web:0e139f0548eb563ed6f56f",
  measurementId: "G-RR0YPF7JYS"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function setupAdmin() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

  try {
    // Check if admin already exists
    const adminsRef = collection(db, 'admins')
    const q = query(adminsRef, where('email', '==', adminEmail))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      console.log('Admin already exists with email:', adminEmail)
      console.log('To create a new admin, use a different email.')
      return
    }

    // Create admin document
    await addDoc(adminsRef, {
      email: adminEmail,
      password: adminPassword, // In production, hash this password
      isActive: true,
      createdAt: new Date().toISOString()
    })

    console.log('Admin created successfully!')
    console.log('Email:', adminEmail)
    console.log('Password:', adminPassword)
    console.log('\n⚠️  IMPORTANT: Change the default password after first login!')
    console.log('⚠️  In production, use proper password hashing (bcrypt, etc.)')
  } catch (error) {
    console.error('Error setting up admin:', error)
  }
}

setupAdmin()

