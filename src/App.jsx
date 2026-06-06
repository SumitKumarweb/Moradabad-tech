import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import ProtectedRoute from '@/components/ProtectedRoute'
import AdminProtectedRoute from '@/components/AdminProtectedRoute'
import ErrorBoundary from '@/components/ErrorBoundary'
import ScrollToTop from '@/components/ScrollToTop'
import { Button } from '@/components/ui/button'
import { Toaster } from 'sonner'

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
)

// Enhanced lazy loading with error handling
const lazyWithRetry = (componentImport) => {
  return lazy(async () => {
    try {
      const page = await componentImport()
      // Verify the import was successful
      if (!page || !page.default) {
        throw new Error('Invalid module export')
      }
      return page
    } catch (error) {
      // Log the error for debugging
      console.error('Failed to load component:', error)
      
      // Check if it's a network/module error (HTML returned instead of JS)
      const isNetworkError = error.message?.includes('Unexpected token') ||
                             error.message?.includes('Failed to fetch') ||
                             error.toString().includes('<')
      
      if (isNetworkError) {
        // Retry once after a short delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        try {
          const retryPage = await componentImport()
          if (retryPage && retryPage.default) {
            return retryPage
          }
        } catch (retryError) {
          console.error('Retry also failed:', retryError)
        }
      }
      
      // Return a fallback component
      return {
        default: () => (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Failed to load page</h2>
              <p className="text-muted-foreground mb-4">
                The page couldn't be loaded. Please try refreshing the page.
              </p>
              <div className="flex gap-2 justify-center">
                <Button onClick={() => window.location.href = '/'}>
                  Go to Home
                </Button>
                <Button variant="outline" onClick={() => window.location.reload()}>
                  Reload Page
                </Button>
              </div>
            </div>
          </div>
        )
      }
    }
  })
}

// Lazy load all pages for code splitting with error handling
const Home = lazyWithRetry(() => import('@/pages/Home'))
const ArticlesPage = lazyWithRetry(() => import('@/pages/ArticlesPage'))
const ArticlePage = lazyWithRetry(() => import('@/pages/ArticlePage'))
const EditorsPage = lazyWithRetry(() => import('@/pages/EditorsPage'))
const EditorPage = lazyWithRetry(() => import('@/pages/EditorPage'))
const LoginPage = lazyWithRetry(() => import('@/pages/LoginPage'))
const SignupPage = lazyWithRetry(() => import('@/pages/SignupPage'))
const QuizzesPage = lazyWithRetry(() => import('@/pages/QuizzesPage'))
const QuizPage = lazyWithRetry(() => import('@/pages/QuizPage'))
const ProfilePage = lazyWithRetry(() => import('@/pages/ProfilePage'))
const DSAPage = lazyWithRetry(() => import('@/pages/DSAPage'))
const DSASolvePage = lazyWithRetry(() => import('@/pages/DSASolvePage'))
const TopDSAPage = lazyWithRetry(() => import('@/pages/TopDSAPage'))
const TopDSASolvePage = lazyWithRetry(() => import('@/pages/TopDSASolvePage'))
const JavaScriptQuestionsPage = lazyWithRetry(() => import('@/pages/JavaScriptQuestionsPage'))
const JavaScriptQuestionPage = lazyWithRetry(() => import('@/pages/JavaScriptQuestionPage'))
const BaseProgrammingPage = lazyWithRetry(() => import('@/pages/BaseProgrammingPage'))
const BaseProgrammingSolvePage = lazyWithRetry(() => import('@/pages/BaseProgrammingSolvePage'))
const InterviewPage = lazyWithRetry(() => import('@/pages/InterviewPage'))
const InterviewSectionPage = lazyWithRetry(() => import('@/pages/InterviewSectionPage'))
const InterviewTopicPage = lazyWithRetry(() => import('@/pages/InterviewTopicPage'))
const ProgressPage = lazyWithRetry(() => import('@/pages/ProgressPage'))
const LeaderboardPage = lazyWithRetry(() => import('@/pages/LeaderboardPage'))
const AboutPage = lazyWithRetry(() => import('@/pages/AboutPage'))
const ContactPage = lazyWithRetry(() => import('@/pages/ContactPage'))
const CareerPage = lazyWithRetry(() => import('@/pages/CareerPage'))
const PrivacyPolicyPage = lazyWithRetry(() => import('@/pages/PrivacyPolicyPage'))
const TermsPage = lazyWithRetry(() => import('@/pages/TermsPage'))
const NotFoundPage = lazyWithRetry(() => import('@/pages/NotFoundPage'))
const AdminLoginPage = lazyWithRetry(() => import('@/pages/AdminLoginPage'))
const AdminDashboardPage = lazyWithRetry(() => import('@/pages/AdminDashboardPage'))
const CommunityPage = lazyWithRetry(() => import('@/pages/CommunityPage'))
const TypingPage = lazyWithRetry(() => import('@/pages/TypingPage'))
const TypingLevelPage = lazyWithRetry(() => import('@/pages/TypingLevelPage'))
const TypingChapterPage = lazyWithRetry(() => import('@/pages/TypingChapterPage'))
const TypingGame = lazyWithRetry(() => import('@/pages/TypingGame'))
const TypingTestPage = lazyWithRetry(() => import('@/pages/TypingTestPage'))
const ReactMachineCodingPage = lazyWithRetry(() => import('@/pages/ReactMachineCodingPage'))
const ReactMachineCodingSolvePage = lazyWithRetry(() => import('@/pages/ReactMachineCodingSolvePage'))
const JavaScriptMachineCodingPage = lazyWithRetry(() => import('@/pages/JavaScriptMachineCodingPage'))
const JavaScriptMachineCodingSolvePage = lazyWithRetry(() => import('@/pages/JavaScriptMachineCodingSolvePage'))

function App() {
  return (
    <ErrorBoundary>
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen flex flex-col font-sans antialiased">
          <Navbar />
          <main className="flex-1">
              <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/articles/category/:category" element={<ArticlesPage />} />
                <Route path="/articles/:slug" element={<ArticlePage />} />
                <Route path="/editor" element={<EditorsPage />} />
                <Route path="/editor/:language" element={<EditorPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/quizzes" element={<QuizzesPage />} />
                <Route path="/quiz/:quizId" element={<QuizPage />} />
                <Route path="/typing" element={<TypingPage />} />
                <Route path="/typing/level/:levelId" element={<TypingLevelPage />} />
                <Route path="/typing/chapter/:chapterId" element={<TypingChapterPage />} />
                <Route path="/typing/game" element={<TypingGame />} />
                <Route path="/typing/test" element={<TypingTestPage />} />
                <Route path="/dsa" element={<DSAPage />} />
                <Route path="/dsa/:slug" element={<DSASolvePage />} />
                <Route path="/top-dsa" element={<TopDSAPage />} />
                <Route path="/top-dsa/:slug" element={<TopDSASolvePage />} />
                <Route path="/javascript-questions" element={<JavaScriptQuestionsPage />} />
                <Route path="/javascript-questions/:questionId" element={<JavaScriptQuestionPage />} />
                <Route path="/base-programming" element={<BaseProgrammingPage />} />
                <Route path="/base-programming/:questionId" element={<BaseProgrammingSolvePage />} />
                <Route path="/react-machine-coding" element={<ReactMachineCodingPage />} />
                <Route path="/react-machine-coding/:id" element={<ReactMachineCodingSolvePage />} />
                <Route path="/javascript-machine-coding" element={<JavaScriptMachineCodingPage />} />
                <Route path="/javascript-machine-coding/:id" element={<JavaScriptMachineCodingSolvePage />} />
                <Route path="/interview" element={<InterviewPage />} />
                <Route path="/interview/:sectionId" element={<InterviewSectionPage />} />
                <Route path="/interview/:sectionId/:topicId" element={<InterviewTopicPage />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/progress"
                  element={
                    <ProtectedRoute>
                      <ProgressPage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/careers" element={<CareerPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route
                  path="/admin/dashboard"
                  element={
                    <AdminProtectedRoute>
                      <AdminDashboardPage />
                    </AdminProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
              </ErrorBoundary>
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </ThemeProvider>
    </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App

