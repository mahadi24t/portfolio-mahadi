import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Phone,
  Globe,
  MapPin,
  Copy
} from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/mahadi24/", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/mahadi24t", label: "GitHub" },
    { icon: <Globe size={20} />, href: "https://mahadih.netlify.app", label: "Portfolio" },
    { icon: <Mail size={20} />, href: "mailto:mahaditm249@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: text,
      className: "bg-background border-border text-foreground"
    });
  };

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden bg-background border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-12 mb-20">
          
          {/* 1. Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="text-primary font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight leading-none">Mahadi Hasan</h3>

              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Transforming complex data into intelligent, scalable web solutions. Specialized in LLMs, RAG, and Modern Web Engineering.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Navigation (Span 2) */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info (Span 3) - PRECISE & CLEAN */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-4">
              
              {/* Email Item */}
              <div className="flex items-center gap-4 p-2 -ml-2 rounded-lg hover:bg-secondary/10 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <button 
                    onClick={() => handleCopy("mahaditm249@gmail.com")}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left truncate block w-full"
                  >
                    mahaditm249@gmail.com
                  </button>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-center gap-4 p-2 -ml-2 rounded-lg hover:bg-secondary/10 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                 
                  <a href="tel:+8801773643533" className="text-sm font-medium text-foreground hover:text-primary transition-colors block">
                    +880 1773-643533
                  </a>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-center gap-4 p-2 -ml-2 rounded-lg hover:bg-secondary/10 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  
                  <span className="text-sm font-medium text-foreground block">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* 4. CTA Column (Span 3) */}
          <div className="lg:col-span-3">
            <div className="bg-secondary/5 rounded-2xl p-6 border border-border/50 h-full flex flex-col justify-between hover:border-primary/20 transition-colors duration-300">
              <div>
                <h4 className="font-bold text-foreground mb-3">Let's Collaborate</h4>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                  Available for full-time roles and research partnerships in AI & Web Engineering.
                </p>
              </div>
              <motion.a 
                href="mailto:mahaditm249@gmail.com"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                whileTap={{ scale: 0.98 }}
              >
                Hire Me
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="font-medium">© {currentYear} Md. Mahadi Hasan. All rights reserved.</p>
          
          <motion.a
            href="#hero"
            className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer px-4 py-2 rounded-full bg-secondary/5 hover:bg-secondary/10"
            whileHover={{ y: -2 }}
          >
            Back to Top
            <ArrowUp size={14} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};