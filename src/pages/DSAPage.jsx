import { useState, useMemo, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllDSAProblems } from "@/lib/dsaService"
import { generateSlug } from "@/lib/utils"
import { Code2, Search, X, Loader2, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

export default function DSAPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [problems, setProblems] = useState([])
  const [loading, setLoading] = useState(true)
  const [difficultyFilter, setDifficultyFilter] = useState("all")

  useEffect(() => {
    loadProblems()
  }, [])

  const loadProblems = async () => {
    try {
      setLoading(true)
      const data = await getAllDSAProblems()
      // If no problems from Firebase, use sample problems from generateDSAProblems
      if (!data || data.length === 0) {
        console.log("No problems found in Firebase, loading sample problems...")
        const { dsaProblems } = await import("@/lib/generateDSAProblems")
        // Convert sample problems to have IDs and slugs
        const sampleProblems = dsaProblems.map((problem, index) => ({
          id: `sample-${index}`,
          slug: problem.slug || generateSlug(problem.title),
          ...problem
        }))
        setProblems(sampleProblems)
      } else {
        // Ensure all problems have slugs
        const problemsWithSlugs = data.map((problem) => ({
          ...problem,
          slug: problem.slug || generateSlug(problem.title)
        }))
        setProblems(problemsWithSlugs)
      }
    } catch (error) {
      console.error("Error loading DSA problems:", error)
      // Fallback to sample problems on error
      try {
        const { dsaProblems } = await import("@/lib/generateDSAProblems")
        const sampleProblems = dsaProblems.map((problem, index) => ({
          id: `sample-${index}`,
          slug: problem.slug || generateSlug(problem.title),
          ...problem
        }))
        setProblems(sampleProblems)
      } catch (importError) {
        console.error("Error loading sample problems:", importError)
        setProblems([])
      }
    } finally {
      setLoading(false)
    }
  }

  const filteredProblems = useMemo(() => {
    let filtered = problems

    // Filter by difficulty
    if (difficultyFilter !== "all") {
      filtered = filtered.filter((problem) => 
        problem.difficulty?.toLowerCase() === difficultyFilter.toLowerCase()
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter((problem) => {
        return (
          problem.title?.toLowerCase().includes(query) ||
          problem.description?.toLowerCase().includes(query)
        )
      })
    }

    return filtered
  }, [searchQuery, problems, difficultyFilter])

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

  const getDifficultyIcon = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return <TrendingDown className="h-3 w-3" />
      case 'medium':
        return <Minus className="h-3 w-3" />
      case 'hard':
        return <TrendingUp className="h-3 w-3" />
      default:
        return null
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  const difficultyCounts = useMemo(() => {
    return {
      all: problems.length,
      easy: problems.filter(p => p.difficulty?.toLowerCase() === 'easy').length,
      medium: problems.filter(p => p.difficulty?.toLowerCase() === 'medium').length,
      hard: problems.filter(p => p.difficulty?.toLowerCase() === 'hard').length,
    }
  }, [problems])

  return (
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
                <BreadcrumbPage>DSA Problems</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <Code2 className="h-3 w-3" />
              <span>Practice Problems</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              Master{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                Data Structures
              </span>{" "}
              & Algorithms
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Solve coding problems to improve your problem-solving skills. 
              Practice with problems ranging from easy to hard difficulty levels.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 max-w-7xl">
        {/* Filters and Search */}
        <div className="mb-6 md:mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search problems by title or description..."
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
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-full sm:w-[180px] h-11 md:h-12">
                <SelectValue placeholder="Filter by difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All ({difficultyCounts.all})
                </SelectItem>
                <SelectItem value="easy">
                  Easy ({difficultyCounts.easy})
                </SelectItem>
                <SelectItem value="medium">
                  Medium ({difficultyCounts.medium})
                </SelectItem>
                <SelectItem value="hard">
                  Hard ({difficultyCounts.hard})
                </SelectItem>
              </SelectContent>
            </Select>
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
                {searchQuery || difficultyFilter !== "all" ? (
                  <>
                    Found <span className="font-semibold text-foreground">{filteredProblems.length}</span> problem{filteredProblems.length !== 1 ? 's' : ''}
                  </>
                ) : (
                  <>
                    Showing <span className="font-semibold text-foreground">{problems.length}</span> problem{problems.length !== 1 ? 's' : ''}
                  </>
                )}
              </div>
            </div>

            {/* Problems Grid */}
            {filteredProblems.length > 0 ? (
              <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredProblems.map((problem) => (
                  <Card
                    key={problem.id}
                    className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Badge 
                          variant={getDifficultyBadgeVariant(problem.difficulty)}
                          className="flex items-center gap-1"
                        >
                          {getDifficultyIcon(problem.difficulty)}
                          {problem.difficulty || 'Unknown'}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors">
                        {problem.title || 'Untitled Problem'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 line-clamp-3">
                        {problem.description || 'No description available'}
                      </CardDescription>
                      <Button asChild className="w-full">
                        <Link to={`/dsa/${problem.slug || generateSlug(problem.title)}`}>
                          Solve Problem
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 md:py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">No problems found</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  {searchQuery || difficultyFilter !== "all" ? (
                    <>
                      Try adjusting your filters or{" "}
                      <button
                        onClick={() => {
                          setSearchQuery("")
                          setDifficultyFilter("all")
                        }}
                        className="text-primary hover:underline font-medium"
                      >
                        clear your search
                      </button>
                    </>
                  ) : (
                    "No DSA problems available yet. Check back later!"
                  )}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

