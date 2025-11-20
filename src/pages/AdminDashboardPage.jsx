import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { 
  Users, 
  Code, 
  LogOut, 
  Shield,
  Search,
  Eye,
  Trash2,
  Calendar,
  Award,
  Target,
  BarChart3,
  Zap
} from 'lucide-react'
import { useAdmin } from "@/contexts/AdminContext"
import { toast } from "sonner"
import {
  getAllUsers,
  getAdminAnalytics,
  getUserById,
  deleteUser
} from "@/lib/adminService"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'


export default function AdminDashboardPage() {
  const navigate = useNavigate()
  const { logout, adminEmail } = useAdmin()
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [analytics, setAnalytics] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [showUserDialog, setShowUserDialog] = useState(false)
  const [userDetails, setUserDetails] = useState(null)
  const [loadingUserDetails, setLoadingUserDetails] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [usersData, analyticsData] = await Promise.all([
        getAllUsers(),
        getAdminAnalytics()
      ])
      setUsers(usersData)
      setAnalytics(analyticsData)
    } catch (error) {
      console.error('Error loading admin data:', error)
      toast.error('Failed to load admin data')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    logout()
    toast.success("Logged out successfully")
    navigate("/admin/login")
  }

  const handleViewUser = async (userId) => {
    try {
      setLoadingUserDetails(true)
      setShowUserDialog(true)
      const details = await getUserById(userId)
      setUserDetails(details)
    } catch (error) {
      console.error('Error loading user details:', error)
      toast.error('Failed to load user details')
    } finally {
      setLoadingUserDetails(false)
    }
  }

  const handleDeleteUser = async (userId, userName) => {
    if (!window.confirm(`Are you sure you want to delete user "${userName}"? This action cannot be undone.`)) {
      return
    }

    try {
      await deleteUser(userId)
      toast.success("User deleted successfully")
      await loadData()
      if (showUserDialog) {
        setShowUserDialog(false)
        setUserDetails(null)
      }
    } catch (error) {
      console.error('Error deleting user:', error)
      toast.error('Failed to delete user')
    }
  }

  const filteredUsers = users.filter(user => {
    const query = searchQuery.toLowerCase()
    return (
      (user.name || '').toLowerCase().includes(query) ||
      (user.email || '').toLowerCase().includes(query) ||
      (user.phone || '').toLowerCase().includes(query)
    )
  })

  // Prepare chart data
  const registrationChartData = analytics ? Object.entries(analytics.registrationData)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-30)
    .map(([date, count]) => ({ date, count })) : []

  const solveChartData = analytics ? Object.entries(analytics.solveDataByDay)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-30)
    .map(([date, data]) => ({ 
      date, 
      DSA: data.dsa, 
      JavaScript: data.js 
    })) : []

  const topUsersChartData = analytics?.topUsers.slice(0, 5).map(user => ({
    name: user.name?.substring(0, 15) || 'User',
    solves: user.totalSolved
  })) || []

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-red-500" />
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Logged in as {adminEmail}</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList>
            <TabsTrigger value="analytics">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users className="h-4 w-4 mr-2" />
              User Management
            </TabsTrigger>
          </TabsList>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics?.totalUsers || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    {analytics?.activeUsers || 0} active in last 7 days
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">DSA Problems Solved</CardTitle>
                  <Code className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics?.totalDSASolved || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    Avg {analytics?.avgDSAPerUser || 0} per user
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">JS Questions Solved</CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics?.totalJSSolved || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    Avg {analytics?.avgJSPerUser || 0} per user
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Problems Solved</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics?.totalProblemsSolved || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    {analytics?.usersWithProgress || 0} users with progress
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>User Registrations (Last 30 Days)</CardTitle>
                  <CardDescription>New user signups over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={registrationChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="count" stroke="#8884d8" name="New Users" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Problems Solved (Last 30 Days)</CardTitle>
                  <CardDescription>Daily problem solving activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={solveChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="DSA" fill="#8884d8" />
                      <Bar dataKey="JavaScript" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Top Users */}
            <Card>
              <CardHeader>
                <CardTitle>Top Users by Problems Solved</CardTitle>
                <CardDescription>Most active problem solvers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics?.topUsers.slice(0, 10).map((user, index) => (
                    <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{user.name || 'Anonymous'}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold">{user.totalSolved}</p>
                          <p className="text-xs text-muted-foreground">Total</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{user.dsaCount}</p>
                          <p className="text-xs text-muted-foreground">DSA</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{user.jsCount}</p>
                          <p className="text-xs text-muted-foreground">JS</p>
                        </div>
                        <Badge variant="secondary">
                          <Award className="h-3 w-3 mr-1" />
                          Streak: {user.currentStreak}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage all registered users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search users by name, email, or phone..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {filteredUsers.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No users found
                    </div>
                  ) : (
                    filteredUsers.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            {user.photoUrl ? (
                              <img
                                src={user.photoUrl}
                                alt={user.name || 'User'}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                            ) : (
                              <Users className="h-5 w-5 text-primary" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{user.name || 'No name'}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                            {user.phone && (
                              <p className="text-xs text-muted-foreground">{user.phone}</p>
                            )}
                            <div className="flex gap-2 mt-1">
                              <Badge variant="outline">
                                DSA: {user.progress?.dsaCount || 0}
                              </Badge>
                              <Badge variant="outline">
                                JS: {user.progress?.jsCount || 0}
                              </Badge>
                              <Badge variant="secondary">
                                Total: {user.progress?.totalSolved || 0}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {user.createdAt && (
                            <div className="text-right text-xs text-muted-foreground mr-4">
                              <Calendar className="h-3 w-3 inline mr-1" />
                              {new Date(user.createdAt).toLocaleDateString()}
                            </div>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewUser(user.id)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteUser(user.id, user.name || user.email)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* User Details Dialog */}
      <Dialog open={showUserDialog} onOpenChange={setShowUserDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>User Profile Details</DialogTitle>
            <DialogDescription>
              Complete profile and activity information
            </DialogDescription>
          </DialogHeader>
          {loadingUserDetails ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : userDetails ? (
            <div className="space-y-6">
              {/* Profile Info */}
              <div>
                <h3 className="font-semibold mb-3">Profile Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{userDetails.name || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{userDetails.email || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{userDetails.phone || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gender</p>
                    <p className="font-medium">{userDetails.gender || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium">{userDetails.linkedinId || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LeetCode</p>
                    <p className="font-medium">{userDetails.leetcodeId || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Joined</p>
                    <p className="font-medium">
                      {userDetails.createdAt 
                        ? new Date(userDetails.createdAt).toLocaleString()
                        : 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Updated</p>
                    <p className="font-medium">
                      {userDetails.updatedAt 
                        ? new Date(userDetails.updatedAt).toLocaleString()
                        : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Stats */}
              <div>
                <h3 className="font-semibold mb-3">Progress Statistics</h3>
                <div className="grid grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">Total Solved</p>
                      <p className="text-2xl font-bold">{userDetails.progress?.totalSolved || 0}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">DSA Problems</p>
                      <p className="text-2xl font-bold">{userDetails.progress?.dsaCount || 0}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">JS Questions</p>
                      <p className="text-2xl font-bold">{userDetails.progress?.jsCount || 0}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">Current Streak</p>
                      <p className="text-2xl font-bold">{userDetails.progress?.currentStreak || 0}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Recent Activities */}
              {userDetails.activities && userDetails.activities.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Recent Activities</h3>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {userDetails.activities.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-2 border rounded">
                        <div>
                          <Badge variant="outline">
                            {activity.type === 'dsa_solved' ? 'DSA Solved' : 
                             activity.type === 'js_solved' ? 'JS Solved' : activity.type}
                          </Badge>
                          {activity.problemId && (
                            <span className="ml-2 text-sm text-muted-foreground">
                              Problem: {activity.problemId}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {activity.timestamp 
                            ? new Date(activity.timestamp).toLocaleString()
                            : 'N/A'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No user details available
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

