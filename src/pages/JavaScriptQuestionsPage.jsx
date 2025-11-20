import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Code, BookOpen, Target } from 'lucide-react'

import { getAllQuestions, getTotalQuestions } from "@/lib/javascriptQuestions"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pagination } from "@/components/ui/pagination"
import SEO from "@/components/SEO"
import StructuredData, { generateBreadcrumbSchema } from "@/components/StructuredData"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function JavaScriptQuestionsPage() {
  const totalQuestions = getTotalQuestions()
  const allQuestions = getAllQuestions()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Pagination logic
  const totalPages = Math.ceil(allQuestions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const questions = useMemo(() => {
    return allQuestions.slice(startIndex, endIndex)
  }, [allQuestions.length, startIndex, endIndex])

  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
    { name: "JavaScript Questions", url: typeof window !== 'undefined' ? window.location.href : '' }
  ]

  return (
    <>
      <SEO
        title="JavaScript Questions"
        description={`Test your JavaScript knowledge with ${totalQuestions} output-based questions. From basic to advanced: challenge yourself and master JavaScript concepts including closures, promises, async/await, hoisting, and more.`}
        keywords="JavaScript questions, JavaScript output questions, JavaScript interview questions, JavaScript quiz, JavaScript practice, JavaScript concepts, JavaScript closures, JavaScript promises, JavaScript async await, JavaScript hoisting, JavaScript scope, JavaScript this keyword, JavaScript ES6, JavaScript fundamentals"
        ogTitle="JavaScript Questions - Test Your Knowledge"
        ogDescription={`Practice ${totalQuestions} JavaScript output-based questions to master JavaScript concepts.`}
        ogImage="/websitelogo.png"
      />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border/40">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 max-w-7xl">
          <Breadcrumb className="mb-4 md:mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>JavaScript Questions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <Code className="h-3 w-3" />
              <span>Practice Questions</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              JavaScript{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                Questions
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Test your JavaScript knowledge with {totalQuestions} output-based questions. 
              From basic to advanced: challenge yourself and master JavaScript concepts!
            </p>
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <Badge variant="outline" className="text-sm">
                <BookOpen className="h-3 w-3 mr-1" />
                {totalQuestions} Questions
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Target className="h-3 w-3 mr-1" />
                Output-Based
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">All Questions</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Click on any question to view the code snippet, options, and explanation
            </p>
          </div>

          {/* Results Count */}
          <div className="mb-4 md:mb-6">
            <div className="text-xs md:text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{startIndex + 1}-{Math.min(endIndex, allQuestions.length)}</span> of{" "}
              <span className="font-semibold text-foreground">{allQuestions.length}</span> questions
              {allQuestions.length > itemsPerPage && (
                <> (Page {currentPage} of {totalPages})</>
              )}
            </div>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {questions.map((question) => (
              <Card
                key={question.id}
                className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-4 md:p-6">
                  <div className="flex items-start justify-between mb-3 md:mb-4 gap-2">
                    <Badge className="font-mono text-xs">
                      Question {question.number}
                    </Badge>
                    <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 group-hover:scale-110 transition-transform shrink-0">
                      <Code className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                  </div>

                  <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {question.question}
                  </h3>

                  {question.code && (
                    <div className="mb-3 md:mb-4">
                      <pre className="bg-muted p-2 rounded text-xs overflow-x-auto max-h-24 overflow-y-auto">
                        <code className="text-[10px]">{question.code.substring(0, 100)}{question.code.length > 100 ? '...' : ''}</code>
                      </pre>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b border-border/50">
                    <span>{question.options.length} Options</span>
                  </div>

                  <Button asChild className="w-full group/btn text-sm">
                    <Link to={`/javascript-questions/${question.id}`}>
                      View Question
                      <ChevronRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 md:mt-12">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}

          <div className="mt-8 md:mt-12 lg:mt-16 text-center">
            <Card className="p-6 md:p-8 lg:p-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5" />
              <div className="relative">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Ready to Learn More?</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto">
                  Explore our comprehensive articles and quizzes to dive deeper into JavaScript and web development topics.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="shadow-lg shadow-primary/20 w-full sm:w-auto">
                    <Link to="/articles">
                      Browse Articles
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link to="/quizzes">
                      Take Quizzes
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

