import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { topDSAProblems } from "@/lib/topDSAProblems"
import { generateSlug } from "@/lib/utils"
import { ChevronLeft, Play, CheckCircle2, XCircle, Loader2, Lightbulb, Code2, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import SEO from "@/components/SEO"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Editor from '@monaco-editor/react'
import { useAuth } from "@/contexts/AuthContext"
import { markDSAProblemSolved } from "@/lib/progressService"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { toast } from "sonner"

export default function TopDSASolvePage() {
  const { slug } = useParams()
  const { currentUser } = useAuth()
  const [problem, setProblem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [code, setCode] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [testResults, setTestResults] = useState([])
  const [showHint, setShowHint] = useState(false)
  const [language, setLanguage] = useState("python")
  const [codeOutput, setCodeOutput] = useState("")
  const [hasRunCode, setHasRunCode] = useState(false)

  useEffect(() => {
    loadProblem()
  }, [slug])

  const loadProblem = async () => {
    try {
      setLoading(true)
      // Find problem from topDSAProblems by matching slug
      const matchingProblem = topDSAProblems.find((p) => {
        const problemSlug = p.slug || generateSlug(p.title)
        return problemSlug === slug
      })
      
      if (matchingProblem) {
        const data = {
          id: `top-dsa-${topDSAProblems.indexOf(matchingProblem)}`,
          slug: matchingProblem.slug || generateSlug(matchingProblem.title),
          ...matchingProblem
        }
        setProblem(data)
        setCode(getCodeTemplate(data, language))
      } else {
        toast.error("Problem not found")
      }
    } catch (error) {
      console.error("Error loading problem:", error)
      toast.error("Failed to load problem")
    } finally {
      setLoading(false)
    }
  }

  const getCodeTemplate = (problem, lang) => {
    const templates = {
      python: `# Write your solution here
def solve(input_data):
    # Your code here
    return input_data

# Test your solution
# result = solve(test_input)
# print(result)`,
      javascript: `// Write your solution here
function solve(input) {
    // Your code here
    // Example: For Two Sum problem
    // const nums = input.nums;
    // const target = input.target;
    // ... your solution logic
    return input;
}

// The solve function will be called automatically with test case inputs
// Make sure your function returns the expected output format`,
      java: `// Write your solution here
public class Solution {
    public static Object solve(Object inputData) {
        // Your code here
        return inputData;
    }
    
    public static void main(String[] args) {
        // Test your solution
        // Object result = solve(testInput);
        // System.out.println(result);
    }
}`,
      cpp: `// Write your solution here
#include <iostream>
#include <vector>
using namespace std;

// Your solution function
// Return type depends on problem

int main() {
    // Test your solution here
    return 0;
}`
    }
    return templates[lang] || templates.python
  }

  useEffect(() => {
    if (problem) {
      setCode(getCodeTemplate(problem, language))
    }
  }, [language, problem])

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang)
  }

  const executeJavaScript = (code, testInput) => {
    // Capture console.log output
    let output = []
    const originalLog = console.log
    const originalError = console.error
    
    try {
      console.log = (...args) => {
        output.push(args.map(arg => {
          if (typeof arg === 'object') {
            return JSON.stringify(arg, null, 2)
          }
          return String(arg)
        }).join(' '))
      }
      
      console.error = (...args) => {
        output.push('ERROR: ' + args.map(arg => {
          if (typeof arg === 'object') {
            return JSON.stringify(arg, null, 2)
          }
          return String(arg)
        }).join(' '))
      }

      // Create a safe execution context
      const func = new Function('input', `
        ${code}
        // Try to find and call the main function
        if (typeof solve === 'function') {
          return solve(input);
        } else if (typeof solution === 'function') {
          return solution(input);
        }
        // If no function found, return undefined
        return undefined;
      `)
      
      const result = func(testInput)
      
      // Restore console
      console.log = originalLog
      console.error = originalError
      
      // Format the result
      let formattedResult = ''
      if (result !== undefined && result !== null) {
        if (typeof result === 'object') {
          formattedResult = JSON.stringify(result, null, 2)
        } else {
          formattedResult = String(result)
        }
      }
      
      // Combine console output and return value
      const consoleOutput = output.length > 0 ? output.join('\n') : ''
      if (consoleOutput && formattedResult) {
        return consoleOutput + '\n\nReturn value:\n' + formattedResult
      } else if (consoleOutput) {
        return consoleOutput
      } else if (formattedResult) {
        return formattedResult
      }
      
      return 'No output (function executed but returned nothing)'
    } catch (error) {
      // Restore console
      console.log = originalLog
      console.error = originalError
      throw error
    }
  }

  const runCode = async () => {
    if (!currentUser) {
      toast.error("Please login to solve problems")
      return
    }
    if (!problem || !code.trim()) {
      toast.error("Please write some code first")
      return
    }

    setIsRunning(true)
    setTestResults([])
    setCodeOutput("")
    setHasRunCode(true)

    try {
      const results = []
      let allOutputs = []
      
      for (let i = 0; i < problem.testCases.length; i++) {
        const testCase = problem.testCases[i]
        
        try {
          let actualOutput = null
          let outputText = ""
          
          if (language === "javascript") {
            // Execute JavaScript code
            try {
              const outputString = executeJavaScript(code, testCase.input)
              outputText = `Test Case ${i + 1} Output:\n${outputString}\n\n`
              allOutputs.push(outputText)
              
              // Extract the return value from output (it's after "Return value:")
              let actualResult = null
              if (outputString.includes('Return value:')) {
                const returnValuePart = outputString.split('Return value:')[1].trim()
                try {
                  actualResult = JSON.parse(returnValuePart)
                } catch {
                  // Try to parse as number
                  const numResult = Number(returnValuePart)
                  actualResult = isNaN(numResult) ? returnValuePart : numResult
                }
              } else {
                // If no "Return value:" found, try to parse the whole output
                try {
                  actualResult = JSON.parse(outputString.trim())
                } catch {
                  const numResult = Number(outputString.trim())
                  actualResult = isNaN(numResult) ? outputString.trim() : numResult
                }
              }
              
              // Compare with expected output
              const expected = testCase.expectedOutput
              let passed = false
              
              // Deep comparison
              try {
                const expectedStr = JSON.stringify(expected)
                const actualStr = JSON.stringify(actualResult)
                passed = expectedStr === actualStr
              } catch {
                // Fallback to string comparison
                passed = String(expected) === String(actualResult)
              }
              
              results.push({
                testCase: i + 1,
                input: testCase.input,
                expectedOutput: expected,
                actualOutput: actualResult,
                output: outputString,
                passed: passed,
                error: null
              })
            } catch (execError) {
              outputText = `Test Case ${i + 1} Error:\n${execError.message}\n\n`
              allOutputs.push(outputText)
              results.push({
                testCase: i + 1,
                input: testCase.input,
                expectedOutput: testCase.expectedOutput,
                actualOutput: null,
                output: null,
                passed: false,
                error: execError.message
              })
            }
          } else {
            // For other languages, show placeholder
            outputText = `Test Case ${i + 1}:\nCode execution for ${language} requires a backend service.\nFor now, you can test your logic manually.\n\n`
            allOutputs.push(outputText)
            results.push({
              testCase: i + 1,
              input: testCase.input,
              expectedOutput: testCase.expectedOutput,
              actualOutput: null,
              output: null,
              passed: false,
              error: `Code execution for ${language} requires a backend service. Currently only JavaScript is supported for client-side execution.`
            })
          }
        } catch (error) {
          allOutputs.push(`Test Case ${i + 1} Error: ${error.message}\n`)
          results.push({
            testCase: i + 1,
            input: testCase.input,
            expectedOutput: testCase.expectedOutput,
            actualOutput: null,
            output: null,
            passed: false,
            error: error.message
          })
        }
      }
      
      setCodeOutput(allOutputs.join('\n'))
      setTestResults(results)
      
      const passedCount = results.filter(r => r.passed).length
      const totalCount = results.length
      
      if (passedCount === totalCount && totalCount > 0) {
        toast.success(`All test cases passed! (${passedCount}/${totalCount})`)
        // Mark problem as solved
        if (currentUser && problem) {
          try {
            const problemId = problem.id || problem.slug || slug
            await markDSAProblemSolved(currentUser.uid, problemId)
          } catch (error) {
            console.error('Error marking problem as solved:', error)
            // Don't show error to user - progress tracking is not critical
          }
        }
      } else if (passedCount > 0) {
        toast.warning(`Some test cases passed. (${passedCount}/${totalCount} passed)`)
      } else {
        toast.error(`Test cases failed. (${passedCount}/${totalCount} passed)`)
      }
    } catch (error) {
      console.error("Error running code:", error)
      setCodeOutput(`Error: ${error.message}`)
      toast.error("Failed to run code: " + error.message)
    } finally {
      setIsRunning(false)
    }
  }

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!problem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Problem not found</h1>
          <Button asChild>
            <Link to="/top-dsa">Back to Top DSA Questions</Link>
          </Button>
        </div>
      </div>
    )
  }

  const passedTests = testResults.filter(r => r.passed).length
  const totalTests = problem.testCases.length
  const progress = totalTests > 0 ? (passedTests / totalTests) * 100 : 0

  // Generate keywords from problem data
  const problemKeywords = [
    problem.difficulty,
    ...(problem.tags || []),
    problem.playlist,
    'top DSA problem',
    'popular coding problem',
    'interview question',
    'algorithm',
    'data structure',
    'coding challenge'
  ].filter(Boolean).join(', ')

  return (
    <>
      <SEO
        title={problem.title}
        description={problem.description || `Solve ${problem.title} - ${problem.difficulty} difficulty top DSA problem`}
        keywords={problemKeywords}
        ogTitle={problem.title}
        ogDescription={problem.description || `Solve ${problem.title} - ${problem.difficulty} difficulty top DSA problem`}
        ogImage="/websitelogo.png"
        ogUrl={typeof window !== 'undefined' ? window.location.href : ''}
        type="article"
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
                  <Link to="/top-dsa">Top DSA Questions</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-[200px] truncate md:max-w-none">
                  {problem.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link to="/top-dsa">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            <Badge variant={getDifficultyBadgeVariant(problem.difficulty)}>
              {problem.difficulty || 'Unknown'}
            </Badge>
            {problem.playlist && (
              <Badge variant="outline">
                {problem.playlist}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problem Description */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{problem.title}</CardTitle>
                <CardDescription>
                  {problem.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Test Cases Info */}
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Test Cases</span>
                  <span className="text-sm text-muted-foreground">
                    {totalTests} test case{totalTests !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Hint Section */}
                {problem.hint && (
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      onClick={() => setShowHint(!showHint)}
                      className="w-full"
                    >
                      <Lightbulb className="h-4 w-4 mr-2" />
                      {showHint ? 'Hide Hint' : 'Show Hint'}
                    </Button>
                    {showHint && (
                      <Card className="bg-yellow-500/10 border-yellow-500/30">
                        <CardContent className="pt-4">
                          <p className="text-sm">{problem.hint}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                {/* Test Cases - Show only first 2 */}
                {problem.testCases && problem.testCases.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">Test Cases:</h3>
                      {problem.testCases.length > 2 && (
                        <span className="text-xs text-muted-foreground">
                          Showing 2 of {problem.testCases.length} test cases
                        </span>
                      )}
                    </div>
                    {problem.testCases.slice(0, 2).map((testCase, index) => {
                      const result = testResults.find(r => r.testCase === index + 1)
                      return (
                        <Card 
                          key={index}
                          className={result ? (result.passed ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5') : ''}
                        >
                          <CardContent className="pt-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-medium">Test Case {index + 1}</span>
                                {result && (
                                  result.passed ? (
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  ) : (
                                    <XCircle className="h-4 w-4 text-red-500" />
                                  )
                                )}
                              </div>
                              <div className="text-xs space-y-1">
                                <div>
                                  <span className="font-medium">Input:</span>
                                  <pre className="mt-1 p-2 bg-muted rounded text-xs overflow-x-auto">
                                    {JSON.stringify(testCase.input, null, 2)}
                                  </pre>
                                </div>
                                <div>
                                  <span className="font-medium">Expected Output:</span>
                                  <pre className="mt-1 p-2 bg-muted rounded text-xs overflow-x-auto">
                                    {JSON.stringify(testCase.expectedOutput, null, 2)}
                                  </pre>
                                </div>
                                {result && !result.passed && (
                                  <div>
                                    <span className="font-medium text-red-500">Actual Output:</span>
                                    <pre className="mt-1 p-2 bg-red-500/10 rounded text-xs overflow-x-auto">
                                      {result.error || JSON.stringify(result.actualOutput, null, 2)}
                                    </pre>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                    {problem.testCases.length > 2 && (
                      <div className="text-xs text-muted-foreground text-center py-2 border-t border-border/50">
                        {testResults.length > 0 ? (
                          <>
                            {testResults.filter(r => r.passed).length} / {testResults.length} test cases passed
                            {testResults.length < problem.testCases.length && (
                              <span className="block mt-1">(All {problem.testCases.length} test cases are validated)</span>
                            )}
                          </>
                        ) : (
                          `+${problem.testCases.length - 2} more test cases (will be validated when you run code)`
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Progress */}
                {testResults.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Test Results</span>
                      <span className="font-medium">
                        {passedTests} / {totalTests} passed
                        {totalTests > 2 && (
                          <span className="text-xs text-muted-foreground ml-1">
                            (all {totalTests} validated)
                          </span>
                        )}
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    {totalTests > 2 && (
                      <p className="text-xs text-muted-foreground">
                        Only first 2 test cases are shown above. All {totalTests} test cases are validated when you run your code.
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Code Editor */}
          <div className="space-y-4 relative">
            {!currentUser && (
              <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-sm flex items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30">
                <Card className="p-6 max-w-md mx-4">
                  <CardContent className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Lock className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Login Required</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Please login to write code and solve this problem. You can view the problem description without logging in.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild>
                        <Link to="/login">Login</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/signup">Sign Up</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    Code Editor
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <select
                      value={language}
                      onChange={(e) => handleLanguageChange(e.target.value)}
                      disabled={!currentUser}
                      className="px-3 py-1.5 text-sm border rounded-md bg-background disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="python">Python</option>
                      <option value="javascript">JavaScript</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                    </select>
                    <Button
                      onClick={runCode}
                      disabled={isRunning || !code.trim() || !currentUser}
                      className="gap-2"
                    >
                      {isRunning ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Running...
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4" />
                          Run Tests
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="code" className="w-full">
                  <TabsList className="w-full justify-start rounded-none border-b">
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="output">Output</TabsTrigger>
                  </TabsList>
                  <TabsContent value="code" className="m-0 p-0">
                    <div className="h-[600px] border-t relative">
                      <Editor
                        height="100%"
                        language={language}
                        value={code}
                        onChange={(value) => {
                          if (currentUser) {
                            setCode(value || "")
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
                          readOnly: !currentUser,
                        }}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="output" className="m-0 p-0">
                    <div className="h-[600px] border-t bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm overflow-auto p-4">
                      {!hasRunCode ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                          <Play className="h-12 w-12 mb-4 opacity-50" />
                          <p>Click "Run Tests" to see code output here</p>
                          <p className="text-xs mt-2 text-gray-600">
                            {language === "javascript" 
                              ? "JavaScript code will execute in the browser"
                              : `Code execution for ${language} requires a backend service`}
                          </p>
                        </div>
                      ) : codeOutput ? (
                        <pre className="whitespace-pre-wrap break-words">
                          {codeOutput}
                        </pre>
                      ) : (
                        <div className="text-gray-500">No output generated</div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

