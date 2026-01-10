import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Phone,
  Globe,
  MapPin
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/mahadi24/", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "https://github.com/mahadi24t", label: "GitHub" },
    { icon: <Globe size={18} />, href: "https://mahadih.netlify.app", label: "Portfolio" },
    { icon: <Mail size={18} />, href: "mailto:mahaditm249@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "mahaditm249@gmail.com", href: "mailto:mahaditm249@gmail.com" },
    { icon: <Phone size={16} />, text: "+880 1773-643533", href: "tel:+8801773643533" },
    { icon: <MapPin size={16} />, text: "Dhaka, Bangladesh", href: "#" }
  ];

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden bg-background border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Column (Span 4 columns) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="text-primary font-bold text-xl">M</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight">MAHADI</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              AI Engineer & Web Developer transforming complex data into intelligent, scalable web solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-transparent hover:border-primary/20"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation (Span 2 columns) */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="font-semibold text-foreground mb-5">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Span 3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-foreground mb-5">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-primary/80">
                    {info.icon}
                  </span>
                  <a href={info.href} className="hover:text-foreground transition-colors break-words">
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column (Span 3 columns) */}
          <div className="lg:col-span-3">
            <div className="bg-secondary/5 rounded-2xl p-5 border border-secondary/10">
              <h4 className="font-semibold text-foreground mb-2">Let's Work Together</h4>
              <p className="text-muted-foreground text-xs mb-4">
                Open for research collaborations and AI roles.
              </p>
              <motion.a 
                href="mailto:mahaditm249@gmail.com"
                className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Hire Me
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Md. Mahadi Hasan. All rights reserved.</p>
          
          <motion.a
            href="#hero"
            className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer group px-3 py-1.5 rounded-full hover:bg-secondary/10"
            whileHover={{ y: -2 }}
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};