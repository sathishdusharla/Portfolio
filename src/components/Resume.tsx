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
  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-600/50">
    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
      <Icon size={20} className="text-purple-400" />
    </div>
    <h3 className="text-xl font-bold text-white tracking-wide">
      {children}
    </h3>
  </div>
);

const SkillBadge = ({ skill, color }: { skill: string; color: string }) => (
  <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 ${color}`}>
    {skill}
  </span>
);

const ProjectCard = ({ title, tech, description, links, achievements }: any) => (
  <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
    <div className="flex items-start justify-between mb-3">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <div className="flex gap-2">
        {links.map((link: any, idx: number) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-1.5 rounded-lg border transition-all duration-300 hover:scale-110 ${link.color}`}
          >
            <link.icon size={14} />
          </a>
        ))}
      </div>
    </div>
    <div className="flex flex-wrap gap-2 mb-3">
      {tech.map((t: string, idx: number) => (
        <span key={idx} className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-md border border-gray-600/50">
          {t}
        </span>
      ))}
    </div>
    <ul className="space-y-1.5 text-sm text-gray-300">
      {description.map((desc: string, idx: number) => (
        <li key={idx} className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
          <span dangerouslySetInnerHTML={{ __html: desc }} />
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceCard = ({ title, company, duration, description }: any) => (
  <div className="relative pl-6 pb-6">
    <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-2 border-gray-800" />
    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
    <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-4 hover:border-purple-500/30 transition-all duration-300">
      <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-purple-400 font-medium">{company}</span>
        <span className="text-gray-500">•</span>
        <span className="text-sm text-gray-400">{duration}</span>
      </div>
      <ul className="space-y-1.5 text-sm text-gray-300">
        {description.map((desc: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: desc }} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Resume: React.FC = () => {

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C++", "C", "JavaScript", "SQL"],
      color: "bg-blue-500/10 text-blue-300 border-blue-500/30"
    },
    {
      category: "Data Structures & Algorithms",
      skills: ["DSA", "Object-Oriented Design", "System Design"],
      color: "bg-red-500/10 text-red-300 border-red-500/30"
    },
    {
      category: "Cloud & Data Tools", 
      skills: ["AWS (S3, Lambda, Glue, Redshift)", "Git", "GitHub", "Postman", "VS Code"],
      color: "bg-orange-500/10 text-orange-300 border-orange-500/30"
    },
    {
      category: "Web Development",
      skills: ["HTML/CSS", "React", "Flask", "Django", "MERN Stack"],
      color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "Oracle SQL"],
      color: "bg-purple-500/10 text-purple-300 border-purple-500/30"
    },
    {
      category: "AI/ML",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch"],
      color: "bg-pink-500/10 text-pink-300 border-pink-500/30"
    },
    {
      category: "Delivery & Agile",
      skills: ["Jira", "Figma", "Agile/Scrum", "Requirements Analysis", "Client Communication"],
      color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
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
        { icon: Github, url: resumeLinks.navsight, color: "bg-gray-700 text-gray-300 border-gray-600 hover:border-gray-500" },
        { icon: ExternalLink, url: resumeLinks.jetir, color: "bg-pink-500/10 text-pink-300 border-pink-500/30 hover:border-pink-500/50" }
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
        { icon: ExternalLink, url: resumeLinks.blockvotex, color: "bg-purple-500/10 text-purple-300 border-purple-500/30 hover:border-purple-500/50" }
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
        { icon: Github, url: resumeLinks.stegavault, color: "bg-gray-700 text-gray-300 border-gray-600 hover:border-gray-500" }
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
    <div className="min-h-screen bg-gradient-to-br from-[#181926] via-[#232347] to-[#181926] flex flex-col items-center justify-start py-10 px-2 sm:px-4">
      {/* Top Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-8">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 hover:bg-purple-700/80 text-purple-300 hover:text-white font-semibold shadow transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>
        <span className="text-xs text-gray-400 font-mono tracking-widest">
          Last updated: June 2025
        </span>
      </div>

      {/* Resume Container */}
      <div className="w-full max-w-5xl bg-gray-900/95 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />
        
        <div className="relative z-10 p-8">
          {/* Header Section */}
          <div className="mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                  Dusharla Sathish
                </h1>
                <p className="text-xl text-gray-300 mb-4 font-light">
                  Full Stack Developer & AI Enthusiast
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone size={16} className="text-cyan-400" />
                    <span>+91 99482 33702</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail size={16} className="text-pink-400" />
                    <span>23eg105a16@anurag.edu.in</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={16} className="text-emerald-400" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <a
                    href={resumeLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href={resumeLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 hover:text-blue-200 hover:border-blue-400 transition-all duration-300"
                  >
                    <Linkedin size={16} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300">
                    Blockchain Enthusiast
                  </span>
                  <span className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                    Student Leader
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="bg-gradient-to-r from-gray-800/30 to-gray-800/10 border border-gray-700/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                Career Objective
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Motivated Computer Science student with a strong foundation in <span className="text-purple-300 font-semibold">Software Development, Cloud Foundations, and Data Structures & Algorithms</span>. 
                Proficient in <span className="text-cyan-300 font-semibold">Python, Java, SQL, C++, C</span>, with hands-on experience in <span className="text-emerald-300 font-semibold">full-stack development, decentralized systems, and AI-powered applications</span>. 
                Passionate about building innovative solutions that bridge technology and real-world impact, Eager to grow through dynamic challenges and meaningful collaborations that push the boundaries of technology.
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-8">
              {/* Education */}
              <div>
                <SectionTitle icon={GraduationCap}>Education</SectionTitle>
                <div className="space-y-4">
                  <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">B.Tech Computer Science</h4>
                    <p className="text-sm text-gray-400 mb-2">Anurag University, Hyderabad</p>
                    <p className="text-xs text-gray-500 mb-2">2023 – 2027</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded-md font-medium">
                        CGPA: 9.15
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-3">
                    <h4 className="font-medium text-gray-200 text-sm mb-1">Intermediate Education</h4>
                    <p className="text-xs text-gray-400 mb-1">Saigouthami Junior College</p>
                    <span className="px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded">
                      CGPA: 9.72
                    </span>
                  </div>
                  
                  <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-3">
                    <h4 className="font-medium text-gray-200 text-sm mb-1">Secondary Education</h4>
                    <p className="text-xs text-gray-400 mb-1">Montessori High School</p>
                    <span className="px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded">
                      CGPA: 10.0
                    </span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <SectionTitle icon={Award}>Certifications</SectionTitle>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-cyan-400 mb-2">Cloud & Data</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-1 h-1 rounded-full bg-cyan-400" />
                        <a href={resumeLinks.awsCloudFoundations} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                          AWS Cloud Foundations
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-1 h-1 rounded-full bg-cyan-400" />
                        <a href={resumeLinks.awsDataEngineering} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                          AWS Data Engineering
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-1 h-1 rounded-full bg-cyan-400" />
                        <a href={resumeLinks.ibmEnterpriseAI} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                          IBM Enterprise AI
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-1 h-1 rounded-full bg-cyan-400" />
                        <a href={resumeLinks.ibmDataScience} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                          IBM Enterprise Data Science
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-yellow-400 mb-2">Development</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-1 h-1 rounded-full bg-yellow-400" />
                        <a href={resumeLinks.hackerrankReact} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
                          HackerRank Frontend (React)
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-1 h-1 rounded-full bg-yellow-400" />
                        <a href={resumeLinks.hackerrankPython} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
                          HackerRank Python Programming
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-pink-400 mb-2">Cybersecurity</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-1 h-1 rounded-full bg-pink-400" />
                        <a href={resumeLinks.ciscoCybersecurity} target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">
                          Cisco Intro to Cybersecurity
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-1 h-1 rounded-full bg-pink-400" />
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
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                    <Trophy size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-emerald-300">2nd Place</p>
                      <p className="text-xs text-gray-400">Graph Theory Programming Camp, AlgoUniversity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-pink-500/5 border border-pink-500/20 rounded-lg">
                    <Award size={16} className="text-pink-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-pink-300">Runner-up</p>
                      <p className="text-xs text-gray-400">Microsoft + Reskill Hackathon</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                    <ExternalLink size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-purple-300">Research Published</p>
                      <p className="text-xs text-gray-400">JETIR Journal (May 2025)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                    <Briefcase size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-blue-300">Design Lead</p>
                      <p className="text-xs text-gray-400">Blockchain Club, Anurag University</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                    <Code size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-yellow-300">Workshop Conductor</p>
                      <p className="text-xs text-gray-400">3+ workshops on AI, Blockchain, and Full-Stack Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Skills */}
              <div>
                <SectionTitle icon={Code}>Technical Skills</SectionTitle>
                <div className="space-y-4">
                  {skillCategories.map((category, idx) => (
                    <div key={idx}>
                      <h4 className="text-sm font-medium text-gray-300 mb-3">{category.category}</h4>
                      <div className="flex flex-wrap gap-2">
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
                <div className="space-y-6">
                  {experiences.map((exp, idx) => (
                    <ExperienceCard key={idx} {...exp} />
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <SectionTitle icon={ExternalLink}>Featured Projects</SectionTitle>
                <div className="space-y-6">
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
      <footer className="w-full max-w-5xl mx-auto mt-8 flex flex-col items-center text-xs text-gray-500 pb-4">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Dusharla Sathish</span>
          <span className="text-gray-400">|</span>
          <a
            href="mailto:23eg105a16@anurag.edu.in"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
        <div className="mt-1">
          Built with <span className="text-purple-400 font-semibold">React</span> & <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
};

export default Resume;