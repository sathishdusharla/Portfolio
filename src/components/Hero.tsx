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
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 0.3 } });
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      {/* Video Background */}
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
          <img 
            src="/Copy of laptopwal-2.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-purple-900/60 to-black/85" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-8 pointer-events-none z-10">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Mouse follower effect */}
      <motion.div
        className="fixed w-80 h-80 pointer-events-none z-20 hidden lg:block"
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 40 }}
      >
        <div className="w-full h-full bg-gradient-radial from-purple-500/15 via-pink-500/8 to-transparent rounded-full blur-2xl" />
      </motion.div>

      {/* Main content */}
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-30 relative"
      >
        <div className="text-left">
          {/* Intro badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Code2 size={14} className="text-purple-400" />
            </motion.div>
            <span className="text-purple-300 text-xs sm:text-sm font-medium">Software Engineer & Full Stack Developer</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={10} className="text-pink-400" />
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 leading-tight text-left">
              <motion.span
                className="block text-gray-200 mb-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: 'linear-gradient(45deg, #a855f7, #ec4899, #06b6d4, #a855f7)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold"
                >
                  Sathish Dusharla
                </motion.span>
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-0 leading-relaxed text-left">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-start items-start sm:items-center mb-10"
          >
            <motion.button
              onClick={scrollToAbout}
              className="group relative px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden text-sm sm:text-base shadow-lg shadow-purple-500/25 w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Explore My Work</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown size={16} />
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
              className="group px-4 sm:px-6 py-3 border-2 border-gray-500 rounded-full text-gray-200 font-semibold hover:border-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base backdrop-blur-sm w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex items-center justify-center space-x-2">
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

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-start space-x-4 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 backdrop-blur-sm hover:bg-white/5 ${social.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden md:block"
          >
            <motion.button
              onClick={scrollToAbout}
              className="group flex flex-col items-center space-y-2 text-gray-300 hover:text-white transition-colors duration-300"
              animate={{ y: [0, 8, 0] }}
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