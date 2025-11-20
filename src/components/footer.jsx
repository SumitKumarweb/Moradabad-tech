import { siteConfig } from "@/lib/site-config"
import { Code2, Github, Instagram, Linkedin } from 'lucide-react'
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid gap-8 py-12 md:py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1 xl:col-span-2">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <img 
                src="/websitelogo.png" 
                alt={siteConfig.name}
                className="h-6 w-auto object-contain max-h-16 max-w-40"
              />
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs text-center sm:text-left">
              Empowering developers with comprehensive tutorials and a powerful browser-based IDE.
            </p>
          </div>
          
          {/* Learning Section */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="font-semibold text-sm">Learning</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/articles" className="hover:text-primary transition-colors inline-block">Articles</Link></li>
              <li><Link to="/editor" className="hover:text-primary transition-colors inline-block">Code Editor</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors inline-block">Tutorials</Link></li>
            </ul>
          </div>
          
          {/* Company Section */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="font-semibold text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors inline-block">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors inline-block">Contact Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors inline-block">Careers</Link></li>
            </ul>
          </div>
          
          {/* Legal Section */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="font-semibold text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors inline-block">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors inline-block">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          {/* Connect Section */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="font-semibold text-sm">Connect</h3>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="h-9 w-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg">
                <Github className="h-4 w-4" />
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="h-9 w-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/sumit-kumar-06404221b/" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border/40 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Moradabads. All rights reserved.
            </p>
            <div className="flex items-center gap-4 justify-center">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

