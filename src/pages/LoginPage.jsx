import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Code2, Loader2, Github, Mail } from 'lucide-react'
import { useAuth } from "@/contexts/AuthContext"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SEO from "@/components/SEO"
import StructuredData, { generateWebPageSchema } from "@/components/StructuredData"

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, loginWithGoogle } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
    
    try {
      await login(formData.email, formData.password)
      toast.success("Successfully signed in!")
      navigate("/")
    } catch (error) {
      console.error("Login error:", error)
      setError(error.message || "Failed to sign in. Please check your credentials.")
      toast.error(error.message || "Failed to sign in")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setError("")
    setIsLoading(true)
    try {
      await loginWithGoogle()
      toast.success("Successfully signed in with Google!")
      navigate("/")
    } catch (error) {
      console.error("Google login error:", error)
      setError(error.message || "Failed to sign in with Google")
      toast.error(error.message || "Failed to sign in with Google")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Login"
        description="Sign in to your Moradabads account to access personalized learning, track your progress, save your code, and unlock premium features."
        keywords="login, sign in, account login, Moradabads login, programming account, coding account, web development account"
        ogTitle="Login - Moradabads"
        ogDescription="Sign in to your Moradabads account to continue your learning journey."
        ogImage="/websitelogo.png"
        robots="noindex, follow"
      />
      <StructuredData data={generateWebPageSchema({
        name: "Login",
        title: "Login - Moradabads",
        description: "Sign in to your Moradabads account to access personalized learning, track your progress, save your code, and unlock premium features."
      })} />
    <div className="min-h-screen flex items-center justify-center p-4 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
            <img 
              src="/websitelogo.png" 
              alt="Moradabads"
              className="h-6 w-auto object-contain max-h-20 max-w-48 transition-transform group-hover:scale-110"
            />
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to your Moradabads account</p>
        </div>

        {/* Main Form Card */}
        <div className="rounded-xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-11"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="#"
                  className="text-xs text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-md">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-11"
              onClick={() => alert("GitHub login - Coming soon!")}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>

        {/* Terms */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          By continuing, you agree to our{" "}
          <Link to="#" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
    </>
  )
}

