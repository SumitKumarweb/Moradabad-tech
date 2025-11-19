import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import ProtectedRoute from '@/components/ProtectedRoute'
import { Toaster } from 'sonner'

// Lazy load all pages for code splitting
const Home = lazy(() => import('@/pages/Home'))
const ArticlesPage = lazy(() => import('@/pages/ArticlesPage'))
const ArticlePage = lazy(() => import('@/pages/ArticlePage'))
const EditorsPage = lazy(() => import('@/pages/EditorsPage'))
const EditorPage = lazy(() => import('@/pages/EditorPage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const SignupPage = lazy(() => import('@/pages/SignupPage'))
const QuizzesPage = lazy(() => import('@/pages/QuizzesPage'))
const QuizPage = lazy(() => import('@/pages/QuizPage'))
const ProfilePage = lazy(() => import('@/pages/ProfilePage'))
const DSAPage = lazy(() => import('@/pages/DSAPage'))
const DSASolvePage = lazy(() => import('@/pages/DSASolvePage'))
const TopDSAPage = lazy(() => import('@/pages/TopDSAPage'))
const TopDSASolvePage = lazy(() => import('@/pages/TopDSASolvePage'))

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen flex flex-col font-sans antialiased">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
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
                <Route path="/dsa" element={<DSAPage />} />
                <Route path="/dsa/:slug" element={<DSASolvePage />} />
                <Route path="/top-dsa" element={<TopDSAPage />} />
                <Route path="/top-dsa/:slug" element={<TopDSASolvePage />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

