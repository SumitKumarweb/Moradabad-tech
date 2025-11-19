import * as React from "react"
import { memo, useCallback, useMemo } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, Code2, User, LogOut } from 'lucide-react'

import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex items-center">
          <Link to="/" className="mr-6 flex items-center gap-2 transition-opacity hover:opacity-80">
            <img 
              src="/websitelogo.png" 
              alt={siteConfig.name}
              className="h-12 md:h-[100px] w-auto object-contain"
            />
            <span className="hidden font-bold text-lg sm:inline-block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "transition-all hover:text-foreground/80 relative py-1",
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
        <div className="flex md:hidden items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/websitelogo.png" 
              alt={siteConfig.name}
              className="h-12 md:h-[100px] w-auto object-contain"
            />
            <span className="font-bold text-base">{siteConfig.name}</span>
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="ml-auto mr-2 px-2 text-base hover:bg-muted focus-visible:bg-transparent focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 w-[280px] sm:w-[350px]">
            <Link
              to="/"
              className="flex items-center gap-2 mb-8"
              onClick={() => setIsOpen(false)}
            >
              <img 
                src="/websitelogo.png" 
                alt={siteConfig.name}
                className="h-8 w-auto object-contain"
              />
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </Link>
            <div className="flex flex-col gap-4 pr-6">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary py-2 px-3 rounded-md",
                    pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              {currentUser && (
                <>
                  <Link
                    to="/profile"
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary py-2 px-3 rounded-md",
                      pathname === "/profile" ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-muted"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsOpen(false)
                    }}
                    className="text-base font-medium transition-colors hover:text-destructive text-muted-foreground hover:bg-muted py-2 px-3 rounded-md text-left"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-end gap-2">
          <ModeToggle />
          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
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
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="outline" size="sm">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
})

