/**
 * Hero Data Module
 * Centralized hero content, animated code terminal snippets, and top-line impact statistics.
 */

export const heroBio = {
  name: "Md. Mahadi Hasan",
  shortName: "Mahadi",
  greeting: "I'm",
  title: "AI Engineer & Web Developer",
  headline: "Engineering Intelligence",
  highlightedFocus: "AI-powered systems",
  description:
    "I build AI-powered systems and scalable web applications. Specializing in Large Language Models (LLMs), RAG, and React to solve real-world problems.",
  roles: [
    "AI Engineer",
    "NLP Researcher",
    "Full-Stack Web Developer",
    "Business Intelligence Analyst"
  ],
  resumePath: "/Mahadi_Hasan_cv.pdf",
  availabilityText: "Available for AI & Web Development roles",
  primaryCta: {
    label: "View Projects",
    href: "#projects"
  },
  secondaryCta: {
    label: "Contact Me",
    href: "#contact"
  }
};

export const codeSnippets = [
  "import { AIEngineer } from 'mahadi.dev';",
  "",
  "const mahadi = new AIEngineer({",
  "  name: 'Md. Mahadi Hasan',",
  "  skills: ['LLMs', 'RAG', 'Python', 'React', 'NLP'],",
  "  focus: 'Fine-tuning LLMs & Scalable Web Apps',",
  "  status: 'Ready to Innovate'",
  "});",
  "",
  "await mahadi.trainModel();",
  "// Featured: Fact-Checking AI, Misinformation Detection",
  "",
  "mahadi.deploy();",
  "console.log('🚀 Building the future with AI!');"
];

export const heroStats = [
  {
    number: "3+",
    label: "Research Papers",
    iconKey: "Shield"
  },
  {
    number: "50+",
    label: "Projects Built",
    iconKey: "TrendingUp"
  },
  {
    number: "200+",
    label: "Problems Solved",
    iconKey: "Award"
  },
  {
    number: "100+",
    label: "Community Members",
    iconKey: "Users"
  }
];

export default {
  heroBio,
  codeSnippets,
  heroStats
};
