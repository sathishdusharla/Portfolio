import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Code, Database, Cloud, Globe, Terminal, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.4 } });
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      controls.start({ opacity: 0, y: 30, transition: { duration: 0.3 } });
      setHasAnimated(false);
    }
  }, [isInView, controls, hasAnimated]);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: Terminal,
      skills: ["Python", "Java", "Go", "Node.js", "Django", "Express.js"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Oracle SQL", "PostgreSQL"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "CI/CD", "Linux", "Shell Scripting"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "Java", "C++", "C", "Go", "JavaScript"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Tools & Others",
      icon: Cpu,
      skills: ["Git", "VS Code", "IntelliJ IDEA", "Postman", "Figma"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start"
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
            alt="Skills Background" 
            className="w-full h-full object-cover"
          />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-950/60 to-black/80" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/5 to-black/15" />
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
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
              linear-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))',
          }}
        />
      </div>

      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 30 }}
        className="w-full z-30 relative"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight drop-shadow-2xl">
              <span className="text-gray-100 drop-shadow-lg">Developer </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))' }}>
                Arsenal
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto font-light drop-shadow-lg">
              A comprehensive toolkit of technologies and frameworks I use to build amazing digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300`}
                     style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))' }} />
                
                <div className="relative bg-black/30 backdrop-blur-md border border-gray-400/30 rounded-2xl p-4 sm:p-5 h-full group-hover:border-gray-300/40 transition-all duration-300 shadow-2xl"
                     style={{ 
                       background: 'rgba(0, 0, 0, 0.4)',
                       backdropFilter: 'blur(20px)',
                       boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)'
                     }}>
                  <div className="flex items-center mb-4 sm:mb-5">
                    <motion.div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-2 sm:mr-3 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      style={{ 
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 4px 16px rgba(168, 85, 247, 0.4)'
                      }}
                    >
                      <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-sm" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-100 drop-shadow-md">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, x: skillIndex % 2 === 0 ? -15 : 15 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: skillIndex % 2 === 0 ? -15 : 15 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.05) + (skillIndex * 0.03) + 0.1 
                        }}
                        className="px-2 py-0.5 bg-black/20 border border-gray-400/30 rounded-full text-xs text-gray-200 hover:text-white hover:border-gray-300/50 transition-all duration-200 cursor-default backdrop-blur-sm shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        style={{ 
                          background: 'rgba(0, 0, 0, 0.2)',
                          backdropFilter: 'blur(10px)',
                          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.2)'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-10 sm:mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                { number: "15+", label: "Technologies" },
                { number: "3+", label: "Years Learning" },
                { number: "10+", label: "Projects Built" },
                { number: "100%", label: "Passion" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  className="text-center bg-black/20 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-gray-400/20 shadow-lg"
                  style={{ 
                    background: 'rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(15px)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 drop-shadow-lg"
                       style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))' }}>
                    {stat.number}
                  </div>
                  <div className="text-gray-200 text-xs sm:text-sm drop-shadow-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;