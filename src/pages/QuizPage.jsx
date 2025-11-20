import { useState, useEffect } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { CheckCircle2, XCircle, ChevronLeft, Trophy, RotateCcw, ArrowRight } from 'lucide-react'

import { quizzes, articles } from "@/lib/articles"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import SEO from "@/components/SEO"
import StructuredData, { generateQuizSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/components/StructuredData"
import { useAuth } from "@/contexts/AuthContext"
import { markQuizSolved, isQuizSolved } from "@/lib/progressService"
import { toast } from "sonner"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function QuizPage() {
  const { quizId } = useParams()
  const { currentUser } = useAuth()
  const quiz = quizzes.find((q) => q.id === quizId)
  const article = quiz ? articles.find((a) => a.slug === quiz.articleSlug) : null

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isSolved, setIsSolved] = useState(false)

  useEffect(() => {
    checkSolvedStatus()
  }, [quizId, currentUser])

  const checkSolvedStatus = async () => {
    if (currentUser && quizId) {
      try {
        const solved = await isQuizSolved(currentUser.uid, quizId)
        setIsSolved(solved)
      } catch (error) {
        console.error('Error checking solved status:', error)
      }
    }
  }

  if (!quiz || !article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Quiz not found</h1>
          <Button asChild>
            <Link to="/articles">Back to Articles</Link>
          </Button>
        </div>
      </div>
    )
  }

  const currentQuestionData = quiz.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100

  // Generate keywords
  const quizKeywords = [
    article.category,
    article.difficulty,
    'quiz',
    'programming quiz',
    'web development quiz',
    'coding test',
    'interactive quiz'
  ].filter(Boolean).join(', ')

  const handleOptionSelect = (optionIndex) => {
    if (!isAnswered) {
      setSelectedOption(optionIndex)
    }
  }

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return
    
    setIsAnswered(true)
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = selectedOption
    setSelectedAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      setShowResults(true)
    }
  }

  const handleRetake = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setSelectedOption(null)
    setIsAnswered(false)
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quiz.questions[index].correctAnswer ? 1 : 0)
    }, 0)
  }

  if (showResults) {
    const score = calculateScore()
    const percentage = (score / quiz.questions.length) * 100
    const passed = percentage >= 70

    // Mark quiz as solved if passed and not already solved
    if (passed && currentUser && !isSolved) {
      markQuizSolved(currentUser.uid, quizId)
        .then(() => {
          setIsSolved(true)
          toast.success('🎉 Quiz passed! Marked as solved and saved to Firebase.')
        })
        .catch((error) => {
          console.error('Error marking quiz as solved:', error)
          toast.error('Failed to save progress to Firebase.')
        })
    }

    // Generate breadcrumb items for results page
    const breadcrumbItemsResults = [
      { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
      { name: "Articles", url: typeof window !== 'undefined' ? `${window.location.origin}/articles` : '' },
      { name: article.title, url: typeof window !== 'undefined' ? `${window.location.origin}/articles/${article.slug}` : '' },
      { name: "Quiz Results", url: typeof window !== 'undefined' ? window.location.href : '' }
    ]

    return (
      <>
        <SEO
          title={`${quiz.title} - Quiz Results`}
          description={`Quiz results for ${quiz.title}. Test your knowledge of ${article.category} concepts.`}
          keywords={quizKeywords}
          ogTitle={`${quiz.title} - Quiz Results`}
          ogDescription={`Quiz results for ${quiz.title}`}
          ogImage="/websitelogo.png"
        />
        <StructuredData data={generateBreadcrumbSchema(breadcrumbItemsResults)} />
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
                    <Link to="/articles">Articles</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
              <Link to={`/articles/${article.slug}`}>
                      {article.title}
              </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Quiz Results</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6 md:p-8 lg:p-12">
              <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5" />
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 mb-4 md:mb-6 shadow-2xl shadow-primary/20">
                  <Trophy className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-primary-foreground" />
                </div>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                  {passed ? "Congratulations!" : "Keep Learning!"}
                </h1>
                
                {isSolved && currentUser && (
                  <Badge variant="default" className="bg-green-600 hover:bg-green-700 mb-4">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Quiz Solved
                  </Badge>
                )}
                
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8">
                  You scored <span className="font-bold text-primary">{score}</span> out of{" "}
                  <span className="font-bold">{quiz.questions.length}</span>
                </p>

                <div className="mb-6 md:mb-8">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                    {percentage.toFixed(0)}%
                  </div>
                  <Progress value={percentage} className="h-2 md:h-3 mb-3 md:mb-4" />
                  <Badge variant={passed ? "default" : "secondary"} className="text-xs md:text-sm">
                    {passed ? "Passed" : "Need more practice"}
                  </Badge>
                </div>

                <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 mb-6 md:mb-8">
                  <Card className="p-3 md:p-4 bg-background/50">
                    <div className="text-xl md:text-2xl font-bold text-green-500 mb-1">{score}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Correct Answers</div>
                  </Card>
                  <Card className="p-3 md:p-4 bg-background/50">
                    <div className="text-xl md:text-2xl font-bold text-red-500 mb-1">
                      {quiz.questions.length - score}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">Incorrect Answers</div>
                  </Card>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Button onClick={handleRetake} variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Retake Quiz
                  </Button>
                  <Button asChild size="lg" className="w-full sm:w-auto gap-2">
                    <Link to="/articles">
                      Explore More Articles
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <div className="mt-8 md:mt-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Review Your Answers</h2>
              <div className="space-y-4 md:space-y-6">
                {quiz.questions.map((question, index) => {
                  const userAnswer = selectedAnswers[index]
                  const isCorrect = userAnswer === question.correctAnswer

                  return (
                    <Card key={question.id} className="p-4 md:p-6 border-l-4" style={{ borderLeftColor: isCorrect ? 'rgb(34 197 94)' : 'rgb(239 68 68)' }}>
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="flex-shrink-0 mt-1">
                          {isCorrect ? (
                            <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-500" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm md:text-base font-semibold mb-2 leading-relaxed">
                            Question {index + 1}: {question.question}
                          </h3>
                          {question.code && (
                            <pre className="bg-muted p-2 md:p-3 rounded-lg text-xs md:text-sm mb-2 md:mb-3 overflow-x-auto">
                              <code>{question.code}</code>
                            </pre>
                          )}
                          <div className="space-y-2 mb-2 md:mb-3">
                            {question.options.map((option, optIndex) => (
                              <div
                                key={optIndex}
                                className={`p-2 md:p-3 rounded-lg text-xs md:text-sm ${
                                  optIndex === question.correctAnswer
                                    ? 'bg-green-500/10 border border-green-500/30'
                                    : optIndex === userAnswer && !isCorrect
                                    ? 'bg-red-500/10 border border-red-500/30'
                                    : 'bg-muted'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  {optIndex === question.correctAnswer && (
                                    <CheckCircle2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-500 shrink-0" />
                                  )}
                                  {optIndex === userAnswer && !isCorrect && (
                                    <XCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-red-500 shrink-0" />
                                  )}
                                  <span className="break-words" dangerouslySetInnerHTML={{ __html: option }} />
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="text-xs md:text-sm text-muted-foreground bg-blue-500/10 border border-blue-500/30 p-2 md:p-3 rounded-lg">
                            <strong className="text-blue-600 dark:text-blue-400">Explanation:</strong>{" "}
                            {question.explanation}
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }

  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
    { name: "Articles", url: typeof window !== 'undefined' ? `${window.location.origin}/articles` : '' },
    { name: article.title, url: typeof window !== 'undefined' ? `${window.location.origin}/articles/${article.slug}` : '' },
    { name: quiz.title, url: typeof window !== 'undefined' ? window.location.href : '' }
  ]

  // Generate FAQ schema from quiz questions
  const faqQuestions = quiz.questions.map(q => ({
    question: q.question,
    answer: q.explanation || `The correct answer is option ${q.correctAnswer + 1}. ${q.explanation || ''}`
  }))

  return (
    <>
      <SEO
        title={quiz.title}
        description={quiz.description || `Take the ${quiz.title} quiz to test your knowledge of ${article.category} concepts.`}
        keywords={quizKeywords}
        ogTitle={quiz.title}
        ogDescription={quiz.description || `Test your knowledge with ${quiz.title} quiz`}
        ogImage="/websitelogo.png"
        ogUrl={typeof window !== 'undefined' ? window.location.href : ''}
        type="article"
      />
      <StructuredData data={generateQuizSchema(quiz, article)} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={generateFAQPageSchema(faqQuestions)} />
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
                  <Link to="/articles">Articles</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
            <Link to={`/articles/${article.slug}`}>
                    {article.title}
            </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-[200px] truncate md:max-w-none">
                  {quiz.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-4 md:mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="font-mono text-xs">{article.category}</Badge>
                {isSolved && currentUser && (
                  <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Solved
                  </Badge>
                )}
              </div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{quiz.title}</h1>
              <p className="text-sm md:text-base text-muted-foreground">{quiz.description}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs md:text-sm text-muted-foreground">
                <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-1.5 md:h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 max-w-7xl">
        <div className="max-w-3xl mx-auto">
          <Card className="p-4 md:p-6 lg:p-8 border-2 border-border/50 shadow-xl">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 leading-relaxed">
              {currentQuestionData.question}
            </h2>

            {currentQuestionData.code && (
              <div className="mb-4 md:mb-6 relative">
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm border border-[#333]">
                  <code>{currentQuestionData.code}</code>
                </pre>
              </div>
            )}

            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {currentQuestionData.options.map((option, index) => {
                const isSelected = selectedOption === index
                const isCorrectAnswer = index === currentQuestionData.correctAnswer
                const showCorrect = isAnswered && isCorrectAnswer
                const showIncorrect = isAnswered && isSelected && !isCorrectAnswer

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-3 md:p-4 rounded-lg border-2 transition-all duration-300 ${
                      showCorrect
                        ? 'border-green-500 bg-green-500/10'
                        : showIncorrect
                        ? 'border-red-500 bg-red-500/10'
                        : isSelected
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                    } ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <div
                        className={`flex-shrink-0 h-5 w-5 md:h-6 md:w-6 rounded-full border-2 flex items-center justify-center ${
                          showCorrect
                            ? 'border-green-500 bg-green-500'
                            : showIncorrect
                            ? 'border-red-500 bg-red-500'
                            : isSelected
                            ? 'border-primary bg-primary'
                            : 'border-border'
                        }`}
                      >
                        {showCorrect && <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-white" />}
                        {showIncorrect && <XCircle className="h-3 w-3 md:h-4 md:w-4 text-white" />}
                        {!isAnswered && isSelected && (
                          <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-white" />
                        )}
                      </div>
                      <span
                        className="flex-1 text-sm md:text-base break-words"
                        dangerouslySetInnerHTML={{ __html: option }}
                      />
                    </div>
                  </button>
                )
              })}
            </div>

            {isAnswered && (
              <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-xs md:text-sm leading-relaxed">
                  <strong className="text-blue-600 dark:text-blue-400">Explanation:</strong>{" "}
                  {currentQuestionData.explanation}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
              <div className="text-xs md:text-sm text-muted-foreground order-2 sm:order-1">
                {currentQuestion + 1} / {quiz.questions.length}
              </div>
              <div className="flex gap-2 md:gap-3 w-full sm:w-auto order-1 sm:order-2">
                {!isAnswered ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    size="lg"
                    className="flex-1 sm:flex-none gap-2"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button onClick={handleNextQuestion} size="lg" className="flex-1 sm:flex-none gap-2">
                    <span className="hidden sm:inline">
                    {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'View Results'}
                    </span>
                    <span className="sm:hidden">
                      {currentQuestion < quiz.questions.length - 1 ? 'Next' : 'Results'}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
    </>
  )
}

