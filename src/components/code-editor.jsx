import * as React from "react"
import { 
  Play, Trash2, Copy, Check, TerminalIcon, Download, Maximize2, 
  File, Folder, FolderOpen, Search, X, Plus, ChevronRight, ChevronDown,
  FileCode, Monitor, Code2, Settings, FileText, Image, FileJson
} from 'lucide-react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import Editor from '@monaco-editor/react'

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

const getExtensionFromLanguage = (language) => {
  const extMap = {
    javascript: 'js',
    python: 'py',
    c: 'c',
    cpp: 'cpp',
    java: 'java',
    html: 'html',
    css: 'css',
    json: 'json',
    react: 'jsx',
    vue: 'vue',
    angular: 'ts',
    node: 'js',
  }
  return extMap[language] || 'js'
}

// Map our language names to Monaco Editor language IDs
const getMonacoLanguage = (language) => {
  const langMap = {
    javascript: 'javascript',
    python: 'python',
    c: 'c',
    cpp: 'cpp',
    java: 'java',
    html: 'html',
    css: 'css',
    json: 'json',
    react: 'javascript', // React uses JavaScript syntax
    vue: 'javascript', // Vue uses JavaScript syntax
    angular: 'typescript', // Angular uses TypeScript
    node: 'javascript', // Node.js uses JavaScript
  }
  return langMap[language] || 'javascript'
}

export function CodeEditor({ initialLanguage = "javascript" }) {
  const extension = getExtensionFromLanguage(initialLanguage)
  const indexFile = `index.${extension}`
  const userFile = `user.${extension}`
  
  // User CRUD template based on language
  const getUserCrudTemplate = (lang) => {
    const templates = {
      javascript: `// User CRUD Operations
class UserService {
  constructor() {
    this.users = []
  }

  // Create a new user
  createUser(user) {
    this.users.push({ id: Date.now(), ...user })
    return this.users[this.users.length - 1]
  }

  // Read all users
  getAllUsers() {
    return this.users
  }

  // Read a user by ID
  getUserById(id) {
    return this.users.find(user => user.id === id)
  }

  // Update a user
  updateUser(id, updatedData) {
    const index = this.users.findIndex(user => user.id === id)
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedData }
      return this.users[index]
    }
    return null
  }

  // Delete a user
  deleteUser(id) {
    const index = this.users.findIndex(user => user.id === id)
    if (index !== -1) {
      return this.users.splice(index, 1)[0]
    }
    return null
  }
}

// Example usage
const userService = new UserService()
userService.createUser({ name: 'John Doe', email: 'john@example.com' })
console.log('All users:', userService.getAllUsers())`,
      python: `# User CRUD Operations
class UserService:
    def __init__(self):
        self.users = []
    
    # Create a new user
    def create_user(self, user):
        user['id'] = len(self.users) + 1
        self.users.append(user)
        return self.users[-1]
    
    # Read all users
    def get_all_users(self):
        return self.users
    
    # Read a user by ID
    def get_user_by_id(self, user_id):
        for user in self.users:
            if user.get('id') == user_id:
                return user
        return None
    
    # Update a user
    def update_user(self, user_id, updated_data):
        for user in self.users:
            if user.get('id') == user_id:
                user.update(updated_data)
                return user
        return None
    
    # Delete a user
    def delete_user(self, user_id):
        for i, user in enumerate(self.users):
            if user.get('id') == user_id:
                return self.users.pop(i)
        return None

# Example usage
user_service = UserService()
user_service.create_user({'name': 'John Doe', 'email': 'john@example.com'})
print('All users:', user_service.get_all_users())`,
      java: `// User CRUD Operations
import java.util.*;

class User {
    private int id;
    private String name;
    private String email;
    
    public User(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    
    // Getters and setters
    public int getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public void setName(String name) { this.name = name; }
    public void setEmail(String email) { this.email = email; }
}

class UserService {
    private List<User> users = new ArrayList<>();
    private int nextId = 1;
    
    // Create a new user
    public User createUser(String name, String email) {
        User user = new User(nextId++, name, email);
        users.add(user);
        return user;
    }
    
    // Read all users
    public List<User> getAllUsers() {
        return new ArrayList<>(users);
    }
    
    // Read a user by ID
    public User getUserById(int id) {
        return users.stream()
            .filter(u -> u.getId() == id)
            .findFirst()
            .orElse(null);
    }
    
    // Update a user
    public User updateUser(int id, String name, String email) {
        User user = getUserById(id);
        if (user != null) {
            user.setName(name);
            user.setEmail(email);
        }
        return user;
    }
    
    // Delete a user
    public User deleteUser(int id) {
        User user = getUserById(id);
        if (user != null) {
            users.remove(user);
        }
        return user;
    }
}

// Example usage
class Main {
    public static void main(String[] args) {
        UserService userService = new UserService();
        userService.createUser("John Doe", "john@example.com");
        System.out.println("All users: " + userService.getAllUsers());
    }
}`,
      cpp: `// User CRUD Operations
#include <iostream>
#include <vector>
#include <string>

struct User {
    int id;
    std::string name;
    std::string email;
    
    User(int id, std::string name, std::string email) 
        : id(id), name(name), email(email) {}
};

class UserService {
private:
    std::vector<User> users;
    int nextId = 1;
    
public:
    // Create a new user
    User createUser(std::string name, std::string email) {
        User user(nextId++, name, email);
        users.push_back(user);
        return user;
    }
    
    // Read all users
    std::vector<User> getAllUsers() {
        return users;
    }
    
    // Read a user by ID
    User* getUserById(int id) {
        for (auto& user : users) {
            if (user.id == id) {
                return &user;
            }
        }
        return nullptr;
    }
    
    // Update a user
    bool updateUser(int id, std::string name, std::string email) {
        User* user = getUserById(id);
        if (user != nullptr) {
            user->name = name;
            user->email = email;
            return true;
        }
        return false;
    }
    
    // Delete a user
    bool deleteUser(int id) {
        for (auto it = users.begin(); it != users.end(); ++it) {
            if (it->id == id) {
                users.erase(it);
                return true;
            }
        }
        return false;
    }
};

// Example usage
int main() {
    UserService userService;
    userService.createUser("John Doe", "john@example.com");
    std::cout << "User created successfully" << std::endl;
    return 0;
}`,
      c: `// User CRUD Operations
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int id;
    char name[100];
    char email[100];
} User;

typedef struct {
    User* users;
    int count;
    int capacity;
} UserService;

UserService* createUserService() {
    UserService* service = (UserService*)malloc(sizeof(UserService));
    service->users = (User*)malloc(10 * sizeof(User));
    service->count = 0;
    service->capacity = 10;
    return service;
}

// Create a new user
User* createUser(UserService* service, const char* name, const char* email) {
    if (service->count >= service->capacity) {
        service->capacity *= 2;
        service->users = (User*)realloc(service->users, service->capacity * sizeof(User));
    }
    User* user = &service->users[service->count++];
    user->id = service->count;
    strcpy(user->name, name);
    strcpy(user->email, email);
    return user;
}

// Example usage
int main() {
    UserService* userService = createUserService();
    createUser(userService, "John Doe", "john@example.com");
    printf("User created successfully\\n");
    return 0;
}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User CRUD</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        .user-form {
            margin-bottom: 20px;
        }
        input, button {
            padding: 8px;
            margin: 5px;
        }
        .user-list {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>User CRUD Operations</h1>
    <div class="user-form">
        <input type="text" id="name" placeholder="Name">
        <input type="email" id="email" placeholder="Email">
        <button onclick="createUser()">Create User</button>
    </div>
    <div class="user-list" id="userList"></div>
    
    <script>
        let users = [];
        let editingId = null;
        
        function createUser() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            if (name && email) {
                users.push({ id: Date.now(), name, email });
                renderUsers();
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
            }
        }
        
        function renderUsers() {
            const list = document.getElementById('userList');
            list.innerHTML = users.map(user => \`
                <div>
                    <strong>\${user.name}</strong> - \${user.email}
                    <button onclick="deleteUser(\${user.id})">Delete</button>
                </div>
            \`).join('');
        }
    </script>
</body>
</html>`,
      react: `// User CRUD Operations
import React, { useState } from 'react';

function UserCRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Create a new user
  const createUser = () => {
    if (name && email) {
      setUsers([...users, { id: Date.now(), name, email }]);
      setName('');
      setEmail('');
    }
  };

  // Read all users
  const getAllUsers = () => users;

  // Update a user
  const updateUser = (id) => {
    const user = users.find(u => u.id === id);
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setEditingId(id);
    }
  };

  // Delete a user
  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="user-crud">
      <h1>User CRUD Operations</h1>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button onClick={createUser}>
          {editingId ? 'Update' : 'Create'} User
        </button>
      </div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => updateUser(user.id)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCRUD;`,
      vue: `<!-- User CRUD Operations -->
<template>
  <div class="user-crud">
    <h1>User CRUD Operations</h1>
    <div>
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <button @click="createUser">Create User</button>
    </div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
        <button @click="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserCRUD',
  data() {
    return {
      users: [],
      name: '',
      email: ''
    }
  },
  methods: {
    createUser() {
      if (this.name && this.email) {
        this.users.push({
          id: Date.now(),
          name: this.name,
          email: this.email
        });
        this.name = '';
        this.email = '';
      }
    },
    deleteUser(id) {
      this.users = this.users.filter(u => u.id !== id);
    }
  }
}
</script>`,
      angular: `// User CRUD Operations
import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-crud',
  template: \`
    <div class="user-crud">
      <h1>User CRUD Operations</h1>
      <div>
        <input [(ngModel)]="name" placeholder="Name" />
        <input [(ngModel)]="email" placeholder="Email" />
        <button (click)="createUser()">Create User</button>
      </div>
      <ul>
        <li *ngFor="let user of users">
          {{ user.name }} - {{ user.email }}
          <button (click)="deleteUser(user.id)">Delete</button>
        </li>
      </ul>
    </div>
  \`
})
export class UserCRUDComponent {
  users: User[] = [];
  name: string = '';
  email: string = '';

  createUser() {
    if (this.name && this.email) {
      this.users.push({
        id: Date.now(),
        name: this.name,
        email: this.email
      });
      this.name = '';
      this.email = '';
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
}`,
      node: `// User CRUD Operations
class UserService {
  constructor() {
    this.users = []
  }

  // Create a new user
  createUser(user) {
    this.users.push({ id: Date.now(), ...user })
    return this.users[this.users.length - 1]
  }

  // Read all users
  getAllUsers() {
    return this.users
  }

  // Read a user by ID
  getUserById(id) {
    return this.users.find(user => user.id === id)
  }

  // Update a user
  updateUser(id, updatedData) {
    const index = this.users.findIndex(user => user.id === id)
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedData }
      return this.users[index]
    }
    return null
  }

  // Delete a user
  deleteUser(id) {
    const index = this.users.findIndex(user => user.id === id)
    if (index !== -1) {
      return this.users.splice(index, 1)[0]
    }
    return null
  }
}

// Example usage
const userService = new UserService()
userService.createUser({ name: 'John Doe', email: 'john@example.com' })
console.log('All users:', userService.getAllUsers())`,
      css: `/* User CRUD Styles */
.user-crud {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.user-form {
  margin-bottom: 20px;
}

.user-form input {
  padding: 8px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.user-form button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.user-list {
  margin-top: 20px;
}`,
      json: `{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "operations": {
    "create": "Add a new user",
    "read": "Get all users or a specific user",
    "update": "Modify an existing user",
    "delete": "Remove a user"
  }
}`,
    }
    return templates[lang] || templates.javascript
  }

  const [files, setFiles] = React.useState(() => {
    const indexContent = languageTemplates[initialLanguage] || languageTemplates.javascript
    const userContent = getUserCrudTemplate(initialLanguage)
    return {
      [indexFile]: {
        content: indexContent,
        language: initialLanguage,
      isDirty: false,
    },
      [userFile]: {
        content: userContent,
        language: initialLanguage,
        isDirty: false,
      },
    }
  })
  const [activeFile, setActiveFile] = React.useState(indexFile)
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
  const [fileTree, setFileTree] = React.useState(() => ({
    name: 'root',
    type: 'folder',
    children: {
      [indexFile]: { name: indexFile, type: 'file' },
      [userFile]: { name: userFile, type: 'file' },
    }
  }))
  const [expandedFolders, setExpandedFolders] = React.useState(new Set(['root']))
  const [newFileName, setNewFileName] = React.useState("")
  const [showNewFileDialog, setShowNewFileDialog] = React.useState(false)
  const [newFileType, setNewFileType] = React.useState('file')
  const [newFileParent, setNewFileParent] = React.useState(null)
  const iframeRef = React.useRef(null)
  const editorRef = React.useRef(null)

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

  // Helper function to generate React preview HTML
  const generateReactPreview = (code) => {
    // Clean up the code and ensure it's renderable
    let reactCode = code
    // Remove import statements (we'll use global React)
    reactCode = reactCode.replace(/import\s+.*?from\s+['"]react['"];?\s*/g, '')
    reactCode = reactCode.replace(/import\s+.*?from\s+['"]react-dom['"];?\s*/g, '')
    reactCode = reactCode.replace(/import\s+.*?;?\s*/g, '')
    
    // Remove export default and make it assignable
    reactCode = reactCode.replace(/export\s+default\s+function\s+(\w+)/g, 'function $1')
    reactCode = reactCode.replace(/export\s+default\s+/g, '')
    
    // If it's a function component, wrap it properly
    if (reactCode.includes('function App') || reactCode.includes('function UserCRUD')) {
      reactCode = reactCode + '\nconst AppComponent = App || UserCRUD;'
    } else if (reactCode.includes('const App') || reactCode.includes('const UserCRUD')) {
      reactCode = reactCode + '\nconst AppComponent = App || UserCRUD;'
    } else {
      // Try to find the component name
      const componentMatch = reactCode.match(/(?:function|const)\s+(\w+)\s*[=\(]/)
      if (componentMatch) {
        reactCode = reactCode + `\nconst AppComponent = ${componentMatch[1]};`
      } else {
        reactCode = reactCode + '\nconst AppComponent = App;'
      }
    }
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Preview</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
        #root {
            width: 100%;
            min-height: 100vh;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        const { useState, useEffect, useRef, useCallback, useMemo } = React;
        ${reactCode}
        const root = ReactDOM.createRoot(document.getElementById('root'));
        if (typeof AppComponent !== 'undefined') {
            root.render(React.createElement(AppComponent));
        } else {
            root.render(React.createElement('div', null, 'Component not found. Make sure your component is exported correctly.'));
        }
    </script>
</body>
</html>`
  }

  // Helper function to generate Vue preview HTML
  const generateVuePreview = (code) => {
    // Extract template, script, and style from Vue SFC format
    let template = ''
    let scriptContent = code
    let styleContent = ''
    
    // Check if it's a Single File Component format
    if (code.includes('<template>')) {
      const templateMatch = code.match(/<template>([\s\S]*?)<\/template>/)
      if (templateMatch) {
        template = templateMatch[1].trim()
      }
    }
    
    if (code.includes('<script>')) {
      const scriptMatch = code.match(/<script>([\s\S]*?)<\/script>/)
      if (scriptMatch) {
        scriptContent = scriptMatch[1].trim()
      }
    }
    
    if (code.includes('<style')) {
      const styleMatch = code.match(/<style[^>]*>([\s\S]*?)<\/style>/)
      if (styleMatch) {
        styleContent = styleMatch[1].trim()
      }
    }
    
    // If no template found, try to extract from the script
    if (!template && scriptContent.includes('template:')) {
      const templateMatch = scriptContent.match(/template:\s*['"`]([\s\S]*?)['"`]/)
      if (templateMatch) {
        template = templateMatch[1].trim()
      }
    }
    
    // Clean up the script content
    scriptContent = scriptContent.replace(/export\s+default\s+/, '')
    scriptContent = scriptContent.replace(/<script>[\s\S]*?<\/script>/g, '')
    scriptContent = scriptContent.replace(/<template>[\s\S]*?<\/template>/g, '')
    scriptContent = scriptContent.replace(/<style[^>]*>[\s\S]*?<\/style>/g, '')
    
    // If no template, use a default one
    if (!template) {
      template = '<div class="user-crud"><h1>User CRUD Operations</h1><div><input v-model="name" placeholder="Name" /><input v-model="email" placeholder="Email" /><button @click="createUser">Create User</button></div><ul><li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }}<button @click="deleteUser(user.id)">Delete</button></li></ul></div>'
    }
    
    // Escape template for use in template literal
    const escapedTemplate = template.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue Preview</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
        ${styleContent}
    </style>
</head>
<body>
    <div id="app"></div>
    <script>
        const { createApp } = Vue;
        const componentConfig = {
            ${scriptContent}
        };
        componentConfig.template = \`${escapedTemplate}\`;
        const app = createApp(componentConfig);
        app.mount('#app');
    </script>
</body>
</html>`
  }

  // Helper function to generate Angular preview HTML
  const generateAngularPreview = (code) => {
    // Extract Angular component code
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angular Preview</title>
    <script src="https://unpkg.com/@angular/core@17/bundles/core.umd.js"></script>
    <script src="https://unpkg.com/@angular/common@17/bundles/common.umd.js"></script>
    <script src="https://unpkg.com/@angular/platform-browser@17/bundles/platform-browser.umd.js"></script>
    <script src="https://unpkg.com/@angular/platform-browser-dynamic@17/bundles/platform-browser-dynamic.umd.js"></script>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
    </style>
</head>
<body>
    <app-root></app-root>
    <script>
        // Note: Angular requires a more complex setup. This is a simplified preview.
        // For full Angular functionality, use Angular CLI.
        document.body.innerHTML = '<div style="padding: 20px;"><h2>Angular Component Preview</h2><p>Angular requires a build process. The component code is displayed below:</p><pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow: auto;">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></div>';
    </script>
</body>
</html>`
  }

  // Update HTML preview automatically
  React.useEffect(() => {
    if (currentLanguage === "html" && currentFile?.content) {
      const timer = setTimeout(() => {
        setHtmlPreview(currentFile.content)
        setShowPreview(true)
        setShowTerminal(true)
        // Only switch to preview mode if terminal is not already showing output
        if (!output) {
          setPreviewMode('preview')
        }
      }, 300)
      return () => clearTimeout(timer)
    } else if (currentLanguage === "react" && currentFile?.content) {
      const timer = setTimeout(() => {
        const previewHtml = generateReactPreview(currentFile.content)
        setHtmlPreview(previewHtml)
      setShowPreview(true)
      setShowTerminal(true)
      if (!output) {
        setPreviewMode('preview')
      }
      }, 300)
      return () => clearTimeout(timer)
    } else if (currentLanguage === "vue" && currentFile?.content) {
      const timer = setTimeout(() => {
        const previewHtml = generateVuePreview(currentFile.content)
        setHtmlPreview(previewHtml)
        setShowPreview(true)
        setShowTerminal(true)
        if (!output) {
          setPreviewMode('preview')
        }
      }, 300)
      return () => clearTimeout(timer)
    } else if (currentLanguage === "angular" && currentFile?.content) {
      const timer = setTimeout(() => {
        const previewHtml = generateAngularPreview(currentFile.content)
        setHtmlPreview(previewHtml)
        setShowPreview(true)
        setShowTerminal(true)
        if (!output) {
          setPreviewMode('preview')
        }
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [currentFile?.content, currentLanguage, output])

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
    // Prevent deletion of essential files
    if (fileName === indexFile || fileName === userFile) {
      return
    }
    
    const newFiles = { ...files }
    delete newFiles[fileName]
    setFiles(newFiles)
    
    if (activeFile === fileName) {
      const remainingFiles = Object.keys(newFiles)
      setActiveFile(remainingFiles[0] || indexFile)
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
    // Automatically show terminal when code runs
    setShowTerminal(true)
    if (!showPreview && !showTerminal) {
      setPreviewMode('terminal')
    }
    
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
              setShowTerminal(true)
              setPreviewMode('terminal')
            }).catch((error) => {
              console.log = originalLog
              console.error = originalError
              console.warn = originalWarn
              setOutput(`❌ Error: ${error.message}\n\nStack trace:\n${error.stack}`)
              setIsRunning(false)
              setShowTerminal(true)
              setPreviewMode('terminal')
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
          setShowTerminal(true)
          setPreviewMode('terminal')
        } catch (error) {
          if (error instanceof Error) {
            setOutput(`❌ Error: ${error.message}\n\nStack trace:\n${error.stack}`)
          } else {
            setOutput(`❌ An unknown error occurred: ${String(error)}`)
          }
          setShowTerminal(true)
          setPreviewMode('terminal')
        }
        setIsRunning(false)
      } else if (language === "html") {
        setHtmlPreview(code)
        setOutput(`✓ HTML validated successfully\n✓ Rendering preview...\n\nDocument loaded in 0.03s`)
        setShowPreview(true)
        setShowTerminal(true)
        setPreviewMode('preview')
        setIsRunning(false)
      } else {
        setOutput(`✓ ${language} code executed successfully`)
        setShowTerminal(true)
        setPreviewMode('terminal')
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
              {/* Create File Dialog - Hidden as we only show index and user files */}
              {false && (
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
              )}
            </div>
            <div className="flex-1 overflow-auto py-2">
              {/* Render files directly without root folder wrapper */}
              {Object.values(fileTree.children || {}).map(child => 
                renderFileTree(child, '')
              )}
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
                    {/* Hide delete button for essential files */}
                    {fileName !== indexFile && fileName !== userFile && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteFile(fileName)
                      }}
                      className="ml-1 opacity-0 group-hover:opacity-100 hover:bg-[#3c3c3c] rounded p-0.5 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                    )}
                  </div>
                )
              })}
        </div>

            {/* Editor */}
        <div className="flex-1 relative overflow-hidden">
          <Editor
            key={activeFile}
            height="100%"
            language={getMonacoLanguage(currentLanguage)}
            value={currentFile?.content || ""}
            onChange={(value) => handleCodeChange(value || "")}
            onMount={(editor, monaco) => {
              editorRef.current = editor
              // Configure editor shortcuts
              editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
                // Save functionality can be added here
              })
              // Format document shortcut
              editor.addCommand(monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KeyF, () => {
                editor.getAction('editor.action.formatDocument')?.run()
              })
            }}
            theme="vs-dark"
            options={{
              minimap: { enabled: true },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: 'on',
              formatOnPaste: true,
              formatOnType: true,
              suggestOnTriggerCharacters: true,
              quickSuggestions: true,
              acceptSuggestionOnCommitCharacter: true,
              acceptSuggestionOnEnter: 'on',
              snippetSuggestions: 'top',
              tabCompletion: 'on',
              wordBasedSuggestions: 'allDocuments',
              fontFamily: "'Fira Code', 'Courier New', monospace",
              fontLigatures: true,
              cursorBlinking: 'smooth',
              cursorSmoothCaretAnimation: 'on',
              smoothScrolling: true,
              renderWhitespace: 'selection',
              renderLineHighlight: 'all',
              bracketPairColorization: { enabled: true },
              guides: {
                bracketPairs: true,
                indentation: true,
              },
              padding: { top: 10, bottom: 10 },
            }}
            loading={
              <div className="flex items-center justify-center h-full bg-[#1e1e1e] text-[#cccccc]">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                  <p className="text-sm">Loading Monaco Editor...</p>
                </div>
              </div>
            }
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
                    {(currentLanguage === 'html' || currentLanguage === 'react' || currentLanguage === 'vue' || currentLanguage === 'angular') && showPreview ? (
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
                  {(currentLanguage === 'html' || currentLanguage === 'react' || currentLanguage === 'vue' || currentLanguage === 'angular') && htmlPreview ? (
                    <div className="h-full bg-white">
            <iframe
              ref={iframeRef}
              srcDoc={htmlPreview}
              className="w-full h-full border-0"
              title={`${currentLanguage} Preview`}
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
                  ) : (
                    <div className="h-full p-4 flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <Code2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No preview available</p>
                        <p className="text-xs mt-2">Preview will appear here when you edit code</p>
                      </div>
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
