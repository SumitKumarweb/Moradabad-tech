import { Link } from "react-router-dom"
import SEO from "@/components/SEO"
import StructuredData, { generateBreadcrumbSchema } from "@/components/StructuredData"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, Zap, Heart, ArrowRight, Code2, TrendingUp } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function CareerPage() {
  const benefits = [
    {
      icon: Zap,
      title: "Flexible Work",
      description: "Work from anywhere with flexible hours"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health benefits and wellness programs"
    },
    {
      icon: Code2,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and skill development"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career paths and advancement opportunities"
    }
  ]

  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Content Writer",
      department: "Content",
      location: "Remote",
      type: "Part-time"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    }
  ]

  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
    { name: "Careers", url: typeof window !== 'undefined' ? window.location.href : '' }
  ]

  return (
    <>
      <SEO
        title="Careers"
        description="Join the Moradabads team and help shape the future of coding education. Explore open positions and discover why developers love working with us."
        keywords="careers, jobs, hiring, employment, join our team"
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
                  <BreadcrumbPage>Careers</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col items-start gap-4 md:gap-6 max-w-3xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                <Briefcase className="h-3 w-3" />
                <span>Join Us</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                Join Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                  Team
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Help us build the future of coding education and empower developers worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-12 md:space-y-16">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Why Work With Us</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  At Moradabads, we're building something meaningful. We're passionate about making 
                  coding education accessible to everyone, and we're looking for talented individuals 
                  who share our vision.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Benefits & Perks</h2>
                <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="space-y-3 p-6 rounded-lg border bg-card">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <benefit.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-bold">Open Positions</h2>
                </div>
                <div className="space-y-4">
                  {openPositions.map((position, index) => (
                    <div key={index} className="p-6 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">{position.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {position.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {position.location}
                            </span>
                            <span>{position.type}</span>
                          </div>
                        </div>
                        <Button asChild variant="outline">
                          <Link to="/contact">
                            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground text-center pt-4">
                  Don't see a position that fits? <Link to="/contact" className="text-primary hover:underline">Get in touch</Link> - we're always looking for great talent!
                </p>
              </div>

              <div className="space-y-4 p-6 md:p-8 rounded-lg border bg-muted/30">
                <h2 className="text-2xl md:text-3xl font-bold">Our Culture</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  We believe in fostering a collaborative, inclusive environment where everyone can 
                  thrive. We value diversity, creativity, and a growth mindset. If you're passionate 
                  about education, technology, and making a positive impact, we'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

