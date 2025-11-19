import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Code2 } from 'lucide-react'

import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const location = useLocation()
  const pathname = location.pathname
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex items-center">
          <Link to="/" className="mr-6 flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="hidden font-bold text-lg sm:inline-block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            {siteConfig.mainNav.map((item) => (
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
                  <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Code2 className="h-5 w-5 text-white" />
            </div>
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
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </Link>
            <div className="flex flex-col gap-4 pr-6">
              {siteConfig.mainNav.map((item) => (
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
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-end gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

