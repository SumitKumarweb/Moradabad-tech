import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Brain, Clock, Target, CheckCircle2 } from 'lucide-react'

import { quizzes, articles } from "@/lib/articles"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SEO from "@/components/SEO"
import StructuredData, { generateBreadcrumbSchema } from "@/components/StructuredData"
import { useAuth } from "@/contexts/AuthContext"
import { isQuizSolved } from "@/lib/progressService"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function QuizzesPage() {
  const { currentUser } = useAuth()
  const [solvedQuizzes, setSolvedQuizzes] = useState(new Set())

  useEffect(() => {
    if (currentUser) {
      checkSolvedStatus()
    }
  }, [currentUser])

  const checkSolvedStatus = async () => {
    if (!currentUser) return
    try {
      const solvedSet = new Set()
      await Promise.all(
        quizzes.map(async (quiz) => {
          const solved = await isQuizSolved(currentUser.uid, quiz.id)
          if (solved) {
            solvedSet.add(quiz.id)
          }
        })
      )
      setSolvedQuizzes(solvedSet)
    } catch (error) {
      console.error('Error checking solved status:', error)
    }
  }

  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
    { name: "Quizzes", url: typeof window !== 'undefined' ? window.location.href : '' }
  ]

  return (
    <>
      <SEO
        title="Quizzes"
        description="Challenge yourself with interactive quizzes designed to reinforce your learning. Track your progress and master web development concepts. Test your knowledge after reading articles."
        keywords="programming quizzes, web development quizzes, coding quizzes, JavaScript quiz, HTML quiz, CSS quiz, React quiz, programming test, coding test, web development test, interactive quiz, programming assessment"
        ogTitle="Quizzes - Test Your Knowledge"
        ogDescription="Interactive quizzes to test and reinforce your web development knowledge."
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
                <BreadcrumbPage>Quizzes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <Brain className="h-3 w-3" />
              <span>Interactive Learning</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              Test Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                Knowledge
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Challenge yourself with interactive quizzes designed to reinforce your learning. 
              Track your progress and master web development concepts.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">Available Quizzes</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Complete quizzes to test your understanding of each topic
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
            {quizzes.map((quiz) => {
              const article = articles.find(a => a.slug === quiz.articleSlug)
              if (!article) return null

              return (
                <Card
                  key={quiz.id}
                  className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-4 md:p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-3 md:mb-4 gap-2">
                      <div className="space-y-2 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge className="font-mono text-[10px] md:text-xs">
                            {article.category}
                          </Badge>
                          <Badge variant="outline" className="font-mono text-[10px] md:text-xs">
                            {article.difficulty}
                          </Badge>
                          {solvedQuizzes.has(quiz.id) && currentUser && (
                            <Badge variant="default" className="bg-green-600 hover:bg-green-700 text-[10px] md:text-xs">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Solved
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 group-hover:scale-110 transition-transform shrink-0">
                        <Target className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {quiz.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                      {quiz.description}
                    </p>

                    <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 pb-4 md:pb-6 border-b border-border/50">
                      <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <Clock className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0" />
                          <span>{quiz.questions.length * 2} min</span>
                        </div>
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <Brain className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0" />
                          <span>{quiz.questions.length} Questions</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                      <Button asChild className="flex-1 group/btn text-sm md:text-base">
                        <Link to={`/quiz/${quiz.id}`}>
                          Start Quiz
                          <ChevronRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1 text-sm md:text-base">
                        <Link to={`/articles/${article.slug}`}>
                          Read Article
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="mt-8 md:mt-12 lg:mt-16 text-center">
            <Card className="p-6 md:p-8 lg:p-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5" />
              <div className="relative">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Ready to Learn More?</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto">
                  Explore our comprehensive articles to dive deeper into web development topics before taking more quizzes.
                </p>
                <Button asChild size="lg" className="shadow-lg shadow-primary/20 w-full sm:w-auto">
                  <Link to="/articles">
                    Browse All Articles
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

