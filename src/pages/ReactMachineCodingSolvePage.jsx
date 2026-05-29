import { useState, useEffect, useMemo, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronLeft, ChevronRight, Code, Clock, CheckCircle2, ExternalLink, Save, Check } from 'lucide-react'
import Editor from '@monaco-editor/react'
import { toast } from "sonner"

import { getReactMachineCodingQuestionById, getAllReactMachineCodingQuestions } from "@/lib/reactMachineCoding"
import { saveOrUpdateSubmission, getSubmission } from "@/lib/machineCodingService"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Timer } from "@/components/Timer"
import SEO from "@/components/SEO"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function ReactMachineCodingSolvePage() {
  const { id: routeParam } = useParams()
  const { currentUser } = useAuth()
  const question = getReactMachineCodingQuestionById(routeParam)
  const questionId = question?.id
  const allQuestions = getAllReactMachineCodingQuestions()
  const [elapsedTime, setElapsedTime] = useState(0)
  const [code, setCode] = useState("")
  const [htmlPreview, setHtmlPreview] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [savedCode, setSavedCode] = useState(null)
  const iframeRef = useRef(null)
  
  const currentIndex = questionId
    ? allQuestions.findIndex((q) => q.id === questionId)
    : -1
  const prevQuestion = currentIndex > 0 ? allQuestions[currentIndex - 1] : null
  const nextQuestion = currentIndex < allQuestions.length - 1 ? allQuestions[currentIndex + 1] : null

  // React starter template
  const reactTemplate = useMemo(() => {
    const componentName = question?.title.replace(/\s+/g, '') || 'Component'
    return `import React, { useState } from 'react';

function ${componentName}() {
  // Your code here
  const [state, setState] = useState(null);

  return (
    <div className="container">
      <h1>${question?.title || 'Component'}</h1>
      {/* Implement your solution here */}
    </div>
  );
}

export default ${componentName};`
  }, [question?.title])

  // Load saved code on mount (from localStorage and Firebase)
  useEffect(() => {
    if (!questionId) return

    const loadCode = async () => {
      // First try Firebase if user is logged in
      if (currentUser) {
        try {
          const submission = await getSubmission(currentUser.uid, questionId, 'react')
          if (submission && submission.code) {
            setCode(submission.code)
            setSavedCode(submission.code)
            setIsSaved(true)
            return
          }
        } catch (error) {
          console.error('Error loading submission from Firebase:', error)
        }
      }
      
      // Fallback to localStorage
      const key = `react-mc-code-${questionId}`
      const localSavedCode = localStorage.getItem(key)
      if (localSavedCode) {
        setCode(localSavedCode)
      } else {
        setCode(reactTemplate)
      }
    }
    
    loadCode()
  }, [questionId, reactTemplate, currentUser])

  // Generate React preview HTML
  const generateReactPreview = (reactCode) => {
    // Clean up the code and ensure it's renderable
    let cleanedCode = reactCode
    // Remove import statements (we'll use global React)
    cleanedCode = cleanedCode.replace(/import\s+.*?from\s+['"]react['"];?\s*/g, '')
    cleanedCode = cleanedCode.replace(/import\s+.*?from\s+['"]react-dom['"];?\s*/g, '')
    cleanedCode = cleanedCode.replace(/import\s+.*?;?\s*/g, '')
    
    // Remove export default and make it assignable
    cleanedCode = cleanedCode.replace(/export\s+default\s+function\s+(\w+)/g, 'function $1')
    cleanedCode = cleanedCode.replace(/export\s+default\s+/g, '')
    
    // Try to find the component name
    const componentMatch = cleanedCode.match(/(?:function|const)\s+(\w+)\s*[=\(]/)
    const componentName = componentMatch ? componentMatch[1] : 'Component'
    
    // Add component assignment
    if (!cleanedCode.includes(`const AppComponent`)) {
      cleanedCode = cleanedCode + `\nconst AppComponent = ${componentName};`
    }
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Preview</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
        #root {
            width: 100%;
            min-height: 100vh;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        const { useState, useEffect, useRef, useCallback, useMemo } = React;
        ${cleanedCode}
        const root = ReactDOM.createRoot(document.getElementById('root'));
        if (typeof AppComponent !== 'undefined') {
            root.render(React.createElement(AppComponent));
        } else {
            root.render(React.createElement('div', null, 'Component not found. Make sure your component is exported correctly.'));
        }
    </script>
</body>
</html>`
  }

  // Update preview when code changes
  useEffect(() => {
    if (code) {
      const timer = setTimeout(() => {
        try {
          const previewHtml = generateReactPreview(code)
          setHtmlPreview(previewHtml)
        } catch (error) {
          console.error('Error generating preview:', error)
        }
      }, 500) // Debounce for 500ms
      return () => clearTimeout(timer)
    }
  }, [code])

  // Save code to localStorage
  useEffect(() => {
    if (!questionId) return
    if (code && code !== reactTemplate) {
      const key = `react-mc-code-${questionId}`
      localStorage.setItem(key, code)
    }
  }, [code, questionId, reactTemplate])

  const openPreviewInNewTab = () => {
    if (htmlPreview) {
      const newWindow = window.open()
      if (newWindow) {
        newWindow.document.write(htmlPreview)
        newWindow.document.close()
      }
    }
  }

  const handleSubmit = async () => {
    if (!currentUser) {
      toast.error("Please login to save your code")
      return
    }

    if (!code || code.trim() === "" || code === reactTemplate) {
      toast.error("Please write some code before submitting")
      return
    }

    setIsSubmitting(true)
    try {
      await saveOrUpdateSubmission(
        currentUser.uid,
        questionId,
        'react',
        code,
        {
          title: question?.title,
          difficulty: question?.difficulty,
          problemNumber: question?.number,
          elapsedTime: elapsedTime
        }
      )
      setIsSaved(true)
      setSavedCode(code)
      toast.success("Code saved successfully!")
    } catch (error) {
      console.error('Error saving submission:', error)
      toast.error("Failed to save code. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const loadSavedCode = async () => {
    if (!currentUser) {
      toast.error("Please login to view saved code")
      return
    }

    try {
      const submission = await getSubmission(currentUser.uid, questionId, 'react')
      if (submission && submission.code) {
        setCode(submission.code)
        setSavedCode(submission.code)
        setIsSaved(true)
        toast.success("Saved code loaded!")
      } else {
        toast.info("No saved code found for this problem")
      }
    } catch (error) {
      console.error('Error loading submission:', error)
      toast.error("Failed to load saved code")
    }
  }

  // Save elapsed time to localStorage
  useEffect(() => {
    if (!questionId) return
    if (elapsedTime > 0 && elapsedTime % 10 === 0) { // Save every 10 seconds
      const key = `react-mc-time-${questionId}`
      localStorage.setItem(key, elapsedTime.toString())
    }
  }, [elapsedTime, questionId])

  // Load saved time on mount
  useEffect(() => {
    if (!questionId) return
    const key = `react-mc-time-${questionId}`
    const savedTime = localStorage.getItem(key)
    if (savedTime) {
      const saved = parseInt(savedTime, 10)
      setElapsedTime(saved)
    }
  }, [questionId])

  if (!question) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Problem not found</h1>
          <Button asChild>
            <Link to="/react-machine-coding">Back to Problems</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`${question.title} - React Machine Coding`}
        description={question.description || `React machine coding problem: ${question.title}`}
        keywords={`React machine coding, ${question.title}, React components, React hooks, ${question.tags?.join(', ')}`}
        ogTitle={`${question.title} - React Machine Coding`}
        ogDescription={question.description}
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
                  <Link to="/react-machine-coding">React Machine Coding</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{question.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-4 md:mb-6">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge className="font-mono text-xs">Problem {question.number}</Badge>
                <Badge variant="outline" className="font-mono text-xs capitalize">
                  {question.difficulty || 'Basic'}
                </Badge>
                {question.duration && (
                  <Badge variant="outline" className="font-mono text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {question.duration}
                  </Badge>
                )}
              </div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{question.title}</h1>
              {question.createdOn && (
                <p className="text-sm text-muted-foreground">Created on: {question.createdOn}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Timer Component */}
          <div className="mb-6">
            <Timer onTimeUpdate={setElapsedTime} autoStart={true} initialTime={elapsedTime} />
          </div>

          <Card className="p-4 md:p-6 lg:p-8 border-2 border-border/50 shadow-xl mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Problem Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  {question.description}
                </p>
              </div>

              {question.requirements && question.requirements.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {question.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm md:text-base text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {question.tags && question.tags.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {question.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

            </CardContent>
          </Card>

          {/* Code Editor */}
          <Card className="border-2 border-border/50 shadow-xl mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Code Editor
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="code" className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b">
                  <TabsTrigger value="code">Code</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="code" className="m-0 p-0">
                  <div className="h-[600px] border-t relative">
                    <div className="absolute top-2 right-2 z-10 flex gap-2">
                      {currentUser && savedCode && (
                        <Button
                          onClick={loadSavedCode}
                          variant="outline"
                          size="sm"
                          className="gap-2"
                        >
                          <Check className="h-4 w-4" />
                          Load Saved
                        </Button>
                      )}
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting || !currentUser}
                        size="sm"
                        className="gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4" />
                            {isSaved ? 'Update' : 'Save'} Code
                          </>
                        )}
                      </Button>
                    </div>
                    {!currentUser && (
                      <div className="absolute top-2 left-2 z-10">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="text-xs"
                        >
                          <Link to="/login">
                            Login to Save Code
                          </Link>
                        </Button>
                      </div>
                    )}
                    <Editor
                      height="100%"
                      language="javascript"
                      value={code}
                      onChange={(value) => {
                        setCode(value || "")
                        if (savedCode === value) {
                          setIsSaved(true)
                        } else {
                          setIsSaved(false)
                        }
                      }}
                      theme="vs-dark"
                      options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: 'on',
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        tabSize: 2,
                        wordWrap: 'on',
                        formatOnPaste: true,
                        formatOnType: true,
                      }}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="preview" className="m-0 p-0">
                  {htmlPreview ? (
                    <div className="h-[600px] bg-white relative border-t">
                      <div className="absolute top-2 right-2 z-10">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 px-2 text-xs bg-white/90 hover:bg-white border-gray-300 shadow-sm"
                          onClick={openPreviewInNewTab}
                          title="Open preview in new tab"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Open in New Tab
                        </Button>
                      </div>
                      <iframe
                        ref={iframeRef}
                        srcDoc={htmlPreview}
                        className="w-full h-full border-0"
                        title="React Preview"
                        sandbox="allow-scripts allow-same-origin allow-forms"
                      />
                    </div>
                  ) : (
                    <div className="h-[600px] p-4 flex items-center justify-center text-muted-foreground border-t">
                      <div className="text-center">
                        <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No preview available</p>
                        <p className="text-xs mt-2">Start coding to see the preview</p>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button asChild variant="outline">
              <Link to="/react-machine-coding">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to All Problems
              </Link>
            </Button>

            <div className="flex gap-2">
              {prevQuestion && (
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link to={`/react-machine-coding/${prevQuestion.id}`}>
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Link>
                </Button>
              )}
              {nextQuestion && (
                <Button asChild size="lg" className="gap-2">
                  <Link to={`/react-machine-coding/${nextQuestion.id}`}>
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

