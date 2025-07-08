import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, Star, Zap, ChevronRight, Terminal, Database, Globe } from 'lucide-react';

const Preloader: React.FC = () => {
  const [loadingStage, setLoadingStage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stages = [
      { delay: 300, stage: 1 },
      { delay: 800, stage: 2 },
      { delay: 1300, stage: 3 },
      { delay: 1800, stage: 4 },
    ];

    stages.forEach(({ delay, stage }) => {
      setTimeout(() => setLoadingStage(stage), delay);
    });

    // Faster progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 25;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      exit={{ 
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)"
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-purple-950/85 to-black/95" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-25 pointer-events-none z-10">
        <motion.div
          className="absolute inset-0 backdrop-blur-[1px]"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))',
          }}
        />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 3 + 2,
            height: Math.random() * 3 + 2,
            background: `linear-gradient(45deg, rgba(168, 85, 247, ${Math.random() * 0.6 + 0.4}), rgba(236, 72, 153, ${Math.random() * 0.6 + 0.4}))`,
            boxShadow: `0 0 ${Math.random() * 15 + 8}px rgba(168, 85, 247, 0.5)`,
          }}
          animate={{
            y: [0, Math.random() * -80 - 40, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, Math.random() + 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative flex flex-col items-center z-30 px-4">
        {/* Main content container */}
        <motion.div
          className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-2xl border shadow-2xl max-w-md w-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
            borderColor: 'rgba(255,255,255,0.25)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 15px 50px rgba(0, 0, 0, 0.5)',
          }}
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Logo section */}
          <motion.div
            className="relative mb-6 sm:mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(168,85,247,0.9), rgba(236,72,153,0.7))',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 8px 25px rgba(168, 85, 247, 0.5)',
              }}
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 opacity-90"
                style={{
                  background: 'linear-gradient(45deg, #a855f7, #ec4899, #06b6d4, #f59e0b)',
                  backgroundSize: '300% 300%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <motion.div
                className="relative z-10 text-white font-bold text-xl sm:text-2xl"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  textShadow: '0 0 15px rgba(255,255,255,0.6)',
                }}
                animate={{
                  textShadow: [
                    "0 0 15px rgba(255,255,255,0.6)",
                    "0 0 25px rgba(255,255,255,0.9)",
                    "0 0 15px rgba(255,255,255,0.6)"
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                SD
              </motion.div>

              <AnimatePresence>
                {loadingStage >= 1 && (
                  <motion.div
                    className="absolute top-1 right-1"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sparkles size={12} className="text-white/95 drop-shadow-lg" />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl blur-lg opacity-70"
                style={{
                  background: 'linear-gradient(135deg, rgba(168,85,247,0.7), rgba(236,72,153,0.5))',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Welcome content */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-2xl"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              }}
              animate={{
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Welcome to My Portfolio
            </motion.h1>
            
            <AnimatePresence mode="wait">
              <motion.p
                key={loadingStage}
                className="text-base sm:text-lg text-purple-200 font-medium drop-shadow-lg"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {loadingStage === 0 && "Initializing Experience..."}
                {loadingStage === 1 && "Loading Creative Vision..."}
                {loadingStage === 2 && "Preparing Innovations..."}
                {loadingStage === 3 && "Crafting Excellence..."}
                {loadingStage >= 4 && "Ready to Inspire!"}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Loading indicators */}
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {/* Animated dots */}
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(45deg, rgba(168,85,247,0.9), rgba(236,72,153,0.7))',
                    boxShadow: '0 0 12px rgba(168, 85, 247, 0.6)',
                  }}
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-full max-w-xs">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-300 font-medium drop-shadow-lg">Loading</span>
                <span className="text-xs text-purple-300 font-bold drop-shadow-lg">
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
              <div 
                className="w-full h-1.5 rounded-full overflow-hidden backdrop-blur-sm shadow-inner"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
                  border: '1px solid rgba(255,255,255,0.25)',
                }}
              >
                <motion.div
                  className="h-full rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(90deg, rgba(168,85,247,0.95), rgba(236,72,153,0.85), rgba(6,182,212,0.8))',
                    backgroundSize: '200% 100%',
                    boxShadow: '0 0 15px rgba(168, 85, 247, 0.7)',
                  }}
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${Math.min(progress, 100)}%`,
                    backgroundPosition: ['0% 50%', '100% 50%'],
                  }}
                  transition={{ 
                    width: { duration: 0.3, ease: "easeOut" },
                    backgroundPosition: { duration: 1.5, repeat: Infinity, ease: "linear" }
                  }}
                />
              </div>
            </div>

            {/* Status icons */}
            <motion.div
              className="flex space-x-3 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { icon: Terminal, active: loadingStage >= 1 },
                { icon: Database, active: loadingStage >= 2 },
                { icon: Globe, active: loadingStage >= 3 },
                { icon: ChevronRight, active: loadingStage >= 4 },
              ].map(({ icon: Icon, active }, index) => (
                <motion.div
                  key={index}
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
                    ${active ? 'text-white shadow-lg' : 'text-gray-500'}
                  `}
                  style={{
                    background: active 
                      ? 'linear-gradient(135deg, rgba(168,85,247,0.4), rgba(236,72,153,0.3))' 
                      : 'transparent',
                    border: active 
                      ? '1px solid rgba(255,255,255,0.4)' 
                      : '1px solid rgba(255,255,255,0.15)',
                    boxShadow: active 
                      ? '0 0 12px rgba(168, 85, 247, 0.5)' 
                      : 'none',
                  }}
                  animate={active ? {
                    scale: [1, 1.08, 1],
                    rotate: [0, 3, -3, 0]
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: active ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                >
                  <Icon size={12} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer text */}
        <motion.p
          className="text-gray-400 text-xs mt-6 font-medium drop-shadow-lg text-center"
          style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Crafting Digital Excellence Since 2021
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;