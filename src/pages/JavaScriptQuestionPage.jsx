import { useState } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { CheckCircle2, XCircle, ChevronLeft, ChevronRight, Code, RotateCcw, Lock } from 'lucide-react'

import { getQuestionById, getAllQuestions, getTotalQuestions } from "@/lib/javascriptQuestions"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/AuthContext"
import { markJSQuestionSolved } from "@/lib/progressService"
import SEO from "@/components/SEO"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function JavaScriptQuestionPage() {
  const { questionId } = useParams()
  const { currentUser } = useAuth()
  const question = getQuestionById(questionId)
  const allQuestions = getAllQuestions()
  const totalQuestions = getTotalQuestions()
  
  const currentIndex = allQuestions.findIndex(q => q.id === questionId)
  const prevQuestion = currentIndex > 0 ? allQuestions[currentIndex - 1] : null
  const nextQuestion = currentIndex < allQuestions.length - 1 ? allQuestions[currentIndex + 1] : null

  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)

  if (!question) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Question not found</h1>
          <Button asChild>
            <Link to="/javascript-questions">Back to Questions</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleAnswerSelect = (index) => {
    if (!currentUser) {
      return
    }
    if (!showAnswer) {
      setSelectedAnswer(index)
    }
  }

  const handleShowAnswer = async () => {
    if (!currentUser) {
      return
    }
    if (selectedAnswer !== null) {
      setShowAnswer(true)
      // Mark question as solved if answered correctly
      if (selectedAnswer === question.correctAnswer) {
        try {
          await markJSQuestionSolved(currentUser.uid, question.id)
        } catch (error) {
          console.error('Error marking question as solved:', error)
          // Don't show error to user - progress tracking is not critical
        }
      }
    }
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setShowAnswer(false)
  }

  const isCorrect = selectedAnswer === question.correctAnswer

  return (
    <>
      <SEO
        title={`JavaScript Question ${question.number}`}
        description={question.question || `JavaScript output-based question ${question.number} - Test your understanding of JavaScript concepts`}
        keywords={`JavaScript question, JavaScript output question, JavaScript interview question, JavaScript quiz, JavaScript practice, ${question.question?.substring(0, 50)}`}
        ogTitle={`JavaScript Question ${question.number}`}
        ogDescription={question.question || `JavaScript output-based question ${question.number}`}
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
                  <Link to="/javascript-questions">JavaScript Questions</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Question {question.number}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-4 md:mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="font-mono text-xs">Question {question.number} of {totalQuestions}</Badge>
                <Badge variant="outline" className="font-mono text-xs">
                  <Code className="h-3 w-3 mr-1" />
                  JavaScript
                </Badge>
              </div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{question.question}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <Card className="p-4 md:p-6 lg:p-8 border-2 border-border/50 shadow-xl mb-6 relative">
            {!currentUser && (
              <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
                <Card className="p-6 max-w-md mx-4">
                  <CardContent className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Lock className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Login Required</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Please login to select answers and solve this question. You can view the question without logging in.
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
            {question.code && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-muted-foreground">Code:</span>
                </div>
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm border border-[#333]">
                  <code>{question.code}</code>
                </pre>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4 text-muted-foreground">Select the correct option:</h2>
              <div className="space-y-2.5">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index
                  const isCorrectOption = index === question.correctAnswer
                  const showCorrect = showAnswer && isCorrectOption
                  const showIncorrect = showAnswer && isSelected && !isCorrectOption
                  const optionLetter = String.fromCharCode(65 + index)

                  return (
                    <label
                      key={index}
                      onClick={() => !showAnswer && currentUser && handleAnswerSelect(index)}
                      className={`flex items-start gap-3 p-3.5 md:p-4 rounded-lg border-2 transition-all duration-200 ${
                        showCorrect
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                          : showIncorrect
                          ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                          : isSelected
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/30 hover:bg-muted/30'
                      } ${showAnswer || !currentUser ? 'cursor-default' : 'cursor-pointer'} ${!currentUser ? 'opacity-60' : ''}`}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="flex-shrink-0 mt-0.5">
                          <div
                            className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                              showCorrect
                                ? 'border-green-600 bg-green-600'
                                : showIncorrect
                                ? 'border-red-600 bg-red-600'
                                : isSelected
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground/30 bg-background'
                            }`}
                          >
                            {showCorrect && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
                            {showIncorrect && <XCircle className="h-3.5 w-3.5 text-white" />}
                            {!showAnswer && isSelected && (
                              <div className="h-2.5 w-2.5 rounded-full bg-white" />
                            )}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2.5">
                            <span className={`font-semibold text-base shrink-0 ${
                              showCorrect 
                                ? 'text-green-700 dark:text-green-400' 
                                : showIncorrect 
                                ? 'text-red-700 dark:text-red-400' 
                                : 'text-foreground'
                            }`}>
                              {optionLetter})
                            </span>
                            <span className={`flex-1 text-sm md:text-base break-words ${
                              showCorrect 
                                ? 'text-green-900 dark:text-green-100' 
                                : showIncorrect 
                                ? 'text-red-900 dark:text-red-100' 
                                : 'text-foreground'
                            }`}>
                              <span dangerouslySetInnerHTML={{ __html: option }} />
                            </span>
                          </div>
                        </div>
                      </div>
                      <input
                        type="radio"
                        name={`answer-${question.id}`}
                        value={index}
                        checked={isSelected}
                        onChange={() => handleAnswerSelect(index)}
                        disabled={showAnswer || !currentUser}
                        className="sr-only"
                      />
                    </label>
                  )
                })}
              </div>
            </div>

            {showAnswer && (
              <div className="mb-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-sm md:text-base leading-relaxed">
                  <strong className="text-blue-600 dark:text-blue-400">Explanation:</strong>{" "}
                  {question.explanation}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  {isCorrect ? (
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Correct!
                    </Badge>
                  ) : (
                    <Badge className="bg-red-500 text-white">
                      <XCircle className="h-3 w-3 mr-1" />
                      Incorrect
                    </Badge>
                  )}
                  <Badge variant="outline">
                    Correct Answer: {String.fromCharCode(65 + question.correctAnswer)}
                  </Badge>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex gap-2">
                {selectedAnswer !== null && !showAnswer && currentUser && (
                  <Button onClick={handleShowAnswer} size="lg" className="gap-2">
                    Show Answer
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
                {showAnswer && currentUser && (
                  <Button onClick={handleReset} variant="outline" size="lg" className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </Button>
                )}
              </div>

              <div className="flex gap-2">
                {prevQuestion && (
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <Link to={`/javascript-questions/${prevQuestion.id}`}>
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Link>
                  </Button>
                )}
                {nextQuestion && (
                  <Button asChild size="lg" className="gap-2">
                    <Link to={`/javascript-questions/${nextQuestion.id}`}>
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/javascript-questions">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to All Questions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

