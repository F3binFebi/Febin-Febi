/**
 * Skills configuration for Febin Jacob Ponnachan
 * Minimalist, organized by domain with clear context (no generic progress bars).
 */

export const skillCategories = [
  { id: "all", label: "All Technologies" },
  { id: "languages", label: "Languages" },
  { id: "web", label: "Web & Runtime" },
  { id: "tools", label: "Tools & DevOps" }
];

export const skillsList = [
  {
    name: "JavaScript",
    category: "languages",
    level: "Core Language",
    experience: "ES6+, Async/Await, DOM manipulation, modular architecture",
    codeSnippet: "const dev = { name: 'Febin', stack: 'Full-Stack' };",
    icon: "Code2"
  },
  {
    name: "Python",
    category: "languages",
    level: "Core Language",
    experience: "Scripting, algorithmic logic, backend services, automation",
    codeSnippet: "def solve(problem): return optimize(solution)",
    icon: "Terminal"
  },
  {
    name: "Java",
    category: "languages",
    level: "Core Language",
    experience: "Object-oriented design, data structures, enterprise foundations",
    codeSnippet: "public class Architecture { void build() {} }",
    icon: "FileCode"
  },
  {
    name: "C",
    category: "languages",
    level: "Systems Language",
    experience: "Memory management, pointers, computer architecture fundamentals",
    codeSnippet: "int *ptr = malloc(sizeof(int));",
    icon: "Cpu"
  },
  {
    name: "C++",
    category: "languages",
    level: "Systems Language",
    experience: "OOP principles, Standard Template Library (STL), system programming",
    codeSnippet: "std::vector<string> stack = {\"C++\", \"STL\"};",
    icon: "Binary"
  },
  {
    name: "HTML",
    category: "web",
    level: "Web Standard",
    experience: "Semantic markup, accessibility (a11y), SEO architecture",
    codeSnippet: "<main role=\"main\" class=\"accessible-core\">",
    icon: "Layers"
  },
  {
    name: "CSS",
    category: "web",
    level: "Web Standard",
    experience: "Responsive layouts, Flexbox, Grid, CSS custom properties, minimal design",
    codeSnippet: ":root { --theme-contrast: #000; --bg: #fff; }",
    icon: "Palette"
  },
  {
    name: "Node.js",
    category: "web",
    level: "Runtime & Backend",
    experience: "Event-driven runtime, RESTful API design, server-side logic",
    codeSnippet: "import http from 'node:http'; server.listen(3000);",
    icon: "Server"
  },
  {
    name: "Git",
    category: "tools",
    level: "Version Control",
    experience: "Branching strategies, commit conventions, merge conflict resolution",
    codeSnippet: "git commit -m \"feat: implement robust api client\"",
    icon: "GitBranch"
  },
  {
    name: "GitHub",
    category: "tools",
    level: "Collaboration",
    experience: "Remote repositories, pull requests, issue tracking, CI/CD actions",
    codeSnippet: "gh repo clone febinjacob/project-core",
    icon: "Github"
  },
  {
    name: "VS Code",
    category: "tools",
    level: "Development IDE",
    experience: "Productivity shortcuts, extensions, debugger configuration, linting",
    codeSnippet: "code . --verbose",
    icon: "Laptop"
  }
];
