import { Link, useParams } from "react-router-dom"
import { ChevronRight, BookOpen, Target, ChevronLeft } from 'lucide-react'

import { getSectionById, getTopicsBySection, getTotalTopicsInSection } from "@/lib/interviewTopics"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SEO from "@/components/SEO"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function InterviewSectionPage() {
  const { sectionId } = useParams()
  const section = getSectionById(sectionId)
  const topics = getTopicsBySection(sectionId)
  const totalTopics = getTotalTopicsInSection(sectionId)

  if (!section) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Section not found</h1>
          <Button asChild>
            <Link to="/interview">Back to Interview</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={section.title}
        description={section.description || `Explore ${totalTopics} interview topics in ${section.title}. Master key concepts for technical interviews.`}
        keywords={`${section.title}, interview preparation, interview questions, technical interview, coding interview, ${section.title} interview questions, interview guide`}
        ogTitle={section.title}
        ogDescription={section.description || `Master ${section.title} concepts for technical interviews.`}
        ogImage="/websitelogo.png"
      />
      <div className="min-h-screen bg-background">
      <div className="relative border-b border-border/40">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 max-w-7xl">
          <Breadcrumb className="mb-4 md:mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/interview">Interview</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{section.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-4 md:mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="font-mono text-xs">{section.icon}</Badge>
                <Badge variant="outline" className="font-mono text-xs">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {totalTopics} Topics
                </Badge>
              </div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{section.title}</h1>
              <p className="text-sm md:text-base text-muted-foreground">{section.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">Topics</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Click on any topic to learn more
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
            {topics.map((topic) => (
              <Card
                key={topic.id}
                className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-4 md:p-6">
                  <div className="flex items-start justify-between mb-3 md:mb-4 gap-2">
                    <Badge className="font-mono text-xs">
                      Topic {topic.number}
                    </Badge>
                    <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 group-hover:scale-110 transition-transform shrink-0">
                      <Target className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                  </div>

                  <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {topic.title}
                  </h3>

                  {topic.introduction && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {topic.introduction}
                    </p>
                  )}

                  <Button asChild className="w-full group/btn text-sm">
                    <Link to={`/interview/${sectionId}/${topic.id}`}>
                      Learn More
                      <ChevronRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/interview">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Interview Sections
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

