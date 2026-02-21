import React, { useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Redesign',
      category: 'UX/UI Design',
      year: '2024',
      description: 'Complete redesign of shopping experience for modern consumers',
      image: '🛍️'
    },
    {
      id: 2,
      title: 'Design System',
      category: 'System Design',
      year: '2024',
      description: 'Comprehensive design system for enterprise application',
      image: '📐'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'UX/UI Design',
      year: '2023',
      description: 'Intuitive banking experience for digital-first users',
      image: '💳'
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      category: 'Data Visualization',
      year: '2023',
      description: 'Real-time analytics dashboard for business intelligence',
      image: '📊'
    }
  ];

  const skills = [
    'UX/UI Design',
    'Design Systems',
    'Figma',
    'Adobe XD',
    'Prototyping',
    'User Research',
    'Wireframing',
    'Visual Design',
    'Interaction Design',
    'Responsive Design'
  ];

  const experience = [
    {
      role: 'Senior UX/UI Designer',
      company: 'Design Studio Inc.',
      period: '2024 - Present',
      description: 'Leading design projects and mentoring junior designers'
    },
    {
      role: 'Product Designer',
      company: 'Tech Startup Co.',
      period: '2022 - 2024',
      description: 'Designed and shipped multiple product features'
    },
    {
      role: 'Junior Designer',
      company: 'Creative Agency',
      period: '2020 - 2022',
      description: 'Worked on various client projects and branding'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold tracking-tight">
            J●●
          </a>
          <div className="flex gap-12">
            <a
              href="#work"
              className="text-sm tracking-wider hover:text-gray-400 transition-colors"
            >
              WORK
            </a>
            <a
              href="#resume"
              className="text-sm tracking-wider hover:text-gray-400 transition-colors"
            >
              RESUME
            </a>
            <a
              href="#about"
              className="text-sm tracking-wider hover:text-gray-400 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wider hover:text-gray-400 transition-colors"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-8 pt-20">
        <div className="text-center max-w-4xl">
          <h1 className="text-8xl md:text-9xl font-black mb-8 tracking-tighter leading-none">
            DESIGNER<br/>JOO
          </h1>
          <p className="text-xl md:text-2xl text-purple-400 mb-4 font-light">
            I'm Leeae, a Digital Designer
          </p>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            specializing in UX/UI and Design systems.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-sm text-gray-500 italic">Scroll Down</p>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-sm">↓</span>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-20 tracking-tighter">WORK</h2>

          <div className="grid md:grid-cols-2 gap-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-white/5 rounded-lg mb-6 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all duration-300">
                  <span className="text-6xl opacity-50">{project.image}</span>
                </div>

                {/* Project Info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-sm text-purple-400">{project.category}</p>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen py-32 px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black mb-20 tracking-tighter">RESUME</h2>

          {/* Experience */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-purple-400">Experience</h3>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-white/10 pl-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold">{exp.role}</h4>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-purple-400">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:border-purple-400/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Download Resume */}
          <div className="mt-20">
            <button className="px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black mb-20 tracking-tighter">ABOUT</h2>

          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {/* Profile Image Placeholder */}
              <div className="md:col-span-1">
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <p className="text-xl leading-relaxed text-gray-300">
                  I'm Leeae, a digital designer passionate about creating beautiful,
                  functional experiences that solve real problems. I bridge the gap
                  between design and development using modern AI tools.
                </p>
                <p className="text-lg leading-relaxed text-gray-400">
                  With a background in visual design and a love for technology,
                  I specialize in UX/UI design and design systems. I believe in
                  clarity first, design forever.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="border-t border-white/10 pt-12">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Design Philosophy</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold mb-2">User-Centered</h4>
                  <p className="text-sm text-gray-400">
                    Every design decision is driven by user needs and validated through research.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Systematic</h4>
                  <p className="text-sm text-gray-400">
                    Building scalable design systems that ensure consistency and efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Collaborative</h4>
                  <p className="text-sm text-gray-400">
                    Working closely with developers and stakeholders to bring ideas to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-32 px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black mb-20 tracking-tighter">CONTACT</h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Get in Touch</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas,
                  or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:leeae@example.com" className="block group">
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-lg group-hover:text-purple-400 transition-colors">
                    leeae@example.com
                  </p>
                </a>

                <a href="https://linkedin.com/in/leeaejoo" target="_blank" rel="noopener noreferrer" className="block group">
                  <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                  <p className="text-lg group-hover:text-purple-400 transition-colors">
                    /in/leeaejoo
                  </p>
                </a>

                <a href="https://twitter.com/leeaejoo" target="_blank" rel="noopener noreferrer" className="block group">
                  <p className="text-sm text-gray-500 mb-1">Twitter</p>
                  <p className="text-lg group-hover:text-purple-400 transition-colors">
                    @leeaejoo
                  </p>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-sm text-gray-500">
          <p>© 2026 Leeae Joo. All rights reserved.</p>
          <p>Designed with ❤️ and AI</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
