import { Link, useParams, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { ChevronLeft, Calendar, Clock, Share2, Loader2 } from 'lucide-react'

import { getArticleBySlug, getAllArticles } from "@/lib/articlesService"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SEO from "@/components/SEO"
import StructuredData, { generateArticleSchema, generateBreadcrumbSchema } from "@/components/StructuredData"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function ArticlePage() {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadArticle()
  }, [slug])

  const loadArticle = async () => {
    try {
      setLoading(true)
      const articleData = await getArticleBySlug(slug)
      if (articleData) {
        setArticle(articleData)
        // Load related articles
        const allArticles = await getAllArticles()
        setRelatedArticles(
          allArticles
            .filter(a => a.slug !== slug && a.category === articleData.category)
            .slice(0, 2)
        )
      }
    } catch (error) {
      console.error("Error loading article:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!article) {
    return <Navigate to="/articles" replace />
  }

  // Generate keywords from article data
  const articleKeywords = [
    article.category,
    article.difficulty,
    ...(article.tags || []),
    'programming',
    'web development',
    'tutorial',
    'coding guide'
  ].filter(Boolean).join(', ')

  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
    { name: "Articles", url: typeof window !== 'undefined' ? `${window.location.origin}/articles` : '' },
    { name: article.category, url: typeof window !== 'undefined' ? `${window.location.origin}/articles/category/${article.category.toLowerCase()}` : '' },
    { name: article.title, url: typeof window !== 'undefined' ? window.location.href : '' }
  ]

  return (
    <>
      <SEO
        title={article.title}
        description={article.description || article.excerpt || `Learn about ${article.title} - ${article.category} tutorial`}
        keywords={articleKeywords}
        ogTitle={article.title}
        ogDescription={article.description || article.excerpt || `Learn about ${article.title}`}
        ogImage={article.image || "/websitelogo.png"}
        ogUrl={typeof window !== 'undefined' ? window.location.href : ''}
        type="article"
      />
      <StructuredData data={generateArticleSchema(article)} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border/40">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 max-w-7xl">
          <Breadcrumb className="mb-4 md:mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-1.5">
                    <span>Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/articles">Articles</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={`/articles/category/${article.category.toLowerCase()}`}>
                    {article.category}
            </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-[200px] truncate md:max-w-none">
                  {article.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge className="font-mono text-xs">{article.category}</Badge>
                <Badge variant="outline" className="font-mono text-xs">{article.difficulty}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                {article.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                {article.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0">
                    {article.author.charAt(0)}
                  </div>
                  <span className="hidden sm:inline">{article.author}</span>
                  <span className="sm:hidden text-xs">{article.author.split(' ')[0]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0" />
                  <span>{article.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto -mr-2 hover:bg-muted shrink-0">
                  <Share2 className="h-3.5 w-3.5 md:h-4 md:w-4 md:mr-2" />
                  <span className="hidden md:inline">Share</span>
                </Button>
              </div>
            </div>

            {article.image && (
              <div className="relative mt-6 md:mt-8 lg:mt-12 aspect-video rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
        <article className="max-w-4xl mx-auto">
          <div 
            className="article-content prose prose-sm md:prose-base lg:prose-lg prose-gray dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-20 prose-headings:mb-4 prose-headings:mt-8
              prose-h1:text-3xl prose-h1:md:text-4xl prose-h1:lg:text-5xl prose-h1:font-extrabold prose-h1:mb-6 prose-h1:mt-12 prose-h1:border-b prose-h1:border-border prose-h1:pb-4
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:lg:text-4xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-foreground
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:lg:text-3xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-foreground
              prose-h4:text-lg prose-h4:md:text-xl prose-h4:font-semibold prose-h4:mb-2 prose-h4:mt-6
              prose-p:leading-relaxed prose-p:mb-4 prose-p:text-foreground/90 prose-p:text-base md:prose-p:text-lg
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-a:transition-colors
              prose-strong:font-bold prose-strong:text-foreground
              prose-code:text-primary prose-code:bg-muted/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
              prose-pre:bg-muted/80 prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:p-4 prose-pre:my-6 prose-pre:shadow-lg prose-pre:text-foreground
              prose-pre:code:bg-transparent prose-pre:code:p-0 prose-pre:code:text-sm md:prose-pre:code:text-base prose-pre:code:text-foreground prose-pre:code:font-mono
              prose-img:rounded-xl prose-img:shadow-2xl prose-img:mx-auto prose-img:my-8 prose-img:border prose-img:border-border/50
              prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4 prose-ul:space-y-2
              prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4 prose-ol:space-y-2
              prose-li:my-2 prose-li:leading-relaxed prose-li:text-foreground/90
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-2 prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:bg-muted/50 prose-blockquote:rounded-r-lg prose-blockquote:text-foreground/80
              prose-hr:border-border prose-hr:my-8
              prose-table:w-full prose-table:my-6 prose-table:border-collapse
              prose-th:border prose-th:border-border prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold
              prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {article.hasQuiz && (
          <div className="max-w-4xl mx-auto mt-10 md:mt-12 lg:mt-16">
            <div className="relative rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6 md:p-8 overflow-hidden">
              <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5" />
              <div className="relative">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Ready to test your knowledge?</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">Take the quiz to reinforce what you've learned in this article.</p>
                <Button asChild size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20">
                  <Link to={`/quiz/${article.quizId}`}>
                    Start Quiz
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {relatedArticles.length > 0 && (
        <div className="max-w-4xl mx-auto mt-12 md:mt-16 lg:mt-20 pt-8 md:pt-12 lg:pt-16 border-t border-border/40">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 lg:mb-8">Continue Learning</h2>
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
            {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  to={`/articles/${relatedArticle.slug}`}
                  className="group block p-4 md:p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Badge variant="secondary" className="mb-2 md:mb-3 font-mono text-xs">
                    {relatedArticle.category}
                  </Badge>
                  <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
        )}
      </div>
    </div>
    </>
  )
}

