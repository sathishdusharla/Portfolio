import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Code2, Lightbulb, Users2, Sparkles } from 'lucide-react';

const aboutSlides = [
  {
    label: "Developer Journey",
    icon: <Code2 size={18} />,
    content: (
      <>
        My passion for technology started early, evolving from curiosity into a drive to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">build</span> and <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">create</span>. From coding my first website to architecting scalable systems, I thrive on solving real-world problems and bringing ideas to life through <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">full-stack development</span>.
      </>
    ),
    imageText: (
      <span className="block leading-tight text-white font-extrabold text-lg xs:text-xl md:text-2xl mb-2 whitespace-pre-line drop-shadow-2xl">
        BUILD,<br />SOLVE,<br />GROW.
      </span>
    ),
    imageBg: "bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-blue-600/90",
    logo: "SD",
  },
  {
    label: "Tech Stack & Skills",
    icon: <Sparkles size={18} />,
    content: (
      <>
        I specialize in <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">React</span>, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">Node.js</span>, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">TypeScript</span>, and <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">Python</span>. My toolkit includes cloud platforms, databases, and modern frameworks, enabling me to deliver <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">robust</span> and <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">scalable</span> solutions.
      </>
    ),
    imageText: (
      <span className="block leading-tight text-white font-extrabold text-lg xs:text-xl md:text-2xl mb-2 whitespace-pre-line drop-shadow-2xl">
        CODE,<br />DEPLOY,<br />OPTIMIZE.
      </span>
    ),
    imageBg: "bg-gradient-to-br from-emerald-600/90 via-teal-600/90 to-cyan-600/90",
    logo: "SD",
  },
  {
    label: "Leadership & Impact",
    icon: <Users2 size={18} />,
    content: (
      <>
        As a <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">student leader</span> and collaborator, I've led tech clubs, organized hackathons, and mentored peers. I believe in <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">teamwork</span> and <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">community</span> to drive innovation and growth.
      </>
    ),
    imageText: (
      <span className="block leading-tight text-white font-extrabold text-lg xs:text-xl md:text-2xl mb-2 whitespace-pre-line drop-shadow-2xl">
        LEAD,<br />INSPIRE,<br />CONNECT.
      </span>
    ),
    imageBg: "bg-gradient-to-br from-orange-600/90 via-yellow-600/90 to-amber-600/90",
    logo: "SD",
  },
  {
    label: "Vision & Values",
    icon: <Lightbulb size={18} />,
    content: (
      <>
        I value <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">curiosity</span>, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">integrity</span>, and <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">resilience</span>. My vision is to leverage technology for positive change, building solutions that are <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">inclusive</span> and <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">impactful</span>.
      </>
    ),
    imageText: (
      <span className="block leading-tight text-white font-extrabold text-lg xs:text-xl md:text-2xl mb-2 whitespace-pre-line drop-shadow-2xl">
        DREAM,<br />INNOVATE,<br />IMPACT.
      </span>
    ),
    imageBg: "bg-gradient-to-br from-red-600/90 via-pink-600/90 to-rose-600/90",
    logo: "SD",
  },
];

const AUTO_SLIDE_INTERVAL = 2500;

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const controls = useAnimation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, y: 100, transition: { duration: 0.8 } });
    }
  }, [isInView, controls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % aboutSlides.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start px-2 sm:px-4"
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
        <div className="max-w-2xl sm:max-w-3xl xl:max-w-4xl mx-auto px-2 sm:px-4 xl:px-0 mt-10 sm:mt-16 mb-10 sm:mb-16">
          {/* Enhanced heading with ultra glass */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl xs:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight">
                <span className="text-gray-200">About </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                  Me
                </span>
              </h2>
              <p className="text-sm xs:text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
                Full Stack Developer | AI Enthusiast | Student Leader | Building for Impact
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Enhanced text content box with ultra glass */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <div className="bg-black/60 backdrop-blur-2xl border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col h-full justify-between">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/80 to-pink-500/80 backdrop-blur-xl text-white w-10 h-10 shadow-lg border border-white/20">
                      {aboutSlides[active].icon}
                    </span>
                    <span className="text-lg xs:text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {aboutSlides[active].label}
                    </span>
                  </div>
                  <div className="text-gray-200 text-sm xs:text-base md:text-lg leading-relaxed mb-2 text-left">
                    {aboutSlides[active].content}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced image box with ultra glass */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col h-full"
            >
              <div className={`relative w-full h-full rounded-3xl overflow-hidden ${aboutSlides[active].imageBg} shadow-2xl flex flex-col justify-between backdrop-blur-xl border border-white/20`}>
                {/* Inner glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 backdrop-blur-sm" />
                
                <div className="p-4 sm:p-5 flex flex-col items-center h-full relative z-10">
                  {aboutSlides[active].imageText}
                  <div className="w-full h-36 xs:h-44 rounded-2xl flex items-end justify-center mt-2 bg-black/20 backdrop-blur-xl border border-white/20 shadow-inner">
                    <img
                      src="/forabout.png"
                      alt="Profile"
                      className="w-24 xs:w-32 h-32 xs:h-40 object-cover rounded-xl shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                    />
                  </div>
                  <span className="absolute bottom-3 right-4 text-white font-extrabold text-xl xs:text-2xl select-none tracking-widest drop-shadow-2xl">
                    {aboutSlides[active].logo}
                  </span>
                  <button className="absolute top-3 right-4 bg-black/40 backdrop-blur-xl text-white text-xs px-2 xs:px-3 py-1 rounded-full font-medium border border-white/20 hover:bg-black/60 transition shadow-lg">
                    ⏸ Hover to pause
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced tags with ultra glass */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            {aboutSlides.map((slide, idx) => (
              <button
                key={slide.label}
                onClick={() => setActive(idx)}
                className={`flex items-center gap-2 px-3 xs:px-5 py-2 rounded-xl text-sm xs:text-base font-medium border transition backdrop-blur-xl shadow-lg
                  ${active === idx
                    ? 'bg-gradient-to-r from-purple-500/60 to-pink-500/60 text-white border-white/30 shadow-xl'
                    : 'bg-black/40 text-gray-300 border-white/20 hover:bg-black/60 hover:border-white/30'}
                `}
                style={{
                  boxShadow: active === idx ? '0 0 30px rgba(168, 85, 247, 0.4)' : undefined
                }}
              >
                <span className="inline-block">{slide.icon}</span>
                <span className="hidden sm:inline">{slide.label}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;