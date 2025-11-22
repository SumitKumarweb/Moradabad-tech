import { useState, useEffect, useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronLeft, ChevronRight, Code, Clock, CheckCircle2, Play, Save, Check } from 'lucide-react'
import Editor from '@monaco-editor/react'
import { toast } from "sonner"

import { getJavaScriptMachineCodingQuestionById, getAllJavaScriptMachineCodingQuestions } from "@/lib/javascriptMachineCoding"
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

export default function JavaScriptMachineCodingSolvePage() {
  const { id } = useParams()
  const { currentUser } = useAuth()
  const question = getJavaScriptMachineCodingQuestionById(id)
  const allQuestions = getAllJavaScriptMachineCodingQuestions()
  const [elapsedTime, setElapsedTime] = useState(0)
  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [savedCode, setSavedCode] = useState(null)
  
  const currentIndex = allQuestions.findIndex(q => q.id === id)
  const prevQuestion = currentIndex > 0 ? allQuestions[currentIndex - 1] : null
  const nextQuestion = currentIndex < allQuestions.length - 1 ? allQuestions[currentIndex + 1] : null

  // JavaScript starter template
  const javascriptTemplate = useMemo(() => {
    return `// ${question?.title || 'Problem'}
// ${question?.description || 'Implement your solution here'}

function solution() {
  // Your code here
  return null;
}

// Test your solution
console.log(solution());`
  }, [question?.title, question?.description])

  // Load saved code on mount (from localStorage and Firebase)
  useEffect(() => {
    const loadCode = async () => {
      // First try Firebase if user is logged in
      if (currentUser) {
        try {
          const submission = await getSubmission(currentUser.uid, id, 'javascript')
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
      const key = `js-mc-code-${id}`
      const localSavedCode = localStorage.getItem(key)
      if (localSavedCode) {
        setCode(localSavedCode)
      } else {
        setCode(javascriptTemplate)
      }
    }
    
    loadCode()
  }, [id, javascriptTemplate, currentUser])

  // Run JavaScript code
  const runCode = () => {
    setIsRunning(true)
    setOutput("")
    
    setTimeout(() => {
      try {
        const logs = []
        const errors = []
        const originalLog = console.log
        const originalError = console.error
        const originalWarn = console.warn

        console.log = (...args) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(" "))
        }
        
        console.error = (...args) => {
          errors.push(args.map(arg => String(arg)).join(" "))
        }

        console.warn = (...args) => {
          logs.push(`⚠ Warning: ${args.map(arg => String(arg)).join(" ")}`)
        }

        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
        const isAsync = code.includes('async') || code.includes('await')
        
        if (isAsync) {
          const asyncFunc = new AsyncFunction(code)
          asyncFunc().then(() => {
            console.log = originalLog
            console.error = originalError
            console.warn = originalWarn
            
            if (errors.length > 0) {
              setOutput(`❌ Error:\n${errors.join("\n")}`)
            } else if (logs.length > 0) {
              setOutput(`✓ Success:\n${logs.join("\n")}`)
            } else {
              setOutput("✓ Code executed successfully (no output)")
            }
            setIsRunning(false)
          }).catch((error) => {
            console.log = originalLog
            console.error = originalError
            console.warn = originalWarn
            setOutput(`❌ Error: ${error.message}\n\nStack trace:\n${error.stack}`)
            setIsRunning(false)
          })
          return
        } else {
          // eslint-disable-next-line no-eval
          eval(code)
        }

        console.log = originalLog
        console.error = originalError
        console.warn = originalWarn
        
        if (errors.length > 0) {
          setOutput(`❌ Error:\n${errors.join("\n")}`)
        } else if (logs.length > 0) {
          setOutput(`✓ Success:\n${logs.join("\n")}`)
        } else {
          setOutput("✓ Code executed successfully (no output)")
        }
      } catch (error) {
        if (error instanceof Error) {
          setOutput(`❌ Error: ${error.message}\n\nStack trace:\n${error.stack}`)
        } else {
          setOutput(`❌ An unknown error occurred: ${String(error)}`)
        }
      }
      setIsRunning(false)
    }, 100)
  }

  // Save code to localStorage
  useEffect(() => {
    if (code && code !== javascriptTemplate) {
      const key = `js-mc-code-${id}`
      localStorage.setItem(key, code)
      if (savedCode === code) {
        setIsSaved(true)
      } else {
        setIsSaved(false)
      }
    }
  }, [code, id, javascriptTemplate, savedCode])

  const handleSubmit = async () => {
    if (!currentUser) {
      toast.error("Please login to save your code")
      return
    }

    if (!code || code.trim() === "" || code === javascriptTemplate) {
      toast.error("Please write some code before submitting")
      return
    }

    setIsSubmitting(true)
    try {
      await saveOrUpdateSubmission(
        currentUser.uid,
        id,
        'javascript',
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
      const submission = await getSubmission(currentUser.uid, id, 'javascript')
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
    if (elapsedTime > 0 && elapsedTime % 10 === 0) { // Save every 10 seconds
      const key = `js-mc-time-${id}`
      localStorage.setItem(key, elapsedTime.toString())
    }
  }, [elapsedTime, id])

  // Load saved time on mount
  useEffect(() => {
    const key = `js-mc-time-${id}`
    const savedTime = localStorage.getItem(key)
    if (savedTime) {
      const saved = parseInt(savedTime, 10)
      setElapsedTime(saved)
    }
  }, [id])

  if (!question) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Problem not found</h1>
          <Button asChild>
            <Link to="/javascript-machine-coding">Back to Problems</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`${question.title} - JavaScript Machine Coding`}
        description={question.description || `JavaScript machine coding problem: ${question.title}`}
        keywords={`JavaScript machine coding, ${question.title}, JavaScript functions, JavaScript algorithms, ${question.tags?.join(', ')}`}
        ogTitle={`${question.title} - JavaScript Machine Coding`}
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
                  <Link to="/javascript-machine-coding">JavaScript Machine Coding</Link>
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
                  <TabsTrigger value="output">Output</TabsTrigger>
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
                        variant="outline"
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
                      <Button
                        onClick={runCode}
                        disabled={isRunning}
                        size="sm"
                        className="gap-2"
                      >
                        <Play className="h-4 w-4" />
                        {isRunning ? 'Running...' : 'Run Code'}
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
                <TabsContent value="output" className="m-0 p-0">
                  <div className="h-[600px] p-4 font-mono text-sm bg-[#0c0c0c] text-green-400 overflow-auto border-t">
                    {!output && !isRunning && (
                      <div className="text-gray-600">
                        <p>$ Ready to execute code</p>
                        <p className="mt-2">Click &apos;Run Code&apos; to see output here...</p>
                      </div>
                    )}
                    {isRunning && (
                      <div className="text-yellow-400">
                        <p>$ Running code...</p>
                      </div>
                    )}
                    {output && (
                      <pre className="whitespace-pre-wrap break-words text-sm">
                        {output}
                      </pre>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button asChild variant="outline">
              <Link to="/javascript-machine-coding">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to All Problems
              </Link>
            </Button>

            <div className="flex gap-2">
              {prevQuestion && (
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link to={`/javascript-machine-coding/${prevQuestion.id}`}>
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Link>
                </Button>
              )}
              {nextQuestion && (
                <Button asChild size="lg" className="gap-2">
                  <Link to={`/javascript-machine-coding/${nextQuestion.id}`}>
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

