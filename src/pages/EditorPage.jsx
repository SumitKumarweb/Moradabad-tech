import { useParams } from 'react-router-dom'
import { CodeEditor } from "@/components/code-editor"
import { Code2, Zap, Terminal } from 'lucide-react'
import SEO from '@/components/SEO'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Link } from 'react-router-dom'

const languageNames = {
  javascript: 'JavaScript',
  js: 'JavaScript',
  python: 'Python',
  c: 'C',
  cpp: 'C++',
  cplusplus: 'C++',
  java: 'Java',
  html: 'HTML/CSS/JS',
  react: 'React JS',
  angular: 'Angular',
  vue: 'Vue JS',
  node: 'Node JS',
  nodejs: 'Node JS',
}

export default function EditorPage() {
  const { language } = useParams()
  
  // Normalize language parameter
  const normalizedLanguage = language?.toLowerCase() || 'javascript'
  const languageKey = normalizedLanguage === 'js' ? 'javascript' : 
                      normalizedLanguage === 'cplusplus' ? 'cpp' :
                      normalizedLanguage === 'nodejs' ? 'node' :
                      normalizedLanguage
  
  const displayName = languageNames[normalizedLanguage] || languageNames[languageKey] || 'Code Editor'

  // Generate keywords based on language
  const languageKeywords = {
    javascript: 'JavaScript editor, JS editor, JavaScript IDE, JavaScript playground, JavaScript code editor',
    react: 'React editor, React JS editor, React IDE, React playground, React code editor, JSX editor',
    python: 'Python editor, Python IDE, Python playground, Python code editor, Python online compiler',
    cpp: 'C++ editor, C++ IDE, C++ compiler, C++ code editor, C++ online compiler',
    java: 'Java editor, Java IDE, Java compiler, Java code editor, Java online compiler',
    html: 'HTML editor, CSS editor, JavaScript editor, web development editor, HTML CSS JS editor',
    angular: 'Angular editor, Angular IDE, Angular playground, TypeScript editor',
    vue: 'Vue editor, Vue JS editor, Vue IDE, Vue playground',
    node: 'Node.js editor, Node JS editor, Node IDE, server-side JavaScript editor'
  }

  const keywords = languageKeywords[languageKey] || `${displayName} editor, ${displayName} IDE, ${displayName} code editor, online ${displayName} compiler`

  return (
    <>
      <SEO
        title={`${displayName} Editor`}
        description={`Write, test, and execute ${displayName} code in your browser. No setup required—start coding instantly with our online ${displayName} editor.`}
        keywords={keywords}
        ogTitle={`${displayName} Editor - Browser IDE`}
        ogDescription={`Write and execute ${displayName} code directly in your browser. No installation required.`}
        ogImage="/websitelogo.png"
      />
      <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-6 max-w-7xl">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/editor">Code Editors</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{displayName} Editor</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="relative border-b border-border/40 bg-muted/30">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 max-w-7xl">
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <Code2 className="h-3 w-3" />
              <span>Browser IDE</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {displayName} Editor
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Write, test, and execute {displayName} code in your browser. 
              No setup required—start coding instantly.
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

      <div className="flex-1 container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 flex flex-col min-h-0 max-w-7xl">
        <CodeEditor initialLanguage={languageKey} />
      </div>
    </div>
    </>
  )
}

