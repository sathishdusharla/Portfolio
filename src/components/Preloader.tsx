import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, Star, Zap, ChevronRight } from 'lucide-react';

const Preloader: React.FC = () => {
  const [loadingStage, setLoadingStage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stages = [
      { delay: 500, stage: 1 },
      { delay: 1200, stage: 2 },
      { delay: 2000, stage: 3 },
      { delay: 2800, stage: 4 },
    ];

    stages.forEach(({ delay, stage }) => {
      setTimeout(() => setLoadingStage(stage), delay);
    });

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      exit={{ 
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)"
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/webanimation.mp4" type="video/mp4" />
          <img 
            src="/Copy of laptopwal-2.png" 
            alt="Loading Background" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Premium dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-950/80 to-black/90" />
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.01]" />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
        <motion.div
          className="absolute inset-0 backdrop-blur-[1px]"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.3))',
          }}
        />
      </div>

      {/* Floating particles with enhanced design */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: `linear-gradient(45deg, rgba(168, 85, 247, ${Math.random() * 0.5 + 0.3}), rgba(236, 72, 153, ${Math.random() * 0.5 + 0.3}))`,
            boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(168, 85, 247, 0.4)`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, Math.random() + 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative flex flex-col items-center z-30">
        {/* Main content container with glassmorphism */}
        <motion.div
          className="relative p-12 rounded-3xl backdrop-blur-2xl border shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            borderColor: 'rgba(255,255,255,0.2)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 20px 60px rgba(0, 0, 0, 0.4)',
          }}
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Enhanced logo section */}
          <motion.div
            className="relative mb-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            {/* Logo container with enhanced glassmorphism */}
            <motion.div
              className="relative w-24 h-24 mx-auto rounded-2xl flex items-center justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(168,85,247,0.8), rgba(236,72,153,0.6))',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 10px 30px rgba(168, 85, 247, 0.4)',
              }}
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-80"
                style={{
                  background: 'linear-gradient(45deg, #a855f7, #ec4899, #06b6d4, #f59e0b)',
                  backgroundSize: '400% 400%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Logo text */}
              <motion.div
                className="relative z-10 text-white font-bold text-3xl"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  textShadow: '0 0 20px rgba(255,255,255,0.5)',
                }}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 30px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)"
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

              {/* Dynamic sparkle effects */}
              <AnimatePresence>
                {loadingStage >= 1 && (
                  <motion.div
                    className="absolute top-1 right-1"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sparkles size={14} className="text-white/90 drop-shadow-lg" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-xl opacity-60"
                style={{
                  background: 'linear-gradient(135deg, rgba(168,85,247,0.6), rgba(236,72,153,0.4))',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Welcome content */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-2xl"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              }}
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Welcome to My Portfolio
            </motion.h1>
            
            <AnimatePresence mode="wait">
              <motion.p
                key={loadingStage}
                className="text-lg text-purple-200 font-medium drop-shadow-lg"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {loadingStage === 0 && "Initializing Experience..."}
                {loadingStage === 1 && "Loading Creative Vision..."}
                {loadingStage === 2 && "Preparing Innovations..."}
                {loadingStage === 3 && "Crafting Excellence..."}
                {loadingStage >= 4 && "Ready to Inspire!"}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Enhanced loading indicators */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {/* Animated dots */}
            <div className="flex space-x-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(45deg, rgba(168,85,247,0.8), rgba(236,72,153,0.6))',
                    boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)',
                  }}
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-80 max-w-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300 font-medium drop-shadow-lg">Loading</span>
                <span className="text-sm text-purple-300 font-bold drop-shadow-lg">
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
              <div 
                className="w-full h-2 rounded-full overflow-hidden backdrop-blur-sm shadow-inner"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <motion.div
                  className="h-full rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(90deg, rgba(168,85,247,0.9), rgba(236,72,153,0.8), rgba(6,182,212,0.7))',
                    backgroundSize: '200% 100%',
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
                  }}
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${Math.min(progress, 100)}%`,
                    backgroundPosition: ['0% 50%', '100% 50%'],
                  }}
                  transition={{ 
                    width: { duration: 0.5, ease: "easeOut" },
                    backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
                  }}
                />
              </div>
            </div>

            {/* Status icons */}
            <motion.div
              className="flex space-x-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              {[
                { icon: Code2, active: loadingStage >= 1 },
                { icon: Star, active: loadingStage >= 2 },
                { icon: Zap, active: loadingStage >= 3 },
                { icon: ChevronRight, active: loadingStage >= 4 },
              ].map(({ icon: Icon, active }, index) => (
                <motion.div
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500
                    ${active ? 'text-white shadow-lg' : 'text-gray-500'}
                  `}
                  style={{
                    background: active 
                      ? 'linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.2))' 
                      : 'transparent',
                    border: active 
                      ? '1px solid rgba(255,255,255,0.3)' 
                      : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: active 
                      ? '0 0 15px rgba(168, 85, 247, 0.4)' 
                      : 'none',
                  }}
                  animate={active ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: active ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                >
                  <Icon size={16} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer text */}
        <motion.p
          className="text-gray-400 text-sm mt-8 font-medium drop-shadow-lg"
          style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          Crafting Digital Excellence Since 2021
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;