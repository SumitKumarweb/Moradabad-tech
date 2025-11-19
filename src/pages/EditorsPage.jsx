import { Link } from 'react-router-dom'
import { Code2, ArrowRight, FileCode, Terminal, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const editors = [
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Write and execute JavaScript code in your browser',
    route: '/editor/javascript',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'react',
    name: 'React JS',
    description: 'Build React components and test them instantly',
    route: '/editor/react',
    icon: '⚛️',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'angular',
    name: 'Angular',
    description: 'Create Angular components with TypeScript',
    route: '/editor/angular',
    icon: '🅰️',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'vue',
    name: 'Vue JS',
    description: 'Develop Vue.js applications with ease',
    route: '/editor/vue',
    icon: '💚',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'node',
    name: 'Node JS',
    description: 'Write server-side JavaScript code',
    route: '/editor/node',
    icon: '🟢',
    color: 'from-green-600 to-green-400',
  },
  {
    id: 'html',
    name: 'HTML/CSS/JS',
    description: 'Build web pages with HTML, CSS, and JavaScript',
    route: '/editor/html',
    icon: '🌐',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'cpp',
    name: 'C++',
    description: 'Write and test C++ programs',
    route: '/editor/cpp',
    icon: '🔷',
    color: 'from-blue-600 to-blue-400',
  },
  {
    id: 'c',
    name: 'C',
    description: 'Code in C programming language',
    route: '/editor/c',
    icon: '🔵',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'java',
    name: 'Java',
    description: 'Develop Java applications',
    route: '/editor/java',
    icon: '☕',
    color: 'from-orange-600 to-red-600',
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Write Python scripts and test them',
    route: '/editor/python',
    icon: '🐍',
    color: 'from-yellow-400 to-blue-500',
  },
]

export default function EditorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-6 lg:px-8 pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Code Editors</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="relative border-b border-border/40 bg-muted/30">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col items-center gap-4 md:gap-6 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              <Code2 className="h-3 w-3" />
              <span>Code Editors</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Choose Your Code Editor
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Select a programming language or framework to start coding. 
              Each editor is optimized for its specific language.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                <span>10+ Languages</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-3.5 w-3.5 text-yellow-500" />
                <span>Instant Execution</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Terminal className="h-3.5 w-3.5 text-blue-500" />
                <span>No Setup Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {editors.map((editor) => (
            <Link key={editor.id} to={editor.route}>
              <Card className="group relative overflow-hidden border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${editor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-4xl bg-gradient-to-br ${editor.color} bg-clip-text text-transparent`}>
                      {editor.icon}
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {editor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {editor.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Open Editor
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

