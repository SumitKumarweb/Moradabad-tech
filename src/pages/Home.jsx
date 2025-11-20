import { Link } from "react-router-dom"
import { lazy, Suspense, useMemo, useState, useEffect } from "react"
import { ArrowRight, Code, Terminal, BookOpen, Cpu, Globe, Zap, Brain, Target } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/articles"
import { ArticleCard } from "@/components/article-card"
import SEO from "@/components/SEO"
import StructuredData, { generateOrganizationSchema, generateWebSiteSchema } from "@/components/StructuredData"

// Lazy load heavy 3D component
const Hero3D = lazy(() => import('@/components/hero-3d').then(module => ({ default: module.Hero3D })))

function CodeFeatureCard({ feature, index }) {
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Stagger animation start based on index
    const delay = index * 150
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [index])

  useEffect(() => {
    if (!isTyping || !feature.code) return

    const totalLength = feature.code.length
    const preWrittenLength = Math.floor(totalLength * 0.3)
    const preWrittenCode = feature.code.slice(0, preWrittenLength)
    setDisplayedCode(preWrittenCode)

    let currentIndex = preWrittenLength
    let timeoutId

    const typeCode = () => {
      if (currentIndex < feature.code.length) {
        setDisplayedCode(feature.code.slice(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeCode, 20 + Math.random() * 15)
      } else {
        setIsTyping(false)
      }
    }

    const startDelay = setTimeout(() => {
      if (isTyping && currentIndex < feature.code.length) {
        typeCode()
      }
    }, 300)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      clearTimeout(startDelay)
    }
  }, [isTyping, feature.code])

  const highlightCode = (code) => {
    const lines = code.split('\n')
    const codeColors = {
      normal: 'oklch(0.9 0.02 0)',
      string: 'oklch(0.7 0.15 150)',
      keyword: 'oklch(0.7 0.2 250)',
      number: 'oklch(0.75 0.18 280)',
      operator: 'oklch(0.75 0.2 50)',
      comment: 'oklch(0.5 0.05 270)',
      lineNumber: 'oklch(0.4 0.05 270)',
    }

    return lines.map((line, lineIndex) => {
      const parts = []
      let currentPart = ''
      let inString = false
      let stringChar = ''

      for (let i = 0; i < line.length; i++) {
        const char = line[i]
        
        if ((char === '"' || char === "'" || char === '`') && (i === 0 || line[i - 1] !== '\\')) {
          if (!inString) {
            if (currentPart) {
              parts.push({ text: currentPart, type: 'normal' })
              currentPart = ''
            }
            inString = true
            stringChar = char
            currentPart = char
          } else if (char === stringChar) {
            currentPart += char
            parts.push({ text: currentPart, type: 'string' })
            currentPart = ''
            inString = false
            stringChar = ''
          } else {
            currentPart += char
          }
        } else {
          currentPart += char
        }
      }

      if (currentPart) {
        parts.push({ text: currentPart, type: inString ? 'string' : 'normal' })
      }

      const isComment = line.trim().startsWith('//') || line.trim().startsWith('<!--')

      return (
        <div key={lineIndex} className="flex items-start">
          <span className="mr-3 select-none font-mono text-xs" style={{ color: codeColors.lineNumber }}>
            {String(lineIndex + 1).padStart(2, '0')}
          </span>
          <span className="flex-1 font-mono text-xs leading-relaxed" style={{ color: codeColors.normal }}>
            {parts.map((part, partIndex) => {
              const isKeyword = /^(function|const|let|var|return|if|else|for|while|class|interface|def|import|from|export|default|async|await|try|catch|finally|html|head|body|title|meta|link|h1|p|div|button|onClick|useState|className)$/i.test(part.text.trim())
              const isNumber = /^\d+$/.test(part.text.trim())
              const isOperator = /^[+\-*/=<>!&|{}();:]+$/.test(part.text.trim())
              
              let color = codeColors.normal
              let fontWeight = 'normal'
              
              if (isComment) {
                color = codeColors.comment
              } else if (part.type === 'string') {
                color = codeColors.string
              } else if (isKeyword) {
                color = codeColors.keyword
                fontWeight = '600'
              } else if (isNumber) {
                color = codeColors.number
              } else if (isOperator) {
                color = codeColors.operator
              }
              
              return (
                <span key={partIndex} style={{ color, fontWeight }}>
                  {part.text}
                </span>
              )
            })}
            {lineIndex === lines.length - 1 && isTyping && code.length > 0 && (
              <span className="inline-block w-1.5 h-3.5 ml-0.5" style={{ backgroundColor: 'oklch(0.7 0.2 250)' }} />
            )}
          </span>
        </div>
      )
    })
  }

  const darkStyles = {
    container: {
      backgroundColor: 'oklch(0.11 0.02 260)',
      borderColor: 'oklch(0.22 0.04 270)',
    },
    header: {
      backgroundColor: 'oklch(0.15 0.025 270)',
      borderColor: 'oklch(0.22 0.04 270)',
    },
    content: {
      backgroundColor: 'oklch(0.08 0.015 260)',
    },
  }

  return (
    <div
      className={`group relative rounded-lg border overflow-hidden shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        backgroundColor: darkStyles.container.backgroundColor,
        borderColor: darkStyles.container.borderColor,
        borderWidth: '1px',
      }}
    >
      {/* Code Editor Header */}
      <div
        className="flex items-center justify-between px-3 py-2 border-b"
        style={{
          backgroundColor: darkStyles.header.backgroundColor,
          borderColor: darkStyles.header.borderColor,
        }}
      >
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-red-500/80" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/80" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2">
          <feature.icon className="h-3.5 w-3.5" style={{ color: 'oklch(0.7 0.2 250)' }} />
          <span className="text-xs font-mono" style={{ color: 'oklch(0.65 0.05 270)' }}>
            {feature.language}
          </span>
        </div>
      </div>

      {/* Code Content */}
      <div
        className="p-3 min-h-[200px] max-h-[250px] overflow-auto"
        style={{ backgroundColor: darkStyles.content.backgroundColor }}
      >
        <div className="space-y-0.5">
          {displayedCode ? highlightCode(displayedCode) : (
            <div className="flex items-start">
              <span className="mr-3 select-none font-mono text-xs" style={{ color: 'oklch(0.4 0.05 270)' }}>
                01
              </span>
              <span className="flex-1 font-mono text-xs">
                <span className="inline-block w-1.5 h-3.5 ml-0.5" style={{ backgroundColor: 'oklch(0.7 0.2 250)' }} />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Feature Info Footer */}
      <div
        className="px-4 py-3 border-t"
        style={{
          backgroundColor: darkStyles.header.backgroundColor,
          borderColor: darkStyles.header.borderColor,
        }}
      >
        <h3 className="text-sm font-semibold mb-1 group-hover:text-[oklch(0.7_0.2_250)] transition-colors" style={{ color: 'oklch(0.9 0.02 0)' }}>
          {feature.title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.65 0.05 270)' }}>
          {feature.desc}
        </p>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.2_250)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
    </div>
  )
}

export default function Home() {
  const featuredArticles = useMemo(() => articles.slice(0, 3), [])
  
  const features = useMemo(() => [
    {
      icon: BookOpen,
      title: "Comprehensive Guides",
      desc: "Deep dive into web technologies with our structured learning paths.",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Learn HTML</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to Coding</h1>
  <p>Start your journey today!</p>
</body>
</html>`
    },
    {
      icon: Terminal,
      title: "Browser IDE",
      desc: "Write and execute JavaScript, C++, and Python directly in your browser.",
      language: "javascript",
      code: `function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome, \${name}!\`;
}

const user = "Developer";
greet(user);`
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      desc: "Real-time code execution and syntax highlighting for rapid prototyping.",
      language: "css",
      code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 1rem;
}`
    },
    {
      icon: Globe,
      title: "Modern Stack",
      desc: "Learn the latest frameworks including React, and Tailwind CSS.",
      language: "jsx",
      code: `function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
    },
    {
      icon: Brain,
      title: "Interactive Quizzes",
      desc: "Test your knowledge with engaging quizzes after each article.",
      language: "javascript",
      code: `function quizQuestion(question, options) {
  return {
    question: question,
    options: options,
    checkAnswer: (answer) => {
      return answer === options[0];
    }
  };
}

const q1 = quizQuestion(
  "What is React?",
  ["A JavaScript library", "A database", "A server"]
);`
    },
    {
      icon: Code,
      title: "Clean Architecture",
      desc: "Learn best practices for scalable and maintainable codebases.",
      language: "typescript",
      code: `interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  async getUser(id: number): Promise<User> {
    // Implementation
    return { id, name: "", email: "" };
  }
}`
    }
  ], [])

  return (
    <>
      <SEO
        title="Home"
        description="Moradabads is your premier destination for full-stack development. Master HTML, CSS, JavaScript, React, and more with our interactive browser IDE, comprehensive articles, coding challenges, and quizzes."
        keywords="web development, programming, coding, HTML, CSS, JavaScript, React, full-stack development, learn to code, coding tutorials, programming education, web development courses, browser IDE, code editor, coding challenges, DSA problems, interview preparation"
        ogTitle="Moradabads - Master Modern Coding"
        ogDescription="Premier platform for full-stack development education. Learn HTML, CSS, JavaScript, React, and more with interactive tools and expert guides."
        ogImage="/websitelogo.png"
      />
      <StructuredData data={generateOrganizationSchema()} />
      <StructuredData data={generateWebSiteSchema()} />
      <div className="flex flex-col min-h-screen bg-background">
      <section className="relative w-full py-12 md:py-20 lg:py-32 xl:py-40 overflow-hidden border-b">
        <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8 z-10 max-w-7xl">
          <div className="grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  Master the Art of <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-purple-400 dark:drop-shadow-[0_0_15px_rgba(100,200,255,0.5)] animate-gradient">
                    Modern Coding
                  </span>
                </h1>
                <p className="mx-auto lg:mx-0 max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Moradabads is your premier destination for full-stack development. 
                  From HTML basics to advanced React patterns, we empower the next generation of developers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-8 text-sm md:text-base shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 dark:shadow-primary/40 dark:hover:shadow-primary/50">
                  <Link to="/articles">
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-8 text-sm md:text-base backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-300 hover:scale-105 dark:border-primary/30 dark:hover:border-primary/50">
                  <Link to="/editor">
                    Open Editor <Terminal className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/login" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Login
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/signup" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sign Up
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                  <span className="text-xs md:text-sm font-medium">Online Editor</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                  <span className="text-xs md:text-sm font-medium">Updated Daily</span>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden group order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              }>
                <Hero3D />
              </Suspense>
              <div className="absolute top-0 left-0 right-0 h-10 bg-muted/90 backdrop-blur-md border-b border-border/50 flex items-center px-4 gap-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/90 shadow-inner transition-transform hover:scale-110" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/90 shadow-inner transition-transform hover:scale-110" />
                  <div className="h-3 w-3 rounded-full bg-green-500/90 shadow-inner transition-transform hover:scale-110" />
                </div>
                <div className="ml-2 text-xs text-muted-foreground font-mono">preview.jsx</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 lg:py-24 bg-muted/30 border-b">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">Everything you need to master coding</h2>
            <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From learning fundamentals to acing interviews. Practice DSA, solve coding challenges, and build real projects all in one place.
            </p>
          </div>
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <CodeFeatureCard key={i} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 md:mb-12 gap-4 md:gap-6">
            <div className="space-y-2 text-center md:text-left w-full md:w-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Latest from the Blog</h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                Technical deep dives and tutorials.
              </p>
            </div>
            <Button asChild variant="ghost" className="group w-full md:w-auto hover:bg-muted transition-all duration-300">
              <Link to="/articles">
                View all articles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

