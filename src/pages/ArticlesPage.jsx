import { articles } from "@/lib/articles"
import { ArticleCard } from "@/components/article-card"
import { BookOpen } from 'lucide-react'

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border/40 bg-muted/30">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <BookOpen className="h-3 w-3" />
              <span>Knowledge Base</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              Learn from our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                articles
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Explore our collection of in-depth tutorials, guides, and technical deep dives. 
              From beginner-friendly introductions to advanced techniques.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{articles.length}</span> articles
          </div>
        </div>
        <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}

