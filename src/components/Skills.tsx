import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Code, Database, Cloud, Globe, Terminal, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start px-2 sm:px-4"
    >
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="w-full"
      >
        <div className="max-w-2xl sm:max-w-3xl xl:max-w-4xl mx-auto px-2 sm:px-4 xl:px-0 mt-10 sm:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl xs:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight">
              <span className="text-gray-300">Developer </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Arsenal
              </span>
            </h2>
            <p className="text-sm xs:text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
              A comprehensive toolkit of technologies and frameworks I use to build amazing digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glowing background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Card content */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-5 h-full group-hover:border-gray-600 transition-all duration-300">
                  {/* Icon and title */}
                  <div className="flex items-center mb-4 sm:mb-5">
                    <motion.div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-2 sm:mr-3`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">{category.title}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.1) + (skillIndex * 0.05) + 0.3 
                        }}
                        className="px-2 py-0.5 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200 cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 sm:mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { number: "15+", label: "Technologies" },
                { number: "3+", label: "Years Learning" },
                { number: "10+", label: "Projects Built" },
                { number: "100%", label: "Passion" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl xs:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
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