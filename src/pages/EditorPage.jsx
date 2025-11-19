import { CodeEditor } from "@/components/code-editor"
import { Code2, Zap, Terminal } from 'lucide-react'

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border/40 bg-muted/30">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <Code2 className="h-3 w-3" />
              <span>Browser IDE</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Code Editor
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Write, test, and execute code in JavaScript, C, C++, Python, and HTML. 
              No setup required—start coding instantly in your browser.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                <span>Real-time execution</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-3.5 w-3.5 text-yellow-500" />
                <span>Instant feedback</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Terminal className="h-3.5 w-3.5 text-blue-500" />
                <span>Multi-language support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <CodeEditor />
      </div>
    </div>
  )
}

