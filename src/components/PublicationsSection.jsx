import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ExternalLink, Award, FileText, Check, Copy, Tag, Sparkles } from "lucide-react";
import { publications, publicationTags } from "@/data/publications";

export const PublicationsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  const filteredPublications = useMemo(() => {
    if (selectedTag === "All") return publications;
    return publications.filter((pub) => pub.tags.includes(selectedTag));
  }, [selectedTag]);

  const handleCopyDoi = (id, doi) => {
    navigator.clipboard.writeText(doi);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="publications"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-background via-card/10 to-background overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 backdrop-blur-sm"
          >
            <BookOpen className="h-4 w-4" /> IEEE PUBLICATIONS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Peer-Reviewed{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Research Papers
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
          >
            Original scientific contributions in Natural Language Processing, Multimodal Large Language Models, and Explainable AI.
          </motion.p>

          {/* Research Tags Filter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {["All", ...publicationTags].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105"
                    : "bg-background/80 hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPublications.map((pub, index) => (
              <motion.article
                key={pub.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-card/60 hover:bg-card/90 border border-border hover:border-primary/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Top Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      <Award className="h-3.5 w-3.5" />
                      IEEE Conference Proceeding
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border">
                      {pub.year}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
                    Pages: {pub.pages}
                  </span>
                </div>

                {/* Paper Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {pub.title}
                </h3>

                {/* Venue / Conference */}
                <div className="flex items-start gap-2 text-sm text-foreground/80 font-medium mb-3">
                  <FileText className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{pub.conference}</span>
                </div>

                {/* Authors */}
                <div className="text-xs sm:text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground/70">Authors: </span>
                  {pub.authors.map((author, aIdx) => (
                    <span
                      key={aIdx}
                      className={
                        author.includes("Mahadi")
                          ? "text-primary font-bold underline decoration-primary/40 underline-offset-2"
                          : ""
                      }
                    >
                      {author}
                      {aIdx < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {pub.description}
                </p>

                {/* Bottom Row: Tags & Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/50">
                  {/* Research Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {pub.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        <Tag className="h-3 w-3 opacity-60" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 sm:self-auto self-end">
                    <button
                      onClick={() => handleCopyDoi(pub.id, pub.doi)}
                      title="Copy DOI identifier"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-500" />
                          <span className="text-green-500">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy DOI</span>
                        </>
                      )}
                    </button>

                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 transition-all duration-200 hover:scale-102"
                    >
                      <span>IEEE Xplore</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
