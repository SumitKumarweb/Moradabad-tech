import { Link } from 'react-router-dom'
import SEO from "@/components/SEO"
import { Home, ArrowLeft, Search, Code2 } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to Moradabads homepage or explore our articles, tutorials, and coding resources."
        keywords="404, page not found, error"
      />
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 md:py-20 lg:py-24 px-4">
        <div className="container mx-auto max-w-2xl text-center space-y-8">
          {/* 404 Number */}
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">
              404
            </h1>
            <div className="flex items-center justify-center gap-2">
              <Code2 className="h-8 w-8 text-muted-foreground" />
              <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-base text-muted-foreground">
              Don't worry, let's get you back on track!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              <Home className="h-4 w-4" />
              Go to Homepage
            </Link>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Search className="h-4 w-4" />
              Browse Articles
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Popular Pages:</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link to="/editor" className="text-primary hover:underline">
                Code Editor
              </Link>
              <Link to="/dsa" className="text-primary hover:underline">
                DSA Problems
              </Link>
              <Link to="/quizzes" className="text-primary hover:underline">
                Quizzes
              </Link>
              <Link to="/interview" className="text-primary hover:underline">
                Interview Prep
              </Link>
              <Link to="/javascript-questions" className="text-primary hover:underline">
                JS Questions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

