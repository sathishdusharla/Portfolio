import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserRound, BookOpenCheck, Atom, LayoutDashboard, Trophy, Lightbulb, FileBadge2,
  Menu, X, Sparkles, AlertCircle, Briefcase
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

// Map section to color for top line
const sectionLineColors: Record<string, string> = {
  about: 'from-purple-400 to-pink-400',
  education: 'from-blue-400 to-cyan-400',
  skills: 'from-orange-400 to-red-400',
  projects: 'from-pink-400 to-purple-400',
  experience: 'from-emerald-400 to-green-400',
  contact: 'from-cyan-400 to-blue-400',
  achievements: 'from-yellow-400 to-yellow-600',
  extra: 'from-gray-400 to-gray-600',
  resume: 'from-purple-400 to-pink-400'
};

const navItems = [
  { id: 'about', label: 'About', icon: <UserRound size={22} />, available: true },
  { id: 'education', label: 'Education', icon: <BookOpenCheck size={22} />, available: true },
  { id: 'skills', label: 'Developer Arsenal', icon: <Atom size={22} />, available: true },
  { id: 'projects', label: 'Projects', icon: <LayoutDashboard size={22} />, available: true },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={22} />, available: true },
  { id: 'achievements', label: 'Achievements', icon: <Trophy size={22} />, available: false },
  { id: 'extra', label: 'More Than A Dev', icon: <Lightbulb size={22} />, available: false },
];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/resume') return;
    const handleScroll = () => {
      const availableSections = navItems.filter(item => item.available);
      const sections = availableSections.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(availableSections[i].id);
          return;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (!item.available) {
      setNotificationMessage(`${item.label} section is not available yet`);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }
    
    const section = document.getElementById(item.id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setSidebarOpen(false);
      setActiveSection(item.id);
    }
  };

  // Resume navigation handler
  const goToResume = () => {
    setSidebarOpen(false);
    navigate('/resume');
  };

  // EXACT Footer Logo Animation, just smaller for sidebar
  const AnimatedLogo = () => (
    <motion.div
      className="relative w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer"
      whileHover={{ rotate: 5, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      aria-label="Go to top"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {/* Logo content */}
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
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          SD
        </motion.div>
        {/* Sparkle effect */}
        <motion.div
          className="absolute top-1 right-1"
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles size={12} className="text-white/80" />
        </motion.div>
      </div>
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );

  // Top line that changes color according to section
  const TopLine = () => (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r ${sectionLineColors[activeSection] || 'from-purple-400 to-pink-400'}`}
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ boxShadow: '0 2px 16px 0 rgba(168,85,247,0.15)' }}
    />
  );

  // Notification Component
  const Notification = () => (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[200] bg-black/90 backdrop-blur-xl border border-orange-500/30 rounded-2xl px-6 py-4 shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <AlertCircle size={20} className="text-orange-400" />
            <span className="text-white font-medium">{notificationMessage}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Hide nav on resume page
  if (location.pathname === '/resume') return null;

  return (
    <>
      <TopLine />
      <Notification />

      {/* Hamburger/Close for mobile */}
      <button
        className="fixed top-6 left-6 z-[100] flex items-center justify-center w-11 h-11 rounded-full bg-black/90 md:hidden shadow-xl"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
      >
        {sidebarOpen ? (
          <X size={28} className="text-purple-400" />
        ) : (
          <Menu size={28} className="text-purple-400" />
        )}
      </button>

      {/* Sidebar overlay for mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-black/70 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
          >
            <motion.aside
              className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-[#101014] shadow-2xl flex flex-col justify-between"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Add padding-top to avoid collision with X */}
              <div className="flex flex-col gap-2 px-6 pt-20">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center gap-4 py-3 px-3 rounded-xl text-lg font-medium transition-all relative
                      ${activeSection === item.id && item.available
                        ? 'bg-purple-800/60 text-purple-200'
                        : 'text-gray-300 hover:bg-gray-800/60'}
                    `}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {!item.available && (
                      <div className="ml-auto">
                        <AlertCircle size={16} className="text-orange-400 opacity-70" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="px-6 pb-8">
                <div className="border-t border-gray-800 mb-4" />
                <button
                  onClick={goToResume}
                  className="flex items-center gap-3 text-gray-300 hover:text-white text-lg w-full"
                >
                  <FileBadge2 size={22} />
                  <span>Resume</span>
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop vertical nav */}
      <nav
        className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col items-center py-4 px-1 bg-black/90 rounded-[2.5rem] m-2 shadow-xl
          w-[70px] h-[450px] 
          lg:w-[90px] lg:h-[580px]
          lg:py-6 lg:px-2"
      >
        {/* Animated Logo */}
        <div className="mb-6 lg:mb-8 flex flex-col items-center">
          <AnimatedLogo />
        </div>
        {/* Navigation Icons */}
        <div className="flex flex-col items-center gap-3 lg:gap-4 flex-1">
          {navItems.map((item) => (
            <div key={item.id} className="relative group">
              <button
                onClick={() => handleNavClick(item)}
                className={`flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-xl transition-all relative
                  ${activeSection === item.id && item.available
                    ? 'text-purple-400'
                    : 'text-gray-400 hover:text-purple-300'}
                `}
                aria-label={item.label}
              >
                {item.icon}
                {!item.available && (
                  <div className="absolute -top-1 -right-1">
                    <AlertCircle size={12} className="text-orange-400" />
                  </div>
                )}
              </button>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[70]">
                <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg px-3 py-2 text-sm text-white whitespace-nowrap shadow-xl">
                  {item.label}
                  {!item.available && (
                    <div className="text-orange-400 text-xs mt-1">Not Available</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Divider and Resume at bottom */}
        <div className="flex flex-col items-center mt-4 lg:mt-6 w-full">
          <div className="w-7 h-px lg:w-8 bg-gray-700 my-2 lg:my-3" />
          <button
            onClick={goToResume}
            className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-xl transition-all text-gray-400 hover:text-purple-300"
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