'use client'
import React, { useState } from 'react'
import { Mail, Phone, ExternalLink, ChevronRight, Check } from 'lucide-react'

const VIDEO_HERO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4";
const VIDEO_ABOUT = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4";
const VIDEO_CTA = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4";

const FEATURED_PROJECTS = [
  { 
    name: "Mugai Technologies", 
    cat: "Business & Corporate", 
    url: "https://aliceblue-tiger-698743.hostingersite.com/",
    vid: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4" 
  },
  { 
    name: "Sri Sukhalaya Matrimony", 
    cat: "Matrimony Platform", 
    url: "https://limegreen-antelope-183177.hostingersite.com/",
    vid: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4" 
  },
  { 
    name: "Lishan Sarees", 
    cat: "E-Commerce", 
    url: "https://lishansarees.com/",
    vid: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4" 
  }
];

const OTHER_PROJECTS = [
  { name: "Aghora Engineering Consultants", cat: "Business & Corporate", url: "https://aghoraengineeringconsultants.com/" },
  { name: "District Bar Association", cat: "Legal & Associations", url: "https://hotpink-wasp-145065.hostingersite.com/" },
  { name: "Diocese of Indian Christian Church", cat: "Organizations", url: "https://lavender-bear-754863.hostingersite.com/" },
  { name: "IELTS Horizon", cat: "Education & Training", url: "https://ieltshorizon.com/" },
  { name: "Find You Counselling Center", cat: "Healthcare & Wellness", url: "https://lime-spoonbill-743959.hostingersite.com/" },
  { name: "Tamil Oviyam", cat: "Media & Culture", url: "https://grey-boar-606830.hostingersite.com/" },
  { name: "Medai The Stage", cat: "Entertainment & Creative", url: "https://medaithestage.com/" },
  { name: "Kinngs Network", cat: "Media & Networking", url: "https://kinngsnetwork.com/" },
  { name: "Aerosafe Tours & Travel", cat: "Travel & Tourism", url: "https://aerosafetours.com/" },
  { name: "First Dream Destination Tours", cat: "Travel & Tourism", url: "https://www.firstdreamdestinations.com/" },
  { name: "Kleen Kulb", cat: "SaaS Platform", url: "https://cornflowerblue-grasshopper-952998.hostingersite.com/" }
];

const SERVICES = [
  { 
    title: "Website Development", 
    details: "Static (from ₹5,000), Dynamic (₹7,000-₹10,000+), Animated (from ₹10,000+).", 
    bullets: ["Responsive Design", "Mobile Friendly", "WhatsApp Integration", "SEO-Friendly"] 
  },
  { 
    title: "Web Applications", 
    details: "Custom applications designed for business management and scalability.", 
    bullets: ["SaaS Platforms", "Admin Dashboards", "Booking Systems", "Analytics Panels"] 
  },
  { 
    title: "Mobile App Development", 
    details: "Custom mobile applications built for performance and user engagement.", 
    bullets: ["Android Applications", "iOS Applications", "Cross-Platform", "Business Apps"] 
  },
  { 
    title: "Custom Software", 
    details: "Tailor-made systems integrated perfectly with your standard workflow.", 
    bullets: ["CRM Systems", "HRM Systems", "ERP Solutions", "Inventory & Billing"] 
  },
  { 
    title: "Browser Extensions", 
    details: "Chrome extensions built to automate web workflows and boost productivity.", 
    bullets: ["Chrome Extensions", "Workflow Automation", "Lead Gen Tools", "Social Media Tools"] 
  },
  { 
    title: "Automation Solutions", 
    details: "Reduce manual workflows with automated integrations.", 
    bullets: ["Lead Generation", "Data Processing", "Business Process", "Engagement Setup"] 
  },
  { 
    title: "Digital Marketing", 
    details: "Social handling,Meta Ads, & shoots starting from ₹7,000 up to ₹25,000/month.", 
    bullets: ["Meta Ads Management", "Social Media Handling", "Video Shoot + Editing", "Lead Generation campaigns"] 
  },
  { 
    title: "QA Testing & Audits", 
    details: "Ensure software security, reliability, and speed before launch day.", 
    bullets: ["Manual Testing", "Automation Testing", "Functional & Regression", "Performance Audits"] 
  }
];

export default function OrbisNft() {
  const [formState, setFormState] = useState({ name: '', email: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setSubmitted(true);
      setFormState({ name: '', email: '', details: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-orbis-bg text-cream font-mono select-none">
      
      {/* Texture Overlay (z-50) */}
      <div className="texture-overlay pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="relative w-full h-screen overflow-hidden rounded-b-[32px] bg-black">
        <video
          src={VIDEO_HERO}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />

        <div className="relative z-10 w-full h-full max-w-[1831px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-between py-8">
          
          <header className="flex justify-between items-center w-full">
            <span 
              onClick={() => handleScrollTo('hero')}
              className="font-grotesk text-base tracking-widest text-cream uppercase cursor-pointer select-none"
            >
              Mirastra.Sys
            </span>

            {/* Navigation Bar */}
            <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px] z-50">
              <ul className="flex gap-[32px]">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'Services', id: 'orbis-services' },
                  { label: 'Portfolio', id: 'orbis-portfolio' },
                  { label: 'Tech Stack', id: 'tech-stack-section' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.label}>
                    <button 
                      onClick={() => handleScrollTo(link.id)}
                      className="font-grotesk text-[13px] tracking-widest uppercase text-cream hover:text-neon transition-colors cursor-pointer bg-transparent border-none"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="w-[100px] lg:hidden" />
          </header>

          {/* Social Icons (Desktop Right) */}
          <div className="hidden lg:flex flex-col gap-4 absolute top-24 right-6 sm:right-10 lg:right-16 z-50">
            <a 
              href="mailto:mirastratech@gmail.com"
              className="w-[56px] h-[56px] flex items-center justify-center liquid-glass rounded-[1rem] hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Mail size={20} className="text-cream" />
            </a>
            <a 
              href="tel:+919047432540"
              className="w-[56px] h-[56px] flex items-center justify-center liquid-glass rounded-[1rem] hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Phone size={20} className="text-cream" />
            </a>
          </div>

          {/* Hero Content */}
          <div className="my-auto relative max-w-[90vw]">
            <div className="relative inline-block lg:ml-32 mt-12">
              <h1 
                className="font-grotesk uppercase text-cream tracking-wide text-left" 
                style={{ 
                  fontSize: 'clamp(40px, 6vw, 90px)',
                  lineHeight: 'clamp(1.05, 5vw, 1.0)'
                }}
              >
                EIGHT SERVICES.<br />
                NINE INDUSTRIES.<br />
                INFINITE SCALE.
              </h1>
              <span 
                className="absolute right-[-40px] bottom-[-20px] sm:right-[-60px] sm:bottom-[-30px] font-condiment text-neon tracking-normal rotate-[-1deg] mix-blend-exclusion opacity-90 select-none"
                style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}
              >
                capabilities list
              </span>
            </div>
          </div>

          <div className="lg:hidden flex justify-center gap-4 w-full mt-4 z-50">
            <a 
              href="mailto:mirastratech@gmail.com"
              className="w-[50px] h-[50px] flex items-center justify-center liquid-glass rounded-[0.8rem] hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Mail size={18} className="text-cream" />
            </a>
            <a 
              href="tel:+919047432540"
              className="w-[50px] h-[50px] flex items-center justify-center liquid-glass rounded-[0.8rem] hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Phone size={18} className="text-cream" />
            </a>
          </div>

          <div className="flex justify-between items-center text-[10px] tracking-[0.25em] text-cream/60">
            <span>MIRASTRA TECH // EST. MAY 2026</span>
            <span>STATUS // READY</span>
          </div>

        </div>
      </section>

      {/* SECTION 2: CAPABILITIES / SERVICES */}
      <section id="orbis-services" className="relative w-full min-h-screen overflow-hidden py-16 sm:py-24">
        <video
          src={VIDEO_ABOUT}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        />

        <div className="relative z-10 w-full max-w-[1831px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-between h-full">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full mt-10 mb-16">
            <div className="relative inline-block select-none">
              <h2 
                className="font-grotesk uppercase text-cream tracking-wide"
                style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
              >
                CORE SERVICES.<br />
                eight fields.
              </h2>
              <span 
                className="absolute right-[-20px] bottom-[-24px] sm:right-[-32px] sm:bottom-[-36px] font-condiment text-neon tracking-normal rotate-[-1deg] mix-blend-exclusion select-none"
                style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
              >
                capabilities
              </span>
            </div>

            <p className="text-sm sm:text-base uppercase tracking-wider text-cream/90 max-w-[320px] leading-relaxed self-end">
              Static websites, custom web applications, native mobile apps, browser extensions, and business process automation solutions built to scale.
            </p>
          </div>

          {/* Grid of 8 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full z-20">
            {SERVICES.map((srv, idx) => (
              <div key={idx} className="liquid-glass rounded-[20px] p-6 hover:bg-white/[0.03] transition-all">
                <span className="text-[10px] tracking-widest text-neon uppercase font-bold block mb-2">// 0{idx + 1}</span>
                <h4 className="font-grotesk text-xl uppercase tracking-wider text-cream mb-2">{srv.title}</h4>
                <p className="text-[11px] text-cream/80 leading-relaxed mb-4 h-12 overflow-hidden">{srv.details}</p>
                <ul className="space-y-1.5 border-t border-white/10 pt-3">
                  {srv.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-[10px] text-cream/60 flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-neon rounded-full" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: PORTFOLIO & WORK */}
      <section id="orbis-portfolio" className="w-full bg-[#010828] py-20 sm:py-32">
        <div className="w-full max-w-[1831px] mx-auto px-6 sm:px-10 lg:px-16">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 sm:mb-24">
            <div>
              <h2 
                className="font-grotesk uppercase text-cream tracking-wide leading-none"
                style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
              >
                Collection of<br />
                <span className="flex items-center gap-4">
                  <span className="font-condiment text-neon tracking-normal lowercase self-start rotate-[-1deg] inline-block ml-8 sm:ml-16 lg:ml-24">
                    production
                  </span>
                  <span>launches</span>
                </span>
              </h2>
            </div>

            <button 
              onClick={() => handleScrollTo('contact')}
              className="group relative flex items-center justify-start text-cream hover:text-neon transition-colors cursor-pointer select-none self-end bg-transparent border-none"
            >
              <div className="flex items-center gap-2">
                <span 
                  className="font-grotesk uppercase select-none tracking-normal leading-none"
                  style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
                >
                  START
                </span>
                <span className="flex flex-col items-start leading-[0.95] select-none font-grotesk tracking-widest text-left" style={{ fontSize: 'clamp(20px, 3vw, 36px)' }}>
                  <span>YOUR</span>
                  <span>PROJECT</span>
                </span>
              </div>
              <div 
                className="absolute bottom-[-10px] left-0 h-[6px] sm:h-[10px] bg-neon w-full transition-all duration-300 group-hover:scale-x-[1.05]"
                style={{ willChange: 'transform' }}
              />
            </button>
          </div>

          {/* Featured Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {FEATURED_PROJECTS.map((card, idx) => (
              <div 
                key={idx}
                className="liquid-glass rounded-[32px] p-[18px] transition-colors duration-300 hover:bg-white/10 flex flex-col justify-between"
              >
                <div className="relative pb-[100%] rounded-[24px] overflow-hidden mb-5">
                  <video
                    src={card.vid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
                  <div className="max-w-[70%]">
                    <div className="text-[11px] text-cream/70 uppercase tracking-widest select-none">
                      {card.cat}
                    </div>
                    <div className="font-grotesk text-base text-cream mt-1 tracking-wide uppercase select-none truncate">
                      {card.name}
                    </div>
                  </div>

                  <a 
                    href={card.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center text-white shadow-lg shadow-purple-500/50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <ChevronRight size={22} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Other Portfolio List */}
          <div className="border-t border-white/10 pt-16 mt-20">
            <h3 className="font-grotesk text-2xl uppercase tracking-wider text-neon mb-10">// Complete Launcher Index</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OTHER_PROJECTS.map((proj, idx) => (
                <a 
                  key={idx}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass rounded-[16px] px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-all group"
                >
                  <div>
                    <div className="text-[10px] text-cream/50 uppercase tracking-widest">{proj.cat}</div>
                    <div className="text-sm font-medium text-cream group-hover:text-neon transition-colors mt-0.5">{proj.name}</div>
                  </div>
                  <ExternalLink size={14} className="text-cream/40 group-hover:text-neon transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Technology Expertise Section */}
          <div id="tech-stack-section" className="border-t border-white/10 pt-16 mt-24">
            <h3 className="font-grotesk text-2xl uppercase tracking-wider text-neon mb-12">// Technology Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="font-grotesk text-lg tracking-widest uppercase mb-4 text-cream">Frontend</h4>
                <ul className="space-y-1.5 text-xs text-cream/70">
                  {["React.js", "Next.js", "Angular", "JavaScript", "TypeScript", "Tailwind CSS"].map(t => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-neon rounded-full" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-grotesk text-lg tracking-widest uppercase mb-4 text-cream">Backend</h4>
                <ul className="space-y-1.5 text-xs text-cream/70">
                  {["Node.js", "Express.js", "PHP", "REST APIs", "Custom API Development"].map(t => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-neon rounded-full" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-grotesk text-lg tracking-widest uppercase mb-4 text-cream">Database</h4>
                <ul className="space-y-1.5 text-xs text-cream/70">
                  {["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Real-Time Databases"].map(t => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-neon rounded-full" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-grotesk text-lg tracking-widest uppercase mb-4 text-cream">Infrastructure</h4>
                <ul className="space-y-1.5 text-xs text-cream/70">
                  {["Cloud Deployment", "VPS Servers", "SSL Config", "Performance Optimisation", "Security Audits"].map(t => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-neon rounded-full" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="border-t border-white/10 pt-16 mt-24">
            <h3 className="font-grotesk text-2xl uppercase tracking-wider text-neon mb-10">// Industries We Serve</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Education & E-Learning", "Healthcare & Wellness", "Legal & Associations",
                "Travel & Tourism", "Matrimony Platforms", "Media & Entertainment",
                "Retail & E-Commerce", "Consulting & SaaS Products", "Small & Medium Businesses"
              ].map(ind => (
                <span key={ind} className="liquid-glass rounded-full px-5 py-2 text-xs text-cream/80 border border-white/5 uppercase select-none hover:bg-white/5 hover:text-neon transition-colors">
                  {ind}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: CONTACT & DETAILS */}
      <section id="contact" className="relative w-full bg-[#010828]">
        <video
          src={VIDEO_CTA}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block opacity-80 z-0"
        />

        <div className="absolute inset-0 z-10 w-full h-full max-w-[1831px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-between py-12 select-none">
          
          <div className="w-full h-px" />

          {/* Left panel contact sidebar links */}
          <div className="absolute left-[8%] bottom-[8%] sm:bottom-[12%] lg:bottom-[15%] z-20">
            <div className="flex flex-col liquid-glass rounded-[0.8rem] sm:rounded-[1.25rem]">
              <a
                href="mailto:mirastratech@gmail.com"
                className="w-[12vw] h-[12vw] sm:w-[14.375rem] sm:h-[4.5rem] md:w-[10.78125rem] md:h-[4rem] lg:w-[16.77rem] lg:h-[5rem] flex items-center justify-center hover:bg-white/10 active:bg-white/20 transition-colors duration-200 cursor-pointer border-b border-white/10"
              >
                <Mail className="text-cream w-4 h-4 sm:w-5 sm:h-5 mr-0 sm:mr-3" />
                <span className="hidden sm:inline text-xs text-cream uppercase font-bold tracking-widest">Email Us</span>
              </a>
              <a
                href="tel:+919047432540"
                className="w-[12vw] h-[12vw] sm:w-[14.375rem] sm:h-[4.5rem] md:w-[10.78125rem] md:h-[4rem] lg:w-[16.77rem] lg:h-[5rem] flex items-center justify-center hover:bg-white/10 active:bg-white/20 transition-colors duration-200 cursor-pointer"
              >
                <Phone className="text-cream w-4 h-4 sm:w-5 sm:h-5 mr-0 sm:mr-3" />
                <span className="hidden sm:inline text-xs text-cream uppercase font-bold tracking-widest">Call Us</span>
              </a>
            </div>
          </div>

          {/* Form / CTA overlay */}
          <div className="relative self-end lg:pr-[20%] lg:pl-[15%] text-right mt-10 max-w-[90vw]">
            <span 
              className="absolute left-[-20px] top-[-30px] sm:left-[-40px] sm:top-[-48px] font-condiment text-neon tracking-normal rotate-[-1deg] mix-blend-exclusion select-none"
              style={{ fontSize: 'clamp(17px, 4vw, 68px)' }}
            >
              Partner with us
            </span>

            {submitted ? (
              <div className="liquid-glass rounded-[24px] p-8 text-right max-w-md ml-auto">
                <div className="w-12 h-12 rounded-full bg-neon/20 flex items-center justify-center mb-4 ml-auto">
                  <Check className="text-neon" size={24} />
                </div>
                <h3 className="font-grotesk text-2xl uppercase tracking-wider text-cream mb-2">Transmission complete.</h3>
                <p className="text-xs text-cream/70 leading-relaxed uppercase">We have received your details. A project manager will review them and establish contact within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md ml-auto text-left pointer-events-auto bg-black/40 backdrop-blur-md p-6 rounded-[24px] border border-white/10 shadow-xl">
                <h3 className="font-grotesk text-xl uppercase tracking-wider text-cream text-center border-b border-white/10 pb-4 mb-4 select-none">Project Brief</h3>
                
                <div>
                  <label className="text-[9px] uppercase tracking-widest text-cream/50 mb-1 block select-none">Identifier (Name)</label>
                  <input
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon rounded-[8px] px-3 py-2 text-xs text-cream outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-widest text-cream/50 mb-1 block select-none">Contact frequency (Email)</label>
                  <input
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon rounded-[8px] px-3 py-2 text-xs text-cream outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-widest text-cream/50 mb-1 block select-none">Transmission (Details)</label>
                  <textarea
                    value={formState.details}
                    onChange={(e) => setFormState(prev => ({ ...prev, details: e.target.value }))}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon rounded-[8px] px-3 py-2 text-xs text-cream outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-neon hover:bg-neon/90 text-black text-xs font-bold tracking-[0.2em] uppercase rounded-[8px] transition-colors cursor-pointer select-none active:scale-95 duration-100"
                >
                  TRANSMIT Brief →
                </button>
              </form>
            )}

            <div className="mt-8 text-[10px] tracking-widest text-cream/40 uppercase select-none">
              © 2026 MIRASTRA TECH — MSME Registered
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
