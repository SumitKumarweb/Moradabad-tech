import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { 
  getUserProgress, 
  getUserActivities, 
  getProgressStats
} from '@/lib/progressService'
import { 
  Trophy, 
  Code, 
  Code2, 
  Flame, 
  Github,
  FileText,
  Loader2,
  Activity
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import SEO from '@/components/SEO'
import StructuredData, { generateBreadcrumbSchema } from '@/components/StructuredData'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'

export default function ProgressPage() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(null)
  const [activities, setActivities] = useState([])
  const [stats, setStats] = useState(null)

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
      return
    }

    loadProgress()
  }, [currentUser, navigate])

  const loadProgress = async () => {
    try {
      setLoading(true)
      const [progressData, activitiesData, statsData] = await Promise.all([
        getUserProgress(currentUser.uid),
        getUserActivities(currentUser.uid, 50),
        getProgressStats(currentUser.uid)
      ])
      
      setProgress(progressData)
      setActivities(activitiesData)
      setStats(statsData)
    } catch (error) {
      console.error('Error loading progress:', error)
      toast.error('Failed to load progress')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case 'dsa_solved':
        return <Code className="h-4 w-4" />
      case 'js_solved':
        return <Code2 className="h-4 w-4" />
      case 'github_commit':
      case 'github':
        return <Github className="h-4 w-4" />
      case 'article_read':
        return <FileText className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  const getActivityLabel = (activity) => {
    switch (activity.type) {
      case 'dsa_solved':
        return `Solved DSA problem: ${activity.problemId || 'Unknown'}`
      case 'js_solved':
        return `Solved JavaScript question: ${activity.questionId || 'Unknown'}`
      case 'github_commit':
        return `GitHub commit: ${activity.description || 'Code committed'}`
      case 'github':
        return `GitHub activity: ${activity.description || 'Repository updated'}`
      case 'article_read':
        return `Read article: ${activity.description || 'Article'}`
      default:
        return activity.description || `${activity.type} activity`
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading progress...</p>
        </div>
      </div>
    )
  }

  if (!progress) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Failed to load progress</p>
          <Button onClick={loadProgress}>Retry</Button>
        </div>
      </div>
    )
  }

  const totalSolved = progress.totalSolved || 0
  const dsaCount = progress.dsaCount || 0
  const jsCount = progress.jsCount || 0
  const currentStreak = progress.currentStreak || 0
  const longestStreak = progress.longestStreak || 0

  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
    { name: "My Progress", url: typeof window !== 'undefined' ? window.location.href : '' }
  ]

  return (
    <>
      <SEO
        title="My Progress"
        description="Track your coding progress, solved problems, streaks, and activities. Monitor your journey as a developer."
        keywords="progress tracking, coding progress, solved problems, streak, developer stats, coding activities"
        ogTitle="My Progress"
        ogDescription="Track your coding progress and achievements"
        ogImage="/websitelogo.png"
        robots="noindex, follow"
      />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
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
                  <BreadcrumbPage>My Progress</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col items-start gap-4 md:gap-6 max-w-3xl mx-auto lg:mx-0 mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                <Activity className="h-3 w-3" />
                <span>Your Journey</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                  Progress
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Track your coding journey and achievements
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Solved</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalSolved}</div>
                <p className="text-xs text-muted-foreground">
                  {stats?.weeklySolved || 0} solved this week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">DSA Problems</CardTitle>
                <Code className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dsaCount}</div>
                <p className="text-xs text-muted-foreground">
                  Data structures & algorithms
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">JS Questions</CardTitle>
                <Code2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{jsCount}</div>
                <p className="text-xs text-muted-foreground">
                  JavaScript concepts mastered
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                <Flame className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentStreak}</div>
                <p className="text-xs text-muted-foreground">
                  Best: {longestStreak} days
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Progress Overview</CardTitle>
                <CardDescription>Your solving progress breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>DSA Problems</span>
                    <span className="font-medium">{dsaCount}</span>
                  </div>
                  <Progress 
                    value={totalSolved > 0 ? (dsaCount / totalSolved) * 100 : 0} 
                    className="h-2"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>JavaScript Questions</span>
                    <span className="font-medium">{jsCount}</span>
                  </div>
                  <Progress 
                    value={totalSolved > 0 ? (jsCount / totalSolved) * 100 : 0} 
                    className="h-2"
                  />
                </div>
                {stats && (
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>This Week</span>
                      <Badge variant="secondary">{stats.weeklySolved || 0} solved</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>This Month</span>
                      <Badge variant="secondary">{stats.monthlySolved || 0} solved</Badge>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Streak Info</CardTitle>
                <CardDescription>Keep your streak alive!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-4">
                  <div className="text-4xl font-bold text-primary mb-2">{currentStreak}</div>
                  <p className="text-sm text-muted-foreground">Day Streak</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Longest Streak</span>
                    <span className="font-medium">{longestStreak} days</span>
                  </div>
                  {progress.lastActivityDate && (
                    <div className="flex justify-between">
                      <span>Last Activity</span>
                      <span className="font-medium">
                        {new Date(progress.lastActivityDate).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground text-center">
                    Solve at least one problem daily to maintain your streak!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your recent coding activities and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              {activities.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No activities yet. Start solving problems to see your progress!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                    >
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">
                          {getActivityLabel(activity)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatDate(activity.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

