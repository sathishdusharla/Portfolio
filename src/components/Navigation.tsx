import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserRound, BookOpenCheck, Atom, LayoutDashboard, Trophy, UsersRound, Lightbulb, FileBadge2,
  Menu, X, Sparkles
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const sectionLineColors: Record<string, string> = {
  about: 'from-purple-400 to-pink-400',
  education: 'from-blue-400 to-cyan-400',
  skills: 'from-orange-400 to-red-400',
  projects: 'from-pink-400 to-purple-400',
  achievements: 'from-yellow-400 to-yellow-600',
  leadership: 'from-indigo-400 to-purple-400',
  extra: 'from-gray-400 to-gray-600',
  resume: 'from-purple-400 to-pink-400'
};

const navItems = [
  { id: 'about', label: 'About', icon: <UserRound size={22} /> },
  { id: 'education', label: 'Education', icon: <BookOpenCheck size={22} /> },
  { id: 'skills', label: 'Developer Arsenal', icon: <Atom size={22} /> },
  { id: 'projects', label: 'Projects', icon: <LayoutDashboard size={22} /> },
  { id: 'achievements', label: 'Achievements', icon: <Trophy size={22} /> },
  { id: 'leadership', label: 'Leadership', icon: <UsersRound size={22} /> },
  { id: 'extra', label: 'More Than A Dev', icon: <Lightbulb size={22} /> },
];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/resume') return;
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          return;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setSidebarOpen(false);
      setActiveSection(sectionId);
    }
  };

  const goToResume = () => {
    setSidebarOpen(false);
    navigate('/resume');
  };

  const AnimatedLogo = () => (
    <motion.div
      className="relative w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer backdrop-blur-xl border border-white/20 shadow-2xl"
      whileHover={{ rotate: 5, scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" }}
      transition={{ duration: 0.3 }}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      aria-label="Go to top"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          className="text-white font-bold text-xl font-jetbrains"
          animate={{
            textShadow: [
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 20px rgba(255,255,255,0.8)",
              "0 0 10px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          SD
        </motion.div>
        <motion.div
          className="absolute top-1 right-1"
          animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={12} className="text-white/80" />
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-50"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );

  const TopLine = () => (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r ${sectionLineColors[activeSection] || 'from-purple-400 to-pink-400'}`}
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ 
        boxShadow: '0 2px 16px 0 rgba(168,85,247,0.4)',
        filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.8))'
      }}
    />
  );

  if (location.pathname === '/resume') return null;

  return (
    <>
      <TopLine />

      {/* Enhanced hamburger with ultra glass */}
      <button
        className="fixed top-6 left-6 z-[100] flex items-center justify-center w-11 h-11 rounded-full bg-black/80 backdrop-blur-2xl md:hidden shadow-2xl border border-white/20"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
        style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' }}
      >
        {sidebarOpen ? (
          <X size={28} className="text-purple-400" />
        ) : (
          <Menu size={28} className="text-purple-400" />
        )}
      </button>

      {/* Enhanced sidebar with ultra glass */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-black/80 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
          >
            <motion.aside
              className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-black/90 backdrop-blur-2xl shadow-2xl flex flex-col justify-between border-r border-white/20"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col gap-2 px-6 pt-20">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-4 py-3 px-3 rounded-xl text-lg font-medium transition-all backdrop-blur-xl border
                      ${activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-500/60 to-pink-500/60 text-white border-white/30 shadow-xl'
                        : 'text-gray-300 hover:bg-white/10 border-transparent hover:border-white/20'}
                    `}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
              <div className="px-6 pb-8">
                <div className="border-t border-white/20 mb-4" />
                <button
                  onClick={goToResume}
                  className="flex items-center gap-3 text-gray-300 hover:text-white text-lg w-full py-3 px-3 rounded-xl hover:bg-white/10 transition-all backdrop-blur-xl"
                >
                  <FileBadge2 size={22} />
                  <span>Resume</span>
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced desktop nav with ultra glass */}
      <nav className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col items-center py-4 px-1 bg-black/80 backdrop-blur-2xl rounded-[2.5rem] m-2 shadow-2xl border border-white/20 w-[70px] h-[420px] lg:w-[90px] lg:h-[600px] lg:py-6 lg:px-2">
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-[2.5rem] pointer-events-none" />
        
        <div className="mb-6 lg:mb-8 flex flex-col items-center relative z-10">
          <AnimatedLogo />
        </div>
        
        <div className="flex flex-col items-center gap-4 lg:gap-5 flex-1 relative z-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-xl transition-all backdrop-blur-xl border shadow-lg
                ${activeSection === item.id
                  ? 'text-white bg-gradient-to-r from-purple-500/60 to-pink-500/60 border-white/30'
                  : 'text-gray-400 hover:text-white bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}
              `}
              aria-label={item.label}
              style={{
                boxShadow: activeSection === item.id ? '0 0 20px rgba(168, 85, 247, 0.4)' : undefined
              }}
            >
              {item.icon}
            </button>
          ))}
        </div>
        
        <div className="flex flex-col items-center mt-4 lg:mt-6 w-full relative z-10">
          <div className="w-7 h-px lg:w-8 bg-white/20 my-2 lg:my-3" />
          <button
            onClick={goToResume}
            className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-xl transition-all text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-xl shadow-lg"
            aria-label="Resume"
          >
            <FileBadge2 size={22} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;