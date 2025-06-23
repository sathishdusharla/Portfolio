import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Instagram, Sparkles, Code2 } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.6 });
  const navigate = useNavigate();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, y: 100, transition: { duration: 0.8 } });
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    navigate('/resume');
  };

  const socialLinks: {
    icon: React.ComponentType<LucideProps>;
    href: string;
    label: string;
    color: string;
  }[] = [
    { icon: Github, href: 'https://github.com/sathishdusharla', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sathishdusharla', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://x.com/thedusharla', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: Instagram, href: 'https://instagram.com/thedusharla', label: 'Instagram', color: 'hover:text-pink-400' },
  ];

  const floatingElements = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 8,
  }));

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start"
    >
      {/* Ultra dark glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-950/90 to-black/95 backdrop-blur-3xl" />
      
      {/* Enhanced floating particles with glow */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            background: `radial-gradient(circle, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.6), rgba(6, 182, 212, 0.4))`,
            boxShadow: `0 0 ${element.size * 3}px rgba(168, 85, 247, 0.5)`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced mouse follower with ultra glow */}
      <motion.div
        className="fixed w-[600px] h-[600px] pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      >
        <div className="w-full h-full bg-gradient-radial from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Main content with ultra glass effect */}
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 z-10 relative"
      >
        {/* Ultra glass container */}
        <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-3xl" />
          
          <div className="text-left relative z-10">
            {/* Enhanced intro badge with ultra glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 mb-8 shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Code2 size={16} className="text-purple-400" />
              </motion.div>
              <span className="text-purple-300 text-sm font-medium">Software Engineer & Full Stack Developer</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={12} className="text-pink-400" />
              </motion.div>
            </motion.div>

            {/* Enhanced main heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-left">
                <motion.span
                  className="block text-gray-200 mb-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      background: 'linear-gradient(45deg, #a855f7, #ec4899, #06b6d4, #10b981, #a855f7)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))',
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold"
                  >
                    Sathish Dusharla
                  </motion.span>
                </motion.span>
              </h1>
            </motion.div>

            {/* Enhanced subtitle with glass background */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-12"
            >
              <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-0 leading-relaxed text-left">
                  A passionate{' '}
                  <motion.span
                    className="text-purple-400 font-semibold"
                    whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(168, 85, 247, 0.8)" }}
                    transition={{ duration: 0.2 }}
                  >
                    Computer Science student
                  </motion.span>{' '}
                  crafting secure, scalable systems with{' '}
                  <motion.span
                    className="text-pink-400 font-semibold"
                    whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(236, 72, 153, 0.8)" }}
                    transition={{ duration: 0.2 }}
                  >
                    AI-powered solutions
                  </motion.span>{' '}
                  and modern technologies.
                </p>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons with ultra glass */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-12"
            >
              <motion.button
                onClick={scrollToAbout}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-xl rounded-full text-white font-semibold overflow-hidden text-base border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Explore My Work</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown size={16} />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-700/90 to-pink-700/90"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={handleResumeClick}
                className="group px-8 py-4 bg-black/60 backdrop-blur-xl border-2 border-white/30 rounded-full text-gray-200 font-semibold hover:border-purple-500/60 hover:text-white transition-all duration-300 text-base shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>View Resume</span>
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown size={16} className="rotate-180" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Enhanced Social Links with ultra glass */}
            <div className="flex justify-start space-x-4 mb-16">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-12 h-12 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} shadow-lg`}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="group flex flex-col items-center space-y-3 text-gray-400 hover:text-white transition-colors duration-300"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 bg-black/60 backdrop-blur-xl border-2 border-white/30 rounded-full flex justify-center group-hover:border-purple-500/60 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 group-hover:shadow-lg transition-all duration-300"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.8))' }}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;