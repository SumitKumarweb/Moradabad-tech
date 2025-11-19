import { Link, useParams } from "react-router-dom"
import { ChevronLeft, ChevronRight, BookOpen, Code, Target, ExternalLink } from 'lucide-react'

import { getSectionById, getTopicById, getTopicsBySection } from "@/lib/interviewTopics"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function InterviewTopicPage() {
  const { sectionId, topicId } = useParams()
  const section = getSectionById(sectionId)
  const topic = getTopicById(sectionId, topicId)
  const allTopics = getTopicsBySection(sectionId)
  
  const currentIndex = allTopics.findIndex(t => t.id === topicId)
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null

  if (!section || !topic) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
          <Button asChild>
            <Link to="/interview">Back to Interview</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
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
                <BreadcrumbLink asChild>
                  <Link to={`/interview/${sectionId}`}>{section.title}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Topic {topic.number}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-4 md:mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="font-mono text-xs">Topic {topic.number}</Badge>
                <Badge variant="outline" className="font-mono text-xs">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {section.title}
                </Badge>
              </div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{topic.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 max-w-7xl">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Introduction */}
          {topic.introduction && (
            <Card className="p-4 md:p-6 lg:p-8 border-2 border-border/50">
              <h2 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Introduction
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                {topic.introduction}
              </p>
            </Card>
          )}

          {/* Learning Objectives */}
          {topic.learningObjectives && topic.learningObjectives.length > 0 && (
            <Card className="p-4 md:p-6 lg:p-8 border-2 border-border/50">
              <h2 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Learning Objectives
              </h2>
              <ul className="space-y-2">
                {topic.learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Key Concepts */}
          {topic.keyConcepts && topic.keyConcepts.length > 0 && (
            <Card className="p-4 md:p-6 lg:p-8 border-2 border-border/50">
              <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Key Concepts and Definitions
              </h2>
              <div className="space-y-4">
                {topic.keyConcepts.map((concept, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-4">
                    <h3 className="font-semibold text-base md:text-lg mb-1">{concept.term}</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-2">
                      {concept.definition}
                    </p>
                    {concept.example && (
                      <div className="mt-2">
                        <p className="text-xs text-muted-foreground mb-1">Example:</p>
                        <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-3 rounded-lg overflow-x-auto font-mono text-xs md:text-sm border border-[#333]">
                          <code>{concept.example}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Step-by-Step Explanation */}
          {topic.stepByStep && topic.stepByStep.length > 0 && (
            <Card className="p-4 md:p-6 lg:p-8 border-2 border-border/50">
              <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Step-by-Step Explanation
              </h2>
              <div className="space-y-4">
                {topic.stepByStep.map((step, index) => (
                  <div key={index} className="space-y-2">
                    {step.heading && (
                      <h3 className="font-semibold text-base">{step.heading}</h3>
                    )}
                    {step.description && (
                      <p className="text-sm md:text-base text-muted-foreground">{step.description}</p>
                    )}
                    {step.code && (
                      <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-3 rounded-lg overflow-x-auto font-mono text-xs md:text-sm border border-[#333]">
                        <code>{step.code}</code>
                      </pre>
                    )}
                    {step.points && step.points.length > 0 && (
                      <ul className="space-y-1 ml-4">
                        {step.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-sm md:text-base text-muted-foreground flex items-start gap-2">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Examples */}
          {topic.examples && topic.examples.length > 0 && (
            <Card className="p-4 md:p-6 lg:p-8 border-2 border-border/50">
              <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Examples
              </h2>
              <div className="space-y-4">
                {topic.examples.map((example, index) => (
                  <div key={index} className="space-y-2">
                    {example.title && (
                      <h3 className="font-semibold text-base">{example.title}</h3>
                    )}
                    {example.code && (
                      <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-3 rounded-lg overflow-x-auto font-mono text-xs md:text-sm border border-[#333]">
                        <code>{example.code}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Practice Exercises */}
          {topic.practiceExercises && topic.practiceExercises.length > 0 && (
            <Card className="p-4 md:p-6 lg:p-8 border-2 border-border/50">
              <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Practice Exercises
              </h2>
              <ul className="space-y-2">
                {topic.practiceExercises.map((exercise, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{exercise}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Summary */}
          {topic.summary && (
            <Card className="p-4 md:p-6 lg:p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <h2 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Summary
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                {topic.summary}
              </p>
            </Card>
          )}

          {/* Additional Resources */}
          {topic.additionalResources && topic.additionalResources.length > 0 && (
            <Card className="p-4 md:p-6 lg:p-8 border-2 border-border/50">
              <h2 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-primary" />
                Additional Resources
              </h2>
              <ul className="space-y-2">
                {topic.additionalResources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-primary hover:underline flex items-center gap-2"
                    >
                      {resource.title}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-border/50">
            <div className="flex gap-2">
              {prevTopic && (
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link to={`/interview/${sectionId}/${prevTopic.id}`}>
                    <ChevronLeft className="h-4 w-4" />
                    Previous Topic
                  </Link>
                </Button>
              )}
            </div>
            <Button asChild variant="outline">
              <Link to={`/interview/${sectionId}`}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to {section.title}
              </Link>
            </Button>
            <div className="flex gap-2">
              {nextTopic && (
                <Button asChild size="lg" className="gap-2">
                  <Link to={`/interview/${sectionId}/${nextTopic.id}`}>
                    Next Topic
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

