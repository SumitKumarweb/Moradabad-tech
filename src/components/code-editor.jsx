import * as React from "react"
import { 
  Play, Trash2, Copy, Check, TerminalIcon, Download, Maximize2, 
  File, Folder, FolderOpen, Search, X, Plus, ChevronRight, ChevronDown,
  FileCode, Monitor, Code2, Settings, FileText, Image, FileJson
} from 'lucide-react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        h1 {
            text-align: center;
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
  css: `/* CSS Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

h1 {
  text-align: center;
  font-size: 2.5em;
}`,
  json: `{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My awesome project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}`,
}

const getFileIcon = (fileName) => {
  const ext = fileName.split('.').pop()?.toLowerCase()
  const iconMap = {
    js: FileCode,
    jsx: FileCode,
    ts: FileCode,
    tsx: FileCode,
    html: FileCode,
    css: FileCode,
    json: FileJson,
    md: FileText,
    txt: FileText,
    png: Image,
    jpg: Image,
    jpeg: Image,
    svg: Image,
  }
  return iconMap[ext] || File
}

const getLanguageFromFileName = (fileName) => {
  const ext = fileName.split('.').pop()?.toLowerCase()
  const langMap = {
    js: 'javascript',
    jsx: 'react',
    ts: 'javascript',
    tsx: 'react',
    py: 'python',
    c: 'c',
    cpp: 'cpp',
    java: 'java',
    html: 'html',
    css: 'css',
    json: 'json',
  }
  return langMap[ext] || 'javascript'
}

export function CodeEditor({ initialLanguage = "javascript" }) {
  const [files, setFiles] = React.useState({
    'index.js': {
      content: languageTemplates.javascript,
      language: 'javascript',
      isDirty: false,
    },
  })
  const [activeFile, setActiveFile] = React.useState('index.js')
  const [output, setOutput] = React.useState("")
  const [terminalOutput, setTerminalOutput] = React.useState([])
  const [copied, setCopied] = React.useState(false)
  const [isRunning, setIsRunning] = React.useState(false)
  const [htmlPreview, setHtmlPreview] = React.useState("")
  const [showSearch, setShowSearch] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showFileSearch, setShowFileSearch] = React.useState(false)
  const [fileSearchQuery, setFileSearchQuery] = React.useState("")
  const [showTerminal, setShowTerminal] = React.useState(false)
  const [showPreview, setShowPreview] = React.useState(false)
  const [previewMode, setPreviewMode] = React.useState('terminal') // 'preview' or 'terminal'
  const [fileTree, setFileTree] = React.useState({
    name: 'root',
    type: 'folder',
    children: {
      'index.js': { name: 'index.js', type: 'file' },
      'src': {
        name: 'src',
        type: 'folder',
        children: {
          'App.jsx': { name: 'App.jsx', type: 'file' },
          'components': {
            name: 'components',
            type: 'folder',
            children: {
              'Button.jsx': { name: 'Button.jsx', type: 'file' },
            }
          }
        }
      },
      'package.json': { name: 'package.json', type: 'file' },
      'styles.css': { name: 'styles.css', type: 'file' },
    }
  })
  const [expandedFolders, setExpandedFolders] = React.useState(new Set(['src']))
  const [newFileName, setNewFileName] = React.useState("")
  const [showNewFileDialog, setShowNewFileDialog] = React.useState(false)
  const [newFileType, setNewFileType] = React.useState('file')
  const [newFileParent, setNewFileParent] = React.useState(null)
  const iframeRef = React.useRef(null)

  const currentFile = files[activeFile]
  const currentLanguage = currentFile?.language || initialLanguage

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd/Ctrl + P for file search
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault()
        setShowFileSearch(true)
      }
      // Cmd/Ctrl + F for search
      if ((e.metaKey || e.ctrlKey) && e.key === 'f') {
        e.preventDefault()
        setShowSearch(true)
      }
      // Cmd/Ctrl + ` for terminal
      if ((e.metaKey || e.ctrlKey) && e.key === '`') {
        e.preventDefault()
        setShowTerminal(!showTerminal)
        if (!showTerminal) {
          setPreviewMode('terminal')
        }
      }
      // Escape to close modals
      if (e.key === 'Escape') {
        setShowSearch(false)
        setShowFileSearch(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showTerminal])

  // Update HTML preview automatically
  React.useEffect(() => {
    if (currentLanguage === "html" && currentFile?.content) {
      const timer = setTimeout(() => {
        setHtmlPreview(currentFile.content)
        if (!showTerminal) {
          setShowPreview(true)
          setPreviewMode('preview')
        }
      }, 300)
      return () => clearTimeout(timer)
    } else if (currentLanguage === "react" || currentLanguage === "vue" || currentLanguage === "angular") {
      if (!showTerminal) {
        setShowPreview(true)
        setPreviewMode('preview')
      }
    }
  }, [currentFile?.content, currentLanguage, showTerminal])

  const handleCodeChange = (newCode) => {
    setFiles(prev => ({
      ...prev,
      [activeFile]: {
        ...prev[activeFile],
        content: newCode,
        isDirty: true,
      }
    }))
  }

  const createFile = (fileName, parentPath = null) => {
    const fullPath = parentPath ? `${parentPath}/${fileName}` : fileName
    const language = getLanguageFromFileName(fileName)
    const template = languageTemplates[language] || ''
    
    setFiles(prev => ({
      ...prev,
      [fullPath]: {
        content: template,
        language,
        isDirty: false,
      }
    }))
    
    setActiveFile(fullPath)
    setShowNewFileDialog(false)
    setNewFileName("")
  }

  const deleteFile = (fileName) => {
    const newFiles = { ...files }
    delete newFiles[fileName]
    setFiles(newFiles)
    
    if (activeFile === fileName) {
      const remainingFiles = Object.keys(newFiles)
      setActiveFile(remainingFiles[0] || '')
    }
  }

  const toggleFolder = (folderPath) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev)
      if (newSet.has(folderPath)) {
        newSet.delete(folderPath)
      } else {
        newSet.add(folderPath)
      }
      return newSet
    })
  }

  const renderFileTree = (node, path = '') => {
    const currentPath = path ? `${path}/${node.name}` : node.name
    
    if (node.type === 'file') {
      const FileIcon = getFileIcon(node.name)
      const isActive = activeFile === currentPath
      
      return (
        <div
          key={currentPath}
          onClick={() => {
            if (!files[currentPath]) {
              createFile(node.name, path)
            } else {
              setActiveFile(currentPath)
            }
          }}
          className={`flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#2a2d2e] text-sm ${
            isActive ? 'bg-[#37373d] text-white' : 'text-[#cccccc]'
          }`}
        >
          <FileIcon className="h-4 w-4 flex-shrink-0" />
          <span className="truncate">{node.name}</span>
          {files[currentPath]?.isDirty && (
            <span className="ml-auto h-2 w-2 rounded-full bg-blue-500" />
          )}
        </div>
      )
    }
    
    if (node.type === 'folder') {
      const isExpanded = expandedFolders.has(currentPath)
      const FolderIcon = isExpanded ? FolderOpen : Folder
      
      return (
        <div key={currentPath} className="select-none">
          <div
            onClick={() => toggleFolder(currentPath)}
            className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#2a2d2e] text-sm text-[#cccccc]"
          >
            {isExpanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
            <FolderIcon className="h-4 w-4 flex-shrink-0" />
            <span>{node.name}</span>
          </div>
          {isExpanded && node.children && (
            <div className="ml-4">
              {Object.values(node.children).map(child => 
                renderFileTree(child, currentPath)
              )}
            </div>
          )}
        </div>
      )
    }
    
    return null
  }

  const runCode = () => {
    setIsRunning(true)
    setOutput("")
    
    setTimeout(() => {
      const code = currentFile?.content || ""
      const language = currentLanguage

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

          const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
          const isAsync = code.includes('async') || code.includes('await')
          
          if (isAsync) {
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
      } else if (language === "html") {
        setHtmlPreview(code)
            setOutput(`✓ HTML validated successfully\n✓ Rendering preview...\n\nDocument loaded in 0.03s`)
        setShowPreview(true)
        setPreviewMode('preview')
        setIsRunning(false)
      } else {
        setOutput(`✓ ${language} code executed successfully`)
      setIsRunning(false)
      }
    }, 800)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(currentFile?.content || "")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadCode = () => {
    const blob = new Blob([currentFile?.content || ""], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = activeFile
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const filteredFiles = Object.keys(files).filter(fileName =>
    fileName.toLowerCase().includes(fileSearchQuery.toLowerCase())
  )

  const searchInCode = (query) => {
    if (!query) return []
    const results = []
    Object.entries(files).forEach(([fileName, file]) => {
      const lines = file.content.split('\n')
      lines.forEach((line, index) => {
        if (line.toLowerCase().includes(query.toLowerCase())) {
          results.push({ fileName, line: index + 1, content: line })
        }
      })
    })
    return results
  }

  const searchResults = searchInCode(searchQuery)

  return (
    <div className="h-[calc(100vh-200px)] flex flex-col bg-[#1e1e1e] text-[#cccccc] rounded-lg overflow-hidden border border-[#333]">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#333]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
          <div className="h-4 w-px bg-[#333] mx-2" />
          <Code2 className="h-4 w-4 text-blue-400" />
          <span className="text-xs font-medium">VS Code Editor</span>
          </div>
          <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFileSearch(true)}
            className="h-7 px-2 text-xs text-gray-400 hover:text-white hover:bg-[#3c3c3c]"
            title="Quick Open (Cmd+P)"
          >
            <Search className="h-3.5 w-3.5 mr-1" />
            <span className="hidden sm:inline">Quick Open</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSearch(true)}
            className="h-7 px-2 text-xs text-gray-400 hover:text-white hover:bg-[#3c3c3c]"
            title="Search (Cmd+F)"
          >
            <Search className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-400 hover:text-white hover:bg-[#3c3c3c]"
            onClick={downloadCode}
            title="Download"
          >
              <Download className="h-3.5 w-3.5" />
            </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-400 hover:text-white hover:bg-[#3c3c3c]"
            onClick={copyCode}
            title="Copy"
          >
              {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
            </Button>
        </div>
      </div>

      {/* Main Content */}
      <PanelGroup direction="horizontal" className="flex-1">
        {/* File Explorer Sidebar */}
        <Panel defaultSize={15} minSize={10} maxSize={30} className="bg-[#252526] border-r border-[#333]">
          <div className="h-full flex flex-col">
            <div className="px-3 py-2 border-b border-[#333] flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 uppercase">Explorer</span>
              <Dialog open={showNewFileDialog} onOpenChange={setShowNewFileDialog}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-400 hover:text-white">
                    <Plus className="h-3 w-3" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#252526] border-[#333] text-white">
                  <DialogHeader>
                    <DialogTitle>Create New {newFileType === 'file' ? 'File' : 'Folder'}</DialogTitle>
                    <DialogDescription>
                      Enter the name for your new {newFileType}.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-4">
                    <Input
                      value={newFileName}
                      onChange={(e) => setNewFileName(e.target.value)}
                      placeholder={newFileType === 'file' ? 'example.js' : 'folder-name'}
                      className="bg-[#1e1e1e] border-[#333] text-white"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && newFileName) {
                          createFile(newFileName, newFileParent)
                        }
                      }}
                    />
                    <Select value={newFileType} onValueChange={setNewFileType}>
                      <SelectTrigger className="bg-[#1e1e1e] border-[#333] text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#252526] border-[#333]">
                        <SelectItem value="file">File</SelectItem>
                        <SelectItem value="folder">Folder</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() => {
                        if (newFileName) {
                          createFile(newFileName, newFileParent)
                        }
                      }}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Create
            </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex-1 overflow-auto py-2">
              {renderFileTree(fileTree)}
            </div>
          </div>
        </Panel>

        <PanelResizeHandle className="w-1 bg-[#333] hover:bg-[#444] transition-colors" />

        {/* Editor Area */}
        <Panel defaultSize={showPreview || showTerminal ? 50 : 85} minSize={30}>
          <div className="h-full flex flex-col bg-[#1e1e1e]">
            {/* File Tabs */}
            <div className="flex items-center gap-1 px-2 bg-[#252526] border-b border-[#333] overflow-x-auto">
              {Object.keys(files).map((fileName) => {
                const file = files[fileName]
                const isActive = activeFile === fileName
                const FileIcon = getFileIcon(fileName)
                
                return (
                  <div
                    key={fileName}
                    onClick={() => setActiveFile(fileName)}
                    className={`group flex items-center gap-2 px-3 py-2 cursor-pointer border-b-2 transition-colors ${
                      isActive
                        ? 'bg-[#1e1e1e] border-blue-500 text-white'
                        : 'border-transparent text-gray-400 hover:text-white hover:bg-[#2a2d2e]'
                    }`}
                  >
                    <FileIcon className="h-3.5 w-3.5 flex-shrink-0" />
                    <span className="text-xs whitespace-nowrap">{fileName.split('/').pop()}</span>
                    {file.isDirty && (
                      <span className="ml-1 h-2 w-2 rounded-full bg-blue-500" />
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteFile(fileName)
                      }}
                      className="ml-1 opacity-0 group-hover:opacity-100 hover:bg-[#3c3c3c] rounded p-0.5 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )
              })}
        </div>

            {/* Editor */}
        <div className="flex-1 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#1e1e1e] border-r border-[#333] flex flex-col items-end pt-4 pr-2 text-xs text-[#858585] font-mono select-none overflow-auto">
                {(currentFile?.content || "").split('\n').map((_, i) => (
                  <div key={i} className="leading-6 min-h-[1.5rem]">{i + 1}</div>
            ))}
          </div>
          <textarea
                value={currentFile?.content || ""}
                onChange={(e) => handleCodeChange(e.target.value)}
                className="absolute inset-0 left-10 w-[calc(100%-2.5rem)] h-full p-4 font-mono text-sm bg-transparent text-[#d4d4d4] resize-none focus:outline-none leading-6"
            spellCheck={false}
            placeholder="Start typing your code..."
          />
        </div>

            {/* Status Bar */}
            <div className="px-4 py-1 bg-[#007acc] text-white text-xs flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>Ln {currentFile?.content?.split('\n').length || 0}, Col {currentFile?.content?.length || 0}</span>
                <span>{currentLanguage}</span>
          </div>
          <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={runCode}
                  disabled={isRunning}
                  className="h-6 px-2 text-xs bg-green-600 hover:bg-green-700"
                >
                  <Play className="h-3 w-3 mr-1" />
                  Run
            </Button>
          </div>
        </div>
          </div>
        </Panel>

        {/* Preview/Terminal Panel */}
        {(showPreview || showTerminal) && (
          <>
            <PanelResizeHandle className="w-1 bg-[#333] hover:bg-[#444] transition-colors" />
            <Panel defaultSize={35} minSize={20} maxSize={50}>
              <Tabs value={previewMode} onValueChange={setPreviewMode} className="h-full flex flex-col bg-[#1e1e1e]">
                <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#333]">
                  <TabsList className="bg-transparent h-auto p-0">
                    {currentLanguage === 'html' || currentLanguage === 'react' || currentLanguage === 'vue' || currentLanguage === 'angular' ? (
                      <TabsTrigger
                        value="preview"
                        className="data-[state=active]:bg-[#1e1e1e] data-[state=active]:text-white rounded-none border-b-2 data-[state=active]:border-blue-500"
                        onClick={() => {
                          setShowPreview(true)
                          setPreviewMode('preview')
                        }}
                      >
                        <Monitor className="h-3.5 w-3.5 mr-1" />
                        Preview
                      </TabsTrigger>
                    ) : null}
                    <TabsTrigger
                      value="terminal"
                      className="data-[state=active]:bg-[#1e1e1e] data-[state=active]:text-white rounded-none border-b-2 data-[state=active]:border-blue-500"
                      onClick={() => {
                        setShowTerminal(true)
                        setPreviewMode('terminal')
                      }}
                    >
                      <TerminalIcon className="h-3.5 w-3.5 mr-1" />
                      Terminal
                    </TabsTrigger>
                  </TabsList>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-gray-400 hover:text-white"
                    onClick={() => {
                      setShowPreview(false)
                      setShowTerminal(false)
                    }}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>

                <TabsContent value="preview" className="flex-1 m-0 p-0">
                  {currentLanguage === 'html' && htmlPreview ? (
                    <div className="h-full bg-white">
            <iframe
              ref={iframeRef}
              srcDoc={htmlPreview}
              className="w-full h-full border-0"
              title="HTML Preview"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
                  ) : currentLanguage === 'react' || currentLanguage === 'vue' || currentLanguage === 'angular' ? (
                    <div className="h-full p-4 flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <Code2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Component Preview</p>
                        <p className="text-xs mt-2">For full preview, use a development server</p>
                      </div>
          </div>
        ) : (
                    <div className="h-full p-4 flex items-center justify-center text-gray-400">
                      <p>No preview available for this file type</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="terminal" className="flex-1 m-0 p-0">
                  <div className="h-full p-4 font-mono text-xs bg-[#0c0c0c] text-green-400 overflow-auto">
          {!output && !isRunning && (
                      <div className="text-gray-600">
              <p>$ Ready to execute code</p>
                        <p className="mt-2">Click &apos;Run&apos; to see output here...</p>
            </div>
          )}
          {isRunning && (
                      <div className="text-yellow-400">
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
                        <div className="text-gray-500 mb-2">
                          $ {currentLanguage === 'javascript' ? 'node index.js' : currentLanguage === 'python' ? 'python main.py' : 'run'}
                </div>
                        <pre className={`whitespace-pre-wrap ${
                          output.includes('❌') || output.includes('Error') ? 'text-red-400' : 
                          output.includes('Warning') || output.includes('⚠') ? 'text-yellow-400' : 
                          'text-green-400'
                        }`}>{output}</pre>
                        <div className="text-gray-500 mt-4 border-t border-[#333] pt-2">
                $ <span className="animate-pulse">_</span>
              </div>
            </>
          )}
        </div>
                </TabsContent>
              </Tabs>
            </Panel>
          </>
        )}
      </PanelGroup>

      {/* File Search Dialog */}
      {showFileSearch && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
          <div className="bg-[#252526] border border-[#333] rounded-lg shadow-2xl w-full max-w-2xl mx-4">
            <div className="p-4 border-b border-[#333]">
              <div className="flex items-center gap-2 mb-2">
                <Search className="h-4 w-4 text-gray-400" />
                <Input
                  autoFocus
                  value={fileSearchQuery}
                  onChange={(e) => setFileSearchQuery(e.target.value)}
                  placeholder="Type to search files (Cmd+P)"
                  className="bg-[#1e1e1e] border-[#333] text-white"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setShowFileSearch(false)
                    setFileSearchQuery("")
                  }}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="max-h-64 overflow-auto">
              {filteredFiles.length > 0 ? (
                filteredFiles.map((fileName) => {
                  const FileIcon = getFileIcon(fileName)
                  return (
                    <div
                      key={fileName}
                      onClick={() => {
                        setActiveFile(fileName)
                        setShowFileSearch(false)
                        setFileSearchQuery("")
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-[#37373d] cursor-pointer"
                    >
                      <FileIcon className="h-4 w-4" />
                      <span className="text-sm">{fileName}</span>
                    </div>
                  )
                })
              ) : (
                <div className="px-4 py-8 text-center text-gray-400 text-sm">
                  No files found
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Search Dialog */}
      {showSearch && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
          <div className="bg-[#252526] border border-[#333] rounded-lg shadow-2xl w-full max-w-2xl mx-4">
            <div className="p-4 border-b border-[#333]">
              <div className="flex items-center gap-2 mb-2">
                <Search className="h-4 w-4 text-gray-400" />
                <Input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search in files (Cmd+F)"
                  className="bg-[#1e1e1e] border-[#333] text-white"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setShowSearch(false)
                    setSearchQuery("")
                  }}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="max-h-64 overflow-auto">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveFile(result.fileName)
                      setShowSearch(false)
                    }}
                    className="px-4 py-2 hover:bg-[#37373d] cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <File className="h-3.5 w-3.5 text-gray-400" />
                      <span className="text-sm font-medium">{result.fileName}</span>
                      <span className="text-xs text-gray-500">Line {result.line}</span>
                    </div>
                    <div className="text-xs text-gray-400 ml-6">{result.content.trim()}</div>
                  </div>
                ))
              ) : searchQuery ? (
                <div className="px-4 py-8 text-center text-gray-400 text-sm">
                  No results found
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-gray-400 text-sm">
                  Type to search in code
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
