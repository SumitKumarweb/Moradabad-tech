import { useState, useMemo, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Code, BookOpen, Target, Filter } from 'lucide-react'

import { getAllQuestions, getTotalQuestions, getQuestionsByCategory } from "@/lib/baseProgrammingQuestions"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pagination } from "@/components/ui/pagination"
import SEO from "@/components/SEO"

const CATEGORIES = ["All", "Prime Numbers", "Digit Questions", "Series", "Print Patterns", "Conditionals"]

export default function BaseProgrammingPage() {
  const totalQuestions = getTotalQuestions()
  const allQuestions = getAllQuestions()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const itemsPerPage = 12

  // Filter questions by category
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === "All") {
      return allQuestions
    }
    return getQuestionsByCategory(selectedCategory)
  }, [selectedCategory, allQuestions])

  // Pagination logic
  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const questions = useMemo(() => {
    return filteredQuestions.slice(startIndex, endIndex)
  }, [filteredQuestions, startIndex, endIndex])

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

  const getDifficultyBadgeVariant = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'default'
      case 'medium':
        return 'secondary'
      case 'hard':
        return 'destructive'
      default:
        return 'outline'
    }
  }

  return (
    <>
      <SEO
        title="Base Programming Questions"
        description={`Master fundamental programming concepts with ${totalQuestions} basic programming questions. Practice prime numbers, digit manipulation, series, patterns, and conditionals to build a strong foundation.`}
        keywords="base programming, basic programming, programming fundamentals, prime numbers, digit questions, series problems, pattern printing, conditional logic, programming practice, coding basics"
        ogTitle="Base Programming Questions - Master Fundamentals"
        ogDescription={`Practice ${totalQuestions} fundamental programming questions to build a strong coding foundation.`}
        ogImage="/websitelogo.png"
      />
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border/40">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 ring-1 ring-inset ring-primary/10 mb-4">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              Base Programming Questions
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Master fundamental programming concepts with {totalQuestions} basic programming questions. 
              Practice prime numbers, digit manipulation, series, patterns, and conditionals!
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="text-sm">
                <BookOpen className="h-3 w-3 mr-1" />
                {totalQuestions} Questions
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Target className="h-3 w-3 mr-1" />
                Fundamentals
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* Category Filter */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold text-muted-foreground">Filter by Category:</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs md:text-sm"
                >
                  {category}
                  {category !== "All" && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {getQuestionsByCategory(category).length}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
              {selectedCategory === "All" ? "All Questions" : `${selectedCategory} Questions`}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Click on any question to view the problem description, test cases, and solve it
            </p>
          </div>

          {/* Results Count */}
          <div className="mb-4 md:mb-6">
            <div className="text-xs md:text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{startIndex + 1}-{Math.min(endIndex, filteredQuestions.length)}</span> of{" "}
              <span className="font-semibold text-foreground">{filteredQuestions.length}</span> questions
              {filteredQuestions.length > itemsPerPage && (
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
                    <div className="flex flex-col gap-1">
                      <Badge className="font-mono text-xs">
                        Q{question.number}
                      </Badge>
                      <Badge variant={getDifficultyBadgeVariant(question.difficulty)} className="text-xs">
                        {question.difficulty}
                      </Badge>
                    </div>
                    <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 group-hover:scale-110 transition-transform shrink-0">
                      <Code className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs mb-2">
                      {question.category}
                    </Badge>
                  </div>

                  <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {question.title}
                  </h3>

                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">
                    {question.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b border-border/50">
                    <span>{question.testCases.length} Test Cases</span>
                    {question.hint && (
                      <span className="text-primary">Has Hint</span>
                    )}
                  </div>

                  <Button asChild className="w-full group/btn text-sm">
                    <Link to={`/base-programming/${question.id}`}>
                      Solve Problem
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
                  Explore our comprehensive articles, quizzes, and advanced DSA problems to dive deeper into programming.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="shadow-lg shadow-primary/20 w-full sm:w-auto">
                    <Link to="/articles">
                      Browse Articles
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link to="/dsa">
                      Practice DSA
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

