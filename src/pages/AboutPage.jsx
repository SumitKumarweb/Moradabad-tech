import { Link } from "react-router-dom"
import SEO from "@/components/SEO"
import StructuredData, { generateBreadcrumbSchema } from "@/components/StructuredData"
import { Code2, Users, Target, Zap, Heart } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function AboutPage() {
  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
    { name: "About", url: typeof window !== 'undefined' ? window.location.href : '' }
  ]

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about jiocoder - your premier destination for full-stack development education. Empowering developers with comprehensive tutorials and powerful tools."
        keywords="about, company, mission, vision, web development education, coding platform"
      />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
      <div className="flex flex-col min-h-screen bg-background">
        <section className="w-full py-8 md:py-12 lg:py-16 border-b border-border/40 relative">
          <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="container relative mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <Breadcrumb className="mb-4 md:mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>About</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col items-start gap-4 md:gap-6 max-w-3xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                <Users className="h-3 w-3" />
                <span>Our Story</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                  jiocoder
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Empowering developers with comprehensive tutorials and powerful browser-based tools. Learn about our mission, vision, and commitment to making coding education accessible to everyone.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link to="/articles" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">Browse Articles</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/editor" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">Try Code Editor</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/contact" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">Contact Us</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/careers" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">Join Our Team</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  At jiocoder, we believe that learning to code should be accessible, engaging, and practical. 
                  Our mission is to provide developers of all skill levels with the tools, knowledge, and resources 
                  they need to succeed in the ever-evolving world of web development. Whether you're exploring our 
                  <Link to="/articles" className="text-primary hover:underline mx-1">comprehensive articles</Link> or 
                  practicing with our <Link to="/dsa" className="text-primary hover:underline mx-1">DSA problems</Link>, 
                  we're here to support your learning journey.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">What We Offer</h2>
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 mt-6">
                  <div className="space-y-3 p-6 rounded-lg border bg-card">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Code2 className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Interactive Learning</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Learn by doing with our browser-based IDE and hands-on coding challenges.
                    </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border bg-card">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Comprehensive Content</h3>
                    </div>
                    <p className="text-muted-foreground">
                      From HTML basics to advanced React patterns, we cover it all.
                    </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border bg-card">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Target className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Interview Prep</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Master DSA problems and ace your technical interviews.
                    </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border bg-card">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Real-time Practice</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Write and execute code instantly with our powerful online editor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  We envision a world where anyone, regardless of their background, can learn to code and 
                  build amazing things. By providing free, high-quality educational resources and tools, 
                  we're helping to democratize access to programming knowledge and create opportunities 
                  for the next generation of developers. Our <Link to="/quizzes" className="text-primary hover:underline mx-1">interactive quizzes</Link>, 
                  <Link to="/interview" className="text-primary hover:underline mx-1"> interview preparation materials</Link>, and 
                  <Link to="/javascript-questions" className="text-primary hover:underline mx-1"> JavaScript question bank</Link> 
                  are all designed to make learning engaging and effective.
                </p>
              </div>

              <div className="space-y-4 p-6 md:p-8 rounded-lg border bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold">Join Our Community</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Whether you're just starting your coding journey or looking to level up your skills, 
                  we're here to support you every step of the way. Join thousands of developers who are 
                  learning, practicing, and growing with jiocoder.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Link to="/articles" className="text-primary hover:underline font-medium focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">Explore Articles</Link>
                  <Link to="/quizzes" className="text-primary hover:underline font-medium focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">Take Quizzes</Link>
                  <Link to="/editor" className="text-primary hover:underline font-medium focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">Try Code Editor</Link>
                  <Link to="/dsa" className="text-primary hover:underline font-medium focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">Practice DSA</Link>
                  <Link to="/interview" className="text-primary hover:underline font-medium focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">Interview Prep</Link>
                  <Link to="/contact" className="text-primary hover:underline font-medium focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

