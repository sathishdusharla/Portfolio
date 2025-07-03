import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    title: "BlockvoteX",
    category: "Decentralized Platform",
    description: "A secure and transparent decentralized voting system built to redefine how organizations conduct elections. Features blockchain technology for tamper-proof governance with admin dashboard and real-time results.",
    tech: ["React", "Solidity", "Web3.js", "Node.js", "MongoDB"],
    gradient: "from-blue-500 to-purple-600",
    image: "./BlockvoteXPort.png",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    live: "https://blockvotex.netlify.app/",
    github: "https://github.com/sathishdusharla/BlockvoteX.git"
  },
  {
    title: "NavSight",
    category: "AI-Powered Indoor Navigation",
    description: "An AI-powered indoor navigation solution designed to empower visually impaired individuals with real-time voice guidance and obstacle recognition using computer vision and machine learning.",
    tech: ["Python", "OpenCV", "Django", "AI", "Computer Vision"],
    gradient: "from-green-500 to-teal-600",
    image: "./NavSightPort.png",
    logo: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    live: "https://www.jetir.org/view?paper=JETIR2505010",
    github: "https://github.com/sathishdusharla/NavSight.git"
  },
  {
    title: "StegaVault",
    category: "Steganography Security System",
    description: "A steganography-based secure communication system that leverages DCT algorithm to embed encrypted messages within digital images for undetectable transmission of sensitive information.",
    tech: ["Python", "Django", "DCT Algorithm", "Cryptography"],
    gradient: "from-purple-500 to-pink-600",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    logo: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    live: "https://github.com/sathishdusharla/StegaVault.git",
    github: "https://github.com/sathishdusharla/StegaVault.git"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, y: 100, transition: { duration: 0.8 } });
    }
  }, [isInView, controls]);

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start"
    >
      {/* Video Background with responsive sizing */}
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
          <source src="/src/assets/hero-background.webm" type="video/webm" />
          {/* Fallback image for browsers that don't support video */}
          <img 
            src="/Copy of laptopwal-2.png" 
            alt="Projects Background" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Dark overlay for premium look - reduced opacity for better background visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-950/60 to-black/80" />
        
        {/* Additional overlay for all devices - reduced opacity */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Glossy overlay effect - slightly reduced */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/5 to-black/15" />
      </div>

      {/* Enhanced glossy animated background grid - increased visibility */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        <div
          className="absolute inset-0 backdrop-blur-[1px]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))',
          }}
        />
      </div>

      {/* Section divider with enhanced glow */}
      <div className="absolute -top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent drop-shadow-lg z-20" />

      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="w-full z-30 relative"
      >
        <div className="max-w-2xl sm:max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 mt-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-tight drop-shadow-2xl">
              <span className="text-gray-100 drop-shadow-lg">Featured </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))' }}>
                Projects
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto font-light drop-shadow-lg">
              Explore my latest work showcasing innovative solutions and cutting-edge technologies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-7">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Enhanced glowing background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                     style={{ filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))' }} />

                {/* Project card with glass morphism */}
                <div className="relative bg-black/30 backdrop-blur-md border border-gray-400/30 rounded-2xl overflow-hidden group-hover:border-gray-300/40 transition-all duration-500 shadow-2xl"
                     style={{ 
                       background: 'rgba(0, 0, 0, 0.4)',
                       backdropFilter: 'blur(20px)',
                       boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)'
                     }}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Project image with logo */}
                    <div className="relative h-56 lg:h-auto overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-50`} />
                      {/* Project logo with enhanced styling */}
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-md"
                           style={{ 
                             background: 'rgba(0, 0, 0, 0.2)',
                             backdropFilter: 'blur(15px)',
                             boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2)'
                           }}>
                        <img
                          src={project.logo}
                          alt={project.title + ' logo'}
                          className="w-7 h-7 object-contain drop-shadow-sm"
                        />
                      </div>
                      {/* Enhanced overlay buttons */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
                          style={{ 
                            backdropFilter: 'blur(15px)',
                            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2)'
                          }}
                        >
                          <Eye size={16} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
                          style={{ 
                            backdropFilter: 'blur(15px)',
                            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2)'
                          }}
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
                          style={{ 
                            backdropFilter: 'blur(15px)',
                            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2)'
                          }}
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    {/* Project content */}
                    <div className="p-5 lg:p-7 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      >
                        <div className="mb-2">
                          <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-lg drop-shadow-sm`}
                                style={{ 
                                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 4px 16px rgba(168, 85, 247, 0.4)'
                                }}>
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-base md:text-lg font-bold text-gray-100 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 drop-shadow-md">
                          {project.title}
                        </h3>

                        <p className="text-gray-100 text-xs md:text-sm leading-relaxed mb-3 drop-shadow-sm">
                          {project.description}
                        </p>

                        {/* Enhanced tech stack */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-black/20 border border-gray-400/30 rounded-full text-xs text-gray-200 hover:text-white hover:border-gray-300/50 transition-all duration-200 backdrop-blur-sm shadow-lg"
                              style={{ 
                                background: 'rgba(0, 0, 0, 0.2)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.2)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Enhanced action buttons */}
                        <div className="flex space-x-2">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-xs hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl backdrop-blur-md"
                            style={{ 
                              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 8px 32px rgba(168, 85, 247, 0.4)'
                            }}
                          >
                            <Eye size={13} />
                            <span>View</span>
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 border border-gray-400/50 rounded-full text-gray-100 font-semibold text-xs hover:border-gray-300/70 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md shadow-lg"
                            style={{ 
                              background: 'rgba(0, 0, 0, 0.2)',
                              backdropFilter: 'blur(15px)',
                              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2)'
                            }}
                          >
                            <Github size={13} />
                            <span>Code</span>
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced view all projects button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center mt-8"
          >
            <button className="px-6 py-2 border-2 border-purple-400/60 rounded-full text-purple-200 font-semibold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md shadow-lg"
                    style={{ 
                      background: 'rgba(0, 0, 0, 0.2)',
                      backdropFilter: 'blur(15px)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2)'
                    }}>
              View All Projects
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;