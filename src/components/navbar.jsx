import * as React from "react"
import { memo, useCallback, useMemo } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, Code2, User, LogOut, TrendingUp, Home, BookOpen, Brain, FileText, Code, Target, Zap, ChevronRight, X } from 'lucide-react'

import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/AuthContext"
import { toast } from "sonner"

export const Navbar = memo(function Navbar() {
  const location = useLocation()
  const pathname = location.pathname
  const [isOpen, setIsOpen] = React.useState(false)
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = useCallback(async () => {
    try {
      await logout()
      toast.success('Logged out successfully')
      navigate('/')
    } catch (error) {
      toast.error('Failed to logout')
    }
  }, [logout, navigate])
  
  const mainNavItems = useMemo(() => siteConfig.mainNav, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm dark:border-border/60 dark:shadow-lg dark:shadow-primary/5">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center flex-1 min-w-0 gap-6 lg:gap-8">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 transition-opacity hover:opacity-80">
            <img 
              src="/websitelogo.png" 
              alt={siteConfig.name}
              className="h-5 w-auto object-contain max-h-12 max-w-32"
            />
            <span className="hidden font-bold text-lg lg:inline-block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text whitespace-nowrap">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex items-center gap-4 lg:gap-6 text-sm font-medium overflow-x-auto scrollbar-hide">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "transition-all hover:text-foreground/80 relative py-1 whitespace-nowrap flex-shrink-0",
                  pathname === item.href ? "text-foreground font-semibold" : "text-foreground/60"
                )}
              >
                {item.title}
                {pathname === item.href && (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary rounded-full dark:shadow-[0_0_8px_rgba(100,200,255,0.6)]" />
                )}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between flex-1 min-w-0 gap-2">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="/websitelogo.png" 
              alt={siteConfig.name}
              className="h-5 w-auto object-contain max-h-12 max-w-32"
            />
            <span className="font-bold text-sm sm:text-base whitespace-nowrap">{siteConfig.name}</span>
          </Link>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="px-2 hover:bg-muted focus-visible:bg-transparent focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0 w-[300px] sm:w-[380px] p-0 flex flex-col [&>button]:hidden">
                {/* Header Section */}
                <div className="border-b border-border/40 bg-gradient-to-br from-primary/5 via-background to-background px-4 sm:px-6 pt-4 pb-4 relative">
                  <SheetClose className="absolute top-4 right-4 rounded-md p-1.5 hover:bg-muted transition-colors z-10 flex items-center justify-center">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                  <div className="flex items-center mb-4 pr-10">
                    <Link
                      to="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <img 
                        src="/websitelogo.png" 
                        alt={siteConfig.name}
                        className="h-4 w-auto object-contain max-h-8"
                      />
                      <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {siteConfig.name}
                      </span>
                    </Link>
                  </div>
                  
                  {/* User Profile Section */}
                  {currentUser && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                        {currentUser.photoURL ? (
                          <img 
                            src={currentUser.photoURL} 
                            alt={currentUser.displayName || 'User'} 
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-5 w-5 text-primary-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{currentUser.displayName || 'User'}</p>
                        <p className="text-xs text-muted-foreground truncate">{currentUser.email}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-4">
                  <nav className="flex flex-col gap-1">
                    {mainNavItems.map((item, index) => {
                      const isActive = pathname === item.href
                      const getIcon = () => {
                        const title = item.title.toLowerCase()
                        if (title.includes('home')) return <Home className="h-5 w-5" />
                        if (title.includes('article')) return <BookOpen className="h-5 w-5" />
                        if (title.includes('quiz')) return <Brain className="h-5 w-5" />
                        if (title.includes('js question') || title.includes('javascript')) return <FileText className="h-5 w-5" />
                        if (title.includes('base programming')) return <Code className="h-5 w-5" />
                        if (title.includes('interview')) return <Target className="h-5 w-5" />
                        if (title.includes('dsa')) return <Zap className="h-5 w-5" />
                        if (title.includes('editor') || title.includes('code')) return <Code2 className="h-5 w-5" />
                        return <ChevronRight className="h-5 w-5" />
                      }
                      
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={cn(
                            "group flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200",
                            isActive 
                              ? "bg-primary/10 text-primary shadow-sm border border-primary/20" 
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className={cn(
                            "transition-colors flex-shrink-0",
                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                          )}>
                            {getIcon()}
                          </span>
                          <span className="flex-1 font-medium text-sm sm:text-base">{item.title}</span>
                          {isActive && (
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                          )}
                        </Link>
                      )
                    })}
                  </nav>

                  {/* User Actions Section */}
                  {currentUser ? (
                    <div className="mt-4 pt-4 border-t border-border/40">
                      <div className="flex flex-col gap-1">
                        <Link
                          to="/profile"
                          className={cn(
                            "group flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200",
                            pathname === "/profile"
                              ? "bg-primary/10 text-primary shadow-sm border border-primary/20"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          <User className={cn(
                            "h-5 w-5 transition-colors flex-shrink-0",
                            pathname === "/profile" ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                          )} />
                          <span className="flex-1 font-medium text-sm sm:text-base">Profile</span>
                          {pathname === "/profile" && (
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                          )}
                        </Link>
                        <Link
                          to="/progress"
                          className={cn(
                            "group flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200",
                            pathname === "/progress"
                              ? "bg-primary/10 text-primary shadow-sm border border-primary/20"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          <TrendingUp className={cn(
                            "h-5 w-5 transition-colors flex-shrink-0",
                            pathname === "/progress" ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                          )} />
                          <span className="flex-1 font-medium text-sm sm:text-base">Progress</span>
                          {pathname === "/progress" && (
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                          )}
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout()
                            setIsOpen(false)
                          }}
                          className="group flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 text-muted-foreground hover:text-destructive hover:bg-destructive/10 w-full text-left"
                        >
                          <LogOut className="h-5 w-5 text-muted-foreground group-hover:text-destructive transition-colors flex-shrink-0" />
                          <span className="flex-1 font-medium text-sm sm:text-base">Logout</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 pt-4 border-t border-border/40">
                      <Link
                        to="/login"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm text-sm sm:text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        <User className="h-5 w-5" />
                        <span>Login</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-border/40 px-4 sm:px-6 py-3 bg-muted/30">
                  <p className="text-xs text-center text-muted-foreground">
                    © {new Date().getFullYear()} {siteConfig.name}
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <ModeToggle />
          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {currentUser.photoURL ? (
                      <img 
                        src={currentUser.photoURL} 
                        alt={currentUser.displayName || 'User'} 
                        loading="lazy"
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{currentUser.displayName || 'User'}</p>
                    <p className="text-xs text-muted-foreground">{currentUser.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/progress" className="cursor-pointer">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Progress
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
})

