import React, { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Anurag University",
    institutionUrl: "https://anurag.edu.in/",
    logo: "/anuraguvert.jpeg",
    duration: "2023 – Present",
    score: "9.15 CGPA (up to Semester 4)",
    description:
      "Gaining a strong foundation in computer science and engineering by building real-world projects, mastering algorithms, and developing scalable systems. Actively involved in coding, research, and technical communities.",
  },
  {
    degree: "Board of Intermediate Education (MPC)",
    institution: "Saigouthami Junior College",
    institutionUrl: "https://www.saigouthamijuniorcollege.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/512px-No_image_available.svg.png",
    duration: "2023",
    score: "9.72 CGPA",
    description:
      "Focused on Mathematics, Physics, and Chemistry, developing analytical thinking and a passion for problem-solving.",
  },
  {
    degree: "Board of Secondary Education (X, SSC)",
    institution: "Montessori High School",
    institutionUrl: "https://montessorihighschool.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/512px-No_image_available.svg.png",
    duration: "2021",
    score: "10.0 CGPA",
    description:
      "Sparked my passion for technology and innovation, nurturing curiosity, logical thinking, and a lifelong love for learning.",
  },
];

const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 0.3 } });
    }
  }, [isInView, controls]);

  return (
    <section
      id="education"
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
            alt="Education Background" 
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
        initial={{ opacity: 0, y: 50 }}
        className="w-full z-30 relative"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight drop-shadow-2xl">
              <span className="text-gray-100 drop-shadow-lg">My </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))' }}>
                Education
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-light max-w-2xl mx-auto drop-shadow-lg">
              My academic journey and milestones that shaped my technical foundation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative group ${idx === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div
                  className="relative bg-black/30 backdrop-blur-md border border-gray-400/30 rounded-2xl p-4 sm:p-5 shadow-2xl hover:border-purple-400/50 transition-all duration-300 overflow-hidden"
                  style={{ 
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div className="relative z-10 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="relative group/logo">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center shadow-lg border-2 border-white overflow-hidden hover:scale-105 transition-transform duration-300"
                             style={{ 
                               background: 'rgba(255, 255, 255, 1)',
                               boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                             }}>
                          <img
                            src={edu.logo}
                            alt={edu.institution}
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl blur-lg scale-110 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="flex-1">
                        <motion.a
                          href={edu.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group/link"
                          whileHover={{ x: 2 }}
                        >
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-100 group-hover/link:text-transparent group-hover/link:bg-gradient-to-r group-hover/link:from-purple-400 group-hover/link:to-pink-400 group-hover/link:bg-clip-text transition-all duration-300 mb-1">
                            {edu.degree}
                            <ExternalLink size={14} className="inline-block ml-2 opacity-70 text-purple-400 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
                          </h3>
                        </motion.a>

                        <div className="text-purple-300 font-semibold text-sm sm:text-base mb-2">
                          {edu.institution}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <motion.div
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/25 to-purple-600/25 border border-purple-400/40 rounded-full backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            style={{
                              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(126, 34, 206, 0.2))',
                              backdropFilter: 'blur(10px)',
                              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            }}
                          >
                            <span className="text-purple-200 font-medium text-xs">
                              📅 {edu.duration}
                            </span>
                          </motion.div>

                          <motion.div
                            className={`px-3 py-1 rounded-full backdrop-blur-sm border-2 ${
                              edu.score.includes('CGPA') 
                                ? 'bg-gradient-to-r from-emerald-500/25 to-green-600/25 border-emerald-400/50' 
                                : 'bg-gradient-to-r from-pink-500/25 to-pink-600/25 border-pink-400/40'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            style={{
                              background: edu.score.includes('CGPA')
                                ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(5, 150, 105, 0.25))'
                                : 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.2))',
                              backdropFilter: 'blur(10px)',
                              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            }}
                          >
                            <span className={`font-bold text-xs ${
                              edu.score.includes('CGPA') 
                                ? 'text-emerald-200' 
                                : 'text-pink-200'
                            }`}>
                              {edu.score.includes('CGPA') ? '🎓' : '🏆'} {edu.score}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="relative z-10 bg-black/20 backdrop-blur-sm border border-gray-500/20 rounded-xl p-3"
                    style={{
                      background: 'rgba(0, 0, 0, 0.2)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <p className="text-gray-200 leading-relaxed text-sm">
                      {edu.description}
                    </p>
                  </motion.div>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
                  <div className="absolute top-4 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-40" />
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50" />

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;