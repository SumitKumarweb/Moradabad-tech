export const articles = [
  {
    slug: "html-full-information",
    title: "HTML Full Information",
    description: "A comprehensive guide to HTML, the standard markup language for documents designed to be displayed in a web browser.",
    excerpt: "Master HTML from basics to advanced concepts with real-world examples.",
    category: "HTML",
    image: "/html-code-snippet.png",
    author: "Moradabads Team",
    difficulty: "Beginner",
    readTime: "15 min read",
    tags: ["HTML5", "Web Development", "Markup"],
    hasQuiz: true,
    quizId: "html-basics-quiz",
    content: `
      <h2>What is HTML?</h2>
      <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It describes the structure of web pages using markup. HTML elements are the building blocks of HTML pages and are represented by tags.</p>
      
      <h3>History of HTML</h3>
      <p>HTML was created by Tim Berners-Lee in 1991. The current version is HTML5, which was released in 2014. HTML5 introduced many new features including semantic elements, audio/video support, canvas, and improved form controls.</p>
      
      <h3>HTML Elements</h3>
      <p>HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag. Some elements are self-closing and don't require an end tag.</p>
      
      <pre><code>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;
&lt;!-- Self-closing tag --&gt;
&lt;img src="image.jpg" alt="Description" /&gt;</code></pre>
      
      <h3>Basic HTML Document Structure</h3>
      <p>Every HTML document follows a basic structure. The &lt;!DOCTYPE html&gt; declaration defines the document type, and the &lt;html&gt; element is the root element.</p>
      
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;My First Heading&lt;/h1&gt;
    &lt;p&gt;My first paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <h3>Common HTML Tags</h3>
      <p>Here are the most commonly used HTML tags:</p>
      <ul>
        <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong> - Headings (h1 is the largest, h6 is the smallest)</li>
        <li><strong>&lt;p&gt;</strong> - Paragraph for text content</li>
        <li><strong>&lt;a&gt;</strong> - Hyperlink to navigate to other pages or sections</li>
        <li><strong>&lt;img&gt;</strong> - Image element (self-closing)</li>
        <li><strong>&lt;div&gt;</strong> - Division/Container for grouping elements</li>
        <li><strong>&lt;span&gt;</strong> - Inline container for styling text</li>
        <li><strong>&lt;ul&gt; and &lt;ol&gt;</strong> - Unordered and ordered lists</li>
        <li><strong>&lt;li&gt;</strong> - List item</li>
        <li><strong>&lt;table&gt;</strong> - Table for tabular data</li>
        <li><strong>&lt;form&gt;</strong> - Form for user input</li>
        <li><strong>&lt;input&gt;</strong> - Input field (text, email, password, etc.)</li>
        <li><strong>&lt;button&gt;</strong> - Clickable button</li>
        <li><strong>&lt;header&gt;</strong> - Header section</li>
        <li><strong>&lt;footer&gt;</strong> - Footer section</li>
        <li><strong>&lt;nav&gt;</strong> - Navigation links</li>
        <li><strong>&lt;section&gt;</strong> - Section of content</li>
        <li><strong>&lt;article&gt;</strong> - Independent content</li>
        <li><strong>&lt;aside&gt;</strong> - Sidebar content</li>
      </ul>
      
      <h3>HTML Attributes</h3>
      <p>HTML attributes provide additional information about HTML elements. They are always specified in the start tag and come in name/value pairs like name="value".</p>
      
      <pre><code>&lt;!-- Link with href attribute --&gt;
&lt;a href="https://moradabadtech.com" target="_blank"&gt;Visit our site&lt;/a&gt;

&lt;!-- Image with src and alt attributes --&gt;
&lt;img src="image.jpg" alt="Description" width="500" height="300"&gt;

&lt;!-- Input with type and placeholder --&gt;
&lt;input type="text" placeholder="Enter your name" required&gt;

&lt;!-- Div with class and id --&gt;
&lt;div class="container" id="main-content"&gt;Content&lt;/div&gt;</code></pre>
      
      <h3>HTML5 Semantic Elements</h3>
      <p>HTML5 introduced semantic elements that clearly describe their meaning in a human- and machine-readable way:</p>
      <ul>
        <li><strong>&lt;header&gt;</strong> - Defines a header for a document or section</li>
        <li><strong>&lt;nav&gt;</strong> - Defines navigation links</li>
        <li><strong>&lt;main&gt;</strong> - Specifies the main content</li>
        <li><strong>&lt;article&gt;</strong> - Defines independent, self-contained content</li>
        <li><strong>&lt;section&gt;</strong> - Defines a section in a document</li>
        <li><strong>&lt;aside&gt;</strong> - Defines content aside from the main content</li>
        <li><strong>&lt;footer&gt;</strong> - Defines a footer for a document or section</li>
      </ul>
      
      <h3>HTML Forms</h3>
      <p>Forms are used to collect user input. Common form elements include:</p>
      <pre><code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input type="text" id="name" name="name" required&gt;
  
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;
  
  &lt;label for="message"&gt;Message:&lt;/label&gt;
  &lt;textarea id="message" name="message" rows="4"&gt;&lt;/textarea&gt;
  
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Always use semantic HTML5 elements</li>
        <li>Include alt text for images for accessibility</li>
        <li>Use proper heading hierarchy (h1 → h2 → h3)</li>
        <li>Validate your HTML code</li>
        <li>Keep your code clean and indented</li>
        <li>Use meaningful class and id names</li>
        <li>Always close your tags properly</li>
      </ul>
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
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "20 min read",
    tags: ["CSS3", "Styling", "Flexbox", "Grid"],
    hasQuiz: true,
    quizId: "css-basics-quiz",
    content: `
      <h2>What is CSS?</h2>
      <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, or in other media. It controls the layout, colors, fonts, and overall visual appearance of web pages.</p>
      
      <h3>History of CSS</h3>
      <p>CSS was first proposed by Håkon Wium Lie in 1994. CSS1 was released in 1996, CSS2 in 1998, and CSS3 started development in 1999. CSS3 introduced modules, allowing different parts of CSS to be developed independently.</p>
      
      <h3>CSS Syntax</h3>
      <p>The basic syntax consists of a selector and a declaration block:</p>
      <pre><code>selector {
  property: value;
  property: value;
}</code></pre>
      
      <h3>Types of CSS</h3>
      <p>There are three ways to add CSS to HTML documents:</p>
      <ul>
        <li><strong>Inline CSS</strong> - Styles applied directly to HTML elements using the style attribute</li>
        <li><strong>Internal CSS</strong> - Styles defined within &lt;style&gt; tags in the HTML document head</li>
        <li><strong>External CSS</strong> - Styles defined in separate .css files and linked using &lt;link&gt; tag</li>
      </ul>
      
      <pre><code>&lt;!-- Inline CSS --&gt;
&lt;p style="color: blue; font-size: 16px;"&gt;Text&lt;/p&gt;

&lt;!-- Internal CSS --&gt;
&lt;style&gt;
  p { color: blue; }
&lt;/style&gt;

&lt;!-- External CSS --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
      
      <h3>CSS Selectors</h3>
      <p>Selectors are patterns used to select the element(s) you want to style:</p>
      <pre><code>/* Element Selector - selects all &lt;p&gt; elements */
p { color: blue; }

/* Class Selector - selects elements with class="container" */
.container { width: 100%; }

/* ID Selector - selects element with id="header" */
#header { background: #333; }

/* Attribute Selector */
input[type="text"] { border: 1px solid #ccc; }

/* Descendant Selector */
div p { color: red; }

/* Child Selector */
div > p { color: green; }

/* Pseudo-class Selector */
a:hover { color: red; }
button:active { background: blue; }

/* Pseudo-element Selector */
p::first-line { font-weight: bold; }
p::before { content: "Note: "; }</code></pre>
      
      <h3>CSS Box Model</h3>
      <p>Every HTML element is represented as a rectangular box with four areas:</p>
      <ul>
        <li><strong>Content</strong> - The actual content (text, images, etc.)</li>
        <li><strong>Padding</strong> - Space between content and border</li>
        <li><strong>Border</strong> - A border around the padding</li>
        <li><strong>Margin</strong> - Space outside the border</li>
      </ul>
      
      <pre><code>.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  box-sizing: border-box; /* includes padding and border in width */
}</code></pre>
      
      <h3>CSS Colors</h3>
      <p>Colors can be specified in various ways:</p>
      <pre><code>/* Named colors */
color: red;
color: blue;

/* Hexadecimal */
color: #ff0000;
color: #00ff00;

/* RGB */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5); /* with opacity */

/* HSL */
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);</code></pre>
      
      <h3>CSS Typography</h3>
      <pre><code>p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  line-height: 1.5;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  letter-spacing: 2px;
  word-spacing: 5px;
}</code></pre>
      
      <h3>CSS Display Property</h3>
      <p>The display property specifies how an element is displayed:</p>
      <pre><code>/* Block - takes full width, starts on new line */
display: block;

/* Inline - takes only necessary width, stays in line */
display: inline;

/* Inline-block - inline but can have width/height */
display: inline-block;

/* None - element is hidden */
display: none;

/* Flex - flexible box layout */
display: flex;

/* Grid - grid layout */
display: grid;</code></pre>
      
      <h3>Flexbox Layout</h3>
      <p>Flexbox is a one-dimensional layout method for laying out items in rows or columns:</p>
      <pre><code>.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: center; /* main axis alignment */
  align-items: center; /* cross axis alignment */
  flex-wrap: wrap; /* wrap items */
  gap: 20px; /* space between items */
}

.item {
  flex: 1; /* grow and shrink */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 200px;
}</code></pre>
      
      <h3>CSS Grid</h3>
      <p>Grid is a two-dimensional layout system for creating complex layouts:</p>
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: auto;
  gap: 20px; /* space between grid items */
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.grid-item {
  grid-column: span 2; /* span 2 columns */
  grid-row: 1; /* row 1 */
  grid-area: header; /* named area */
}</code></pre>
      
      <h3>CSS Positioning</h3>
      <pre><code>/* Static - default positioning */
position: static;

/* Relative - relative to normal position */
position: relative;
top: 10px;
left: 20px;

/* Absolute - relative to nearest positioned ancestor */
position: absolute;
top: 0;
right: 0;

/* Fixed - relative to viewport */
position: fixed;
bottom: 0;
left: 0;

/* Sticky - relative until scrolled, then fixed */
position: sticky;
top: 0;</code></pre>
      
      <h3>CSS Responsive Design</h3>
      <p>Media queries allow you to apply styles based on device characteristics:</p>
      <pre><code>/* Mobile first approach */
.container {
  width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 1200px;
  }
}</code></pre>
      
      <h3>CSS Animations and Transitions</h3>
      <pre><code>/* Transition */
.button {
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: blue;
}

/* Animation */
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

.element {
  animation: slide 2s infinite;
}</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use external CSS files for better organization</li>
        <li>Follow a naming convention (BEM, OOCSS, etc.)</li>
        <li>Use CSS variables for reusable values</li>
        <li>Write mobile-first responsive CSS</li>
        <li>Minimize specificity conflicts</li>
        <li>Use flexbox and grid for layouts</li>
        <li>Optimize CSS for performance</li>
        <li>Use semantic class names</li>
      </ul>
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
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "25 min read",
    tags: ["JavaScript", "ES6+", "Programming", "DOM"],
    hasQuiz: true,
    quizId: "javascript-basics-quiz",
    content: `
      <h2>Introduction to JavaScript</h2>
      <p>JavaScript is a high-level, interpreted programming language that enables interactive web pages. It's an essential part of web applications and is one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript is a multi-paradigm language supporting object-oriented, imperative, and functional programming styles.</p>
      
      <h3>History of JavaScript</h3>
      <p>JavaScript was created by Brendan Eich in 1995 while working at Netscape. Originally named Mocha, it was later renamed to LiveScript and finally JavaScript. Despite the name similarity, JavaScript is not related to Java. ECMAScript is the standardized specification that JavaScript follows.</p>
      
      <h3>Where JavaScript Runs</h3>
      <p>JavaScript can run in:</p>
      <ul>
        <li><strong>Web Browsers</strong> - Client-side JavaScript</li>
        <li><strong>Node.js</strong> - Server-side JavaScript</li>
        <li><strong>Mobile Apps</strong> - React Native, Ionic</li>
        <li><strong>Desktop Apps</strong> - Electron</li>
      </ul>
      
      <h3>Variables and Data Types</h3>
      <p>JavaScript has three ways to declare variables:</p>
      <pre><code>// let - block-scoped, can be reassigned
let name = "John";
name = "Jane"; // OK

// const - block-scoped, cannot be reassigned
const age = 25;
// age = 26; // Error!

// var - function-scoped, can be reassigned (avoid in modern JS)
var city = "Moradabad";

// Data types
let string = "Hello World"; // String
let number = 42; // Number
let float = 3.14; // Number (no separate float type)
let boolean = true; // Boolean
let array = [1, 2, 3]; // Array
let object = { name: "John", age: 25 }; // Object
let nullValue = null; // Null
let undefinedValue = undefined; // Undefined
let symbol = Symbol("id"); // Symbol (ES6)
let bigInt = 9007199254740991n; // BigInt (ES2020)</code></pre>
      
      <h3>Operators</h3>
      <pre><code>// Arithmetic
let sum = 5 + 3; // 8
let diff = 5 - 3; // 2
let product = 5 * 3; // 15
let quotient = 5 / 3; // 1.666...
let remainder = 5 % 3; // 2
let power = 5 ** 3; // 125

// Comparison
5 == "5" // true (loose equality)
5 === "5" // false (strict equality)
5 != "5" // false
5 !== "5" // true
5 > 3 // true
5 < 3 // false
5 >= 5 // true

// Logical
true && false // false (AND)
true || false // true (OR)
!true // false (NOT)

// Assignment
let x = 5;
x += 3; // x = x + 3
x -= 2; // x = x - 2
x *= 2; // x = x * 2
x /= 2; // x = x / 2</code></pre>
      
      <h3>Functions</h3>
      <p>Functions are reusable blocks of code:</p>
      <pre><code>// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow function (ES6)
const add = (a, b) => a + b;

// Arrow function with single parameter
const square = x => x * x;

// Arrow function with body
const greetUser = (name) => {
  const message = \`Hello, \${name}!\`;
  return message;
};

// Default parameters
function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}</code></pre>
      
      <h3>Control Structures</h3>
      <pre><code>// If-else
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}

// Ternary operator
const status = age >= 18 ? "Adult" : "Minor";

// Switch statement
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Weekend coming!");
    break;
  default:
    console.log("Regular day");
}

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For...of loop (arrays)
for (const item of array) {
  console.log(item);
}

// For...in loop (objects)
for (const key in object) {
  console.log(key, object[key]);
}

// While loop
while (count < 10) {
  count++;
}

// Do-while loop
do {
  count++;
} while (count < 10);</code></pre>
      
      <h3>Arrays</h3>
      <pre><code>// Creating arrays
const fruits = ["Apple", "Banana", "Orange"];
const numbers = new Array(1, 2, 3);

// Accessing elements
fruits[0]; // "Apple"
fruits.length; // 3

// Array methods
const numbers = [1, 2, 3, 4, 5];

// Map - transform each element
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// Filter - select elements
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// Reduce - reduce to single value
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// Find - find first matching element
const found = numbers.find(n => n > 3); // 4

// Some - check if any element matches
const hasEven = numbers.some(n => n % 2 === 0); // true

// Every - check if all elements match
const allPositive = numbers.every(n => n > 0); // true

// Push/Pop - add/remove from end
numbers.push(6); // [1, 2, 3, 4, 5, 6]
numbers.pop(); // [1, 2, 3, 4, 5]

// Shift/Unshift - add/remove from start
numbers.unshift(0); // [0, 1, 2, 3, 4, 5]
numbers.shift(); // [1, 2, 3, 4, 5]

// Slice - extract portion
const sliced = numbers.slice(1, 3); // [2, 3]

// Splice - add/remove elements
numbers.splice(1, 2, 10, 20); // [1, 10, 20, 4, 5]</code></pre>
      
      <h3>Objects</h3>
      <pre><code>// Creating objects
const person = {
  name: "John",
  age: 25,
  city: "Moradabad"
};

// Accessing properties
person.name; // "John"
person["age"]; // 25

// Adding properties
person.email = "john@example.com";

// Object methods
const person = {
  name: "John",
  greet: function() {
    return \`Hello, I'm \${this.name}\`;
  },
  // Shorthand method (ES6)
  introduce() {
    return \`I'm \${this.name}\`;
  }
};

// Object destructuring (ES6)
const { name, age } = person;

// Spread operator
const newPerson = { ...person, country: "India" };

// Object.keys, Object.values, Object.entries
Object.keys(person); // ["name", "age", "city"]
Object.values(person); // ["John", 25, "Moradabad"]
Object.entries(person); // [["name", "John"], ["age", 25], ...]</code></pre>
      
      <h3>ES6+ Features</h3>
      <pre><code>// Template literals
const message = \`Hello, \${name}! You are \${age} years old.\`;

// Destructuring
const [first, second] = [1, 2];
const { name, age } = person;

// Spread operator
const newArray = [...oldArray, 4, 5];
const newObject = { ...oldObject, newProp: "value" };

// Arrow functions
const add = (a, b) => a + b;

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
}

// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // async operation
    resolve(data);
  });
};

// Async/Await
async function getData() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error(error);
  }
}</code></pre>
      
      <h3>DOM Manipulation</h3>
      <pre><code>// Selecting elements
const element = document.getElementById("myId");
const elements = document.querySelectorAll(".myClass");
const firstElement = document.querySelector(".myClass");

// Modifying content
element.textContent = "New text";
element.innerHTML = "&lt;strong&gt;Bold text&lt;/strong&gt;";
element.setAttribute("class", "new-class");
element.classList.add("active");
element.classList.remove("inactive");
element.classList.toggle("active");

// Creating elements
const newDiv = document.createElement("div");
newDiv.textContent = "New element";
document.body.appendChild(newDiv);

// Event listeners
element.addEventListener("click", () => {
  console.log("Clicked!");
});

element.addEventListener("click", handleClick);
function handleClick(event) {
  console.log("Clicked!", event);
}

// Event delegation
document.addEventListener("click", (e) => {
  if (e.target.matches(".button")) {
    console.log("Button clicked");
  }
});</code></pre>
      
      <h3>Error Handling</h3>
      <pre><code>// Try-catch
try {
  // code that might throw error
  riskyOperation();
} catch (error) {
  console.error("Error occurred:", error);
} finally {
  // code that always runs
  cleanup();
}

// Throwing errors
if (age < 0) {
  throw new Error("Age cannot be negative");
}</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use const by default, let when reassignment is needed</li>
        <li>Avoid var (use let/const instead)</li>
        <li>Use === instead of == for comparisons</li>
        <li>Use meaningful variable and function names</li>
        <li>Write small, focused functions</li>
        <li>Handle errors properly with try-catch</li>
        <li>Use modern ES6+ features</li>
        <li>Follow consistent code style</li>
        <li>Comment complex logic</li>
        <li>Use arrow functions for callbacks</li>
      </ul>
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
    author: "Moradabads Team",
    difficulty: "Advanced",
    readTime: "30 min read",
    tags: ["React", "Components", "Hooks", "State Management"],
    hasQuiz: true,
    quizId: "react-basics-quiz",
    content: `
      <h2>What is React?</h2>
      <p>React is a free and open-source JavaScript library for building user interfaces, particularly single-page applications and mobile applications. It was created by Jordan Walke, a software engineer at Facebook, and was first released in 2013. React is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</p>
      
      <h3>Key Features of React</h3>
      <ul>
        <li><strong>Component-Based</strong> - Build encapsulated components that manage their own state</li>
        <li><strong>Declarative</strong> - Describe what the UI should look like, React handles the updates</li>
        <li><strong>Virtual DOM</strong> - Efficient rendering by updating only changed parts</li>
        <li><strong>One-Way Data Flow</strong> - Data flows down from parent to child components</li>
        <li><strong>Reusable Components</strong> - Write once, use anywhere</li>
        <li><strong>Rich Ecosystem</strong> - Large community and extensive library support</li>
      </ul>
      
      <h3>Setting Up React</h3>
      <p>You can create a new React app using Create React App or Vite:</p>
      <pre><code># Using Create React App
npx create-react-app my-app
cd my-app
npm start

# Using Vite (faster)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev</code></pre>
      
      <h3>Components</h3>
      <p>Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces. There are two types of components:</p>
      
      <h4>Functional Components (Recommended)</h4>
      <pre><code>// Simple functional component
function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}

// Arrow function component
const Greeting = ({ name }) => {
  return &lt;div&gt;Welcome, {name}!&lt;/div&gt;;
};

// Component with multiple elements
const Card = ({ title, content }) => {
  return (
    &lt;div className="card"&gt;
      &lt;h2&gt;{title}&lt;/h2&gt;
      &lt;p&gt;{content}&lt;/p&gt;
    &lt;/div&gt;
  );
};</code></pre>
      
      <h4>Class Components (Legacy)</h4>
      <pre><code>class Welcome extends React.Component {
  render() {
    return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;;
  }
}</code></pre>
      
      <h3>JSX (JavaScript XML)</h3>
      <p>JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in JavaScript:</p>
      <pre><code>// JSX syntax
const element = (
  &lt;div className="container"&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;This is JSX&lt;/p&gt;
    &lt;img src="image.jpg" alt="Description" /&gt;
  &lt;/div&gt;
);

// JSX with expressions
const name = "John";
const element = &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;

// JSX with conditional rendering
const isLoggedIn = true;
const element = (
  &lt;div&gt;
    {isLoggedIn ? &lt;p&gt;Welcome back!&lt;/p&gt; : &lt;p&gt;Please log in&lt;/p&gt;}
    {isLoggedIn && &lt;button&gt;Logout&lt;/button&gt;}
  &lt;/div&gt;
);

// JSX with lists
const items = ["Apple", "Banana", "Orange"];
const list = (
  &lt;ul&gt;
    {items.map((item, index) => (
      &lt;li key={index}&gt;{item}&lt;/li&gt;
    ))}
  &lt;/ul&gt;
);</code></pre>
      
      <h3>Props</h3>
      <p>Props (properties) are read-only data passed from parent to child components:</p>
      <pre><code>// Parent component
function App() {
  return (
    &lt;div&gt;
      &lt;Welcome name="John" age={25} city="Moradabad" /&gt;
      &lt;Welcome name="Jane" age={30} city="Delhi" /&gt;
    &lt;/div&gt;
  );
}

// Child component receiving props
function Welcome(props) {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;
      &lt;p&gt;Age: {props.age}, City: {props.city}&lt;/p&gt;
    &lt;/div&gt;
  );
}

// Using destructuring
function Welcome({ name, age, city }) {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hello, {name}!&lt;/h1&gt;
      &lt;p&gt;Age: {age}, City: {city}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>State</h3>
      <p>State allows components to create and manage their own data. State changes trigger re-renders:</p>
      <pre><code>import { useState } from 'react';

function Counter() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
      &lt;button onClick={() => setCount(count - 1)}&gt;
        Decrement
      &lt;/button&gt;
      &lt;button onClick={() => setCount(0)}&gt;
        Reset
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

// State with objects
function UserProfile() {
  const [user, setUser] = useState({
    name: "John",
    age: 25,
    email: "john@example.com"
  });
  
  const updateName = () => {
    setUser({ ...user, name: "Jane" });
  };
  
  return (
    &lt;div&gt;
      &lt;p&gt;Name: {user.name}&lt;/p&gt;
      &lt;button onClick={updateName}&gt;Update Name&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>React Hooks</h3>
      <p>Hooks are functions that let you "hook into" React features. They start with "use":</p>
      
      <h4>useState Hook</h4>
      <pre><code>import { useState } from 'react';

function Example() {
  const [state, setState] = useState(initialValue);
  // ...
}</code></pre>
      
      <h4>useEffect Hook</h4>
      <p>useEffect lets you perform side effects in functional components:</p>
      <pre><code>import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  // Runs after every render
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  });
  
  // Runs only on mount
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  
  // Runs when count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);
  
  // Cleanup function
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    
    return () => clearInterval(timer); // Cleanup
  }, []);
  
  return &lt;div&gt;Count: {count}&lt;/div&gt;;
}</code></pre>
      
      <h4>Other Common Hooks</h4>
      <pre><code>import { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react';

// useContext - access context
const theme = useContext(ThemeContext);

// useRef - access DOM or store mutable value
const inputRef = useRef(null);
inputRef.current.focus();

// useMemo - memoize expensive calculations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// useCallback - memoize functions
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);</code></pre>
      
      <h3>Event Handling</h3>
      <pre><code>function Form() {
  const [input, setInput] = useState("");
  
  // Event handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log("Form submitted:", input);
  };
  
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  
  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input 
        type="text" 
        value={input}
        onChange={handleChange}
        placeholder="Enter text"
      /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}

// Inline event handlers
function Button() {
  return (
    &lt;button onClick={() => console.log("Clicked!")}&gt;
        Click me
      &lt;/button&gt;
  );
}</code></pre>
      
      <h3>Conditional Rendering</h3>
      <pre><code>function Greeting({ isLoggedIn }) {
  // Using if-else
  if (isLoggedIn) {
    return &lt;h1&gt;Welcome back!&lt;/h1&gt;;
  } else {
    return &lt;h1&gt;Please log in&lt;/h1&gt;;
  }
}

// Using ternary operator
function Message({ count }) {
  return (
    &lt;div&gt;
      {count > 0 ? (
        &lt;p&gt;You have {count} messages&lt;/p&gt;
      ) : (
        &lt;p&gt;No messages&lt;/p&gt;
      )}
    &lt;/div&gt;
  );
}

// Using logical AND
function Notification({ hasNotification }) {
  return (
    &lt;div&gt;
      {hasNotification && &lt;p&gt;You have a new notification&lt;/p&gt;}
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Lists and Keys</h3>
      <pre><code>function TodoList({ todos }) {
  return (
    &lt;ul&gt;
      {todos.map((todo) => (
        &lt;li key={todo.id}&gt;
          {todo.text}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

// Keys help React identify which items changed
// Use unique, stable IDs as keys, not array indices</code></pre>
      
      <h3>Forms and Controlled Components</h3>
      <pre><code>function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };
  
  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      /&gt;
      &lt;input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      /&gt;
      &lt;button type="submit"&gt;Login&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
      
      <h3>Component Lifecycle</h3>
      <p>In functional components, useEffect handles lifecycle events:</p>
      <pre><code>function Component() {
  useEffect(() => {
    // ComponentDidMount equivalent
    console.log("Component mounted");
    
    return () => {
      // ComponentWillUnmount equivalent
      console.log("Component unmounted");
    };
  }, []);
  
  useEffect(() => {
    // ComponentDidUpdate equivalent
    console.log("Component updated");
  });
  
  return &lt;div&gt;Component&lt;/div&gt;;
}</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use functional components and hooks</li>
        <li>Keep components small and focused</li>
        <li>Use meaningful component and prop names</li>
        <li>Extract reusable logic into custom hooks</li>
        <li>Use keys properly in lists</li>
        <li>Avoid direct state mutations</li>
        <li>Use useEffect cleanup functions</li>
        <li>Optimize with useMemo and useCallback when needed</li>
        <li>Follow the single responsibility principle</li>
        <li>Use PropTypes or TypeScript for type checking</li>
      </ul>
    `,
    date: "2023-10-15",
  },
  // React Hooks Articles
  {
    slug: "react-usestate-hook",
    title: "Understanding useState Hook in React",
    description: "Master the useState hook to manage component state in React functional components.",
    excerpt: "Learn how to use useState to add state management to your React components with practical examples.",
    category: "React",
    image: "/react-js-logo.png",
    author: "Moradabads Team",
    difficulty: "Beginner",
    readTime: "12 min read",
    tags: ["React", "Hooks", "useState", "State Management"],
    content: `
      <h2>Introduction to useState</h2>
      <p>The useState hook is one of the most fundamental hooks in React. It allows functional components to have state, which was previously only possible with class components.</p>
      
      <h3>Basic Syntax</h3>
      <pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>How useState Works</h3>
      <p>useState returns an array with two elements:</p>
      <ul>
        <li><strong>Current state value</strong> - The current value of the state</li>
        <li><strong>State setter function</strong> - Function to update the state</li>
      </ul>
      
      <h3>Initializing State</h3>
      <pre><code>// With a primitive value
const [name, setName] = useState("John");

// With a number
const [age, setAge] = useState(25);

// With an object
const [user, setUser] = useState({
  name: "John",
  email: "john@example.com"
});

// With a function (lazy initialization)
const [data, setData] = useState(() => {
  return expensiveComputation();
});</code></pre>
      
      <h3>Updating State</h3>
      <pre><code>// Direct update
setCount(count + 1);

// Functional update (recommended when using previous state)
setCount(prevCount => prevCount + 1);

// Updating objects
setUser({ ...user, name: "Jane" });

// Updating arrays
setItems([...items, newItem]);</code></pre>
      
      <h3>Common Patterns</h3>
      <pre><code>// Multiple state variables
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  
  // Or combine into one object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0
  });
}</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use functional updates when the new state depends on the previous state</li>
        <li>Don't mutate state directly - always create new objects/arrays</li>
        <li>Split complex state into multiple useState calls if they're independent</li>
        <li>Use lazy initialization for expensive computations</li>
      </ul>
    `,
    date: "2023-10-20",
  },
  {
    slug: "react-useeffect-hook",
    title: "Mastering useEffect Hook in React",
    description: "Learn how to perform side effects in React functional components using useEffect.",
    excerpt: "Understand useEffect for data fetching, subscriptions, and DOM manipulation.",
    category: "React",
    image: "/react-js-logo.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "18 min read",
    tags: ["React", "Hooks", "useEffect", "Side Effects"],
    content: `
      <h2>What is useEffect?</h2>
      <p>useEffect is a hook that lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in class components.</p>
      
      <h3>Basic Syntax</h3>
      <pre><code>import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  });
  
  return &lt;div&gt;Count: {count}&lt;/div&gt;;
}</code></pre>
      
      <h3>Effect with Dependencies</h3>
      <pre><code>// Runs only on mount
useEffect(() => {
  console.log("Component mounted");
}, []);

// Runs when count changes
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);

// Runs when any dependency changes
useEffect(() => {
  fetchData(userId);
}, [userId]);</code></pre>
      
      <h3>Cleanup Function</h3>
      <pre><code>useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  
  // Cleanup function
  return () => {
    clearInterval(timer);
  };
}, []);</code></pre>
      
      <h3>Data Fetching Example</h3>
      <pre><code>function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, [userId]);
  
  if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
  return &lt;div&gt;{user?.name}&lt;/div&gt;;
}</code></pre>
      
      <h3>Common Use Cases</h3>
      <ul>
        <li>Data fetching from APIs</li>
        <li>Setting up subscriptions</li>
        <li>Manually changing the DOM</li>
        <li>Setting up timers</li>
        <li>Adding event listeners</li>
      </ul>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Always include dependencies in the dependency array</li>
        <li>Clean up subscriptions and timers</li>
        <li>Don't forget the empty dependency array for mount-only effects</li>
        <li>Use multiple useEffect hooks to separate concerns</li>
      </ul>
    `,
    date: "2023-10-22",
  },
  {
    slug: "react-useref-hook",
    title: "Understanding useRef Hook in React",
    description: "Learn how to use useRef to access DOM elements and persist values across renders.",
    excerpt: "Master useRef for DOM manipulation and storing mutable values without causing re-renders.",
    category: "React",
    image: "/react-js-logo.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "15 min read",
    tags: ["React", "Hooks", "useRef", "DOM"],
    content: `
      <h2>What is useRef?</h2>
      <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument. The returned object will persist for the full lifetime of the component.</p>
      
      <h3>Accessing DOM Elements</h3>
      <pre><code>import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  
  const handleClick = () => {
    inputRef.current.focus();
  };
  
  return (
    &lt;div&gt;
      &lt;input ref={inputRef} type="text" /&gt;
      &lt;button onClick={handleClick}&gt;Focus Input&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Storing Mutable Values</h3>
      <pre><code>function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };
  
  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={startTimer}&gt;Start&lt;/button&gt;
      &lt;button onClick={stopTimer}&gt;Stop&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Previous Value Tracking</h3>
      <pre><code>function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  
  useEffect(() => {
    prevCountRef.current = count;
  });
  
  const prevCount = prevCountRef.current;
  
  return (
    &lt;div&gt;
      &lt;p&gt;Current: {count}&lt;/p&gt;
      &lt;p&gt;Previous: {prevCount}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Key Differences from useState</h3>
      <ul>
        <li>useRef doesn't trigger re-renders when changed</li>
        <li>useRef persists across renders</li>
        <li>useRef.current is mutable</li>
        <li>useState triggers re-renders and is immutable</li>
      </ul>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use useRef for DOM access when needed</li>
        <li>Store mutable values that don't need to trigger renders</li>
        <li>Don't read or write ref.current during render</li>
        <li>Use refs sparingly - prefer state for most cases</li>
      </ul>
    `,
    date: "2023-10-25",
  },
  {
    slug: "react-usememo-hook",
    title: "Optimizing Performance with useMemo",
    description: "Learn how to memoize expensive calculations using the useMemo hook.",
    excerpt: "Improve React performance by memoizing computed values with useMemo.",
    category: "React",
    image: "/react-js-logo.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "14 min read",
    tags: ["React", "Hooks", "useMemo", "Performance"],
    content: `
      <h2>What is useMemo?</h2>
      <p>useMemo is a React hook that memoizes the result of a computation. It only recalculates when its dependencies change, helping optimize expensive operations.</p>
      
      <h3>Basic Syntax</h3>
      <pre><code>import { useMemo } from 'react';

const memoizedValue = useMemo(() => {
  return expensiveComputation(a, b);
}, [a, b]);</code></pre>
      
      <h3>Example: Expensive Calculation</h3>
      <pre><code>function ExpensiveComponent({ items, filter }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);
  
  return (
    &lt;ul&gt;
      {filteredItems.map(item => (
        &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
      
      <h3>When to Use useMemo</h3>
      <ul>
        <li>Expensive calculations that don't need to run on every render</li>
        <li>Referential equality for objects/arrays passed as props</li>
        <li>Preventing unnecessary child re-renders</li>
      </ul>
      
      <h3>When NOT to Use useMemo</h3>
      <ul>
        <li>Simple calculations (overhead might be worse)</li>
        <li>Every value needs to be memoized (premature optimization)</li>
        <li>Dependencies change frequently</li>
      </ul>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Profile first - don't optimize prematurely</li>
        <li>Include all dependencies in the dependency array</li>
        <li>Use for expensive operations only</li>
        <li>Combine with React.memo for component memoization</li>
      </ul>
    `,
    date: "2023-10-28",
  },
  {
    slug: "react-usecallback-hook",
    title: "Understanding useCallback Hook",
    description: "Learn how to memoize functions with useCallback to prevent unnecessary re-renders.",
    excerpt: "Optimize React components by memoizing callback functions with useCallback.",
    category: "React",
    image: "/react-js-logo.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "13 min read",
    tags: ["React", "Hooks", "useCallback", "Performance"],
    content: `
      <h2>What is useCallback?</h2>
      <p>useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components.</p>
      
      <h3>Basic Syntax</h3>
      <pre><code>import { useCallback } from 'react';

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);</code></pre>
      
      <h3>Example: Preventing Re-renders</h3>
      <pre><code>function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // Empty deps - function never changes
  
  return (
    &lt;div&gt;
      &lt;input value={name} onChange={(e) => setName(e.target.value)} /&gt;
      &lt;ExpensiveChild onClick={handleClick} /&gt;
    &lt;/div&gt;
  );
}

const ExpensiveChild = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return &lt;button onClick={onClick}&gt;Click me&lt;/button&gt;;
});</code></pre>
      
      <h3>With Dependencies</h3>
      <pre><code>function TodoList({ todos }) {
  const [filter, setFilter] = useState("");
  
  const handleToggle = useCallback((id) => {
    // Toggle todo logic
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }, []); // No dependencies needed if using functional update
  
  return (
    &lt;div&gt;
      {todos.map(todo => (
        &lt;TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={handleToggle} 
        /&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>When to Use useCallback</h3>
      <ul>
        <li>Passing callbacks to memoized child components</li>
        <li>Callbacks used in other hooks' dependency arrays</li>
        <li>Preventing unnecessary re-renders</li>
      </ul>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Don't wrap every function - profile first</li>
        <li>Use with React.memo for child components</li>
        <li>Include all dependencies in the array</li>
        <li>Consider if the optimization is worth the complexity</li>
      </ul>
    `,
    date: "2023-10-30",
  },
  // More React Hooks
  {
    slug: "react-usecontext-hook",
    title: "Using useContext for Global State",
    description: "Learn how to share state across components using React Context API and useContext hook. Master context API to avoid prop drilling and manage global state efficiently.",
    excerpt: "Master context API to avoid prop drilling and manage global state efficiently.",
    category: "React",
    image: "/react-js-logo.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "16 min read",
    tags: ["React", "Hooks", "useContext", "Context API"],
    content: `
      <h2>What is useContext?</h2>
      <p>useContext is a React hook that allows you to consume context values in functional components. It provides a way to share data across the component tree without prop drilling. Context is designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.</p>
      
      <p>Before the Context API, passing data through multiple levels of components required "prop drilling" - passing props through intermediate components that don't need them. useContext solves this problem by allowing you to access context values directly in any component within the provider tree.</p>
      
      <h3>Installation and Setup</h3>
      <p>useContext is part of React core, so no additional installation is needed. If you're using React 16.8 or later, you already have access to useContext. To verify your React version:</p>
      
      <pre><code>npm list react</code></pre>
      
      <p>If you need to upgrade React:</p>
      
      <pre><code>npm install react@latest react-dom@latest</code></pre>
      
      <h3>Creating Context</h3>
      <p>The first step is to create a context using createContext. This creates a context object that components can subscribe to:</p>
      
      <pre><code>import { createContext } from 'react';

const ThemeContext = createContext('light');

export default ThemeContext;</code></pre>
      
      <p>The default value ('light' in this example) is used when a component consumes the context outside of a Provider. It's a fallback value that helps with testing and provides a sensible default.</p>
      
      <h3>Providing Context</h3>
      <p>To make context values available to components, wrap your component tree with a Context.Provider. The Provider accepts a value prop that will be available to all consuming components:</p>
      
      <pre><code>import { useState } from 'react';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('dark');
  
  return (
    &lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;
      &lt;Toolbar /&gt;
      &lt;Content /&gt;
      &lt;Footer /&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}</code></pre>
      
      <p>Any component inside the Provider can access the theme and setTheme values. The value prop can be any JavaScript value - strings, numbers, objects, arrays, or even functions.</p>
      
      <h3>Consuming Context</h3>
      <p>To consume context values, use the useContext hook. It takes the context object as an argument and returns the current context value:</p>
      
      <pre><code>import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    &lt;button 
      onClick={toggleTheme}
      className={\`btn btn-\${theme}\`}
    &gt;
      Current theme: {theme}
    &lt;/button&gt;
  );
}</code></pre>
      
      <h3>Complete Example: Theme Switcher</h3>
      <p>Let's build a complete theme switcher application:</p>
      
      <pre><code>// ThemeContext.js
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    &lt;ThemeContext.Provider value={{ theme, toggleTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
}

// App.js
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import MainContent from './MainContent';

function App() {
  return (
    &lt;ThemeProvider&gt;
      &lt;Header /&gt;
      &lt;MainContent /&gt;
    &lt;/ThemeProvider&gt;
  );
}

// Header.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    &lt;header className={\`header-\${theme}\`}&gt;
      &lt;h1&gt;My App&lt;/h1&gt;
      &lt;button onClick={toggleTheme}&gt;
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      &lt;/button&gt;
    &lt;/header&gt;
  );
}</code></pre>
      
      <h3>Multiple Contexts</h3>
      <p>You can use multiple contexts in your application. Each context should represent a different concern:</p>
      
      <pre><code>// UserContext.js
export const UserContext = createContext();

// LanguageContext.js
export const LanguageContext = createContext();

// App.js
function App() {
  return (
    &lt;UserContext.Provider value={user}&gt;
      &lt;LanguageContext.Provider value={language}&gt;
        &lt;Application /&gt;
      &lt;/LanguageContext.Provider&gt;
    &lt;/UserContext.Provider&gt;
  );
}

// Component using multiple contexts
function Component() {
  const user = useContext(UserContext);
  const language = useContext(LanguageContext);
  
  return &lt;div&gt;{user.name} - {language}&lt;/div&gt;;
}</code></pre>
      
      <h3>Performance Considerations</h3>
      <p>Context can cause performance issues if not used carefully. Every time the context value changes, all consuming components re-render. To optimize:</p>
      
      <ul>
        <li>Split contexts by concern (don't put everything in one context)</li>
        <li>Memoize context values when possible</li>
        <li>Use useMemo for expensive context values</li>
        <li>Consider using multiple smaller contexts instead of one large context</li>
      </ul>
      
      <pre><code>// Optimized context with useMemo
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const value = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }), [theme]);
  
  return (
    &lt;ThemeContext.Provider value={value}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
}</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li><strong>Create separate contexts for different concerns</strong> - Don't put unrelated data in the same context</li>
        <li><strong>Use context for truly global state</strong> - Not for data that's only needed by a few components</li>
        <li><strong>Consider performance implications</strong> - Context updates trigger re-renders in all consumers</li>
        <li><strong>Combine with useReducer for complex state</strong> - For state with complex update logic</li>
        <li><strong>Provide default values</strong> - Helps with testing and provides fallbacks</li>
        <li><strong>Create custom hooks</strong> - Wrap useContext calls in custom hooks for better API</li>
      </ul>
      
      <h3>Custom Hook Pattern</h3>
      <p>Create a custom hook to encapsulate context consumption:</p>
      
      <pre><code>// useTheme.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return context;
}

// Usage
function Component() {
  const { theme, toggleTheme } = useTheme();
  // ...
}</code></pre>
      
      <h3>Common Use Cases</h3>
      <ul>
        <li><strong>Theming</strong> - Dark/light mode, color schemes</li>
        <li><strong>Authentication</strong> - Current user, login status</li>
        <li><strong>Localization</strong> - Current language, translations</li>
        <li><strong>Feature flags</strong> - Enable/disable features</li>
        <li><strong>UI state</strong> - Modals, sidebars, notifications</li>
      </ul>
      
      <p>useContext is a powerful tool for managing global state in React applications. When used correctly, it eliminates prop drilling and makes your code cleaner and more maintainable. Remember to use it judiciously - not all state needs to be global, and overusing context can lead to performance issues.</p>
    `,
    date: "2023-11-01",
  },
  {
    slug: "react-usereducer-hook",
    title: "Managing Complex State with useReducer",
    description: "Learn how to manage complex state logic using the useReducer hook in React. Handle complex state updates with useReducer for better state management.",
    excerpt: "Handle complex state updates with useReducer for better state management.",
    category: "React",
    image: "/react-js-logo.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "17 min read",
    tags: ["React", "Hooks", "useReducer", "State Management"],
    content: `
      <h2>What is useReducer?</h2>
      <p>useReducer is an alternative to useState for managing complex state logic in React. It's similar to Redux's reducer pattern and provides a more structured way to handle state updates. While useState is perfect for simple state values, useReducer excels when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.</p>
      
      <p>useReducer follows the reducer pattern, which is a functional programming concept. A reducer is a pure function that takes the current state and an action, then returns a new state. This pattern makes state updates predictable and testable.</p>
      
      <h3>Installation</h3>
      <p>useReducer is part of React core, so no additional installation is needed. It's available in React 16.8+ along with other hooks. To verify your React version:</p>
      
      <pre><code>npm list react</code></pre>
      
      <p>If you need to upgrade:</p>
      
      <pre><code>npm install react@latest react-dom@latest</code></pre>
      
      <h3>Basic Syntax</h3>
      <p>The useReducer hook takes two arguments: a reducer function and an initial state. It returns an array with the current state and a dispatch function:</p>
      
      <pre><code>import { useReducer } from 'react';

const [state, dispatch] = useReducer(reducer, initialState);

// With lazy initialization (optional third argument)
const [state, dispatch] = useReducer(reducer, initialArg, init);</code></pre>
      
      <h3>Understanding Reducers</h3>
      <p>A reducer function takes two parameters: the current state and an action object. It returns the new state based on the action type:</p>
      
      <pre><code>function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}</code></pre>
      
      <h3>Complete Example: Todo List</h3>
      <p>Let's build a comprehensive todo list application using useReducer:</p>
      
      <pre><code>import { useReducer, useState } from 'react';

// Action types as constants (best practice)
const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  SET_FILTER: 'SET_FILTER'
};

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
            completed: false,
            createdAt: new Date().toISOString()
          }
        ]
      };
      
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
      
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
      
    case ACTIONS.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        )
      };
      
    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter
      };
      
    default:
      return state;
  }
}

// Initial state
const initialState = {
  todos: [],
  filter: 'ALL' // ALL, ACTIVE, COMPLETED
};

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputValue, setInputValue] = useState('');
  
  const addTodo = () => {
    if (inputValue.trim()) {
      dispatch({
        type: ACTIONS.ADD_TODO,
        payload: { text: inputValue }
      });
      setInputValue('');
    }
  };
  
  const toggleTodo = (id) => {
    dispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: { id }
    });
  };
  
  const deleteTodo = (id) => {
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: { id }
    });
  };
  
  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'ACTIVE') return !todo.completed;
    if (state.filter === 'COMPLETED') return todo.completed;
    return true;
  });
  
  return (
    &lt;div className="todo-app"&gt;
      &lt;h1&gt;Todo List&lt;/h1&gt;
      
      &lt;div className="input-section"&gt;
        &lt;input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
        /&gt;
        &lt;button onClick={addTodo}&gt;Add&lt;/button&gt;
      &lt;/div&gt;
      
      &lt;div className="filters"&gt;
        {['ALL', 'ACTIVE', 'COMPLETED'].map(filter => (
          &lt;button
            key={filter}
            onClick={() => dispatch({
              type: ACTIONS.SET_FILTER,
              payload: { filter }
            })}
            className={state.filter === filter ? 'active' : ''}
          &gt;
            {filter}
          &lt;/button&gt;
        ))}
      &lt;/div&gt;
      
      &lt;ul className="todo-list"&gt;
        {filteredTodos.map(todo => (
          &lt;li key={todo.id} className={todo.completed ? 'completed' : ''}&gt;
            &lt;span onClick={() => toggleTodo(todo.id)}&gt;
              {todo.text}
            &lt;/span&gt;
            &lt;button onClick={() => deleteTodo(todo.id)}&gt;Delete&lt;/button&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
      
      &lt;div className="stats"&gt;
        Total: {state.todos.length} | 
        Active: {state.todos.filter(t => !t.completed).length} | 
        Completed: {state.todos.filter(t => t.completed).length}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

export default TodoApp;</code></pre>
      
      <h3>useReducer with Context</h3>
      <p>Combining useReducer with useContext is a powerful pattern for global state management:</p>
      
      <pre><code>import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();

function todoReducer(state, action) {
  // ... reducer logic
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  return (
    &lt;TodoContext.Provider value={{ state, dispatch }}&gt;
      {children}
    &lt;/TodoContext.Provider&gt;
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider');
  }
  return context;
}

// Usage in components
function TodoList() {
  const { state, dispatch } = useTodos();
  // Use state and dispatch
}</code></pre>
      
      <h3>Lazy Initialization</h3>
      <p>You can pass a function as the third argument to useReducer for lazy initialization:</p>
      
      <pre><code>function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  // ...
}</code></pre>
      
      <h3>When to Use useReducer vs useState</h3>
      <p><strong>Use useReducer when:</strong></p>
      <ul>
        <li>You have complex state logic with multiple sub-values</li>
        <li>The next state depends on the previous state</li>
        <li>State updates follow predictable patterns</li>
        <li>You need to optimize performance (dispatch is stable)</li>
        <li>You want to test state logic separately</li>
        <li>You're managing form state with multiple fields</li>
      </ul>
      
      <p><strong>Use useState when:</strong></p>
      <ul>
        <li>State is a simple primitive value (string, number, boolean)</li>
        <li>State updates are independent</li>
        <li>You don't need complex update logic</li>
        <li>State is local to a single component</li>
      </ul>
      
      <h3>Best Practices</h3>
      <ul>
        <li><strong>Use action type constants</strong> - Prevents typos and makes refactoring easier</li>
        <li><strong>Keep reducers pure</strong> - No side effects, no mutations</li>
        <li><strong>Use payload for data</strong> - Standardize action structure</li>
        <li><strong>Handle default case</strong> - Return state or throw error</li>
        <li><strong>Combine with useContext</strong> - For global state management</li>
        <li><strong>Extract action creators</strong> - Functions that create actions</li>
      </ul>
      
      <h3>Action Creators Pattern</h3>
      <pre><code>// Action creators
const todoActions = {
  addTodo: (text) => ({
    type: ACTIONS.ADD_TODO,
    payload: { text }
  }),
  toggleTodo: (id) => ({
    type: ACTIONS.TOGGLE_TODO,
    payload: { id }
  }),
  deleteTodo: (id) => ({
    type: ACTIONS.DELETE_TODO,
    payload: { id }
  })
};

// Usage
dispatch(todoActions.addTodo('New todo'));
dispatch(todoActions.toggleTodo(1));</code></pre>
      
      <h3>Testing Reducers</h3>
      <p>Reducers are pure functions, making them easy to test:</p>
      
      <pre><code>describe('todoReducer', () => {
  it('should add a todo', () => {
    const state = { todos: [] };
    const action = {
      type: ACTIONS.ADD_TODO,
      payload: { text: 'Test todo' }
    };
    const newState = todoReducer(state, action);
    expect(newState.todos).toHaveLength(1);
    expect(newState.todos[0].text).toBe('Test todo');
  });
  
  it('should toggle a todo', () => {
    const state = {
      todos: [{ id: 1, text: 'Test', completed: false }]
    };
    const action = {
      type: ACTIONS.TOGGLE_TODO,
      payload: { id: 1 }
    };
    const newState = todoReducer(state, action);
    expect(newState.todos[0].completed).toBe(true);
  });
});</code></pre>
      
      <p>useReducer is a powerful tool for managing complex state in React applications. It provides structure, predictability, and testability to your state management. When combined with useContext, it can serve as a lightweight alternative to state management libraries like Redux for many use cases.</p>
    `,
    date: "2023-11-03",
  },
  {
    slug: "react-uselayout-effect",
    title: "Understanding useLayoutEffect Hook",
    description: "Learn when and how to use useLayoutEffect for synchronous DOM updates. Master DOM measurements and prevent visual flicker with useLayoutEffect.",
    excerpt: "Use useLayoutEffect for DOM measurements and synchronous updates.",
    category: "React",
    image: "/react-js-logo.png",
    author: "Moradabads Team",
    difficulty: "Advanced",
    readTime: "18 min read",
    tags: ["React", "Hooks", "useLayoutEffect", "DOM"],
    content: `
      <h2>What is useLayoutEffect?</h2>
      <p>useLayoutEffect is a React hook that runs synchronously after all DOM mutations but before the browser paints. This makes it perfect for DOM measurements and synchronous DOM updates that need to happen before the user sees the visual changes. Unlike useEffect, which runs asynchronously after the browser paints, useLayoutEffect runs synchronously, blocking the browser from painting until it completes.</p>
      
      <p>The key difference is timing: useEffect runs after the browser has painted, while useLayoutEffect runs before. This means useLayoutEffect can cause performance issues if you perform expensive operations, as it blocks the browser from painting. However, for DOM measurements and preventing visual flicker, it's the right tool for the job.</p>
      
      <h3>Installation</h3>
      <p>useLayoutEffect is part of React core (React 16.8+), so no additional installation is needed:</p>
      
      <pre><code>npm list react</code></pre>
      
      <h3>Difference from useEffect</h3>
      <p>The execution order is crucial to understand:</p>
      
      <pre><code>// useEffect - runs after paint (asynchronous)
useEffect(() => {
  // Runs after browser paints
  // User might see flicker if DOM changes here
  console.log('Effect runs after paint');
}, []);

// useLayoutEffect - runs before paint (synchronous)
useLayoutEffect(() => {
  // Runs before browser paints
  // DOM changes happen before user sees anything
  console.log('Layout effect runs before paint');
}, []);</code></pre>
      
      <h3>Execution Timeline</h3>
      <p>Here's the order of execution:</p>
      <ol>
        <li>Component renders</li>
        <li>DOM mutations happen</li>
        <li><strong>useLayoutEffect runs (synchronously)</strong></li>
        <li>Browser paints</li>
        <li>useEffect runs (asynchronously)</li>
      </ol>
      
      <h3>Example: Measuring Element Dimensions</h3>
      <p>One of the most common use cases is measuring DOM elements:</p>
      
      <pre><code>import { useState, useLayoutEffect, useRef } from 'react';

function MeasuredComponent() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useRef(null);
  
  useLayoutEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);
  
  return (
    &lt;div ref={ref} className="measured-element"&gt;
      &lt;p&gt;Width: {dimensions.width}px&lt;/p&gt;
      &lt;p&gt;Height: {dimensions.height}px&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Example: Preventing Visual Flicker</h3>
      <p>When you need to position elements based on measurements, useLayoutEffect prevents flicker:</p>
      
      <pre><code>function Tooltip({ children, targetRef }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef(null);
  
  useLayoutEffect(() => {
    if (targetRef.current && tooltipRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      // Calculate position to center tooltip above target
      const x = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
      const y = targetRect.top - tooltipRect.height - 10;
      
      setPosition({ x, y });
    }
  }, [targetRef]);
  
  return (
    &lt;div
      ref={tooltipRef}
      className="tooltip"
      style={{
        position: 'fixed',
        left: \`\${position.x}px\`,
        top: \`\${position.y}px\`,
        opacity: position.x === 0 ? 0 : 1 // Hide until positioned
      }}
    &gt;
      {children}
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Example: Scroll Position Restoration</h3>
      <p>Restoring scroll position before the browser paints:</p>
      
      <pre><code>function ScrollRestore({ scrollKey }) {
  const containerRef = useRef(null);
  
  useLayoutEffect(() => {
    const savedPosition = sessionStorage.getItem(\`scroll-\${scrollKey}\`);
    if (savedPosition && containerRef.current) {
      containerRef.current.scrollTop = parseInt(savedPosition, 10);
    }
  }, [scrollKey]);
  
  const handleScroll = () => {
    if (containerRef.current) {
      sessionStorage.setItem(
        \`scroll-\${scrollKey}\`,
        containerRef.current.scrollTop.toString()
      );
    }
  };
  
  return (
    &lt;div
      ref={containerRef}
      onScroll={handleScroll}
      className="scrollable-container"
    &gt;
      {/* Content */}
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Example: Animation Setup</h3>
      <p>Setting up animations before the first paint:</p>
      
      <pre><code>function AnimatedBox({ isVisible }) {
  const boxRef = useRef(null);
  
  useLayoutEffect(() => {
    if (boxRef.current) {
      // Set initial state before paint
      boxRef.current.style.transform = 'translateX(-100%)';
      boxRef.current.style.opacity = '0';
      
      // Trigger animation after a frame
      requestAnimationFrame(() => {
        if (boxRef.current) {
          boxRef.current.style.transition = 'all 0.3s ease';
          boxRef.current.style.transform = 'translateX(0)';
          boxRef.current.style.opacity = '1';
        }
      });
    }
  }, [isVisible]);
  
  return (
    &lt;div ref={boxRef} className="animated-box"&gt;
      Content
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>When to Use useLayoutEffect</h3>
      <ul>
        <li><strong>DOM measurements</strong> - Getting element dimensions, positions</li>
        <li><strong>Preventing visual flicker</strong> - Positioning elements based on measurements</li>
        <li><strong>Synchronous DOM updates</strong> - Changes that must happen before paint</li>
        <li><strong>Animation setup</strong> - Setting initial animation states</li>
        <li><strong>Scroll restoration</strong> - Restoring scroll positions</li>
        <li><strong>Focus management</strong> - Setting focus before paint</li>
      </ul>
      
      <h3>When NOT to Use useLayoutEffect</h3>
      <ul>
        <li>Data fetching - Use useEffect instead</li>
        <li>Subscriptions - Use useEffect instead</li>
        <li>Expensive computations - Blocks painting</li>
        <li>Most side effects - useEffect is usually better</li>
      </ul>
      
      <h3>Performance Considerations</h3>
      <p>Since useLayoutEffect runs synchronously and blocks painting, be careful with expensive operations:</p>
      
      <pre><code>// ❌ Bad - Expensive operation blocks paint
useLayoutEffect(() => {
  const result = expensiveComputation(); // Blocks browser!
  setData(result);
}, []);

// ✅ Good - Use useEffect for expensive operations
useEffect(() => {
  const result = expensiveComputation(); // Doesn't block paint
  setData(result);
}, []);

// ✅ Good - Quick DOM measurement is fine
useLayoutEffect(() => {
  const rect = elementRef.current.getBoundingClientRect();
  setPosition(rect); // Fast, synchronous is OK
}, []);</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use useLayoutEffect only when you need synchronous DOM updates</li>
        <li>Keep operations fast - avoid expensive computations</li>
        <li>Use useEffect for most side effects</li>
        <li>Measure DOM elements when needed, not on every render</li>
        <li>Consider using CSS for animations instead of JavaScript when possible</li>
        <li>Test for visual flicker - if you see it, useLayoutEffect might help</li>
      </ul>
      
      <h3>Common Patterns</h3>
      <pre><code>// Pattern 1: Measure and update
useLayoutEffect(() => {
  const measurements = measureElement();
  updateLayout(measurements);
}, [dependencies]);

// Pattern 2: Restore state before paint
useLayoutEffect(() => {
  restoreState();
}, []);

// Pattern 3: Setup before animation
useLayoutEffect(() => {
  setupAnimation();
  return () => cleanupAnimation();
}, []);</code></pre>
      
      <p>useLayoutEffect is a powerful tool for specific use cases where you need synchronous DOM updates. While it should be used sparingly due to performance implications, it's essential for preventing visual flicker and ensuring smooth user experiences when working with DOM measurements and positioning.</p>
    `,
    date: "2023-11-05",
  },
  {
    slug: "react-custom-hooks",
    title: "Creating Custom React Hooks",
    description: "Learn how to extract component logic into reusable custom hooks. Build reusable custom hooks to share logic across components and improve code organization.",
    excerpt: "Build reusable custom hooks to share logic across components.",
    category: "React",
    image: "/react-js-logo.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "25 min read",
    tags: ["React", "Hooks", "Custom Hooks", "Code Reuse"],
    content: `
      <h2>What are Custom Hooks?</h2>
      <p>Custom hooks are JavaScript functions that start with "use" and can call other React hooks. They allow you to extract component logic into reusable functions. Custom hooks enable you to share stateful logic between components without duplicating code or using higher-order components.</p>
      
      <p>The beauty of custom hooks is that they follow the same rules as regular hooks - they can call other hooks, and React will track their state correctly. This makes them perfect for encapsulating complex logic that you want to reuse across multiple components.</p>
      
      <h3>Installation</h3>
      <p>Custom hooks are just regular JavaScript functions, so no installation is needed. They're part of React's hooks system (React 16.8+). To create a custom hook, simply create a function that starts with "use" and calls other hooks:</p>
      
      <pre><code>// hooks/useCustomHook.js
import { useState, useEffect } from 'react';

export function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);
  // ... hook logic
  return value;
}</code></pre>
      
      <h3>Rules of Custom Hooks</h3>
      <ul>
        <li>Must start with "use" (React convention)</li>
        <li>Can call other hooks</li>
        <li>Should be pure functions (no side effects in the function body itself)</li>
        <li>Can return any value (primitive, object, array, function, etc.)</li>
      </ul>
      
      <h3>Example: useFetch Hook</h3>
      <p>One of the most common custom hooks is for data fetching:</p>
      
      <pre><code>import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let cancelled = false;
    
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const json = await response.json();
        
        if (!cancelled) {
          setData(json);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }
    
    fetchData();
    
    // Cleanup function to cancel request if component unmounts
    return () => {
      cancelled = true;
    };
  }, [url, JSON.stringify(options)]);
  
  return { data, loading, error };
}

// Usage in component
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(\`/api/users/\${userId}\`);
  
  if (loading) return &lt;div className="loading"&gt;Loading...&lt;/div&gt;;
  if (error) return &lt;div className="error"&gt;Error: {error}&lt;/div&gt;;
  if (!data) return null;
  
  return (
    &lt;div className="user-profile"&gt;
      &lt;h2&gt;{data.name}&lt;/h2&gt;
      &lt;p&gt;{data.email}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Example: useLocalStorage Hook</h3>
      <p>Sync component state with localStorage:</p>
      
      <pre><code>import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  });
  
  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [language, setLanguage] = useLocalStorage('language', 'en');
  
  return (
    &lt;div&gt;
      &lt;select value={theme} onChange={(e) => setTheme(e.target.value)}&gt;
        &lt;option value="light"&gt;Light&lt;/option&gt;
        &lt;option value="dark"&gt;Dark&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Example: useDebounce Hook</h3>
      <p>Debounce values to limit how often a function runs:</p>
      
      <pre><code>import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    // Set debouncedValue to value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    // Cancel the timeout if value changes (also on delay change or unmount)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage: Search input with debounce
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search API call
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  
  return (
    &lt;input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    /&gt;
  );
}</code></pre>
      
      <h3>Example: useToggle Hook</h3>
      <p>Simple toggle functionality:</p>
      
      <pre><code>import { useState, useCallback } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);
  
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);
  
  return [value, { toggle, setTrue, setFalse, setValue }];
}

// Usage
function Modal() {
  const [isOpen, { toggle, setTrue, setFalse }] = useToggle(false);
  
  return (
    &lt;div&gt;
      &lt;button onClick={toggle}&gt;Toggle Modal&lt;/button&gt;
      {isOpen && (
        &lt;div className="modal"&gt;
          &lt;button onClick={setFalse}&gt;Close&lt;/button&gt;
          Modal Content
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Example: useWindowSize Hook</h3>
      <p>Track window dimensions:</p>
      
      <pre><code>import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
}

// Usage
function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  const isMobile = width < 768;
  
  return (
    &lt;div className={isMobile ? 'mobile' : 'desktop'}&gt;
      Window size: {width} x {height}
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Example: usePrevious Hook</h3>
      <p>Track the previous value of a prop or state:</p>
      
      <pre><code>import { useRef, useEffect } from 'react';

function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

// Usage
function Counter({ count }) {
  const prevCount = usePrevious(count);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Current: {count}&lt;/p&gt;
      &lt;p&gt;Previous: {prevCount}&lt;/p&gt;
      {count > prevCount && &lt;p&gt;Increased!&lt;/p&gt;}
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Example: useClickOutside Hook</h3>
      <p>Detect clicks outside an element:</p>
      
      <pre><code>import { useEffect, useRef } from 'react';

function useClickOutside(callback) {
  const ref = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [callback]);
  
  return ref;
}

// Usage
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setIsOpen(false));
  
  return (
    &lt;div ref={dropdownRef}&gt;
      &lt;button onClick={() => setIsOpen(!isOpen)}&gt;Toggle&lt;/button&gt;
      {isOpen && (
        &lt;div className="dropdown-menu"&gt;
          Menu items
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li><strong>Start hook names with "use"</strong> - This is a React convention that helps identify hooks</li>
        <li><strong>Extract reusable logic</strong> - Only create custom hooks for logic used in multiple components</li>
        <li><strong>Return values/objects consistently</strong> - Use consistent return patterns (array or object)</li>
        <li><strong>Document hook dependencies</strong> - Comment on what the hook depends on</li>
        <li><strong>Handle edge cases</strong> - Consider cleanup, cancellation, and error states</li>
        <li><strong>Keep hooks focused</strong> - One hook should do one thing well</li>
        <li><strong>Test hooks separately</strong> - Use @testing-library/react-hooks for testing</li>
        <li><strong>Share hooks in a hooks directory</strong> - Organize custom hooks in a dedicated folder</li>
      </ul>
      
      <h3>Organizing Custom Hooks</h3>
      <p>Create a hooks directory structure:</p>
      
      <pre><code>src/
  hooks/
    useFetch.js
    useLocalStorage.js
    useDebounce.js
    useToggle.js
    index.js  // Export all hooks</code></pre>
      
      <pre><code>// hooks/index.js
export { useFetch } from './useFetch';
export { useLocalStorage } from './useLocalStorage';
export { useDebounce } from './useDebounce';
export { useToggle } from './useToggle';</code></pre>
      
      <h3>Testing Custom Hooks</h3>
      <p>Test custom hooks using React Testing Library:</p>
      
      <pre><code>import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from './useToggle';

test('should toggle value', () => {
  const { result } = renderHook(() => useToggle(false));
  
  expect(result.current[0]).toBe(false);
  
  act(() => {
    result.current[1].toggle();
  });
  
  expect(result.current[0]).toBe(true);
});</code></pre>
      
      <p>Custom hooks are a powerful way to share logic between React components. They make your code more reusable, testable, and maintainable. By extracting common patterns into custom hooks, you can build a library of reusable functionality that makes your React applications cleaner and more efficient.</p>
    `,
    date: "2023-11-07",
  },
  // JavaScript Advanced Topics
  {
    slug: "javascript-closures",
    title: "Understanding JavaScript Closures",
    description: "Master closures in JavaScript - one of the most important concepts for advanced JavaScript development. Learn how closures work and how to use them effectively in your code.",
    excerpt: "Learn how closures work and how to use them effectively in your code.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "22 min read",
    tags: ["JavaScript", "Closures", "Scope", "Advanced"],
    content: `
      <h2>What is a Closure?</h2>
      <p>A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. Closures are created every time a function is created, at function creation time. They allow inner functions to access variables from an outer function's scope, creating a "closed-over" environment.</p>
      
      <p>Closures are fundamental to JavaScript and are used everywhere - in callbacks, event handlers, module patterns, and more. Understanding closures is crucial for writing effective JavaScript code, especially when dealing with asynchronous operations, callbacks, and data privacy.</p>
      
      <h3>How Closures Work</h3>
      <p>When a function is defined inside another function, the inner function has access to:</p>
      <ul>
        <li>Its own variables</li>
        <li>The outer function's variables</li>
        <li>Global variables</li>
      </ul>
      
      <p>Even after the outer function has finished executing, the inner function maintains access to the outer function's variables. This is because the inner function "closes over" the outer function's scope.</p>
      
      <h3>Basic Example</h3>
      <p>Here's a simple example to illustrate closures:</p>
      
      <pre><code>function outerFunction(x) {
  // Outer function's variable
  const outerVariable = x;
  
  // Inner function (closure)
  function innerFunction(y) {
    console.log(outerVariable + y);
  }
  
  return innerFunction;
}

const closure = outerFunction(10);
closure(5); // Output: 15

// Even though outerFunction has finished executing,
// innerFunction still has access to outerVariable</code></pre>
      
      <h3>Practical Example: Counter</h3>
      <p>Closures enable data privacy and encapsulation:</p>
      
      <pre><code>function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
    reset: () => { count = 0; }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.decrement()); // 1

// count is not directly accessible
// console.log(counter.count); // undefined</code></pre>
      
      <h3>Example: Function Factory</h3>
      <p>Closures enable function factories - functions that create other functions:</p>
      
      <pre><code>function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15</code></pre>
      
      <h3>Example: Module Pattern</h3>
      <p>Closures enable the module pattern for organizing code:</p>
      
      <pre><code>const calculator = (function() {
  // Private variables
  let result = 0;
  
  // Private functions
  function validateNumber(num) {
    return typeof num === 'number' && !isNaN(num);
  }
  
  // Public API
  return {
    add: function(num) {
      if (validateNumber(num)) {
        result += num;
      }
      return this;
    },
    subtract: function(num) {
      if (validateNumber(num)) {
        result -= num;
      }
      return this;
    },
    multiply: function(num) {
      if (validateNumber(num)) {
        result *= num;
      }
      return this;
    },
    getResult: function() {
      return result;
    },
    reset: function() {
      result = 0;
      return this;
    }
  };
})();

calculator.add(10).multiply(2).subtract(5);
console.log(calculator.getResult()); // 15</code></pre>
      
      <h3>Example: Event Handlers</h3>
      <p>Closures are commonly used in event handlers:</p>
      
      <pre><code>function setupButtons() {
  const buttons = document.querySelectorAll('.button');
  
  buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
      console.log(\`Button \${index} clicked\`);
      // This closure has access to 'index' even after setupButtons returns
    });
  });
}</code></pre>
      
      <h3>Example: Currying</h3>
      <p>Closures enable currying - transforming a function with multiple arguments into a sequence of functions:</p>
      
      <pre><code>function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6</code></pre>
      
      <h3>Common Use Cases</h3>
      <ul>
        <li><strong>Data privacy and encapsulation</strong> - Create private variables</li>
        <li><strong>Function factories</strong> - Create specialized functions</li>
        <li><strong>Event handlers</strong> - Access outer scope in event callbacks</li>
        <li><strong>Module patterns</strong> - Organize code with private/public APIs</li>
        <li><strong>Currying and partial application</strong> - Create specialized functions</li>
        <li><strong>Memoization</strong> - Cache function results</li>
        <li><strong>Callbacks</strong> - Maintain context in asynchronous code</li>
      </ul>
      
      <h3>Common Pitfalls</h3>
      <p><strong>Problem: Loop variable sharing</strong></p>
      <pre><code>// Problem: All closures share the same variable
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints 3, 3, 3
}

// Solution 1: Use let (block scope)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints 0, 1, 2
}

// Solution 2: IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100);
  })(i);
}

// Solution 3: bind
for (var i = 0; i < 3; i++) {
  setTimeout(function(j) {
    console.log(j);
  }.bind(null, i), 100);
}</code></pre>
      
      <h3>Memory Considerations</h3>
      <p>Closures keep references to outer variables, which can prevent garbage collection:</p>
      
      <pre><code>// Be careful with closures in loops
function createHandlers() {
  const handlers = [];
  const largeData = new Array(1000000).fill('data');
  
  for (let i = 0; i < 10; i++) {
    handlers.push(function() {
      // Each handler closes over largeData
      // This keeps largeData in memory for all handlers
      console.log(i, largeData.length);
    });
  }
  
  return handlers;
}

// Better: Only close over what you need
function createHandlersOptimized() {
  const handlers = [];
  
  for (let i = 0; i < 10; i++) {
    handlers.push(function(index) {
      // Only close over index, not largeData
      return function() {
        console.log(index);
      };
    }(i));
  }
  
  return handlers;
}</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Understand scope chain - know what variables are accessible</li>
        <li>Use closures for data privacy and encapsulation</li>
        <li>Be mindful of memory - closures keep references alive</li>
        <li>Use let/const in loops to avoid closure issues</li>
        <li>Document closure behavior in complex code</li>
        <li>Consider performance implications of deep closure chains</li>
      </ul>
      
      <h3>Debugging Closures</h3>
      <p>Use browser DevTools to inspect closures:</p>
      
      <pre><code>function outer() {
  const outerVar = 'outer';
  
  function inner() {
    const innerVar = 'inner';
    debugger; // Pause here to inspect closure in DevTools
    console.log(outerVar, innerVar);
  }
  
  return inner;
}

const closure = outer();
closure();</code></pre>
      
      <p>Closures are a powerful feature of JavaScript that enable many advanced patterns and techniques. They're essential for understanding how JavaScript works and for writing effective, maintainable code. Master closures, and you'll have a much deeper understanding of JavaScript's behavior.</p>
    `,
    date: "2023-11-10",
  },
  {
    slug: "javascript-promises-async-await",
    title: "Promises and Async/Await in JavaScript",
    description: "Master asynchronous JavaScript with Promises and async/await syntax. Learn how to handle asynchronous operations elegantly and avoid callback hell.",
    excerpt: "Learn how to handle asynchronous operations elegantly in JavaScript.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "28 min read",
    tags: ["JavaScript", "Promises", "Async/Await", "Asynchronous"],
    content: `
      <h2>What are Promises?</h2>
      <p>A Promise is an object representing the eventual completion or failure of an asynchronous operation. Promises provide a cleaner alternative to callbacks for handling asynchronous code. They represent a value that may be available now, in the future, or never.</p>
      
      <p>Promises have three states:</p>
      <ul>
        <li><strong>Pending</strong> - Initial state, neither fulfilled nor rejected</li>
        <li><strong>Fulfilled</strong> - Operation completed successfully</li>
        <li><strong>Rejected</strong> - Operation failed</li>
      </ul>
      
      <p>Once a promise is fulfilled or rejected, it cannot change state. This makes promises predictable and easier to work with than callbacks.</p>
      
      <h3>Installation</h3>
      <p>Promises are built into modern JavaScript (ES6+). No installation needed for modern browsers and Node.js 12+. For older environments, you can use a polyfill:</p>
      
      <pre><code>npm install es6-promise</code></pre>
      
      <h3>Creating Promises</h3>
      <p>You can create a promise using the Promise constructor:</p>
      
      <pre><code>const promise = new Promise((resolve, reject) => {
  // Async operation
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve('Operation succeeded');
    } else {
      reject(new Error('Operation failed'));
    }
  }, 1000);
});

promise
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Operation completed');
  });</code></pre>
      
      <h3>Promise Chaining</h3>
      <p>Promises can be chained together for sequential operations:</p>
      
      <pre><code>fetch('/api/user')
  .then(response => response.json())
  .then(user => {
    return fetch(\`/api/posts/\${user.id}\`);
  })
  .then(response => response.json())
  .then(posts => {
    console.log('User posts:', posts);
  })
  .catch(error => {
    console.error('Error:', error);
  });</code></pre>
      
      <h3>Promise Methods</h3>
      <p><strong>Promise.all()</strong> - Wait for all promises to resolve:</p>
      
      <pre><code>const promise1 = fetch('/api/users');
const promise2 = fetch('/api/posts');
const promise3 = fetch('/api/comments');

Promise.all([promise1, promise2, promise3])
  .then(responses => {
    return Promise.all(responses.map(r => r.json()));
  })
  .then(([users, posts, comments]) => {
    console.log('All data loaded:', { users, posts, comments });
  })
  .catch(error => {
    console.error('One or more requests failed:', error);
  });</code></pre>
      
      <p><strong>Promise.race()</strong> - Returns the first promise that settles:</p>
      
      <pre><code>const timeout = new Promise((_, reject) => 
  setTimeout(() => reject(new Error('Timeout')), 5000)
);

const fetchData = fetch('/api/data');

Promise.race([fetchData, timeout])
  .then(response => response.json())
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));</code></pre>
      
      <p><strong>Promise.allSettled()</strong> - Wait for all promises to settle (resolve or reject):</p>
      
      <pre><code>const promises = [
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/invalid')
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index} succeeded\`, result.value);
      } else {
        console.log(\`Promise \${index} failed\`, result.reason);
      }
    });
  });</code></pre>
      
      <p><strong>Promise.any()</strong> - Returns the first fulfilled promise:</p>
      
      <pre><code>const promise1 = Promise.reject('Error 1');
const promise2 = Promise.resolve('Success 2');
const promise3 = Promise.resolve('Success 3');

Promise.any([promise1, promise2, promise3])
  .then(value => console.log('First success:', value)); // "Success 2"</code></pre>
      
      <h3>Async/Await Syntax</h3>
      <p>async/await is syntactic sugar over promises, making asynchronous code look synchronous:</p>
      
      <pre><code>async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

// Usage
async function displayUser(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log('User:', user.name);
    return user;
  } catch (error) {
    console.error('Failed to display user:', error);
  }
}</code></pre>
      
      <h3>Error Handling with Async/Await</h3>
      <p>Error handling is cleaner with async/await:</p>
      
      <pre><code>async function handleData() {
  try {
    const data = await fetchData();
    const processed = await processData(data);
    const saved = await saveData(processed);
    return saved;
  } catch (error) {
    console.error('Error in handleData:', error);
    // Handle error appropriately
    throw error; // Re-throw if needed
  }
}

// Multiple error handling
async function complexOperation() {
  try {
    const step1 = await operation1();
    try {
      const step2 = await operation2(step1);
      return step2;
    } catch (error) {
      console.error('Error in step 2:', error);
      // Fallback for step 2
      return await fallbackOperation();
    }
  } catch (error) {
    console.error('Error in step 1:', error);
    throw error;
  }
}</code></pre>
      
      <h3>Parallel Execution</h3>
      <p>Execute multiple async operations in parallel:</p>
      
      <pre><code>// Sequential (slow)
async function sequential() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();
  return { user, posts, comments };
}

// Parallel (fast)
async function parallel() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
  return { user, posts, comments };
}</code></pre>
      
      <h3>Real-World Example: API Client</h3>
      <pre><code>class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  
  async request(endpoint, options = {}) {
    try {
      const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });
      
      if (!response.ok) {
        throw new Error(\`API Error: \${response.status} \${response.statusText}\`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
  
  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }
  
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
  
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
  
  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

// Usage
const api = new ApiClient('https://api.example.com');

async function loadUserData(userId) {
  try {
    const [user, posts, followers] = await Promise.all([
      api.get(\`/users/\${userId}\`),
      api.get(\`/users/\${userId}/posts\`),
      api.get(\`/users/\${userId}/followers\`)
    ]);
    
    return { user, posts, followers };
  } catch (error) {
    console.error('Failed to load user data:', error);
    throw error;
  }
}</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Always handle errors with try/catch or .catch()</li>
        <li>Use Promise.all() for parallel operations</li>
        <li>Prefer async/await for readability</li>
        <li>Don't forget await - missing it returns a Promise</li>
        <li>Use Promise.allSettled() when you need all results</li>
        <li>Avoid nesting - use async/await instead</li>
        <li>Handle timeouts for long-running operations</li>
        <li>Clean up resources in finally blocks</li>
      </ul>
      
      <h3>Common Mistakes</h3>
      <pre><code>// ❌ Missing await
async function bad() {
  const data = fetch('/api/data'); // Returns Promise, not data!
  console.log(data); // Promise object
}

// ✅ Correct
async function good() {
  const data = await fetch('/api/data');
  console.log(data); // Actual data
}

// ❌ Not handling errors
async function risky() {
  const data = await fetch('/api/data'); // Can throw!
  return data.json();
}

// ✅ Correct
async function safe() {
  try {
    const data = await fetch('/api/data');
    return await data.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}</code></pre>
      
      <p>Promises and async/await are essential tools for modern JavaScript development. They make asynchronous code more readable, maintainable, and easier to debug. Master these concepts, and you'll be able to handle any asynchronous operation with confidence.</p>
    `,
    date: "2023-11-12",
  },
  {
    slug: "javascript-destructuring",
    title: "JavaScript Destructuring Assignment",
    description: "Learn how to extract values from arrays and objects using destructuring. Simplify your code with destructuring assignment syntax and make it more readable.",
    excerpt: "Simplify your code with destructuring assignment syntax.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Beginner",
    readTime: "18 min read",
    tags: ["JavaScript", "Destructuring", "ES6", "Arrays", "Objects"],
    content: `
      <h2>What is Destructuring?</h2>
      <p>Destructuring assignment is a JavaScript expression that allows you to unpack values from arrays or properties from objects into distinct variables. It's a powerful feature introduced in ES6 that makes code cleaner and more readable.</p>
      
      <p>Destructuring can be used with arrays, objects, nested structures, and even function parameters. It's one of the most commonly used ES6 features in modern JavaScript development.</p>
      
      <h3>Installation</h3>
      <p>Destructuring is part of ES6 (ES2015) and is supported in all modern browsers and Node.js 6+. No installation needed. For older environments, use Babel to transpile:</p>
      
      <pre><code>npm install --save-dev @babel/core @babel/preset-env</code></pre>
      
      <h2>Array Destructuring</h2>
      <p>Extract values from arrays:</p>
      
      <pre><code>const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1, 2, 3

// Skip elements
const [first, , third] = arr;
console.log(first, third); // 1, 3

// Default values
const [x = 10, y = 20] = [1];
console.log(x, y); // 1, 20

// Rest operator
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1</code></pre>
      
      <h3>Advanced Array Destructuring</h3>
      <pre><code>// Nested arrays
const nested = [1, [2, 3], 4];
const [a, [b, c], d] = nested;
console.log(a, b, c, d); // 1, 2, 3, 4

// Ignoring values
const [first, , , fourth] = [1, 2, 3, 4];
console.log(first, fourth); // 1, 4

// With function returns
function getNumbers() {
  return [10, 20, 30];
}
const [x, y, z] = getNumbers();
console.log(x, y, z); // 10, 20, 30</code></pre>
      
      <h2>Object Destructuring</h2>
      <p>Extract properties from objects:</p>
      
      <pre><code>const person = { name: 'John', age: 30, city: 'NYC' };
const { name, age } = person;
console.log(name, age); // John, 30

// Renaming variables
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // John, 30

// Default values
const { name, age = 25, country = 'USA' } = person;
console.log(name, age, country); // John, 30, USA

// Nested destructuring
const user = {
  name: 'John',
  age: 30,
  address: {
    city: 'NYC',
    zip: '10001',
    country: 'USA'
  }
};

const { address: { city, zip } } = user;
console.log(city, zip); // NYC, 10001

// Combined with renaming
const { address: { city: userCity } } = user;
console.log(userCity); // NYC</code></pre>
      
      <h3>Function Parameters</h3>
      <p>Destructure objects and arrays in function parameters:</p>
      
      <pre><code>// Object parameters
function greet({ name, age }) {
  return \`Hello, \${name}! You are \${age} years old.\`;
}

greet({ name: 'John', age: 30 }); // "Hello, John! You are 30 years old."

// With defaults
function createUser({ name, age = 18, role = 'user' }) {
  return { name, age, role };
}

createUser({ name: 'Jane' }); // { name: 'Jane', age: 18, role: 'user' }

// Array parameters
function processCoordinates([x, y]) {
  return \`Position: (\${x}, \${y})\`;
}

processCoordinates([10, 20]); // "Position: (10, 20)"</code></pre>
      
      <h3>Real-World Examples</h3>
      <pre><code>// React props destructuring
function UserCard({ user: { name, email, avatar } }) {
  return (
    &lt;div&gt;
      &lt;img src={avatar} alt={name} /&gt;
      &lt;h3&gt;{name}&lt;/h3&gt;
      &lt;p&gt;{email}&lt;/p&gt;
    &lt;/div&gt;
  );
}

// API response handling
async function fetchUser() {
  const response = await fetch('/api/user');
  const { data: user, status, message } = await response.json();
  return { user, status, message };
}

// Configuration objects
const config = {
  api: {
    baseURL: 'https://api.example.com',
    timeout: 5000
  },
  features: {
    darkMode: true,
    notifications: false
  }
};

const { api: { baseURL, timeout }, features } = config;
console.log(baseURL, timeout, features);

// Swapping array elements
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use destructuring for cleaner code</li>
        <li>Provide default values when properties might be undefined</li>
        <li>Use meaningful variable names when renaming</li>
        <li>Destructure only what you need</li>
        <li>Use rest operator to collect remaining items</li>
        <li>Combine with spread operator for flexibility</li>
      </ul>
      
      <p>Destructuring is a powerful feature that makes JavaScript code more concise and readable. It's widely used in modern JavaScript development and is essential for working with React, API responses, and configuration objects.</p>
    `,
    date: "2023-11-14",
  },
  {
    slug: "javascript-spread-operator",
    title: "JavaScript Spread and Rest Operators",
    description: "Master the spread and rest operators for arrays and objects.",
    excerpt: "Learn how to use ... operator for copying, merging, and more.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Beginner",
    readTime: "12 min read",
    tags: ["JavaScript", "Spread Operator", "Rest Operator", "ES6"],
    content: `<h2>Spread Operator</h2><h3>Arrays</h3><pre><code>// Copying arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

// Merging arrays
const merged = [...arr1, 4, 5, ...arr2];

// Adding elements
const newArr = [0, ...arr1, 4];</code></pre><h3>Objects</h3><pre><code>// Copying objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };

// Merging objects
const merged = { ...obj1, c: 3, d: 4 };

// Overriding properties
const updated = { ...obj1, b: 5 };</code></pre><h2>Rest Operator</h2><pre><code>// Function parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3, 4); // 10

// Destructuring
const [first, ...rest] = [1, 2, 3, 4];
const { a, ...others } = { a: 1, b: 2, c: 3 };</code></pre>`,
    date: "2023-11-16",
  },
  {
    slug: "javascript-modules",
    title: "ES6 Modules in JavaScript",
    description: "Learn how to organize code using ES6 import and export.",
    excerpt: "Master module system for better code organization.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Beginner",
    readTime: "16 min read",
    tags: ["JavaScript", "Modules", "ES6", "Import", "Export"],
    content: `<h2>Exporting</h2><pre><code>// Named exports
export const name = 'John';
export function greet() {
  return 'Hello';
}

// Default export
export default function App() {
  return 'App';
}

// Export list
export { name, greet };</code></pre><h2>Importing</h2><pre><code>// Named imports
import { name, greet } from './module.js';

// Default import
import App from './App.js';

// Import all
import * as utils from './utils.js';

// Renaming
import { name as userName } from './module.js';</code></pre><h3>Dynamic Imports</h3><pre><code>// Dynamic import
const module = await import('./module.js');
const { name } = await import('./module.js');</code></pre>`,
    date: "2023-11-18",
  },
  {
    slug: "javascript-classes",
    title: "JavaScript Classes and Inheritance",
    description: "Learn object-oriented programming in JavaScript using classes.",
    excerpt: "Master ES6 classes, inheritance, and static methods.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "19 min read",
    tags: ["JavaScript", "Classes", "OOP", "Inheritance", "ES6"],
    content: `<h2>Class Syntax</h2><pre><code>class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
  
  static createAnonymous() {
    return new Person('Anonymous', 0);
  }
}

const person = new Person('John', 30);
person.greet(); // "Hello, I'm John"</code></pre><h2>Inheritance</h2><pre><code>class Student extends Person {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }
  
  study() {
    return \`\${this.name} is studying at \${this.school}\`;
  }
}

const student = new Student('Jane', 20, 'MIT');
student.greet(); // Inherited from Person
student.study(); // "Jane is studying at MIT"</code></pre><h3>Getters and Setters</h3><pre><code>class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  
  get area() {
    return this._width * this._height;
  }
  
  set width(value) {
    if (value > 0) {
      this._width = value;
    }
  }
}</code></pre>`,
    date: "2023-11-20",
  },
  {
    slug: "javascript-event-loop",
    title: "Understanding JavaScript Event Loop",
    description: "Learn how JavaScript handles asynchronous operations with the event loop.",
    excerpt: "Master the event loop, call stack, and callback queue.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Advanced",
    readTime: "20 min read",
    tags: ["JavaScript", "Event Loop", "Asynchronous", "Advanced"],
    content: `<h2>How Event Loop Works</h2><p>The event loop is what allows JavaScript to perform non-blocking operations. It continuously checks the call stack and callback queue.</p><h3>Call Stack</h3><pre><code>function first() {
  console.log('First');
  second();
}

function second() {
  console.log('Second');
  third();
}

function third() {
  console.log('Third');
}

first(); // Call stack: first -> second -> third</code></pre><h3>Asynchronous Operations</h3><pre><code>console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

// Output: Start, End, Promise, Timeout</code></pre><h3>Microtasks vs Macrotasks</h3><ul><li>Microtasks: Promises, queueMicrotask</li><li>Macrotasks: setTimeout, setInterval, I/O</li><li>Microtasks execute before macrotasks</li></ul>`,
    date: "2023-11-22",
  },
  {
    slug: "javascript-hoisting",
    title: "JavaScript Hoisting Explained",
    description: "Understand how JavaScript hoists variable and function declarations.",
    excerpt: "Learn about hoisting and temporal dead zone in JavaScript.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "14 min read",
    tags: ["JavaScript", "Hoisting", "Scope", "Variables"],
    content: `<h2>What is Hoisting?</h2><p>Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.</p><h3>Variable Hoisting</h3><pre><code>// var is hoisted and initialized with undefined
console.log(x); // undefined
var x = 5;

// let/const are hoisted but not initialized (TDZ)
console.log(y); // ReferenceError
let y = 5;</code></pre><h3>Function Hoisting</h3><pre><code>// Function declarations are hoisted
sayHello(); // "Hello"

function sayHello() {
  console.log('Hello');
}

// Function expressions are NOT hoisted
sayHi(); // TypeError
const sayHi = () => {
  console.log('Hi');
};</code></pre><h3>Temporal Dead Zone</h3><p>The TDZ is the time between entering scope and variable initialization where the variable cannot be accessed.</p>`,
    date: "2023-11-24",
  },
  {
    slug: "javascript-this-keyword",
    title: "Understanding 'this' in JavaScript",
    description: "Master the 'this' keyword and its binding in different contexts.",
    excerpt: "Learn how 'this' works in functions, objects, and arrow functions.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "18 min read",
    tags: ["JavaScript", "this", "Context", "Binding"],
    content: `<h2>'this' in Different Contexts</h2><h3>Global Context</h3><pre><code>console.log(this); // Window (browser) or global (Node.js)</code></pre><h3>Function Context</h3><pre><code>function regularFunction() {
  console.log(this); // Window (non-strict) or undefined (strict)
}

const obj = {
  name: 'John',
  greet: function() {
    console.log(this.name); // 'John'
  },
  arrow: () => {
    console.log(this); // Window (lexical this)
  }
};</code></pre><h3>Binding Methods</h3><pre><code>// call, apply, bind
const person = {
  name: 'John'
};

function greet(greeting) {
  return \`\${greeting}, \${this.name}\`;
}

greet.call(person, 'Hello'); // "Hello, John"
greet.apply(person, ['Hi']); // "Hi, John"
const boundGreet = greet.bind(person);
boundGreet('Hey'); // "Hey, John"</code></pre>`,
    date: "2023-11-26",
  },
  {
    slug: "javascript-prototypes",
    title: "JavaScript Prototypes and Prototypal Inheritance",
    description: "Understand JavaScript's prototype-based inheritance model.",
    excerpt: "Learn how prototypes work and how to use them effectively.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Advanced",
    readTime: "21 min read",
    tags: ["JavaScript", "Prototypes", "Inheritance", "Advanced"],
    content: `<h2>Prototype Chain</h2><pre><code>function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const person = new Person('John');
person.greet(); // "Hello, I'm John"

// Prototype chain: person -> Person.prototype -> Object.prototype -> null</code></pre><h3>Inheritance</h3><pre><code>function Student(name, school) {
  Person.call(this, name);
  this.school = school;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  return \`Studying at \${this.school}\`;
};</code></pre>`,
    date: "2023-11-28",
  },
  // Modern Technologies
  {
    slug: "typescript-introduction",
    title: "Introduction to TypeScript",
    description: "Learn TypeScript - JavaScript with static type checking. Add type safety to your JavaScript code and catch errors at compile time.",
    excerpt: "Add type safety to your JavaScript code with TypeScript.",
    category: "TypeScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "30 min read",
    tags: ["TypeScript", "Types", "JavaScript", "Programming"],
    content: `
      <h2>What is TypeScript?</h2>
      <p>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It's a superset of JavaScript that adds static type definitions. TypeScript compiles to plain JavaScript, which means any valid JavaScript code is also valid TypeScript code.</p>
      
      <p>TypeScript was developed by Microsoft and first released in 2012. It adds optional static typing, classes, interfaces, and other features to JavaScript, making it easier to build large-scale applications. TypeScript helps catch errors during development rather than at runtime, leading to more robust and maintainable code.</p>
      
      <h3>Why Use TypeScript?</h3>
      <ul>
        <li><strong>Type Safety</strong> - Catch errors at compile time</li>
        <li><strong>Better IDE Support</strong> - Autocomplete, refactoring, navigation</li>
        <li><strong>Self-Documenting Code</strong> - Types serve as documentation</li>
        <li><strong>Easier Refactoring</strong> - Change code with confidence</li>
        <li><strong>Better for Large Projects</strong> - Manage complexity better</li>
      </ul>
      
      <h3>Installation</h3>
      <p>Install TypeScript globally or locally in your project:</p>
      
      <pre><code># Global installation
npm install -g typescript

# Local installation (recommended)
npm install --save-dev typescript

# Verify installation
tsc --version</code></pre>
      
      <p>Initialize TypeScript in your project:</p>
      
      <pre><code># Create tsconfig.json
tsc --init

# Or create manually
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}</code></pre>
      
      <h3>Basic Types</h3>
      <p>TypeScript provides several basic types:</p>
      
      <pre><code>// Primitive types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let data: null = null;
let value: undefined = undefined;

// Arrays
let items: string[] = ["apple", "banana"];
let numbers: Array&lt;number&gt; = [1, 2, 3];

// Tuples
let tuple: [string, number] = ["hello", 10];

// Objects
let user: { name: string; age: number } = { name: "John", age: 30 };

// Any (avoid when possible)
let anything: any = "can be anything";

// Unknown (safer than any)
let unknownValue: unknown = "could be anything";

// Void
function log(message: string): void {
  console.log(message);
}

// Never (for functions that never return)
function throwError(): never {
  throw new Error("Error");
}</code></pre>
      
      <h3>Functions</h3>
      <p>Type functions with parameter and return types:</p>
      
      <pre><code>// Function declaration
function greet(name: string): string {
  return \`Hello, \${name}\`;
}

// Arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// Optional parameters
function greetOptional(name: string, title?: string): string {
  return title ? \`Hello, \${title} \${name}\` : \`Hello, \${name}\`;
}

// Default parameters
function greetDefault(name: string, greeting: string = "Hello"): string {
  return \`\${greeting}, \${name}\`;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// Function overloads
function process(value: string): string;
function process(value: number): number;
function process(value: string | number): string | number {
  return typeof value === 'string' ? value.toUpperCase() : value * 2;
}</code></pre>
      
      <h3>Interfaces</h3>
      <p>Define object shapes with interfaces:</p>
      
      <pre><code>interface User {
  name: string;
  age: number;
  email?: string; // Optional property
  readonly id: number; // Read-only property
}

const user: User = {
  name: "John",
  age: 30,
  id: 1
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

// Extending interfaces
interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  name: "Jane",
  age: 25,
  id: 2,
  permissions: ["read", "write", "delete"]
};

// Interface for functions
interface SearchFunction {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunction = function(src, sub) {
  return src.indexOf(sub) > -1;
};</code></pre>
      
      <h3>Classes</h3>
      <p>TypeScript enhances JavaScript classes with type annotations:</p>
      
      <pre><code>class Person {
  private name: string;
  protected age: number;
  public email: string;
  
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  greet(): string {
    return \`Hello, I'm \${this.name}\`;
  }
  
  get getName(): string {
    return this.name;
  }
  
  set setName(value: string) {
    this.name = value;
  }
}

class Employee extends Person {
  private salary: number;
  
  constructor(name: string, age: number, email: string, salary: number) {
    super(name, age, email);
    this.salary = salary;
  }
  
  getSalary(): number {
    return this.salary;
  }
}

const employee = new Employee("John", 30, "john@example.com", 50000);
console.log(employee.greet()); // "Hello, I'm John"</code></pre>
      
      <h3>Generics</h3>
      <p>Create reusable components with generics:</p>
      
      <pre><code>// Generic function
function identity&lt;T&gt;(arg: T): T {
  return arg;
}

const output = identity&lt;string&gt;("hello");
const number = identity&lt;number&gt;(42);

// Generic interface
interface Box&lt;T&gt; {
  value: T;
}

const stringBox: Box&lt;string&gt; = { value: "hello" };
const numberBox: Box&lt;number&gt; = { value: 42 };

// Generic class
class Container&lt;T&gt; {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
  
  get(index: number): T {
    return this.items[index];
  }
}

const stringContainer = new Container&lt;string&gt;();
stringContainer.add("hello");
stringContainer.add("world");</code></pre>
      
      <h3>Union and Intersection Types</h3>
      <pre><code>// Union type
type StringOrNumber = string | number;

function processValue(value: StringOrNumber): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value.toString();
}

// Intersection type
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
  name: "John",
  age: 30,
  employeeId: 123,
  department: "Engineering"
};</code></pre>
      
      <h3>Type Guards</h3>
      <pre><code>function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function process(value: string | number) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows value is number here
    console.log(value.toFixed(2));
  }
}</code></pre>
      
      <h3>Compiling TypeScript</h3>
      <pre><code># Compile single file
tsc app.ts

# Compile with watch mode
tsc --watch

# Compile entire project
tsc

# With tsconfig.json
tsc --project tsconfig.json</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Enable strict mode in tsconfig.json</li>
        <li>Use interfaces for object shapes</li>
        <li>Avoid 'any' type when possible</li>
        <li>Use type guards for runtime type checking</li>
        <li>Leverage TypeScript's type inference</li>
        <li>Use generics for reusable code</li>
        <li>Document complex types with comments</li>
      </ul>
      
      <p>TypeScript brings the benefits of static typing to JavaScript, making your code more robust, maintainable, and easier to work with. It's especially valuable in large codebases and team environments where type safety helps prevent bugs and improves developer productivity.</p>
    `,
    date: "2023-12-01",
  },
  {
    slug: "nextjs-getting-started",
    title: "Getting Started with Next.js",
    description: "Build React applications with Next.js framework. Learn server-side rendering, routing, API routes, and more with Next.js.",
    excerpt: "Learn server-side rendering, routing, and more with Next.js.",
    category: "Next.js",
    image: "/react-js-logo.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "35 min read",
    tags: ["Next.js", "React", "SSR", "Framework"],
    content: `
      <h2>What is Next.js?</h2>
      <p>Next.js is a React framework for production that provides a great developer experience with features like server-side rendering (SSR), static site generation (SSG), API routes, automatic code splitting, optimized performance, and more. It's built on top of React and Node.js, making it perfect for building full-stack React applications.</p>
      
      <p>Next.js was created by Vercel and has become one of the most popular React frameworks. It handles many complex configurations automatically, allowing developers to focus on building features rather than configuring build tools.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Server-Side Rendering (SSR)</strong> - Render pages on the server</li>
        <li><strong>Static Site Generation (SSG)</strong> - Pre-render pages at build time</li>
        <li><strong>API Routes</strong> - Build API endpoints alongside your pages</li>
        <li><strong>Automatic Code Splitting</strong> - Optimize bundle sizes</li>
        <li><strong>File-based Routing</strong> - Simple, intuitive routing</li>
        <li><strong>Image Optimization</strong> - Automatic image optimization</li>
        <li><strong>CSS Support</strong> - Built-in CSS and Sass support</li>
        <li><strong>TypeScript Support</strong> - First-class TypeScript support</li>
      </ul>
      
      <h3>Installation</h3>
      <p>Create a new Next.js project using create-next-app:</p>
      
      <pre><code># Using npx (recommended)
npx create-next-app@latest my-app

# With TypeScript
npx create-next-app@latest my-app --typescript

# With Tailwind CSS
npx create-next-app@latest my-app --tailwind

# With all options
npx create-next-app@latest my-app --typescript --tailwind --app

cd my-app
npm run dev</code></pre>
      
      <p>The app will be available at http://localhost:3000</p>
      
      <h3>Project Structure</h3>
      <pre><code>my-app/
  ├── pages/          # Pages and API routes
  │   ├── api/       # API routes
  │   ├── _app.js    # Custom App component
  │   └── index.js    # Home page
  ├── public/         # Static files
  ├── styles/         # CSS files
  ├── components/     # React components
  └── package.json</code></pre>
      
      <h3>Pages and Routing</h3>
      <p>Next.js uses file-based routing. Files in the pages directory automatically become routes:</p>
      
      <pre><code>// pages/index.js - Route: /
export default function Home() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Home Page&lt;/h1&gt;
      &lt;p&gt;Welcome to Next.js!&lt;/p&gt;
    &lt;/div&gt;
  );
}

// pages/about.js - Route: /about
export default function About() {
  return &lt;h1&gt;About Page&lt;/h1&gt;;
}

// pages/blog/[slug].js - Dynamic route: /blog/:slug
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  return &lt;h1&gt;Blog Post: {slug}&lt;/h1&gt;;
}

// pages/products/[...params].js - Catch-all route
export default function Products() {
  const router = useRouter();
  const { params } = router.query;
  
  return &lt;div&gt;Products: {params?.join('/')}&lt;/div&gt;;
}</code></pre>
      
      <h3>Server-Side Rendering (SSR)</h3>
      <p>Use getServerSideProps to fetch data on each request:</p>
      
      <pre><code>// pages/posts.js
export default function Posts({ posts }) {
  return (
    &lt;div&gt;
      &lt;h1&gt;Posts&lt;/h1&gt;
      &lt;ul&gt;
        {posts.map(post => (
          &lt;li key={post.id}&gt;
            &lt;h2&gt;{post.title}&lt;/h2&gt;
            &lt;p&gt;{post.body}&lt;/p&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  
  return {
    props: { posts }
  };
}</code></pre>
      
      <h3>Static Site Generation (SSG)</h3>
      <p>Use getStaticProps to pre-render pages at build time:</p>
      
      <pre><code>// pages/products.js
export default function Products({ products }) {
  return (
    &lt;div&gt;
      {products.map(product => (
        &lt;div key={product.id}&gt;
          &lt;h2&gt;{product.name}&lt;/h2&gt;
          &lt;p&gt;{product.price}&lt;/p&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}

export async function getStaticProps() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();
  
  return {
    props: { products },
    revalidate: 60 // Re-generate page every 60 seconds (ISR)
  };
}</code></pre>
      
      <h3>API Routes</h3>
      <p>Create API endpoints in the pages/api directory:</p>
      
      <pre><code>// pages/api/users.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ users: [] });
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    // Create user logic
    res.status(201).json({ message: 'User created' });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(\`Method \${req.method} Not Allowed\`);
  }
}

// pages/api/users/[id].js
export default function handler(req, res) {
  const { id } = req.query;
  
  if (req.method === 'GET') {
    res.status(200).json({ id, name: 'John' });
  } else if (req.method === 'PUT') {
    res.status(200).json({ message: 'User updated' });
  } else if (req.method === 'DELETE') {
    res.status(200).json({ message: 'User deleted' });
  }
}</code></pre>
      
      <h3>Image Optimization</h3>
      <p>Next.js provides an optimized Image component:</p>
      
      <pre><code>import Image from 'next/image';

function MyComponent() {
  return (
    &lt;Image
      src="/images/hero.jpg"
      alt="Hero image"
      width={800}
      height={600}
      priority // Load immediately
    /&gt;
  );
}</code></pre>
      
      <h3>Link Component</h3>
      <p>Use Next.js Link for client-side navigation:</p>
      
      <pre><code>import Link from 'next/link';

function Navigation() {
  return (
    &lt;nav&gt;
      &lt;Link href="/"&gt;Home&lt;/Link&gt;
      &lt;Link href="/about"&gt;About&lt;/Link&gt;
      &lt;Link href="/blog/[slug]" as="/blog/my-post"&gt;Blog Post&lt;/Link&gt;
    &lt;/nav&gt;
  );
}</code></pre>
      
      <h3>Environment Variables</h3>
      <pre><code>// .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your-secret-key

// Usage
const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Available in browser
const secret = process.env.SECRET_KEY; // Server-side only</code></pre>
      
      <h3>Deployment</h3>
      <pre><code># Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
vercel

# Or deploy to other platforms
npm run build
# Upload .next folder to your hosting</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use getStaticProps for static content</li>
        <li>Use getServerSideProps for dynamic content</li>
        <li>Optimize images with next/image</li>
        <li>Use API routes for backend functionality</li>
        <li>Implement ISR (Incremental Static Regeneration) for frequently updated content</li>
        <li>Use dynamic imports for code splitting</li>
        <li>Leverage Next.js middleware for authentication</li>
      </ul>
      
      <p>Next.js is a powerful framework that makes building production-ready React applications easier. With its built-in optimizations, routing, and API capabilities, it's an excellent choice for modern web development.</p>
    `,
    date: "2023-12-03",
  },
  {
    slug: "nodejs-basics",
    title: "Node.js Fundamentals",
    description: "Learn server-side JavaScript with Node.js.",
    excerpt: "Build scalable network applications with Node.js.",
    category: "Node.js",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "24 min read",
    tags: ["Node.js", "JavaScript", "Backend", "Server"],
    content: `<h2>What is Node.js?</h2><p>Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server.</p><h3>Creating a Server</h3><pre><code>const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});</code></pre><h3>File System</h3><pre><code>const fs = require('fs');

// Read file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write file
fs.writeFile('file.txt', 'Hello', (err) => {
  if (err) throw err;
});</code></pre>`,
    date: "2023-12-05",
  },
  {
    slug: "expressjs-api",
    title: "Building REST APIs with Express.js",
    description: "Create RESTful APIs using Express.js framework.",
    excerpt: "Learn routing, middleware, and API best practices with Express.",
    category: "Express",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "26 min read",
    tags: ["Express", "Node.js", "API", "Backend"],
    content: `<h2>Setting Up Express</h2><pre><code>const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});</code></pre><h3>Routes</h3><pre><code>app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  // Update user
});

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  // Delete user
});</code></pre>`,
    date: "2023-12-07",
  },
  {
    slug: "mongodb-basics",
    title: "MongoDB Database Guide",
    description: "Learn NoSQL database concepts with MongoDB.",
    excerpt: "Master MongoDB queries, aggregation, and data modeling.",
    category: "MongoDB",
    image: "/placeholder.jpg",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "22 min read",
    tags: ["MongoDB", "Database", "NoSQL", "Backend"],
    content: `<h2>What is MongoDB?</h2><p>MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents.</p><h3>Basic Operations</h3><pre><code>// Insert
db.users.insertOne({
  name: "John",
  age: 30,
  email: "john@example.com"
});

// Find
db.users.find({ age: { $gt: 25 } });

// Update
db.users.updateOne(
  { name: "John" },
  { $set: { age: 31 } }
);

// Delete
db.users.deleteOne({ name: "John" });</code></pre>`,
    date: "2023-12-09",
  },
  {
    slug: "postgresql-sql",
    title: "PostgreSQL and SQL Fundamentals",
    description: "Learn relational database concepts with PostgreSQL.",
    excerpt: "Master SQL queries, joins, and database design.",
    category: "PostgreSQL",
    image: "/placeholder.jpg",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "23 min read",
    tags: ["PostgreSQL", "SQL", "Database", "Backend"],
    content: `<h2>SQL Basics</h2><pre><code>-- Create table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  age INTEGER
);

-- Insert
INSERT INTO users (name, email, age)
VALUES ('John', 'john@example.com', 30);

-- Select
SELECT * FROM users WHERE age > 25;

-- Update
UPDATE users SET age = 31 WHERE name = 'John';

-- Delete
DELETE FROM users WHERE id = 1;</code></pre><h3>Joins</h3><pre><code>SELECT u.name, p.title
FROM users u
INNER JOIN posts p ON u.id = p.user_id;</code></pre>`,
    date: "2023-12-11",
  },
  {
    slug: "graphql-introduction",
    title: "Introduction to GraphQL",
    description: "Learn GraphQL - a query language for APIs.",
    excerpt: "Build flexible APIs with GraphQL queries and mutations.",
    category: "GraphQL",
    image: "/placeholder.jpg",
    author: "Moradabads Team",
    difficulty: "Advanced",
    readTime: "27 min read",
    tags: ["GraphQL", "API", "Backend", "Query Language"],
    content: `<h2>What is GraphQL?</h2><p>GraphQL is a query language for APIs that allows clients to request exactly the data they need.</p><h3>Schema</h3><pre><code>type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}</code></pre><h3>Queries</h3><pre><code>query {
  user(id: "1") {
    name
    email
    posts {
      title
    }
  }
}</code></pre>`,
    date: "2023-12-13",
  },
  {
    slug: "docker-containers",
    title: "Docker and Containerization",
    description: "Learn containerization with Docker.",
    excerpt: "Package and deploy applications with Docker containers.",
    category: "Docker",
    image: "/placeholder.jpg",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "24 min read",
    tags: ["Docker", "Containers", "DevOps", "Deployment"],
    content: `<h2>What is Docker?</h2><p>Docker is a platform for developing, shipping, and running applications in containers.</p><h3>Dockerfile</h3><pre><code>FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]</code></pre><h3>Commands</h3><pre><code># Build image
docker build -t my-app .

# Run container
docker run -p 3000:3000 my-app

# List containers
docker ps

# Stop container
docker stop container-id</code></pre>`,
    date: "2023-12-15",
  },
  {
    slug: "kubernetes-orchestration",
    title: "Kubernetes Container Orchestration",
    description: "Learn container orchestration with Kubernetes.",
    excerpt: "Deploy and manage containerized applications at scale.",
    category: "Kubernetes",
    image: "/placeholder.jpg",
    author: "Moradabads Team",
    difficulty: "Advanced",
    readTime: "30 min read",
    tags: ["Kubernetes", "DevOps", "Containers", "Orchestration"],
    content: `<h2>What is Kubernetes?</h2><p>Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management.</p><h3>Basic Concepts</h3><ul><li>Pods - smallest deployable units</li><li>Services - expose pods</li><li>Deployments - manage pod replicas</li><li>ConfigMaps - configuration data</li></ul>`,
    date: "2023-12-17",
  },
  {
    slug: "aws-cloud-services",
    title: "AWS Cloud Services Overview",
    description: "Introduction to Amazon Web Services.",
    excerpt: "Learn about AWS services for cloud computing.",
    category: "AWS",
    image: "/placeholder.jpg",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "28 min read",
    tags: ["AWS", "Cloud", "DevOps", "Infrastructure"],
    content: `<h2>Popular AWS Services</h2><ul><li>EC2 - Virtual servers</li><li>S3 - Object storage</li><li>Lambda - Serverless functions</li><li>RDS - Managed databases</li><li>CloudFront - CDN</li><li>Route 53 - DNS</li></ul>`,
    date: "2023-12-19",
  },
  {
    slug: "vuejs-introduction",
    title: "Introduction to Vue.js",
    description: "Learn Vue.js - progressive JavaScript framework for building user interfaces. Master Vue.js components, reactivity, and composition API.",
    excerpt: "Build user interfaces with Vue.js framework.",
    category: "Vue.js",
    image: "/placeholder.jpg",
    author: "Moradabads Team",
    difficulty: "Intermediate",
    readTime: "30 min read",
    tags: ["Vue.js", "Framework", "Frontend", "JavaScript"],
    content: `
      <h2>What is Vue.js?</h2>
      <p>Vue.js is a progressive JavaScript framework for building user interfaces. Created by Evan You, Vue is designed to be incrementally adoptable - you can use as much or as little of Vue as you need. It's known for its gentle learning curve, excellent documentation, and reactive data binding.</p>
      
      <p>Vue.js combines the best features of React and Angular, offering a template-based syntax similar to Angular but with the component-based architecture of React. It's lightweight, performant, and has a vibrant ecosystem.</p>
      
      <h3>Installation</h3>
      <p>Install Vue.js using npm or yarn:</p>
      
      <pre><code># Using npm
npm install vue@next

# Using yarn
yarn add vue@next

# Using CDN
&lt;script src="https://unpkg.com/vue@next"&gt;&lt;/script&gt;</code></pre>
      
      <p>Create a Vue project with Vue CLI:</p>
      
      <pre><code># Install Vue CLI
npm install -g @vue/cli

# Create new project
vue create my-vue-app

# Or use Vite (faster)
npm create vue@latest my-vue-app</code></pre>
      
      <h3>Basic Component</h3>
      <p>Vue components use a template, script, and style structure:</p>
      
      <pre><code>&lt;template&gt;
  &lt;div class="counter"&gt;
    &lt;h1&gt;{{ message }}&lt;/h1&gt;
    &lt;button @click="increment"&gt;Count: {{ count }}&lt;/button&gt;
    &lt;button @click="decrement"&gt;Decrement&lt;/button&gt;
    &lt;button @click="reset"&gt;Reset&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'Counter',
  data() {
    return {
      message: 'Hello Vue!',
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log(\`Count changed from \${oldValue} to \${newValue}\`);
    }
  }
};
&lt;/script&gt;

&lt;style scoped&gt;
.counter {
  padding: 20px;
}
button {
  margin: 5px;
  padding: 10px 20px;
}
&lt;/style&gt;</code></pre>
      
      <h3>Composition API</h3>
      <p>Vue 3 introduces the Composition API for better code organization:</p>
      
      <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
    &lt;button @click="increment"&gt;Increment&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed, watch } from 'vue';

const title = ref('Vue 3 App');
const count = ref(0);

const doubleCount = computed(() => count.value * 2);

watch(count, (newValue, oldValue) => {
  console.log(\`Count: \${oldValue} → \${newValue}\`);
});

function increment() {
  count.value++;
}
&lt;/script&gt;</code></pre>
      
      <h3>Directives</h3>
      <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- v-if / v-else --&gt;
    &lt;p v-if="isVisible"&gt;Visible&lt;/p&gt;
    &lt;p v-else&gt;Hidden&lt;/p&gt;
    
    &lt;!-- v-show --&gt;
    &lt;p v-show="isVisible"&gt;Toggle visibility&lt;/p&gt;
    
    &lt;!-- v-for --&gt;
    &lt;ul&gt;
      &lt;li v-for="item in items" :key="item.id"&gt;
        {{ item.name }}
      &lt;/li&gt;
    &lt;/ul&gt;
    
    &lt;!-- v-bind (shorthand : ) --&gt;
    &lt;img :src="imageUrl" :alt="imageAlt"&gt;
    
    &lt;!-- v-on (shorthand @ ) --&gt;
    &lt;button @click="handleClick" @mouseover="handleHover"&gt;Click&lt;/button&gt;
    
    &lt;!-- v-model --&gt;
    &lt;input v-model="inputValue" placeholder="Enter text"&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      
      <h3>Props and Events</h3>
      <pre><code>// Child Component
&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;{{ title }}&lt;/h2&gt;
    &lt;button @click="$emit('increment')"&gt;Increment&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Default Title'
    }
  },
  emits: ['increment']
};
&lt;/script&gt;

// Parent Component
&lt;template&gt;
  &lt;ChildComponent 
    :title="pageTitle" 
    @increment="handleIncrement" 
  /&gt;
&lt;/template&gt;</code></pre>
      
      <h3>Vue Router</h3>
      <pre><code>// Install
npm install vue-router@4

// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('../views/About.vue') },
  { path: '/user/:id', component: () => import('../views/User.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;</code></pre>
      
      <h3>State Management with Pinia</h3>
      <pre><code>// Install
npm install pinia

// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    }
  }
});

// Usage in component
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
counter.increment();
console.log(counter.count);</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use Composition API for new projects</li>
        <li>Keep components small and focused</li>
        <li>Use computed properties for derived state</li>
        <li>Leverage Vue's reactivity system</li>
        <li>Use v-show for frequent toggles, v-if for conditional rendering</li>
        <li>Always provide keys in v-for loops</li>
        <li>Use scoped styles to avoid CSS conflicts</li>
      </ul>
      
      <p>Vue.js is an excellent choice for building modern web applications. Its progressive nature means you can start simple and add complexity as needed, making it perfect for both beginners and experienced developers.</p>
    `,
    date: "2023-12-21",
  },
  {
    slug: "angular-framework",
    title: "Angular Framework Guide",
    description: "Learn Angular - TypeScript-based web framework for building large-scale applications. Master components, services, routing, and more.",
    excerpt: "Build large-scale applications with Angular.",
    category: "Angular",
    image: "/placeholder.jpg",
    author: "Moradabads Team",
    difficulty: "Advanced",
    readTime: "35 min read",
    tags: ["Angular", "TypeScript", "Framework", "Frontend"],
    content: `
      <h2>What is Angular?</h2>
      <p>Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript and implements core and optional functionality as a set of TypeScript libraries that you import into your applications.</p>
      
      <p>Angular was developed by Google and is a complete rewrite of AngularJS. It's designed for building large-scale, enterprise applications with a focus on maintainability, testability, and developer productivity.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Components</strong> - Building blocks of Angular applications</li>
        <li><strong>Services</strong> - Reusable business logic</li>
        <li><strong>Dependency Injection</strong> - Built-in DI system</li>
        <li><strong>Routing</strong> - Client-side routing</li>
        <li><strong>Forms</strong> - Template-driven and reactive forms</li>
        <li><strong>HTTP Client</strong> - Built-in HTTP service</li>
        <li><strong>Testing</strong> - First-class testing support</li>
      </ul>
      
      <h3>Installation</h3>
      <p>Install Angular CLI globally:</p>
      
      <pre><code># Install Angular CLI
npm install -g @angular/cli

# Create new project
ng new my-angular-app

# Navigate to project
cd my-angular-app

# Start development server
ng serve

# Build for production
ng build --prod</code></pre>
      
      <h3>Project Structure</h3>
      <pre><code>my-angular-app/
  ├── src/
  │   ├── app/
  │   │   ├── components/
  │   │   ├── services/
  │   │   ├── app.component.ts
  │   │   └── app.module.ts
  │   ├── assets/
  │   ├── environments/
  │   └── main.ts
  ├── angular.json
  └── package.json</code></pre>
      
      <h3>Component</h3>
      <pre><code>import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
    &lt;button (click)="increment()"&gt;Increment&lt;/button&gt;
    &lt;button (click)="decrement()"&gt;Decrement&lt;/button&gt;
  \`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  count = 0;
  
  increment() {
    this.count++;
  }
  
  decrement() {
    this.count--;
  }
}</code></pre>
      
      <h3>Services</h3>
      <pre><code>import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[] = [];
  
  getData() {
    return this.data;
  }
  
  addItem(item: any) {
    this.data.push(item);
  }
  
  removeItem(index: number) {
    this.data.splice(index, 1);
  }
}

// Usage in component
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  template: '&lt;div&gt;{{ data | json }}&lt;/div&gt;'
})
export class DataComponent {
  data: any[] = [];
  
  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}</code></pre>
      
      <h3>Routing</h3>
      <pre><code>// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Template
&lt;router-outlet&gt;&lt;/router-outlet&gt;
&lt;a routerLink="/about"&gt;About&lt;/a&gt;</code></pre>
      
      <h3>HTTP Client</h3>
      <pre><code>import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com';
  
  constructor(private http: HttpClient) {}
  
  getUsers(): Observable&lt;User[]&gt; {
    return this.http.get&lt;User[]&gt;(\`\${this.apiUrl}/users\`);
  }
  
  createUser(user: User): Observable&lt;User&gt; {
    return this.http.post&lt;User&gt;(\`\${this.apiUrl}/users\`, user);
  }
}</code></pre>
      
      <h3>Forms</h3>
      <pre><code>// Template-driven form
&lt;form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)"&gt;
  &lt;input name="name" ngModel required&gt;
  &lt;input name="email" ngModel type="email" required&gt;
  &lt;button type="submit" [disabled]="!userForm.valid"&gt;Submit&lt;/button&gt;
&lt;/form&gt;

// Reactive form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class UserFormComponent {
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use TypeScript for type safety</li>
        <li>Follow Angular style guide</li>
        <li>Use services for shared logic</li>
        <li>Implement lazy loading for routes</li>
        <li>Use OnPush change detection for performance</li>
        <li>Follow single responsibility principle</li>
        <li>Write unit tests for components and services</li>
      </ul>
      
      <p>Angular is a comprehensive framework perfect for building large-scale enterprise applications. Its opinionated structure and powerful features make it an excellent choice for teams building complex applications.</p>
    `,
    date: "2023-12-23",
  },
  // Adding many more comprehensive articles
  {
    slug: "react-useimperativehandle",
    title: "Understanding useImperativeHandle Hook",
    description: "Learn how to customize the instance value exposed to parent components when using ref with useImperativeHandle. Control what parent components can access via refs.",
    excerpt: "Control what parent components can access via refs using useImperativeHandle.",
    category: "React",
    image: "/react-js-logo.png",
    author: "Moradabads Team",
    difficulty: "Advanced",
    readTime: "18 min read",
    tags: ["React", "Hooks", "useImperativeHandle", "Refs"],
    content: `
      <h2>What is useImperativeHandle?</h2>
      <p>useImperativeHandle is a React hook that allows you to customize the instance value that is exposed to parent components when using ref. It's typically used with forwardRef to expose specific methods or properties instead of the entire DOM element or component instance.</p>
      
      <p>This hook is useful when you want to control what parent components can access through refs. Instead of exposing the entire component instance or DOM node, you can expose only the methods and properties you want to make available, creating a cleaner API.</p>
      
      <h3>Installation</h3>
      <p>useImperativeHandle is part of React core (React 16.8+), so no additional installation is needed. Verify your React version:</p>
      
      <pre><code>npm list react</code></pre>
      
      <h3>Basic Syntax</h3>
      <pre><code>useImperativeHandle(ref, createHandle, [deps])</code></pre>
      
      <h3>Example: Custom Input Component</h3>
      <p>Let's create a custom input component that exposes only specific methods:</p>
      
      <pre><code>import { forwardRef, useImperativeHandle, useRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
    getValue: () => {
      return inputRef.current.value;
    },
    setValue: (value) => {
      inputRef.current.value = value;
    },
    clear: () => {
      inputRef.current.value = '';
      inputRef.current.focus();
    },
    select: () => {
      inputRef.current.select();
    }
  }));
  
  return (
    &lt;input
      ref={inputRef}
      type="text"
      {...props}
      className="custom-input"
    /&gt;
  );
});

CustomInput.displayName = 'CustomInput';

// Usage in parent component
function Form() {
  const inputRef = useRef(null);
  
  const handleFocus = () => {
    inputRef.current.focus();
  };
  
  const handleClear = () => {
    inputRef.current.clear();
  };
  
  const handleGetValue = () => {
    const value = inputRef.current.getValue();
    console.log('Input value:', value);
  };
  
  return (
    &lt;div&gt;
      &lt;CustomInput ref={inputRef} placeholder="Enter text" /&gt;
      &lt;button onClick={handleFocus}&gt;Focus Input&lt;/button&gt;
      &lt;button onClick={handleClear}&gt;Clear Input&lt;/button&gt;
      &lt;button onClick={handleGetValue}&gt;Get Value&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Example: Modal Component</h3>
      <p>Creating a modal that exposes open and close methods:</p>
      
      <pre><code>import { forwardRef, useImperativeHandle, useState } from 'react';

const Modal = forwardRef(({ children, onClose }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => {
      setIsOpen(false);
      onClose?.();
    },
    toggle: () => setIsOpen(prev => !prev),
    isOpen: () => isOpen
  }));
  
  if (!isOpen) return null;
  
  return (
    &lt;div className="modal-overlay" onClick={() => setIsOpen(false)}&gt;
      &lt;div className="modal-content" onClick={(e) => e.stopPropagation()}&gt;
        &lt;button className="close-button" onClick={() => setIsOpen(false)}&gt;
          ×
        &lt;/button&gt;
        {children}
      &lt;/div&gt;
    &lt;/div&gt;
  );
});

Modal.displayName = 'Modal';

// Usage
function App() {
  const modalRef = useRef(null);
  
  return (
    &lt;div&gt;
      &lt;button onClick={() => modalRef.current.open()}&gt;Open Modal&lt;/button&gt;
      &lt;button onClick={() => modalRef.current.close()}&gt;Close Modal&lt;/button&gt;
      &lt;button onClick={() => modalRef.current.toggle()}&gt;Toggle Modal&lt;/button&gt;
      
      &lt;Modal ref={modalRef} onClose={() => console.log('Modal closed')}&gt;
        &lt;h2&gt;Modal Content&lt;/h2&gt;
        &lt;p&gt;This is modal content&lt;/p&gt;
      &lt;/Modal&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>Example: Form Component</h3>
      <p>Expose form validation and submission methods:</p>
      
      <pre><code>const Form = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  
  useImperativeHandle(ref, () => ({
    validate: () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    getValues: () => formData,
    setValues: (values) => setFormData(values),
    reset: () => {
      setFormData({});
      setErrors({});
    },
    submit: () => {
      if (validate()) {
        // Submit logic
        return formData;
      }
      return null;
    }
  }));
  
  return (
    &lt;form&gt;
      {/* Form fields */}
    &lt;/form&gt;
  );
});</code></pre>
      
      <h3>When to Use useImperativeHandle</h3>
      <ul>
        <li>Creating reusable component libraries</li>
        <li>Exposing specific methods instead of entire instances</li>
        <li>Controlling what parent components can access</li>
        <li>Creating imperative APIs for declarative components</li>
        <li>Integrating with third-party libraries that require refs</li>
      </ul>
      
      <h3>When NOT to Use</h3>
      <ul>
        <li>Most cases - prefer declarative props and callbacks</li>
        <li>When you can solve the problem with props</li>
        <li>For simple DOM access - use refs directly</li>
        <li>When it makes the API less React-like</li>
      </ul>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use sparingly - prefer declarative props when possible</li>
        <li>Only expose necessary methods</li>
        <li>Document the exposed API clearly</li>
        <li>Consider using callbacks instead for better React patterns</li>
        <li>Keep the exposed API minimal and focused</li>
        <li>Use TypeScript to type the exposed handle</li>
      </ul>
      
      <h3>TypeScript Example</h3>
      <pre><code>interface CustomInputHandle {
  focus: () => void;
  blur: () => void;
  getValue: () => string;
  setValue: (value: string) => void;
  clear: () => void;
}

const CustomInput = forwardRef&lt;CustomInputHandle, InputProps&gt;((props, ref) => {
  const inputRef = useRef&lt;HTMLInputElement&gt;(null);
  
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    getValue: () => inputRef.current?.value || '',
    setValue: (value: string) => {
      if (inputRef.current) {
        inputRef.current.value = value;
      }
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    }
  }));
  
  return &lt;input ref={inputRef} {...props} /&gt;;
});</code></pre>
      
      <p>useImperativeHandle is a powerful but advanced hook that should be used sparingly. It's most useful when building reusable component libraries or when you need to integrate with imperative APIs. In most cases, prefer declarative React patterns with props and callbacks.</p>
    `,
    date: "2023-11-09",
  },
  {
    slug: "javascript-spread-operator",
    title: "JavaScript Spread Operator Complete Guide",
    description: "Master the JavaScript spread operator for arrays, objects, and function arguments. Learn how to use the spread operator effectively in modern JavaScript.",
    excerpt: "Learn how to use the spread operator for arrays, objects, and function arguments.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Beginner",
    readTime: "20 min read",
    tags: ["JavaScript", "Spread Operator", "ES6", "Arrays", "Objects"],
    content: `
      <h2>What is the Spread Operator?</h2>
      <p>The spread operator (...) is a powerful JavaScript feature introduced in ES6 that allows you to expand iterables (arrays, objects, strings) into individual elements. It's one of the most commonly used features in modern JavaScript development.</p>
      
      <p>The spread operator provides a concise way to copy arrays, combine arrays, pass function arguments, and work with objects. It makes code more readable and functional.</p>
      
      <h3>Installation</h3>
      <p>The spread operator is part of ES6 (ES2015) and is supported in all modern browsers and Node.js 6+. No installation needed. For older environments, use Babel:</p>
      
      <pre><code>npm install --save-dev @babel/core @babel/preset-env</code></pre>
      
      <h3>Array Spread</h3>
      <p>Copy and combine arrays:</p>
      
      <pre><code>// Copying arrays
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]

// Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Adding elements
const newArray = [0, ...arr1, 4];
console.log(newArray); // [0, 1, 2, 3, 4]

// Removing duplicates
const duplicates = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(duplicates)];
console.log(unique); // [1, 2, 3]</code></pre>
      
      <h3>Object Spread</h3>
      <p>Copy and merge objects:</p>
      
      <pre><code>// Copying objects
const original = { name: 'John', age: 30 };
const copy = { ...original };
console.log(copy); // { name: 'John', age: 30 }

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Overriding properties
const defaults = { theme: 'light', fontSize: 14 };
const userSettings = { fontSize: 16 };
const settings = { ...defaults, ...userSettings };
console.log(settings); // { theme: 'light', fontSize: 16 }

// Adding properties
const user = { name: 'John' };
const userWithEmail = { ...user, email: 'john@example.com' };
console.log(userWithEmail); // { name: 'John', email: 'john@example.com' }</code></pre>
      
      <h3>Function Arguments</h3>
      <p>Pass array elements as function arguments:</p>
      
      <pre><code>// Spreading array as arguments
function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); // 6

// Finding max/min
const values = [5, 10, 3, 8];
console.log(Math.max(...values)); // 10
console.log(Math.min(...values)); // 3

// Array methods
const arr = [1, 2, 3];
console.log([...arr].reverse()); // [3, 2, 1]</code></pre>
      
      <h3>Rest Parameters</h3>
      <p>Collect remaining arguments:</p>
      
      <pre><code>function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

function log(first, ...rest) {
  console.log('First:', first);
  console.log('Rest:', rest);
}

log(1, 2, 3, 4);
// First: 1
// Rest: [2, 3, 4]</code></pre>
      
      <h3>Real-World Examples</h3>
      <pre><code>// React state updates
const [state, setState] = useState({ count: 0, name: 'John' });
setState({ ...state, count: state.count + 1 });

// Removing array item
function removeItem(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

// Cloning nested objects (shallow copy)
const nested = { user: { name: 'John', age: 30 } };
const cloned = { ...nested, user: { ...nested.user } };

// Converting NodeList to Array
const nodeList = document.querySelectorAll('div');
const array = [...nodeList];</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use spread for shallow copying</li>
        <li>Remember it's shallow - nested objects aren't deeply copied</li>
        <li>Use for immutable updates</li>
        <li>Combine with destructuring for powerful patterns</li>
        <li>Use rest parameters for flexible functions</li>
      </ul>
      
      <p>The spread operator is essential for modern JavaScript development. It makes code more concise, readable, and functional, especially when working with React, arrays, and objects.</p>
    `,
    date: "2023-11-15",
  },
  {
    slug: "javascript-arrow-functions",
    title: "JavaScript Arrow Functions Explained",
    description: "Learn arrow functions in JavaScript - concise syntax for writing functions. Master arrow functions, this binding, and when to use them.",
    excerpt: "Master arrow functions and their unique characteristics.",
    category: "JavaScript",
    image: "/javascript-code.png",
    author: "Moradabads Team",
    difficulty: "Beginner",
    readTime: "18 min read",
    tags: ["JavaScript", "Arrow Functions", "ES6", "Functions"],
    content: `
      <h2>What are Arrow Functions?</h2>
      <p>Arrow functions are a concise way to write functions in JavaScript, introduced in ES6. They provide a shorter syntax compared to traditional function expressions and have different behavior regarding the 'this' keyword.</p>
      
      <p>Arrow functions are particularly useful for callbacks, array methods, and short functions. However, they're not always a drop-in replacement for regular functions due to differences in 'this' binding and other characteristics.</p>
      
      <h3>Basic Syntax</h3>
      <pre><code>// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};

// Implicit return (single expression)
const add = (a, b) => a + b;

// Single parameter (no parentheses needed)
const square = x => x * x;

// No parameters
const greet = () => 'Hello';

// Multiple statements
const process = (data) => {
  const processed = data.map(item => item * 2);
  return processed.filter(item => item > 10);
};</code></pre>
      
      <h3>This Binding</h3>
      <p>Arrow functions don't have their own 'this' - they inherit it from the enclosing scope:</p>
      
      <pre><code>// Traditional function - 'this' is bound to the object
const obj = {
  name: 'John',
  greet: function() {
    console.log(this.name); // 'John'
  }
};

// Arrow function - 'this' is from enclosing scope
const obj2 = {
  name: 'John',
  greet: () => {
    console.log(this.name); // undefined (or window.name in browser)
  }
};

// Correct usage with arrow functions
const obj3 = {
  name: 'John',
  items: [1, 2, 3],
  processItems() {
    // 'this' refers to obj3
    return this.items.map(item => {
      return item * 2; // 'this' still refers to obj3
    });
  }
};</code></pre>
      
      <h3>Common Use Cases</h3>
      <pre><code>// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Event handlers
button.addEventListener('click', () => {
  console.log('Button clicked');
});

// Promises
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Callbacks
setTimeout(() => {
  console.log('Delayed execution');
}, 1000);</code></pre>
      
      <h3>When to Use Arrow Functions</h3>
      <ul>
        <li>Short, simple functions</li>
        <li>Array methods (map, filter, reduce)</li>
        <li>Callbacks and event handlers</li>
        <li>When you want lexical 'this' binding</li>
        <li>Functional programming patterns</li>
      </ul>
      
      <h3>When NOT to Use</h3>
      <ul>
        <li>Object methods (if you need 'this')</li>
        <li>Constructors (can't be used with 'new')</li>
        <li>Event handlers that need 'this'</li>
        <li>Functions that need their own 'this' context</li>
      </ul>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use for short, simple functions</li>
        <li>Be aware of 'this' binding differences</li>
        <li>Use regular functions for object methods</li>
        <li>Prefer arrow functions for callbacks</li>
        <li>Keep arrow functions concise</li>
      </ul>
      
      <p>Arrow functions are a powerful feature that makes JavaScript code more concise and readable. Understanding their behavior, especially regarding 'this' binding, is crucial for using them effectively.</p>
    `,
    date: "2023-11-16",
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

