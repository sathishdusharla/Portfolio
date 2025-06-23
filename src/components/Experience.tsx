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
      {/* Section divider line at the top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent z-20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="w-full"
      >
        <div className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 mt-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-1 mb-3"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <TrendingUp size={14} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-medium">Professional Journey</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-2">
              <span className="text-gray-300">Work </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto font-light">
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

                {/* Experience card */}
                <motion.div
                  className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 pl-20 hover:border-gray-600/50 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.01,
                    y: -2,
                    boxShadow: "0 8px 24px -8px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Logo - match education section: circle, border, shadow, bg-white */}
                  <div className="absolute left-4 top-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-300 overflow-hidden">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  {/* Glowing background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                      <div className="flex items-start space-x-3">
                        {/* Timeline dot */}
                        <motion.div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} mt-1 flex-shrink-0`}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                        />

                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-base md:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                              {exp.position}
                            </h3>
                            <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                              {exp.type}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-3 text-gray-400 mb-2">
                            <div className="flex items-center space-x-1">
                              <Award size={13} />
                              <span className="font-medium text-purple-400 text-xs">{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={13} />
                              <span className="text-xs">{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={13} />
                              <span className="text-xs">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-3">
                      <h4 className="text-sm md:text-base font-semibold text-white mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start space-x-2 text-gray-300 text-xs md:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.07 + 0.5 }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-1 flex-shrink-0`} />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-white mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-2 py-0.5 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.2 + techIndex * 0.03 + 0.7 }}
                            whileHover={{ scale: 1.05 }}
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
          {/* Section divider line at the bottom with spacing */}
          <div className="mt-10 sm:mt-14">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent z-20" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Experience;