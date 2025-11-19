import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import ProtectedRoute from '@/components/ProtectedRoute'
import { Toaster } from 'sonner'
import Home from '@/pages/Home'
import ArticlesPage from '@/pages/ArticlesPage'
import ArticlePage from '@/pages/ArticlePage'
import EditorsPage from '@/pages/EditorsPage'
import EditorPage from '@/pages/EditorPage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import QuizzesPage from '@/pages/QuizzesPage'
import QuizPage from '@/pages/QuizPage'
import AdminPanel from '@/pages/AdminPanel'
import ProfilePage from '@/pages/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen flex flex-col font-sans antialiased">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:slug" element={<ArticlePage />} />
              <Route path="/editor" element={<EditorsPage />} />
              <Route path="/editor/:language" element={<EditorPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/quizzes" element={<QuizzesPage />} />
              <Route path="/quiz/:quizId" element={<QuizPage />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminPanel />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

