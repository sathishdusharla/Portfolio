import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Instagram, Sparkles, Code2 } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  // Handle video playback
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
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

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start hero-section"
    >
      {/* Video Background with responsive sizing */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover hero-video-responsive"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/webanimation.mp4" type="video/mp4" />
          <source src="/src/assets/hero-background.webm" type="video/webm" />
          {/* Fallback image for browsers that don't support video */}
          <img 
            src="/Copy of laptopwal-2.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Dark overlay for better text readability - Much darker */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-purple-900/60 to-black/85" />
        
        {/* Additional heavy overlay for all devices */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Subtle animated background grid (reduced opacity) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Subtle mouse follower effect (reduced opacity) */}
      <motion.div
        className="fixed w-96 h-96 pointer-events-none z-20"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      >
        <div className="w-full h-full bg-gradient-radial from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Main content with entrance/exit animation */}
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 z-30 relative"
      >
        <div className="text-left">
          {/* Animated intro badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-500/30 rounded-full px-5 py-1.5 mb-7 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code2 size={14} className="text-purple-400" />
            </motion.div>
            <span className="text-purple-300 text-xs font-medium">Software Engineer & Full Stack Developer</span>
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
                className="block text-gray-200 mb-1"
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
            <p className="text-base md:text-xl text-gray-300 max-w-4xl mx-0 leading-relaxed text-left">
              A passionate{' '}
              <motion.span
                className="text-purple-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Computer Science student
              </motion.span>{' '}
              crafting secure, scalable systems with{' '}
              <motion.span
                className="text-pink-300 font-semibold"
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
            className="flex flex-row gap-3 justify-start items-center mb-12"
          >
            <motion.button
              onClick={scrollToAbout}
              className="group relative px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden text-xs sm:text-sm shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-1 sm:space-x-2">
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
              className="group px-4 sm:px-6 py-3 border-2 border-gray-500 rounded-full text-gray-200 font-semibold hover:border-purple-400 hover:text-white transition-all duration-300 text-xs sm:text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-1 sm:space-x-2">
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
                className={`group w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 backdrop-blur-sm hover:bg-white/5 ${social.color}`}
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
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          >
            <motion.button
              onClick={scrollToAbout}
              className="group flex flex-col items-center space-y-2 text-gray-300 hover:text-white transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-medium">Scroll to explore</span>
              <motion.div
                className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center group-hover:border-purple-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-1 h-3 bg-gray-300 rounded-full mt-2 group-hover:bg-purple-400 transition-colors duration-300"
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