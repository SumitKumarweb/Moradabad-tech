import { useState } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { CheckCircle2, XCircle, ChevronLeft, Trophy, RotateCcw, ArrowRight } from 'lucide-react'

import { quizzes, articles } from "@/lib/articles"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function QuizPage() {
  const { quizId } = useParams()
  const quiz = quizzes.find((q) => q.id === quizId)
  const article = quiz ? articles.find((a) => a.slug === quiz.articleSlug) : null

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)

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

    return (
      <div className="min-h-screen bg-background">
        <div className="relative border-b border-border/40">
          <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="container relative px-4 md:px-6 lg:px-8 py-8 md:py-12">
            <Button asChild variant="ghost" className="mb-6 -ml-2">
              <Link to={`/articles/${article.slug}`}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Article
              </Link>
            </Button>
          </div>
        </div>

        <div className="container px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12">
              <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5" />
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 mb-6 shadow-2xl shadow-primary/20">
                  <Trophy className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground" />
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {passed ? "Congratulations!" : "Keep Learning!"}
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  You scored <span className="font-bold text-primary">{score}</span> out of{" "}
                  <span className="font-bold">{quiz.questions.length}</span>
                </p>

                <div className="mb-8">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                    {percentage.toFixed(0)}%
                  </div>
                  <Progress value={percentage} className="h-3 mb-4" />
                  <Badge variant={passed ? "default" : "secondary"} className="text-sm">
                    {passed ? "Passed" : "Need more practice"}
                  </Badge>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  <Card className="p-4 bg-background/50">
                    <div className="text-2xl font-bold text-green-500 mb-1">{score}</div>
                    <div className="text-sm text-muted-foreground">Correct Answers</div>
                  </Card>
                  <Card className="p-4 bg-background/50">
                    <div className="text-2xl font-bold text-red-500 mb-1">
                      {quiz.questions.length - score}
                    </div>
                    <div className="text-sm text-muted-foreground">Incorrect Answers</div>
                  </Card>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleRetake} variant="outline" size="lg" className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Retake Quiz
                  </Button>
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/articles">
                      Explore More Articles
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Review Your Answers</h2>
              <div className="space-y-6">
                {quiz.questions.map((question, index) => {
                  const userAnswer = selectedAnswers[index]
                  const isCorrect = userAnswer === question.correctAnswer

                  return (
                    <Card key={question.id} className="p-6 border-l-4" style={{ borderLeftColor: isCorrect ? 'rgb(34 197 94)' : 'rgb(239 68 68)' }}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          {isCorrect ? (
                            <CheckCircle2 className="h-6 w-6 text-green-500" />
                          ) : (
                            <XCircle className="h-6 w-6 text-red-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">
                            Question {index + 1}: {question.question}
                          </h3>
                          {question.code && (
                            <pre className="bg-muted p-3 rounded-lg text-sm mb-3 overflow-x-auto">
                              <code>{question.code}</code>
                            </pre>
                          )}
                          <div className="space-y-2 mb-3">
                            {question.options.map((option, optIndex) => (
                              <div
                                key={optIndex}
                                className={`p-3 rounded-lg text-sm ${
                                  optIndex === question.correctAnswer
                                    ? 'bg-green-500/10 border border-green-500/30'
                                    : optIndex === userAnswer && !isCorrect
                                    ? 'bg-red-500/10 border border-red-500/30'
                                    : 'bg-muted'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  {optIndex === question.correctAnswer && (
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  )}
                                  {optIndex === userAnswer && !isCorrect && (
                                    <XCircle className="h-4 w-4 text-red-500" />
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: option }} />
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="text-sm text-muted-foreground bg-blue-500/10 border border-blue-500/30 p-3 rounded-lg">
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
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border/40">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link to={`/articles/${article.slug}`}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Article
            </Link>
          </Button>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Badge className="mb-2 font-mono text-xs">{article.category}</Badge>
                <h1 className="text-2xl md:text-3xl font-bold">{quiz.title}</h1>
                <p className="text-muted-foreground mt-2">{quiz.description}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 border-2 border-border/50 shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 leading-relaxed">
              {currentQuestionData.question}
            </h2>

            {currentQuestionData.code && (
              <div className="mb-6 relative">
                <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto font-mono text-sm border border-[#333]">
                  <code>{currentQuestionData.code}</code>
                </pre>
              </div>
            )}

            <div className="space-y-3 mb-8">
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
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                      showCorrect
                        ? 'border-green-500 bg-green-500/10'
                        : showIncorrect
                        ? 'border-red-500 bg-red-500/10'
                        : isSelected
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                    } ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex-shrink-0 h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                          showCorrect
                            ? 'border-green-500 bg-green-500'
                            : showIncorrect
                            ? 'border-red-500 bg-red-500'
                            : isSelected
                            ? 'border-primary bg-primary'
                            : 'border-border'
                        }`}
                      >
                        {showCorrect && <CheckCircle2 className="h-4 w-4 text-white" />}
                        {showIncorrect && <XCircle className="h-4 w-4 text-white" />}
                        {!isAnswered && isSelected && (
                          <div className="h-3 w-3 rounded-full bg-white" />
                        )}
                      </div>
                      <span
                        className="flex-1"
                        dangerouslySetInnerHTML={{ __html: option }}
                      />
                    </div>
                  </button>
                )
              })}
            </div>

            {isAnswered && (
              <div className="mb-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-sm">
                  <strong className="text-blue-600 dark:text-blue-400">Explanation:</strong>{" "}
                  {currentQuestionData.explanation}
                </p>
              </div>
            )}

            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                {currentQuestion + 1} / {quiz.questions.length}
              </div>
              <div className="flex gap-3">
                {!isAnswered ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    size="lg"
                    className="gap-2"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button onClick={handleNextQuestion} size="lg" className="gap-2">
                    {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'View Results'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

