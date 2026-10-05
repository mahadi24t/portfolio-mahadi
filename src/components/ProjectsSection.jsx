import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Github, Star, Code, ArrowRight, ChevronUp, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

// Color mapping for project categories
const categoryColors = {
  "Full-Stack AI": "from-blue-500/20 to-indigo-600/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
  "AI & Automation": "from-cyan-500/20 to-blue-600/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
  "AI & Web": "from-emerald-500/20 to-teal-600/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  "Big Data & ML": "from-indigo-500/20 to-purple-600/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
  "Web App & Analytics": "from-purple-500/20 to-pink-600/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
  "E-commerce": "from-amber-500/20 to-orange-600/20 text-amber-600 dark:text-amber-400 border-amber-500/30"
};

const defaultCategoryColor = "from-primary/20 to-purple-600/20 text-primary border-primary/30";

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      ref={sectionRef}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            FEATURED ENGINEERING
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            High-Impact{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Production-grade systems, AI agent platforms, and distributed big data pipelines built for scale and real-world utility.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25 scale-105"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-card/60 hover:bg-card/90 border border-border hover:border-primary/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/600x400/1e293b/ffffff?text=Project+Preview";
                      }}
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                          project.status === "Live"
                            ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/30"
                            : project.status === "Research"
                            ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                            : "bg-blue-500/20 text-blue-500 border border-blue-500/30"
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                          categoryColors[project.category] || defaultCategoryColor
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Overlay with GitHub Icon */}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <div
                        className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                          hoveredProject === project.id ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full backdrop-blur-sm border bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                          title="View Repository"
                        >
                          <Code size={20} />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-1.5">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold border border-amber-500/20 shrink-0 ml-2">
                          <Star size={12} className="fill-amber-500" />
                          Featured
                        </div>
                      )}
                    </div>

                    {project.subtitle && (
                      <p className="text-xs font-medium text-primary/85 mb-3 leading-normal">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-1.5 mb-4">
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons: Fix Bug #6 (no href="#" anchors) */}
                    <div className="flex gap-3 pt-4 border-t border-border/50 mt-auto">
                      {project.demoUrl && project.demoUrl !== "#" ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
                        >
                          <Eye size={15} />
                          Live Demo
                        </a>
                      ) : (
                        <span
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-muted/60 text-muted-foreground border border-border cursor-not-allowed select-none"
                          title="No public live demo deployed"
                        >
                          <Eye size={15} className="opacity-50" />
                          {project.category.includes("Big Data") || project.category.includes("ML")
                            ? "Research Model"
                            : "No Live Demo"}
                        </span>
                      )}

                      {project.githubUrl && project.githubUrl !== "#" ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-medium border border-border bg-background hover:bg-muted text-foreground hover:border-primary/40 transition-all duration-200"
                        >
                          <Github size={15} />
                          Code
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-medium border border-border bg-muted/60 text-muted-foreground cursor-not-allowed select-none"
                          title="Private repository"
                        >
                          <Github size={15} className="opacity-50" />
                          Code
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Accent Border */}
                  {project.accentColor && (
                    <div className={`h-1 bg-gradient-to-r ${project.accentColor}`} />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button (Only appears if there are hidden projects) */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-medium transition-all duration-300 ${
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
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;