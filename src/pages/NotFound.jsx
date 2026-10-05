import { motion } from "framer-motion";
import { ArrowLeft, Compass, Home, Rocket, Sparkles } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-background via-background/95 to-primary/15 relative overflow-hidden text-foreground">
      {/* Cosmic Nebula Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] animation-delay-2000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container max-w-2xl mx-auto relative z-10 text-center">
        {/* Anomaly Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md"
        >
          <Compass className="h-4 w-4 animate-spin [animation-duration:10s]" />
          SECTOR 404 • NAVIGATION ERROR
        </motion.div>

        {/* 404 Glowing Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative inline-block mb-4"
        >
          <span className="text-8xl sm:text-9xl font-black tracking-tighter bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.35)] select-none">
            404
          </span>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-3 -right-3 text-amber-400 opacity-80"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground"
        >
          Lost in Deep Space
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed"
        >
          The coordinates you are looking for do not exist in this sector. The celestial pathway has drifted into an uncharted void.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 text-sm sm:text-base group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Command Center</span>
            <Rocket className="h-4 w-4 opacity-75" />
          </a>

          <a
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold border border-border bg-card/60 hover:bg-card/90 text-foreground hover:border-primary/40 transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
          >
            <Home className="h-4 w-4 text-primary" />
            <span>Explore Projects</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
