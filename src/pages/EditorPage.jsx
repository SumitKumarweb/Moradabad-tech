import { useParams, Link } from 'react-router-dom'
import { CodeEditor } from "@/components/code-editor"
import SEO from '@/components/SEO'
import StructuredData, { generateBreadcrumbSchema } from '@/components/StructuredData'
import { Code2 } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'

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

  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: typeof window !== 'undefined' ? window.location.origin : '' },
    { name: "Code Editors", url: typeof window !== 'undefined' ? `${window.location.origin}/editors` : '' },
    { name: `${displayName} Editor`, url: typeof window !== 'undefined' ? window.location.href : '' }
  ]

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
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
    <div className="h-[calc(100vh-4rem)] bg-background flex flex-col overflow-hidden">
      <div className="relative border-b border-border/40 bg-muted/30">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 max-w-7xl">
          <Breadcrumb className="mb-2 md:mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/editors">Code Editors</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-[200px] truncate md:max-w-none">
                  {displayName} Editor
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col items-start gap-2 md:gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-2 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <Code2 className="h-3 w-3" />
              <span>{displayName}</span>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
              {displayName}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                Editor
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col min-h-0 w-full">
        <CodeEditor initialLanguage={languageKey} />
      </div>
    </div>
    </>
  )
}

