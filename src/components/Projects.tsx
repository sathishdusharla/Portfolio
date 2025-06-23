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
      {/* Ultra dark glass background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-950/90 to-black/95 backdrop-blur-3xl" />
      
      {/* Section divider with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-lg" 
           style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.8))' }} />

      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="w-full relative z-10"
      >
        <div className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 mt-12 mb-16">
          {/* Enhanced heading with ultra glass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-tight">
                <span className="text-gray-300">Featured </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto font-light">
                Explore my latest work showcasing innovative solutions and cutting-edge technologies.
              </p>
            </div>
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
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                {/* Enhanced project card with ultra glass */}
                <div className="relative bg-black/60 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none" />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                    {/* Enhanced project image */}
                    <div className="relative h-56 lg:h-auto overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`} />
                      
                      {/* Enhanced project logo */}
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-xl flex items-center justify-center shadow-2xl border border-white/20">
                        <img
                          src={project.logo}
                          alt={project.title + ' logo'}
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                      
                      {/* Enhanced overlay buttons */}
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center space-x-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200 hover:scale-110 active:scale-95 border border-white/20 shadow-xl"
                        >
                          <Eye size={18} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200 hover:scale-110 active:scale-95 border border-white/20 shadow-xl"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200 hover:scale-110 active:scale-95 border border-white/20 shadow-xl"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Enhanced project content */}
                    <div className="p-5 lg:p-7 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      >
                        <div className="mb-3">
                          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-lg border border-white/20 backdrop-blur-xl`}>
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-base md:text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                          {project.title}
                        </h3>

                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Enhanced tech stack */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-black/40 backdrop-blur-xl border border-white/20 rounded-full text-xs text-gray-300 hover:text-white hover:border-white/40 transition-all duration-200 shadow-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Enhanced action buttons */}
                        <div className="flex space-x-3">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-xl rounded-full text-white font-semibold text-xs hover:from-purple-700/90 hover:to-pink-700/90 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20 shadow-xl"
                          >
                            <Eye size={14} />
                            <span>View</span>
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-5 py-2 bg-black/40 backdrop-blur-xl border border-white/30 rounded-full text-gray-300 font-semibold text-xs hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                          >
                            <Github size={14} />
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

          {/* Enhanced view all button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center mt-10"
          >
            <button className="px-8 py-3 bg-black/40 backdrop-blur-xl border-2 border-purple-500/60 rounded-full text-purple-400 font-semibold text-sm hover:bg-purple-500/20 hover:text-white hover:border-purple-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
              View All Projects
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;