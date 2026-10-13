import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('school');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: 'School Management ERP', message: '' });

  // EmailJS Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    // EmailJS Keys (Yahan apni actual keys bharein)
    const SERVICE_ID = "service_4ceim9g"; // e.g. "service_abc123"
    const TEMPLATE_ID = "template_pu5axsg"; // e.g. "template_xyz789"
    const PUBLIC_KEY = "J6JWtrx-BNjVIKo6P";     

    const templateParams = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        setLoading(false);
        setFormSubmitted(true);
        setFormData({ name: '', email: '', service: 'School Management ERP', message: '' });

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setLoading(false);
        alert('Message nahi bheja ja saka. Kripya punah prayas karein ya direct call karein.');
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      
      {/* 1. FIXED HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/upenlogo.png" 
              alt="UPEN Logo" 
              className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                UPEN
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">
                Deoria & Gorakhpur
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About Me</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Client Reviews</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:9984078746" 
              className="text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg hover:border-blue-500/50 transition"
            >
              📞 +91 9984078746
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all transform active:scale-95"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 space-y-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">About Me</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Skills</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Client Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Contact</a>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a href="tel:9984078746" className="text-center text-sm font-semibold text-blue-400">📞 +91 9984078746</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 rounded-xl text-center text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600">Get Started</a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1">

        {/* 2. HERO SECTION */}
        <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Deoria & Gorakhpur’s Trusted Web & App Developer
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15]">
              Website, Mobile App & <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">School ERP Solutions</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
              देवरिया और गोरखपुर में बेस्ट वेबसाइट, मोबाइल ऐप और स्कूल मैनेजमेंट सॉफ्टवेयर बनवाएं। Empowering schools like Kinder Stars Convent School with advanced automated portals.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
              >
                Hire Me / Get Portal
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800/80 transition"
              >
                Explore Services
              </a>
            </div>

            {/* Live Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-slate-800/80 pt-10">
              <div>
                <p className="text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Custom Code</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-400">Live</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">School Portals</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-indigo-400">Local</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Deoria & Gorakhpur</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-cyan-400">MERN</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Stack & Mobile Apps</p>
              </div>
            </div>

          </div>
        </section>

        {/* 3. ABOUT ME SECTION */}
        <section id="about" className="py-24 bg-slate-900/30 border-t border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Photo Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl p-2 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 shadow-2xl">
                  <div className="w-full h-full rounded-[20px] bg-slate-950 overflow-hidden flex items-center justify-center relative">
                    <img 
                      src="/upendra.png" 
                      alt="Upendra Shriwastava" 
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-lg border border-blue-400/30">
                    Upendra Shriwastava 👨‍💻
                  </div>
                </div>
              </div>

              {/* Bio Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">About Me</h2>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Educator, Developer & Tech Architect in Deoria
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                  Hello! I am <strong className="text-white">Upendra Shriwastava</strong>. I work passionately as a Class 10 NCERT Mathematics teacher, helping students master geometry and analytical problem-solving.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  Based in Uttar Pradesh, I provide top-tier web development, mobile app creation, and school management software services across <strong className="text-white">Deoria and Gorakhpur</strong>. I specialize in building custom portals like <code className="text-blue-400 font-mono">kinderstarsconventschool.in</code> with automated fee tracking, admit cards, and high SEO rankings.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div>
                    <p className="text-sm font-bold text-white">📍 Location</p>
                    <p className="text-xs text-slate-400 mt-1">Deoria & Gorakhpur, UP</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">✉️ Email</p>
                    <a href="mailto:upendrashriwastava@gmail.com" className="text-xs text-blue-400 hover:underline mt-1 block">upendrashriwastava@gmail.com</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. MY SKILLS SECTION */}
        <section id="skills" className="py-24 border-t border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Technical Expertise</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                My Skills & Tech Stack
              </h3>
              <p className="mt-4 text-slate-400 text-base">
                Equipped with modern frontend frameworks, backend engines, and database systems to build scalable web and mobile apps.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🌐</div>
                <h4 className="text-white font-bold text-base">HTML5</h4>
                <p className="text-xs text-slate-400 mt-1">Semantic & Accessible</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎨</div>
                <h4 className="text-white font-bold text-base">CSS & Tailwind</h4>
                <p className="text-xs text-slate-400 mt-1">Modern Styling</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📱</div>
                <h4 className="text-white font-bold text-base">Mobile Apps</h4>
                <p className="text-xs text-slate-400 mt-1">Responsive Design</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚛️</div>
                <h4 className="text-white font-bold text-base">React.js</h4>
                <p className="text-xs text-slate-400 mt-1">Vite & Components</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🚀</div>
                <h4 className="text-white font-bold text-base">Node & Express</h4>
                <p className="text-xs text-slate-400 mt-1">Backend APIs</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🍃</div>
                <h4 className="text-white font-bold text-base">MongoDB</h4>
                <p className="text-xs text-slate-400 mt-1">Database & Records</p>
              </div>

            </div>
          </div>
        </section>

        {/* 5. SERVICES SHOWCASE */}
        <section id="services" className="py-24 bg-slate-900/50 border-t border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Our Offerings</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Tailored Solutions for Education & Business in Deoria & Gorakhpur
              </h3>
              <p className="mt-4 text-slate-400 text-base">
                Whether you need a school ERP software, a custom website, or a mobile app, we deliver excellence.
              </p>

              {/* Tabs Toggle */}
              <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
                <button
                  onClick={() => setActiveTab('school')}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === 'school' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🏫 School Management ERP
                </button>
                <button
                  onClick={() => setActiveTab('business')}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === 'business' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  📱 Web & Mobile App Dev
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'school' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-2xl mb-6">🎓</div>
                  <h4 className="text-xl font-bold text-white mb-2">Student Records & Admission</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Digital student database, admission workflows, class assignment, and automated registration management for schools in Deoria.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-2xl mb-6">📄</div>
                  <h4 className="text-xl font-bold text-white mb-2">Auto Admit Cards & Marksheets</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Generate secure examination admit cards, report cards, and result verification portals instantly.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl mb-6">💰</div>
                  <h4 className="text-xl font-bold text-white mb-2">Fee Tracking & Receipts</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Automated monthly fee collection logs, due payment notifications, and printable digital receipts.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-2xl mb-6">🌐</div>
                  <h4 className="text-xl font-bold text-white mb-2">Website Development</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    High-performance business and school websites built with React & Tailwind, custom-tailored for local enterprises in Gorakhpur and Deoria.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-2xl mb-6">📱</div>
                  <h4 className="text-xl font-bold text-white mb-2">Mobile App Development</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Custom mobile application development to take your business or educational institution straight to customers' smartphones.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl mb-6">⚙️</div>
                  <h4 className="text-xl font-bold text-white mb-2">Domain & Local SEO</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Custom domain setup, Google Search Console optimization, and local SEO to rank #1 in Deoria and Gorakhpur searches.
                  </p>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* 6. CUSTOMER SATISFACTION */}
        <section id="testimonials" className="py-24 border-t border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Customer Satisfaction</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Trusted by School Principals & Local Clients
              </h3>
              <p className="mt-4 text-slate-400 text-base">
                Hear what our clients have to say about our web solutions and software platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between relative shadow-xl">
                <div className="absolute top-6 right-8 text-blue-500/20 text-6xl font-serif">“</div>
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                    "Upendra Shriwastava designed and developed our official school website <strong className="text-white font-semibold">kinderstarsconventschool.in</strong>. The platform is extremely smooth, professional, and has made managing student records and school notices effortless for us in Deoria!"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-lg">DP</div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Dhirendra Prajapati</h4>
                    <p className="text-xs text-blue-400 font-medium">Principal, Kinder Stars Convent School</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between relative shadow-xl">
                <div className="absolute top-6 right-8 text-blue-500/20 text-6xl font-serif">“</div>
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                    "Best website and app developer in the Gorakhpur and Deoria region! Upendra delivered our custom web portal on time with exceptional quality and responsiveness."
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 text-indigo-400 font-bold flex items-center justify-center text-lg">US</div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Satisfied Local Client</h4>
                    <p className="text-xs text-indigo-400 font-medium">Business Portal Owner</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. CONTACT FORM (WITH EMAILJS) */}
        <section id="contact" className="py-24 bg-slate-900/40 border-t border-slate-800/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              <div>
                <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Get in Touch</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Let's Build Your Website or App in Deoria & Gorakhpur
                </h3>
                <p className="mt-4 text-slate-400 text-base leading-relaxed">
                  Have questions about school management systems, website development, or mobile apps? Reach out directly using the details below or send a message.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center text-xl">📞</div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Direct Phone</p>
                      <a href="tel:9984078746" className="text-lg font-bold text-white hover:text-blue-400 transition">+91 9984078746</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-400 flex items-center justify-center text-xl">✉️</div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email Address</p>
                      <a href="mailto:upendrashriwastava@gmail.com" className="text-base font-bold text-white hover:text-blue-400 transition">upendrashriwastava@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative">
                {formSubmitted && (
                  <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center text-center p-6 z-20">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mb-4">✓</div>
                    <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-slate-400 text-sm mt-2 max-w-sm">Thank you for reaching out. Upendra will get back to you shortly on your email.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your name" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@gmail.com" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Interested Service</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 text-sm"
                    >
                      <option value="School Management ERP">School Management ERP</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Domain & SEO Setup">Domain & SEO Setup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Message</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your project requirements..." 
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/25 transition flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending Message...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 8. FIXED BOTTOM FOOTER */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Col 1 - Logo & About */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/upenlogo.png" alt="UPEN Logo" className="h-9 w-auto object-contain" />
                <span className="text-lg font-black text-white tracking-wider">UPEN</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Top Web, Mobile App & School ERP development serving Deoria & Gorakhpur.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Services</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-blue-400 transition">School ERP Portal</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Website Development</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Mobile App Development</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Deoria & Gorakhpur SEO</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Contact Info</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="tel:9984078746" className="hover:text-blue-400 transition">📞 +91 9984078746</a></li>
                <li><a href="mailto:upendrashriwastava@gmail.com" className="hover:text-blue-400 transition">✉️ upendrashriwastava@gmail.com</a></li>
                <li className="text-slate-500">📍 Deoria & Gorakhpur, UP</li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Client Project</h4>
              <p className="text-xs text-slate-500 mb-3">Proudly powering <span className="text-blue-400 font-semibold">kinderstarsconventschool.in</span></p>
              <a href="#contact" className="block text-center py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition">
                Inquire Now
              </a>
            </div>

          </div>

          <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
            <p>© {new Date().getFullYear()} UPEN Solutions. Deoria & Gorakhpur. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}