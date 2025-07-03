import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const experiences = [
  {
    company: "Accelchain",
    logo: "/accelchain_logo.jpeg",
    position: "Blockchain Development Intern",
    duration: "Nov 2024 – Jan 2025",
    location: "Remote",
    type: "Internship",
    description:
      "Built AuctionX, a decentralized auction website leveraging blockchain technology. Led smart contract development, deployed secure workflows for real-time bids, and collaborated with a cross-functional team focused on security and scalability.",
    achievements: [
      "Developed AuctionX, a decentralized auction website using Solidity and blockchain",
      "Deployed secure smart contracts and tested real-time bidding workflows",
      "Collaborated in a cross-functional team focused on security and scalability"
    ],
    technologies: ["Solidity", "Web3.js", "React", "Node.js", "Blockchain"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "Blockchain Club",
    logo: "/Blockchain_Club_LOGO.png",
    position: "Design Team Lead",
    duration: "2024 - Present",
    location: "Anurag University",
    type: "Leadership",
    description: "Leading the design team for university's blockchain club. Responsible for creating visual content, managing design projects, and mentoring team members.",
    achievements: [
      "Led a team of 8 designers",
      "Increased club engagement by 150%",
      "Organized 5+ blockchain workshops"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Branding"],
    color: "from-purple-500 to-pink-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
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
      id="experience"
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
            alt="Experience Background" 
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

      {/* Section divider line at the top with enhanced glow */}
      <div className="absolute -top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent drop-shadow-lg z-20" />

      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="w-full z-30 relative"
      >
        <div className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 mt-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/25 to-pink-500/25 border border-purple-400/40 rounded-full px-4 py-1 mb-3 backdrop-blur-md shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              style={{ 
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                backdropFilter: 'blur(20px)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(168, 85, 247, 0.3)'
              }}
            >
              <TrendingUp size={14} className="text-purple-400" />
              <span className="text-purple-200 text-xs font-medium drop-shadow-sm">Professional Journey</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-2 drop-shadow-2xl">
              <span className="text-gray-100 drop-shadow-lg">Work </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))' }}>
                Experience
              </span>
            </h2>
            <p className="text-base text-gray-200 max-w-xl mx-auto font-light drop-shadow-lg">
              My professional journey through internships, leadership roles, and hands-on experience in cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-6 lg:gap-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-16 w-0.5 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                  />
                )}

                {/* Experience card with glass morphism */}
                <motion.div
                  className="relative bg-black/30 backdrop-blur-md border border-gray-400/30 rounded-2xl p-4 pl-20 hover:border-gray-300/40 transition-all duration-500 shadow-2xl"
                  whileHover={{ 
                    scale: 1.01,
                    y: -2,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ 
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {/* Logo with white background */}
                  <div className="absolute left-4 top-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-white overflow-hidden"
                       style={{ 
                         background: 'rgba(255, 255, 255, 1)',
                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                       }}>
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  {/* Enhanced glowing background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                       style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))' }} />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                      <div className="flex items-start space-x-3">
                        {/* Timeline dot */}
                        <motion.div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} mt-1 flex-shrink-0 shadow-lg`}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                          style={{ 
                            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 4px 16px rgba(168, 85, 247, 0.4)'
                          }}
                        />

                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-base md:text-lg font-bold text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 drop-shadow-md">
                              {exp.position}
                            </h3>
                            <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full bg-gradient-to-r ${exp.color} text-white shadow-lg`}
                                  style={{ 
                                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 4px 16px rgba(168, 85, 247, 0.4)'
                                  }}>
                              {exp.type}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-3 text-gray-200 mb-2">
                            <div className="flex items-center space-x-1">
                              <Award size={13} className="drop-shadow-sm" />
                              <span className="font-medium text-purple-200 text-xs drop-shadow-sm">{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={13} className="drop-shadow-sm" />
                              <span className="text-xs drop-shadow-sm">{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={13} className="drop-shadow-sm" />
                              <span className="text-xs drop-shadow-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-100 text-xs md:text-sm leading-relaxed mb-3 drop-shadow-sm">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-3">
                      <h4 className="text-sm md:text-base font-semibold text-gray-100 mb-2 drop-shadow-sm">Key Achievements</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start space-x-2 text-gray-100 text-xs md:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.07 + 0.5 }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-1 flex-shrink-0 shadow-sm`} />
                            <span className="drop-shadow-sm">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    {/* Technologies with glass morphism */}
                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-gray-100 mb-2 drop-shadow-sm">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-2 py-0.5 bg-black/20 border border-gray-400/30 rounded-full text-xs text-gray-200 hover:text-white hover:border-gray-300/50 transition-all duration-200 backdrop-blur-sm shadow-lg"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.2 + techIndex * 0.03 + 0.7 }}
                            whileHover={{ scale: 1.05 }}
                            style={{ 
                              background: 'rgba(0, 0, 0, 0.2)',
                              backdropFilter: 'blur(10px)',
                              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.2)'
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          {/* Section divider line at the bottom with spacing and enhanced glow */}
          <div className="mt-10 sm:mt-14">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent drop-shadow-lg z-20" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Experience;