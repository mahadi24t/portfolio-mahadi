import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images (Keeping original imports to avoid errors)
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import sassIcon from "@/assets/icons/saas.png";
import jsIcon from "@/assets/icons/javascript.png";
import tsIcon from "@/assets/icons/typescript.png";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/nextjs.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressIcon from "@/assets/icons/express.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import graphqlIcon from "@/assets/icons/graphql.png";
import javaIcon from "@/assets/icons/java.png";
import pythonIcon from "@/assets/icons/python.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import dockerIcon from "@/assets/icons/docker.png";
import firebaseIcon from "@/assets/icons/firebase.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import clearkIcon from "@/assets/icons/cleark.png";
import SQLIcon from "@/assets/icons/sql.png";
import MySQLIcon from "@/assets/icons/mysql.png";

// CUSTOMIZED: Skills from your CV
const skills = [
  // AI & Data (Your Core Strength)
  { name: "Python", level: 95, category: "ai", icon: "python" },
  { name: "Deep Learning", level: 90, category: "ai", icon: "python" }, // Using Python icon as generic AI
  { name: "LLMs & RAG", level: 85, category: "ai", icon: "python" },
  { name: "NLP", level: 90, category: "ai", icon: "python" },
  { name: "SQL", level: 85, category: "ai", icon: "sql" },
  { name: "Big Data (Spark)", level: 80, category: "ai", icon: "postgresql" }, // Using DB icon for Data

  // Frontend
  { name: "React", level: 90, category: "frontend", icon: "react" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
  { name: "Next.js", level: 80, category: "frontend", icon: "nextjs" },
  { name: "HTML5", level: 95, category: "frontend", icon: "html" },
  { name: "CSS3", level: 90, category: "frontend", icon: "css" },
  { name: "Tailwind", level: 85, category: "frontend", icon: "css" }, // Using CSS icon

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "nodejs" },
  { name: "Express", level: 80, category: "backend", icon: "express" },
  { name: "MongoDB", level: 85, category: "backend", icon: "mongodb" },
  { name: "Java", level: 70, category: "backend", icon: "java" },
  { name: "MySQL", level: 80, category: "backend", icon: "mysql" },

  // Tools
  { name: "Git", level: 90, category: "tools", icon: "git" },
  { name: "GitHub", level: 95, category: "tools", icon: "github" },
  { name: "Docker", level: 75, category: "tools", icon: "docker" },
  { name: "VS Code", level: 95, category: "tools", icon: "vscode" },
];

const categories = [
  { id: "all", label: "All Skills", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { id: "ai", label: "AI & Data Science", color: "bg-gradient-to-r from-indigo-500 to-violet-500" },
  { id: "frontend", label: "Frontend", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { id: "tools", label: "Tools", color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
];

const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  sass: sassIcon,
  javascript: jsIcon,
  typescript: tsIcon,
  react: reactIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  express: expressIcon,
  mongodb: mongodbIcon,
  postgresql: postgresqlIcon,
  graphql: graphqlIcon,
  java: javaIcon,
  python: pythonIcon,
  git: gitIcon,
  github: githubIcon,
  docker: dockerIcon,
  firebase: firebaseIcon,
  vscode: vscodeIcon,
  cleark: clearkIcon,
  sql: SQLIcon,
  mysql: MySQLIcon,
};

const SkillBar = ({ level }) => (
  <div className="w-full h-3 bg-secondary/20 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className={`h-full rounded-full ${
        level > 85 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 
        level > 70 ? 'bg-gradient-to-r from-blue-400 to-cyan-500' : 
        'bg-gradient-to-r from-yellow-400 to-orange-500'
      }`}
    />
  </div>
);

const InfiniteScrollSkills = ({ skills }) => {
  const duplicatedSkills = [...skills, ...skills];
  
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-8 mb-8"
        animate={{ x: ["0%", "-50%"] }} // Adjusted for smoother loop
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="flex-shrink-0 flex flex-col items-center gap-2 min-w-[80px]">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <img src={iconImages[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(skill => 
    activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-4 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My proficiency in AI, Data Science, and Full Stack Development.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium border border-transparent hover:shadow-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-md scale-105`
                  : "bg-secondary/50 text-foreground hover:bg-secondary/70"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {activeCategory === "all" ? (
          <InfiniteScrollSkills skills={skills} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-card p-6 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <img src={iconImages[skill.icon]} alt={skill.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};