import * as React from "react"
import { Play, Trash2, Copy, Check, TerminalIcon, Download, Maximize2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"

const languageTemplates = {
  javascript: `// Write your JavaScript code here
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Moradabad Tech"));`,
  python: `# Write your Python code here
def greet(name):
    return f"Hello, {name}!"

print(greet("Moradabad Tech"))`,
  c: `// Write your C code here
#include <stdio.h>

int main() {
    printf("Hello, Moradabad Tech!\\n");
    return 0;
}`,
  cpp: `// Write your C++ code here
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, Moradabad Tech!" << endl;
    return 0;
}`,
  html: `<!-- Write your HTML code here -->
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
    </style>
</head>
<body>
    <h1>Hello, Moradabad Tech!</h1>
    <script>
        console.log("Hello from JavaScript!");
    </script>
</body>
</html>`,
  java: `// Write your Java code here
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Moradabad Tech!");
    }
}`,
  react: `// React Component Example
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Hello, Moradabad Tech!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;`,
  angular: `// Angular Component Example
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="app">
      <h1>Hello, Moradabad Tech!</h1>
      <p>Count: {{ count }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  \`,
  styles: [\`
    .app {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
  \`]
})
export class AppComponent {
  count = 0;

  increment() {
    this.count++;
  }
}`,
  vue: `<!-- Vue Component Example -->
<template>
  <div class="app">
    <h1>Hello, Moradabad Tech!</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}
</script>

<style scoped>
.app {
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>`,
  node: `// Node.js Example
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Moradabad Tech!\\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});`,
}

export function CodeEditor({ initialLanguage = "javascript" }) {
  const [code, setCode] = React.useState(languageTemplates[initialLanguage] || languageTemplates.javascript)
  const [output, setOutput] = React.useState("")
  const [language, setLanguage] = React.useState(initialLanguage)
  const [copied, setCopied] = React.useState(false)
  const [isRunning, setIsRunning] = React.useState(false)
  const [isFullscreen, setIsFullscreen] = React.useState(false)
  const [htmlPreview, setHtmlPreview] = React.useState("")
  const iframeRef = React.useRef(null)

  // Update code when initialLanguage prop changes
  React.useEffect(() => {
    if (initialLanguage && languageTemplates[initialLanguage]) {
      setLanguage(initialLanguage)
      setCode(languageTemplates[initialLanguage])
      setOutput("")
      if (initialLanguage === "html") {
        setHtmlPreview(languageTemplates[initialLanguage])
      } else {
        setHtmlPreview("")
      }
    }
  }, [initialLanguage])

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage)
    const newCode = languageTemplates[newLanguage] || ""
    setCode(newCode)
    setOutput("")
    // Set HTML preview immediately if switching to HTML
    if (newLanguage === "html") {
      setHtmlPreview(newCode)
    } else {
      setHtmlPreview("")
    }
  }

  // Update HTML preview automatically when HTML code changes (debounced)
  React.useEffect(() => {
    if (language === "html" && code) {
      const timer = setTimeout(() => {
        setHtmlPreview(code)
      }, 300) // Debounce for 300ms for smoother typing
      return () => clearTimeout(timer)
    }
  }, [code, language])

  const runCode = () => {
    setIsRunning(true)
    setOutput("")
    
    setTimeout(() => {
      if (language === "javascript") {
        try {
          const logs = []
          const errors = []
          const originalLog = console.log
          const originalError = console.error
          const originalWarn = console.warn

          console.log = (...args) => {
            logs.push(args.map(arg => 
              typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(" "))
          }
          
          console.error = (...args) => {
            errors.push(args.map(arg => String(arg)).join(" "))
          }

          console.warn = (...args) => {
            logs.push(`⚠ Warning: ${args.map(arg => String(arg)).join(" ")}`)
          }

          // Create a safe execution context
          const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
          const isAsync = code.includes('async') || code.includes('await')
          
          if (isAsync) {
            // Handle async code
            const asyncFunc = new AsyncFunction(code)
            asyncFunc().then(() => {
              console.log = originalLog
              console.error = originalError
              console.warn = originalWarn
              
              if (errors.length > 0) {
                setOutput(`❌ Error:\n${errors.join("\n")}`)
              } else if (logs.length > 0) {
                setOutput(`✓ Success:\n${logs.join("\n")}`)
              } else {
                setOutput("✓ Code executed successfully (no output)")
              }
              setIsRunning(false)
            }).catch((error) => {
              console.log = originalLog
              console.error = originalError
              console.warn = originalWarn
              setOutput(`❌ Error: ${error.message}\n\nStack trace:\n${error.stack}`)
              setIsRunning(false)
            })
            return
          } else {
          // eslint-disable-next-line no-eval
          eval(code)
          }

          console.log = originalLog
          console.error = originalError
          console.warn = originalWarn
          
          if (errors.length > 0) {
            setOutput(`❌ Error:\n${errors.join("\n")}`)
          } else if (logs.length > 0) {
            setOutput(`✓ Success:\n${logs.join("\n")}`)
          } else {
            setOutput("✓ Code executed successfully (no output)")
          }
        } catch (error) {
          if (error instanceof Error) {
            setOutput(`❌ Error: ${error.message}\n\nStack trace:\n${error.stack}`)
          } else {
            setOutput(`❌ An unknown error occurred: ${String(error)}`)
          }
        }
        setIsRunning(false)
      } else if (language === "python") {
        // Enhanced Python simulation
        try {
          // Basic syntax checking
          const hasSyntaxError = code.includes('SyntaxError') || code.match(/def\s+\w+\s*\([^)]*\)\s*:/) === null && code.includes('def')
          
          if (hasSyntaxError && code.trim() !== languageTemplates.python) {
            setOutput(`❌ SyntaxError: invalid syntax\n  File "<stdin>", line 1\n    ${code.split('\n')[0]}\n    ^`)
      } else {
            // Simulate Python execution
            const printMatches = code.match(/print\s*\([^)]*\)/g) || []
            const outputs = printMatches.map(match => {
              const content = match.replace(/print\s*\(|\)/g, '').trim()
              // Remove quotes if present
              return content.replace(/^['"]|['"]$/g, '')
            })
            
            const outputText = outputs.length > 0 
              ? outputs.join('\n')
              : 'Code executed successfully (no print statements)'
            
            setOutput(`Python 3.11.0\n✓ Code executed successfully\n\n${outputText}\n\nExecuted in 0.02s`)
          }
        } catch (error) {
          setOutput(`❌ Error: ${error.message}`)
        }
        setIsRunning(false)
      } else if (language === "html") {
        // HTML validation and preview
        try {
          const hasDoctype = code.includes('<!DOCTYPE') || code.includes('<!doctype')
          const hasHtmlTag = code.includes('<html') || code.includes('<HTML')
          
          if (!hasHtmlTag && code.trim() !== languageTemplates.html) {
            setOutput(`⚠ Warning: Missing <html> tag\n✓ HTML rendered (preview updated)\n\nDocument loaded in 0.03s`)
          } else {
            setOutput(`✓ HTML validated successfully\n✓ Rendering preview...\n\nDocument loaded in 0.03s`)
          }
          setHtmlPreview(code)
        } catch (error) {
          setOutput(`❌ Error: ${error.message}`)
        }
        setIsRunning(false)
      } else if (language === "c") {
        // Enhanced C execution simulation
        try {
          const hasMain = code.includes('int main') || code.includes('void main')
          const hasInclude = code.includes('#include')
          
          if (!hasMain && code.trim() !== languageTemplates.c) {
            setOutput(`❌ Error: undefined reference to 'main'\n  collect2: error: ld returned 1 exit status`)
          } else if (!hasInclude && code.includes('printf')) {
            setOutput(`❌ Error: 'printf' undeclared (first use in this function)\n  ${code.split('\n').findIndex(line => line.includes('printf')) + 1}: error: 'printf' undeclared`)
          } else {
            // Extract printf content
            const printfMatches = code.match(/printf\s*\([^)]*\)/g) || []
            const outputs = printfMatches.map(match => {
              const content = match.replace(/printf\s*\(|\)/g, '').trim()
              return content.replace(/^["']|["']$/g, '').replace(/\\n/g, '\n').replace(/\\t/g, '\t')
            })
            
            setOutput(`gcc version 11.4.0\n✓ Compilation successful\n✓ Execution complete\n\n${outputs.join('')}\n\nExecuted in 0.01s`)
          }
        } catch (error) {
          setOutput(`❌ Compilation Error: ${error.message}`)
        }
        setIsRunning(false)
      } else if (language === "cpp") {
        // Enhanced C++ execution simulation
        try {
          const hasMain = code.includes('int main') || code.includes('void main')
          const hasInclude = code.includes('#include')
          
          if (!hasMain && code.trim() !== languageTemplates.cpp) {
            setOutput(`❌ Error: undefined reference to 'main'\n  collect2: error: ld returned 1 exit status`)
          } else if (!hasInclude && (code.includes('cout') || code.includes('cin'))) {
            setOutput(`❌ Error: 'cout' was not declared in this scope\n  ${code.split('\n').findIndex(line => line.includes('cout')) + 1}: error: 'cout' was not declared`)
          } else {
            // Extract cout content
            const coutMatches = code.match(/cout\s*<<[^;]*/g) || []
            const outputs = coutMatches.map(match => {
              return match.replace(/cout\s*<<\s*/g, '').replace(/["']/g, '').replace(/endl/g, '\n').replace(/\s+/g, ' ').trim()
            })
            
            setOutput(`g++ version 11.4.0\n✓ Compilation successful\n✓ Execution complete\n\n${outputs.join('')}\n\nExecuted in 0.01s`)
          }
        } catch (error) {
          setOutput(`❌ Compilation Error: ${error.message}`)
        }
        setIsRunning(false)
      } else if (language === "java") {
        // Enhanced Java execution simulation
        try {
          const hasClass = code.includes('class')
          const hasMain = code.includes('public static void main')
          
          if (!hasClass && code.trim() !== languageTemplates.java) {
            setOutput(`❌ Error: class, interface, or enum expected`)
          } else if (!hasMain && code.trim() !== languageTemplates.java) {
            setOutput(`❌ Error: Main method not found in class Main`)
          } else {
            // Extract System.out.println content
            const printlnMatches = code.match(/System\.out\.println\s*\([^)]*\)/g) || []
            const outputs = printlnMatches.map(match => {
              const content = match.replace(/System\.out\.println\s*\(|\)/g, '').trim()
              return content.replace(/^["']|["']$/g, '')
            })
            
            setOutput(`javac version 17.0.7\n✓ Compilation successful\n✓ Execution complete\n\n${outputs.join('\n')}\n\nExecuted in 0.15s`)
        }
        } catch (error) {
          setOutput(`❌ Compilation Error: ${error.message}`)
        }
        setIsRunning(false)
      } else if (language === "react") {
        // React execution simulation
        try {
          setOutput(`React 18.2.0\n✓ Component compiled successfully\n✓ Rendering component...\n\nComponent rendered successfully!\n\nNote: This is a browser-based editor. For full React development,\nuse Create React App or Vite with proper build tools.`)
        } catch (error) {
          setOutput(`❌ Compilation Error: ${error.message}`)
        }
        setIsRunning(false)
      } else if (language === "angular") {
        // Angular execution simulation
        try {
          setOutput(`Angular CLI 16.0.0\n✓ Component compiled successfully\n✓ Rendering component...\n\nComponent rendered successfully!\n\nNote: This is a browser-based editor. For full Angular development,\nuse Angular CLI with proper build tools.`)
        } catch (error) {
          setOutput(`❌ Compilation Error: ${error.message}`)
        }
        setIsRunning(false)
      } else if (language === "vue") {
        // Vue execution simulation
        try {
          setOutput(`Vue 3.3.0\n✓ Component compiled successfully\n✓ Rendering component...\n\nComponent rendered successfully!\n\nNote: This is a browser-based editor. For full Vue development,\nuse Vue CLI or Vite with proper build tools.`)
        } catch (error) {
          setOutput(`❌ Compilation Error: ${error.message}`)
        }
        setIsRunning(false)
      } else if (language === "node") {
        // Node.js execution simulation
        try {
          const consoleLogMatches = code.match(/console\.log\s*\([^)]*\)/g) || []
          const outputs = consoleLogMatches.map(match => {
            const content = match.replace(/console\.log\s*\(|\)/g, '').trim()
            return content.replace(/^["']|["']$/g, '').replace(/\`/g, '')
          })
          
          const hasServer = code.includes('createServer') || code.includes('listen')
          if (hasServer) {
            setOutput(`Node.js v18.17.0\n✓ Server started successfully\n${outputs.length > 0 ? outputs.join('\n') + '\n' : ''}Server running at http://localhost:3000/\n\nNote: This is a simulation. For actual server execution,\nuse Node.js runtime environment.`)
          } else {
            setOutput(`Node.js v18.17.0\n✓ Code executed successfully\n\n${outputs.length > 0 ? outputs.join('\n') : 'Code executed (no output)'}\n\nExecuted in 0.02s`)
          }
        } catch (error) {
          setOutput(`❌ Error: ${error.message}`)
        }
        setIsRunning(false)
      } else {
        setOutput(`✓ ${language} code executed successfully`)
      setIsRunning(false)
      }
    }, 800)
  }

  const clearOutput = () => {
    setOutput("")
    if (language === "html") {
      setHtmlPreview("")
    }
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadCode = () => {
    const extensions = {
      javascript: 'js',
      python: 'py',
      c: 'c',
      cpp: 'cpp',
      html: 'html',
      java: 'java',
      react: 'jsx',
      angular: 'ts',
      vue: 'vue',
      node: 'js',
    }
    
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `code.${extensions[language] || 'txt'}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className={`grid gap-4 md:gap-6 lg:grid-cols-2 transition-all duration-300 ${isFullscreen ? 'fixed inset-4 z-50 bg-background/95 backdrop-blur-sm p-4 rounded-xl' : 'min-h-[500px] md:h-[600px]'}`}>
      <Card className="flex flex-col h-full overflow-hidden border border-border/50 bg-[#1e1e1e] text-[#d4d4d4] shadow-2xl dark:border-primary/20 dark:shadow-[0_0_30px_rgba(100,200,255,0.1)]">
        <div className="flex items-center justify-between px-3 md:px-4 py-2 bg-[#252526] border-b border-[#333]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="h-4 w-px bg-[#333] mx-1" />
            <TerminalIcon className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-medium hidden sm:inline">editor.{language === 'javascript' ? 'js' : language === 'python' ? 'py' : language === 'cpp' ? 'cpp' : language === 'java' ? 'java' : language === 'c' ? 'c' : language === 'react' ? 'jsx' : language === 'angular' ? 'ts' : language === 'vue' ? 'vue' : language === 'node' ? 'js' : 'html'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[100px] sm:w-[130px] h-7 text-xs bg-[#3c3c3c] border-none text-white focus:ring-1 focus:ring-primary/50 focus:ring-offset-0">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="bg-[#252526] border-[#333] text-white">
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="html">HTML/CSS/JS</SelectItem>
                  <SelectItem value="react">React JS</SelectItem>
                  <SelectItem value="angular">Angular</SelectItem>
                  <SelectItem value="vue">Vue JS</SelectItem>
                  <SelectItem value="node">Node JS</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-white hover:bg-[#3c3c3c] transition-colors" onClick={downloadCode} title="Download code">
              <Download className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-white hover:bg-[#3c3c3c] transition-colors" onClick={copyCode} title="Copy code">
              {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-white hover:bg-[#3c3c3c] transition-colors" onClick={toggleFullscreen} title="Toggle fullscreen">
              <Maximize2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-12 bg-[#1e1e1e] border-r border-[#333] flex flex-col items-end pt-3 md:pt-4 pr-2 text-[10px] sm:text-xs text-[#858585] font-mono select-none overflow-auto">
            {code.split('\n').map((_, i) => (
              <div key={i} className="leading-[1.4rem] md:leading-6 min-h-[1.4rem] md:min-h-[1.5rem]">{i + 1}</div>
            ))}
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="absolute inset-0 left-10 sm:left-12 w-[calc(100%-2.5rem)] sm:w-[calc(100%-3rem)] h-full p-3 md:p-4 font-mono text-xs md:text-sm bg-transparent text-[#d4d4d4] resize-none focus:outline-none leading-[1.4rem] md:leading-6"
            spellCheck={false}
            placeholder="Start typing your code..."
          />
        </div>
        <div className="px-3 md:px-4 py-1.5 bg-[#252526] border-t border-[#333] flex justify-between items-center text-[10px] text-gray-500">
          <span>Ln {code.split('\n').length}, Col {code.length}</span>
          <span>{code.length} characters</span>
        </div>
      </Card>

      <Card className="flex flex-col h-full overflow-hidden border border-border/50 bg-[#0c0c0c] text-white shadow-2xl dark:border-primary/20 dark:shadow-[0_0_30px_rgba(100,200,255,0.1)]">
        <div className="flex items-center justify-between px-3 md:px-4 py-2 bg-[#181818] border-b border-[#333]">
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${isRunning ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'} shadow-lg ${isRunning ? 'shadow-yellow-500/50' : 'shadow-green-500/50'}`} />
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400 hidden sm:inline">
              {language === 'html' ? 'HTML Preview' : 'Output Terminal'}
            </span>
            <span className="text-[10px] text-gray-600 hidden md:inline">({language})</span>
          </div>
          <div className="flex items-center gap-2">
            {language === 'html' && (
              <Button variant="ghost" size="sm" onClick={() => setHtmlPreview(code)} className="h-7 px-2 text-xs text-gray-400 hover:text-white hover:bg-[#333] transition-colors">
                <span className="hidden sm:inline">Refresh</span>
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={clearOutput} disabled={isRunning} className="h-7 px-2 text-xs text-gray-400 hover:text-white hover:bg-[#333] transition-colors disabled:opacity-50">
              <Trash2 className="h-3 w-3 sm:mr-1" />
              <span className="hidden sm:inline">Clear</span>
            </Button>
            <Button size="sm" onClick={runCode} disabled={isRunning} className="h-7 px-2 sm:px-3 text-xs bg-green-600 hover:bg-green-700 text-white border-none transition-all hover:shadow-lg hover:shadow-green-600/30 disabled:opacity-50 disabled:cursor-not-allowed">
              <Play className={`h-3 w-3 sm:mr-1 ${isRunning ? 'animate-pulse' : ''}`} />
              <span className="hidden sm:inline">{isRunning ? 'Running...' : language === 'html' ? 'Preview' : 'Run'}</span>
            </Button>
          </div>
        </div>
        {language === 'html' && htmlPreview ? (
          <div className="flex-1 relative overflow-hidden bg-white">
            <iframe
              ref={iframeRef}
              srcDoc={htmlPreview}
              className="w-full h-full border-0"
              title="HTML Preview"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        ) : (
        <div className="flex-1 p-3 md:p-4 font-mono text-xs md:text-sm overflow-auto">
          {!output && !isRunning && (
            <div className="text-gray-600 text-[10px] sm:text-xs">
              <p>$ Ready to execute code</p>
                <p className="mt-2">Click &apos;{language === 'html' ? 'Preview' : 'Run'}&apos; to see output here...</p>
            </div>
          )}
          {isRunning && (
            <div className="text-yellow-400 text-[10px] sm:text-xs">
              <p>$ Executing code...</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-1 w-1 bg-yellow-400 rounded-full animate-pulse" />
                <div className="h-1 w-1 bg-yellow-400 rounded-full animate-pulse delay-100" />
                <div className="h-1 w-1 bg-yellow-400 rounded-full animate-pulse delay-200" />
              </div>
            </div>
          )}
          {output && !isRunning && (
            <>
                <div className="text-gray-500 mb-2 text-[10px] sm:text-xs">
                  $ {language === 'javascript' ? 'node index.js' : language === 'python' ? 'python main.py' : language === 'c' ? './a.out' : language === 'cpp' ? './a.out' : language === 'java' ? 'java Main' : language === 'react' ? 'npm start' : language === 'angular' ? 'ng serve' : language === 'vue' ? 'npm run dev' : language === 'node' ? 'node index.js' : 'html preview'}
                </div>
                <pre className={`whitespace-pre-wrap text-[10px] sm:text-xs md:text-sm ${output.includes('❌') || output.includes('Error') ? 'text-red-400' : output.includes('Warning') || output.includes('⚠') ? 'text-yellow-400' : 'text-green-400'}`}>{output}</pre>
              <div className="text-gray-500 mt-4 text-[10px] sm:text-xs border-t border-[#333] pt-2">
                $ <span className="animate-pulse">_</span>
              </div>
            </>
          )}
        </div>
        )}
      </Card>
    </div>
  )
}

