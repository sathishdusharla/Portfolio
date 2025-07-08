import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';

function MainPage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main className="snap-y snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
        <section className="min-h-screen snap-start pl-0 md:pl-24 lg:pl-28" id="hero"><Hero /></section>
        <section className="min-h-screen snap-start pl-0 md:pl-24 lg:pl-28" id="about"><About /></section>
        <section className="min-h-screen snap-start pl-0 md:pl-24 lg:pl-28" id="education"><Education /></section>
        <section className="min-h-screen snap-start pl-0 md:pl-24 lg:pl-28" id="skills"><Skills /></section>
        <section className="min-h-screen snap-start pl-0 md:pl-24 lg:pl-28" id="projects"><Projects /></section>
        <section className="min-h-screen snap-start pl-0 md:pl-24 lg:pl-28" id="experience"><Experience /></section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200); // Reduced from 3000 to 2200

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#181c27] text-white font-inter overflow-x-hidden">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;