import { useParams, Link } from 'react-router-dom'
import { CodeEditor } from "@/components/code-editor"
import SEO from '@/components/SEO'
import StructuredData, { generateBreadcrumbSchema } from '@/components/StructuredData'

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
      <div className="flex-1 flex flex-col min-h-0 w-full">
        <CodeEditor initialLanguage={languageKey} />
      </div>
    </div>
    </>
  )
}

