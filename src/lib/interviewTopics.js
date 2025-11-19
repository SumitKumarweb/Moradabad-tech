/**
 * Interview Topics Data
 * Contains interview preparation topics organized by sections
 */

export const interviewSections = [
  {
    id: "js-1",
    title: "JavaScript Part 1",
    description: "Fundamental JavaScript concepts including typing, scoping, execution context, and functional programming",
    icon: "JS",
    topicCount: 9,
  },
  {
    id: "js-2",
    title: "JavaScript Part 2 (Async JS)",
    description: "Understanding Asynchronous JavaScript, Concurrency, and Single-Threaded Nature",
    icon: "JS",
    topicCount: 8,
  },
  {
    id: "js-3",
    title: "JavaScript Part 3 (DOM)",
    description: "Document Object Model manipulation, CRUD operations, Higher-Order Functions, and performance optimization",
    icon: "JS",
    topicCount: 7,
  },
  {
    id: "js-4",
    title: "JavaScript Part 4 (OOP)",
    description: "Object-Oriented Programming concepts including Factory Functions, Constructors, Classes, Prototypes, and Inheritance",
    icon: "JS",
    topicCount: 9,
  },
  {
    id: "js-5",
    title: "JavaScript Part 5 (Important Keywords)",
    description: "Essential JavaScript keywords and definitions including Destructuring, Spreading, Type Coercion, and the this keyword",
    icon: "JS",
    topicCount: 8,
  },
  {
    id: "react-1",
    title: "React Part 1",
    description: "State Management, Lifecycle, Hooks (useState, useRef, useEffect, useReducer), Context API, and Controlled vs Uncontrolled Components",
    icon: "⚛️",
    topicCount: 8,
  },
  {
    id: "react-2",
    title: "React Part 2",
    description: "Context API vs Redux, Custom Hooks, and Optimization Techniques (useCallback, useMemo, React.memo)",
    icon: "⚛️",
    topicCount: 6,
  },
];

export const interviewTopics = {
  "js-1": [
    {
      id: "static-vs-dynamic-typing",
      number: 1,
      title: "Static vs Dynamic Typing",
      introduction: "Typing systems in programming define how variables are declared and how their types are handled during code execution. Static typing and dynamic typing represent two different approaches to type-checking in programming languages. Knowing their differences can help in choosing the right language for a specific project.",
      keyConcepts: [
        {
          term: "Statically Typed Languages",
          definition: "Variables have a fixed type determined at compile-time. Examples: Java, C++, Swift.",
          example: "int number = 10; // type is explicitly declared"
        },
        {
          term: "Dynamically Typed Languages",
          definition: "Variables are not bound to a specific type and are determined at runtime. Examples: Python, JavaScript.",
          example: "number = 10 # type is inferred dynamically"
        }
      ],
      stepByStep: [
        {
          heading: "Static Typing:",
          points: [
            "Errors are caught at compile-time.",
            "Improves performance and reduces runtime bugs.",
            "Requires more boilerplate code (explicit type declarations)."
          ]
        },
        {
          heading: "Dynamic Typing:",
          points: [
            "Errors are detected at runtime.",
            "Increases flexibility and speeds up prototyping.",
            "Risk of unexpected type-related errors during execution."
          ]
        }
      ],
      examples: [
        {
          title: "Statically Typed:",
          code: `double price = 9.99; // Explicit type assignment
price = "ten"; // Compile-time error`
        },
        {
          title: "Dynamically Typed:",
          code: `let price = 9.99;
price = "ten"; // No error at declaration, may fail during runtime`
        }
      ],
      practiceExercises: [
        "Identify whether the following snippets use static or dynamic typing.",
        "Write examples of declaring variables in a statically typed language and a dynamically typed language."
      ],
      summary: "Static typing provides safety and efficiency but requires more setup. Dynamic typing offers flexibility at the cost of potential runtime errors.",
      additionalResources: [
        {
          title: "Static vs Dynamic Typing on GeeksforGeeks",
          url: "#"
        },
        {
          title: "JavaScript Dynamic Typing",
          url: "#"
        }
      ]
    },
    {
      id: "let-var-const",
      number: 2,
      title: "let, var, and const (Difference in Scopes)",
      introduction: "In JavaScript, variable declarations are handled using let, var, and const. Each has its own scope rules and use cases, influencing how variables are managed in the code.",
      keyConcepts: [
        {
          term: "var",
          definition: "Function-scoped, can be redeclared, and prone to hoisting issues."
        },
        {
          term: "let",
          definition: "Block-scoped, introduced in ES6, safer for modern development."
        },
        {
          term: "const",
          definition: "Block-scoped and immutable (cannot be reassigned)."
        }
      ],
      stepByStep: [
        {
          heading: "Scope:",
          description: "var is function-scoped:",
          code: `function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}`
        },
        {
          heading: "let and const are block-scoped:",
          code: `if (true) {
  let x = 10;
  const y = 20;
}
console.log(x, y); // ReferenceError`
        },
        {
          heading: "Redeclaration:",
          description: "var allows redeclaration; let and const do not:",
          code: `var x = 1;
var x = 2; // Allowed
let y = 1;
let y = 2; // SyntaxError`
        },
        {
          heading: "Mutability:",
          description: "const prevents reassignment but does not make objects immutable:",
          code: `const obj = { name: 'Alice' };
obj.name = 'Bob'; // Allowed
obj = {}; // Error`
        }
      ],
      examples: [
        {
          title: "var hoisting issue:",
          code: `console.log(x); // Undefined
var x = 10;`
        },
        {
          title: "let and const prevent this:",
          code: `console.log(y); // ReferenceError
let y = 10;`
        }
      ],
      practiceExercises: [
        "Rewrite code using var to use let or const.",
        "Explain the output of code snippets that mix scopes."
      ],
      summary: "Use let and const for predictable scoping and to follow modern best practices. Avoid var in new codebases.",
      additionalResources: [
        {
          title: "MDN Documentation on let",
          url: "#"
        }
      ]
    },
    {
      id: "functional-scopes",
      number: 3,
      title: "Functional Scopes",
      introduction: "Functional scope is the area in code where a variable is accessible. In JavaScript, variables declared with var are function-scoped, limiting their access to the containing function.",
      keyConcepts: [
        {
          term: "Function Scope",
          definition: "Variables declared inside a function are not accessible outside of it.",
          example: `function greet() {
  var message = 'Hello!';
  console.log(message);
}
console.log(message); // ReferenceError`
        }
      ],
      stepByStep: [
        {
          heading: "Variable Access:",
          points: ["Only accessible within the same function."]
        },
        {
          heading: "Nested Functions:",
          description: "Inner functions can access variables from their parent scope.",
          code: `function outer() {
  var outerVar = 'Outer';
  function inner() {
    console.log(outerVar);
  }
  inner();
}`
        }
      ],
      practiceExercises: [
        "Write a function and declare variables within it. Test their accessibility outside the function.",
        "Nest functions and observe variable scope."
      ],
      summary: "Function scope ensures variables are encapsulated within functions, preventing unintended access."
    },
    {
      id: "callbacks-higher-order",
      number: 4,
      title: "Callback Functions and Higher-Order Functions",
      learningObjectives: [
        "Define callback and higher-order functions.",
        "Understand their relationship.",
        "Learn to use callbacks in JavaScript."
      ],
      introduction: "Functions in JavaScript can be passed as arguments or returned from other functions. Callback functions and higher-order functions make this possible, providing powerful tools for asynchronous programming.",
      keyConcepts: [
        {
          term: "Callback Function",
          definition: "A function passed as an argument to another function.",
          example: `function greet(name) {
  console.log(\`Hello, \${name}\`);
}
function processUserInput(callback) {
  let name = 'Alice';
  callback(name);
}
processUserInput(greet);`
        },
        {
          term: "Higher-Order Function",
          definition: "A function that takes other functions as arguments or returns them.",
          example: `function higherOrder(fn) {
  fn();
}
higherOrder(() => console.log('Callback executed!'));`
        }
      ],
      stepByStep: [
        {
          heading: "Defining Callbacks:",
          points: ["Create a function to handle a task."]
        },
        {
          heading: "Passing Callbacks:",
          points: ["Use callbacks to decouple logic."]
        },
        {
          heading: "Higher-Order Functions:",
          points: ["Functions like map, filter, and reduce are built-in higher-order functions."]
        }
      ],
      examples: [
        {
          title: "Using map:",
          code: `const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]`
        }
      ],
      practiceExercises: [
        "Write a higher-order function that accepts a callback to perform operations on numbers.",
        "Use filter to extract even numbers from an array."
      ],
      summary: "Callbacks and higher-order functions enable flexible and reusable code structures, essential for modern JavaScript programming.",
      additionalResources: [
        {
          title: "MDN Documentation on Callbacks",
          url: "#"
        },
        {
          title: "Eloquent JavaScript",
          url: "#"
        }
      ]
    },
    {
      id: "global-execution-context",
      number: 5,
      title: "Global Execution Context",
      learningObjectives: [
        "Understand the Global Execution Context (GEC) in JavaScript.",
        "Learn what happens during the creation and execution phases of the GEC."
      ],
      introduction: "The Global Execution Context (GEC) is the default execution context in JavaScript. It is created when the JavaScript code is executed and manages global variables, functions, and objects like window or global.",
      keyConcepts: [
        {
          term: "Global Execution Context (GEC)",
          definition: "The environment where global code (not inside any function) is executed."
        },
        {
          term: "Phases of Execution Context",
          definition: "Creation Phase: Memory is allocated for variables and functions. Variables are initialized with undefined. Functions are hoisted with their full definitions. Execution Phase: Code is executed line by line, and values are assigned to variables."
        }
      ],
      examples: [
        {
          title: "Creation and Execution:",
          code: `console.log(x); // undefined (hoisted)
var x = 10; // Assigned in execution phase
function greet() {
  console.log('Hello');
}
greet(); // "Hello" (function fully hoisted)`
        }
      ],
      practiceExercises: [
        "Write code that uses global variables and observe their behavior during the creation phase.",
        "Predict the output of code involving variable and function declarations."
      ]
    },
    {
      id: "functional-execution-context",
      number: 6,
      title: "Functional Execution Context",
      introduction: "A Functional Execution Context (FEC) is created whenever a function is invoked. It handles the function's variables, parameters, and inner functions.",
      keyConcepts: [
        {
          term: "FEC",
          definition: "Execution context specific to a function call."
        },
        {
          term: "Scope Chain",
          definition: "Includes the function's local scope and its parent scopes."
        }
      ],
      examples: [
        {
          title: "Function Call Creates FEC:",
          code: `function add(a, b) {
  return a + b;
}
add(5, 10); // Creates a new FEC`
        }
      ],
      practiceExercises: [
        "Create a nested function to observe scope chaining within an FEC."
      ]
    },
    {
      id: "hoisting-tdz",
      number: 7,
      title: "Hoisting and Temporal Dead Zone (TDZ)",
      learningObjectives: [
        "Learn how hoisting affects variables and functions.",
        "Understand the concept of Temporal Dead Zone (TDZ) with let and const."
      ],
      introduction: "Hoisting refers to the process where variable and function declarations are moved to the top of their scope during the creation phase. The Temporal Dead Zone (TDZ) is the period between entering a scope and declaring a variable with let or const.",
      keyConcepts: [
        {
          term: "Hoisting",
          definition: "Variables declared with var are hoisted and initialized with undefined. Functions are hoisted with their full definitions."
        },
        {
          term: "TDZ",
          definition: "Variables declared with let or const exist in the scope but cannot be accessed before declaration."
        }
      ],
      examples: [
        {
          title: "Hoisting:",
          code: `console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError (TDZ)
let b = 20;`
        },
        {
          title: "TDZ:",
          code: `{
  console.log(x); // ReferenceError
  let x = 5;
}`
        }
      ],
      practiceExercises: [
        "Identify the TDZ in code with let and const.",
        "Write examples to demonstrate function and variable hoisting."
      ]
    },
    {
      id: "closures-lexical-scoping",
      number: 8,
      title: "Closures and Lexical Scoping",
      introduction: "A closure is formed when an inner function retains access to variables in its outer scope, even after the outer function has returned. Lexical Scoping determines how variable names are resolved based on the location of their declaration.",
      keyConcepts: [
        {
          term: "Closure",
          definition: "A combination of a function and its lexical scope. Allows data encapsulation."
        },
        {
          term: "Lexical Scoping",
          definition: "Variable access is determined by the position in the source code."
        }
      ],
      examples: [
        {
          title: "Closure:",
          code: `function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}
const increment = outer();
increment(); // 1
increment(); // 2`
        },
        {
          title: "Lexical Scoping:",
          code: `const globalVar = 'Global';
function outer() {
  const outerVar = 'Outer';
  function inner() {
    console.log(globalVar, outerVar); // Access both variables
  }
  inner();
}
outer();`
        }
      ],
      practiceExercises: [
        "Create a closure to manage a private variable.",
        "Write a nested function and observe lexical scope behavior."
      ]
    },
    {
      id: "iife-currying",
      number: 9,
      title: "IIFE and Function Currying",
      introduction: "IIFE(Immediately Invoked Function Expression) and currying are functional programming concepts. An IIFE is a function executed immediately after its declaration. Currying transforms a function with multiple arguments into a series of functions, each taking a single argument.",
      keyConcepts: [
        {
          term: "IIFE",
          definition: "Syntax: (function() { ... })(); Used to avoid polluting the global scope."
        },
        {
          term: "Currying",
          definition: "Breaking down a function into smaller functions that return another function. Improves reusability and composition."
        }
      ],
      examples: [
        {
          title: "IIFE:",
          code: `(function() {
  let message = 'IIFE executed';
  console.log(message);
})();`
        },
        {
          title: "Currying:",
          code: `function multiply(a) {
  return function(b) {
    return a * b;
  };
}
const double = multiply(2);
console.log(double(5)); // 10`
        }
      ],
      practiceExercises: [
        "Write an IIFE to initialize variables without affecting the global scope.",
        "Create a curried function to calculate discounts on prices."
      ],
      summary: "IIFE provides immediate execution and scope isolation, while currying enables function composition and partial application."
    }
  ],
  "js-2": [
    {
      id: "single-threaded-nature",
      number: 1,
      title: "JavaScript's Single-Threaded Nature",
      introduction: "JavaScript operates on a single-threaded execution model, meaning it can execute one piece of code at a time on the main thread. This approach simplifies memory management but raises challenges for handling tasks like I/O operations, animations, and fetching data from servers, as these might block the main thread and lead to unresponsive applications. To address this limitation, JavaScript uses asynchronous programming facilitated by the event loop and Web APIs. These mechanisms allow JavaScript to perform tasks in the background without halting the execution of the main thread.",
      keyConcepts: [
        {
          term: "Single-Threaded Execution",
          definition: "JavaScript can execute one piece of code at a time on the main thread."
        },
        {
          term: "Asynchronous Programming",
          definition: "Allows JavaScript to perform tasks in the background without blocking the main thread, facilitated by the event loop and Web APIs."
        }
      ],
      stepByStep: [
        {
          heading: "Challenges:",
          points: [
            "I/O operations, animations, and data fetching can block the main thread.",
            "Blocking operations lead to unresponsive applications."
          ]
        },
        {
          heading: "Solution:",
          points: [
            "Use asynchronous programming with event loop and Web APIs.",
            "Perform background tasks without halting main thread execution."
          ]
        }
      ]
    },
    {
      id: "concurrency-model",
      number: 2,
      title: "The JavaScript Concurrency Model",
      introduction: "The JavaScript concurrency model consists of several key components that work together to enable asynchronous execution: the Call Stack, Web APIs, Callback Queue, and Event Loop.",
      keyConcepts: [
        {
          term: "Call Stack",
          definition: "Executes functions in a last in, first out (LIFO) manner. Synchronous code is pushed and popped directly on the call stack. Asynchronous tasks are deferred to Web APIs or other threads.",
          example: `function greet() {
  console.log('Hello!');
}
greet(); // "Hello!" is executed immediately.`
        },
        {
          term: "Web APIs",
          definition: "Provided by the browser or Node.js, handle asynchronous tasks like setTimeout, fetch, and DOM events. When a task completes, its callback is pushed into the callback queue."
        },
        {
          term: "Callback Queue",
          definition: "Holds completed asynchronous tasks. Tasks are moved to the call stack when it is empty."
        },
        {
          term: "Event Loop",
          definition: "Continuously checks if the call stack is empty. If the call stack is empty, the event loop moves the next task from the callback queue to the call stack for execution. The event loop is a mechanism in JavaScript that continuously monitors the call stack and the callback/microtask queues. It ensures that tasks from the callback queue (macrotasks) or microtask queue are pushed onto the call stack when it is empty, enabling non-blocking asynchronous execution."
        }
      ],
      stepByStep: [
        {
          heading: "Execution Flow:",
          points: [
            "Synchronous code executes directly on the call stack.",
            "Asynchronous tasks are sent to Web APIs.",
            "When Web API tasks complete, callbacks go to the callback queue.",
            "Event loop moves callbacks from queue to call stack when stack is empty."
          ]
        }
      ]
    },
    {
      id: "web-apis-async",
      number: 3,
      title: "How Web APIs Handle Asynchronous Operations",
      introduction: "Web APIs play a crucial role in enabling JavaScript to perform asynchronous tasks. They interact with the call stack and event loop to handle operations like timers, HTTP requests, and DOM events.",
      examples: [
        {
          title: "Understanding Web APIs and Event Loop:",
          code: `console.log('Start');

setTimeout(() => {
  console.log('Inside setTimeout');
}, 2000);

console.log('End');`
        }
      ],
      stepByStep: [
        {
          heading: "Execution Flow:",
          points: [
            "Call Stack: Logs 'Start' and 'End'.",
            "Web API: setTimeout sends the callback to the browser's Web API with a timer of 2 seconds.",
            "Callback Queue: After 2 seconds, the callback (console.log('Inside setTimeout')) moves to the callback queue.",
            "Event Loop: Pushes the callback to the call stack after the main thread finishes."
          ]
        },
        {
          heading: "Output:",
          code: `Start
End
Inside setTimeout`
        }
      ]
    },
    {
      id: "settimeout-setinterval",
      number: 4,
      title: "SetTimeout and SetInterval",
      introduction: "setTimeout and setInterval are Web API functions that enable scheduling delayed or repeated execution of code.",
      keyConcepts: [
        {
          term: "setTimeout",
          definition: "Executes a function once after a specified delay."
        },
        {
          term: "setInterval",
          definition: "Executes a function repeatedly at specified intervals."
        }
      ],
      stepByStep: [
        {
          heading: "How They Work:",
          points: [
            "Both are part of Web APIs.",
            "They schedule tasks asynchronously, so the main thread remains non-blocking."
          ]
        }
      ],
      examples: [
        {
          title: "Using setTimeout:",
          code: `setTimeout(() => {
  console.log('Executed after 1 second');
}, 1000);`
        },
        {
          title: "Using setInterval:",
          code: `let count = 0;
const intervalId = setInterval(() => {
  console.log(\`Interval count: \${++count}\`);
  if (count === 5) {
    clearInterval(intervalId); // Stop after 5 intervals
  }
}, 1000);`
        }
      ]
    },
    {
      id: "promises",
      number: 5,
      title: "Promises",
      introduction: "Promises are the backbone of asynchronous programming in JavaScript. A Promise represents a value that may be available now, later, or never. A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It has three states: Pending, Fulfilled, or Rejected, and provides methods like .then, .catch, and .finally to handle these states.",
      keyConcepts: [
        {
          term: "Promise States",
          definition: "Pending: The initial state. Fulfilled: When the operation is successful. Rejected: When the operation fails."
        },
        {
          term: "Promise Methods",
          definition: ".then() - handles fulfilled promises, .catch() - handles rejected promises, .finally() - executes regardless of outcome"
        }
      ],
      examples: [
        {
          title: "Creating and Handling Promises:",
          code: `const promiseExample = new Promise((resolve, reject) => {
  let success = true; // Simulate success or failure
  setTimeout(() => {
    if (success) {
      resolve('Operation successful');
    } else {
      reject('Operation failed');
    }
  }, 2000);
});

promiseExample
  .then((message) => console.log(message)) // Logs "Operation successful" after 2 seconds
  .catch((error) => console.error(error));`
        },
        {
          title: "Promise Chaining:",
          code: `new Promise((resolve) => {
  setTimeout(() => resolve(5), 1000);
})
  .then((value) => value * 2)
  .then((result) => console.log(result)); // Logs 10 after 1 second`
        }
      ]
    },
    {
      id: "async-await",
      number: 6,
      title: "Async/Await",
      introduction: "The async and await keywords simplify handling Promises, allowing asynchronous code to appear synchronous.",
      keyConcepts: [
        {
          term: "async",
          definition: "Makes a function return a Promise."
        },
        {
          term: "await",
          definition: "Pauses the execution until the Promise resolves or rejects. Can only be used inside async functions."
        }
      ],
      stepByStep: [
        {
          heading: "How It Works:",
          points: [
            "The await keyword pauses the execution until the Promise resolves or rejects.",
            "The try-catch block handles errors gracefully."
          ]
        }
      ],
      examples: [
        {
          title: "Async/Await Example:",
          code: `async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}
fetchData();`
        }
      ]
    },
    {
      id: "promises-settimeout-example",
      number: 7,
      title: "Example: Promises with SetTimeout",
      introduction: "A practical example that combines Promises with setTimeout to simulate an asynchronous task.",
      examples: [
        {
          title: "Delay Function with Promises:",
          code: `function delay(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) {
      reject('Time cannot be negative!');
    } else {
      setTimeout(() => {
        resolve(\`Waited for \${seconds} second(s)\`);
      }, seconds * 1000);
    }
  });
}

// Using the delay function
delay(2)
  .then((message) => {
    console.log(message); // Logs after 2 seconds
    return delay(1);
  })
  .then((message) => {
    console.log(message); // Logs after another 1 second
  })
  .catch((error) => {
    console.error(error); // Handles any error
  });`
        }
      ]
    },
    {
      id: "fetch-async-await-example",
      number: 8,
      title: "Example: Fetch with async/await and try-catch",
      introduction: "A comprehensive example demonstrating how to use async/await with fetch API, including proper error handling with try-catch blocks.",
      examples: [
        {
          title: "Fetch Users with Error Handling:",
          code: `async function fetchUsers() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  try {
    console.log('Fetching data...');
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const users = await response.json();
    console.log('Fetched Users:', users);
  } catch (error) {
    console.error('Error occurred:', error.message);
  } finally {
    console.log('Fetch attempt complete.');
  }
}

fetchUsers();`
        }
      ],
      stepByStep: [
        {
          heading: "Key Points:",
          points: [
            "try block contains the async operations.",
            "catch block handles any errors that occur.",
            "finally block executes regardless of success or failure.",
            "Proper error checking with response.ok before processing data."
          ]
        }
      ]
    }
  ],
  "js-3": [
    {
      id: "understanding-dom",
      number: 1,
      title: "Understanding the DOM (Document Object Model)",
      introduction: "The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, allowing developers to manipulate content, structure, and styles dynamically.",
      keyConcepts: [
        {
          term: "Document",
          definition: "The root object of the DOM tree, representing the entire HTML document."
        },
        {
          term: "Nodes",
          definition: "Represent elements, attributes, or text in the DOM tree."
        },
        {
          term: "DOM Tree",
          definition: "A hierarchical representation of the document structure."
        }
      ],
      examples: [
        {
          title: "Example of a Simple DOM Tree:",
          description: "For the following HTML:",
          code: `<html>
  <body>
    <h1 id="title">Hello World</h1>
    <p class="content">This is a paragraph.</p>
  </body>
</html>`
        },
        {
          title: "The DOM tree looks like this:",
          code: `Document
 └── <html>
      └── <body>
           ├── <h1 id="title">Hello World</h1>
           └── <p class="content">This is a paragraph.</p>`
        },
        {
          title: "Accessing the DOM in JavaScript:",
          code: `// Accessing elements
const title = document.getElementById('title');
const paragraphs = document.querySelectorAll('.content');

// Manipulating content
title.textContent = 'Welcome to the DOM!';`
        }
      ]
    },
    {
      id: "crud-operations-dom",
      number: 2,
      title: "CRUD Operations on the DOM",
      introduction: "CRUD (Create, Read, Update, Delete) operations are essential for interacting with the DOM.",
      keyConcepts: [
        {
          term: "Create",
          definition: "Add elements dynamically to the DOM."
        },
        {
          term: "Read",
          definition: "Access existing elements from the DOM."
        },
        {
          term: "Update",
          definition: "Modify content or attributes of DOM elements."
        },
        {
          term: "Delete",
          definition: "Remove elements from the DOM."
        }
      ],
      examples: [
        {
          title: "Create:",
          code: `const newElement = document.createElement('div');
newElement.textContent = 'This is a new div';
document.body.appendChild(newElement);`
        },
        {
          title: "Read:",
          code: `const header = document.getElementById('title');
console.log(header.textContent); // Logs: "Welcome to the DOM!"`
        },
        {
          title: "Update:",
          code: `header.textContent = 'Updated Title';
header.style.color = 'blue';`
        },
        {
          title: "Delete:",
          code: `header.remove(); // Removes the <h1> element`
        },
        {
          title: "Full CRUD Operation:",
          code: `// Create
const newPara = document.createElement('p');
newPara.textContent = 'This is a new paragraph.';
document.body.appendChild(newPara);

// Read
const para = document.querySelector('p');
console.log(para.textContent);

// Update
para.textContent = 'Updated paragraph content.';
para.style.fontWeight = 'bold';

// Delete
para.remove();`
        }
      ]
    },
    {
      id: "html-elements-nodelist",
      number: 3,
      title: "HTML Elements vs NodeList",
      introduction: "Understanding the difference between HTML Elements and NodeList is crucial for effective DOM manipulation.",
      keyConcepts: [
        {
          term: "HTML Elements",
          definition: "Represent DOM elements as objects with specific properties like id, className, and innerHTML. Accessed using methods like getElementById or getElementsByClassName.",
          example: `const header = document.getElementById('title'); // HTMLElement
console.log(header.id); // "title"`
        },
        {
          term: "NodeList",
          definition: "A collection of DOM nodes, which can be elements, text, or comments. Returned by methods like querySelectorAll. Similar to arrays but lacks many array methods.",
          example: `const nodeList = document.querySelectorAll('p'); // NodeList
console.log(nodeList.length); // Number of <p> elements`
        }
      ],
      examples: [
        {
          title: "Converting NodeList to Array:",
          code: `const paragraphs = Array.from(document.querySelectorAll('p'));
paragraphs.forEach((p) => console.log(p.textContent));`
        }
      ]
    },
    {
      id: "hof-map-filter-reduce",
      number: 4,
      title: "High-Order Functions (HOFs): map, filter, reduce",
      introduction: "High-Order Functions are functions that take other functions as arguments or return them. They are powerful tools for working with arrays in JavaScript.",
      keyConcepts: [
        {
          term: "map",
          definition: "Creates a new array by applying a function to each element of the original array.",
          example: `const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]`
        },
        {
          term: "filter",
          definition: "Creates a new array containing elements that satisfy a given condition.",
          example: `const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]`
        },
        {
          term: "reduce",
          definition: "Reduces an array to a single value by repeatedly applying a function to elements.",
          example: `const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10`
        }
      ],
      examples: [
        {
          title: "map Example:",
          code: `const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]`
        },
        {
          title: "filter Example:",
          code: `const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]`
        },
        {
          title: "reduce Example:",
          code: `const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10`
        }
      ]
    },
    {
      id: "dom-hof-practical",
      number: 5,
      title: "Practical Example: DOM + HOFs",
      introduction: "Combining DOM manipulation with Higher-Order Functions for practical use cases.",
      examples: [
        {
          title: "HTML Structure:",
          code: `<ul id="items">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>`
        },
        {
          title: "JavaScript:",
          code: `// Get NodeList of all list items
const items = document.querySelectorAll('#items li');

// Convert NodeList to Array
const itemTexts = Array.from(items).map((item) => item.textContent);

console.log(itemTexts); // ["Apple", "Banana", "Cherry"]

// Filter items containing the letter "a"
const filteredItems = itemTexts.filter((text) => text.toLowerCase().includes('a'));
console.log(filteredItems); // ["Banana", "Cherry"]

// Create a single string of items
const concatenatedItems = itemTexts.reduce((acc, curr) => acc + ', ' + curr);
console.log(concatenatedItems); // "Apple, Banana, Cherry"`
        }
      ]
    },
    {
      id: "hof-searching-filtering-sorting",
      number: 6,
      title: "Applying Higher-Order Functions (HOFs) for Searching, Filtering, Pagination, and Sorting",
      introduction: "Higher-Order Functions (HOFs) operate on arrays, taking a function as an argument or returning a function. They are essential for concise, expressive, and reusable code.",
      keyConcepts: [
        {
          term: "map",
          definition: "Transforms each element of an array into a new array."
        },
        {
          term: "forEach",
          definition: "Iterates over an array, typically used for side effects."
        },
        {
          term: "filter",
          definition: "Creates a new array with elements that satisfy a condition."
        },
        {
          term: "reduce",
          definition: "Reduces an array to a single value by repeatedly applying a function."
        },
        {
          term: "sort",
          definition: "Reorders elements of an array based on a comparator function."
        }
      ],
      examples: [
        {
          title: "Searching Logic:",
          code: `const products = [
  { id: 1, name: 'Laptop', description: 'Portable computer' },
  { id: 2, name: 'Phone', description: 'Handheld device' },
  { id: 3, name: 'Tablet', description: 'Touchscreen device' }
];

// Search by keyword
const searchKeyword = 'laptop';

const searchResults = products.filter(product =>
  product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
  product.description.toLowerCase().includes(searchKeyword.toLowerCase())
);

console.log(searchResults);
// Output: [{ id: 1, name: 'Laptop', description: 'Portable computer' }]`
        },
        {
          title: "Filtering Logic:",
          code: `const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 700 }
];

// Filter products by price range
const minPrice = 600;
const maxPrice = 1200;

const filteredProducts = products.filter(product =>
  product.price >= minPrice && product.price <= maxPrice
);

console.log(filteredProducts);
// Output: [{ id: 1, name: 'Laptop', price: 1000 }, { id: 3, name: 'Tablet', price: 700 }]`
        },
        {
          title: "Sorting Logic:",
          code: `const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 700 }
];

// Ascending order
const sortedAsc = products.slice().sort((a, b) => a.price - b.price);
console.log(sortedAsc);
// Output: [{ id: 2, name: 'Phone', price: 500 }, { id: 3, name: 'Tablet', price: 700 }, { id: 1, name: 'Laptop', price: 1000 }]

// Descending order
const sortedDesc = products.slice().sort((a, b) => b.price - a.price);
console.log(sortedDesc);
// Output: [{ id: 1, name: 'Laptop', price: 1000 }, { id: 3, name: 'Tablet', price: 700 }, { id: 2, name: 'Phone', price: 500 }]`
        },
        {
          title: "Pagination Logic:",
          code: `const items = Array.from({ length: 50 }, (_, i) => \`Item \${i + 1}\`); // Example dataset

// Pagination logic
function paginate(array, pageSize, currentPage) {
  const start = (currentPage - 1) * pageSize;
  return array.slice(start, start + pageSize);
}

// Paginate items (10 items per page, page 2)
const pageSize = 10;
const currentPage = 2;

const paginatedItems = paginate(items, pageSize, currentPage);
console.log(paginatedItems);
// Output: ["Item 11", "Item 12", ..., "Item 20"]`
        },
        {
          title: "Combining Searching, Filtering, and Sorting:",
          code: `const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 700 },
  { id: 4, name: 'Smartwatch', price: 200 }
];

const searchKeyword = 'p';
const minPrice = 300;
const maxPrice = 1200;

// Combined operations
const result = products
  .filter(product =>
    product.name.toLowerCase().includes(searchKeyword.toLowerCase())
  )
  .filter(product => product.price >= minPrice && product.price <= maxPrice)
  .sort((a, b) => a.name.localeCompare(b.name));

console.log(result);
// Output: [
//   { id: 1, name: 'Laptop', price: 1000 },
//   { id: 3, name: 'Tablet', price: 700 }
// ]`
        }
      ],
      stepByStep: [
        {
          heading: "Advantages of Using HOFs:",
          points: [
            "Concise Code: HOFs reduce boilerplate and improve readability.",
            "Reusability: HOF-based logic can be easily reused and extended.",
            "Functional Approach: Encourages immutability and avoids side effects."
          ]
        }
      ],
      additionalResources: [
        {
          title: "MDN: Array.prototype.map()",
          url: "#"
        },
        {
          title: "MDN: Array.prototype.filter()",
          url: "#"
        },
        {
          title: "MDN: Array.prototype.reduce()",
          url: "#"
        },
        {
          title: "MDN: Array.prototype.sort()",
          url: "#"
        }
      ]
    },
    {
      id: "debouncing-throttling",
      number: 7,
      title: "Debouncing and Throttling",
      introduction: "Debouncing and throttling are techniques used to optimize performance by controlling the rate at which functions are executed, especially for events that fire frequently.",
      keyConcepts: [
        {
          term: "Debouncing",
          definition: "Ensures that a function is executed only after a specified time has passed since it was last invoked. If the event occurs again within the wait time, the timer resets. Useful for scenarios where events occur rapidly, and we want to delay execution until the user stops triggering the event. Examples include searching in a text input field (to reduce API calls) and resizing a window."
        },
        {
          term: "Throttling",
          definition: "Ensures that a function is executed at most once in a specified time interval, no matter how many times the event occurs. Useful for limiting the frequency of function calls. Examples include handling scroll events (e.g., infinite scrolling) and resizing the browser window."
        }
      ],
      stepByStep: [
        {
          heading: "Differences Between Debouncing and Throttling:",
          description: "Debouncing: Executes after a pause in events. Delays execution until the event stops firing. Use Case: Search inputs, window resize. Throttling: Executes at regular intervals during events. Limits the rate at which the function executes. Use Case: Scrolling, API rate limiting."
        }
      ],
      examples: [
        {
          title: "Debouncing Implementation:",
          code: `function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // Clear the existing timer
    timer = setTimeout(() => func.apply(this, args), delay); // Set a new timer
  };
}`
        },
        {
          title: "Example: Search Input:",
          code: `const searchInput = document.getElementById('search');

const fetchData = (query) => {
  console.log(\`Fetching data for: \${query}\`);
};

const debouncedFetch = debounce(fetchData, 500); // Wait 500ms after user stops typing

searchInput.addEventListener('input', (event) => {
  debouncedFetch(event.target.value);
});`
        },
        {
          title: "Throttling Implementation:",
          code: `function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}`
        },
        {
          title: "Example: Scroll Event:",
          code: `const handleScroll = () => {
  console.log('Scroll event triggered');
};

const throttledScroll = throttle(handleScroll, 1000); // Execute at most once every 1000ms

window.addEventListener('scroll', throttledScroll);`
        },
        {
          title: "Real-World Example: Debouncing Window Resize:",
          code: `const logResize = debounce(() => {
  console.log('Window resized');
}, 300);

window.addEventListener('resize', logResize);`
        },
        {
          title: "Real-World Example: Throttling Infinite Scroll:",
          code: `const fetchMoreContent = throttle(() => {
  console.log('Fetching more content...');
}, 2000);

window.addEventListener('scroll', fetchMoreContent);`
        }
      ],
      summary: "Debouncing ensures a function is executed only after a specified delay following the last event. Throttling ensures a function is executed at most once every specified interval. Debouncing is ideal for search input and window resize. Throttling is ideal for scroll events and API rate limiting."
    }
  ],
  "js-4": [
    {
      id: "factory-functions",
      number: 1,
      title: "Factory Functions",
      introduction: "A factory function is a function that returns a new object. It is a simple way to create multiple objects with shared properties and methods without using classes or constructors.",
      keyConcepts: [
        {
          term: "Factory Function",
          definition: "A function that returns a new object. Easy creation of objects without using the `new` keyword. Works well for lightweight object generation."
        }
      ],
      examples: [
        {
          title: "Factory Function Example:",
          code: `function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(\`Hello, my name is \${this.name}\`);
    }
  };
}

const person1 = createPerson('Alice', 25);
const person2 = createPerson('Bob', 30);

person1.greet(); // Hello, my name is Alice
person2.greet(); // Hello, my name is Bob`
        }
      ],
      stepByStep: [
        {
          heading: "Use Case:",
          points: [
            "Easy creation of objects without using the `new` keyword.",
            "Works well for lightweight object generation."
          ]
        }
      ]
    },
    {
      id: "constructor-functions",
      number: 2,
      title: "Constructor Functions",
      introduction: "A constructor function is a function used to create objects and is invoked with the `new` keyword. It automates object creation and initializes properties.",
      keyConcepts: [
        {
          term: "Constructor Function",
          definition: "A function used to create objects, invoked with the `new` keyword. It automates object creation and initializes properties. Particularly useful for creating multiple instances of objects with shared properties and methods."
        }
      ],
      examples: [
        {
          title: "Constructor Function Example:",
          code: `function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(\`Hello, my name is \${this.name}\`);
  };
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.greet(); // Hello, my name is Alice
person2.greet(); // Hello, my name is Bob`
        }
      ],
      stepByStep: [
        {
          heading: "Bulk Object Creation:",
          points: [
            "Constructor functions are particularly useful for creating multiple instances of objects with shared properties and methods."
          ]
        }
      ]
    },
    {
      id: "es6-class-constructors",
      number: 3,
      title: "ES6 Class Constructors",
      introduction: "ES6 introduces the `class` keyword as syntactic sugar over constructor functions. It provides a cleaner and more readable way to create objects and handle inheritance.",
      keyConcepts: [
        {
          term: "ES6 Classes",
          definition: "Syntactic sugar over constructor functions. Provides a cleaner and more readable way to create objects and handle inheritance."
        }
      ],
      examples: [
        {
          title: "ES6 Class Example:",
          code: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.greet(); // Hello, my name is Alice
person2.greet(); // Hello, my name is Bob`
        }
      ],
      additionalResources: [
        {
          title: "MDN: Classes",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
        }
      ]
    },
    {
      id: "prototype",
      number: 4,
      title: "prototype",
      introduction: "The `prototype` is an object associated with every function and object in JavaScript. It is used to share methods and properties among instances of an object, reducing memory usage.",
      keyConcepts: [
        {
          term: "prototype",
          definition: "An object associated with every function and object in JavaScript. Used to share methods and properties among instances of an object, reducing memory usage."
        }
      ],
      examples: [
        {
          title: "Using prototype:",
          code: `function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(\`Hello, my name is \${this.name}\`);
};

const person1 = new Person('Alice', 25);
person1.greet(); // Hello, my name is Alice`
        }
      ],
      stepByStep: [
        {
          heading: "Why Use prototype?",
          points: [
            "Methods defined on the prototype are shared across all instances, reducing memory overhead."
          ]
        }
      ],
      additionalResources: [
        {
          title: "MDN: prototype",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes"
        }
      ]
    },
    {
      id: "object-create",
      number: 5,
      title: "Object.create()",
      introduction: "The `Object.create()` method creates a new object with the specified prototype and properties.",
      keyConcepts: [
        {
          term: "Object.create()",
          definition: "Creates a new object with the specified prototype and properties."
        }
      ],
      examples: [
        {
          title: "Object.create() Example:",
          code: `const proto = {
  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
};

const person = Object.create(proto);
person.name = 'Alice';

person.greet(); // Hello, my name is Alice`
        },
        {
          title: "Using Object.create() for Prototype Chain:",
          code: `const proto = { greet: function () { console.log('Hello!'); } };
const obj = Object.create(proto);

obj.greet(); // Hello!`
        }
      ]
    },
    {
      id: "setprototypeof-getprototypeof",
      number: 6,
      title: "setPrototypeOf() and getPrototypeOf()",
      introduction: "`Object.setPrototypeOf()` sets the prototype of an object, while `Object.getPrototypeOf()` retrieves the prototype of an object.",
      keyConcepts: [
        {
          term: "Object.setPrototypeOf()",
          definition: "Sets the prototype of an object."
        },
        {
          term: "Object.getPrototypeOf()",
          definition: "Retrieves the prototype of an object."
        }
      ],
      examples: [
        {
          title: "Object.setPrototypeOf() Example:",
          code: `const proto = { greet: function () { console.log(\`Hello, \${this.name}\`); } };
const obj = { name: 'Alice' };

Object.setPrototypeOf(obj, proto);
obj.greet(); // Hello, Alice`
        },
        {
          title: "Object.getPrototypeOf() Example:",
          code: `console.log(Object.getPrototypeOf(obj) === proto); // true`
        },
        {
          title: "Using setPrototypeOf() for Prototype Chain:",
          code: `const proto = { walk: function () { console.log('Walking...'); } };
const obj = { name: 'Dog' };

Object.setPrototypeOf(obj, proto);

obj.walk(); // Walking...`
        },
        {
          title: "Retrieving Prototype:",
          code: `console.log(Object.getPrototypeOf(obj)); // { walk: [Function: walk] }`
        }
      ],
      additionalResources: [
        {
          title: "MDN: Object.create()",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"
        },
        {
          title: "MDN: Object.setPrototypeOf()",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"
        }
      ]
    },
    {
      id: "constructor-prototype-key-value",
      number: 7,
      title: "constructor.prototype.key = value",
      introduction: "Adding methods or properties to a constructor function's prototype makes them accessible to all instances created by that constructor.",
      keyConcepts: [
        {
          term: "constructor.prototype",
          definition: "Adding methods to the constructor's prototype makes them available to all instances. Methods added to the prototype are shared among all instances of the object."
        }
      ],
      examples: [
        {
          title: "Adding Methods to Prototype:",
          code: `function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(\`Hello, my name is \${this.name}\`);
};

const person1 = new Person('Alice');
person1.greet(); // Hello, my name is Alice`
        }
      ],
      stepByStep: [
        {
          heading: "Key Insight:",
          points: [
            "Methods added to the prototype are shared among all instances of the object."
          ]
        }
      ]
    },
    {
      id: "es6-class-methods-prototypes",
      number: 8,
      title: "ES6 Class Methods and Prototypes",
      introduction: "Methods written in ES6 class syntax are automatically added to the `prototype` of the class, ensuring shared access among instances.",
      keyConcepts: [
        {
          term: "ES6 Class Prototype",
          definition: "Methods in ES6 classes are automatically added to the prototype. This behavior optimizes memory usage by sharing methods across all instances."
        }
      ],
      examples: [
        {
          title: "ES6 Class Methods on Prototype:",
          code: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
}

console.log(Person.prototype.greet); // function greet() { ... }

const person = new Person('Alice', 25);
person.greet(); // Hello, my name is Alice`
        }
      ],
      stepByStep: [
        {
          heading: "Key Insight:",
          points: [
            "This behavior optimizes memory usage by sharing methods across all instances."
          ]
        }
      ]
    },
    {
      id: "proto",
      number: 9,
      title: "__proto__",
      introduction: "`__proto__` is an internal property available on all objects in JavaScript. It is a reference to the prototype of the object. It provides access to the prototype chain, which is the mechanism JavaScript uses to inherit properties and methods.",
      keyConcepts: [
        {
          term: "__proto__",
          definition: "An internal property available on all objects in JavaScript. It is a reference to the prototype of the object (the value of `Object.getPrototypeOf(obj)`). It allows traversal of the prototype chain. It is a legacy feature but widely supported."
        }
      ],
      examples: [
        {
          title: "__proto__ Example:",
          code: `const person = { name: 'Alice' };
const proto = { greet: function () { console.log('Hello!'); } };

// Setting prototype using __proto__
person.__proto__ = proto;

person.greet(); // Hello!`
        },
        {
          title: "Accessing Methods in the Prototype Chain:",
          code: `const parent = { greet: function () { console.log('Hello from parent!'); } };
const child = { name: 'Alice' };

child.__proto__ = parent;

child.greet(); // Hello from parent!`
        },
        {
          title: "Setting __proto__ Explicitly:",
          code: `const animal = { eat: function () { console.log('Eating...'); } };
const dog = { bark: function () { console.log('Barking...'); } };

dog.__proto__ = animal;

dog.eat(); // Eating...
dog.bark(); // Barking...`
        }
      ],
      stepByStep: [
        {
          heading: "Key Points:",
          points: [
            "`__proto__` points to the object's prototype (the value of `Object.getPrototypeOf(obj)`).",
            "It allows traversal of the prototype chain.",
            "It is a legacy feature but widely supported."
          ]
        },
        {
          heading: "Differences Between prototype and __proto__:",
          description: "prototype: Property of constructor functions that is shared by all instances. Exists only on functions (used for object creation). Use Case: Defines shared properties/methods for instances. __proto__: Property of an object pointing to its prototype. Exists on all objects. Use Case: Traversing or modifying the prototype chain."
        },
        {
          heading: "Best Practices:",
          points: [
            "Direct manipulation of `__proto__` is not recommended for performance reasons.",
            "Use modern methods like `Object.create()`, `Object.setPrototypeOf()`, and `Object.getPrototypeOf()` instead."
          ]
        },
        {
          heading: "When to Use:",
          points: [
            "Use `Object.create()` to create new objects with a specific prototype.",
            "Use `Object.setPrototypeOf()` and `Object.getPrototypeOf()` for managing prototype chains explicitly.",
            "Avoid using `__proto__` in modern JavaScript code as it is considered a legacy feature."
          ]
        }
      ],
      summary: "`__proto__` is a legacy property for accessing an object's prototype. While widely supported, modern JavaScript code should use `Object.create()`, `Object.setPrototypeOf()`, and `Object.getPrototypeOf()` instead for better performance and maintainability."
    }
  ],
  "js-5": [
    {
      id: "destructuring",
      number: 1,
      title: "Destructuring",
      introduction: "Destructuring is a syntax introduced in ES6 that allows unpacking values from arrays or properties from objects into distinct variables in a concise manner.",
      keyConcepts: [
        {
          term: "Destructuring",
          definition: "A syntax introduced in ES6 that allows unpacking values from arrays or properties from objects into distinct variables in a concise manner."
        }
      ],
      examples: [
        {
          title: "Array Destructuring:",
          code: `const fruits = ['Apple', 'Banana', 'Cherry'];
const [first, second, third] = fruits;

console.log(first); // Apple
console.log(second); // Banana
console.log(third); // Cherry`
        },
        {
          title: "Object Destructuring:",
          code: `const person = { name: 'Alice', age: 25, city: 'New York' };
const { name, age, city } = person;

console.log(name); // Alice
console.log(age); // 25
console.log(city); // New York`
        },
        {
          title: "Default Values:",
          code: `const [a = 1, b = 2] = [];
console.log(a, b); // 1, 2`
        }
      ]
    },
    {
      id: "multi-level-destructuring",
      number: 2,
      title: "Multi-Level Destructuring",
      introduction: "Multi-level destructuring allows unpacking values from nested objects or arrays in a single statement.",
      keyConcepts: [
        {
          term: "Multi-Level Destructuring",
          definition: "Allows unpacking values from nested objects or arrays in a single statement."
        }
      ],
      examples: [
        {
          title: "Nested Object Destructuring:",
          code: `const user = {
  name: 'Alice',
  address: {
    city: 'New York',
    location: { latitude: 40.7128, longitude: -74.0060 }
  }
};

const {
  address: {
    city,
    location: { latitude, longitude }
  }
} = user;

console.log(city); // New York
console.log(latitude, longitude); // 40.7128, -74.0060`
        },
        {
          title: "Nested Array Destructuring:",
          code: `const numbers = [1, [2, 3], [4, [5, 6]]];
const [first, [second, third], [fourth, [fifth, sixth]]] = numbers;

console.log(first); // 1
console.log(second, third); // 2, 3
console.log(fourth, fifth, sixth); // 4, 5, 6`
        }
      ]
    },
    {
      id: "spreading",
      number: 3,
      title: "Spreading",
      introduction: "The spread operator (`...`) expands an array, object, or iterable into its individual elements. It is useful for copying, merging, or destructuring.",
      keyConcepts: [
        {
          term: "Spread Operator",
          definition: "The `...` operator expands an array, object, or iterable into its individual elements. Useful for copying, merging, or destructuring."
        }
      ],
      examples: [
        {
          title: "Array Spreading:",
          code: `const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = [...nums1, ...nums2];

console.log(combined); // [1, 2, 3, 4, 5, 6]`
        },
        {
          title: "Object Spreading:",
          code: `const obj1 = { name: 'Alice', age: 25 };
const obj2 = { city: 'New York' };
const merged = { ...obj1, ...obj2 };

console.log(merged); // { name: 'Alice', age: 25, city: 'New York' }`
        },
        {
          title: "Swapping Variables:",
          code: `let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1`
        }
      ]
    },
    {
      id: "shallow-deep-copy",
      number: 4,
      title: "Shallow vs. Deep Copy",
      introduction: "Understanding the difference between shallow and deep copies is crucial for working with objects and arrays in JavaScript.",
      keyConcepts: [
        {
          term: "Shallow Copy",
          definition: "Copies only the first level of an object or array. Nested structures are shared."
        },
        {
          term: "Deep Copy",
          definition: "Creates a completely independent copy, duplicating all levels of the structure."
        }
      ],
      examples: [
        {
          title: "Shallow Copy:",
          code: `const original = { name: 'Alice', address: { city: 'NYC' } };
const shallowCopy = { ...original };

shallowCopy.address.city = 'LA';
console.log(original.address.city); // LA (shared reference)`
        },
        {
          title: "Deep Copy:",
          code: `const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = 'Chicago';
console.log(original.address.city); // NYC (unchanged)`
        }
      ]
    },
    {
      id: "pass-by-value-reference",
      number: 5,
      title: "Pass by Value vs. Pass by Reference",
      introduction: "Understanding how JavaScript handles primitive and non-primitive types when passing them to functions or assigning them to variables.",
      keyConcepts: [
        {
          term: "Pass by Value",
          definition: "Primitive types are copied by value. Modifications do not affect the original variable."
        },
        {
          term: "Pass by Reference",
          definition: "Non-primitive types (objects, arrays) are passed by reference. Modifications affect the original."
        }
      ],
      examples: [
        {
          title: "Pass by Value:",
          code: `let x = 10;
let y = x;
y += 5;

console.log(x); // 10
console.log(y); // 15`
        },
        {
          title: "Pass by Reference:",
          code: `const obj1 = { name: 'Alice' };
const obj2 = obj1;

obj2.name = 'Bob';
console.log(obj1.name); // Bob (shared reference)`
        }
      ]
    },
    {
      id: "type-coercion",
      number: 6,
      title: "Type Coercion",
      introduction: "Type coercion is the automatic or implicit conversion of values from one data type to another.",
      keyConcepts: [
        {
          term: "Type Coercion",
          definition: "The automatic or implicit conversion of values from one data type to another."
        },
        {
          term: "Implicit Coercion",
          definition: "Automatic conversion performed by JavaScript."
        },
        {
          term: "Explicit Coercion",
          definition: "Manual conversion using functions like Number(), String(), Boolean()."
        }
      ],
      examples: [
        {
          title: "Implicit Coercion:",
          code: `console.log('5' + 5); // "55" (string concatenation)
console.log('5' - 2); // 3 (string converted to number)`
        },
        {
          title: "Explicit Coercion:",
          code: `const str = '123';
const num = Number(str);
console.log(num); // 123`
        }
      ]
    },
    {
      id: "concurrency-javascript",
      number: 7,
      title: "Concurrency in JavaScript",
      introduction: "Concurrency in JavaScript refers to its ability to manage multiple tasks efficiently within its single-threaded environment using asynchronous programming (Promises, `async/await`, Event Loop).",
      keyConcepts: [
        {
          term: "Concurrency",
          definition: "The ability to manage multiple tasks efficiently within JavaScript's single-threaded environment using asynchronous programming (Promises, async/await, Event Loop)."
        }
      ],
      examples: [
        {
          title: "Concurrency Example:",
          code: `console.log('Start');

setTimeout(() => {
  console.log('Async Task');
}, 1000);

console.log('End');
// Output: Start, End, Async Task`
        }
      ]
    },
    {
      id: "this-keyword",
      number: 8,
      title: "this Keyword",
      introduction: "The `this` keyword refers to the object that is executing the function. Its value depends on how the function is invoked.",
      keyConcepts: [
        {
          term: "this Keyword",
          definition: "Refers to the object that is executing the function. Its value depends on how the function is invoked."
        },
        {
          term: "Arrow Functions and this",
          definition: "Arrow functions do not have their own `this`; they inherit it from their enclosing scope."
        }
      ],
      examples: [
        {
          title: "Using this in Object Methods:",
          code: `const user = {
  name: 'Alice',
  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
};

user.greet(); // Hello, my name is Alice`
        },
        {
          title: "Arrow Functions and this:",
          code: `const user = {
  name: 'Alice',
  greet: () => {
    console.log(\`Hello, my name is \${this.name}\`);
  }
};

user.greet(); // Hello, my name is undefined`
        },
        {
          title: "call Method:",
          code: `function greet(greeting) {
  console.log(\`\${greeting}, my name is \${this.name}\`);
}

const user = { name: 'Alice' };
greet.call(user, 'Hello'); // Hello, my name is Alice`
        },
        {
          title: "apply Method:",
          code: `greet.apply(user, ['Hi']); // Hi, my name is Alice`
        },
        {
          title: "bind Method:",
          code: `const boundGreet = greet.bind(user);
boundGreet('Hey'); // Hey, my name is Alice`
        }
      ],
      stepByStep: [
        {
          heading: "Call, Apply, Bind:",
          description: "These methods explicitly set the value of `this`. `call` invokes the function with a specified `this` value and arguments provided individually. `apply` is similar to `call` but takes arguments as an array. `bind` creates a new function with a bound `this` value that can be called later."
        }
      ]
    }
  ],
  "react-1": [
    {
      id: "state-management-overview",
      number: 1,
      title: "State Management in React",
      introduction: "State management refers to the handling of data that changes over time in a React application. React provides built-in hooks like `useState`, `useRef`, `useReducer`, and `useEffect`, along with the `Context API`, for managing both local and global state. Understanding these tools is essential for building scalable, maintainable React applications.",
      keyConcepts: [
        {
          term: "State Management",
          definition: "The handling of data that changes over time in a React application. React provides built-in hooks and Context API for managing both local and global state."
        }
      ]
    },
    {
      id: "usestate",
      number: 2,
      title: "State Management with useState",
      introduction: "The `useState` hook allows you to create and update local state in functional components.",
      keyConcepts: [
        {
          term: "useState",
          definition: "A hook that allows you to create and update local state in functional components. Returns a state variable and a state updater function."
        }
      ],
      examples: [
        {
          title: "useState Example:",
          code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}`
        }
      ],
      stepByStep: [
        {
          heading: "How It Works:",
          points: [
            "The state variable (`count`) stores the current value.",
            "The state updater function (`setCount`) modifies the state.",
            "React re-renders the component whenever `setState` is called."
          ]
        },
        {
          heading: "When to Use:",
          points: [
            "For managing simple, component-specific state like form inputs, toggles, or counters."
          ]
        }
      ]
    },
    {
      id: "useref",
      number: 3,
      title: "Managing State with useRef",
      introduction: "The `useRef` hook provides a way to persist a value or reference across renders without causing the component to re-render when the value changes.",
      keyConcepts: [
        {
          term: "useRef",
          definition: "A hook that provides a way to persist a value or reference across renders without causing the component to re-render when the value changes."
        }
      ],
      examples: [
        {
          title: "DOM Manipulation:",
          code: `import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Access the DOM element directly
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`
        },
        {
          title: "Persisting a Timer:",
          code: `import React, { useState, useRef } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => setCount((prev) => prev + 1), 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <p>Timer: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}`
        }
      ],
      stepByStep: [
        {
          heading: "Use Cases:",
          points: [
            "DOM Manipulation: Access and manipulate DOM elements directly.",
            "Persisting Values: Store mutable values like timers or counters that don't trigger re-renders.",
            "Performance Optimization: Avoid unnecessary updates by persisting values outside of the component's state."
          ]
        },
        {
          heading: "When Not to Use useRef:",
          points: [
            "State-Driven Logic: If the data affects rendering, use `useState` instead.",
            "Complex State: For complex state transitions, use `useReducer`."
          ]
        }
      ]
    },
    {
      id: "useeffect",
      number: 4,
      title: "Managing Side Effects with useEffect",
      introduction: "The `useEffect` hook manages side effects in React components, such as fetching data, subscribing to an event, or updating the DOM manually.",
      keyConcepts: [
        {
          term: "useEffect",
          definition: "A hook that manages side effects in React components, such as fetching data, subscribing to an event, or updating the DOM manually."
        }
      ],
      examples: [
        {
          title: "Fetching Data:",
          code: `import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); // Runs only once

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`
        }
      ],
      stepByStep: [
        {
          heading: "How It Works:",
          points: [
            "Effect: Runs after the component renders.",
            "Dependencies: Controls when the effect is executed.",
            "Empty Array (`[]`): Effect runs only once (like `componentDidMount`).",
            "Dependencies: Effect runs whenever the specified dependencies change."
          ]
        },
        {
          heading: "When to Use:",
          points: [
            "Fetching data from APIs.",
            "Subscribing to or cleaning up listeners.",
            "Performing manual DOM updates."
          ]
        }
      ]
    },
    {
      id: "context-api",
      number: 5,
      title: "Global State Management with Context API",
      introduction: "The `Context API` enables sharing state across the component tree without passing props through every level (prop drilling).",
      keyConcepts: [
        {
          term: "Context API",
          definition: "Enables sharing state across the component tree without passing props through every level (prop drilling)."
        }
      ],
      examples: [
        {
          title: "Create Context:",
          code: `const UserContext = React.createContext();`
        },
        {
          title: "Provide Context:",
          code: `const App = () => {
  const user = { name: 'Alice', age: 25 };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
};`
        },
        {
          title: "Consume Context:",
          code: `const Profile = () => {
  const user = React.useContext(UserContext);
  return <p>{\`Name: \${user.name}, Age: \${user.age}\`}</p>;
};`
        }
      ],
      stepByStep: [
        {
          heading: "Steps to Use Context API:",
          points: [
            "Create Context: Use `React.createContext()`.",
            "Provide Context: Wrap components with `Context.Provider`.",
            "Consume Context: Use `React.useContext()` to access the context value."
          ]
        },
        {
          heading: "When to Use Context API:",
          points: [
            "Global state shared by multiple components (e.g., user authentication, theme settings)."
          ]
        },
        {
          heading: "Limitations:",
          points: [
            "Frequent updates to the context value can lead to performance issues. Use `useReducer` for complex state logic."
          ]
        }
      ]
    },
    {
      id: "usereducer",
      number: 6,
      title: "Managing State with useReducer",
      introduction: "The `useReducer` hook provides centralized state management, especially useful for complex state logic with multiple transitions.",
      keyConcepts: [
        {
          term: "useReducer",
          definition: "A hook that provides centralized state management, especially useful for complex state logic with multiple transitions."
        }
      ],
      examples: [
        {
          title: "useReducer Example:",
          code: `import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}`
        }
      ],
      stepByStep: [
        {
          heading: "When to Use:",
          points: [
            "Complex state transitions with multiple actions.",
            "Managing state in a scalable and maintainable way."
          ]
        }
      ]
    },
    {
      id: "lifecycle-useeffect",
      number: 7,
      title: "Lifecycle in React and How to Control It with useEffect",
      introduction: "In React, every component goes through a series of stages from its creation to destruction. These stages are collectively referred to as the component lifecycle. Understanding this lifecycle is crucial for managing state, performing side effects, and optimizing performance.",
      keyConcepts: [
        {
          term: "Component Lifecycle",
          definition: "The series of stages a component goes through from its creation to destruction: Mounting, Updating, and Unmounting."
        },
        {
          term: "Mounting",
          definition: "The component is created and inserted into the DOM. Use `useEffect` with an empty dependency array `[]` to simulate `componentDidMount`."
        },
        {
          term: "Updating",
          definition: "The component re-renders due to changes in props or state. Use `useEffect` with dependencies to handle updates."
        },
        {
          term: "Unmounting",
          definition: "The component is removed from the DOM. Use the cleanup function inside `useEffect` to simulate `componentWillUnmount`."
        }
      ],
      examples: [
        {
          title: "Mimicking componentDidMount:",
          code: `import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array ensures it runs only once

  return <div>{data ? \`Data: \${data}\` : 'Loading...'}</div>;
}`
        },
        {
          title: "Mimicking componentDidUpdate:",
          code: `import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(\`Count has been updated to: \${count}\`);
  }, [count]); // Runs only when \`count\` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`
        },
        {
          title: "Mimicking componentWillUnmount:",
          code: `import React, { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);

    return () => {
      clearInterval(interval); // Cleanup on unmount
    };
  }, []); // Empty array ensures interval is set only once

  return <div>Time: {time}s</div>;
}`
        },
        {
          title: "Cleanup a Subscription:",
          code: `useEffect(() => {
  const handleResize = () => console.log('Window resized');
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize); // Cleanup on unmount
  };
}, []); // Runs once on mount, cleans up on unmount`
        }
      ],
      stepByStep: [
        {
          heading: "The Three Phases of React Component Lifecycle:",
          points: [
            "Mounting: The component is created and inserted into the DOM.",
            "Updating: The component re-renders due to changes in props or state.",
            "Unmounting: The component is removed from the DOM."
          ]
        },
        {
          heading: "Best Practices for Using useEffect:",
          points: [
            "Use Dependencies Wisely: Always include dependencies if the effect depends on them.",
            "Avoid Overusing useEffect: If you can compute a value directly in the render, avoid putting it in `useEffect`.",
            "Cleanup Properly: Use the cleanup function for resource management.",
            "Memoize Callbacks: Use `useCallback` or `useMemo` to prevent unnecessary re-renders."
          ]
        }
      ]
    },
    {
      id: "controlled-uncontrolled-components",
      number: 8,
      title: "Controlled vs. Uncontrolled Components in React",
      introduction: "In React, form elements like inputs, textareas, and select elements can be managed in two ways: Controlled Components (React fully manages the state) and Uncontrolled Components (the DOM itself manages the state). Understanding these two approaches is crucial for building forms in React effectively.",
      keyConcepts: [
        {
          term: "Controlled Components",
          definition: "React fully manages the state of the form element. The component's state acts as the 'single source of truth'. Requires an `onChange` handler to update the state."
        },
        {
          term: "Uncontrolled Components",
          definition: "The DOM itself manages the state of the form element. React accesses the value through a `ref`. The component doesn't re-render when the input value changes."
        }
      ],
      examples: [
        {
          title: "Controlled Component Example:",
          code: `import React, { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(\`Submitted Value: \${inputValue}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`
        },
        {
          title: "Uncontrolled Component Example:",
          code: `import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(\`Submitted Value: \${inputRef.current.value}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`
        },
        {
          title: "Mixing Controlled and Uncontrolled Components:",
          code: `import React, { useState, useRef } from 'react';

function MixedForm() {
  const [email, setEmail] = useState('');
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(\`Name: \${nameRef.current.value}, Email: \${email}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name (Uncontrolled):
        <input type="text" ref={nameRef} />
      </label>
      <label>
        Email (Controlled):
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`
        }
      ],
      stepByStep: [
        {
          heading: "Controlled Components - Advantages:",
          points: [
            "Single Source of Truth: React state controls the form, making data flow predictable.",
            "Validation: Easier to perform validation and enforce rules dynamically.",
            "Integration: Works seamlessly with React's state and lifecycle methods."
          ]
        },
        {
          heading: "Controlled Components - Disadvantages:",
          points: [
            "Verbose Code: Requires additional state and handlers for every input.",
            "Performance: Frequent re-renders may impact performance for large forms."
          ]
        },
        {
          heading: "Uncontrolled Components - Advantages:",
          points: [
            "Simpler Code: No need to manage state or handlers for inputs.",
            "Performance: Fewer re-renders, as the input state is not managed by React.",
            "Use Cases: Ideal for simple forms or when integrating with non-React libraries."
          ]
        },
        {
          heading: "Uncontrolled Components - Disadvantages:",
          points: [
            "Validation: Harder to validate and enforce rules dynamically.",
            "Limited React Control: React has less control over the form element's behavior.",
            "Debugging: Accessing and managing refs can make debugging harder."
          ]
        },
        {
          heading: "When to Use Controlled Components:",
          points: [
            "Complex forms with real-time validation.",
            "When the form data needs to be synchronized with React state.",
            "Dynamic forms where input values affect other parts of the UI."
          ]
        },
        {
          heading: "When to Use Uncontrolled Components:",
          points: [
            "Simple forms where React doesn't need to manage input values.",
            "Forms where performance is critical, and re-renders need to be minimized.",
            "When integrating with non-React libraries that rely on direct DOM manipulation."
          ]
        }
      ]
    }
  ],
  "react-2": [
    {
      id: "context-api-redux",
      number: 1,
      title: "State Management in React: Context API vs. Redux",
      introduction: "Understanding the differences between Context API and Redux is crucial for choosing the right state management solution for your React application. Context API is React's built-in solution, while Redux is a powerful external library for complex state management.",
      keyConcepts: [
        {
          term: "Context API",
          definition: "React's built-in feature that allows components to share state across the component tree without prop drilling. Provides a simple way to manage global state for applications with relatively simple state requirements."
        },
        {
          term: "Redux",
          definition: "A predictable state container for JavaScript applications. Uses a unidirectional data flow and enforces state management through actions, reducers, and a global store."
        }
      ],
      examples: [
        {
          title: "Context API - Create Context:",
          code: `const MyContext = React.createContext();`
        },
        {
          title: "Context API - Provide Context:",
          code: `function App() {
  const sharedState = { user: 'Alice' };

  return (
    <MyContext.Provider value={sharedState}>
      <ChildComponent />
    </MyContext.Provider>
  );
}`
        },
        {
          title: "Context API - Consume Context:",
          code: `function ChildComponent() {
  const context = React.useContext(MyContext);
  return <p>{\`User: \${context.user}\`}</p>;
}`
        },
        {
          title: "Redux - Define Actions:",
          code: `const increment = { type: 'INCREMENT' };
const decrement = { type: 'DECREMENT' };`
        },
        {
          title: "Redux - Define Reducer:",
          code: `function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}`
        },
        {
          title: "Redux - Create Store:",
          code: `import { legacy_createStore } from 'redux';
const store = legacy_createStore(counterReducer);`
        },
        {
          title: "Redux - Dispatch Actions:",
          code: `store.dispatch(increment); // Updates state to { count: 1 }
store.dispatch(decrement); // Updates state to { count: 0 }`
        }
      ],
      stepByStep: [
        {
          heading: "When to Use Context API:",
          points: [
            "When you need to share global state like themes, authentication, or user preferences.",
            "For small to medium-sized applications where state complexity is low."
          ]
        },
        {
          heading: "Context API Limitations:",
          points: [
            "Performance issues may arise if the context value changes frequently.",
            "Harder to debug and test compared to Redux."
          ]
        },
        {
          heading: "When to Use Redux:",
          points: [
            "The application has complex or large-scale global state.",
            "You need strict control and predictability over state transitions.",
            "Debugging and performance optimization are critical.",
            "You need advanced middleware capabilities for handling side effects."
          ]
        }
      ]
    },
    {
      id: "combine-reducers",
      number: 2,
      title: "combineReducers",
      introduction: "The `combineReducers` function allows splitting the Redux state into multiple slices, each managed by its own reducer. It combines these reducers into a single root reducer.",
      keyConcepts: [
        {
          term: "combineReducers",
          definition: "A function that allows splitting the Redux state into multiple slices, each managed by its own reducer. Combines these reducers into a single root reducer."
        }
      ],
      examples: [
        {
          title: "combineReducers Example:",
          code: `import { combineReducers, createStore } from 'redux';

const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer
});

// Create store
const store = createStore(rootReducer);
console.log(store.getState()); // { user: { user: null }, counter: { count: 0 } }`
        }
      ]
    },
    {
      id: "redux-middleware-thunk",
      number: 3,
      title: "Middleware in Redux and Redux Thunk",
      introduction: "Middleware in Redux intercepts actions before they reach the reducer. It is used to perform side effects like logging, API calls, or dispatching additional actions. Redux Thunk is a middleware that allows action creators to return functions instead of plain action objects.",
      keyConcepts: [
        {
          term: "Middleware",
          definition: "Intercepts actions before they reach the reducer. Used to perform side effects like logging, API calls, or dispatching additional actions."
        },
        {
          term: "Redux Thunk",
          definition: "A middleware that allows action creators to return a function (instead of an action). This function can perform asynchronous logic and dispatch actions based on results."
        }
      ],
      examples: [
        {
          title: "Configure Store with Thunk:",
          code: `import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));`
        },
        {
          title: "Async Action Creator with Thunk:",
          code: `const fetchUser = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_USER_REQUEST' });

    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((user) => {
        dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_USER_FAILURE', error });
      });
  };
};

// Dispatch async action
store.dispatch(fetchUser());`
        }
      ],
      stepByStep: [
        {
          heading: "Common Middleware:",
          points: [
            "Logging Middleware: Logs dispatched actions and updated state.",
            "Thunk Middleware: Handles asynchronous logic like API calls."
          ]
        }
      ]
    },
    {
      id: "custom-hooks",
      number: 4,
      title: "Custom Hooks in React",
      introduction: "A custom hook is a JavaScript function that utilizes one or more React hooks (`useState`, `useEffect`, etc.) to encapsulate reusable logic. Custom hooks enable code reusability and modularity.",
      keyConcepts: [
        {
          term: "Custom Hook",
          definition: "A JavaScript function that utilizes one or more React hooks to encapsulate reusable logic. Custom hooks start with the prefix `use` (e.g., `useFetch`, `useToggle`)."
        }
      ],
      examples: [
        {
          title: "useFetch Custom Hook:",
          code: `import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading };
}

// Usage in a component
function App() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}`
        },
        {
          title: "useToggle Custom Hook:",
          code: `function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const toggle = () => setState((prev) => !prev);

  return [state, toggle];
}

// Usage in a component
function ToggleComponent() {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <button onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <p>Toggle Me!</p>}
    </div>
  );
}`
        }
      ],
      stepByStep: [
        {
          heading: "How to Create a Custom Hook:",
          points: [
            "Custom hooks start with the prefix `use` (e.g., `useFetch`, `useToggle`).",
            "Encapsulate the logic you want to reuse.",
            "Return state, methods, or values for use in components."
          ]
        },
        {
          heading: "Benefits of Custom Hooks:",
          points: [
            "Reusability: Encapsulate logic and use it across multiple components.",
            "Readability: Reduces clutter in components by abstracting logic.",
            "Testability: Makes logic easier to isolate and test."
          ]
        }
      ]
    },
    {
      id: "usecallback-usememo",
      number: 5,
      title: "useCallback and useMemo",
      introduction: "`useCallback` and `useMemo` are React hooks used for performance optimization. `useCallback` memoizes functions to prevent unnecessary re-creations, while `useMemo` memoizes computed values to avoid expensive recalculations.",
      keyConcepts: [
        {
          term: "useCallback",
          definition: "A React hook that memoizes a function. Ensures the function reference remains stable between renders unless its dependencies change. Used to prevent unnecessary re-creations of functions and optimize child components that rely on function props."
        },
        {
          term: "useMemo",
          definition: "A React hook that memoizes a computed value, ensuring it is only recalculated when its dependencies change. Used to optimize performance by avoiding expensive calculations on every render."
        }
      ],
      examples: [
        {
          title: "useCallback Example:",
          code: `import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(1);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + incrementAmount);
  }, [incrementAmount]); // Recreates only when incrementAmount changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
    </div>
  );
}`
        },
        {
          title: "useMemo Example:",
          code: `import React, { useState, useMemo } from 'react';

function ExpensiveComputationComponent() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const expensiveComputation = useMemo(() => {
    console.log('Computing...');
    return count * multiplier;
  }, [count, multiplier]); // Recomputes only when count or multiplier changes

  return (
    <div>
      <p>Computed Value: {expensiveComputation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(Number(e.target.value))}
      />
    </div>
  );
}`
        }
      ],
      stepByStep: [
        {
          heading: "When to Use useCallback:",
          points: [
            "When passing functions as props to child components.",
            "When the function depends on state or props that rarely change."
          ]
        },
        {
          heading: "When to Use useMemo:",
          points: [
            "For optimizing expensive calculations that depend on specific variables.",
            "When the computed value is used in the render but rarely changes."
          ]
        }
      ]
    },
    {
      id: "react-memo",
      number: 6,
      title: "React.memo",
      introduction: "`React.memo` is a higher-order component (HOC) that prevents unnecessary re-renders of a component if its props haven't changed. It is used for performance optimization by memoizing entire components.",
      keyConcepts: [
        {
          term: "React.memo",
          definition: "A higher-order component (HOC) that prevents unnecessary re-renders of a component if its props haven't changed. Used for performance optimization by memoizing entire components."
        }
      ],
      examples: [
        {
          title: "React.memo Example:",
          code: `import React, { useState } from 'react';

const ChildComponent = React.memo(({ value }) => {
  console.log('Child Rendered');
  return <p>Child Value: {value}</p>;
});

function ParentComponent() {
  const [parentValue, setParentValue] = useState(0);
  const [childValue, setChildValue] = useState(0);

  return (
    <div>
      <button onClick={() => setParentValue(parentValue + 1)}>Increment Parent</button>
      <button onClick={() => setChildValue(childValue + 1)}>Increment Child</button>
      <ChildComponent value={childValue} />
    </div>
  );
}`
        }
      ],
      stepByStep: [
        {
          heading: "How It Works:",
          points: [
            "The `ChildComponent` only re-renders when the `value` prop changes, thanks to `React.memo`."
          ]
        },
        {
          heading: "When to Use React.memo:",
          points: [
            "For functional components that rely heavily on props and do not depend on parent re-renders.",
            "In conjunction with `useCallback` and `useMemo` to optimize performance."
          ]
        }
      ]
    }
  ]
};

// Helper functions
export function getSectionById(sectionId) {
  return interviewSections.find(section => section.id === sectionId);
}

export function getAllSections() {
  return interviewSections;
}

export function getTopicsBySection(sectionId) {
  return interviewTopics[sectionId] || [];
}

export function getTopicById(sectionId, topicId) {
  const topics = interviewTopics[sectionId];
  if (!topics) return null;
  return topics.find(topic => topic.id === topicId);
}

export function getTotalSections() {
  return interviewSections.length;
}

export function getTotalTopicsInSection(sectionId) {
  const topics = interviewTopics[sectionId];
  return topics ? topics.length : 0;
}

