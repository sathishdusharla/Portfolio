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
    score: "9.15 CGPA (up to Semester 3)",
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
    score: "97.2%",
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
    score: "100.0%",
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start px-2 sm:px-4"
    >
      {/* Section divider (top) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="w-full"
      >
        {/* Added mb-20 for bottom spacing to show next section's divider */}
        <div className="max-w-2xl sm:max-w-4xl mx-auto px-2 sm:px-8 xl:px-0 mt-10 sm:mt-16 mb-10 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl xs:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight">
              <span className="text-gray-200">My </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                Education
              </span>
            </h2>
            <p className="text-sm xs:text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
              My academic journey and milestones that shaped my technical foundation.
            </p>
          </motion.div>
          <div className="flex flex-col gap-6 sm:gap-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-lg hover:shadow-purple-400/10 transition-shadow duration-300"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl opacity-70 pointer-events-none transition-all duration-300" />
                {/* Logo */}
                <div className="flex-shrink-0 z-10">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-12 h-12 xs:w-16 xs:h-16 rounded-xl bg-white/10 object-contain shadow border border-gray-700"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 w-full z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base xs:text-lg font-semibold text-purple-200 hover:underline flex items-center gap-1"
                    >
                      {edu.degree}
                      <ExternalLink size={14} className="inline-block ml-1 opacity-70" />
                    </a>
                    <div className="flex flex-col sm:items-end text-right mt-2 sm:mt-0">
                      <span className="text-purple-300 text-xs">{edu.duration}</span>
                      <span className="text-purple-300 text-xs font-semibold">{edu.score}</span>
                    </div>
                  </div>
                  <div className="text-purple-400 text-xs xs:text-sm mb-1">{edu.institution}</div>
                  <div className="text-gray-300 text-xs xs:text-sm md:text-sm font-light">{edu.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Section divider (bottom only) */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </section>
  );
};

export default Education;