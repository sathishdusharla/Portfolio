import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Code2, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900/50 border-t border-gray-800/50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Logo and brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <motion.div
              className="relative w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center overflow-hidden"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Logo content */}
              <div className="relative z-10 flex items-center justify-center">
                <motion.div
                  className="text-white font-bold text-2xl font-jetbrains"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.8)",
                      "0 0 10px rgba(255,255,255,0.5)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  SD
                </motion.div>
                
                {/* Sparkle effect */}
                <motion.div
                  className="absolute top-1 right-1"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles size={10} className="text-white/80" />
                </motion.div>
              </div>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white">Sathish Dusharla</h3>
              <p className="text-gray-400 flex items-center space-x-2">
                <Code2 size={16} />
                <span>Full Stack Developer</span>
              </p>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
          >
            Building the future with code, one innovation at a time. 
            Passionate about creating solutions that make a difference.
          </motion.p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-400 hover:border-purple-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-200" />
            <span className="font-medium">Back to Top</span>
          </motion.button>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800/50 w-full"
          >
            <p className="text-gray-500 text-sm">
              © {currentYear} Sathish Dusharla. Crafted with passion and precision.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;