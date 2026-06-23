import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "../components/Nav";
import React from "react";
import {
  ArrowUpRight,
  Star,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mirastra Tech" },
      {
        name: "description",
        content:
          "Learn about Mirastra Tech, our mission to help businesses grow with technology solutions, and our 4-stage development methodology.",
      },
    ],
  }),
  component: About,
});

function About() {
  const homeTags = [
    "Web Dev",
    "Mobile Apps",
    "SaaS Dashboards",
    "QA Testing",
    "CRM & ERP",
    "Workflow Automation"
  ];

  return (
    <main className="w-full bg-[#020203] text-white min-h-screen relative font-sans p-3 sm:p-5 md:p-6 overflow-hidden">
      {/* Navigation */}
      <Nav />

      {/* Background Glowing Lights */}
      <div className="absolute top-[-10%] right-[-10%] w-[55%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(191,255,0,0.08)_0%,transparent,transparent)] pointer-events-none animate-pulse-glow" style={{ filter: "blur(90px)" }} />
      <div className="absolute bottom-[20%] left-[-10%] w-[60%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(58,140,215,0.12)_0%,transparent,transparent)] pointer-events-none animate-pulse-glow" style={{ filter: "blur(100px)" }} />

      {/* 1. HERO SECTION (Dark background) */}
      <div
        className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between pt-32 pb-8 px-6 sm:px-12 md:px-20 bg-[#020203] rounded-[24px] md:rounded-[40px] border border-white/10"
      >
        {/* Tech Grid overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35 pointer-events-none" />
        
        {/* Vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10 relative mt-4 md:mt-8">
          {/* Hero Left Column */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow label */}
            <div className="flex items-center gap-2 mb-6 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-full px-4 py-1.5 transition-colors duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bfff00] animate-pulse" />
              <span className="text-white/80 text-[10px] font-mono uppercase tracking-[0.25em]">Welcome to Mirastra</span>
            </div>
            
            <div className="relative w-full">
              <h1 className="text-4xl sm:text-5xl md:text-[64px] font-outfit font-black tracking-tight text-white leading-[1.05] max-w-[620px] uppercase">
                We craft brands &amp; digital experiences
              </h1>
              {/* Sparkle icon from lucide */}
              <div className="absolute right-4 bottom-2 text-[#bfff00] animate-pulse hidden md:block">
                <Star size={36} className="fill-[#bfff00]" />
              </div>
            </div>
            
            <p className="text-white/70 text-base sm:text-lg md:text-xl font-normal mt-6 max-w-[540px] leading-relaxed">
              Elevate your business with bespoke digital systems, performance-driven web development, and intelligent workflow automations.
            </p>

            {/* Circular CTA Button */}
            <div className="mt-10 flex items-center gap-6">
              <Link
                to="/contact"
                className="group w-28 h-28 rounded-full bg-[#bfff00] hover:bg-[#aee600] text-black font-outfit font-extrabold text-xs uppercase tracking-widest flex flex-col items-center justify-center gap-1 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_8px_32px_rgba(191,255,0,0.25)] relative decoration-none cursor-pointer"
              >
                <span>Let's talk</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                {/* Radial stroke accents */}
                <div className="absolute -bottom-2 right-[-10px] text-white/30 text-xs font-light select-none font-mono">///</div>
              </Link>
            </div>
          </div>

          {/* Hero Right Column (Terminal Console Mockup) */}
          <div className="md:col-span-5 flex justify-center md:justify-end relative min-h-[380px]">
            {/* Soft backdrop glow behind console */}
            <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#bfff00]/8 blur-[60px] pointer-events-none animate-pulse" />

            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 bg-black/90 p-4 animate-float-hero shadow-2xl flex flex-col justify-between font-mono">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[10px] text-white/40 tracking-wider">mirastra-system.sh</span>
                <span className="w-4" />
              </div>

              {/* Terminal Output Code */}
              <div className="flex-1 text-left text-[11px] sm:text-xs leading-relaxed overflow-hidden text-white/80 select-none">
                <p className="text-white/40 mb-1">$ ./initialize_studio.sh</p>
                <p className="text-[#bfff00] mb-2">✔ Connection established</p>
                
                <p className="text-white/40 mb-1">$ cat mirastra.json</p>
                <div className="text-[#3a8cd7] pl-3">
                  <p>&#123;</p>
                  <p className="pl-3">"status": <span className="text-[#bfff00]">"MSME_ACTIVE"</span>,</p>
                  <p className="pl-3">"delivery": <span className="text-[#bfff00]">"100_PERCENT"</span>,</p>
                  <p className="pl-3">"location": <span className="text-white">"GLOBAL_REMOTE"</span>,</p>
                  <p className="pl-3">"core": [</p>
                  <p className="pl-6 text-white/60">"web", "mobile", "saas",</p>
                  <p className="pl-6 text-white/60">"automation", "strategy"</p>
                  <p className="pl-3">]</p>
                  <p>&#125;</p>
                </div>

                <p className="text-white/40 mt-3 mb-1">$ npm run dev</p>
                <p className="text-emerald-400">➜ Local: http://localhost:8082/</p>
              </div>

              {/* Floating bottom-right badge */}
              <div className="bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 select-none pointer-events-none self-center mt-4">
                <p className="text-[9px] font-outfit font-black uppercase tracking-wider text-white/50 text-center leading-none">
                  SYSTEM READY
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Partners/Logos Bar */}
        <div className="w-full border-t border-white/8 pt-10 mt-16 z-10 relative">
          <div className="flex flex-wrap justify-between items-center gap-6 px-4 md:px-8 text-white/40 text-xs font-mono font-bold tracking-widest">
            <span>REACT.JS</span>
            <span className="text-white/10">◆</span>
            <span>NODEJS</span>
            <span className="text-white/10">◆</span>
            <span>POSTGRESQL</span>
            <span className="text-white/10">◆</span>
            <span>TYPESCRIPT</span>
            <span className="text-white/10">◆</span>
            <span>NEXTJS</span>
            <span className="text-white/10">◆</span>
            <span>PYTHON</span>
          </div>
        </div>
      </div>

      {/* 2. ABOUT US PREVIEW SECTION (White background) */}
      <section className="w-full bg-white text-slate-900 py-24 px-6 sm:px-12 md:px-20 z-10 relative border-t border-black/5 rounded-[24px] md:rounded-[40px] mt-6">
        <div className="max-w-7xl mx-auto">
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-16">
            <div className="md:col-span-7 text-left flex flex-col items-start">
              <span className="text-[#3a8cd7] text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-3">
                About Us
              </span>
              <div className="relative">
                <h3 className="text-3xl sm:text-5xl font-outfit font-black tracking-tight text-slate-950 leading-tight uppercase">
                  Meet Mirastra: Your Design Partners
                </h3>
                {/* Specs decoration */}
                <div className="absolute right-0 top-0 text-slate-200 hidden md:block">
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
                    <circle cx="10" cy="10" r="8" />
                    <circle cx="30" cy="10" r="8" />
                    <path d="M18 10 H22" />
                  </svg>
                </div>
              </div>
              <p className="text-slate-600 text-base mt-6 leading-relaxed max-w-xl">
                We're not just programmers; we're creators, problem solvers, and your business's closest technology allies. At Mirastra Tech, we live and breathe custom software. From websites to custom extensions and workflows, we align deep technical capabilities with strategic business growth.
              </p>
            </div>

            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="w-full max-w-[320px] aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&h=380&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>
            </div>
          </div>

          {/* Wide Statistics and Slanted Tags Panel */}
          <div className="w-full rounded-[32px] bg-[#020203] border border-white/10 overflow-hidden shadow-2xl relative min-h-[280px] grid grid-cols-1 lg:grid-cols-12 text-white">
            
            {/* Left Col: Stat with wavy/wavy line background */}
            <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
              <div className="absolute inset-0 wavy-bg pointer-events-none" />
              <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-r from-transparent to-[#020203] pointer-events-none" />

              <div className="relative z-10">
                <h4 className="text-[72px] font-outfit font-black tracking-tighter text-[#bfff00] leading-none">100%</h4>
                <p className="text-xs uppercase tracking-widest font-mono text-white/50 mt-2">On-Time Project Delivery Rate</p>
              </div>

              {/* Slanted Tag Pills */}
              <div className="relative z-10 flex flex-wrap gap-2.5 mt-8 max-w-[500px]">
                {[
                  { name: "Web Dev", rot: "-rotate-2" },
                  { name: "Mobile Apps", rot: "rotate-2" },
                  { name: "SaaS Dashboards", rot: "-rotate-1" },
                  { name: "QA Testing", rot: "rotate-3" },
                  { name: "CRM & ERP", rot: "-rotate-3" },
                  { name: "Workflow Automation", rot: "rotate-1" }
                ].map((tag, i) => (
                  <span
                    key={i}
                    className={`inline-block bg-white text-black font-outfit font-black text-[10px] uppercase tracking-wider px-4 py-2 rounded-lg border border-black shadow-md transform ${tag.rot} hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-default`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Col: Workspace Image */}
            <div className="lg:col-span-5 relative overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10 min-h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Modern corporate office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL FLOW: PUSHPIN ROADMAP (White background) */}
      <section className="w-full bg-[#f8fafc] text-slate-900 py-24 px-6 sm:px-12 md:px-20 z-10 relative overflow-hidden border-t border-slate-200/50 rounded-[24px] md:rounded-[40px] mt-6">
        <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#3a8cd7]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          {/* Centered Heading */}
          <div className="text-center mb-20">
            <span className="text-[#3a8cd7] text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-3 block">
              How We Work
            </span>
            <h3 className="text-3xl sm:text-5xl font-outfit font-black tracking-tight text-slate-950 leading-tight uppercase max-w-2xl mx-auto">
              Let us show you how we drive your projects to new heights
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
              Our 4-stage operational roadmap guarantees high transparency, strict timelines, and flawless software execution.
            </p>
          </div>

          {/* Staggered cards roadmap with connecting line */}
          <div className="relative w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            {/* SVG Connecting Dotted Line - Hidden on Mobile */}
            <div className="absolute inset-0 z-0 hidden md:block pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="3" strokeDasharray="6 8">
                <path d="M 750 80 C 600 80, 500 240, 250 240 C 100 240, 400 480, 750 480 C 950 480, 800 680, 250 680" />
              </svg>
            </div>

            {/* STEP 1 */}
            <div className="hidden md:block pointer-events-none" />
            <div className="relative">
              <div className="pushpin-card bg-white text-black rounded-3xl p-8 relative max-w-[380px] mx-auto transform rotate-[1.5deg] border border-slate-100">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 shadow-md border border-zinc-400 z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-black/40">Phase 01</span>
                  <span className="text-2xl font-outfit font-black text-black/10">01</span>
                </div>
                <h4 className="text-2xl font-outfit font-black tracking-tight text-black mb-3">Define</h4>
                <p className="text-black/60 text-xs leading-relaxed font-sans">
                  We discover business scope, analyze bottlenecks, detail custom technology specs, and outline detailed architecture plans before any line of code is written.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="relative">
              <div className="pushpin-card bg-white text-black rounded-3xl p-8 relative max-w-[380px] mx-auto transform rotate-[-2deg] border border-slate-100">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 shadow-md border border-zinc-400 z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-black/40">Phase 02</span>
                  <span className="text-2xl font-outfit font-black text-black/10">02</span>
                </div>
                <h4 className="text-2xl font-outfit font-black tracking-tight text-black mb-3">Design</h4>
                <p className="text-black/60 text-xs leading-relaxed font-sans">
                  Our design processes detail interactive wireframes, custom UI/UX elements, brand systems, and glassmorphic micro-interaction states.
                </p>
              </div>
            </div>
            <div className="hidden md:block pointer-events-none" />

            {/* STEP 3 */}
            <div className="hidden md:block pointer-events-none" />
            <div className="relative">
              <div className="pushpin-card bg-white text-black rounded-3xl p-8 relative max-w-[380px] mx-auto transform rotate-[1deg] border border-slate-100">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 shadow-md border border-zinc-400 z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-black/40">Phase 03</span>
                  <span className="text-2xl font-outfit font-black text-black/10">03</span>
                </div>
                <h4 className="text-2xl font-outfit font-black tracking-tight text-black mb-3">Build</h4>
                <p className="text-black/60 text-xs leading-relaxed font-sans">
                  We program in clean TypeScript, establishing modular React panels, backend databases, API systems, and custom automation scripts.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="relative">
              <div className="pushpin-card bg-white text-black rounded-3xl p-8 relative max-w-[380px] mx-auto transform rotate-[-1.5deg] border border-slate-100">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 shadow-md border border-zinc-400 z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-black/40">Phase 04</span>
                  <span className="text-2xl font-outfit font-black text-black/10">04</span>
                </div>
                <h4 className="text-2xl font-outfit font-black tracking-tight text-black mb-3">Launch</h4>
                <p className="text-black/60 text-xs leading-relaxed font-sans">
                  Rigorous audits, testing script runs, VPS setups, domains mappings, and post-launch maintenance ensure optimal page speed and security.
                </p>
              </div>
            </div>

            {/* Final Text Label */}
            <div className="flex items-center justify-center min-h-[150px] relative">
              <div className="text-center md:text-left">
                <p className="text-lg font-mono font-bold tracking-widest uppercase text-[#3a8cd7] animate-pulse">
                  Ready to be delivered!
                </p>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#3a8cd7] to-transparent mt-2 mx-auto md:ml-0" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER BANNER SECTION (Dark background) */}
      <section className="w-full bg-[#0a0a0c] text-white py-20 px-6 sm:px-12 md:px-20 border-t border-white/8 z-10 relative mt-6 rounded-[24px] md:rounded-[40px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 text-left flex flex-col items-start gap-4">
            <span className="text-[#3a8cd7] text-xs font-semibold uppercase tracking-[0.2em] font-mono border border-white/10 rounded-full px-3.5 py-1">
              What we do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-black tracking-tight leading-tight text-white uppercase max-w-md">
              We design meaningful not just quick impressions
            </h2>
          </div>

          <div className="md:col-span-6 text-left md:pl-8">
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              We build technology solutions that stand the test of time. Every line of code and every UI component we build is architected with strict precision, clean documentation, and scalability in mind. We're here to help you automate, optimize, and grow with absolute trust.
            </p>
          </div>
        </div>
      </section>

      {/* 5. HOMEPAGE CTA INTEGRATION */}
      <section className="w-full bg-black px-6 sm:px-12 md:px-20 py-12 relative z-10 mt-6 rounded-[24px] md:rounded-[40px]">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-[28px] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-12 md:py-14"
            style={{ background: "linear-gradient(135deg, #1c1c1e 0%, #2a2a2e 50%, #1a1a1c 100%)" }}
          >
            {/* Subtle noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] pointer-events-none" />

            {/* Left: text + CTA */}
            <div className="relative z-10 flex flex-col gap-5 max-w-lg">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                Ready to Build Your<br />
                <span className="text-white/60">Digital Presence?</span>
              </h2>
              <p className="text-white/45 text-sm leading-relaxed">
                Partner with Mirastra Tech to craft scalable websites, apps, and automation solutions. Start your project today — fast delivery, expert execution.
              </p>
              <div className="flex items-center gap-4 mt-1">
                <Link
                  to="/services"
                  className="bg-white hover:bg-white/90 text-black text-xs font-bold px-7 py-3.5 rounded-full tracking-widest uppercase decoration-none cursor-pointer inline-flex items-center gap-2 transition-all"
                >
                  Get Started <ArrowUpRight size={13} />
                </Link>
                <a
                  href="mailto:mirastratech@gmail.com"
                  className="text-white/40 text-xs font-semibold hover:text-white transition-colors decoration-none cursor-pointer"
                >
                  or Email Us →
                </a>
              </div>
            </div>

            {/* Right: floating UI mockup cards */}
            <div className="relative z-10 flex-shrink-0 w-full md:w-[420px] h-[220px] hidden md:block">
              {/* Card 1 — browser window mockup */}
              <div className="absolute right-8 top-0 w-[220px] bg-[#111] border border-white/10 rounded-[16px] overflow-hidden shadow-2xl rotate-[3deg]">
                <div className="bg-zinc-900 px-3 py-2 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  <div className="flex-1 h-3 bg-white/5 rounded-full ml-2" />
                </div>
                <div className="p-3 flex flex-col gap-1.5">
                  <div className="h-2 bg-white/10 rounded-full w-3/4" />
                  <div className="h-2 bg-white/6 rounded-full w-full" />
                  <div className="h-2 bg-white/6 rounded-full w-5/6" />
                  <div className="mt-1 h-12 bg-gradient-to-r from-sky-900/40 to-indigo-900/40 rounded-lg border border-white/5" />
                  <div className="h-2 bg-white/6 rounded-full w-2/3" />
                </div>
              </div>

              {/* Card 2 — stat chip */}
              <div className="absolute left-4 top-8 w-[160px] bg-[#bfff00] rounded-[14px] p-4 shadow-xl -rotate-[2deg]">
                <p className="text-black/50 text-[9px] font-mono uppercase tracking-widest">Project Status</p>
                <p className="text-black font-black text-2xl leading-tight mt-0.5">100%</p>
                <p className="text-black/60 text-[10px] font-medium font-mono">On-Time Delivery</p>
                <div className="mt-2 h-1.5 bg-black/15 rounded-full overflow-hidden">
                  <div className="h-full bg-black/40 rounded-full w-full" />
                </div>
              </div>

              {/* Card 3 — client badge */}
              <div className="absolute right-2 bottom-0 w-[180px] bg-white rounded-[14px] p-4 shadow-xl rotate-[1deg]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">MT</div>
                  <div>
                    <p className="text-black font-bold text-xs leading-tight">Mirastra Tech</p>
                    <p className="text-black/40 text-[9px]">MSME Registered</p>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-black/40 text-[9px] mt-1 font-mono">Est. May 2026</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. HOMEPAGE FOOTER INTEGRATION */}
      <footer className="w-full bg-black relative overflow-hidden mt-12 rounded-[24px] md:rounded-[40px] border border-white/5">
        {/* Giant brand name */}
        <div className="relative w-full overflow-hidden select-none" style={{ lineHeight: 0.85 }}>
          <h2
            className="font-black text-center w-full px-4"
            style={{
              fontSize: "clamp(72px, 18vw, 260px)",
              letterSpacing: "-0.03em",
              paddingBottom: "0.05em",
              background: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0.02) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mirastra
          </h2>
          {/* Bottom fade into black */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        {/* Bottom info bar */}
        <div className="relative z-10 border-t border-white/6 px-8 sm:px-12 md:px-16 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* Col 1: logo + address + status + socials */}
            <div className="md:col-span-3 flex flex-col gap-5">
              <img
                src="/mirastra_wlogo.png"
                alt="Mirastra Tech"
                className="h-25 w-auto object-contain object-left"
              />
              <div>
                <p className="text-white/30 text-xs leading-relaxed font-mono">
                  Mirastra Tech<br />
                  MSME Registered, India<br />
                  Serving Clients Worldwide
                </p>
              </div>
              
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-3 py-1.5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="text-white/50 text-[10px] font-mono uppercase tracking-wider">All systems operational</span>
              </div>
              
              {/* Social links */}
              <div className="flex items-center gap-3">
                {[
                  { label: "X", href: "#", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                  { label: "LI", href: "#", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { label: "IG", href: "#", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                ].map((s, i) => (
                  <a key={i} href={s.href} className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                {
                  heading: "Services",
                  links: ["Website Development", "Web Applications", "Mobile Apps", "Custom Software", "Browser Extensions"],
                },
                {
                  heading: "Solutions",
                  links: ["Automation", "Digital Marketing", "QA Testing", "UI/UX Design", "Consulting"],
                },
                {
                  heading: "Company",
                  links: ["About Us", "Our Works", "Blog", "Contact", "Careers"],
                },
                {
                  heading: "Legal",
                  links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Cookie Policy"],
                },
              ].map((col, ci) => (
                <div key={ci} className="flex flex-col gap-3">
                  <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono">{col.heading}</p>
                  {col.links.map((link, li) => (
                    <a key={li} href="#" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Right contact links */}
            <div className="md:col-span-2 flex flex-col gap-3 items-end justify-start">
              <a
                href="mailto:mirastratech@gmail.com"
                className="w-14 h-14 rounded-[16px] bg-[#1c1c1e] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/8 hover:border-white/20 transition-all duration-200"
                title="Email Us"
              >
                <ArrowUpRight size={22} />
              </a>
              <a
                href="https://wa.me/919047432540"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-[16px] bg-[#1c1c1e] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/8 hover:border-white/20 transition-all duration-200"
                title="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>

          </div>

          {/* Bottom copyright strip */}
          <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">
              © 2026 Mirastra Tech — MSME Registered
            </p>
            <p className="text-white/15 text-[10px] font-mono">
              Building the Future. Beyond Limits.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
