import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Send, Sparkles, Mail, Phone, MapPin } from 'lucide-react';

const FooterContact: React.FC = () => {
  return (
    <section id="contact" className="relative min-h-screen overflow-hidden">
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
            alt="Contact Background" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Enhanced dark overlay with premium gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-950/70 to-black/90" />
        
        {/* Additional heavy overlay */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Glossy overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01]" />
      </div>

      {/* Enhanced animated background grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30 py-20 px-4 sm:px-8 xl:px-0">
        <div className="max-w-2xl sm:max-w-3xl xl:max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/20 rounded-full px-6 py-2 mb-6 backdrop-blur-xl shadow-lg shadow-purple-500/20"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Mail size={16} className="text-purple-300 drop-shadow-lg" />
              </motion.div>
              <span className="text-purple-200 text-sm font-semibold drop-shadow-lg">Get In Touch</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={12} className="text-pink-300 drop-shadow-lg" />
              </motion.div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-2xl">
              Let's{' '}
              <span 
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 30px rgba(168,85,247,0.5)',
                  filter: 'drop-shadow(0 0 20px rgba(168,85,247,0.3))',
                }}
              >
                Create Magic
              </span>{' '}
              Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg shadow-purple-500/50" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Enhanced Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Logo and Main Content */}
              <div 
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl shadow-purple-500/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                }}
              >
                <motion.img 
                  src="/logoport.png" 
                  alt="SD Logo" 
                  className="w-16 h-16 object-contain mb-4 drop-shadow-xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
                  Ready to bring your next{' '}
                  <span 
                    className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    style={{ textShadow: '0 0 20px rgba(168,85,247,0.5)' }}
                  >
                    big idea
                  </span>{' '}
                  to life?
                </h3>
                
                <p className="text-gray-200 text-base leading-relaxed drop-shadow-lg">
                  I'm passionate about collaborating on innovative projects, from cutting-edge web applications to AI-powered solutions. Let's discuss how we can create something extraordinary together.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Mail, label: 'Email', value: '23eg105a16@anurag.edu.in', color: 'from-blue-500 to-cyan-500' },
                  { icon: Phone, label: 'Phone', value: '+91 9948XXXXXX', color: 'from-green-500 to-emerald-500' },
                  { icon: MapPin, label: 'Location', value: 'Hyderabad, India', color: 'from-orange-500 to-red-500' },
                  { icon: Sparkles, label: 'Response', value: 'Within 24hrs', color: 'from-purple-500 to-pink-500' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-xl rounded-xl p-3 border border-white/10 shadow-xl shadow-gray-900/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                    }}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-2 shadow-lg`}>
                      <item.icon size={16} className="text-white drop-shadow-lg" />
                    </div>
                    <p className="text-gray-300 text-xs font-medium drop-shadow-lg">{item.label}</p>
                    <p className="text-white text-sm font-semibold drop-shadow-lg">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div 
                className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-xl shadow-purple-500/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                }}
              >
                <h4 className="text-white font-bold mb-3 text-sm drop-shadow-lg">Connect With Me</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: Github, href: 'https://github.com/sathishdusharla', label: 'GitHub', color: 'hover:text-gray-300', bg: 'from-gray-600 to-gray-800' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/sathishdusharla', label: 'LinkedIn', color: 'hover:text-blue-400', bg: 'from-blue-600 to-blue-800' },
                    { icon: Twitter, href: 'https://x.com/thedusharla', label: 'Twitter', color: 'hover:text-cyan-400', bg: 'from-cyan-600 to-cyan-800' },
                    { icon: Instagram, href: 'https://instagram.com/thedusharla', label: 'Instagram', color: 'hover:text-pink-400', bg: 'from-pink-600 to-pink-800' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${social.bg} flex items-center justify-center text-white transition-all duration-300 shadow-lg ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={16} className="drop-shadow-lg" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl shadow-purple-500/10"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Send size={16} className="text-white drop-shadow-lg" />
                </div>
                <h3 className="text-xl font-bold text-white drop-shadow-lg">Send Me a Message</h3>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-200 mb-1 drop-shadow-lg">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-3 py-2 bg-white/5 backdrop-blur-xl text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-lg placeholder-gray-400 text-sm"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-200 mb-1 drop-shadow-lg">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-3 py-2 bg-white/5 backdrop-blur-xl text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-lg placeholder-gray-400 text-sm"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-200 mb-1 drop-shadow-lg">Email Address</label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full px-3 py-2 bg-white/5 backdrop-blur-xl text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-lg placeholder-gray-400 text-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-200 mb-1 drop-shadow-lg">Project Type</label>
                  <select
                    className="w-full px-3 py-2 bg-white/5 backdrop-blur-xl text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-lg text-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                    }}
                  >
                    <option value="">Select a project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ai-ml">AI/ML Solutions</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-200 mb-1 drop-shadow-lg">Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project vision, requirements, timeline, and any specific technologies you have in mind..."
                    className="w-full px-3 py-2 bg-white/5 backdrop-blur-xl text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-lg placeholder-gray-400 resize-none text-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 rounded-xl text-white font-bold text-sm shadow-2xl shadow-purple-500/30 relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(168,85,247,0.9), rgba(236,72,153,0.8))',
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2 drop-shadow-lg">
                    <span>Send Message</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send size={14} />
                    </motion.div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Enhanced Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-6 border-t border-white/10"
          >
            <div 
              className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                <p className="text-xs text-gray-300 drop-shadow-lg">
                  &copy; {new Date().getFullYear()} Sathish Dusharla.
                </p>
                <div className="flex items-center space-x-3 text-xs text-gray-300">
                  <span className="drop-shadow-lg">Made with</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <span className="text-red-400 text-sm">♥</span>
                  </motion.div>
                  <span className="drop-shadow-lg">& lots of coffee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FooterContact;