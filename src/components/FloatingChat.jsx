import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  // YOUR DETAILS
  const phoneNumber = "8801773643533"; // Your number without '+'
  const message = "Hi Mahadi, I visited your portfolio and would like to discuss a project.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* Chat Tooltip/Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white dark:bg-zinc-900 border border-border p-4 rounded-2xl shadow-xl w-64 mb-2 origin-bottom-right"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-sm">Chat with me 👋</h4>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={14} />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              I'm usually active on WhatsApp. Click below to start a chat!
            </p>
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg text-sm font-bold transition-colors"
            >
              <MessageCircle size={16} />
              Open WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all relative group"
      >
        <MessageCircle size={24} />
        
        {/* Notification Dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-background animate-pulse"></span>
      </motion.button>
    </div>
  );
};