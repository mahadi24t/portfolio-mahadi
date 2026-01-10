import { ArrowRight, ExternalLink, Github, ChevronUp, Star, Code, ChevronDown, MoveRight, Filter, Sparkles, Award, Zap, Play, Eye, Calendar, Users, X } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// CUSTOMIZED: Full Project List based on your input
const projects = [
  {
    id: 1,
    title: "Chef-LLM 🍳",
    category: "AI & Web",
    description: "AI-powered recipe generator that creates delicious recipes based on available ingredients using Perplexity AI.",
    image: "/projects/chef-llm.png", // Rename your screenshot to this
    video: "",
    tags: ["React", "Vite", "Perplexity AI", "Netlify"],
    demoUrl: "https://chef-llm.netlify.app/",
    githubUrl: "https://github.com/mahadi24t/Chef-LLM",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Live",
    highlights: ["AI Integration", "Real-time updates", "Context-aware"]
  },
  {
    id: 2,
    title: "Stock Market Forecasting",
    category: "Big Data & ML",
    description: "Scalable pipeline merging 1.4M news headlines with historical stock data to train a hybrid CNN-LSTM predictive model using Apache Spark.",
    image: "/projects/stock-forecast.png", // Rename your screenshot to this
    video: "",
    tags: ["Apache Spark", "TensorFlow", "CNN-LSTM", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/mahadi24t/stockpriceprediction",
    featured: true,
    accentColor: "from-blue-500 to-cyan-600",
    status: "Research",
    highlights: ["1.4M+ Dataset", "Sentiment Analysis", "Hybrid Model"]
  },
  {
    id: 3,
    title: "React CV Builder",
    category: "Web App",
    description: "Interactive CV/Resume builder allowing users to create professional resumes with real-time previews.",
    image: "/projects/cv-builder.png", // Rename your screenshot to this
    video: "",
    tags: ["React", "Vite", "Real-time Preview"],
    demoUrl: "https://react-cv-builderr.netlify.app/",
    githubUrl: "https://github.com/mahadi24t/react-cv-builder",
    featured: true,
    accentColor: "from-purple-500 to-indigo-600",
    status: "Live",
    highlights: ["Dynamic Form", "Live Preview", "Print to PDF"]
  },
  {
    id: 4,
    title: "Pyramid Tie Collection",
    category: "E-commerce",
    description: "Modern, responsive e-commerce website for a premium tie manufacturer with product listings and contact forms.",
    image: "/projects/pyramid-tie.png", // Rename your screenshot to this
    video: "",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://pyramidbd.netlify.app/",
    githubUrl: "https://github.com/mahadi24t/pyramid-website",
    featured: true,
    accentColor: "from-amber-500 to-orange-600",
    status: "Live",
    highlights: ["Responsive Design", "Product Gallery", "Contact Form"]
  },
  {
    id: 5,
    title: "Higgs Boson PCA",
    category: "Big Data & ML",
    description: "Scalable dimensionality reduction (PCA) on the 11-million-record UCI Higgs dataset using Apache Spark MLlib.",
    image: "/projects/higgs-pca.png", // Rename your screenshot to this
    video: "",
    tags: ["Spark MLlib", "PySpark", "Big Data", "PCA"],
    demoUrl: "#",
    githubUrl: "https://github.com/mahadi24t/openendedbigdata", 
    accentColor: "from-rose-500 to-pink-600",
    status: "Completed",
    highlights: ["11M+ Records", "Feature Engineering", "Scalable ML"]
  },
  {
    id: 6,
    title: "LeadHarvest",
    category: "Web Extension",
    description: "Chrome extension that simplifies lead generation by helping users collect and organize sales leads efficiently.",
    image: "/projects/lead-harvest.png", // Rename your screenshot to this
    video: "",
    tags: ["Chrome Extension", "JavaScript", "DOM Manipulation"],
    demoUrl: "#",
    githubUrl: "https://github.com/mahadi24t/LeadHarvest",
    accentColor: "from-lime-500 to-green-600",
    status: "Published",
    highlights: ["Browser Automation", "Data Collection", "Productivity Tool"]
  },
  {
    id: 7,
    title: "Travel Journal 🌍",
    category: "Web App",
    description: "A beautiful, responsive travel journal that showcases travel experiences with stunning visuals and Google Maps integration.",
    image: "/projects/travel-journal.png", // Rename your screenshot to this
    video: "",
    tags: ["React", "Vite", "Google Maps"],
    demoUrl: "#",
    githubUrl: "https://github.com/mahadi24t/Travel_Journal",
    accentColor: "from-sky-500 to-blue-600",
    status: "Completed",
    highlights: ["Map Integration", "Visual Storytelling", "Responsive"]
  },
  {
    id: 8,
    title: "Blackjack Game",
    category: "Game Dev",
    description: "Interactive Blackjack (21) card game with chip management and dynamic game logic.",
    image: "/projects/blackjack.png", // Rename your screenshot to this
    video: "",
    tags: ["JavaScript", "Game Logic", "CSS3"],
    demoUrl: "#",
    githubUrl: "https://github.com/mahadi24t/BlackjackGame",
    accentColor: "from-red-500 to-rose-600",
    status: "Playable",
    highlights: ["Betting System", "Game Logic", "Dealer AI"]
  }
];

// Color mapping for the categories
const categoryColors = {
  "AI & Web": "from-emerald-500/20 to-teal-600/20 text-emerald-600 border-emerald-500/30",
  "Big Data & ML": "from-blue-500/20 to-cyan-600/20 text-blue-600 border-blue-500/30",
  "Web App": "from-purple-500/20 to-indigo-600/20 text-purple-600 border-purple-500/30",
  "E-commerce": "from-amber-500/20 to-orange-600/20 text-amber-600 border-amber-500/30",
  "Web Extension": "from-lime-500/20 to-green-600/20 text-lime-600 border-lime-500/30",
  "Game Dev": "from-red-500/20 to-rose-600/20 text-red-600 border-red-500/30"
};

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  // Initially show 6 projects, or all if showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
  };

  const ProjectHighlights = ({ highlights }) => (
    <div className="space-y-2">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span className="text-muted-foreground">{highlight}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      ref={sectionRef}
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            My Portfolio
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Recent
            <span className="block text-primary">Projects & Work</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A mix of AI research, full-stack web applications, and data science projects.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {e.target.src = "https://placehold.co/600x400/1e293b/ffffff?text=Project+Image"}} // Fallback if image missing
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                        project.status === "Live" 
                          ? "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30"
                          : "bg-blue-500/20 text-blue-600 border border-blue-500/30"
                      }`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${categoryColors[project.category]}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Overlay with GitHub Icon */}
                    <motion.div 
                      className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    >
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                          project.githubUrl === "#" 
                            ? "bg-gray-500/50 text-gray-300 border-gray-500/30 cursor-not-allowed"
                            : "bg-white/20 text-white border-white/30 hover:bg-white/30"
                        }`}
                        onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                      >
                        <Code size={20} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <motion.div 
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 text-amber-600 text-xs font-medium border border-amber-500/30"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <Star size={12} className="fill-amber-500" /> 
                          Featured
                        </motion.div>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <ProjectHighlights highlights={project.highlights} />
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.4 }}
                          className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                          project.demoUrl === "#"
                            ? "bg-muted text-muted-foreground cursor-not-allowed border border-border"
                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }`}
                        onClick={(e) => project.demoUrl === "#" && e.preventDefault()}
                      >
                        <Eye size={16} />
                        {project.demoUrl === "#" ? "No Demo" : "Live Demo"}
                      </motion.a>
                      
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium border transition-all duration-300 ${
                          project.githubUrl === "#"
                            ? "bg-muted text-muted-foreground cursor-not-allowed border-border"
                            : "bg-background text-foreground border-border hover:border-primary hover:bg-primary/5"
                        }`}
                        onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Accent Border */}
                  <div className={`h-1 bg-gradient-to-r ${project.accentColor}`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button (Only appears if there are hidden projects) */}
        {filteredProjects.length > 6 && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
                showAll
                  ? "bg-muted text-foreground border border-border"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {showAll ? (
                <>
                  <ChevronUp size={18} />
                  Show Less
                </>
              ) : (
                <>
                  View More Projects
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};