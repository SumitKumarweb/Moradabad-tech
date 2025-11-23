import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Code, BookOpen, Target, Clock, Play, ExternalLink } from 'lucide-react'

import { getAllReactMachineCodingQuestions, getTotalReactMachineCodingQuestions } from "@/lib/reactMachineCoding"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ReactMachineCodingPage() {
  const totalQuestions = getTotalReactMachineCodingQuestions()
  const allQuestions = getAllReactMachineCodingQuestions()
  const [currentPage, setCurrentPage] = useState(1)
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const itemsPerPage = 12

  const filteredQuestions = useMemo(() => {
    if (difficultyFilter === "all") {
      return allQuestions
    }
    return allQuestions.filter(q => q.difficulty === difficultyFilter)
  }, [allQuestions, difficultyFilter])

  // Pagination logic
  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const questions = useMemo(() => {
    return filteredQuestions.slice(startIndex, endIndex)
  }, [filteredQuestions, startIndex, endIndex])

  // Reset to page 1 when filter changes
  useMemo(() => {
    setCurrentPage(1)
  }, [difficultyFilter])

  const getDifficultyBadgeVariant = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'basic':
        return 'default'
      case 'intermediate':
        return 'secondary'
      case 'advanced':
        return 'destructive'
      default:
        return 'outline'
    }
  }

  const difficultyCounts = useMemo(() => {
    return {
      all: allQuestions.length,
      basic: allQuestions.filter(q => q.difficulty === 'basic').length,
      intermediate: allQuestions.filter(q => q.difficulty === 'intermediate').length,
      advanced: allQuestions.filter(q => q.difficulty === 'advanced').length,
    }
  }, [allQuestions])

  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
    { name: "React Machine Coding", url: typeof window !== 'undefined' ? window.location.href : '' }
  ]

  return (
    <>
      <SEO
        title="React.js Machine Coding Round"
        description={`Master React.js with ${totalQuestions}+ machine coding problems. From basic components to advanced system design - practice building real-world React applications.`}
        keywords="React machine coding, React.js coding round, React components, React hooks, React system design, React interview questions, React practice problems, React coding challenges"
        ogTitle="React.js Machine Coding Round - Master React Development"
        ogDescription={`Practice ${totalQuestions}+ React.js machine coding problems from basic to advanced level.`}
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
                <BreadcrumbPage>React Machine Coding</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <Code className="h-3 w-3" />
              <span>Machine Coding</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              React.js{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                Machine Coding
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Master React.js with {totalQuestions}+ machine coding problems. 
              From basic components to advanced system design - practice building real-world React applications!
            </p>
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <Badge variant="outline" className="text-sm">
                <BookOpen className="h-3 w-3 mr-1" />
                {totalQuestions} Problems
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Target className="h-3 w-3 mr-1" />
                Basic to Advanced
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* Filters */}
          <div className="mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-sm md:text-base text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{startIndex + 1}-{Math.min(endIndex, filteredQuestions.length)}</span> of{" "}
                <span className="font-semibold text-foreground">{filteredQuestions.length}</span> problems
              </div>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Filter by difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    All ({difficultyCounts.all})
                  </SelectItem>
                  <SelectItem value="basic">
                    Basic ({difficultyCounts.basic})
                  </SelectItem>
                  <SelectItem value="intermediate">
                    Intermediate ({difficultyCounts.intermediate})
                  </SelectItem>
                  <SelectItem value="advanced">
                    Advanced ({difficultyCounts.advanced})
                  </SelectItem>
                </SelectContent>
              </Select>
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
                    <Badge 
                      variant={getDifficultyBadgeVariant(question.difficulty)}
                      className="font-mono text-xs"
                    >
                      {question.difficulty || 'Basic'}
                    </Badge>
                    <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 group-hover:scale-110 transition-transform shrink-0">
                      <Code className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                  </div>

                  <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {question.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-3">
                    {question.description}
                  </p>

                  {question.duration && (
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{question.duration}</span>
                      </div>
                      {question.createdOn && (
                        <span>{question.createdOn.split(',')[0]}</span>
                      )}
                    </div>
                  )}

                  {question.tags && question.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {question.tags.slice(0, 3).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {question.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{question.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <Button asChild className="w-full group/btn text-sm">
                      <Link to={`/react-machine-coding/${question.id}`}>
                        View Problem
                        <ChevronRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                   
                  </div>
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
                  Explore our comprehensive articles and quizzes to dive deeper into React and web development topics.
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

