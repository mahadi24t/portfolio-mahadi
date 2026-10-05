/**
 * About Data Module
 * Centralized biographical details, skills, metrics, and narrative content for the About section.
 */

export const aboutStats = [
  {
    number: "50",
    suffix: "+",
    label: "Projects Built",
    description: "Production web applications, machine learning pipelines, and research prototypes"
  },
  {
    number: "3",
    suffix: "+",
    label: "Research Articles",
    description: "Published peer-reviewed papers in prestigious IEEE international conferences"
  },
  {
    number: "200",
    suffix: "+",
    label: "Problems Solved",
    description: "Algorithmic challenges conquered across Beecrowd, LeetCode, and competitive platforms"
  },
  {
    number: "100",
    suffix: "+",
    label: "Community Members",
    description: "Students and emerging engineers mentored as former President of ULAB Computer Programming Club"
  }
];

export const techStack = [
  {
    category: "AI & ML",
    items: ["LLMs / RAG", "NLP", "PyTorch / TensorFlow", "Deep Learning", "Python", "Hugging Face"]
  },
  {
    category: "Web Engineering",
    items: ["React 18", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "PHP"]
  },
  {
    category: "Data & Systems",
    items: ["Apache Spark", "Docker", "Git / GitHub", "Supabase / PostgreSQL", "SQLite", "Netlify / Render", "LaTeX"]
  }
];

export const coreCompetencies = [
  "AI & LLM Research",
  "Full-Stack Development",
  "Data Science & Analytics",
  "Leadership & Mentoring",
  "Competitive Programming",
  "Research Writing"
];

export const tabContent = {
  personal:
    "An AI Researcher and Systems Engineer driven by low-resource NLP and intelligent systems. A competitive programmer with 200+ algorithmic problems solved across platforms, I combine technical rigor with leadership—having led the ULAB Computer Programming Club as President to orchestrate major competitive programming initiatives and build strategic tech industry collaborations.",

  professional:
    "Operating at the intersection of data-driven intelligence and AI systems engineering. As an Associate Business Intelligence Analyst at CS Meta Limited, I engineer enterprise web infrastructure and LLM-driven evaluation platforms, while actively designing cutting-edge NLP/LLM pipelines and co-authoring peer-reviewed academic papers as a Research Assistant at Vector Research Lab.",

  approach:
    "I bridge the gap between peer-reviewed academic AI research and resilient production engineering. From designing zero-hallucination RAG pipelines with sub-millisecond database concurrency safeguards to engineering distributed big data pipelines, my approach prioritizes deterministic reliability, auditability, and measurable real-world utility.",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/mahadi24t",
    handle: "mahadi24t"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mahadi24/",
    handle: "mahadi24"
  },
  {
    name: "Email",
    url: "mailto:mahaditm249@gmail.com",
    handle: "mahaditm249@gmail.com"
  }
];

export const resumeConfig = {
  filename: "Mahadi_Hasan_cv.pdf",
  downloadPath: "/Mahadi_Hasan_cv.pdf",
  viewPath: "/Mahadi_Hasan_cv.pdf"
};

export default {
  aboutStats,
  techStack,
  coreCompetencies,
  tabContent,
  socialLinks,
  resumeConfig
};
