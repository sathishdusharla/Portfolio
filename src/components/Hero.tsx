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

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating particles */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mouse follower effect */}
      <motion.div
        className="fixed w-96 h-96 pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      >
        <div className="w-full h-full bg-gradient-radial from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Main content with entrance/exit animation */}
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 z-10 relative"
      >
        <div className="text-left">
          {/* Animated intro badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-5 py-1.5 mb-7"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code2 size={14} className="text-purple-400" />
            </motion.div>
            <span className="text-purple-400 text-xs font-medium">Software Engineer & Full Stack Developer</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={10} className="text-pink-400" />
            </motion.div>
          </motion.div>

          {/* Main heading with advanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight text-left">
              <motion.span
                className="block text-gray-300 mb-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: 'linear-gradient(45deg, #a855f7, #ec4899, #06b6d4, #a855f7)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  className="text-4xl md:text-6xl lg:text-7xl font-extrabold"
                >
                  Sathish Dusharla
                </motion.span>
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-10"
          >
            <p className="text-base md:text-xl text-gray-400 max-w-4xl mx-0 leading-relaxed text-left">
              A passionate{' '}
              <motion.span
                className="text-purple-400 font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Computer Science student
              </motion.span>{' '}
              crafting secure, scalable systems with{' '}
              <motion.span
                className="text-pink-400 font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                AI-powered solutions
              </motion.span>{' '}
              and modern technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-start items-center mb-12"
          >
            <motion.button
              onClick={scrollToAbout}
              className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore My Work</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown size={14} />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={handleResumeClick}
              className="group px-6 py-3 border-2 border-gray-600 rounded-full text-gray-300 font-semibold hover:border-purple-500 hover:text-white transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <span>View Resume</span>
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown size={14} className="rotate-180" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>

          {/* Social Links with color on hover */}
          <div className="flex justify-start space-x-4 mb-14">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          {/* Scroll indicator with enhanced animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-medium">Scroll to explore</span>
              <motion.div
                className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-purple-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2 group-hover:bg-purple-400 transition-colors duration-300"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;