import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { getLeaderboard, getTotalUserCount, getUserRank } from '@/lib/leaderboardService'
import { 
  Trophy, 
  Medal,
  Award,
  Crown,
  TrendingUp,
  Loader2,
  Users,
  Code,
  Code2,
  Flame
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { toast } from 'sonner'
import SEO from '@/components/SEO'

const MIN_USER_COUNT = 25

export default function LeaderboardPage() {
  const { currentUser } = useAuth()
  const [loading, setLoading] = useState(true)
  const [leaderboard, setLeaderboard] = useState([])
  const [userRank, setUserRank] = useState(null)
  const [totalUsers, setTotalUsers] = useState(0)
  const [showLeaderboard, setShowLeaderboard] = useState(false)

  useEffect(() => {
    loadLeaderboard()
  }, [])

  const loadLeaderboard = async () => {
    try {
      setLoading(true)
      
      // Check total user count first
      const userCount = await getTotalUserCount()
      setTotalUsers(userCount)
      
      if (userCount < MIN_USER_COUNT) {
        setShowLeaderboard(false)
        setLoading(false)
        return
      }
      
      setShowLeaderboard(true)
      
      // Load leaderboard
      const leaderboardData = await getLeaderboard(100)
      setLeaderboard(leaderboardData)
      
      // Get current user's rank if logged in
      if (currentUser) {
        try {
          const rankData = await getUserRank(currentUser.uid)
          setUserRank(rankData)
        } catch (error) {
          console.error('Error getting user rank:', error)
        }
      }
    } catch (error) {
      console.error('Error loading leaderboard:', error)
      toast.error('Failed to load leaderboard')
    } finally {
      setLoading(false)
    }
  }

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-yellow-500" />
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />
    return <Trophy className="h-4 w-4 text-muted-foreground" />
  }

  const getRankBadgeColor = (rank) => {
    if (rank === 1) return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
    if (rank === 2) return 'bg-gray-400/10 text-gray-600 border-gray-400/20'
    if (rank === 3) return 'bg-amber-600/10 text-amber-600 border-amber-600/20'
    return 'bg-muted text-muted-foreground'
  }

  const formatScore = (score) => {
    if (score >= 1000) {
      return `${(score / 1000).toFixed(1)}k`
    }
    return score.toString()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading leaderboard...</p>
        </div>
      </div>
    )
  }

  if (!showLeaderboard) {
    return (
      <>
        <SEO
          title="Leaderboard"
          description="View top performers and rankings"
          keywords="leaderboard, rankings, top performers, competition"
        />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Card className="max-w-md mx-4">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <CardTitle>Leaderboard Coming Soon</CardTitle>
              <CardDescription>
                The leaderboard will be available when we reach {MIN_USER_COUNT}+ active users.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-2xl font-bold text-primary">{totalUsers}</div>
              <p className="text-sm text-muted-foreground">
                Current active users
              </p>
              <p className="text-xs text-muted-foreground">
                {MIN_USER_COUNT - totalUsers} more users needed
              </p>
            </CardContent>
          </Card>
        </div>
      </>
    )
  }

  return (
    <>
      <SEO
        title="Leaderboard"
        description="View top performers ranked by problems solved, quizzes completed, and more. Compete with the best coders!"
        keywords="leaderboard, rankings, top performers, competition, coding leaderboard, programming leaderboard"
        ogTitle="Leaderboard - Top Coders"
        ogDescription="See who's leading the pack in coding challenges"
        ogImage="/websitelogo.png"
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm mb-4">
              <Trophy className="h-3 w-3" />
              <span>Competition</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
              Leaderboard
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Top performers ranked by problems solved, quizzes completed, and coding achievements
            </p>
          </div>

          {/* User Rank Card */}
          {currentUser && userRank && userRank.rank && (
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Your Rank
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-primary">
                      #{userRank.rank}
                    </div>
                    <div>
                      <p className="font-medium">{userRank.userData?.displayName || 'You'}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatScore(userRank.userData?.score || 0)} points
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">
                      {userRank.userData?.totalSolved || 0} solved
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      Out of {userRank.totalUsers} users
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Top 3 Podium */}
          {leaderboard.length >= 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* 2nd Place */}
              <Card className="md:order-1 border-gray-400/20">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center mb-2">
                    <Medal className="h-8 w-8 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">2nd Place</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <Avatar className="h-16 w-16 mx-auto">
                    <AvatarImage src={leaderboard[1].photoURL} />
                    <AvatarFallback>
                      {leaderboard[1].displayName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p className="font-semibold">{leaderboard[1].displayName}</p>
                  <Badge className="bg-gray-400/10 text-gray-600">
                    {formatScore(leaderboard[1].score)} pts
                  </Badge>
                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
                    <span className="flex items-center gap-1">
                      <Code className="h-3 w-3" />
                      {leaderboard[1].dsaCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <Code2 className="h-3 w-3" />
                      {leaderboard[1].jsCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="h-3 w-3" />
                      {leaderboard[1].currentStreak}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* 1st Place */}
              <Card className="md:order-0 border-yellow-500/30 bg-yellow-500/5">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center mb-2">
                    <Crown className="h-10 w-10 text-yellow-500" />
                  </div>
                  <CardTitle className="text-lg">1st Place</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <Avatar className="h-20 w-20 mx-auto border-2 border-yellow-500">
                    <AvatarImage src={leaderboard[0].photoURL} />
                    <AvatarFallback>
                      {leaderboard[0].displayName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p className="font-semibold text-lg">{leaderboard[0].displayName}</p>
                  <Badge className="bg-yellow-500/10 text-yellow-600">
                    {formatScore(leaderboard[0].score)} pts
                  </Badge>
                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
                    <span className="flex items-center gap-1">
                      <Code className="h-3 w-3" />
                      {leaderboard[0].dsaCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <Code2 className="h-3 w-3" />
                      {leaderboard[0].jsCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="h-3 w-3" />
                      {leaderboard[0].currentStreak}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* 3rd Place */}
              <Card className="md:order-2 border-amber-600/20">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center mb-2">
                    <Medal className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-lg">3rd Place</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <Avatar className="h-16 w-16 mx-auto">
                    <AvatarImage src={leaderboard[2].photoURL} />
                    <AvatarFallback>
                      {leaderboard[2].displayName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p className="font-semibold">{leaderboard[2].displayName}</p>
                  <Badge className="bg-amber-600/10 text-amber-600">
                    {formatScore(leaderboard[2].score)} pts
                  </Badge>
                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
                    <span className="flex items-center gap-1">
                      <Code className="h-3 w-3" />
                      {leaderboard[2].dsaCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <Code2 className="h-3 w-3" />
                      {leaderboard[2].jsCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="h-3 w-3" />
                      {leaderboard[2].currentStreak}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Leaderboard Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Rankings</CardTitle>
              <CardDescription>
                Rankings based on problems solved, quizzes completed, and coding achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              {leaderboard.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Trophy className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No rankings yet. Start solving problems to appear on the leaderboard!</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {leaderboard.map((user, index) => {
                    const isCurrentUser = currentUser && user.userId === currentUser.uid
                    return (
                      <div
                        key={user.userId}
                        className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
                          isCurrentUser
                            ? 'bg-primary/10 border-primary/20'
                            : 'bg-card hover:bg-muted/50'
                        }`}
                      >
                        {/* Rank */}
                        <div className="flex items-center justify-center w-12">
                          {index < 3 ? (
                            getRankIcon(user.rank)
                          ) : (
                            <span className="text-sm font-medium text-muted-foreground">
                              #{user.rank}
                            </span>
                          )}
                        </div>

                        {/* Avatar */}
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.photoURL} />
                          <AvatarFallback>
                            {user.displayName.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>

                        {/* User Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className={`font-medium ${isCurrentUser ? 'text-primary' : ''}`}>
                              {user.displayName}
                              {isCurrentUser && (
                                <Badge variant="outline" className="ml-2 text-xs">
                                  You
                                </Badge>
                              )}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Code className="h-3 w-3" />
                              {user.dsaCount} DSA
                            </span>
                            <span className="flex items-center gap-1">
                              <Code2 className="h-3 w-3" />
                              {user.jsCount} JS
                            </span>
                            <span className="flex items-center gap-1">
                              <Flame className="h-3 w-3" />
                              {user.currentStreak} day streak
                            </span>
                          </div>
                        </div>

                        {/* Score */}
                        <div className="text-right">
                          <Badge className={getRankBadgeColor(user.rank)}>
                            {formatScore(user.score)} pts
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {user.totalSolved} solved
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Scoring Info */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>How Scoring Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">DSA Problems</span>
                    <Badge variant="outline">10 pts each</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">JavaScript Questions</span>
                    <Badge variant="outline">5 pts each</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Current Streak</span>
                    <Badge variant="outline">2 pts/day</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Longest Streak Bonus</span>
                    <Badge variant="outline">1 pt/day</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

