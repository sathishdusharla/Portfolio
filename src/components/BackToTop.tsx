import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-2xl rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group border border-white/20"
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)" 
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={22} className="group-hover:-translate-y-1 transition-transform duration-200" />
          
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/60 to-pink-600/60 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;