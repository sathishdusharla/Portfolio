import React from "react";
import { Github, Linkedin, Mail, Phone, ExternalLink, ArrowLeft, MapPin, Award, Briefcase, GraduationCap, Code, Trophy } from "lucide-react";

const resumeLinks = {
  github: "https://github.com/sathishdusharla",
  linkedin: "https://linkedin.com/in/sathishdusharla",
  jetir: "https://www.jetir.org/view?paper=JETIR2505010",
  navsight: "https://github.com/sathishdusharla/IndoorNavigation_For_VisuallyImpaired",
  blockvotex: "https://blockvotex.netlify.app/",
  stegavault: "https://github.com/sathishdusharla/StegaVault",
  // Certification links
  awsCloudFoundations: "https://www.credly.com/badges/f96ffe5d-8381-4802-9a9f-055626214de9/public_url",
  awsDataEngineering: "https://www.credly.com/badges/1190365c-82ab-4388-90c4-4585f00b3598/public_url",
  ibmEnterpriseAI: "https://www.credly.com/badges/3a52679a-e523-49dd-9dd0-a4d9d2959ef4/public_url",
  ibmDataScience: "https://www.credly.com/badges/7a0036ed-065f-4757-8323-8272e16df2d7/public_url",
  hackerrankReact: "https://www.hackerrank.com/certificates/8478ff84a63a",
  hackerrankPython: "https://www.hackerrank.com/certificates/14384f78e934",
  ciscoCybersecurity: "https://www.credly.com/badges/80741553-9962-4ac7-9233-6e794b86a9b6/public_url",
  ciscoNetworking: "https://www.credly.com/badges/76a9a092-98ed-45e2-8c6f-93852437a9d4/public_url",
};

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
  <div className="flex items-center gap-3 mb-8 pb-3 border-b border-purple-500/20 relative">
    <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 border border-purple-400/30 backdrop-blur-sm shadow-lg shadow-purple-500/20">
      <Icon size={22} className="text-purple-300" />
    </div>
    <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent tracking-wide">
      {children}
    </h3>
    <div className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
  </div>
);

const SkillBadge = ({ skill, color }: { skill: string; color: string }) => (
  <span className={`inline-block px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm ${color} shadow-lg`}>
    {skill}
  </span>
);

const ProjectCard = ({ title, tech, description, links }: any) => (
  <div className="group relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
    {/* Glassmorphism overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Content */}
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300 drop-shadow-lg">
          {title}
        </h4>
        <div className="flex gap-2">
          {links.map((link: any, idx: number) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border transition-all duration-300 hover:scale-110 backdrop-blur-sm shadow-lg ${link.color}`}
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t: string, idx: number) => (
          <span key={idx} className="px-3 py-1.5 text-xs bg-gray-800/60 text-gray-300 rounded-lg border border-gray-600/30 backdrop-blur-sm font-medium">
            {t}
          </span>
        ))}
      </div>
      
      <ul className="space-y-2 text-sm text-gray-300">
        {description.map((desc: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0 shadow-lg shadow-purple-500/30" />
            <span dangerouslySetInnerHTML={{ __html: desc }} className="leading-relaxed" />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ExperienceCard = ({ title, company, duration, description }: any) => (
  <div className="relative pl-8 pb-8 group">
    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-gray-900 shadow-lg shadow-purple-500/40 group-hover:shadow-purple-500/60 transition-all duration-300" />
    <div className="absolute left-2 top-6 w-0.5 h-full bg-gradient-to-b from-purple-500/60 via-pink-500/40 to-transparent" />
    
    <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-5 hover:border-purple-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 relative overflow-hidden">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <h4 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{title}</h4>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-purple-300 font-semibold">{company}</span>
          <span className="text-gray-500">•</span>
          <span className="text-sm text-gray-400">{duration}</span>
        </div>
        <ul className="space-y-2 text-sm text-gray-300">
          {description.map((desc: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mt-2 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: desc }} className="leading-relaxed" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Resume: React.FC = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C++", "C", "JavaScript", "SQL"],
      color: "bg-blue-500/20 text-blue-200 border-blue-400/40 hover:border-blue-300"
    },
    {
      category: "Data Structures & Algorithms",
      skills: ["DSA", "Object-Oriented Design", "System Design"],
      color: "bg-red-500/20 text-red-200 border-red-400/40 hover:border-red-300"
    },
    {
      category: "Cloud & Data Tools", 
      skills: ["AWS (S3, Lambda, Glue, Redshift)", "Git", "GitHub", "Postman", "VS Code"],
      color: "bg-orange-500/20 text-orange-200 border-orange-400/40 hover:border-orange-300"
    },
    {
      category: "Web Development",
      skills: ["HTML/CSS", "React", "Flask", "Django", "MERN Stack"],
      color: "bg-emerald-500/20 text-emerald-200 border-emerald-400/40 hover:border-emerald-300"
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "Oracle SQL"],
      color: "bg-purple-500/20 text-purple-200 border-purple-400/40 hover:border-purple-300"
    },
    {
      category: "AI/ML",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch"],
      color: "bg-pink-500/20 text-pink-200 border-pink-400/40 hover:border-pink-300"
    },
    {
      category: "Delivery & Agile",
      skills: ["Jira", "Figma", "Agile/Scrum", "Requirements Analysis", "Client Communication"],
      color: "bg-cyan-500/20 text-cyan-200 border-cyan-400/40 hover:border-cyan-300"
    }
  ];

  const projects = [
    {
      title: "NavSight – AI-Powered Indoor Navigation for Accessibility",
      tech: ["Python", "Django", "Embedded AI", "Computer Vision"],
      description: [
        "Built a voice-assisted, AI-based indoor navigation system to aid visually impaired users",
        "Worked in an agile team to integrate landmark detection and obstacle avoidance",
        "Achieved <span class='text-emerald-400 font-semibold'>88% navigation accuracy</span>, reducing dependency by 80%",
        "Published in JETIR Journal (May 2025); Runner-up at Microsoft + Reskill Hackathon"
      ],
      links: [
        { icon: Github, url: resumeLinks.navsight, color: "bg-gray-700/60 text-gray-300 border-gray-500/40 hover:border-gray-400" },
        { icon: ExternalLink, url: resumeLinks.jetir, color: "bg-pink-500/20 text-pink-300 border-pink-400/40 hover:border-pink-300" }
      ]
    },
    {
      title: "BlockvoteX – Scalable Blockchain Voting Platform",
      tech: ["React", "Solidity", "Web3.js", "Smart Contracts"],
      description: [
        "Designed a tamper-proof e-voting system using smart contracts and decentralized storage",
        "Delivered secure admin-voter flows with <span class='text-emerald-400 font-semibold'>100% vote integrity</span> and auditability",
        "Collaborated with stakeholders to ensure trust, scalability, and usability"
      ],
      links: [
        { icon: ExternalLink, url: resumeLinks.blockvotex, color: "bg-purple-500/20 text-purple-300 border-purple-400/40 hover:border-purple-300" }
      ]
    },
    {
      title: "StegaVault – Secure Communication using DCT Steganography",
      tech: ["Python", "Django", "DCT Algorithm", "Cryptography"],
      description: [
        "Engineered a secure messaging tool combining DCT and cryptographic methods",
        "Achieved <span class='text-emerald-400 font-semibold'>98% message retrieval accuracy</span> with lossless image quality",
        "Enhanced privacy by 70% compared to LSB-based steganography"
      ],
      links: [
        { icon: Github, url: resumeLinks.stegavault, color: "bg-gray-700/60 text-gray-300 border-gray-500/40 hover:border-gray-400" }
      ]
    }
  ];

  const experiences = [
    {
      title: "Blockchain Development Intern",
      company: "Accelchain",
      duration: "Nov 2024 – Jan 2025",
      description: [
        "Led the development of <span class='text-emerald-400 font-semibold'>AuctionX</span>, a decentralized auction system using Solidity",
        "Deployed secure smart contracts and tested workflows for real-time bids",
        "Worked in a cross-functional team focused on security and scalability"
      ]
    },
    {
      title: "Data Engineering Virtual Intern",
      company: "AWS Academy x AICTE x Eduskills",
      duration: "Jul 2024 – Sep 2024",
      description: [
        "Designed ETL pipelines using AWS Glue, Lambda, and Redshift for data transformation",
        "Optimized data processing efficiency by <span class='text-emerald-400 font-semibold'>85%</span> via schema modeling and tuning",
        "Simulated client data scenarios to demonstrate reporting performance"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/webanimation.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/70 z-10"></div>
      
      {/* Animated Grid Overlay */}
      <div className="fixed inset-0 z-20 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-start py-10 px-2 sm:px-4">
        {/* Top Bar */}
        <div className="w-full max-w-5xl flex items-center justify-between gap-2 sm:gap-4 mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-black/60 backdrop-blur-xl hover:bg-purple-700/60 text-purple-300 hover:text-white font-semibold shadow-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            <ArrowLeft size={16} className="sm:size-18" />
            <span className="hidden xs:inline">Back to Home</span>
            <span className="xs:hidden">Back</span>
          </button>
          <span className="text-xs text-gray-400 font-mono tracking-tight sm:tracking-widest bg-black/40 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full border border-gray-700/30">
            Last updated: June 2025
          </span>
        </div>

        {/* Resume Container */}
        <div className="w-full max-w-5xl bg-black/50 backdrop-blur-2xl border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Glassmorphism gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 pointer-events-none" />
          
          <div className="relative z-10 p-8">
            {/* Header Section */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-8">
                <div className="flex-1">
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent mb-3 tracking-tight drop-shadow-2xl">
                    Dusharla Sathish
                  </h1>
                  <p className="text-2xl text-gray-300 mb-6 font-light drop-shadow-lg">
                    Full Stack Developer & AI Enthusiast
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700/30">
                      <Phone size={16} className="text-cyan-400" />
                      <span>+91 99482 33702</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700/30">
                      <Mail size={16} className="text-pink-400" />
                      <span>23eg105a16@anurag.edu.in</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700/30">
                      <MapPin size={16} className="text-emerald-400" />
                      <span>Hyderabad, India</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <a
                      href={resumeLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 rounded-xl text-gray-300 hover:text-white hover:border-gray-500/60 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a
                      href={resumeLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 rounded-xl text-blue-300 hover:text-blue-200 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Linkedin size={18} />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 text-xs bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-purple-500/40 rounded-full text-purple-200 font-medium shadow-lg">
                      AI Enthusiast
                    </span>
                    <span className="px-4 py-2 text-xs bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-sm border border-cyan-500/40 rounded-full text-cyan-200 font-medium shadow-lg">
                      Student Leader
                    </span>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 drop-shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50" />
                  Career Objective
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Motivated Computer Science student with a strong foundation in <span className="text-purple-300 font-semibold">Software Development, Cloud Foundations, and Data Structures & Algorithms</span>. 
                  Proficient in <span className="text-cyan-300 font-semibold">Python, Java, SQL, C++, C</span>, with hands-on experience in <span className="text-emerald-300 font-semibold">full-stack development, decentralized systems, and AI-powered applications</span>. 
                  Passionate about building innovative solutions that bridge technology and real-world impact, Eager to grow through dynamic challenges and meaningful collaborations that push the boundaries of technology.
                </p>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left Column */}
              <div className="lg:col-span-1 space-y-10">
                {/* Education */}
                <div>
                  <SectionTitle icon={GraduationCap}>Education</SectionTitle>
                  <div className="space-y-4">
                    <div className="bg-black/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-5 hover:border-purple-400/50 transition-all duration-300 shadow-xl">
                      <h4 className="font-bold text-white mb-2 text-lg drop-shadow-lg">B.Tech Computer Science</h4>
                      <p className="text-sm text-gray-300 mb-2 font-medium">Anurag University, Hyderabad</p>
                      <p className="text-xs text-gray-400 mb-3">2023 – 2027</p>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1.5 text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-lg font-semibold shadow-lg backdrop-blur-sm">
                          CGPA: 9.15
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-xl border border-gray-600/30 rounded-xl p-4 hover:border-gray-500/50 transition-all duration-300 shadow-lg">
                      <h4 className="font-semibold text-gray-200 text-sm mb-1">Intermediate Education</h4>
                      <p className="text-xs text-gray-400 mb-2">Saigouthami Junior College</p>
                      <span className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded font-medium backdrop-blur-sm">
                        CGPA: 9.72
                      </span>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-xl border border-gray-600/30 rounded-xl p-4 hover:border-gray-500/50 transition-all duration-300 shadow-lg">
                      <h4 className="font-semibold text-gray-200 text-sm mb-1">Secondary Education</h4>
                      <p className="text-xs text-gray-400 mb-2">Montessori High School</p>
                      <span className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded font-medium backdrop-blur-sm">
                        CGPA: 10.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <SectionTitle icon={Award}>Certifications</SectionTitle>
                  <div className="space-y-4">
                    <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-4">
                      <h4 className="text-sm font-bold text-cyan-300 mb-3 drop-shadow-lg">Cloud & Data</h4>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50" />
                          <a href={resumeLinks.awsCloudFoundations} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                            AWS Cloud Foundations
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50" />
                          <a href={resumeLinks.awsDataEngineering} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                            AWS Data Engineering
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50" />
                          <a href={resumeLinks.ibmEnterpriseAI} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                            IBM Enterprise AI
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50" />
                          <a href={resumeLinks.ibmDataScience} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                            IBM Enterprise Data Science
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-xl border border-yellow-500/30 rounded-xl p-4">
                      <h4 className="text-sm font-bold text-yellow-300 mb-3 drop-shadow-lg">Development</h4>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-gray-300 hover:text-yellow-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-lg shadow-yellow-500/50" />
                          <a href={resumeLinks.hackerrankReact} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
                            HackerRank Frontend (React)
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 hover:text-yellow-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-lg shadow-yellow-500/50" />
                          <a href={resumeLinks.hackerrankPython} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
                            HackerRank Python Programming
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-xl border border-pink-500/30 rounded-xl p-4">
                      <h4 className="text-sm font-bold text-pink-300 mb-3 drop-shadow-lg">Cybersecurity</h4>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-gray-300 hover:text-pink-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-lg shadow-pink-500/50" />
                          <a href={resumeLinks.ciscoCybersecurity} target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">
                            Cisco Intro to Cybersecurity
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 hover:text-pink-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-lg shadow-pink-500/50" />
                          <a href={resumeLinks.ciscoNetworking} target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">
                            Cisco Networking Basics
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accomplishments */}
                <div>
                  <SectionTitle icon={Trophy}>Accomplishments</SectionTitle>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300 shadow-lg">
                      <Trophy size={18} className="text-emerald-400 mt-1 flex-shrink-0 drop-shadow-lg" />
                      <div>
                        <p className="text-sm font-bold text-emerald-300 drop-shadow-lg">2nd Place</p>
                        <p className="text-xs text-gray-400">Graph Theory Programming Camp, AlgoUniversity</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-pink-500/10 backdrop-blur-xl border border-pink-500/30 rounded-xl hover:border-pink-400/50 transition-all duration-300 shadow-lg">
                      <Award size={18} className="text-pink-400 mt-1 flex-shrink-0 drop-shadow-lg" />
                      <div>
                        <p className="text-sm font-bold text-pink-300 drop-shadow-lg">Runner-up</p>
                        <p className="text-xs text-gray-400">Microsoft + Reskill Hackathon</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-purple-500/10 backdrop-blur-xl border border-purple-500/30 rounded-xl hover:border-purple-400/50 transition-all duration-300 shadow-lg">
                      <ExternalLink size={18} className="text-purple-400 mt-1 flex-shrink-0 drop-shadow-lg" />
                      <div>
                        <p className="text-sm font-bold text-purple-300 drop-shadow-lg">Research Published</p>
                        <p className="text-xs text-gray-400">JETIR Journal (May 2025)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-blue-500/10 backdrop-blur-xl border border-blue-500/30 rounded-xl hover:border-blue-400/50 transition-all duration-300 shadow-lg">
                      <Briefcase size={18} className="text-blue-400 mt-1 flex-shrink-0 drop-shadow-lg" />
                      <div>
                        <p className="text-sm font-bold text-blue-300 drop-shadow-lg">Design Lead</p>
                        <p className="text-xs text-gray-400">Blockchain Club, Anurag University</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-yellow-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-xl hover:border-yellow-400/50 transition-all duration-300 shadow-lg">
                      <Code size={18} className="text-yellow-400 mt-1 flex-shrink-0 drop-shadow-lg" />
                      <div>
                        <p className="text-sm font-bold text-yellow-300 drop-shadow-lg">Workshop Conductor</p>
                        <p className="text-xs text-gray-400">3+ workshops on AI, Blockchain, and Full-Stack Development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 space-y-10">
                {/* Skills */}
                <div>
                  <SectionTitle icon={Code}>Technical Skills</SectionTitle>
                  <div className="space-y-6">
                    {skillCategories.map((category, idx) => (
                      <div key={idx}>
                        <h4 className="text-sm font-bold text-gray-200 mb-4 drop-shadow-lg">{category.category}</h4>
                        <div className="flex flex-wrap gap-3">
                          {category.skills.map((skill, skillIdx) => (
                            <SkillBadge key={skillIdx} skill={skill} color={category.color} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <SectionTitle icon={Briefcase}>Experience</SectionTitle>
                  <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                      <ExperienceCard key={idx} {...exp} />
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <SectionTitle icon={ExternalLink}>Featured Projects</SectionTitle>
                  <div className="space-y-8">
                    {projects.map((project, idx) => (
                      <ProjectCard key={idx} {...project} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full max-w-5xl mx-auto mt-10 flex flex-col items-center text-xs text-gray-400 pb-6">
          <div className="bg-black/40 backdrop-blur-xl border border-gray-700/30 rounded-full px-6 py-3 shadow-xl">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} Dusharla Sathish</span>
              <span className="text-gray-500">|</span>
              <a
                href="mailto:23eg105a16@anurag.edu.in"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
            
          </div>
        </footer>
      </div>

      <style>
        {`
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          
          @media (min-width: 475px) {
            .xs\\:inline { display: inline; }
            .xs\\:hidden { display: none; }
          }
          
          @media (max-width: 474px) {
            .xs\\:inline { display: none; }
            .xs\\:hidden { display: inline; }
          }
        `}
      </style>
    </div>
  );
};

export default Resume;