/**
 * Experience Data Module
 * Professional work experience, research appointments, and academic leadership.
 */

export const experiences = [
  {
    id: "exp-1",
    role: "Associate Business Intelligence Analyst",
    company: "CS Meta Limited",
    location: "Dhaka, Bangladesh",
    period: "Jan 2026 - Present",
    type: "Full-time",
    current: true,
    bulletPoints: [
      "Architected and maintained corporate web infrastructure ensuring high performance, fault tolerance, and seamless user experiences.",
      "Spearheaded the technical launch of 3 new business verticals, translating complex operational data into actionable strategic analytics.",
      "Engineered an LLM-driven pitch evaluation platform to automate scoring, synthesis, and quantitative feedback generation."
    ],
    technologies: ["Business Intelligence", "Web Infrastructure", "LLMs", "Data Analytics", "Full-Stack Development"]
  },
  {
    id: "exp-2",
    role: "Research Assistant",
    company: "Vector Research Lab",
    location: "Dhaka, Bangladesh",
    period: "Mar 2026 - Present",
    type: "Part-time",
    current: true,
    bulletPoints: [
      "Engineered LLM & NLP pipelines specialized in multimodal misinformation detection, active learning, and benchmark evaluations.",
      "Maintained and optimized scalable machine learning codebases utilizing PyTorch, Hugging Face Transformers, and distributed workflows.",
      "Co-authored peer-reviewed academic papers submitted and published across premier IEEE international conferences."
    ],
    technologies: ["LLMs", "NLP", "PyTorch", "Multimodal AI", "Explainable AI", "Active Learning"]
  },
  {
    id: "exp-3",
    role: "Teaching Assistant",
    company: "Department of CSE, ULAB",
    location: "Dhaka, Bangladesh",
    period: "Sep 2023 - Mar 2024",
    type: "Part-time",
    current: false,
    bulletPoints: [
      "Supported faculty in comprehensive coursework delivery across fundamental and advanced Computer Science and Engineering courses.",
      "Provided personalized technical mentoring, hands-on laboratory guidance, and algorithmic problem-solving sessions for 100+ students.",
      "Managed continuous academic grading pipelines, code reviews, assignment evaluations, and rigorous examination invigilation."
    ],
    technologies: ["Pedagogy", "Mentoring", "C++ / Python", "Data Structures & Algorithms", "Academic Evaluation"]
  }
];

export default experiences;
