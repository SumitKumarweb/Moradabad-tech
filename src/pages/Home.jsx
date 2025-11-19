import { Link } from "react-router-dom"
import { lazy, Suspense, useMemo } from "react"
import { ArrowRight, Code, Terminal, BookOpen, Cpu, Globe, Zap, Brain } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/articles"
import { ArticleCard } from "@/components/article-card"

// Lazy load heavy 3D component
const Hero3D = lazy(() => import('@/components/hero-3d').then(module => ({ default: module.Hero3D })))

export default function Home() {
  const featuredArticles = useMemo(() => articles.slice(0, 3), [])
  
  const features = useMemo(() => [
    {
      icon: BookOpen,
      title: "Comprehensive Guides",
      desc: "Deep dive into web technologies with our structured learning paths.",
      image: "/html-code-snippet.png"
    },
    {
      icon: Terminal,
      title: "Browser IDE",
      desc: "Write and execute JavaScript, C++, and Python directly in your browser.",
      image: "/javascript-code.png"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      desc: "Real-time code execution and syntax highlighting for rapid prototyping.",
      image: "/css-styling.jpg"
    },
    {
      icon: Globe,
      title: "Modern Stack",
      desc: "Learn the latest frameworks including React, and Tailwind CSS.",
      image: "/react-js-logo.png"
    },
    {
      icon: Brain,
      title: "Interactive Quizzes",
      desc: "Test your knowledge with engaging quizzes after each article.",
      image: "/placeholder.jpg"
    },
    {
      icon: Code,
      title: "Clean Architecture",
      desc: "Learn best practices for scalable and maintainable codebases.",
      image: "/placeholder.jpg"
    }
  ], [])

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="relative w-full py-12 md:py-20 lg:py-32 xl:py-40 overflow-hidden border-b">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8 z-10 max-w-7xl">
          <div className="grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  Master the Art of <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-purple-400 dark:drop-shadow-[0_0_15px_rgba(100,200,255,0.5)] animate-gradient">
                    Modern Coding
                  </span>
                </h1>
                <p className="mx-auto lg:mx-0 max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Moradabad Tech is your premier destination for full-stack development. 
                  From HTML basics to advanced React patterns, we empower the next generation of developers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-8 text-sm md:text-base shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 dark:shadow-primary/40 dark:hover:shadow-primary/50">
                  <Link to="/articles">
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-8 text-sm md:text-base backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-300 hover:scale-105 dark:border-primary/30 dark:hover:border-primary/50">
                  <Link to="/editor">
                    Open Editor <Terminal className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                  <span className="text-xs md:text-sm font-medium">Online Editor</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                  <span className="text-xs md:text-sm font-medium">Updated Daily</span>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden group order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              }>
                <Hero3D />
              </Suspense>
              <div className="absolute top-0 left-0 right-0 h-10 bg-muted/90 backdrop-blur-md border-b border-border/50 flex items-center px-4 gap-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/90 shadow-inner transition-transform hover:scale-110" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/90 shadow-inner transition-transform hover:scale-110" />
                  <div className="h-3 w-3 rounded-full bg-green-500/90 shadow-inner transition-transform hover:scale-110" />
                </div>
                <div className="ml-2 text-xs text-muted-foreground font-mono">preview.jsx</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 lg:py-24 bg-muted/30 border-b">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">Everything you need to ship</h2>
            <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A complete toolkit for developers. Write, test, and learn in one unified platform.
            </p>
          </div>
          <div className="grid gap-px bg-border rounded-xl overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-lg">
            {features.map((feature, i) => (
              <div key={i} className="group relative bg-background p-6 md:p-8 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/5 text-primary ring-1 ring-inset ring-primary/10 group-hover:bg-primary/10 group-hover:ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    {feature.image && (
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-border/50 bg-muted/50 group-hover:border-primary/50 transition-all duration-300">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 md:mb-12 gap-4 md:gap-6">
            <div className="space-y-2 text-center md:text-left w-full md:w-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Latest from the Blog</h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                Technical deep dives and tutorials.
              </p>
            </div>
            <Button asChild variant="ghost" className="group w-full md:w-auto hover:bg-muted transition-all duration-300">
              <Link to="/articles">
                View all articles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

