/**
 * Projects Configuration for Febin Jacob Ponnachan
 * Easily add, remove, or modify projects here.
 */

export const projectsList = [
  {
    id: "Upcoming-Events",
    title: "Upcoming Events - Full Stack Task Platform",
    category: "Full Stack",
    featured: true,
    tagline: "Collaborative project management platform with real-time state and REST APIs.",
    description: "A comprehensive project coordination platform built with a modern React frontend and Node.js backend. Features drag-and-drop kanban boards, task assignment workflows, and secure token authentication.",
    technologies: ["Node.js", "JavaScript", "HTML", "CSS", "Git", "REST APIs"],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://example.com/demo/nexus-flow",
    previewType: "kanban",
    metrics: {
      stars: "14",
      forks: "4",
      status: "Active Release"
    },
    highlights: [
      "Modular RESTful architecture with custom error handling",
      "Dynamic filtering by priority, tags, and status",
      "Persistent state management with resilient client caching",
      "Accessible keyboard navigation across interactive boards"
    ]
  },
  {
    id: "Upcoming-Events",
    title: "Upcoming Events - Code Analytics & Snippet Vault",
    category: "Web Application",
    featured: true,
    tagline: "Minimalist developer repository for organizing, tagging, and evaluating algorithms.",
    description: "An intuitive code snippet management tool allowing developers to store, search, and benchmark algorithmic snippets across Python, Java, C++, and JavaScript with syntax highlighting.",
    technologies: ["JavaScript", "Python", "HTML", "CSS", "VS Code APIs"],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://example.com/demo/dev-pulse",
    previewType: "editor",
    metrics: {
      stars: "22",
      forks: "6",
      status: "Production"
    },
    highlights: [
      "Instant fuzzy-search across thousands of line snippets",
      "Multi-language code execution playground integration",
      "Lightweight local-first storage with zero telemetry",
      "Strict monochrome code theme optimized for readability"
    ]
  },
  {
    id: "Upcoming-Events",
    title: "Upcoming-Events - Academic Resource Portal",
    category: "Full Stack",
    featured: false,
    tagline: "Centralized academic hub for BCA students to share syllabus notes and track assignments.",
    description: "Developed tailored for university students to streamline course materials, lab assignment tracking, and peer-to-peer programming study circles with role-based permissions.",
    technologies: ["Java", "JavaScript", "Node.js", "HTML", "CSS"],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://example.com/demo/campus-sphere",
    previewType: "portal",
    metrics: {
      stars: "18",
      forks: "5",
      status: "Maintained"
    },
    highlights: [
      "Role-based access control for students and mentors",
      "Document indexing with automated tagging by semester",
      "Responsive layout tested for low-bandwidth mobile devices",
      "Automated assignment submission deadline notifications"
    ]
  },
  {
    id: "Upcoming-Events",
    title: "Upcoming-Events - Memory & Data Structure Visualizer",
    category: "Systems & Algorithms",
    featured: false,
    tagline: "Interactive educational visualization of pointer manipulation and dynamic memory allocation.",
    description: "An educational web utility built to demystify C and C++ pointer arithmetic, linked list traversals, and stack/heap memory layouts through interactive graphical representations.",
    technologies: ["C", "C++", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://example.com/demo/sys-trace",
    previewType: "graph",
    metrics: {
      stars: "31",
      forks: "9",
      status: "Open Source"
    },
    highlights: [
      "Step-by-step memory stack and heap representation",
      "Pointer dereferencing simulator with bounds checking",
      "Exportable execution traces for classroom presentations",
      "Zero dependencies for maximum performance and portability"
    ]
  }
];
