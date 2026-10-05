import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, GraduationCap, FlaskConical, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/experience";

export const ExperienceSection = () => {
  const getExperienceIcon = (role) => {
    if (role.toLowerCase().includes("research")) {
      return <FlaskConical className="h-5 w-5 text-purple-400" />;
    }
    if (role.toLowerCase().includes("teaching")) {
      return <GraduationCap className="h-5 w-5 text-amber-400" />;
    }
    return <Briefcase className="h-5 w-5 text-primary" />;
  };

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden"
    >
      {/* Background Decorative Blur Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" /> CAREER PATHWAY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Professional &amp; Academic{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
          >
            A timeline of high-impact industry engineering, cutting-edge AI research, and academic leadership.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-8 lg:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-purple-500/50 to-primary/20 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-8 lg:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-background border-2 border-primary shadow-lg shadow-primary/20 flex items-center justify-center">
                        {getExperienceIcon(exp.role)}
                      </div>
                      {exp.current && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Spacer for Desktop Alternating Grid */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card Content */}
                  <div
                    className={`w-full sm:pl-16 lg:pl-0 sm:w-full lg:w-1/2 ${
                      isEven ? "lg:pr-12" : "lg:pl-12"
                    }`}
                  >
                    <div className="group relative bg-card/60 hover:bg-card/90 border border-border/80 hover:border-primary/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                      {/* Top Header Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>

                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                            {exp.type}
                          </span>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                              Current
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-5">
                        <span className="font-semibold text-foreground/90">{exp.company}</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" /> {exp.location}
                        </span>
                      </div>

                      {/* Bullet Points */}
                      <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-muted-foreground">
                        {exp.bulletPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="pt-4 border-t border-border/50">
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-md text-xs font-medium bg-background/80 text-foreground/80 border border-border/80 group-hover:border-primary/20 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
