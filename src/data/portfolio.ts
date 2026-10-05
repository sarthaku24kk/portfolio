// ============================================================
// PORTFOLIO DATA — Edit all your information here
// ============================================================

export const PERSONAL = {
  name: "Sarthak Kumar",
  title: "B.Tech CSE | Cyber Security",
  tagline:
    "Building intelligent systems with a focus on AI, Cyber Security, architecture, and real-world problem solving.",
  github: "https://github.com/sarthaku24kk",
  linkedin: "ADD_LINKEDIN_URL", // Replace with your LinkedIn URL
  email: "ADD_EMAIL", // Replace with your email address
};

export const ABOUT_TEXT = `I'm Sarthak Kumar, a B.Tech Computer Science Engineering student specializing in Cyber Security.

I enjoy building practical technical projects and understanding how systems work end-to-end — from workflow and architecture to implementation.

My experience includes AI/ML projects, software development, robotics project leadership, competitive technical events, and team-based problem solving.

I'm currently expanding my skills in SQL and backend development while continuing to explore AI, Cyber Security, and system design.`;

export const SKILLS = [
  {
    category: "AI / Machine Learning",
    icon: "🧠",
    color: "#6366f1",
    items: [
      { name: "Python", level: "proficient" },
      { name: "Machine Learning", level: "proficient" },
      { name: "Data Analysis", level: "proficient" },
      { name: "AI-based Prediction Systems", level: "proficient" },
    ],
  },
  {
    category: "Cyber Security",
    icon: "🔐",
    color: "#06b6d4",
    items: [
      { name: "Cyber Security Fundamentals", level: "proficient" },
      { name: "Security-oriented System Thinking", level: "proficient" },
      { name: "Secure System Design", level: "proficient" },
    ],
  },
  {
    category: "Systems & Architecture",
    icon: "🏗️",
    color: "#8b5cf6",
    items: [
      { name: "Workflow Design", level: "proficient" },
      { name: "System Architecture", level: "proficient" },
      { name: "End-to-End System Understanding", level: "proficient" },
      { name: "Problem Decomposition", level: "proficient" },
    ],
  },
  {
    category: "Development",
    icon: "⚙️",
    color: "#10b981",
    items: [
      { name: "Python", level: "proficient" },
      { name: "Git / GitHub", level: "proficient" },
      { name: "SQL", level: "learning" },
      { name: "Backend Development", level: "learning" },
    ],
  },
];

export const PROJECTS = [
  {
    id: "01",
    title: "Solar Flare AI",
    description:
      "An AI/ML system focused on forecasting and nowcasting solar flares using combined Soft and Hard X-ray observations from Aditya-L1. Leverages data from SoLEXS and HEL1OS instruments, applying feature engineering on time-series data to build machine learning models for solar flare prediction.",
    tags: ["Python", "Machine Learning", "Time-Series", "SoLEXS", "HEL1OS", "Feature Engineering", "Aditya-L1"],
    github: "https://github.com/sarthaku24kk/solarflare-version-2",
    demo: null,
    accent: "#6366f1",
  },
  {
    id: "02",
    title: "SmartCreditAI",
    description:
      "An AI-driven credit assessment project focused on using data-driven methods to evaluate credit-related decisions. Applies machine learning techniques to analyze patterns and support smarter credit evaluations.",
    tags: ["Python", "Machine Learning", "Data Analysis", "AI"],
    github: "https://github.com/sarthaku24kk/SmartCreditAI",
    demo: null,
    accent: "#06b6d4",
  },
  {
    id: "03",
    title: "Forage Midas",
    description:
      "A software and finance-focused project completed as part of the Forage Midas experience, involving real-world problem solving and practical software development.",
    tags: ["Python", "Software Development", "Finance"],
    github: "https://github.com/sarthaku24kk/forage-midas",
    demo: null,
    accent: "#8b5cf6",
  },
  {
    id: "04",
    title: "Robotics Development",
    subtitle: "Tech Lead",
    description:
      "Served as Tech Lead for robot development in college projects, contributing to technical planning, development workflow, team coordination, and system-level problem solving. Led the team through architecture decisions and implementation phases.",
    tags: ["Tech Lead", "System Design", "Robotics", "Team Coordination", "Workflow Planning"],
    github: null,
    demo: null,
    accent: "#10b981",
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "State-Level Competition — 1st Place",
    description:
      "Led a team to secure 1st place at the state level in a competitive technical event.",
    highlight: "1st Place — State Level",
    color: "#f59e0b",
  },
  {
    icon: "🏆",
    title: "State-Level Competition — 1st Place",
    description:
      "Led the team to another 1st-place finish at the state level in a separate technical competition.",
    highlight: "1st Place — State Level",
    color: "#f59e0b",
  },
  {
    icon: "🤖",
    title: "Robotics Tech Lead",
    description:
      "Served as Tech Lead for robot development in college projects, driving technical leadership, development coordination, team collaboration, and system-level problem solving.",
    highlight: "Technical Leadership",
    color: "#06b6d4",
  },
  {
    icon: "🇮🇳",
    title: "Smart India Hackathon",
    description:
      "Selected at college level and nominated by the college for the national-level stage.",
    highlight: "College Level Selection & National Nomination",
    color: "#8b5cf6",
  },
];

export const SYSTEM_STAGES = [
  {
    label: "PROBLEM",
    description:
      "Every system begins with clearly understanding the problem. I focus on asking the right questions before writing a single line of code.",
  },
  {
    label: "REQUIREMENTS",
    description:
      "Breaking down the problem into concrete, measurable requirements that guide every design decision that follows.",
  },
  {
    label: "WORKFLOW",
    description:
      "Mapping out how data, control, and users move through the system. A clear workflow prevents architectural mistakes downstream.",
  },
  {
    label: "SYSTEM ARCHITECTURE",
    description:
      "I focus on understanding how different components communicate and how the complete system behaves rather than looking at individual components in isolation.",
  },
  {
    label: "IMPLEMENTATION",
    description:
      "Writing clean, purposeful code that aligns with the architecture. Implementation is disciplined — not exploratory guessing.",
  },
  {
    label: "TESTING",
    description:
      "Validating that the system behaves as expected under real conditions. Testing is part of building, not an afterthought.",
  },
  {
    label: "ITERATION",
    description:
      "Refining based on what the system reveals. Every real system improves through intelligent iteration and feedback.",
  },
];

export const CURRENTLY_LEARNING = [
  { name: "SQL", status: "learning" },
  { name: "Backend Development", status: "learning" },
  { name: "System Design", status: "active" },
  { name: "AI / ML", status: "active" },
  { name: "Cyber Security", status: "active" },
];

export const LEADERSHIP = [
  {
    role: "Tech Lead — Robotics Development",
    points: [
      "Technical coordination and planning",
      "Team collaboration and mentoring",
      "Development workflow design",
      "System-level problem solving",
    ],
    color: "#06b6d4",
  },
  {
    role: "Team Leader — State-Level Competitions",
    points: [
      "Led teams in two separate state-level competitions",
      "Coordinated technical work and strategy",
      "Achieved 1st place in both competitions",
      "Cross-functional team coordination",
    ],
    color: "#8b5cf6",
  },
];

export const HERO_LABELS = [
  "AI / ML",
  "CYBER SECURITY",
  "SYSTEM ARCHITECTURE",
  "BACKEND",
  "ROBOTICS",
];

export const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "SYSTEMS", href: "#systems" },
  { label: "CONTACT", href: "#contact" },
];
