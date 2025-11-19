import { Link } from "react-router-dom"
import { ChevronRight, Brain, Clock, Target } from 'lucide-react'

import { quizzes, articles } from "@/lib/articles"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function QuizzesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border/40">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 ring-1 ring-inset ring-primary/10 mb-4">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              Test Your Knowledge
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Challenge yourself with interactive quizzes designed to reinforce your learning. 
              Track your progress and master web development concepts.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Available Quizzes</h2>
            <p className="text-muted-foreground">
              Complete quizzes to test your understanding of each topic
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {quizzes.map((quiz) => {
              const article = articles.find(a => a.slug === quiz.articleSlug)
              if (!article) return null

              return (
                <Card
                  key={quiz.id}
                  className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge className="font-mono text-xs">
                            {article.category}
                          </Badge>
                          <Badge variant="outline" className="font-mono text-xs">
                            {article.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 group-hover:scale-110 transition-transform">
                        <Target className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {quiz.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {quiz.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-6 pb-6 border-b border-border/50">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{quiz.questions.length * 2} min</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4" />
                          <span>{quiz.questions.length} Questions</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1 group/btn">
                        <Link to={`/quiz/${quiz.id}`}>
                          Start Quiz
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
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

          <div className="mt-12 md:mt-16 text-center">
            <Card className="p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Learn More?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Explore our comprehensive articles to dive deeper into web development topics before taking more quizzes.
                </p>
                <Button asChild size="lg" className="shadow-lg shadow-primary/20">
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
  )
}

