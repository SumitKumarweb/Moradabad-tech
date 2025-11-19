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

