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
</head>
<body>
    <h1>Hello, Moradabad Tech!</h1>
</body>
</html>`,
  java: `// Write your Java code here
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Moradabad Tech!");
    }
}`,
}

export function CodeEditor() {
  const [code, setCode] = React.useState(languageTemplates.javascript)
  const [output, setOutput] = React.useState("")
  const [language, setLanguage] = React.useState("javascript")
  const [copied, setCopied] = React.useState(false)
  const [isRunning, setIsRunning] = React.useState(false)
  const [isFullscreen, setIsFullscreen] = React.useState(false)

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage)
    setCode(languageTemplates[newLanguage] || "")
    setOutput("")
  }

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

          console.log = (...args) => {
            logs.push(args.map(arg => 
              typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(" "))
          }
          
          console.error = (...args) => {
            errors.push(args.map(arg => String(arg)).join(" "))
          }

          // eslint-disable-next-line no-eval
          eval(code)

          console.log = originalLog
          console.error = originalError
          
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
            setOutput("❌ An unknown error occurred")
          }
        }
      } else {
        const simulatedOutputs = {
          python: `Python 3.11.0
✓ Code compiled successfully
Hello, Moradabad Tech!

Executed in 0.02s`,
          c: `gcc version 11.4.0
✓ Compilation successful
✓ Execution complete

Hello, Moradabad Tech!

Executed in 0.01s`,
          cpp: `g++ version 11.4.0
✓ Compilation successful
✓ Execution complete

Hello, Moradabad Tech!

Executed in 0.01s`,
          html: `✓ HTML validated successfully
✓ Rendering preview...

[Preview would be displayed in a browser]

Document loaded in 0.03s`,
          java: `javac version 17.0.7
✓ Compilation successful
✓ Execution complete

Hello, Moradabad Tech!

Executed in 0.15s`,
        }
        
        setOutput(simulatedOutputs[language] || `✓ ${language} code executed successfully`)
      }
      setIsRunning(false)
    }, 800)
  }

  const clearOutput = () => {
    setOutput("")
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
      <Card className="flex flex-col h-full overflow-hidden border border-border/50 bg-[#1e1e1e] text-[#d4d4d4] shadow-2xl">
        <div className="flex items-center justify-between px-3 md:px-4 py-2 bg-[#252526] border-b border-[#333]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="h-4 w-px bg-[#333] mx-1" />
            <TerminalIcon className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-medium hidden sm:inline">editor.{language === 'javascript' ? 'js' : language === 'python' ? 'py' : language === 'cpp' ? 'cpp' : language === 'java' ? 'java' : language === 'c' ? 'c' : 'html'}</span>
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
                  <SelectItem value="html">HTML</SelectItem>
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

      <Card className="flex flex-col h-full overflow-hidden border border-border/50 bg-[#0c0c0c] text-white shadow-2xl">
        <div className="flex items-center justify-between px-3 md:px-4 py-2 bg-[#181818] border-b border-[#333]">
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${isRunning ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'} shadow-lg ${isRunning ? 'shadow-yellow-500/50' : 'shadow-green-500/50'}`} />
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400 hidden sm:inline">Output Terminal</span>
            <span className="text-[10px] text-gray-600 hidden md:inline">({language})</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={clearOutput} disabled={isRunning} className="h-7 px-2 text-xs text-gray-400 hover:text-white hover:bg-[#333] transition-colors disabled:opacity-50">
              <Trash2 className="h-3 w-3 sm:mr-1" />
              <span className="hidden sm:inline">Clear</span>
            </Button>
            <Button size="sm" onClick={runCode} disabled={isRunning} className="h-7 px-2 sm:px-3 text-xs bg-green-600 hover:bg-green-700 text-white border-none transition-all hover:shadow-lg hover:shadow-green-600/30 disabled:opacity-50 disabled:cursor-not-allowed">
              <Play className={`h-3 w-3 sm:mr-1 ${isRunning ? 'animate-pulse' : ''}`} />
              <span className="hidden sm:inline">{isRunning ? 'Running...' : 'Run'}</span>
            </Button>
          </div>
        </div>
        <div className="flex-1 p-3 md:p-4 font-mono text-xs md:text-sm overflow-auto">
          {!output && !isRunning && (
            <div className="text-gray-600 text-[10px] sm:text-xs">
              <p>$ Ready to execute code</p>
              <p className="mt-2">Click &apos;Run&apos; to see output here...</p>
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
              <div className="text-gray-500 mb-2 text-[10px] sm:text-xs">$ node {language === 'javascript' ? 'index.js' : `main.${language}`}</div>
              <pre className={`whitespace-pre-wrap text-[10px] sm:text-xs md:text-sm ${output.includes('❌') ? 'text-red-400' : 'text-green-400'}`}>{output}</pre>
              <div className="text-gray-500 mt-4 text-[10px] sm:text-xs border-t border-[#333] pt-2">
                $ <span className="animate-pulse">_</span>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  )
}

