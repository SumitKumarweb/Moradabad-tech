import { Link, useParams, Navigate } from "react-router-dom"
import { ChevronLeft, Calendar, Clock, Share2 } from 'lucide-react'

import { articles } from "@/lib/articles"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return <Navigate to="/articles" replace />
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border/40">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <Button asChild variant="ghost" className="mb-6 md:mb-8 -ml-2 hover:bg-muted transition-colors">
            <Link to="/articles">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge className="font-mono text-xs">{article.category}</Badge>
                <Badge variant="outline" className="font-mono text-xs">{article.difficulty}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {article.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {article.author.charAt(0)}
                  </div>
                  <span className="hidden sm:inline">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto -mr-2 hover:bg-muted">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {article.image && (
              <div className="relative mt-8 md:mt-12 aspect-video rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-gray dark:prose-invert max-w-4xl mx-auto prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border/50 prose-img:rounded-lg prose-img:shadow-xl">
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {article.hasQuiz && (
          <div className="max-w-4xl mx-auto mt-12 md:mt-16">
            <div className="relative rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6 md:p-8 overflow-hidden">
              <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5" />
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to test your knowledge?</h3>
                <p className="text-muted-foreground mb-6">Take the quiz to reinforce what you've learned in this article.</p>
                <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                  <Link to={`/quiz/${article.quizId}`}>
                    Start Quiz
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto mt-16 md:mt-20 pt-12 md:pt-16 border-t border-border/40">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Continue Learning</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {articles
              .filter(a => a.slug !== slug && a.category === article.category)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  to={`/articles/${relatedArticle.slug}`}
                  className="group block p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Badge variant="secondary" className="mb-3 font-mono text-xs">
                    {relatedArticle.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

