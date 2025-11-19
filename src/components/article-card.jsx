import { memo } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'

export const ArticleCard = memo(function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden border border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 dark:hover:border-primary/60 dark:hover:shadow-xl dark:hover:shadow-primary/20 dark:hover:glow-primary">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {article.image ? (
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-muted">
              <span className="text-3xl md:text-4xl font-bold text-muted-foreground/30">MT</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader className="p-3 md:p-4 pb-2">
          <div className="flex items-center justify-between mb-2 gap-2">
            <Badge variant="secondary" className="font-mono text-[10px] md:text-xs font-normal hover:bg-secondary/80 transition-colors shrink-0">
              {article.category}
            </Badge>
            <ArrowUpRight className="h-3 w-3 md:h-3.5 md:w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
          </div>
          <h3 className="text-sm md:text-base font-bold leading-tight tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
        </CardHeader>
        <CardContent className="p-3 md:p-4 pt-0 pb-2">
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </CardContent>
        <CardFooter className="p-3 md:p-4 pt-0 flex items-center flex-wrap text-[10px] md:text-xs text-muted-foreground gap-2 md:gap-3">
          <div className="flex items-center gap-1 shrink-0">
            <Calendar className="h-2.5 w-2.5 md:h-3 md:w-3 shrink-0" />
            <span className="truncate">{article.date}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Clock className="h-2.5 w-2.5 md:h-3 md:w-3 shrink-0" />
            <span>{article.readTime}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
})

