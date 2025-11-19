import { siteConfig } from "@/lib/site-config"
import { Code2, Github, Twitter, Linkedin } from 'lucide-react'
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 py-12 md:py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Empowering developers with comprehensive tutorials and a powerful browser-based IDE.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Learning</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/articles" className="hover:text-primary transition-colors">Articles</Link></li>
              <li><Link to="/editor" className="hover:text-primary transition-colors">Code Editor</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Tutorials</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Community</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Connect</h3>
            <div className="flex items-center gap-3">
              <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="h-9 w-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/40 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Moradabad Tech. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

