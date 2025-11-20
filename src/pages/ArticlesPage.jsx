import { useState, useMemo, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllArticles } from "@/lib/articlesService"
import { ArticleCard } from "@/components/article-card"
import { BookOpen, Search, X, Loader2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pagination } from "@/components/ui/pagination"
import SEO from "@/components/SEO"
import StructuredData, { generateItemListSchema, generateBreadcrumbSchema } from "@/components/StructuredData"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function ArticlesPage() {
  const { category } = useParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  useEffect(() => {
    loadArticles()
  }, [])

  const loadArticles = async () => {
    try {
      setLoading(true)
      const data = await getAllArticles()
      setArticles(data)
    } catch (error) {
      console.error("Error loading articles:", error)
      // Fallback to empty array if Firestore fails
      setArticles([])
    } finally {
      setLoading(false)
    }
  }

  const filteredArticles = useMemo(() => {
    let filtered = articles

    // Filter by category from URL if present
    if (category) {
      filtered = filtered.filter((article) => 
        article.category?.toLowerCase() === category.toLowerCase()
      )
    }

    // Filter by search query if present
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter((article) => {
        return (
          article.title?.toLowerCase().includes(query) ||
          article.description?.toLowerCase().includes(query) ||
          article.excerpt?.toLowerCase().includes(query) ||
          article.category?.toLowerCase().includes(query) ||
          article.tags?.some(tag => tag.toLowerCase().includes(query)) ||
          article.author?.toLowerCase().includes(query)
        )
      })
    }

    return filtered
  }, [searchQuery, articles, category])

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, category])

  const clearSearch = () => {
    setSearchQuery("")
  }

  // Generate breadcrumb items
  const breadcrumbItems = category
    ? [
        { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
        { name: "Articles", url: typeof window !== 'undefined' ? `${window.location.origin}/articles` : '' },
        { name: category.charAt(0).toUpperCase() + category.slice(1), url: typeof window !== 'undefined' ? window.location.href : '' }
      ]
    : [
        { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
        { name: "Articles", url: typeof window !== 'undefined' ? window.location.href : '' }
      ]

  // Generate ItemList schema for articles
  const articleListSchema = generateItemListSchema({
    name: category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Articles` : "Articles",
    description: category 
      ? `Collection of ${category} articles and tutorials`
      : "Comprehensive collection of programming and web development articles, tutorials, and guides.",
    items: filteredArticles.map(article => ({
      name: article.title,
      title: article.title,
      url: typeof window !== 'undefined' ? `${window.location.origin}/articles/${article.slug}` : '',
      description: article.description || article.excerpt
    }))
  })

  return (
    <>
      <SEO
        title="Articles"
        description="Explore our collection of in-depth tutorials, guides, and technical deep dives. From beginner-friendly introductions to advanced techniques covering web development, programming, and modern technologies."
        keywords="programming articles, web development tutorials, coding guides, technical articles, programming tutorials, web development guides, HTML tutorials, CSS tutorials, JavaScript tutorials, React tutorials, programming education, coding education"
        ogTitle="Articles - Learn Web Development"
        ogDescription="Comprehensive collection of programming and web development articles, tutorials, and guides."
        ogImage="/websitelogo.png"
      />
      <StructuredData data={articleListSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border/40 bg-muted/30">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 max-w-7xl">
          <Breadcrumb className="mb-4 md:mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {category ? (
                  <>
                    <BreadcrumbLink asChild>
                      <Link to="/articles">Articles</Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                    <BreadcrumbPage className="capitalize">{category}</BreadcrumbPage>
                  </>
                ) : (
                  <BreadcrumbPage>Articles</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <BookOpen className="h-3 w-3" />
              <span>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Articles` : 'Knowledge Base'}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              {category ? (
                <>
                  {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                    Articles
                  </span>
                </>
              ) : (
                <>
                  Learn from our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                    articles
                  </span>
                </>
              )}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Explore our collection of in-depth tutorials, guides, and technical deep dives. 
              From beginner-friendly introductions to advanced techniques.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 max-w-7xl">
        {/* Search Bar */}
        <div className="mb-6 md:mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles by title, category, tags, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 h-11 md:h-12 text-sm md:text-base"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={clearSearch}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            {/* Results Count */}
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div className="text-xs md:text-sm text-muted-foreground">
                {category || searchQuery ? (
                  <>
                    Found <span className="font-semibold text-foreground">{filteredArticles.length}</span> article{filteredArticles.length !== 1 ? 's' : ''}
                    {category && (
                      <> in <span className="font-semibold text-foreground capitalize">{category}</span></>
                    )}
                    {searchQuery && (
                      <> for &quot;<span className="font-semibold text-foreground">{searchQuery}</span>&quot;</>
                    )}
                    {filteredArticles.length > itemsPerPage && (
                      <> (Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length})</>
                    )}
                  </>
                ) : (
                  <>
                    Showing <span className="font-semibold text-foreground">{articles.length}</span> article{articles.length !== 1 ? 's' : ''}
                    {articles.length > itemsPerPage && (
                      <> (Page {currentPage} of {totalPages})</>
                    )}
                  </>
                )}
              </div>
              {category && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link to="/articles">
                    <X className="h-3 w-3 mr-1" />
                    Clear Filter
                  </Link>
                </Button>
              )}
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <>
                <div className="grid gap-3 md:gap-4 lg:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {paginatedArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-8">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                )}
              </>
            ) : (
          <div className="text-center py-12 md:py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Try searching with different keywords or{" "}
              <button
                onClick={clearSearch}
                className="text-primary hover:underline font-medium"
              >
                clear your search
              </button>
            </p>
          </div>
        )}
          </>
        )}
      </div>
    </div>
    </>
  )
}

