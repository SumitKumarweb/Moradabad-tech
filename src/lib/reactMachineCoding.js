/**
 * React.js Machine Coding Round Questions
 * 100+ React machine coding problems from basic to advanced
 */

export const reactMachineCodingQuestions = [
  // Basic Level (1-30)
  {
    id: "react-mc-1",
    number: 1,
    title: "Todo List App",
    description: "Build a simple todo list application where users can add, delete, and mark todos as complete. Include local storage persistence.",
    difficulty: "basic",
    duration: "20 mins",
    createdOn: "31 Aug 2025, 11:03 AM",
    watchLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube video URL
    codeLink: "https://example.com/code/1-todo-app-react",
    tags: ["React", "State Management", "Local Storage", "CRUD"],
    requirements: [
      "Add new todos",
      "Delete todos",
      "Mark todos as complete/incomplete",
      "Persist data in localStorage",
      "Show count of active todos"
    ]
  },
  {
    id: "react-mc-2",
    number: 2,
    title: "Counter App",
    description: "Create a counter component with increment, decrement, and reset functionality. Add support for custom step values.",
    difficulty: "basic",
    duration: "10 mins",
    createdOn: "31 Aug 2025, 11:15 AM",
    tags: ["React", "State", "Event Handling"],
    requirements: [
      "Increment counter",
      "Decrement counter",
      "Reset to zero",
      "Custom step value input"
    ]
  },
  {
    id: "react-mc-3",
    number: 3,
    title: "Tabs Component",
    description: "Build a reusable tabs component that allows switching between different content panels.",
    difficulty: "basic",
    duration: "16 mins",
    createdOn: "31 Aug 2025, 11:30 AM",
    watchLink: "https://example.com/watch/3-tabs-react",
    codeLink: "https://example.com/code/3-tabs-react",
    tags: ["React", "Components", "UI"],
    requirements: [
      "Multiple tabs",
      "Active tab highlighting",
      "Content switching",
      "Keyboard navigation support"
    ]
  },
  {
    id: "react-mc-4",
    number: 4,
    title: "Accordion Component",
    description: "Create an accordion component that can expand and collapse sections. Support for single or multiple open items.",
    difficulty: "basic",
    duration: "12 mins",
    createdOn: "31 Aug 2025, 11:45 AM",
    watchLink: "https://example.com/watch/4-accordion-react",
    codeLink: "https://example.com/code/4-accordion-react",
    tags: ["React", "Components", "UI", "Animation"],
    requirements: [
      "Expand/collapse functionality",
      "Smooth animations",
      "Single or multiple open mode",
      "Accessible (ARIA attributes)"
    ]
  },
  {
    id: "react-mc-5",
    number: 5,
    title: "Carousel (System Design)",
    description: "Build an image carousel with autoplay, manual navigation, and indicators. Include pause on hover functionality.",
    difficulty: "intermediate",
    duration: "26 mins",
    createdOn: "31 Aug 2025, 12:00 PM",
    watchLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube video URL
    codeLink: "https://example.com/code/5-carousel-react",
    tags: ["React", "System Design", "Animation", "Components"],
    requirements: [
      "Auto-play with configurable interval",
      "Previous/Next navigation",
      "Indicator dots",
      "Pause on hover",
      "Smooth transitions",
      "Infinite loop"
    ]
  },
  {
    id: "react-mc-6",
    number: 6,
    title: "Pagination Component",
    description: "Create a pagination component with page numbers, previous/next buttons, and truncation for large page counts.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "31 Aug 2025, 12:15 PM",
    watchLink: "https://example.com/watch/7-pagination-react",
    codeLink: "https://example.com/code/7-pagination-react",
    tags: ["React", "Components", "UI", "Logic"],
    requirements: [
      "Page number display",
      "Previous/Next buttons",
      "Truncation (ellipsis) for many pages",
      "Current page highlighting",
      "Configurable items per page"
    ]
  },
  {
    id: "react-mc-7",
    number: 7,
    title: "Infinite Scrolling",
    description: "Implement infinite scrolling that loads more content as user scrolls to the bottom of the page.",
    difficulty: "intermediate",
    duration: "13 mins",
    createdOn: "31 Aug 2025, 12:30 PM",
    watchLink: "https://example.com/watch/8-infinite-scroll-react",
    codeLink: "https://example.com/code/8-infinite-scroll-react",
    tags: ["React", "Hooks", "Performance", "API"],
    requirements: [
      "Detect scroll position",
      "Load more data on scroll",
      "Loading indicator",
      "Error handling",
      "Debouncing"
    ]
  },
  {
    id: "react-mc-8",
    number: 8,
    title: "Configurable Color Boxes",
    description: "Build a component that renders configurable color boxes based on a configuration array.",
    difficulty: "basic",
    duration: "8 mins",
    createdOn: "31 Aug 2025, 12:45 PM",
    watchLink: "https://example.com/watch/9-configure-color-boxes",
    codeLink: "https://example.com/code/9-configure-color-boxes",
    tags: ["React", "Props", "Configuration"],
    requirements: [
      "Render boxes from config",
      "Customizable colors",
      "Customizable sizes",
      "Dynamic rendering"
    ]
  },
  {
    id: "react-mc-9",
    number: 9,
    title: "Posts with Comments",
    description: "Create a posts feed with nested comments. Users can add comments and replies to comments.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "31 Aug 2025, 1:00 PM",
    tags: ["React", "Nested Components", "State Management"],
    requirements: [
      "Display posts",
      "Add comments",
      "Nested replies",
      "Like/unlike functionality",
      "Comment count"
    ]
  },
  {
    id: "react-mc-10",
    number: 10,
    title: "Progress Bar",
    description: "Build a progress bar component with animation, percentage display, and configurable colors.",
    difficulty: "basic",
    duration: "22 mins",
    createdOn: "31 Aug 2025, 1:15 PM",
    watchLink: "https://example.com/watch/12-progress-bar-react",
    codeLink: "https://example.com/code/12-progress-bar-react",
    tags: ["React", "Animation", "Components"],
    requirements: [
      "Animated progress",
      "Percentage display",
      "Customizable colors",
      "Smooth transitions"
    ]
  },
  {
    id: "react-mc-11",
    number: 11,
    title: "Config Driven Form (System Design)",
    description: "Create a form component that renders form fields based on a JSON configuration. Support various input types.",
    difficulty: "advanced",
    duration: "34 mins",
    createdOn: "31 Aug 2025, 1:30 PM",
    watchLink: "https://example.com/watch/11-config-driven-form",
    codeLink: "https://example.com/code/11-config-driven-form",
    tags: ["React", "System Design", "Forms", "Configuration"],
    requirements: [
      "JSON-driven form generation",
      "Multiple input types (text, select, checkbox, etc.)",
      "Validation",
      "Dynamic field visibility",
      "Form submission handling"
    ]
  },
  {
    id: "react-mc-12",
    number: 12,
    title: "Star Rating Component",
    description: "Build a star rating component that allows users to select and display ratings. Support half-star ratings.",
    difficulty: "basic",
    duration: "10 mins",
    createdOn: "31 Aug 2025, 1:45 PM",
    watchLink: "https://example.com/watch/13-star-rating-react",
    codeLink: "https://example.com/code/13-star-rating-react",
    tags: ["React", "Components", "UI", "Interactive"],
    requirements: [
      "Click to rate",
      "Hover preview",
      "Half-star support",
      "Read-only mode",
      "Display current rating"
    ]
  },
  {
    id: "react-mc-13",
    number: 13,
    title: "Ecommerce Filters",
    description: "Create a product filter component with multiple filter types (price, category, brand, rating) and URL state management.",
    difficulty: "advanced",
    duration: "43 mins",
    createdOn: "31 Aug 2025, 2:00 PM",
    watchLink: "https://example.com/watch/14-ecommerce-filters",
    codeLink: "https://example.com/code/14-ecommerce-filters",
    tags: ["React", "State Management", "URL Params", "Filters"],
    requirements: [
      "Multiple filter types",
      "Price range slider",
      "Category checkboxes",
      "Brand filters",
      "Rating filters",
      "URL state sync",
      "Clear all filters"
    ]
  },
  {
    id: "react-mc-14",
    number: 14,
    title: "Shopping Cart",
    description: "Build a shopping cart component with add, remove, update quantity, and calculate total functionality.",
    difficulty: "intermediate",
    duration: "18 mins",
    createdOn: "31 Aug 2025, 2:15 PM",
    watchLink: "https://example.com/watch/15-shopping-cart",
    codeLink: "https://example.com/code/15-shopping-cart",
    tags: ["React", "State Management", "E-commerce"],
    requirements: [
      "Add items to cart",
      "Remove items",
      "Update quantities",
      "Calculate totals",
      "Empty cart",
      "Persist cart state"
    ]
  },
  {
    id: "react-mc-15",
    number: 15,
    title: "Advanced Tic Tac Toe",
    description: "Build an advanced tic-tac-toe game with game history, undo/redo, and win detection.",
    difficulty: "intermediate",
    duration: "11 mins",
    createdOn: "31 Aug 2025, 2:30 PM",
    watchLink: "https://example.com/watch/17-advance-tic-tac-toe",
    codeLink: "https://example.com/code/17-advance-tic-tac-toe",
    tags: ["React", "Game Logic", "State Management"],
    requirements: [
      "Game board",
      "Win detection",
      "Game history",
      "Undo/Redo",
      "Reset game",
      "Score tracking"
    ]
  },
  {
    id: "react-mc-16",
    number: 16,
    title: "Toast / Notification Component (System Design)",
    description: "Create a toast notification system that can display multiple toasts with different types and auto-dismiss.",
    difficulty: "advanced",
    duration: "26 mins",
    createdOn: "31 Aug 2025, 2:45 PM",
    watchLink: "https://example.com/watch/18-toast-component",
    codeLink: "https://example.com/code/18-toast-component",
    tags: ["React", "System Design", "Notifications", "Context API"],
    requirements: [
      "Multiple toast support",
      "Different types (success, error, warning, info)",
      "Auto-dismiss with timer",
      "Manual dismiss",
      "Stacking/positioning",
      "Animations"
    ]
  },
  {
    id: "react-mc-17",
    number: 17,
    title: "Autocomplete / Typeahead Component (System Design)",
    description: "Build an autocomplete component with debouncing, API integration, keyboard navigation, and caching.",
    difficulty: "advanced",
    duration: "24 mins",
    createdOn: "31 Aug 2025, 3:00 PM",
    watchLink: "https://example.com/watch/19-typehead-component",
    codeLink: "https://example.com/code/19-typehead-component",
    tags: ["React", "System Design", "API", "Performance"],
    requirements: [
      "Debounced input",
      "API integration",
      "Keyboard navigation (arrow keys, enter)",
      "Loading states",
      "Error handling",
      "Result caching",
      "Highlight matching text"
    ]
  },
  {
    id: "react-mc-18",
    number: 18,
    title: "Nested Comments (System Design)",
    description: "Create a nested comment system similar to Reddit with unlimited nesting levels, voting, and replies.",
    difficulty: "advanced",
    duration: "22 mins",
    createdOn: "31 Aug 2025, 3:15 PM",
    watchLink: "https://example.com/watch/20-nested-comments",
    codeLink: "https://example.com/code/20-nested-comments",
    tags: ["React", "System Design", "Recursion", "State Management"],
    requirements: [
      "Unlimited nesting",
      "Add replies",
      "Upvote/downvote",
      "Edit/delete comments",
      "Collapse/expand threads",
      "Sort by votes/time"
    ]
  },
  {
    id: "react-mc-19",
    number: 19,
    title: "Poll Widget (System Design)",
    description: "Build a poll widget where users can vote, see real-time results, and view percentages.",
    difficulty: "advanced",
    duration: "37 mins",
    createdOn: "31 Aug 2025, 3:30 PM",
    watchLink: "https://example.com/watch/21-poll-widget",
    codeLink: "https://example.com/code/21-poll-widget",
    tags: ["React", "System Design", "Charts", "Real-time"],
    requirements: [
      "Multiple choice options",
      "Vote functionality",
      "Real-time results",
      "Percentage bars",
      "Prevent multiple votes",
      "Visual results display"
    ]
  },
  {
    id: "react-mc-20",
    number: 20,
    title: "Match Similar Tiles (Memory Game)",
    description: "Create a memory card matching game where users flip cards to find matching pairs.",
    difficulty: "intermediate",
    duration: "9 mins",
    createdOn: "31 Aug 2025, 3:45 PM",
    watchLink: "https://example.com/watch/22-memory-game",
    codeLink: "https://example.com/code/22-memory-game",
    tags: ["React", "Game Logic", "State Management", "Animation"],
    requirements: [
      "Card grid",
      "Flip cards",
      "Match detection",
      "Score tracking",
      "Timer",
      "Reset game"
    ]
  },
  {
    id: "react-mc-21",
    number: 21,
    title: "Cinema Hall Seat Booking",
    description: "Build a cinema seat booking system with seat selection, availability check, and booking confirmation.",
    difficulty: "advanced",
    duration: "30 mins",
    createdOn: "14 Sep 2025, 03:36 PM",
    watchLink: "https://example.com/watch/cinema-hall-seat-booking",
    codeLink: "https://example.com/code/cinema-hall-seat-booking",
    tags: ["React", "State Management", "UI", "Booking System"],
    requirements: [
      "Seat layout display",
      "Select multiple seats",
      "Show available/occupied/selected",
      "Price calculation",
      "Booking confirmation",
      "Visual feedback"
    ]
  },
  {
    id: "react-mc-22",
    number: 22,
    title: "Multi-step Form Wizard",
    description: "Create a multi-step form with progress indicator, validation, and navigation between steps.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "15 Sep 2025, 10:00 AM",
    tags: ["React", "Forms", "Wizard", "Validation"],
    requirements: [
      "Multiple steps",
      "Progress indicator",
      "Step validation",
      "Next/Previous navigation",
      "Form data persistence",
      "Final submission"
    ]
  },
  {
    id: "react-mc-23",
    number: 23,
    title: "Drag and Drop List",
    description: "Build a sortable list component with drag and drop functionality using HTML5 drag API.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "15 Sep 2025, 10:30 AM",
    tags: ["React", "Drag and Drop", "HTML5", "Lists"],
    requirements: [
      "Drag items",
      "Drop reordering",
      "Visual feedback",
      "Persist order",
      "Smooth animations"
    ]
  },
  {
    id: "react-mc-24",
    number: 24,
    title: "Search with Debounce",
    description: "Create a search component with debounced input, loading states, and result highlighting.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "15 Sep 2025, 11:00 AM",
    tags: ["React", "Debouncing", "Search", "Performance"],
    requirements: [
      "Debounced search",
      "Loading indicator",
      "Highlight matches",
      "Clear search",
      "Empty state"
    ]
  },
  {
    id: "react-mc-25",
    number: 25,
    title: "Modal Component",
    description: "Build a reusable modal component with backdrop, close on escape, and focus trap.",
    difficulty: "basic",
    duration: "18 mins",
    createdOn: "15 Sep 2025, 11:30 AM",
    tags: ["React", "Modal", "Accessibility", "Portal"],
    requirements: [
      "Backdrop overlay",
      "Close on escape key",
      "Close on backdrop click",
      "Focus trap",
      "Portal rendering",
      "Animations"
    ]
  },
  {
    id: "react-mc-26",
    number: 26,
    title: "Dropdown/Select Component",
    description: "Create a custom dropdown component with search, multi-select, and keyboard navigation.",
    difficulty: "intermediate",
    duration: "22 mins",
    createdOn: "15 Sep 2025, 12:00 PM",
    tags: ["React", "Dropdown", "Select", "Keyboard Navigation"],
    requirements: [
      "Open/close toggle",
      "Search functionality",
      "Multi-select support",
      "Keyboard navigation",
      "Selected items display",
      "Custom styling"
    ]
  },
  {
    id: "react-mc-27",
    number: 27,
    title: "File Upload with Preview",
    description: "Build a file upload component with drag-and-drop, preview, and progress indicator.",
    difficulty: "intermediate",
    duration: "28 mins",
    createdOn: "15 Sep 2025, 12:30 PM",
    tags: ["React", "File Upload", "Preview", "Drag and Drop"],
    requirements: [
      "File selection",
      "Drag and drop",
      "Image preview",
      "Upload progress",
      "Remove files",
      "File type validation"
    ]
  },
  {
    id: "react-mc-28",
    number: 28,
    title: "Calendar Component",
    description: "Create a calendar component with date selection, range selection, and month navigation.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "15 Sep 2025, 1:00 PM",
    tags: ["React", "Calendar", "Date Picker", "UI"],
    requirements: [
      "Month view",
      "Date selection",
      "Range selection",
      "Month navigation",
      "Today highlighting",
      "Disabled dates"
    ]
  },
  {
    id: "react-mc-29",
    number: 29,
    title: "Stopwatch/Timer",
    description: "Build a stopwatch component with start, pause, reset, and lap functionality.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "15 Sep 2025, 1:30 PM",
    tags: ["React", "Timer", "State Management", "Intervals"],
    requirements: [
      "Start/Pause/Reset",
      "Lap functionality",
      "Lap history",
      "Time formatting",
      "Accurate timing"
    ]
  },
  {
    id: "react-mc-30",
    number: 30,
    title: "Dark Mode Toggle",
    description: "Create a theme switcher component that toggles between light and dark modes with persistence.",
    difficulty: "basic",
    duration: "12 mins",
    createdOn: "15 Sep 2025, 2:00 PM",
    tags: ["React", "Theme", "Context API", "Local Storage"],
    requirements: [
      "Toggle theme",
      "Persist preference",
      "System preference detection",
      "Smooth transitions"
    ]
  },
  // Intermediate Level (31-60)
  {
    id: "react-mc-31",
    number: 31,
    title: "Data Table with Sorting and Filtering",
    description: "Build a data table component with sorting, filtering, pagination, and column resizing.",
    difficulty: "intermediate",
    duration: "40 mins",
    createdOn: "15 Sep 2025, 2:30 PM",
    tags: ["React", "Table", "Sorting", "Filtering", "Pagination"],
    requirements: [
      "Column sorting",
      "Column filtering",
      "Pagination",
      "Column resizing",
      "Row selection",
      "Export functionality"
    ]
  },
  {
    id: "react-mc-32",
    number: 32,
    title: "Rich Text Editor",
    description: "Create a rich text editor with formatting options (bold, italic, lists, links).",
    difficulty: "advanced",
    duration: "45 mins",
    createdOn: "15 Sep 2025, 3:00 PM",
    tags: ["React", "Rich Text", "Editor", "ContentEditable"],
    requirements: [
      "Text formatting",
      "Bold, italic, underline",
      "Lists (ordered/unordered)",
      "Links",
      "Undo/redo",
      "HTML output"
    ]
  },
  {
    id: "react-mc-33",
    number: 33,
    title: "Image Gallery with Lightbox",
    description: "Build an image gallery with lightbox view, thumbnail navigation, and zoom functionality.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "15 Sep 2025, 3:30 PM",
    tags: ["React", "Gallery", "Lightbox", "Images"],
    requirements: [
      "Thumbnail grid",
      "Lightbox view",
      "Next/Previous navigation",
      "Zoom functionality",
      "Keyboard navigation",
      "Image lazy loading"
    ]
  },
  {
    id: "react-mc-34",
    number: 34,
    title: "Chat Interface",
    description: "Create a chat interface with message list, input, emoji picker, and auto-scroll to bottom.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "15 Sep 2025, 4:00 PM",
    tags: ["React", "Chat", "Real-time", "UI"],
    requirements: [
      "Message list",
      "Message input",
      "Emoji picker",
      "Auto-scroll",
      "Message timestamps",
      "User avatars"
    ]
  },
  {
    id: "react-mc-35",
    number: 35,
    title: "Kanban Board",
    description: "Build a Kanban board with drag-and-drop cards between columns, add/delete cards and columns.",
    difficulty: "advanced",
    duration: "50 mins",
    createdOn: "15 Sep 2025, 4:30 PM",
    tags: ["React", "Kanban", "Drag and Drop", "Project Management"],
    requirements: [
      "Multiple columns",
      "Drag cards between columns",
      "Add/delete cards",
      "Add/delete columns",
      "Card details",
      "Persist state"
    ]
  },
  {
    id: "react-mc-36",
    number: 36,
    title: "Password Strength Meter",
    description: "Create a password input with strength indicator, requirements checklist, and show/hide toggle.",
    difficulty: "basic",
    duration: "18 mins",
    createdOn: "15 Sep 2025, 5:00 PM",
    tags: ["React", "Forms", "Validation", "Security"],
    requirements: [
      "Password input",
      "Strength meter",
      "Requirements checklist",
      "Show/hide password",
      "Real-time validation"
    ]
  },
  {
    id: "react-mc-37",
    number: 37,
    title: "Notification Bell with Badge",
    description: "Build a notification bell component with badge count, dropdown list, and mark as read functionality.",
    difficulty: "intermediate",
    duration: "22 mins",
    createdOn: "15 Sep 2025, 5:30 PM",
    tags: ["React", "Notifications", "Badge", "Dropdown"],
    requirements: [
      "Bell icon with badge",
      "Notification dropdown",
      "Mark as read",
      "Unread count",
      "Notification types",
      "Empty state"
    ]
  },
  {
    id: "react-mc-38",
    number: 38,
    title: "Breadcrumb Navigation",
    description: "Create a breadcrumb navigation component that dynamically generates from route or props.",
    difficulty: "basic",
    duration: "12 mins",
    createdOn: "15 Sep 2025, 6:00 PM",
    tags: ["React", "Navigation", "Breadcrumbs", "Routing"],
    requirements: [
      "Dynamic generation",
      "Clickable links",
      "Separator icons",
      "Current page highlighting",
      "Responsive design"
    ]
  },
  {
    id: "react-mc-39",
    number: 39,
    title: "Tooltip Component",
    description: "Build a reusable tooltip component with positioning, delay, and multiple trigger types.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "15 Sep 2025, 6:30 PM",
    tags: ["React", "Tooltip", "Portal", "Positioning"],
    requirements: [
      "Hover trigger",
      "Click trigger",
      "Positioning (top, bottom, left, right)",
      "Delay option",
      "Arrow indicator",
      "Portal rendering"
    ]
  },
  {
    id: "react-mc-40",
    number: 40,
    title: "Skeleton Loader",
    description: "Create skeleton loading components for different content types (text, image, card).",
    difficulty: "basic",
    duration: "10 mins",
    createdOn: "15 Sep 2025, 7:00 PM",
    tags: ["React", "Loading", "Skeleton", "UX"],
    requirements: [
      "Text skeleton",
      "Image skeleton",
      "Card skeleton",
      "Shimmer animation",
      "Customizable shapes"
    ]
  },
  {
    id: "react-mc-41",
    number: 41,
    title: "Resizable Panels",
    description: "Build a layout with resizable panels that can be dragged to adjust sizes.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "16 Sep 2025, 10:00 AM",
    tags: ["React", "Layout", "Resizable", "Drag"],
    requirements: [
      "Multiple panels",
      "Drag to resize",
      "Minimum/maximum sizes",
      "Persist sizes",
      "Smooth resizing"
    ]
  },
  {
    id: "react-mc-42",
    number: 42,
    title: "Tag Input Component",
    description: "Create a tag input component where users can add, remove, and edit tags.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "16 Sep 2025, 10:30 AM",
    tags: ["React", "Tags", "Input", "Chips"],
    requirements: [
      "Add tags",
      "Remove tags",
      "Edit tags",
      "Duplicate prevention",
      "Keyboard support (Enter, Backspace)",
      "Visual feedback"
    ]
  },
  {
    id: "react-mc-43",
    number: 43,
    title: "Stepper Component",
    description: "Build a stepper component to show progress through multiple steps with validation.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "16 Sep 2025, 11:00 AM",
    tags: ["React", "Stepper", "Wizard", "Progress"],
    requirements: [
      "Step indicators",
      "Active step highlighting",
      "Completed steps",
      "Step validation",
      "Navigation between steps",
      "Vertical/horizontal layout"
    ]
  },
  {
    id: "react-mc-44",
    number: 44,
    title: "Virtualized List",
    description: "Create a virtualized list component that renders only visible items for performance.",
    difficulty: "advanced",
    duration: "40 mins",
    createdOn: "16 Sep 2025, 11:30 AM",
    tags: ["React", "Virtualization", "Performance", "Large Lists"],
    requirements: [
      "Render only visible items",
      "Dynamic height support",
      "Smooth scrolling",
      "Scroll to index",
      "Performance optimization"
    ]
  },
  {
    id: "react-mc-45",
    number: 45,
    title: "Context Menu",
    description: "Build a context menu component that appears on right-click with custom actions.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "16 Sep 2025, 12:00 PM",
    tags: ["React", "Context Menu", "Right Click", "Portal"],
    requirements: [
      "Right-click trigger",
      "Menu positioning",
      "Custom actions",
      "Keyboard navigation",
      "Close on outside click",
      "Submenus support"
    ]
  },
  {
    id: "react-mc-46",
    number: 46,
    title: "Color Picker",
    description: "Create a color picker component with hex, RGB, and HSL input options.",
    difficulty: "intermediate",
    duration: "28 mins",
    createdOn: "16 Sep 2025, 12:30 PM",
    tags: ["React", "Color Picker", "Input", "UI"],
    requirements: [
      "Visual color selection",
      "Hex input",
      "RGB input",
      "HSL input",
      "Color preview",
      "Preset colors"
    ]
  },
  {
    id: "react-mc-47",
    number: 47,
    title: "Timeline Component",
    description: "Build a timeline component to display events in chronological order.",
    difficulty: "intermediate",
    duration: "22 mins",
    createdOn: "16 Sep 2025, 1:00 PM",
    tags: ["React", "Timeline", "Events", "UI"],
    requirements: [
      "Vertical timeline",
      "Event items",
      "Timestamps",
      "Icons/avatars",
      "Alternating layout",
      "Responsive design"
    ]
  },
  {
    id: "react-mc-48",
    number: 48,
    title: "Rating/Review System",
    description: "Create a rating and review system with star ratings, written reviews, and review display.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "16 Sep 2025, 1:30 PM",
    tags: ["React", "Rating", "Reviews", "Forms"],
    requirements: [
      "Star rating input",
      "Review text input",
      "Display reviews",
      "Average rating calculation",
      "Review sorting",
      "Review filtering"
    ]
  },
  {
    id: "react-mc-49",
    number: 49,
    title: "Tree View Component",
    description: "Build a tree view component with expand/collapse, selection, and search functionality.",
    difficulty: "advanced",
    duration: "35 mins",
    createdOn: "16 Sep 2025, 2:00 PM",
    tags: ["React", "Tree", "Hierarchy", "Recursion"],
    requirements: [
      "Expand/collapse nodes",
      "Node selection",
      "Search/filter",
      "Checkbox selection",
      "Keyboard navigation",
      "Lazy loading support"
    ]
  },
  {
    id: "react-mc-50",
    number: 50,
    title: "OTP Input Component",
    description: "Create an OTP (One-Time Password) input component with auto-focus and validation.",
    difficulty: "basic",
    duration: "18 mins",
    createdOn: "16 Sep 2025, 2:30 PM",
    tags: ["React", "OTP", "Input", "Forms"],
    requirements: [
      "Multiple input boxes",
      "Auto-focus next",
      "Backspace navigation",
      "Paste support",
      "Validation",
      "Complete callback"
    ]
  },
  {
    id: "react-mc-51",
    number: 51,
    title: "Infinite Scroll with Virtualization",
    description: "Combine infinite scrolling with virtualization for optimal performance with large datasets.",
    difficulty: "advanced",
    duration: "45 mins",
    createdOn: "16 Sep 2025, 3:00 PM",
    tags: ["React", "Virtualization", "Infinite Scroll", "Performance"],
    requirements: [
      "Virtual scrolling",
      "Infinite loading",
      "Dynamic heights",
      "Scroll restoration",
      "Performance optimization"
    ]
  },
  {
    id: "react-mc-52",
    number: 52,
    title: "Multi-select Dropdown",
    description: "Build a multi-select dropdown with search, tags display, and select all functionality.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "16 Sep 2025, 3:30 PM",
    tags: ["React", "Dropdown", "Multi-select", "Search"],
    requirements: [
      "Multiple selection",
      "Search functionality",
      "Selected items display",
      "Select all/none",
      "Keyboard navigation",
      "Custom options rendering"
    ]
  },
  {
    id: "react-mc-53",
    number: 53,
    title: "Image Cropper",
    description: "Create an image cropper component with zoom, pan, and aspect ratio controls.",
    difficulty: "advanced",
    duration: "50 mins",
    createdOn: "16 Sep 2025, 4:00 PM",
    tags: ["React", "Image", "Cropper", "Canvas"],
    requirements: [
      "Image upload",
      "Crop selection",
      "Zoom functionality",
      "Pan functionality",
      "Aspect ratio controls",
      "Export cropped image"
    ]
  },
  {
    id: "react-mc-54",
    number: 54,
    title: "Progress Steps Indicator",
    description: "Build a progress steps indicator showing current step, completed steps, and upcoming steps.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "16 Sep 2025, 4:30 PM",
    tags: ["React", "Progress", "Steps", "Indicator"],
    requirements: [
      "Step numbers",
      "Active step highlighting",
      "Completed steps",
      "Connecting lines",
      "Step labels",
      "Clickable steps"
    ]
  },
  {
    id: "react-mc-55",
    number: 55,
    title: "Collapsible Sidebar",
    description: "Create a collapsible sidebar with menu items, icons, and smooth animations.",
    difficulty: "intermediate",
    duration: "20 mins",
    createdOn: "16 Sep 2025, 5:00 PM",
    tags: ["React", "Sidebar", "Navigation", "Animation"],
    requirements: [
      "Collapse/expand",
      "Menu items",
      "Icons",
      "Smooth animations",
      "Active state",
      "Responsive behavior"
    ]
  },
  {
    id: "react-mc-56",
    number: 56,
    title: "Form Builder",
    description: "Build a drag-and-drop form builder where users can create forms visually.",
    difficulty: "advanced",
    duration: "60 mins",
    createdOn: "16 Sep 2025, 5:30 PM",
    tags: ["React", "Form Builder", "Drag and Drop", "Visual Editor"],
    requirements: [
      "Drag form fields",
      "Field configuration",
      "Form preview",
      "Form validation setup",
      "Export form JSON",
      "Save/load forms"
    ]
  },
  {
    id: "react-mc-57",
    number: 57,
    title: "Video Player",
    description: "Create a custom video player with play/pause, progress bar, volume control, and fullscreen.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "16 Sep 2025, 6:00 PM",
    tags: ["React", "Video", "Player", "Media"],
    requirements: [
      "Play/pause",
      "Progress bar",
      "Volume control",
      "Fullscreen",
      "Keyboard controls",
      "Playback speed"
    ]
  },
  {
    id: "react-mc-58",
    number: 58,
    title: "Notification Center",
    description: "Build a notification center with grouping, filtering, and mark all as read functionality.",
    difficulty: "intermediate",
    duration: "28 mins",
    createdOn: "16 Sep 2025, 6:30 PM",
    tags: ["React", "Notifications", "Center", "Grouping"],
    requirements: [
      "Notification list",
      "Group by type/date",
      "Filter notifications",
      "Mark all as read",
      "Delete notifications",
      "Real-time updates"
    ]
  },
  {
    id: "react-mc-59",
    number: 59,
    title: "Range Slider",
    description: "Create a dual-handle range slider for selecting value ranges.",
    difficulty: "intermediate",
    duration: "22 mins",
    createdOn: "16 Sep 2025, 7:00 PM",
    tags: ["React", "Slider", "Range", "Input"],
    requirements: [
      "Dual handles",
      "Range selection",
      "Min/max values",
      "Step increments",
      "Value display",
      "Custom styling"
    ]
  },
  {
    id: "react-mc-60",
    number: 60,
    title: "Code Editor Component",
    description: "Build a code editor component with syntax highlighting and line numbers.",
    difficulty: "advanced",
    duration: "50 mins",
    createdOn: "16 Sep 2025, 7:30 PM",
    tags: ["React", "Code Editor", "Syntax Highlighting", "Monaco"],
    requirements: [
      "Code input",
      "Syntax highlighting",
      "Line numbers",
      "Theme support",
      "Language selection",
      "Auto-completion"
    ]
  },
  // Advanced Level (61-100+)
  {
    id: "react-mc-61",
    number: 61,
    title: "Real-time Collaborative Editor",
    description: "Create a real-time collaborative text editor with multiple cursors and live updates.",
    difficulty: "advanced",
    duration: "90 mins",
    createdOn: "17 Sep 2025, 10:00 AM",
    tags: ["React", "Collaborative", "WebSockets", "Real-time"],
    requirements: [
      "Multiple users",
      "Live cursors",
      "Real-time updates",
      "Conflict resolution",
      "User presence",
      "WebSocket integration"
    ]
  },
  {
    id: "react-mc-62",
    number: 62,
    title: "Dashboard with Widgets",
    description: "Build a dashboard where users can add, remove, resize, and rearrange widgets.",
    difficulty: "advanced",
    duration: "70 mins",
    createdOn: "17 Sep 2025, 10:30 AM",
    tags: ["React", "Dashboard", "Widgets", "Drag and Drop"],
    requirements: [
      "Widget system",
      "Drag to rearrange",
      "Resize widgets",
      "Add/remove widgets",
      "Widget configuration",
      "Persist layout"
    ]
  },
  {
    id: "react-mc-63",
    number: 63,
    title: "Spreadsheet Component",
    description: "Create a spreadsheet component with cells, formulas, and basic calculations.",
    difficulty: "advanced",
    duration: "80 mins",
    createdOn: "17 Sep 2025, 11:00 AM",
    tags: ["React", "Spreadsheet", "Cells", "Formulas"],
    requirements: [
      "Cell grid",
      "Cell editing",
      "Formula support",
      "Basic calculations",
      "Cell references",
      "Copy/paste"
    ]
  },
  {
    id: "react-mc-64",
    number: 64,
    title: "File Explorer",
    description: "Build a file explorer component with folders, files, and navigation.",
    difficulty: "intermediate",
    duration: "40 mins",
    createdOn: "17 Sep 2025, 11:30 AM",
    tags: ["React", "File Explorer", "Tree", "Navigation"],
    requirements: [
      "Folder structure",
      "File listing",
      "Navigation",
      "Breadcrumbs",
      "File operations",
      "Search functionality"
    ]
  },
  {
    id: "react-mc-65",
    number: 65,
    title: "Chart Component Library",
    description: "Create a chart component library supporting line, bar, pie, and area charts.",
    difficulty: "advanced",
    duration: "60 mins",
    createdOn: "17 Sep 2025, 12:00 PM",
    tags: ["React", "Charts", "Data Visualization", "SVG"],
    requirements: [
      "Line chart",
      "Bar chart",
      "Pie chart",
      "Area chart",
      "Interactive tooltips",
      "Responsive design"
    ]
  },
  {
    id: "react-mc-66",
    number: 66,
    title: "Multi-language Support (i18n)",
    description: "Implement internationalization with language switcher and translation management.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "17 Sep 2025, 12:30 PM",
    tags: ["React", "i18n", "Internationalization", "Translation"],
    requirements: [
      "Language switcher",
      "Translation files",
      "Dynamic language change",
      "RTL support",
      "Pluralization",
      "Date/number formatting"
    ]
  },
  {
    id: "react-mc-67",
    number: 67,
    title: "Command Palette",
    description: "Build a command palette (like VS Code) with search, keyboard shortcuts, and actions.",
    difficulty: "advanced",
    duration: "45 mins",
    createdOn: "17 Sep 2025, 1:00 PM",
    tags: ["React", "Command Palette", "Keyboard", "Search"],
    requirements: [
      "Open with Cmd/Ctrl+K",
      "Search functionality",
      "Keyboard navigation",
      "Action execution",
      "Recent commands",
      "Command grouping"
    ]
  },
  {
    id: "react-mc-68",
    number: 68,
    title: "Undo/Redo System",
    description: "Create a generic undo/redo system that can be used with any state management.",
    difficulty: "advanced",
    duration: "40 mins",
    createdOn: "17 Sep 2025, 1:30 PM",
    tags: ["React", "Undo/Redo", "State Management", "History"],
    requirements: [
      "Undo functionality",
      "Redo functionality",
      "History stack",
      "Keyboard shortcuts",
      "History limit",
      "State snapshots"
    ]
  },
  {
    id: "react-mc-69",
    number: 69,
    title: "Drag and Drop File Upload",
    description: "Build an advanced file upload component with drag-and-drop, progress, and preview.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "17 Sep 2025, 2:00 PM",
    tags: ["React", "File Upload", "Drag and Drop", "Progress"],
    requirements: [
      "Drag and drop zone",
      "File selection",
      "Upload progress",
      "File preview",
      "Remove files",
      "Multiple file support"
    ]
  },
  {
    id: "react-mc-70",
    number: 70,
    title: "Search with Filters and Sorting",
    description: "Create an advanced search component with multiple filters, sorting options, and URL state.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "17 Sep 2025, 2:30 PM",
    tags: ["React", "Search", "Filters", "Sorting"],
    requirements: [
      "Search input",
      "Multiple filters",
      "Sort options",
      "URL state sync",
      "Filter chips",
      "Clear all filters"
    ]
  },
  {
    id: "react-mc-71",
    number: 71,
    title: "Notification Toast Queue",
    description: "Build a toast notification system that queues multiple notifications with priorities.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "17 Sep 2025, 3:00 PM",
    tags: ["React", "Toast", "Queue", "Notifications"],
    requirements: [
      "Notification queue",
      "Priority handling",
      "Auto-dismiss",
      "Manual dismiss",
      "Stacking",
      "Positioning"
    ]
  },
  {
    id: "react-mc-72",
    number: 72,
    title: "Resizable Textarea",
    description: "Create a textarea component that automatically resizes based on content.",
    difficulty: "basic",
    duration: "12 mins",
    createdOn: "17 Sep 2025, 3:30 PM",
    tags: ["React", "Textarea", "Auto-resize", "Input"],
    requirements: [
      "Auto-resize",
      "Min/max height",
      "Smooth transitions",
      "Character count",
      "Placeholder support"
    ]
  },
  {
    id: "react-mc-73",
    number: 73,
    title: "Image Lazy Loading Gallery",
    description: "Build an image gallery with lazy loading, intersection observer, and placeholder images.",
    difficulty: "intermediate",
    duration: "28 mins",
    createdOn: "17 Sep 2025, 4:00 PM",
    tags: ["React", "Lazy Loading", "Intersection Observer", "Performance"],
    requirements: [
      "Lazy load images",
      "Placeholder images",
      "Loading states",
      "Error handling",
      "Intersection Observer",
      "Performance optimization"
    ]
  },
  {
    id: "react-mc-74",
    number: 74,
    title: "Multi-tab Form",
    description: "Create a form split into multiple tabs with validation and progress tracking.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "17 Sep 2025, 4:30 PM",
    tags: ["React", "Forms", "Tabs", "Validation"],
    requirements: [
      "Multiple tabs",
      "Form fields per tab",
      "Tab validation",
      "Progress indicator",
      "Navigation between tabs",
      "Form submission"
    ]
  },
  {
    id: "react-mc-75",
    number: 75,
    title: "Infinite Scroll with Search",
    description: "Combine infinite scrolling with search functionality and result filtering.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "17 Sep 2025, 5:00 PM",
    tags: ["React", "Infinite Scroll", "Search", "Filtering"],
    requirements: [
      "Search input",
      "Infinite scrolling",
      "Result filtering",
      "Loading states",
      "Empty states",
      "Debounced search"
    ]
  },
  {
    id: "react-mc-76",
    number: 76,
    title: "Context Menu with Submenus",
    description: "Build an advanced context menu with nested submenus and keyboard navigation.",
    difficulty: "intermediate",
    duration: "28 mins",
    createdOn: "17 Sep 2025, 5:30 PM",
    tags: ["React", "Context Menu", "Submenus", "Navigation"],
    requirements: [
      "Right-click trigger",
      "Nested submenus",
      "Keyboard navigation",
      "Menu positioning",
      "Close on outside click",
      "Custom actions"
    ]
  },
  {
    id: "react-mc-77",
    number: 77,
    title: "Date Range Picker",
    description: "Create a date range picker with calendar view, presets, and validation.",
    difficulty: "intermediate",
    duration: "40 mins",
    createdOn: "17 Sep 2025, 6:00 PM",
    tags: ["React", "Date Picker", "Range", "Calendar"],
    requirements: [
      "Calendar view",
      "Range selection",
      "Date presets",
      "Validation",
      "Min/max dates",
      "Custom formatting"
    ]
  },
  {
    id: "react-mc-78",
    number: 78,
    title: "Progress Ring/Circular Progress",
    description: "Build a circular progress indicator with percentage display and animations.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "17 Sep 2025, 6:30 PM",
    tags: ["React", "Progress", "Circular", "SVG"],
    requirements: [
      "Circular progress",
      "Percentage display",
      "Animated transitions",
      "Customizable colors",
      "Size options",
      "Stroke width control"
    ]
  },
  {
    id: "react-mc-79",
    number: 79,
    title: "Split View Component",
    description: "Create a split view component with resizable panels and multiple layouts.",
    difficulty: "intermediate",
    duration: "32 mins",
    createdOn: "17 Sep 2025, 7:00 PM",
    tags: ["React", "Split View", "Resizable", "Layout"],
    requirements: [
      "Resizable panels",
      "Horizontal/vertical split",
      "Minimum sizes",
      "Persist sizes",
      "Multiple panels",
      "Smooth resizing"
    ]
  },
  {
    id: "react-mc-80",
    number: 80,
    title: "Tag Cloud Component",
    description: "Build a tag cloud component with weighted tags and click interactions.",
    difficulty: "basic",
    duration: "18 mins",
    createdOn: "17 Sep 2025, 7:30 PM",
    tags: ["React", "Tag Cloud", "Visualization", "Tags"],
    requirements: [
      "Weighted tags",
      "Size based on weight",
      "Click interactions",
      "Color variations",
      "Hover effects",
      "Responsive layout"
    ]
  },
  {
    id: "react-mc-81",
    number: 81,
    title: "Masonry Layout",
    description: "Create a masonry/Pinterest-style layout with dynamic item heights.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "18 Sep 2025, 10:00 AM",
    tags: ["React", "Masonry", "Layout", "Grid"],
    requirements: [
      "Dynamic heights",
      "Column layout",
      "Responsive columns",
      "Lazy loading",
      "Smooth layout",
      "Gap control"
    ]
  },
  {
    id: "react-mc-82",
    number: 82,
    title: "Audio Player",
    description: "Build a custom audio player with play/pause, progress, volume, and playlist.",
    difficulty: "intermediate",
    duration: "38 mins",
    createdOn: "18 Sep 2025, 10:30 AM",
    tags: ["React", "Audio", "Player", "Media"],
    requirements: [
      "Play/pause",
      "Progress bar",
      "Volume control",
      "Playlist",
      "Next/previous",
      "Time display"
    ]
  },
  {
    id: "react-mc-83",
    number: 83,
    title: "Sticky Header on Scroll",
    description: "Create a header that becomes sticky when scrolling with smooth transitions.",
    difficulty: "basic",
    duration: "15 mins",
    createdOn: "18 Sep 2025, 11:00 AM",
    tags: ["React", "Sticky", "Header", "Scroll"],
    requirements: [
      "Sticky on scroll",
      "Smooth transitions",
      "Shadow on stick",
      "Scroll detection",
      "Responsive behavior"
    ]
  },
  {
    id: "react-mc-84",
    number: 84,
    title: "Multi-level Dropdown Menu",
    description: "Build a navigation menu with multiple levels of dropdowns and hover/click triggers.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "18 Sep 2025, 11:30 AM",
    tags: ["React", "Dropdown", "Menu", "Navigation"],
    requirements: [
      "Multiple levels",
      "Hover/click triggers",
      "Keyboard navigation",
      "Active states",
      "Smooth animations",
      "Mobile responsive"
    ]
  },
  {
    id: "react-mc-85",
    number: 85,
    title: "Image Comparison Slider",
    description: "Create an image comparison slider that shows before/after images with drag handle.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "18 Sep 2025, 12:00 PM",
    tags: ["React", "Image", "Slider", "Comparison"],
    requirements: [
      "Two images",
      "Drag handle",
      "Split view",
      "Smooth dragging",
      "Keyboard controls",
      "Responsive design"
    ]
  },
  {
    id: "react-mc-86",
    number: 86,
    title: "Password Generator",
    description: "Build a password generator with customizable options (length, characters, etc.).",
    difficulty: "basic",
    duration: "20 mins",
    createdOn: "18 Sep 2025, 12:30 PM",
    tags: ["React", "Password", "Generator", "Security"],
    requirements: [
      "Length control",
      "Character options",
      "Generate password",
      "Copy to clipboard",
      "Strength indicator",
      "Regenerate"
    ]
  },
  {
    id: "react-mc-87",
    number: 87,
    title: "QR Code Generator",
    description: "Create a QR code generator component that generates QR codes from text/URLs.",
    difficulty: "basic",
    duration: "22 mins",
    createdOn: "18 Sep 2025, 1:00 PM",
    tags: ["React", "QR Code", "Generator", "Utility"],
    requirements: [
      "Text input",
      "QR code generation",
      "Download QR code",
      "Size options",
      "Error correction",
      "Preview"
    ]
  },
  {
    id: "react-mc-88",
    number: 88,
    title: "Markdown Editor with Preview",
    description: "Build a markdown editor with live preview and syntax highlighting.",
    difficulty: "intermediate",
    duration: "40 mins",
    createdOn: "18 Sep 2025, 1:30 PM",
    tags: ["React", "Markdown", "Editor", "Preview"],
    requirements: [
      "Markdown input",
      "Live preview",
      "Syntax highlighting",
      "Toolbar",
      "Export HTML",
      "Split view"
    ]
  },
  {
    id: "react-mc-89",
    number: 89,
    title: "Infinite Scroll with Pull to Refresh",
    description: "Create infinite scrolling with pull-to-refresh functionality for mobile.",
    difficulty: "intermediate",
    duration: "32 mins",
    createdOn: "18 Sep 2025, 2:00 PM",
    tags: ["React", "Infinite Scroll", "Pull to Refresh", "Mobile"],
    requirements: [
      "Infinite scrolling",
      "Pull to refresh",
      "Loading indicators",
      "Touch gestures",
      "Smooth animations",
      "Mobile optimized"
    ]
  },
  {
    id: "react-mc-90",
    number: 90,
    title: "Color Palette Generator",
    description: "Build a color palette generator with harmony rules and export functionality.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "18 Sep 2025, 2:30 PM",
    tags: ["React", "Color", "Palette", "Generator"],
    requirements: [
      "Generate palettes",
      "Color harmony rules",
      "Copy color codes",
      "Export palette",
      "Preview colors",
      "Random generation"
    ]
  },
  {
    id: "react-mc-91",
    number: 91,
    title: "Notification Badge System",
    description: "Create a notification badge system with counts, animations, and grouping.",
    difficulty: "basic",
    duration: "18 mins",
    createdOn: "18 Sep 2025, 3:00 PM",
    tags: ["React", "Badge", "Notifications", "UI"],
    requirements: [
      "Badge counts",
      "Animation on update",
      "Badge grouping",
      "Customizable styles",
      "Positioning",
      "Max count display"
    ]
  },
  {
    id: "react-mc-92",
    number: 92,
    title: "Resizable Modal",
    description: "Build a modal component that can be resized and repositioned.",
    difficulty: "intermediate",
    duration: "30 mins",
    createdOn: "18 Sep 2025, 3:30 PM",
    tags: ["React", "Modal", "Resizable", "Draggable"],
    requirements: [
      "Resize handles",
      "Drag to reposition",
      "Min/max sizes",
      "Maintain aspect ratio option",
      "Keyboard shortcuts",
      "Portal rendering"
    ]
  },
  {
    id: "react-mc-93",
    number: 93,
    title: "Form Field Dependencies",
    description: "Create a form where fields show/hide and validate based on other field values.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "18 Sep 2025, 4:00 PM",
    tags: ["React", "Forms", "Dependencies", "Conditional"],
    requirements: [
      "Conditional fields",
      "Show/hide logic",
      "Dependent validation",
      "Field dependencies",
      "Dynamic form",
      "Form state management"
    ]
  },
  {
    id: "react-mc-94",
    number: 94,
    title: "Virtualized Grid",
    description: "Build a virtualized grid component for rendering large datasets efficiently.",
    difficulty: "advanced",
    duration: "50 mins",
    createdOn: "18 Sep 2025, 4:30 PM",
    tags: ["React", "Virtualization", "Grid", "Performance"],
    requirements: [
      "Virtual rendering",
      "Grid layout",
      "Dynamic item sizes",
      "Scroll optimization",
      "Lazy loading",
      "Performance metrics"
    ]
  },
  {
    id: "react-mc-95",
    number: 95,
    title: "Timeline with Events",
    description: "Create an interactive timeline component with events, zoom, and navigation.",
    difficulty: "intermediate",
    duration: "38 mins",
    createdOn: "18 Sep 2025, 5:00 PM",
    tags: ["React", "Timeline", "Events", "Interactive"],
    requirements: [
      "Event markers",
      "Zoom functionality",
      "Pan navigation",
      "Event details",
      "Time scale",
      "Interactive controls"
    ]
  },
  {
    id: "react-mc-96",
    number: 96,
    title: "Multi-select with Chips",
    description: "Build a multi-select component that displays selected items as chips/tags.",
    difficulty: "intermediate",
    duration: "22 mins",
    createdOn: "18 Sep 2025, 5:30 PM",
    tags: ["React", "Multi-select", "Chips", "Tags"],
    requirements: [
      "Multiple selection",
      "Chip display",
      "Remove chips",
      "Search functionality",
      "Keyboard support",
      "Custom chip rendering"
    ]
  },
  {
    id: "react-mc-97",
    number: 97,
    title: "Progress Tracking Component",
    description: "Create a progress tracking component with milestones and status indicators.",
    difficulty: "intermediate",
    duration: "28 mins",
    createdOn: "18 Sep 2025, 6:00 PM",
    tags: ["React", "Progress", "Milestones", "Tracking"],
    requirements: [
      "Milestone display",
      "Status indicators",
      "Progress percentage",
      "Completed steps",
      "Current step",
      "Visual progress bar"
    ]
  },
  {
    id: "react-mc-98",
    number: 98,
    title: "Search with Autocomplete and History",
    description: "Build an advanced search component with autocomplete, search history, and suggestions.",
    difficulty: "intermediate",
    duration: "35 mins",
    createdOn: "18 Sep 2025, 6:30 PM",
    tags: ["React", "Search", "Autocomplete", "History"],
    requirements: [
      "Search input",
      "Autocomplete suggestions",
      "Search history",
      "Recent searches",
      "Keyboard navigation",
      "Clear history"
    ]
  },
  {
    id: "react-mc-99",
    number: 99,
    title: "Drag and Drop Sortable List",
    description: "Create a sortable list component with drag-and-drop reordering.",
    difficulty: "intermediate",
    duration: "25 mins",
    createdOn: "18 Sep 2025, 7:00 PM",
    tags: ["React", "Drag and Drop", "Sortable", "List"],
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
    id: "react-mc-100",
    number: 100,
    title: "Advanced Form Validation",
    description: "Build a form with comprehensive validation, error messages, and async validation.",
    difficulty: "advanced",
    duration: "45 mins",
    createdOn: "18 Sep 2025, 7:30 PM",
    tags: ["React", "Forms", "Validation", "Async"],
    requirements: [
      "Field validation",
      "Error messages",
      "Async validation",
      "Cross-field validation",
      "Validation rules",
      "Submit handling"
    ]
  },
  {
    id: "react-mc-101",
    number: 101,
    title: "Component Library Documentation",
    description: "Create a documentation site for a component library with live examples and code snippets.",
    difficulty: "advanced",
    duration: "60 mins",
    createdOn: "19 Sep 2025, 10:00 AM",
    tags: ["React", "Documentation", "Component Library", "Storybook"],
    requirements: [
      "Component showcase",
      "Live examples",
      "Code snippets",
      "Props documentation",
      "Interactive playground",
      "Search functionality"
    ]
  },
  {
    id: "react-mc-102",
    number: 102,
    title: "Real-time Chat with Typing Indicators",
    description: "Build a real-time chat application with typing indicators and message status.",
    difficulty: "advanced",
    duration: "55 mins",
    createdOn: "19 Sep 2025, 10:30 AM",
    tags: ["React", "Chat", "Real-time", "WebSockets"],
    requirements: [
      "Message sending",
      "Real-time updates",
      "Typing indicators",
      "Message status",
      "User presence",
      "WebSocket integration"
    ]
  },
  {
    id: "react-mc-103",
    number: 103,
    title: "Data Visualization Dashboard",
    description: "Create a dashboard with multiple chart types, filters, and real-time data updates.",
    difficulty: "advanced",
    duration: "70 mins",
    createdOn: "19 Sep 2025, 11:00 AM",
    tags: ["React", "Dashboard", "Charts", "Data Visualization"],
    requirements: [
      "Multiple chart types",
      "Data filters",
      "Real-time updates",
      "Responsive layout",
      "Export functionality",
      "Interactive tooltips"
    ]
  },
  {
    id: "react-mc-104",
    number: 104,
    title: "Image Annotation Tool",
    description: "Build an image annotation tool with drawing, shapes, and text annotations.",
    difficulty: "advanced",
    duration: "65 mins",
    createdOn: "19 Sep 2025, 11:30 AM",
    tags: ["React", "Image", "Annotation", "Canvas"],
    requirements: [
      "Image upload",
      "Drawing tools",
      "Shape tools",
      "Text annotations",
      "Save annotations",
      "Export annotated image"
    ]
  },
  {
    id: "react-mc-105",
    number: 105,
    title: "Workflow Builder",
    description: "Create a visual workflow builder with drag-and-drop nodes and connections.",
    difficulty: "advanced",
    duration: "80 mins",
    createdOn: "19 Sep 2025, 12:00 PM",
    tags: ["React", "Workflow", "Visual Builder", "Drag and Drop"],
    requirements: [
      "Drag nodes",
      "Connect nodes",
      "Node configuration",
      "Workflow validation",
      "Export workflow",
      "Save/load workflows"
    ]
  }
];

// Helper functions
export function getAllReactMachineCodingQuestions() {
  return reactMachineCodingQuestions;
}

export function getReactMachineCodingQuestionById(id) {
  return reactMachineCodingQuestions.find(q => q.id === id);
}

export function getReactMachineCodingQuestionByNumber(number) {
  return reactMachineCodingQuestions.find(q => q.number === number);
}

export function getTotalReactMachineCodingQuestions() {
  return reactMachineCodingQuestions.length;
}

export function getReactMachineCodingQuestionsByDifficulty(difficulty) {
  return reactMachineCodingQuestions.filter(q => q.difficulty === difficulty);
}

