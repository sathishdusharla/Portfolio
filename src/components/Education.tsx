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
    // Dummy logo for Saigouthami
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
    // Dummy logo for Montessori
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
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, y: 100, transition: { duration: 0.8 } });
    }
  }, [isInView, controls]);

  return (
    <section
      id="education"
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
            alt="Education Background" 
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

      {/* Section divider (top) with enhanced glow */}
      <div className="absolute -top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent drop-shadow-lg z-20" />

      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="w-full z-30 relative"
      >
        {/* Added mb-20 for bottom spacing to show next section's divider */}
        <div className="max-w-2xl sm:max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 mt-10 sm:mt-16 mb-10 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl xs:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight drop-shadow-2xl">
              <span className="text-gray-100 drop-shadow-lg">My </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))' }}>
                Education
              </span>
            </h2>
            <p className="text-sm xs:text-base md:text-lg text-gray-200 font-light max-w-2xl mx-auto drop-shadow-lg">
              My academic journey and milestones that shaped my technical foundation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative group ${idx === 0 ? 'lg:col-span-2' : ''}`}
              >
                {/* Main card container */}
                <div
                  className="relative bg-black/30 backdrop-blur-md border border-gray-400/30 rounded-2xl p-4 shadow-2xl hover:border-purple-400/50 transition-all duration-500 overflow-hidden"
                  style={{ 
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {/* Simplified decorative elements - no infinite animation */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-lg" />
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-tr from-cyan-500/15 to-purple-500/15 rounded-full blur-md" />

                  {/* Header section with creative layout */}
                  <div className="relative z-10 mb-4">
                    <div className="flex items-start gap-4">
                      {/* Logo with simplified styling */}
                      <div className="relative group/logo">
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg border-2 border-white overflow-hidden hover:scale-105 transition-transform duration-300"
                             style={{ 
                               background: 'rgba(255, 255, 255, 1)',
                               boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                             }}>
                          <img
                            src={edu.logo}
                            alt={edu.institution}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        {/* Logo glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl blur-lg scale-110 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Content section */}
                      <div className="flex-1">
                        {/* Degree title with creative styling */}
                        <motion.a
                          href={edu.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group/link"
                          whileHover={{ x: 3 }}
                        >
                          <h3 className="text-lg lg:text-xl font-bold text-gray-100 group-hover/link:text-transparent group-hover/link:bg-gradient-to-r group-hover/link:from-purple-400 group-hover/link:to-pink-400 group-hover/link:bg-clip-text transition-all duration-300 mb-1">
                            {edu.degree}
                            <ExternalLink size={16} className="inline-block ml-2 opacity-70 text-purple-400 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
                          </h3>
                        </motion.a>

                        {/* Institution */}
                        <div className="text-purple-300 font-semibold text-base mb-2">
                          {edu.institution}
                        </div>

                        {/* Creative badges section */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {/* Duration badge */}
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

                          {/* Score badge with green color for CGPA */}
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

                  {/* Description with creative styling */}
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

                  {/* Creative corner decorations */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
                  <div className="absolute top-4 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-40" />
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50" />

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Section divider (bottom) with enhanced glow */}
      <div className="absolute -bottom-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent drop-shadow-lg z-20" />
    </section>
  );
};

export default Education;