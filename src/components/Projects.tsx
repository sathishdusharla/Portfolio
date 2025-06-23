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
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="w-full"
      >
        <div className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 mt-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-tight">
              <span className="text-gray-300">Featured </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto font-light">
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
                {/* Glowing background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Project card */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden group-hover:border-gray-600 transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Project image with logo */}
                    <div className="relative h-56 lg:h-auto overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-50`} />
                      {/* Project logo */}
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shadow border border-gray-700">
                        <img
                          src={project.logo}
                          alt={project.title + ' logo'}
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                      {/* Mobile overlay buttons - always visible on mobile */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110 active:scale-95"
                        >
                          <Eye size={16} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110 active:scale-95"
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110 active:scale-95"
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
                          <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                          {project.title}
                        </h3>

                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3">
                          {project.description}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex space-x-2">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-xs hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 active:scale-95"
                          >
                            <Eye size={13} />
                            <span>View</span>
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-full text-gray-300 font-semibold text-xs hover:border-gray-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
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

          {/* View all projects button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center mt-8"
          >
            <button className="px-6 py-2 border-2 border-purple-500 rounded-full text-purple-400 font-semibold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
              View All Projects
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;