import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA5p5m7xrdmNjvIfDs6uZAtTVY-Jspo44",
  authDomain: "moradabad-tech.firebaseapp.com",
  projectId: "moradabad-tech",
  storageBucket: "moradabad-tech.firebasestorage.app",
  messagingSenderId: "948009675838",
  appId: "1:948009675838:web:0e139f0548eb563ed6f56f",
  measurementId: "G-RR0YPF7JYS"
};

// Initialize Firebase
let app
try {
  app = initializeApp(firebaseConfig)
} catch (error) {
  console.error('Firebase initialization error:', error)
  throw error
}

// Initialize Firebase Authentication and get a reference to the service
let auth
try {
  auth = getAuth(app)
  // Only connect to emulator in development if needed
  // if (import.meta.env.DEV && !auth._delegate._config?.emulator) {
  //   connectAuthEmulator(auth, "http://localhost:9099")
  // }
} catch (error) {
  console.error('Firebase Auth initialization error:', error)
  throw error
}

// Initialize Cloud Firestore and get a reference to the service
let db
try {
  db = getFirestore(app)
  // Only connect to emulator in development if needed
  // if (import.meta.env.DEV) {
  //   connectFirestoreEmulator(db, 'localhost', 8080)
  // }
} catch (error) {
  console.error('Firestore initialization error:', error)
  throw error
}

export { auth, db }
export default app

