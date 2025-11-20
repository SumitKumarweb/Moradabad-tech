import SEO from "@/components/SEO"
import { Code2, Users, Target, Zap, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Moradabads - your premier destination for full-stack development education. Empowering developers with comprehensive tutorials and powerful tools."
        keywords="about, company, mission, vision, web development education, coding platform"
      />
      <div className="flex flex-col min-h-screen bg-background">
        <section className="w-full py-12 md:py-20 lg:py-24 border-b">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">Moradabads</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Empowering developers with comprehensive tutorials and powerful browser-based tools.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  At Moradabads, we believe that learning to code should be accessible, engaging, and practical. 
                  Our mission is to provide developers of all skill levels with the tools, knowledge, and resources 
                  they need to succeed in the ever-evolving world of web development.
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
                  for the next generation of developers.
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
                  learning, practicing, and growing with Moradabads.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

