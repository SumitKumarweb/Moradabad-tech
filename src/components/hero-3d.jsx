 
import { useState, useEffect } from 'react'

const codeSnippets = [
  {
    language: 'javascript',
    code: `function calculateTotal(items) {
  const subtotal = items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
  
  const tax = subtotal * 0.1;
  const discount = subtotal > 100 ? subtotal * 0.05 : 0;
  
  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    discount: discount.toFixed(2),
    total: (subtotal + tax - discount).toFixed(2)
  };
}

const cart = [
  { name: "Laptop", price: 999.99, quantity: 1 },
  { name: "Mouse", price: 29.99, quantity: 2 }
];

const receipt = calculateTotal(cart);
console.log("Total:", receipt.total);`
  },
  {
    language: 'react',
    code: `import { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        placeholder="Add a new todo..."
      />
      <div className="filters">
        {['all', 'active', 'completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={filter === f ? 'active' : ''}
          >
            {f}
          </button>
        ))}
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={todo.completed ? 'completed' : ''}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;`
  },
  {
    language: 'python',
    code: `class BankAccount:
    def __init__(self, account_number, owner_name, initial_balance=0):
        self.account_number = account_number
        self.owner_name = owner_name
        self.balance = initial_balance
        self.transaction_history = []
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.transaction_history.append({
                'type': 'deposit',
                'amount': amount,
                'balance': self.balance
            })
            return f"Deposited {amount}. New balance: {self.balance}"
        return "Invalid deposit amount"
    
    def withdraw(self, amount):
        if amount > 0 and amount <= self.balance:
            self.balance -= amount
            self.transaction_history.append({
                'type': 'withdrawal',
                'amount': amount,
                'balance': self.balance
            })
            return f"Withdrew {amount}. New balance: {self.balance}"
        return "Insufficient funds or invalid amount"
    
    def get_balance(self):
        return self.balance
    
    def get_statement(self):
        return self.transaction_history

account = BankAccount("123456", "John Doe", 1000)
print(account.deposit(500))
print(account.withdraw(200))
print(f"Current balance: {account.get_balance()}")`
  },
  {
    language: 'typescript',
    code: `interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

class ShoppingCart {
  private items: CartItem[] = [];

  addItem(product: Product, quantity: number = 1): void {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...product, quantity });
    }
  }

  removeItem(productId: number): void {
    this.items = this.items.filter(item => item.id !== productId);
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  }

  getTotal(): number {
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  clear(): void {
    this.items = [];
  }
}

const cart = new ShoppingCart();
cart.addItem({
  id: 1,
  name: "Laptop",
  price: 999.99,
  category: "Electronics",
  inStock: true
}, 1);

console.log("Total:", cart.getTotal());`
  },
  {
    language: 'javascript',
    code: `async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const userData = await response.json();
    
    const enrichedData = {
      ...userData,
      fullName: \`\${userData.firstName} \${userData.lastName}\`,
      profileUrl: \`/profile/\${userData.id}\`,
      joinedDate: new Date(userData.createdAt).toLocaleDateString()
    };
    
    return enrichedData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

async function displayUser(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log('User:', user.fullName);
    console.log('Profile:', user.profileUrl);
    console.log('Joined:', user.joinedDate);
  } catch (error) {
    console.error('Failed to display user:', error.message);
  }
}

displayUser(123);`
  }
]

export function Hero3D() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const snippet = codeSnippets[currentSnippetIndex]
    const totalLength = snippet.code.length
    const preWrittenLength = Math.floor(totalLength * 0.3) // 30% pre-written
    
    // Set initial 30% of code
    const preWrittenCode = snippet.code.slice(0, preWrittenLength)
    setDisplayedCode(preWrittenCode)
    
    let currentIndex = preWrittenLength
    let timeoutId

    const typeCode = () => {
      if (currentIndex < snippet.code.length) {
        setDisplayedCode(snippet.code.slice(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeCode, 30 + Math.random() * 20)
      } else {
        setIsTyping(false)
        // Wait before switching to next snippet
        setTimeout(() => {
          setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length)
          setDisplayedCode('')
          setIsTyping(true)
        }, 3000)
      }
    }

    // Start typing after a short delay
    const startDelay = setTimeout(() => {
      if (isTyping && currentIndex < snippet.code.length) {
        typeCode()
      }
    }, 500)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      clearTimeout(startDelay)
    }
  }, [currentSnippetIndex, isTyping])

  const highlightCode = (code) => {
    const snippet = codeSnippets[currentSnippetIndex]
    const lines = code.split('\n')
    
    return lines.map((line, lineIndex) => {
      const parts = []
      let currentPart = ''
      let inString = false
      let stringChar = ''
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i]
        const nextChar = line[i + 1]
        
        // String detection
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
      
      const codeColors = {
        normal: 'oklch(0.9 0.02 0)',
        string: 'oklch(0.7 0.15 150)',
        keyword: 'oklch(0.7 0.2 250)',
        number: 'oklch(0.75 0.18 280)',
        operator: 'oklch(0.75 0.2 50)',
        lineNumber: 'oklch(0.4 0.05 270)',
        cursor: 'oklch(0.7 0.2 250)',
      }

      return (
        <div key={lineIndex} className="flex items-start">
          <span className="mr-4 select-none font-mono text-xs" style={{ color: codeColors.lineNumber }}>
            {String(lineIndex + 1).padStart(2, '0')}
          </span>
          <span className="flex-1 font-mono text-sm leading-relaxed" style={{ color: codeColors.normal }}>
            {parts.map((part, partIndex) => {
              const isKeyword = /^(function|const|let|var|return|if|else|for|while|class|interface|def|import|from|export|default|async|await|try|catch|finally)$/.test(part.text.trim())
              const isNumber = /^\d+$/.test(part.text.trim())
              const isOperator = /^[+\-*/=<>!&|]+$/.test(part.text.trim())
              
              let color = codeColors.normal
              let fontWeight = 'normal'
              if (part.type === 'string') {
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
              <span className="inline-block w-2 h-4 ml-0.5" style={{ backgroundColor: codeColors.cursor }} />
            )}
          </span>
        </div>
      )
    })
  }

  const currentSnippet = codeSnippets[currentSnippetIndex]

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
    footer: {
      backgroundColor: 'oklch(0.15 0.025 270)',
      borderColor: 'oklch(0.22 0.04 270)',
    },
    textMuted: {
      color: 'oklch(0.65 0.05 270)',
    },
    textLineNumber: {
      color: 'oklch(0.4 0.05 270)',
    },
    textCode: {
      color: 'oklch(0.9 0.02 0)',
    },
    badge: {
      backgroundColor: 'oklch(0.08 0.015 260)',
      borderColor: 'oklch(0.22 0.04 270)',
    },
    cursor: {
      backgroundColor: 'oklch(0.7 0.2 250)',
    },
  }

  return (
    // <div className="h-full w-full flex items-center justify-center p-6 overflow-hidden">
      <div 
        className="w-full h-full backdrop-blur-sm rounded-lg shadow-xl overflow-hidden flex flex-col"
        style={{ backgroundColor: darkStyles.container.backgroundColor, borderColor: darkStyles.container.borderColor, borderWidth: '1px' }}
      >
        {/* Code Editor Header */}
        <div 
          className="flex items-center justify-between px-4 py-2 border-b"
          style={{ backgroundColor: darkStyles.header.backgroundColor, borderColor: darkStyles.header.borderColor }}
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500/80" />
            <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
            <div className="h-2 w-2 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: darkStyles.textMuted.color }}>
            <span className="px-2 py-1 rounded border" style={{ backgroundColor: darkStyles.badge.backgroundColor, borderColor: darkStyles.badge.borderColor }}>
              {currentSnippet.language}
            </span>
          </div>
        </div>
        
        {/* Code Content */}
        <div className="flex-1 overflow-auto p-4" style={{ backgroundColor: darkStyles.content.backgroundColor }}>
          <div className="space-y-1">
            {displayedCode ? highlightCode(displayedCode) : (
              <div className="flex items-start">
                <span className="mr-4 select-none font-mono text-xs" style={{ color: darkStyles.textLineNumber.color }}>01</span>
                <span className="flex-1 font-mono text-sm">
                  <span className="inline-block w-2 h-4 ml-0.5" style={{ backgroundColor: darkStyles.cursor.backgroundColor }} />
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer with language indicator */}
        <div 
          className="px-4 py-2 border-t flex items-center justify-between"
          style={{ backgroundColor: darkStyles.footer.backgroundColor, borderColor: darkStyles.footer.borderColor }}
        >
          <div className="flex items-center gap-2 text-xs" style={{ color: darkStyles.textMuted.color }}>
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span>Live</span>
          </div>
          <div className="text-xs font-mono" style={{ color: darkStyles.textMuted.color }}>
            {currentSnippet.language.toUpperCase()}
          </div>
        </div>
      </div>
    // </div>
  )
}

