import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'

export function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden border border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {article.image ? (
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-muted">
              <span className="text-5xl font-bold text-muted-foreground/30">MT</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader className="p-5 md:p-6 pb-3">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className="font-mono text-xs font-normal hover:bg-secondary/80 transition-colors">
              {article.category}
            </Badge>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
          <h3 className="text-lg md:text-xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
            {article.title}
          </h3>
        </CardHeader>
        <CardContent className="p-5 md:p-6 pt-0 pb-4">
          <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </CardContent>
        <CardFooter className="p-5 md:p-6 pt-0 flex items-center text-xs text-muted-foreground gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{article.readTime}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

