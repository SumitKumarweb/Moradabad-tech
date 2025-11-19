export const articles = [
  {
    slug: "html-full-information",
    title: "HTML Full Information",
    description: "A comprehensive guide to HTML, the standard markup language for documents designed to be displayed in a web browser.",
    excerpt: "Master HTML from basics to advanced concepts with real-world examples.",
    category: "HTML",
    image: "/html-code-snippet.png",
    author: "Moradabad Tech Team",
    difficulty: "Beginner",
    readTime: "15 min read",
    tags: ["HTML5", "Web Development", "Markup"],
    hasQuiz: true,
    quizId: "html-basics-quiz",
    content: `
      <h2>What is HTML?</h2>
      <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of web pages using markup.</p>
      
      <h3>HTML Elements</h3>
      <p>HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag.</p>
      
      <pre><code>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</code></pre>
      
      <h3>Basic HTML Document Structure</h3>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;My First Heading&lt;/h1&gt;
    &lt;p&gt;My first paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <h3>Common HTML Tags</h3>
      <ul>
        <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong> - Headings</li>
        <li><strong>&lt;p&gt;</strong> - Paragraph</li>
        <li><strong>&lt;a&gt;</strong> - Hyperlink</li>
        <li><strong>&lt;img&gt;</strong> - Image</li>
        <li><strong>&lt;div&gt;</strong> - Division/Container</li>
        <li><strong>&lt;span&gt;</strong> - Inline Container</li>
      </ul>
      
      <h3>HTML Attributes</h3>
      <p>HTML attributes provide additional information about HTML elements. They are always specified in the start tag.</p>
      
      <pre><code>&lt;a href="https://moradabadtech.com"&gt;Visit our site&lt;/a&gt;
&lt;img src="image.jpg" alt="Description"&gt;</code></pre>
    `,
    date: "2023-10-01",
  },
  {
    slug: "css-styling",
    title: "Mastering CSS Styling",
    description: "Learn how to style your HTML documents with CSS. From basics to advanced layouts.",
    excerpt: "Transform your web pages with modern CSS techniques and best practices.",
    category: "CSS",
    image: "/css-styling.jpg",
    author: "Moradabad Tech Team",
    difficulty: "Intermediate",
    readTime: "20 min read",
    tags: ["CSS3", "Styling", "Flexbox", "Grid"],
    hasQuiz: true,
    quizId: "css-basics-quiz",
    content: `
      <h2>What is CSS?</h2>
      <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen.</p>
      
      <h3>CSS Syntax</h3>
      <pre><code>selector {
  property: value;
}</code></pre>
      
      <h3>Types of CSS</h3>
      <ul>
        <li><strong>Inline CSS</strong> - Styles applied directly to HTML elements</li>
        <li><strong>Internal CSS</strong> - Styles defined within &lt;style&gt; tags</li>
        <li><strong>External CSS</strong> - Styles defined in separate .css files</li>
      </ul>
      
      <h3>CSS Selectors</h3>
      <pre><code>/* Element Selector */
p { color: blue; }

/* Class Selector */
.container { width: 100%; }

/* ID Selector */
#header { background: #333; }

/* Attribute Selector */
input[type="text"] { border: 1px solid #ccc; }</code></pre>
      
      <h3>CSS Box Model</h3>
      <p>Every HTML element is represented as a rectangular box with content, padding, border, and margin.</p>
      
      <h3>Flexbox Layout</h3>
      <pre><code>.container {
  display: flex;
  justify-content: center;
  align-items: center;
}</code></pre>
      
      <h3>CSS Grid</h3>
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}</code></pre>
    `,
    date: "2023-10-05",
  },
  {
    slug: "javascript-basics",
    title: "JavaScript Complete Learning",
    description: "Start your journey with JavaScript, the programming language of the Web.",
    excerpt: "Learn JavaScript from fundamentals to advanced concepts with hands-on examples.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabad Tech Team",
    difficulty: "Intermediate",
    readTime: "25 min read",
    tags: ["JavaScript", "ES6+", "Programming", "DOM"],
    hasQuiz: true,
    quizId: "javascript-basics-quiz",
    content: `
      <h2>Introduction to JavaScript</h2>
      <p>JavaScript is a high-level, interpreted programming language that enables interactive web pages. It's an essential part of web applications.</p>
      
      <h3>Variables and Data Types</h3>
      <pre><code>// Variable declarations
let name = "John";
const age = 25;
var city = "Moradabad";

// Data types
let string = "Hello";
let number = 42;
let boolean = true;
let array = [1, 2, 3];
let object = { name: "John", age: 25 };</code></pre>
      
      <h3>Functions</h3>
      <pre><code>// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow function
const add = (a, b) => a + b;

// Function expression
const multiply = function(a, b) {
  return a * b;
};</code></pre>
      
      <h3>Control Structures</h3>
      <pre><code>// If-else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
while (count < 10) {
  count++;
}</code></pre>
      
      <h3>Array Methods</h3>
      <pre><code>const numbers = [1, 2, 3, 4, 5];

// Map
const doubled = numbers.map(n => n * 2);

// Filter
const evens = numbers.filter(n => n % 2 === 0);

// Reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);</code></pre>
      
      <h3>DOM Manipulation</h3>
      <pre><code>// Select elements
const element = document.getElementById("myId");
const elements = document.querySelectorAll(".myClass");

// Modify content
element.textContent = "New text";
element.innerHTML = "&lt;strong&gt;Bold text&lt;/strong&gt;";

// Add event listener
element.addEventListener("click", () => {
  console.log("Clicked!");
});</code></pre>
    `,
    date: "2023-10-10",
  },
  {
    slug: "react-js-guide",
    title: "React JS Complete Learning",
    description: "Build modern user interfaces with React. The complete guide for beginners.",
    excerpt: "Master React fundamentals and build dynamic, interactive web applications.",
    category: "React",
    image: "/react-js-logo.png",
    author: "Moradabad Tech Team",
    difficulty: "Advanced",
    readTime: "30 min read",
    tags: ["React", "Components", "Hooks", "State Management"],
    hasQuiz: true,
    quizId: "react-basics-quiz",
    content: `
      <h2>What is React?</h2>
      <p>React is a JavaScript library for building user interfaces, particularly single-page applications. It's maintained by Facebook and a community of developers.</p>
      
      <h3>Components</h3>
      <p>Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.</p>
      
      <pre><code>// Functional Component
function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}

// Arrow function component
const Greeting = ({ name }) => {
  return &lt;div&gt;Welcome, {name}!&lt;/div&gt;;
};</code></pre>
      
      <h3>JSX</h3>
      <p>JSX is a syntax extension for JavaScript that looks similar to HTML.</p>
      
      <pre><code>const element = (
  &lt;div className="container"&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;This is JSX&lt;/p&gt;
  &lt;/div&gt;
);</code></pre>
      
      <h3>Hooks</h3>
      <pre><code>import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Props and State</h3>
      <pre><code>// Props - passing data to components
&lt;Welcome name="John" age={25} /&gt;

// State - managing component data
const [user, setUser] = useState({
  name: "John",
  age: 25
});</code></pre>
      
      <h3>Event Handling</h3>
      <pre><code>function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  
  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
    `,
    date: "2023-10-15",
  },
]

export const quizzes = [
  {
    id: "html-basics-quiz",
    articleSlug: "html-full-information",
    title: "HTML Fundamentals Quiz",
    description: "Test your knowledge of HTML basics and structure",
    questions: [
      {
        id: "q1",
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language"
        ],
        correctAnswer: 0,
        explanation: "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages."
      },
      {
        id: "q2",
        question: "Which HTML tag is used to define the largest heading?",
        options: ["&lt;heading&gt;", "&lt;h6&gt;", "&lt;h1&gt;", "&lt;head&gt;"],
        correctAnswer: 2,
        explanation: "&lt;h1&gt; is used for the largest heading, while &lt;h6&gt; is the smallest."
      },
      {
        id: "q3",
        question: "What is the correct HTML element for inserting a line break?",
        options: ["&lt;break&gt;", "&lt;br&gt;", "&lt;lb&gt;", "&lt;newline&gt;"],
        correctAnswer: 1,
        explanation: "&lt;br&gt; is a self-closing tag used to insert a line break in HTML."
      },
      {
        id: "q4",
        question: "Which attribute is used to provide alternative text for an image?",
        options: ["title", "alt", "src", "description"],
        correctAnswer: 1,
        explanation: "The 'alt' attribute provides alternative text for an image if it cannot be displayed."
      },
      {
        id: "q5",
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
          "&lt;a url='http://example.com'&gt;Link&lt;/a&gt;",
          "&lt;a href='http://example.com'&gt;Link&lt;/a&gt;",
          "&lt;link href='http://example.com'&gt;Link&lt;/link&gt;",
          "&lt;a&gt;http://example.com&lt;/a&gt;"
        ],
        correctAnswer: 1,
        explanation: "The &lt;a&gt; tag with the 'href' attribute is used to create hyperlinks."
      },
      {
        id: "q6",
        question: "Which HTML5 element is used for navigation links?",
        options: ["&lt;nav&gt;", "&lt;navigation&gt;", "&lt;menu&gt;", "&lt;navigate&gt;"],
        correctAnswer: 0,
        explanation: "The &lt;nav&gt; element is used to define a set of navigation links."
      },
      {
        id: "q7",
        question: "What is the purpose of the &lt;meta&gt; tag?",
        options: [
          "To create metadata about the HTML document",
          "To create a new page",
          "To add images",
          "To create links"
        ],
        correctAnswer: 0,
        explanation: "The &lt;meta&gt; tag provides metadata about the HTML document, such as character encoding, description, and keywords."
      },
      {
        id: "q8",
        question: "Which HTML element is used to define important text?",
        options: ["&lt;important&gt;", "&lt;strong&gt;", "&lt;bold&gt;", "&lt;b&gt;"],
        correctAnswer: 1,
        explanation: "&lt;strong&gt; is used to define text with strong importance, typically displayed in bold."
      },
      {
        id: "q9",
        question: "What does the &lt;form&gt; element do?",
        options: [
          "Creates a table",
          "Creates an input form for user data",
          "Creates a list",
          "Creates a button"
        ],
        correctAnswer: 1,
        explanation: "The &lt;form&gt; element is used to create an HTML form for user input."
      },
      {
        id: "q10",
        question: "Which attribute is used to make an input field required?",
        code: "&lt;input type='text' ? /&gt;",
        options: ["mandatory", "required", "must", "necessary"],
        correctAnswer: 1,
        explanation: "The 'required' attribute specifies that an input field must be filled out before submitting the form."
      },
      {
        id: "q11",
        question: "What is the correct HTML for creating an ordered list?",
        options: [
          "&lt;list&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/list&gt;",
          "&lt;ol&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ol&gt;",
          "&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;",
          "&lt;order&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/order&gt;"
        ],
        correctAnswer: 1,
        explanation: "&lt;ol&gt; creates an ordered (numbered) list, while &lt;ul&gt; creates an unordered (bulleted) list."
      },
      {
        id: "q12",
        question: "Which HTML5 element represents a section of a page that contains content that is tangentially related?",
        options: ["&lt;aside&gt;", "&lt;section&gt;", "&lt;article&gt;", "&lt;div&gt;"],
        correctAnswer: 0,
        explanation: "The &lt;aside&gt; element represents content that is tangentially related to the content around it."
      },
      {
        id: "q13",
        question: "What is the purpose of the &lt;header&gt; element?",
        options: [
          "To create a table header",
          "To define a header for a document or section",
          "To create a navigation bar",
          "To add a title"
        ],
        correctAnswer: 1,
        explanation: "The &lt;header&gt; element represents introductory content, typically containing headings, logos, or navigation."
      },
      {
        id: "q14",
        question: "Which HTML element is used to embed a video?",
        options: ["&lt;video&gt;", "&lt;movie&gt;", "&lt;media&gt;", "&lt;embed-video&gt;"],
        correctAnswer: 0,
        explanation: "The &lt;video&gt; element is used to embed video content in an HTML document."
      },
      {
        id: "q15",
        question: "What does the &lt;footer&gt; element typically contain?",
        options: [
          "Navigation links",
          "Copyright information and contact details",
          "Main content",
          "Images"
        ],
        correctAnswer: 1,
        explanation: "The &lt;footer&gt; element typically contains copyright information, contact details, and related links."
      }
    ]
  },
  {
    id: "css-basics-quiz",
    articleSlug: "css-styling",
    title: "CSS Fundamentals Quiz",
    description: "Test your understanding of CSS styling concepts",
    questions: [
      {
        id: "q1",
        question: "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets"
        ],
        correctAnswer: 1,
        explanation: "CSS stands for Cascading Style Sheets, used to style HTML documents."
      },
      {
        id: "q2",
        question: "Which property is used to change the background color?",
        options: ["bgcolor", "color", "background-color", "bg-color"],
        correctAnswer: 2,
        explanation: "The 'background-color' property is used to set the background color of an element."
      },
      {
        id: "q3",
        question: "How do you select an element with class 'container'?",
        options: ["#container", ".container", "container", "*container"],
        correctAnswer: 1,
        explanation: "The dot (.) prefix is used to select elements by their class name."
      },
      {
        id: "q4",
        question: "Which CSS property controls the text size?",
        options: ["text-size", "font-size", "text-style", "font-style"],
        correctAnswer: 1,
        explanation: "'font-size' is the property used to control the size of text."
      },
      {
        id: "q5",
        question: "What is the correct CSS syntax for making all paragraphs bold?",
        code: "p { font-weight: bold; }",
        options: [
          "p { text-weight: bold; }",
          "p { font-weight: bold; }",
          "p { font: bold; }",
          "p { text-style: bold; }"
        ],
        correctAnswer: 1,
        explanation: "'font-weight: bold' is the correct syntax to make text bold."
      },
      {
        id: "q6",
        question: "Which CSS property is used to change the text color?",
        options: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: 1,
        explanation: "The 'color' property is used to set the color of text."
      },
      {
        id: "q7",
        question: "How do you make text italic in CSS?",
        options: [
          "font-style: italic;",
          "text-style: italic;",
          "font: italic;",
          "style: italic;"
        ],
        correctAnswer: 0,
        explanation: "'font-style: italic;' is used to make text italic."
      },
      {
        id: "q8",
        question: "Which CSS property is used to add space between letters?",
        options: ["letter-spacing", "word-spacing", "text-spacing", "character-spacing"],
        correctAnswer: 0,
        explanation: "'letter-spacing' controls the spacing between characters in text."
      },
      {
        id: "q9",
        question: "What does 'display: flex' do?",
        code: ".container { display: flex; }",
        options: [
          "Makes elements invisible",
          "Creates a flexible box layout",
          "Changes text direction",
          "Adds borders"
        ],
        correctAnswer: 1,
        explanation: "'display: flex' creates a flexible box layout, enabling flexible items to be laid out efficiently."
      },
      {
        id: "q10",
        question: "Which property is used to align flex items along the main axis?",
        options: ["align-items", "justify-content", "align-content", "flex-align"],
        correctAnswer: 1,
        explanation: "'justify-content' aligns flex items along the main axis (horizontally in a row)."
      },
      {
        id: "q11",
        question: "What is the CSS box model composed of?",
        options: [
          "Content, padding, border, margin",
          "Width, height, color, background",
          "Top, right, bottom, left",
          "Header, body, footer, sidebar"
        ],
        correctAnswer: 0,
        explanation: "The CSS box model consists of content, padding, border, and margin."
      },
      {
        id: "q12",
        question: "Which CSS property is used to create rounded corners?",
        options: ["border-radius", "corner-radius", "round-border", "border-round"],
        correctAnswer: 0,
        explanation: "'border-radius' is used to create rounded corners on elements."
      },
      {
        id: "q13",
        question: "What does 'position: absolute' do?",
        options: [
          "Positions element relative to its parent",
          "Positions element relative to the viewport",
          "Positions element relative to its normal position",
          "Makes element float"
        ],
        correctAnswer: 0,
        explanation: "'position: absolute' positions an element relative to its nearest positioned ancestor."
      },
      {
        id: "q14",
        question: "Which CSS property is used to control the stacking order of elements?",
        options: ["z-index", "stack-order", "layer", "depth"],
        correctAnswer: 0,
        explanation: "'z-index' controls the stacking order of positioned elements."
      },
      {
        id: "q15",
        question: "What does 'grid-template-columns: repeat(3, 1fr)' create?",
        code: ".grid { display: grid; grid-template-columns: repeat(3, 1fr); }",
        options: [
          "3 rows of equal height",
          "3 columns of equal width",
          "3 items per row",
          "3px spacing between items"
        ],
        correctAnswer: 1,
        explanation: "This creates a grid with 3 columns, each taking up 1 fraction (1fr) of the available space."
      }
    ]
  },
  {
    id: "javascript-basics-quiz",
    articleSlug: "javascript-basics",
    title: "JavaScript Fundamentals Quiz",
    description: "Test your JavaScript programming knowledge",
    questions: [
      {
        id: "q1",
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "constant"],
        correctAnswer: 2,
        explanation: "'const' is used to declare constants that cannot be reassigned."
      },
      {
        id: "q2",
        question: "What will be the output of: console.log(typeof null)?",
        code: "console.log(typeof null);",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        correctAnswer: 2,
        explanation: "In JavaScript, typeof null returns 'object', which is a known quirk of the language."
      },
      {
        id: "q3",
        question: "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
        explanation: "push() adds one or more elements to the end of an array."
      },
      {
        id: "q4",
        question: "What is the correct way to write an arrow function?",
        options: [
          "function => (a, b) { return a + b; }",
          "(a, b) => { return a + b; }",
          "(a, b) -> { return a + b; }",
          "=> (a, b) { return a + b; }"
        ],
        correctAnswer: 1,
        explanation: "Arrow functions use the syntax: (parameters) => { function body }"
      },
      {
        id: "q5",
        question: "Which method converts JSON string to JavaScript object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.toObject()",
          "JSON.convert()"
        ],
        correctAnswer: 0,
        explanation: "JSON.parse() converts a JSON string into a JavaScript object."
      },
      {
        id: "q6",
        question: "What will be the output of: console.log(2 + '2')?",
        code: "console.log(2 + '2');",
        options: ["4", "'22'", "22", "Error"],
        correctAnswer: 1,
        explanation: "When adding a number and a string, JavaScript converts the number to a string and concatenates them, resulting in '22'."
      },
      {
        id: "q7",
        question: "Which method removes the last element from an array?",
        options: ["shift()", "pop()", "remove()", "delete()"],
        correctAnswer: 1,
        explanation: "pop() removes and returns the last element from an array."
      },
      {
        id: "q8",
        question: "What is the result of: '5' == 5?",
        code: "'5' == 5",
        options: ["true", "false", "undefined", "Error"],
        correctAnswer: 0,
        explanation: "The == operator performs type coercion, so '5' is converted to 5, making the comparison true."
      },
      {
        id: "q9",
        question: "What is a closure in JavaScript?",
        options: [
          "A function that has access to variables in its outer scope",
          "A way to close a file",
          "A method to stop execution",
          "A type of loop"
        ],
        correctAnswer: 0,
        explanation: "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned."
      },
      {
        id: "q10",
        question: "What does the 'this' keyword refer to in a regular function?",
        code: "function test() { console.log(this); }",
        options: [
          "The function itself",
          "The global object (or undefined in strict mode)",
          "The parent object",
          "Always null"
        ],
        correctAnswer: 1,
        explanation: "In a regular function, 'this' refers to the global object (window in browsers), or undefined in strict mode."
      }
    ]
  },
  {
    id: "react-basics-quiz",
    articleSlug: "react-js-guide",
    title: "React Fundamentals Quiz",
    description: "Test your React component and hooks knowledge",
    questions: [
      {
        id: "q1",
        question: "What is JSX?",
        options: [
          "A JavaScript library",
          "A syntax extension for JavaScript",
          "A CSS preprocessor",
          "A templating engine"
        ],
        correctAnswer: 1,
        explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files."
      },
      {
        id: "q2",
        question: "Which hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: 1,
        explanation: "useState is the hook used to add state to functional components."
      },
      {
        id: "q3",
        question: "What does the useEffect hook do?",
        code: "useEffect(() => { /* code */ }, []);",
        options: [
          "Manages state",
          "Performs side effects",
          "Creates context",
          "Handles routing"
        ],
        correctAnswer: 1,
        explanation: "useEffect performs side effects in functional components, like data fetching or subscriptions."
      },
      {
        id: "q4",
        question: "How do you pass data from parent to child component?",
        options: [
          "Using state",
          "Using props",
          "Using context",
          "Using refs"
        ],
        correctAnswer: 1,
        explanation: "Props (properties) are used to pass data from parent components to child components."
      },
      {
        id: "q5",
        question: "What is the virtual DOM?",
        options: [
          "A real DOM copy",
          "A lightweight JavaScript representation of the DOM",
          "A browser API",
          "A React component"
        ],
        correctAnswer: 1,
        explanation: "The virtual DOM is a lightweight JavaScript representation of the real DOM that React uses for efficient updates."
      },
      {
        id: "q6",
        question: "What is the purpose of the key prop in React lists?",
        code: "{items.map(item => &lt;div key={item.id}&gt;{item.name}&lt;/div&gt;)}",
        options: [
          "To style elements",
          "To help React identify which items have changed",
          "To add event handlers",
          "To make elements clickable"
        ],
        correctAnswer: 1,
        explanation: "The key prop helps React identify which items have changed, been added, or removed, improving rendering performance."
      },
      {
        id: "q7",
        question: "What does the second parameter of useEffect control?",
        code: "useEffect(() => { /* effect */ }, [dependencies]);",
        options: [
          "The effect function",
          "When the effect runs (dependency array)",
          "The cleanup function",
          "The return value"
        ],
        correctAnswer: 1,
        explanation: "The dependency array controls when the effect runs. If empty [], it runs once on mount. If it has dependencies, it runs when they change."
      },
      {
        id: "q8",
        question: "What is the difference between controlled and uncontrolled components?",
        options: [
          "Controlled components use state, uncontrolled use refs",
          "Controlled components are faster",
          "Uncontrolled components don't render",
          "There is no difference"
        ],
        correctAnswer: 0,
        explanation: "Controlled components have their value controlled by React state, while uncontrolled components use refs to access form values directly."
      },
      {
        id: "q9",
        question: "What is the purpose of React.memo()?",
        code: "const MemoizedComponent = React.memo(MyComponent);",
        options: [
          "To create a new component",
          "To prevent unnecessary re-renders",
          "To add state to a component",
          "To handle events"
        ],
        correctAnswer: 1,
        explanation: "React.memo() is a higher-order component that prevents a component from re-rendering if its props haven't changed."
      },
      {
        id: "q10",
        question: "What is the correct way to update state based on previous state?",
        code: "const [count, setCount] = useState(0);",
        options: [
          "setCount(count + 1)",
          "setCount(prevCount => prevCount + 1)",
          "count = count + 1",
          "setCount(count++)"
        ],
        correctAnswer: 1,
        explanation: "When updating state based on previous state, use the functional form: setCount(prevCount => prevCount + 1) to avoid stale closures."
      }
    ]
  }
]

