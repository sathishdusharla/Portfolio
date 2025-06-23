import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Code2, Lightbulb, Users2, Sparkles } from 'lucide-react';

const aboutSlides = [
  {
    label: "Developer Journey",
    icon: <Code2 size={18} />,
    content: (
      <>
        My passion for technology started early, evolving from curiosity into a drive to <span className="bg-cyan-600/80 text-white px-1 rounded font-medium">build</span> and <span className="bg-cyan-600/80 text-white px-1 rounded font-medium">create</span>. From coding my first website to architecting scalable systems, I thrive on solving real-world problems and bringing ideas to life through <span className="bg-emerald-600/80 text-white px-1 rounded font-medium">full-stack development</span>.
      </>
    ),
    imageText: (
      <span className="block leading-tight text-white font-extrabold text-lg xs:text-xl md:text-2xl mb-2 whitespace-pre-line">
        BUILD,<br />SOLVE,<br />GROW.
      </span>
    ),
    imageBg: "bg-gradient-to-br from-[#7b2ff2] via-[#f357a8] to-[#5f5fdc]",
    logo: "SD",
  },
  {
    label: "Tech Stack & Skills",
    icon: <Sparkles size={18} />,
    content: (
      <>
        I specialize in <span className="bg-cyan-600/80 text-white px-1 rounded font-medium">React</span>, <span className="bg-cyan-600/80 text-white px-1 rounded font-medium">Node.js</span>, <span className="bg-cyan-600/80 text-white px-1 rounded font-medium">TypeScript</span>, and <span className="bg-cyan-600/80 text-white px-1 rounded font-medium">Python</span>. My toolkit includes cloud platforms, databases, and modern frameworks, enabling me to deliver <span className="bg-emerald-600/80 text-white px-1 rounded font-medium">robust</span> and <span className="bg-emerald-600/80 text-white px-1 rounded font-medium">scalable</span> solutions.
      </>
    ),
    imageText: (
      <span className="block leading-tight text-white font-extrabold text-lg xs:text-xl md:text-2xl mb-2 whitespace-pre-line">
        CODE,<br />DEPLOY,<br />OPTIMIZE.
      </span>
    ),
    imageBg: "bg-gradient-to-br from-[#43cea2] via-[#185a9d] to-[#43cea2]",
    logo: "SD",
  },
  {
    label: "Leadership & Impact",
    icon: <Users2 size={18} />,
    content: (
      <>
        As a <span className="bg-cyan-600/80 text-white px-1 rounded font-medium">student leader</span> and collaborator, I’ve led tech clubs, organized hackathons, and mentored peers. I believe in <span className="bg-emerald-600/80 text-white px-1 rounded font-medium">teamwork</span> and <span className="bg-emerald-600/80 text-white px-1 rounded font-medium">community</span> to drive innovation and growth.
      </>
    ),
    imageText: (
      <span className="block leading-tight text-white font-extrabold text-lg xs:text-xl md:text-2xl mb-2 whitespace-pre-line">
        LEAD,<br />INSPIRE,<br />CONNECT.
      </span>
    ),
    imageBg: "bg-gradient-to-br from-[#f7971e] via-[#ffd200] to-[#f7971e]",
    logo: "SD",
  },
  {
    label: "Vision & Values",
    icon: <Lightbulb size={18} />,
    content: (
      <>
        I value <span className="bg-cyan-600/80 text-white px-1 rounded font-medium">curiosity</span>, <span className="bg-cyan-600/80 text-white px-1 rounded font-medium">integrity</span>, and <span className="bg-cyan-600/80 text-white px-1 rounded font-medium">resilience</span>. My vision is to leverage technology for positive change, building solutions that are <span className="bg-emerald-600/80 text-white px-1 rounded font-medium">inclusive</span> and <span className="bg-emerald-600/80 text-white px-1 rounded font-medium">impactful</span>.
      </>
    ),
    imageText: (
      <span className="block leading-tight text-white font-extrabold text-lg xs:text-xl md:text-2xl mb-2 whitespace-pre-line">
        DREAM,<br />INNOVATE,<br />IMPACT.
      </span>
    ),
    imageBg: "bg-gradient-to-br from-[#ff5858] via-[#f09819] to-[#ff5858]",
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
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="w-full"
      >
        {/* Section divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        
        {/* Main content */}
        <div className="max-w-2xl sm:max-w-3xl xl:max-w-4xl mx-auto px-2 sm:px-4 xl:px-0 mt-10 sm:mt-16 mb-10 sm:mb-16">
          {/* Heading */}
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl xs:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight">
              <span className="text-gray-200">About </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                Me
              </span>
            </h2>
            <p className="text-sm xs:text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Full Stack Developer | AI Enthusiast | Student Leader | Building for Impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Text content box */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <div className="bg-[#181926] border border-[#2d2b3a] rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center rounded-lg bg-[#7b2ff2] bg-opacity-80 text-white w-8 h-8">
                      {aboutSlides[active].icon}
                    </span>
                    <span className="text-lg xs:text-xl font-bold text-[#c3a6fa]">{aboutSlides[active].label}</span>
                  </div>
                  <div className="text-gray-200 text-sm xs:text-base md:text-lg leading-relaxed mb-2 text-left">
                    {aboutSlides[active].content}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col h-full"
            >
              <div className={`relative w-full h-full rounded-2xl overflow-hidden ${aboutSlides[active].imageBg} shadow-xl flex flex-col justify-between`}>
                <div className="p-4 sm:p-5 flex flex-col items-center h-full">
                  {aboutSlides[active].imageText}
                  <div className="w-full h-36 xs:h-44 rounded-xl flex items-end justify-center mt-2 bg-transparent">
                    <img
                      src="/forabout.png"
                      alt="Profile"
                      className="w-24 xs:w-32 h-32 xs:h-40 object-cover rounded-xl shadow-lg border-4 border-white/10"
                    />
                  </div>
                  <span className="absolute bottom-3 right-4 text-white font-extrabold text-xl xs:text-2xl select-none tracking-widest">{aboutSlides[active].logo}</span>
                  <button className="absolute top-3 right-4 bg-white/10 text-white text-xs px-2 xs:px-3 py-1 rounded-full font-medium backdrop-blur hover:bg-white/20 transition">
                    ⏸ Hover to pause
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tags outside the box, centered below */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            {aboutSlides.map((slide, idx) => (
              <button
                key={slide.label}
                onClick={() => setActive(idx)}
                className={`flex items-center gap-2 px-3 xs:px-5 py-2 rounded-xl text-sm xs:text-base font-medium border transition
                  ${active === idx
                    ? 'bg-[#7b2ff2] bg-opacity-30 text-[#c3a6fa] border-[#7b2ff2]'
                    : 'bg-[#2d2b3a] text-[#c3a6fa] border-[#3e375a] hover:bg-[#3e375a]'}
                `}
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