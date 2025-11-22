/**
 * JavaScript Machine Coding Round Questions
 * 100+ JavaScript machine coding problems from basic to advanced
 */

export const javascriptMachineCodingQuestions = [
  // Basic Level (1-30)
  {
    id: "js-mc-1",
    number: 1,
    title: "Todo List App",
    description: "Build a todo list application using vanilla JavaScript. Include add, delete, edit, and mark complete functionality with localStorage persistence.",
    difficulty: "basic",
    duration: "20 mins",
    createdOn: "31 Aug 2025, 11:03 AM",
    watchLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube video URL
    codeLink: "https://example.com/code/1-todo-app-vanilla-js",
    tags: ["JavaScript", "DOM", "Local Storage", "CRUD"],
    requirements: [
      "Add new todos",
      "Delete todos",
      "Edit todos",
      "Mark todos as complete",
      "Persist in localStorage",
      "Filter todos (all/active/completed)"
    ]
  },
  {
    id: "js-mc-2",
    number: 2,
    title: "Holy Grail Layout",
    description: "Create a responsive holy grail layout (header, footer, sidebar, main content) using CSS Grid or Flexbox.",
    difficulty: "basic",
    duration: "9 mins",
    createdOn: "31 Aug 2025, 11:03 AM",
    watchLink: "https://example.com/watch/2-holy-grail-vanilla-js",
    codeLink: "https://example.com/code/2-holy-grail-vanilla-js",
    tags: ["JavaScript", "CSS", "Layout", "Responsive"],
    requirements: [
      "Header",
      "Footer",
      "Sidebar",
      "Main content area",
      "Responsive design",
      "Mobile-friendly"
    ]
  },
  {
    id: "js-mc-3",
    number: 3,
    title: "Tabs",
    description: "Build a tabs component using vanilla JavaScript with smooth transitions and keyboard navigation.",
    difficulty: "basic",
    duration: "16 mins",
    createdOn: "31 Aug 2025, 11:03 AM",
    watchLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube video URL
    codeLink: "https://example.com/code/3-tabs-vanilla-js",
    tags: ["JavaScript", "DOM", "Tabs", "UI"],
    requirements: [
      "Multiple tabs",
      "Active tab highlighting",
      "Content switching",
      "Keyboard navigation",
      "Smooth transitions"
    ]
  },
  {
    id: "js-mc-4",
    number: 4,
    title: "Accordion",
    description: "Create an accordion component that expands and collapses sections. Support single or multiple open items.",
    difficulty: "basic",
    duration: "12 mins",
    createdOn: "31 Aug 2025, 11:03 AM",
    watchLink: "https://example.com/watch/4-accordion-vanilla-js",
    codeLink: "https://example.com/code/4-accordion-vanilla-js",
    tags: ["JavaScript", "DOM", "Accordion", "Animation"],
    requirements: [
      "Expand/collapse",
      "Smooth animations",
      "Single/multiple mode",
      "Accessible (ARIA)",
      "Icon animations"
    ]
  },
  {
    id: "js-mc-5",
    number: 5,
    title: "Pagination - Vanilla JS",
    description: "Build a pagination component with page numbers, previous/next buttons, and ellipsis for large page counts.",
    difficulty: "intermediate",
    duration: "18 mins",
    createdOn: "31 Aug 2025, 11:03 AM",
    watchLink: "https://example.com/watch/6-pagination-vanilla-js",
    codeLink: "https://example.com/code/6-pagination-vanilla-js",
    tags: ["JavaScript", "DOM", "Pagination", "Logic"],
    requirements: [
      "Page numbers",
      "Previous/Next buttons",
      "Ellipsis truncation",
      "Current page highlight",
      "Click handlers"
    ]
  },
  {
    id: "js-mc-6",
    number: 6,
    title: "Debounce Function",
    description: "Implement a debounce function that delays function execution until after a specified time has passed.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "5 Sep 2025, 10:00 AM",
    tags: ["JavaScript", "Functions", "Performance", "Closures"],
    requirements: [
      "Delay execution",
      "Cancel previous calls",
      "Return function",
      "Configurable delay",
      "Immediate option"
    ]
  },
  {
    id: "js-mc-7",
    number: 7,
    title: "Throttle Function",
    description: "Create a throttle function that limits function execution to at most once per specified time period.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "5 Sep 2025, 10:30 AM",
    tags: ["JavaScript", "Functions", "Performance", "Closures"],
    requirements: [
      "Limit execution frequency",
      "First call immediate",
      "Trailing call option",
      "Configurable interval",
      "Return function"
    ]
  },
  {
    id: "js-mc-8",
    number: 8,
    title: "Deep Clone Function",
    description: "Implement a deep clone function that creates a complete copy of nested objects and arrays.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "5 Sep 2025, 11:00 AM",
    tags: ["JavaScript", "Objects", "Arrays", "Recursion"],
    requirements: [
      "Clone objects",
      "Clone arrays",
      "Handle nested structures",
      "Handle primitives",
      "Handle circular references",
      "Handle dates and functions"
    ]
  },
  {
    id: "js-mc-9",
    number: 9,
    title: "Event Emitter",
    description: "Build an EventEmitter class that supports subscribing to events, emitting events, and unsubscribing.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "5 Sep 2025, 11:30 AM",
    tags: ["JavaScript", "Events", "Classes", "Pub-Sub"],
    requirements: [
      "on() method",
      "emit() method",
      "off() method",
      "once() method",
      "Multiple listeners",
      "Event data passing"
    ]
  },
  {
    id: "js-mc-10",
    number: 10,
    title: "Promise Implementation",
    description: "Implement a Promise class from scratch with then, catch, and finally methods.",
    difficulty: "advanced",
    duration: "45 mins",
    createdOn: "5 Sep 2025, 12:00 PM",
    tags: ["JavaScript", "Promises", "Async", "Classes"],
    requirements: [
      "Promise constructor",
      "then() method",
      "catch() method",
      "finally() method",
      "Chaining support",
      "Handle async operations"
    ]
  },
  {
    id: "js-mc-11",
    number: 11,
    title: "Array Methods Polyfill",
    description: "Implement polyfills for map, filter, reduce, forEach, and find array methods.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "5 Sep 2025, 12:30 PM",
    tags: ["JavaScript", "Arrays", "Polyfills", "Prototypes"],
    requirements: [
      "Array.prototype.map",
      "Array.prototype.filter",
      "Array.prototype.reduce",
      "Array.prototype.forEach",
      "Array.prototype.find",
      "Maintain context"
    ]
  },
  {
    id: "js-mc-12",
    number: 12,
    title: "Bind Function Implementation",
    description: "Implement Function.prototype.bind() from scratch with support for partial application.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "5 Sep 2025, 1:00 PM",
    tags: ["JavaScript", "Functions", "this", "Context"],
    requirements: [
      "Bind this context",
      "Partial arguments",
      "Return bound function",
      "Handle new operator",
      "Preserve function properties"
    ]
  },
  {
    id: "js-mc-13",
    number: 13,
    title: "Call and Apply Implementation",
    description: "Implement Function.prototype.call() and Function.prototype.apply() from scratch.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "5 Sep 2025, 1:30 PM",
    tags: ["JavaScript", "Functions", "this", "Context"],
    requirements: [
      "call() implementation",
      "apply() implementation",
      "Set this context",
      "Pass arguments",
      "Return function result"
    ]
  },
  {
    id: "js-mc-14",
    number: 14,
    title: "Curry Function",
    description: "Create a curry function that transforms a function to accept arguments one at a time.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "5 Sep 2025, 2:00 PM",
    tags: ["JavaScript", "Functions", "Currying", "Functional"],
    requirements: [
      "Transform function",
      "Accept arguments one by one",
      "Return function until all args provided",
      "Handle variable arguments",
      "Support placeholder arguments"
    ]
  },
  {
    id: "js-mc-15",
    number: 15,
    title: "Compose and Pipe Functions",
    description: "Implement compose and pipe functions for function composition.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "5 Sep 2025, 2:30 PM",
    tags: ["JavaScript", "Functions", "Composition", "Functional"],
    requirements: [
      "compose() function",
      "pipe() function",
      "Right-to-left composition",
      "Left-to-right composition",
      "Handle multiple functions",
      "Pass data through chain"
    ]
  },
  {
    id: "js-mc-16",
    number: 16,
    title: "Memoization Function",
    description: "Create a memoization function that caches function results based on arguments.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "5 Sep 2025, 3:00 PM",
    tags: ["JavaScript", "Functions", "Caching", "Performance"],
    requirements: [
      "Cache function results",
      "Key based on arguments",
      "Return cached result",
      "Handle multiple arguments",
      "Configurable cache size",
      "Cache invalidation"
    ]
  },
  {
    id: "js-mc-17",
    number: 17,
    title: "Flatten Array",
    description: "Implement a function to flatten nested arrays to any depth.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "5 Sep 2025, 3:30 PM",
    tags: ["JavaScript", "Arrays", "Recursion"],
    requirements: [
      "Flatten nested arrays",
      "Handle any depth",
      "Preserve order",
      "Handle empty arrays",
      "Handle non-array elements"
    ]
  },
  {
    id: "js-mc-18",
    number: 18,
    title: "Group By Function",
    description: "Create a groupBy function that groups array elements by a key or function.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "5 Sep 2025, 4:00 PM",
    tags: ["JavaScript", "Arrays", "Objects", "Grouping"],
    requirements: [
      "Group by key",
      "Group by function",
      "Return object",
      "Handle nested grouping",
      "Preserve original data"
    ]
  },
  {
    id: "js-mc-19",
    number: 19,
    title: "Chunk Array Function",
    description: "Implement a function that splits an array into chunks of specified size.",
    difficulty: "basic",
    duration: "12 mins",
    createdOn: "5 Sep 2025, 4:30 PM",
    tags: ["JavaScript", "Arrays", "Chunking"],
    requirements: [
      "Split into chunks",
      "Configurable chunk size",
      "Handle remainder",
      "Preserve order",
      "Handle empty arrays"
    ]
  },
  {
    id: "js-mc-20",
    number: 20,
    title: "Intersection of Arrays",
    description: "Create a function that returns the intersection of multiple arrays.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "5 Sep 2025, 5:00 PM",
    tags: ["JavaScript", "Arrays", "Set", "Intersection"],
    requirements: [
      "Find common elements",
      "Handle multiple arrays",
      "Remove duplicates",
      "Preserve order",
      "Handle empty arrays"
    ]
  },
  {
    id: "js-mc-21",
    number: 21,
    title: "Union of Arrays",
    description: "Implement a function that returns the union of multiple arrays.",
    difficulty: "basic",
    duration: "12 mins",
    createdOn: "5 Sep 2025, 5:30 PM",
    tags: ["JavaScript", "Arrays", "Set", "Union"],
    requirements: [
      "Combine arrays",
      "Remove duplicates",
      "Handle multiple arrays",
      "Preserve order",
      "Handle empty arrays"
    ]
  },
  {
    id: "js-mc-22",
    number: 22,
    title: "Difference of Arrays",
    description: "Create a function that returns the difference between two arrays.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "5 Sep 2025, 6:00 PM",
    tags: ["JavaScript", "Arrays", "Set", "Difference"],
    requirements: [
      "Find elements in first not in second",
      "Remove duplicates",
      "Preserve order",
      "Handle empty arrays",
      "Handle objects"
    ]
  },
  {
    id: "js-mc-23",
    number: 23,
    title: "Shuffle Array",
    description: "Implement a function to shuffle an array using Fisher-Yates algorithm.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "5 Sep 2025, 6:30 PM",
    tags: ["JavaScript", "Arrays", "Random", "Algorithm"],
    requirements: [
      "Randomize array order",
      "Fisher-Yates algorithm",
      "Mutate or return new array",
      "Uniform distribution",
      "Handle empty arrays"
    ]
  },
  {
    id: "js-mc-24",
    number: 24,
    title: "Unique Values from Array",
    description: "Create a function that returns unique values from an array.",
    difficulty: "basic",
    duration: "10 mins",
    createdOn: "5 Sep 2025, 7:00 PM",
    tags: ["JavaScript", "Arrays", "Set", "Unique"],
    requirements: [
      "Remove duplicates",
      "Preserve order",
      "Handle objects",
      "Handle primitives",
      "Case-sensitive strings"
    ]
  },
  {
    id: "js-mc-25",
    number: 25,
    title: "Object Deep Merge",
    description: "Implement a function that deeply merges multiple objects.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "6 Sep 2025, 10:00 AM",
    tags: ["JavaScript", "Objects", "Merge", "Recursion"],
    requirements: [
      "Deep merge objects",
      "Handle nested objects",
      "Handle arrays",
      "Override values",
      "Handle primitives",
      "Preserve references"
    ]
  },
  {
    id: "js-mc-26",
    number: 26,
    title: "Pick and Omit Functions",
    description: "Create pick and omit functions to select or exclude object properties.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "6 Sep 2025, 10:30 AM",
    tags: ["JavaScript", "Objects", "Properties"],
    requirements: [
      "pick() - select properties",
      "omit() - exclude properties",
      "Handle nested paths",
      "Return new object",
      "Handle non-existent properties"
    ]
  },
  {
    id: "js-mc-27",
    number: 27,
    title: "Get Nested Property",
    description: "Implement a function to safely get nested object properties using dot notation.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "6 Sep 2025, 11:00 AM",
    tags: ["JavaScript", "Objects", "Nested", "Safe Access"],
    requirements: [
      "Dot notation support",
      "Return undefined if path doesn't exist",
      "Handle arrays",
      "Default value option",
      "Safe access"
    ]
  },
  {
    id: "js-mc-28",
    number: 28,
    title: "Set Nested Property",
    description: "Create a function to set nested object properties using dot notation.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "6 Sep 2025, 11:30 AM",
    tags: ["JavaScript", "Objects", "Nested", "Mutation"],
    requirements: [
      "Dot notation support",
      "Create nested objects if needed",
      "Handle arrays",
      "Mutate or return new object",
      "Handle non-existent paths"
    ]
  },
  {
    id: "js-mc-29",
    number: 29,
    title: "Format Date Function",
    description: "Build a date formatting function with various format options.",
    difficulty: "basic",
    duration: "20 mins",
    createdOn: "6 Sep 2025, 12:00 PM",
    tags: ["JavaScript", "Date", "Formatting", "Utility"],
    requirements: [
      "Format patterns (YYYY-MM-DD, etc.)",
      "Handle time",
      "Handle timezone",
      "Relative time (ago)",
      "Custom formats"
    ]
  },
  {
    id: "js-mc-30",
    number: 30,
    title: "Parse Query String",
    description: "Implement a function to parse URL query strings into an object.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "6 Sep 2025, 12:30 PM",
    tags: ["JavaScript", "URL", "Query String", "Parsing"],
    requirements: [
      "Parse query string",
      "Handle multiple values",
      "Decode URL encoding",
      "Handle arrays",
      "Return object"
    ]
  },
  // Intermediate Level (31-60)
  {
    id: "js-mc-31",
    number: 31,
    title: "Lazy Loading Images",
    description: "Implement lazy loading for images using Intersection Observer API.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "6 Sep 2025, 1:00 PM",
    tags: ["JavaScript", "DOM", "Performance", "Intersection Observer"],
    requirements: [
      "Detect when image enters viewport",
      "Load image on demand",
      "Show placeholder",
      "Handle errors",
      "Support multiple images",
      "Fallback for older browsers"
    ]
  },
  {
    id: "js-mc-32",
    number: 32,
    title: "Infinite Scroll",
    description: "Build infinite scrolling functionality that loads more content on scroll.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "6 Sep 2025, 1:30 PM",
    tags: ["JavaScript", "DOM", "Scroll", "Performance"],
    requirements: [
      "Detect scroll position",
      "Load more content",
      "Loading indicator",
      "Error handling",
      "Debounce scroll events",
      "Prevent duplicate requests"
    ]
  },
  {
    id: "js-mc-33",
    number: 33,
    title: "Modal Component",
    description: "Create a reusable modal component with backdrop, close functionality, and focus trap.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "6 Sep 2025, 2:00 PM",
    tags: ["JavaScript", "DOM", "Modal", "Accessibility"],
    requirements: [
      "Show/hide modal",
      "Backdrop overlay",
      "Close on escape",
      "Close on backdrop click",
      "Focus trap",
      "Animation transitions"
    ]
  },
  {
    id: "js-mc-34",
    number: 34,
    title: "Tooltip Component",
    description: "Build a tooltip component with positioning, delay, and multiple trigger types.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "6 Sep 2025, 2:30 PM",
    tags: ["JavaScript", "DOM", "Tooltip", "Positioning"],
    requirements: [
      "Hover trigger",
      "Click trigger",
      "Positioning (top/bottom/left/right)",
      "Delay option",
      "Arrow indicator",
      "Auto-positioning"
    ]
  },
  {
    id: "js-mc-35",
    number: 35,
    title: "Dropdown Component",
    description: "Create a dropdown component with search, keyboard navigation, and multi-select support.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "6 Sep 2025, 3:00 PM",
    tags: ["JavaScript", "DOM", "Dropdown", "Select"],
    requirements: [
      "Open/close toggle",
      "Search functionality",
      "Keyboard navigation",
      "Multi-select option",
      "Selected items display",
      "Custom option rendering"
    ]
  },
  {
    id: "js-mc-36",
    number: 36,
    title: "Auto-complete Input",
    description: "Build an autocomplete input with debouncing, API integration, and keyboard navigation.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "6 Sep 2025, 3:30 PM",
    tags: ["JavaScript", "DOM", "Autocomplete", "API"],
    requirements: [
      "Debounced input",
      "API integration",
      "Keyboard navigation",
      "Loading states",
      "Error handling",
      "Result caching"
    ]
  },
  {
    id: "js-mc-37",
    number: 37,
    title: "Progress Bar",
    description: "Create a progress bar component with animation, percentage display, and configurable colors.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "6 Sep 2025, 4:00 PM",
    tags: ["JavaScript", "DOM", "Progress", "Animation"],
    requirements: [
      "Animated progress",
      "Percentage display",
      "Customizable colors",
      "Smooth transitions",
      "Indeterminate mode"
    ]
  },
  {
    id: "js-mc-38",
    number: 38,
    title: "Star Rating Component",
    description: "Build a star rating component with click to rate, hover preview, and half-star support.",
    difficulty: "basic",
    duration: "18 mins",
    createdOn: "6 Sep 2025, 4:30 PM",
    tags: ["JavaScript", "DOM", "Rating", "Interactive"],
    requirements: [
      "Click to rate",
      "Hover preview",
      "Half-star support",
      "Read-only mode",
      "Display current rating",
      "Customizable star count"
    ]
  },
  {
    id: "js-mc-39",
    number: 39,
    title: "Toast Notification",
    description: "Create a toast notification system with multiple types, auto-dismiss, and stacking.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "6 Sep 2025, 5:00 PM",
    tags: ["JavaScript", "DOM", "Notifications", "Toast"],
    requirements: [
      "Multiple toast types",
      "Auto-dismiss timer",
      "Manual dismiss",
      "Stacking/positioning",
      "Animations",
      "Queue management"
    ]
  },
  {
    id: "js-mc-40",
    number: 40,
    title: "Skeleton Loader",
    description: "Build skeleton loading components for different content types with shimmer animation.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "6 Sep 2025, 5:30 PM",
    tags: ["JavaScript", "DOM", "Loading", "Skeleton"],
    requirements: [
      "Text skeleton",
      "Image skeleton",
      "Card skeleton",
      "Shimmer animation",
      "Customizable shapes",
      "Multiple instances"
    ]
  },
  {
    id: "js-mc-41",
    number: 41,
    title: "Carousel/Slider",
    description: "Create an image carousel with autoplay, manual navigation, indicators, and touch support.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "6 Sep 2025, 6:00 PM",
    tags: ["JavaScript", "DOM", "Carousel", "Slider"],
    requirements: [
      "Auto-play",
      "Previous/Next navigation",
      "Indicator dots",
      "Touch/swipe support",
      "Smooth transitions",
      "Infinite loop"
    ]
  },
  {
    id: "js-mc-42",
    number: 42,
    title: "Drag and Drop",
    description: "Implement drag and drop functionality using HTML5 Drag API.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "6 Sep 2025, 6:30 PM",
    tags: ["JavaScript", "DOM", "Drag and Drop", "HTML5"],
    requirements: [
      "Drag elements",
      "Drop zones",
      "Visual feedback",
      "Drag data transfer",
      "Multiple items",
      "Touch support"
    ]
  },
  {
    id: "js-mc-43",
    number: 43,
    title: "Sortable List",
    description: "Build a sortable list with drag-and-drop reordering.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "7 Sep 2025, 10:00 AM",
    tags: ["JavaScript", "DOM", "Sortable", "Drag and Drop"],
    requirements: [
      "Drag items",
      "Drop reordering",
      "Visual feedback",
      "Persist order",
      "Keyboard support",
      "Smooth animations"
    ]
  },
  {
    id: "js-mc-44",
    number: 44,
    title: "File Upload with Preview",
    description: "Create a file upload component with drag-and-drop, preview, and progress indicator.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "7 Sep 2025, 10:30 AM",
    tags: ["JavaScript", "DOM", "File Upload", "Preview"],
    requirements: [
      "File selection",
      "Drag and drop",
      "Image preview",
      "Upload progress",
      "Remove files",
      "File validation"
    ]
  },
  {
    id: "js-mc-45",
    number: 45,
    title: "Calendar Component",
    description: "Build a calendar component with date selection, month navigation, and event display.",
    difficulty: "intermediate",
    duration: "40 mins",
    createdOn: "7 Sep 2025, 11:00 AM",
    tags: ["JavaScript", "DOM", "Calendar", "Date Picker"],
    requirements: [
      "Month view",
      "Date selection",
      "Month navigation",
      "Today highlighting",
      "Event markers",
      "Keyboard navigation"
    ]
  },
  {
    id: "js-mc-46",
    number: 46,
    title: "Stopwatch/Timer",
    description: "Create a stopwatch component with start, pause, reset, and lap functionality.",
    difficulty: "basic",
    duration: "20 mins",
    createdOn: "7 Sep 2025, 11:30 AM",
    tags: ["JavaScript", "DOM", "Timer", "Intervals"],
    requirements: [
      "Start/Pause/Reset",
      "Lap functionality",
      "Lap history",
      "Time formatting",
      "Accurate timing",
      "Visual display"
    ]
  },
  {
    id: "js-mc-47",
    number: 47,
    title: "Counter Component",
    description: "Build a counter component with increment, decrement, reset, and custom step values.",
    difficulty: "basic",
    duration: "12 mins",
    createdOn: "7 Sep 2025, 12:00 PM",
    tags: ["JavaScript", "DOM", "Counter", "State"],
    requirements: [
      "Increment",
      "Decrement",
      "Reset",
      "Custom step",
      "Min/max limits",
      "Visual feedback"
    ]
  },
  {
    id: "js-mc-48",
    number: 48,
    title: "Search with Highlight",
    description: "Implement search functionality that highlights matching text in results.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "7 Sep 2025, 12:30 PM",
    tags: ["JavaScript", "DOM", "Search", "Highlighting"],
    requirements: [
      "Search input",
      "Highlight matches",
      "Case sensitivity option",
      "Multiple matches",
      "Scroll to matches",
      "Clear highlights"
    ]
  },
  {
    id: "js-mc-49",
    number: 49,
    title: "Tabs with History",
    description: "Create a tabs component that integrates with browser history for deep linking.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "7 Sep 2025, 1:00 PM",
    tags: ["JavaScript", "DOM", "Tabs", "History API"],
    requirements: [
      "Tab switching",
      "URL updates",
      "Browser back/forward",
      "Deep linking",
      "Hash or history API",
      "Active state"
    ]
  },
  {
    id: "js-mc-50",
    number: 50,
    title: "Form Validation",
    description: "Build a form validation system with real-time validation and error messages.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "7 Sep 2025, 1:30 PM",
    tags: ["JavaScript", "DOM", "Forms", "Validation"],
    requirements: [
      "Field validation",
      "Real-time validation",
      "Error messages",
      "Custom validators",
      "Form submission",
      "Validation rules"
    ]
  },
  {
    id: "js-mc-51",
    number: 51,
    title: "Async Queue",
    description: "Implement an async queue that processes tasks sequentially with concurrency control.",
    difficulty: "advanced",
    duration: "40 mins",
    createdOn: "7 Sep 2025, 2:00 PM",
    tags: ["JavaScript", "Async", "Queue", "Concurrency"],
    requirements: [
      "Add tasks",
      "Process sequentially",
      "Concurrency limit",
      "Error handling",
      "Task priorities",
      "Pause/resume"
    ]
  },
  {
    id: "js-mc-52",
    number: 52,
    title: "Retry Function",
    description: "Create a retry function that retries a failed operation with exponential backoff.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "7 Sep 2025, 2:30 PM",
    tags: ["JavaScript", "Functions", "Retry", "Error Handling"],
    requirements: [
      "Retry failed operations",
      "Exponential backoff",
      "Max retry attempts",
      "Error handling",
      "Configurable delay",
      "Cancel support"
    ]
  },
  {
    id: "js-mc-53",
    number: 53,
    title: "Rate Limiter",
    description: "Implement a rate limiter that limits function calls within a time window.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "7 Sep 2025, 3:00 PM",
    tags: ["JavaScript", "Functions", "Rate Limiting", "Performance"],
    requirements: [
      "Limit calls per window",
      "Time window",
      "Queue excess calls",
      "Configurable limits",
      "Reset window",
      "Handle rejections"
    ]
  },
  {
    id: "js-mc-54",
    number: 54,
    title: "LRU Cache",
    description: "Build an LRU (Least Recently Used) cache with get and set operations.",
    difficulty: "advanced",
    duration: "45 mins",
    createdOn: "7 Sep 2025, 3:30 PM",
    tags: ["JavaScript", "Cache", "LRU", "Data Structures"],
    requirements: [
      "get() method",
      "set() method",
      "Evict least recently used",
      "Size limit",
      "O(1) operations",
      "Handle expiration"
    ]
  },
  {
    id: "js-mc-55",
    number: 55,
    title: "Observer Pattern",
    description: "Implement the Observer pattern with subscribe, unsubscribe, and notify methods.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "7 Sep 2025, 4:00 PM",
    tags: ["JavaScript", "Design Patterns", "Observer", "Pub-Sub"],
    requirements: [
      "subscribe() method",
      "unsubscribe() method",
      "notify() method",
      "Multiple observers",
      "Event data",
      "One-time observers"
    ]
  },
  {
    id: "js-mc-56",
    number: 56,
    title: "Singleton Pattern",
    description: "Implement the Singleton pattern ensuring only one instance exists.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "7 Sep 2025, 4:30 PM",
    tags: ["JavaScript", "Design Patterns", "Singleton", "Classes"],
    requirements: [
      "Single instance",
      "Lazy initialization",
      "Thread-safe (if needed)",
      "Prevent instantiation",
      "Global access",
      "Reset capability"
    ]
  },
  {
    id: "js-mc-57",
    number: 57,
    title: "Factory Pattern",
    description: "Create a factory function/class that creates objects based on input type.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "7 Sep 2025, 5:00 PM",
    tags: ["JavaScript", "Design Patterns", "Factory", "Classes"],
    requirements: [
      "Create objects by type",
      "Centralized creation",
      "Type validation",
      "Extensible",
      "Default values",
      "Error handling"
    ]
  },
  {
    id: "js-mc-58",
    number: 58,
    title: "Router Implementation",
    description: "Build a simple client-side router with route matching and navigation.",
    difficulty: "advanced",
    duration: "50 mins",
    createdOn: "7 Sep 2025, 5:30 PM",
    tags: ["JavaScript", "Router", "SPA", "Navigation"],
    requirements: [
      "Route definition",
      "Route matching",
      "Navigation",
      "History API",
      "Route params",
      "Route guards"
    ]
  },
  {
    id: "js-mc-59",
    number: 59,
    title: "State Management",
    description: "Create a simple state management system with get, set, subscribe, and unsubscribe.",
    difficulty: "advanced",
    duration: "45 mins",
    createdOn: "7 Sep 2025, 6:00 PM",
    tags: ["JavaScript", "State Management", "Store", "Pub-Sub"],
    requirements: [
      "getState()",
      "setState()",
      "subscribe()",
      "unsubscribe()",
      "Middleware support",
      "State immutability"
    ]
  },
  {
    id: "js-mc-60",
    number: 60,
    title: "Virtual DOM Implementation",
    description: "Build a minimal virtual DOM implementation with diffing and patching.",
    difficulty: "advanced",
    duration: "90 mins",
    createdOn: "7 Sep 2025, 6:30 PM",
    tags: ["JavaScript", "Virtual DOM", "DOM", "Diffing"],
    requirements: [
      "Create virtual nodes",
      "Diff algorithm",
      "Patch DOM",
      "Handle attributes",
      "Handle children",
      "Key-based reconciliation"
    ]
  },
  // Advanced Level (61-100+)
  {
    id: "js-mc-61",
    number: 61,
    title: "WebSocket Client",
    description: "Implement a WebSocket client wrapper with reconnection, message queuing, and event handling.",
    difficulty: "advanced",
    duration: "50 mins",
    createdOn: "8 Sep 2025, 10:00 AM",
    tags: ["JavaScript", "WebSocket", "Real-time", "Networking"],
    requirements: [
      "Connect/disconnect",
      "Send/receive messages",
      "Auto-reconnection",
      "Message queuing",
      "Event handlers",
      "Error handling"
    ]
  },
  {
    id: "js-mc-62",
    number: 62,
    title: "Fetch API Wrapper",
    description: "Create a fetch API wrapper with interceptors, retry, and request/response transformation.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "8 Sep 2025, 10:30 AM",
    tags: ["JavaScript", "Fetch", "HTTP", "API"],
    requirements: [
      "Request interceptors",
      "Response interceptors",
      "Retry logic",
      "Request transformation",
      "Response transformation",
      "Error handling"
    ]
  },
  {
    id: "js-mc-63",
    number: 63,
    title: "Local Storage Wrapper",
    description: "Build a localStorage wrapper with expiration, encryption, and namespace support.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "8 Sep 2025, 11:00 AM",
    tags: ["JavaScript", "Local Storage", "Storage", "Utility"],
    requirements: [
      "Set/get with expiration",
      "Namespace support",
      "Encryption option",
      "Clear expired",
      "Size limits",
      "Fallback handling"
    ]
  },
  {
    id: "js-mc-64",
    number: 64,
    title: "Cookie Manager",
    description: "Create a cookie manager with set, get, delete, and expiration handling.",
    difficulty: "basic",
    duration: "20 mins",
    createdOn: "8 Sep 2025, 11:30 AM",
    tags: ["JavaScript", "Cookies", "Storage", "Utility"],
    requirements: [
      "Set cookies",
      "Get cookies",
      "Delete cookies",
      "Expiration handling",
      "Path/domain options",
      "Secure/httpOnly flags"
    ]
  },
  {
    id: "js-mc-65",
    number: 65,
    title: "URL Router Parser",
    description: "Build a URL parser that extracts and validates route parameters and query strings.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "8 Sep 2025, 12:00 PM",
    tags: ["JavaScript", "URL", "Router", "Parsing"],
    requirements: [
      "Parse route params",
      "Parse query string",
      "Validate params",
      "Type conversion",
      "Default values",
      "Error handling"
    ]
  },
  {
    id: "js-mc-66",
    number: 66,
    title: "Template Engine",
    description: "Create a simple template engine that replaces placeholders with values.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "8 Sep 2025, 12:30 PM",
    tags: ["JavaScript", "Template", "Engine", "String"],
    requirements: [
      "Placeholder replacement",
      "Nested objects",
      "Conditional rendering",
      "Loop support",
      "Escape HTML",
      "Custom delimiters"
    ]
  },
  {
    id: "js-mc-67",
    number: 67,
    title: "CSV Parser",
    description: "Implement a CSV parser that converts CSV strings to objects/arrays.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "8 Sep 2025, 1:00 PM",
    tags: ["JavaScript", "CSV", "Parser", "Data"],
    requirements: [
      "Parse CSV string",
      "Handle headers",
      "Handle quotes",
      "Handle commas in values",
      "Return objects/arrays",
      "Error handling"
    ]
  },
  {
    id: "js-mc-68",
    number: 68,
    title: "JSON Path Parser",
    description: "Build a JSON path parser that extracts values using path expressions.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "8 Sep 2025, 1:30 PM",
    tags: ["JavaScript", "JSON", "Path", "Parsing"],
    requirements: [
      "Parse path expressions",
      "Extract values",
      "Handle arrays",
      "Handle nested objects",
      "Wildcard support",
      "Error handling"
    ]
  },
  {
    id: "js-mc-69",
    number: 69,
    title: "Diff Algorithm",
    description: "Implement a diff algorithm that compares two objects/arrays and returns differences.",
    difficulty: "advanced",
    duration: "50 mins",
    createdOn: "8 Sep 2025, 2:00 PM",
    tags: ["JavaScript", "Diff", "Algorithm", "Comparison"],
    requirements: [
      "Compare objects",
      "Compare arrays",
      "Return differences",
      "Handle nested structures",
      "Type changes",
      "Added/removed/changed"
    ]
  },
  {
    id: "js-mc-70",
    number: 70,
    title: "Deep Equal Function",
    description: "Create a deep equality function that compares objects and arrays recursively.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "8 Sep 2025, 2:30 PM",
    tags: ["JavaScript", "Equality", "Objects", "Arrays"],
    requirements: [
      "Deep comparison",
      "Handle objects",
      "Handle arrays",
      "Handle primitives",
      "Handle dates",
      "Handle functions"
    ]
  },
  {
    id: "js-mc-71",
    number: 71,
    title: "Throttle with Leading and Trailing",
    description: "Implement throttle with options for leading and trailing edge execution.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "8 Sep 2025, 3:00 PM",
    tags: ["JavaScript", "Functions", "Throttle", "Performance"],
    requirements: [
      "Leading edge option",
      "Trailing edge option",
      "Both options",
      "Cancel support",
      "Configurable delay",
      "Return function"
    ]
  },
  {
    id: "js-mc-72",
    number: 72,
    title: "Request Animation Frame Throttle",
    description: "Create a throttle function using requestAnimationFrame for smooth animations.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "8 Sep 2025, 3:30 PM",
    tags: ["JavaScript", "Functions", "Animation", "Performance"],
    requirements: [
      "Use requestAnimationFrame",
      "Smooth execution",
      "Cancel support",
      "Return function",
      "Handle multiple calls"
    ]
  },
  {
    id: "js-mc-73",
    number: 73,
    title: "Function Composition with Error Handling",
    description: "Build a compose function with error handling and async support.",
    difficulty: "advanced",
    duration: "35 mins",
    createdOn: "8 Sep 2025, 4:00 PM",
    tags: ["JavaScript", "Functions", "Composition", "Async"],
    requirements: [
      "Compose functions",
      "Error handling",
      "Async support",
      "Error propagation",
      "Continue on error option"
    ]
  },
  {
    id: "js-mc-74",
    number: 74,
    title: "Partial Application Function",
    description: "Create a partial application function that fixes some arguments of a function.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "8 Sep 2025, 4:30 PM",
    tags: ["JavaScript", "Functions", "Partial Application", "Functional"],
    requirements: [
      "Fix arguments",
      "Left-to-right",
      "Right-to-left option",
      "Placeholder support",
      "Return function"
    ]
  },
  {
    id: "js-mc-75",
    number: 75,
    title: "Function Once",
    description: "Implement a function that ensures another function is called only once.",
    difficulty: "basic",
    duration: "10 mins",
    createdOn: "8 Sep 2025, 5:00 PM",
    tags: ["JavaScript", "Functions", "Once", "Utility"],
    requirements: [
      "Call only once",
      "Cache result",
      "Return cached result",
      "Handle arguments",
      "Reset option"
    ]
  },
  {
    id: "js-mc-76",
    number: 76,
    title: "Function After",
    description: "Create a function that calls another function only after it's been called N times.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "8 Sep 2025, 5:30 PM",
    tags: ["JavaScript", "Functions", "After", "Utility"],
    requirements: [
      "Call after N times",
      "Count calls",
      "Return function",
      "Handle arguments",
      "Reset counter"
    ]
  },
  {
    id: "js-mc-77",
    number: 77,
    title: "Function Before",
    description: "Implement a function that calls another function at most N times.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "8 Sep 2025, 6:00 PM",
    tags: ["JavaScript", "Functions", "Before", "Utility"],
    requirements: [
      "Call at most N times",
      "Count calls",
      "Return function",
      "Handle arguments",
      "After N calls, return last result"
    ]
  },
  {
    id: "js-mc-78",
    number: 78,
    title: "Function Delay",
    description: "Create a function that delays execution of another function.",
    difficulty: "basic",
    duration: "12 mins",
    createdOn: "8 Sep 2025, 6:30 PM",
    tags: ["JavaScript", "Functions", "Delay", "Timeout"],
    requirements: [
      "Delay execution",
      "Configurable delay",
      "Cancel support",
      "Return function",
      "Handle arguments"
    ]
  },
  {
    id: "js-mc-79",
    number: 79,
    title: "Function Timeout",
    description: "Implement a function that times out if execution takes too long.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "8 Sep 2025, 7:00 PM",
    tags: ["JavaScript", "Functions", "Timeout", "Error Handling"],
    requirements: [
      "Set timeout",
      "Cancel on timeout",
      "Error on timeout",
      "Configurable timeout",
      "Handle async",
      "Return promise"
    ]
  },
  {
    id: "js-mc-80",
    number: 80,
    title: "Function Retry with Jitter",
    description: "Create a retry function with exponential backoff and jitter.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "9 Sep 2025, 10:00 AM",
    tags: ["JavaScript", "Functions", "Retry", "Backoff"],
    requirements: [
      "Exponential backoff",
      "Jitter (randomization)",
      "Max retries",
      "Error handling",
      "Cancel support",
      "Configurable options"
    ]
  },
  {
    id: "js-mc-81",
    number: 81,
    title: "Promise All Settled",
    description: "Implement Promise.allSettled() that waits for all promises regardless of outcome.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "9 Sep 2025, 10:30 AM",
    tags: ["JavaScript", "Promises", "Async", "Polyfill"],
    requirements: [
      "Wait for all promises",
      "Handle rejections",
      "Return results array",
      "Status for each",
      "Value or reason",
      "Handle empty array"
    ]
  },
  {
    id: "js-mc-82",
    number: 82,
    title: "Promise Race",
    description: "Implement Promise.race() that resolves/rejects with the first settled promise.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "9 Sep 2025, 11:00 AM",
    tags: ["JavaScript", "Promises", "Async", "Polyfill"],
    requirements: [
      "Race promises",
      "First settled wins",
      "Handle rejections",
      "Return promise",
      "Handle empty array"
    ]
  },
  {
    id: "js-mc-83",
    number: 83,
    title: "Promise Any",
    description: "Implement Promise.any() that resolves with the first fulfilled promise.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "9 Sep 2025, 11:30 AM",
    tags: ["JavaScript", "Promises", "Async", "Polyfill"],
    requirements: [
      "First fulfilled wins",
      "Aggregate errors",
      "Return promise",
      "Handle all rejections",
      "Handle empty array"
    ]
  },
  {
    id: "js-mc-84",
    number: 84,
    title: "Promise Finally",
    description: "Implement Promise.prototype.finally() that runs regardless of outcome.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "9 Sep 2025, 12:00 PM",
    tags: ["JavaScript", "Promises", "Async", "Polyfill"],
    requirements: [
      "Run on resolve",
      "Run on reject",
      "Return promise",
      "Preserve value/reason",
      "Handle errors in finally"
    ]
  },
  {
    id: "js-mc-85",
    number: 85,
    title: "Async Queue with Priority",
    description: "Build an async queue that processes tasks with priority ordering.",
    difficulty: "advanced",
    duration: "45 mins",
    createdOn: "9 Sep 2025, 12:30 PM",
    tags: ["JavaScript", "Async", "Queue", "Priority"],
    requirements: [
      "Priority ordering",
      "Process tasks",
      "Concurrency control",
      "Error handling",
      "Pause/resume",
      "Task cancellation"
    ]
  },
  {
    id: "js-mc-86",
    number: 86,
    title: "Worker Pool",
    description: "Create a worker pool that manages Web Workers for parallel processing.",
    difficulty: "advanced",
    duration: "60 mins",
    createdOn: "9 Sep 2025, 1:00 PM",
    tags: ["JavaScript", "Web Workers", "Parallel", "Performance"],
    requirements: [
      "Manage workers",
      "Task queue",
      "Load balancing",
      "Error handling",
      "Worker lifecycle",
      "Result handling"
    ]
  },
  {
    id: "js-mc-87",
    number: 87,
    title: "Event Bus",
    description: "Build an event bus for communication between components/modules.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "9 Sep 2025, 1:30 PM",
    tags: ["JavaScript", "Events", "Pub-Sub", "Communication"],
    requirements: [
      "on() method",
      "emit() method",
      "off() method",
      "once() method",
      "Wildcard support",
      "Event namespacing"
    ]
  },
  {
    id: "js-mc-88",
    number: 88,
    title: "Command Pattern",
    description: "Implement the Command pattern with undo/redo functionality.",
    difficulty: "advanced",
    duration: "50 mins",
    createdOn: "9 Sep 2025, 2:00 PM",
    tags: ["JavaScript", "Design Patterns", "Command", "Undo/Redo"],
    requirements: [
      "Command interface",
      "Execute commands",
      "Undo functionality",
      "Redo functionality",
      "Command history",
      "Macro commands"
    ]
  },
  {
    id: "js-mc-89",
    number: 89,
    title: "Strategy Pattern",
    description: "Implement the Strategy pattern for interchangeable algorithms.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "9 Sep 2025, 2:30 PM",
    tags: ["JavaScript", "Design Patterns", "Strategy", "Algorithms"],
    requirements: [
      "Strategy interface",
      "Multiple strategies",
      "Switch strategies",
      "Context class",
      "Extensible",
      "Default strategy"
    ]
  },
  {
    id: "js-mc-90",
    number: 90,
    title: "Proxy Implementation",
    description: "Create a proxy wrapper that intercepts object property access.",
    difficulty: "advanced",
    duration: "40 mins",
    createdOn: "9 Sep 2025, 3:00 PM",
    tags: ["JavaScript", "Proxy", "Interception", "Meta Programming"],
    requirements: [
      "Property access",
      "Property setting",
      "Function calls",
      "Trap handlers",
      "Default behavior",
      "Validation"
    ]
  },
  {
    id: "js-mc-91",
    number: 91,
    title: "Reactive System",
    description: "Build a reactive system that automatically updates when dependencies change.",
    difficulty: "advanced",
    duration: "60 mins",
    createdOn: "9 Sep 2025, 3:30 PM",
    tags: ["JavaScript", "Reactive", "Observable", "Dependencies"],
    requirements: [
      "Track dependencies",
      "Auto-update",
      "Computed values",
      "Watchers",
      "Dependency graph",
      "Circular dependency detection"
    ]
  },
  {
    id: "js-mc-92",
    number: 92,
    title: "Scheduler",
    description: "Create a task scheduler that executes tasks at specified times or intervals.",
    difficulty: "advanced",
    duration: "50 mins",
    createdOn: "9 Sep 2025, 4:00 PM",
    tags: ["JavaScript", "Scheduler", "Tasks", "Timing"],
    requirements: [
      "Schedule tasks",
      "One-time execution",
      "Recurring tasks",
      "Cancel tasks",
      "Priority support",
      "Error handling"
    ]
  },
  {
    id: "js-mc-93",
    number: 93,
    title: "Batch Processor",
    description: "Implement a batch processor that groups and processes items in batches.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "9 Sep 2025, 4:30 PM",
    tags: ["JavaScript", "Batch", "Processing", "Queue"],
    requirements: [
      "Group items",
      "Batch size",
      "Time window",
      "Process batches",
      "Error handling",
      "Retry failed batches"
    ]
  },
  {
    id: "js-mc-94",
    number: 94,
    title: "Circular Buffer",
    description: "Build a circular buffer data structure with fixed size.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "9 Sep 2025, 5:00 PM",
    tags: ["JavaScript", "Data Structures", "Circular Buffer", "Queue"],
    requirements: [
      "Fixed size",
      "Add elements",
      "Remove elements",
      "Overwrite on full",
      "Iteration",
      "Clear buffer"
    ]
  },
  {
    id: "js-mc-95",
    number: 95,
    title: "Priority Queue",
    description: "Implement a priority queue with insert, extract, and peek operations.",
    difficulty: "advanced",
    duration: "40 mins",
    createdOn: "9 Sep 2025, 5:30 PM",
    tags: ["JavaScript", "Data Structures", "Priority Queue", "Heap"],
    requirements: [
      "Insert with priority",
      "Extract max/min",
      "Peek top element",
      "Update priority",
      "Size property",
      "Heap implementation"
    ]
  },
  {
    id: "js-mc-96",
    number: 96,
    title: "Trie Data Structure",
    description: "Create a Trie (prefix tree) data structure for efficient string searching.",
    difficulty: "advanced",
    duration: "50 mins",
    createdOn: "9 Sep 2025, 6:00 PM",
    tags: ["JavaScript", "Data Structures", "Trie", "Tree"],
    requirements: [
      "Insert strings",
      "Search strings",
      "Prefix search",
      "Delete strings",
      "Count words",
      "Autocomplete support"
    ]
  },
  {
    id: "js-mc-97",
    number: 97,
    title: "Graph Data Structure",
    description: "Implement a graph data structure with adjacency list representation.",
    difficulty: "advanced",
    duration: "45 mins",
    createdOn: "9 Sep 2025, 6:30 PM",
    tags: ["JavaScript", "Data Structures", "Graph", "Algorithms"],
    requirements: [
      "Add vertices",
      "Add edges",
      "Remove vertices",
      "Remove edges",
      "BFS traversal",
      "DFS traversal"
    ]
  },
  {
    id: "js-mc-98",
    number: 98,
    title: "Binary Search Tree",
    description: "Build a Binary Search Tree with insert, search, delete, and traversal operations.",
    difficulty: "advanced",
    duration: "60 mins",
    createdOn: "9 Sep 2025, 7:00 PM",
    tags: ["JavaScript", "Data Structures", "BST", "Tree"],
    requirements: [
      "Insert nodes",
      "Search nodes",
      "Delete nodes",
      "In-order traversal",
      "Pre-order traversal",
      "Post-order traversal"
    ]
  },
  {
    id: "js-mc-99",
    number: 99,
    title: "Hash Table",
    description: "Implement a hash table with put, get, delete, and collision handling.",
    difficulty: "advanced",
    duration: "50 mins",
    createdOn: "9 Sep 2025, 7:30 PM",
    tags: ["JavaScript", "Data Structures", "Hash Table", "Hashing"],
    requirements: [
      "Hash function",
      "Put key-value",
      "Get value by key",
      "Delete key",
      "Collision handling",
      "Load factor management"
    ]
  },
  {
    id: "js-mc-100",
    number: 100,
    title: "Linked List",
    description: "Create a linked list with insert, delete, search, and reverse operations.",
    difficulty: "intermediate",
    duration: "40 mins",
    createdOn: "10 Sep 2025, 10:00 AM",
    tags: ["JavaScript", "Data Structures", "Linked List", "List"],
    requirements: [
      "Insert at position",
      "Delete by value",
      "Search value",
      "Reverse list",
      "Get size",
      "Iteration"
    ]
  },
  {
    id: "js-mc-101",
    number: 101,
    title: "Stack Implementation",
    description: "Implement a stack data structure with push, pop, peek, and isEmpty operations.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "10 Sep 2025, 10:30 AM",
    tags: ["JavaScript", "Data Structures", "Stack", "LIFO"],
    requirements: [
      "push() method",
      "pop() method",
      "peek() method",
      "isEmpty() method",
      "Size property",
      "Array or linked list implementation"
    ]
  },
  {
    id: "js-mc-102",
    number: 102,
    title: "Queue Implementation",
    description: "Build a queue data structure with enqueue, dequeue, front, and isEmpty operations.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "10 Sep 2025, 11:00 AM",
    tags: ["JavaScript", "Data Structures", "Queue", "FIFO"],
    requirements: [
      "enqueue() method",
      "dequeue() method",
      "front() method",
      "isEmpty() method",
      "Size property",
      "Array or linked list implementation"
    ]
  },
  {
    id: "js-mc-103",
    number: 103,
    title: "Debounce with Immediate",
    description: "Create a debounce function with immediate execution option.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "10 Sep 2025, 11:30 AM",
    tags: ["JavaScript", "Functions", "Debounce", "Performance"],
    requirements: [
      "Delay execution",
      "Immediate option",
      "Cancel support",
      "Return function",
      "Handle arguments"
    ]
  },
  {
    id: "js-mc-104",
    number: 104,
    title: "Function Cache with TTL",
    description: "Implement a function cache with time-to-live (TTL) expiration.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "10 Sep 2025, 12:00 PM",
    tags: ["JavaScript", "Functions", "Cache", "TTL"],
    requirements: [
      "Cache results",
      "TTL expiration",
      "Auto-cleanup",
      "Key based on arguments",
      "Configurable TTL",
      "Cache size limit"
    ]
  },
  {
    id: "js-mc-105",
    number: 105,
    title: "Module Loader",
    description: "Build a simple module loader that handles dependencies and circular references.",
    difficulty: "advanced",
    duration: "70 mins",
    createdOn: "10 Sep 2025, 12:30 PM",
    tags: ["JavaScript", "Modules", "Loader", "Dependencies"],
    requirements: [
      "Load modules",
      "Handle dependencies",
      "Circular reference detection",
      "Caching",
      "Async loading",
      "Error handling"
    ]
  }
];

// Helper functions
export function getAllJavaScriptMachineCodingQuestions() {
  return javascriptMachineCodingQuestions;
}

export function getJavaScriptMachineCodingQuestionById(id) {
  return javascriptMachineCodingQuestions.find(q => q.id === id);
}

export function getJavaScriptMachineCodingQuestionByNumber(number) {
  return javascriptMachineCodingQuestions.find(q => q.number === number);
}

export function getTotalJavaScriptMachineCodingQuestions() {
  return javascriptMachineCodingQuestions.length;
}

export function getJavaScriptMachineCodingQuestionsByDifficulty(difficulty) {
  return javascriptMachineCodingQuestions.filter(q => q.difficulty === difficulty);
}

