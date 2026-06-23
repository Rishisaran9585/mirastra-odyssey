import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "../components/Nav";
import {
  ArrowUpRight,
  Star,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mirastra Tech — Building the Future. Beyond Limits." },
      {
        name: "description",
        content:
          "Mirastra Tech is an MSME-registered technology solutions company offering website development, mobile apps, custom software, automation, and digital marketing — serving clients worldwide.",
      },
      { property: "og:title", content: "Mirastra Tech — Building the Future. Beyond Limits." },
      {
        property: "og:description",
        content:
          "Mirastra Tech is an MSME-registered technology solutions company offering website development, mobile apps, custom software, automation, and digital marketing — serving clients worldwide.",
      },
    ],
  }),
  component: Index,
});

function Index() {

  const homeTags = [
    "Web Dev",
    "Mobile",
    "SaaS",
    "Custom Software",
    "Automation",
    "QA Testing",
    "Digital Marketing",
    "Browser Extensions",
  ];

  return (
    <main className="w-full bg-black text-white min-h-screen relative font-sans overflow-hidden">
      {/* Navigation */}
      <Nav />

      {/* 1. HERO SECTION (Redesigned Cinematic Dark Mesh Panel) */}
      <div
        className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between pt-32 pb-8 px-6 sm:px-12 md:px-20 bg-[#020203]"
      >
        {/* Ambient background glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[55%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(191,255,0,0.12)_0%,transparent,transparent)] pointer-events-none animate-pulse-glow" style={{ filter: "blur(90px)" }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(58,140,215,0.18)_0%,transparent,transparent)] pointer-events-none animate-pulse-glow" style={{ filter: "blur(100px)" }} />
        <div className="absolute top-[30%] left-[40%] w-[45%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.06)_0%,transparent,transparent)] pointer-events-none animate-pulse-glow" style={{ filter: "blur(100px)" }} />

        {/* Tech Grid overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35 pointer-events-none" />
        
        {/* Vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10 relative mt-4 md:mt-8">
          {/* Hero Left Column */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow label */}
            <div className="flex items-center gap-2 mb-6 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] hover:border-white/20 rounded-full px-4 py-1.5 transition-colors duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bfff00] animate-pulse" />
              <span className="text-white/80 text-[10px] font-mono uppercase tracking-[0.25em]">MSME Registered · Est. 2026</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-[62px] font-outfit font-black tracking-tight text-white leading-[1.05] max-w-[640px]">
              Building the future with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#bfff00] to-[#54e3ff]">AI &amp; strategy</span>
            </h1>
            
            <p className="text-white/70 text-base sm:text-lg md:text-xl font-normal mt-6 max-w-[540px] leading-relaxed">
              We help organizations unlock growth and efficiency through data-driven consulting and
              intelligent automation.
            </p>

            {/* Lime CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
              <Link
                to="/services"
                className="bg-[#bfff00] hover:bg-[#aee600] text-black text-xs sm:text-sm font-bold uppercase tracking-widest py-4 px-8 rounded-full inline-flex items-center gap-3 transition-all duration-300 transform hover:scale-105 active:scale-95 decoration-none cursor-pointer"
                style={{ boxShadow: "0 8px 32px rgba(191,255,0,0.25), 0 2px 8px rgba(0,0,0,0.3)" }}
              >
                <span>Get Started</span>
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white">
                  <ArrowUpRight size={14} />
                </div>
              </Link>

              {/* Stars review */}
              <div className="flex flex-col items-start gap-1">
                <span className="text-xs font-semibold text-white/60 tracking-wider">
                  Rated 4.9/5 by 4,900+ clients
                </span>
                <div className="flex text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Column */}
          <div className="md:col-span-5 flex justify-center md:justify-end relative min-h-[380px]">
            {/* Soft backdrop glow behind main asset */}
            <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#bfff00]/8 blur-[60px] pointer-events-none animate-pulse" />

            <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center z-10 animate-float-hero">
              <img
                src="/assets/home_consulting_hero.png"
                alt="Consulting Hero"
                className="w-full h-full object-contain scale-110 sm:scale-120 md:scale-125 select-none"
                style={{
                  maskImage: "radial-gradient(circle, black 65%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(circle, black 65%, transparent 100%)",
                }}
              />

              {/* Floating Dashboard Card 1 */}
              <div className="absolute -top-3 -left-4 bg-black/75 backdrop-blur-xl border border-white/10 rounded-2xl p-3.5 shadow-2xl flex items-center gap-3 animate-float-card-1 select-none pointer-events-none w-[175px]">
                <div className="w-8 h-8 rounded-lg bg-[#bfff00]/10 border border-[#bfff00]/25 flex items-center justify-center text-[#bfff00]">
                  <Zap size={15} />
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-mono uppercase tracking-wider leading-none">AI CORE</p>
                  <p className="text-xs font-bold text-white mt-1 leading-none">Engine Active</p>
                </div>
              </div>

              {/* Floating Dashboard Card 2 */}
              <div className="absolute -bottom-3 -right-2 bg-black/75 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-float-card-2 select-none pointer-events-none w-[190px]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] text-white/40 font-mono uppercase tracking-wider">EFFICIENCY</span>
                  <span className="text-[10px] text-[#bfff00] font-bold">+84.6%</span>
                </div>
                <p className="text-xs font-bold text-white leading-none">Automations Scaled</p>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-2.5">
                  <div className="bg-gradient-to-r from-[#bfff00] to-[#3a8cd7] h-full" style={{ width: "84%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Carousel */}
        <div className="w-full mt-12 md:mt-8 z-20 overflow-x-auto no-scrollbar pb-2">
          <div className="flex gap-4 min-w-[850px] md:min-w-0 md:grid md:grid-cols-5">
            {/* Tag Card */}
            <div className="hero-glass-card rounded-[20px] p-4.5 flex flex-col justify-between transition-all duration-300 h-36">
              <div className="flex flex-wrap gap-1">
                {homeTags.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-semibold bg-white/[0.06] border border-white/10 text-white/90 rounded-full px-2 py-0.5 uppercase tracking-wide transition-colors hover:border-[#bfff00]/30 hover:bg-[#bfff00]/5 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-white/40 font-mono">
                  Clients Launched
                </p>
                <h4 className="text-xl font-bold text-white leading-none mt-1">14+ Projects</h4>
              </div>
            </div>

            {/* Client Snapshot Card */}
            <div className="hero-glass-card rounded-[20px] p-4.5 flex items-center gap-3 transition-all duration-300 h-36">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/15 flex-shrink-0 bg-white/5 flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none select-none">MT</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-white leading-none">Mugai Technologies</p>
                <p className="text-[9px] text-[#bfff00] font-mono mt-1 uppercase tracking-wide">Corporate</p>
                <div className="flex justify-between mt-3 text-[10px] font-mono">
                  <div>
                    <span className="text-white/30 block">STATUS</span>
                    <span className="text-emerald-400 font-bold">Live</span>
                  </div>
                  <div>
                    <span className="text-white/30 block">TYPE</span>
                    <span className="text-sky-300 font-bold">Website</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Expertise Card */}
            <div className="bg-black/55 border border-white/10 rounded-[20px] p-4.5 flex flex-col justify-between shadow-lg hover:border-[#bfff00]/25 transition-all duration-300 h-36">
              <div className="w-5 h-5 rounded-full bg-[#bfff00]/10 border border-[#bfff00]/20 flex items-center justify-center text-[#bfff00]">
                <Zap size={10} />
              </div>
              <div>
                <p className="text-xs font-normal text-white/80 leading-normal">
                  Code That Scales. Designs That Convert. Results That Matter.
                </p>
              </div>
            </div>

            {/* Progress Card */}
            <div className="hero-glass-card rounded-[20px] p-4.5 flex flex-col justify-between transition-all duration-300 h-36">
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-white/40 font-mono">
                  Project Success
                </p>
                <h4 className="text-lg font-bold text-white mt-1">
                  100% <span className="text-xs text-white/40 font-normal font-mono">On-Time</span>
                </h4>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#bfff00] to-[#3a8cd7] h-full" style={{ width: "100%" }} />
              </div>
            </div>

            {/* Notification Card */}
            <div className="hero-glass-card rounded-[20px] p-4.5 flex flex-col justify-between transition-all duration-300 h-36">
              <div className="flex justify-between items-center">
                <span className="text-[9px] bg-[#3a8cd7]/20 border border-[#3a8cd7]/30 text-sky-300 rounded-full px-2 py-0.5 uppercase tracking-wide font-mono">
                  MSME Registered
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Est. May 2026</p>
                <p className="text-[10px] text-white/50 leading-tight mt-1.5 font-mono">
                  India's growing tech studio for SMEs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ABOUT US PREVIEW SECTION (Experience Excellence Layout) */}
      <section className="w-full bg-[#f8fafc] text-slate-900 py-20 px-6 sm:px-12 md:px-20 z-10 relative">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[#3a8cd7] text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-3">
           About
          </h2>
          <h3 className="text-3xl sm:text-5xl font-outfit font-bold text-slate-950 tracking-tight leading-tight max-w-2xl mx-auto">
            Experience Excellence In Technology Solutions
          </h3>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">
          {/* Left Column: text, CTA button, partners */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
              Your Trusted Partner in Building the Future
            </h4>
            <p className="text-slate-600 text-sm mt-4 leading-relaxed">
              At Mirastra Tech, we believe that building websites, custom applications, and workflow
              automations should be a seamless, high-growth, and stress-free experience. We align
              deep technical capabilities with strategic business growth.
            </p>

            <Link
              to="/about"
              className="mt-6 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold px-6 py-3 rounded-full transition-all tracking-wider uppercase decoration-none cursor-pointer inline-block"
            >
              About Us
            </Link>

            <div className="mt-12 w-full">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block mb-3">
                Core Technologies
              </span>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-500 font-mono">
                <span className="flex items-center gap-1">● React.js</span>
                <span className="flex items-center gap-1">● Node.js</span>
                <span className="flex items-center gap-1">● PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Center Column: Tall rounded card containing image */}
          <div className="md:col-span-4 flex justify-center">
            <div className="w-full max-w-[360px] aspect-[4/5] rounded-[32px] overflow-hidden border border-slate-200/80 shadow-2xl bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Modern corporate excellence building"
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
          </div>

          {/* Right Column: Bullets and ratings */}
          <div className="md:col-span-4 flex flex-col gap-6 text-left">
            {/* Bullet 1 */}
            <div className="border-b border-slate-200 pb-4">
              <h4 className="text-sm font-bold text-slate-950 uppercase tracking-wider font-mono">
                Expert Guidance
              </h4>
              <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                Our engineers provide professional consultation and tailored support throughout your
                digital roadmap.
              </p>
            </div>

            {/* Bullet 2 */}
            <div className="border-b border-slate-200 pb-4">
              <h4 className="text-sm font-bold text-slate-950 uppercase tracking-wider font-mono">
                Wide Service Selection
              </h4>
              <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                From responsive sites and database models to custom scripts and cloud scaling, we
                have everything.
              </p>
            </div>

            {/* Ratings */}
            <div className="pt-2">
              <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block mb-2">
                Client Rating
              </span>
              <div className="flex items-center gap-3">
                {/* 3 stacked avatars */}
                <div className="flex -space-x-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Reviewer"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Reviewer"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Reviewer"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-slate-900 font-bold text-sm leading-none">4.9</span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">
                    Customer Ratings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR EXPERTISE SECTION — BENTO GRID */}
      <section className="w-full bg-white text-black py-20 px-6 sm:px-12 md:px-20 z-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* ROW 1: Headline left + Bento stats grid right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left headline */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-black">
                Driving results<br />
                <span className="relative inline-block">
                  <span className="relative z-10 px-1">for every client</span>
                  <span className="absolute inset-0 bg-[#bfff00] rounded-lg" style={{ zIndex: 0 }} />
                </span>
              </h2>
              <p className="text-black/50 text-sm leading-relaxed mt-5 max-w-xs">
                From startups to established businesses — we ship fast, scale reliably, and deliver results that move the needle.
              </p>
            </div>

            {/* Right bento grid: 3 cols × 2 rows */}
            <div className="lg:col-span-8 grid grid-cols-3 grid-rows-2 gap-3 h-[340px]">

              {/* Card 1: tall left — lime radial glow */}
              <div className="row-span-2 rounded-[20px] bg-[#f0f0ee] overflow-hidden relative flex flex-col justify-end p-5 group hover:scale-[1.02] transition-transform duration-300 cursor-default">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-40 h-40 rounded-full bg-[#bfff00] blur-3xl opacity-55" />
                </div>
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-black flex items-center justify-center">
                  <ArrowUpRight size={13} className="text-white" />
                </div>
                <div className="relative z-10">
                  <span className="text-5xl font-bold text-black leading-none block">14+</span>
                  <span className="text-xs text-black/55 mt-1 block leading-snug">projects<br />launched</span>
                </div>
              </div>

              {/* Card 2: top center — lime green */}
              <div className="rounded-[20px] bg-[#bfff00] overflow-hidden relative flex flex-col justify-between p-5 group hover:scale-[1.02] transition-transform duration-300 cursor-default">
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-black flex items-center justify-center">
                  <ArrowUpRight size={13} className="text-[#bfff00]" />
                </div>
                <div className="flex gap-1.5">
                  {["W", "D", "M", "A"].map((l, i) => (
                    <span key={i} className="w-7 h-7 rounded-full bg-black/15 text-black text-[10px] font-bold flex items-center justify-center">{l}</span>
                  ))}
                </div>
                <div>
                  <span className="text-4xl font-bold text-black leading-none block">100%</span>
                  <span className="text-xs text-black/60 mt-1 block leading-snug">on-time<br />delivery</span>
                </div>
              </div>

              {/* Card 3: top right — dark with lime glow */}
              <div className="rounded-[20px] bg-[#0d0d0d] overflow-hidden relative flex flex-col justify-between p-5 group hover:scale-[1.02] transition-transform duration-300 cursor-default">
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-[#bfff00] blur-2xl opacity-35 pointer-events-none" />
                <div className="w-10 h-10 rounded-full bg-[#bfff00]/15 border border-[#bfff00]/30 flex items-center justify-center self-end">
                  <div className="w-4 h-4 rounded-full bg-[#bfff00]" />
                </div>
                <div>
                  <span className="text-4xl font-bold text-white leading-none block">4.9★</span>
                  <span className="text-xs text-white/45 mt-1 block leading-snug">client<br />rating</span>
                </div>
              </div>

              {/* Card 4: bottom center — light */}
              <div className="rounded-[20px] bg-[#e8e8e6] overflow-hidden relative flex flex-col justify-between p-5 group hover:scale-[1.02] transition-transform duration-300 cursor-default">
                <span className="text-4xl font-bold text-black leading-none">8+</span>
                <span className="text-xs text-black/50 block leading-snug">service<br />domains</span>
              </div>

              {/* Card 5: bottom right — black + lime glow */}
              <div className="rounded-[20px] bg-black overflow-hidden relative flex flex-col justify-between p-5 group hover:scale-[1.02] transition-transform duration-300 cursor-default">
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#bfff00] blur-3xl opacity-20 rounded-full pointer-events-none" />
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">MSME</span>
                <div className="relative z-10">
                  <span className="text-3xl font-bold text-white leading-none block">Est.</span>
                  <span className="text-3xl font-bold text-[#bfff00] leading-none block">2026</span>
                  <span className="text-[10px] text-white/40 mt-1 block">registered studio</span>
                </div>
              </div>

            </div>
          </div>

          {/* ROW 2: Bold left copy + 3 tall portrait cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-10">

            {/* Left copy */}
            <div className="lg:col-span-4 flex flex-col justify-end gap-5 pb-2">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-[1.1]">
                Let's build your<br />
                digital presence —{" "}
                <br />
                <span className="inline-flex items-center gap-1 bg-black text-white px-4 py-1 rounded-full text-3xl sm:text-4xl mt-2">
                  together
                </span>
              </h2>
              <p className="text-black/50 text-sm leading-relaxed max-w-xs">
                Engineers, designers, and strategists working as one team to ship products that perform.
              </p>
              <Link
                to="/about"
                className="self-start bg-black hover:bg-zinc-800 text-white text-xs font-bold px-7 py-3.5 rounded-full tracking-widest uppercase decoration-none cursor-pointer inline-flex items-center gap-2 transition-all"
              >
                About Us <ArrowUpRight size={13} />
              </Link>
            </div>

            {/* Right: 3 tall portrait cards */}
            <div className="lg:col-span-8 grid grid-cols-3 gap-3 h-[380px]">

              {/* Card A — dark + lime radial glow */}
              <div className="rounded-[24px] bg-[#0d0d0d] overflow-hidden relative flex flex-col justify-end p-6 group hover:-translate-y-2 transition-transform duration-300 cursor-default">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-28 h-28 rounded-full bg-[#bfff00] blur-3xl opacity-25" />
                </div>
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowUpRight size={12} className="text-white" />
                </div>
                <p className="relative z-10 text-white font-semibold text-sm leading-snug">
                  Web, Mobile &amp; Software — end-to-end delivery
                </p>
              </div>

              {/* Card B — light grey */}
              <div className="rounded-[24px] bg-[#f0f0ee] overflow-hidden relative flex flex-col justify-end p-6 group hover:-translate-y-2 transition-transform duration-300 cursor-default">
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-black flex items-center justify-center">
                  <ArrowUpRight size={12} className="text-white" />
                </div>
                <p className="text-black font-semibold text-sm leading-snug">
                  Automation pipelines tailored to your workflow
                </p>
              </div>

              {/* Card C — lime accent */}
              <div className="rounded-[24px] bg-[#bfff00] overflow-hidden relative flex flex-col justify-between p-6 group hover:-translate-y-2 transition-transform duration-300 cursor-default">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold text-black/50 uppercase tracking-widest">Mirastra Tech</span>
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                    <ArrowUpRight size={12} className="text-[#bfff00]" />
                  </div>
                </div>
                <div>
                  <span className="text-6xl font-black text-black leading-none block">M</span>
                  <p className="text-black/65 text-xs mt-3 leading-snug font-medium">
                    The tech partner for growing businesses
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* 4. SERVICES PREVIEW SECTION */}
      <section className="w-full bg-black text-white py-20 px-6 sm:px-12 md:px-20 z-10 relative overflow-hidden border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* LEFT: tag + headline + description + CTA */}
            <div className="lg:col-span-3 flex flex-col gap-5 lg:sticky lg:top-24">
              <span className="self-start text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 border border-white/15 rounded-full px-3 py-1">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-white">
                Building Digital<br />
                Products &amp; Tools<br />
                <span className="text-[#bfff00]">That Perform</span>
              </h2>
              <p className="text-white/45 text-sm leading-relaxed">
                We partner with forward-thinking businesses to craft scalable solutions — from responsive websites to custom software and intelligent automation.
              </p>
              <Link
                to="/services"
                className="self-start bg-white hover:bg-white/90 text-black text-xs font-bold px-6 py-3 rounded-full tracking-wider uppercase decoration-none cursor-pointer inline-flex items-center gap-2 transition-all mt-1"
              >
                View All Services <ArrowUpRight size={13} />
              </Link>
            </div>

            {/* RIGHT: 2-row photo-card grid */}
            <div className="lg:col-span-9 flex flex-col gap-4">

              {/* ── Row 1: 3 tall-ish image cards ── */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&h=420&q=80",
                    brand: "Website Dev",
                    headline: "Websites\nthat convert.",
                    title: "Website Development",
                    cat: "Static · Dynamic · Animated",
                    overlay: "from-blue-900/70",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=420&q=80",
                    brand: "Web Apps",
                    headline: "The future\nof productivity.",
                    title: "Web Application Development",
                    cat: "SaaS · Dashboards · Portals",
                    overlay: "from-violet-900/70",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&h=420&q=80",
                    brand: "Mobile",
                    headline: "Apps built\nto engage.",
                    title: "Mobile App Development",
                    cat: "Android · iOS · Cross-Platform",
                    overlay: "from-slate-900/70",
                  },
                ].map((card, i) => (
                  <div key={i} className="group relative rounded-[16px] overflow-hidden aspect-[4/3] cursor-default">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${card.overlay} to-transparent`} />
                    {/* brand badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-sm bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-[6px] font-black leading-none">MT</span>
                      </div>
                      <span className="text-white/70 text-[9px] font-mono tracking-widest uppercase">{card.brand}</span>
                    </div>
                    {/* headline text */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white font-bold text-base leading-tight whitespace-pre-line drop-shadow-lg">
                        {card.headline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Row 2: 3 image cards + 1 CTA card ── */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  {
                    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=480&h=360&q=80",
                    brand: "Software",
                    headline: "Custom\nSystems.",
                    title: "Custom Software Development",
                    cat: "CRM · ERP · HRM",
                    overlay: "from-emerald-900/65",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=480&h=360&q=80",
                    brand: "Extensions",
                    headline: "Browser\nPower Tools.",
                    title: "Browser Extension Development",
                    cat: "Chrome · Productivity · Lead Gen",
                    overlay: "from-sky-900/65",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=480&h=360&q=80",
                    brand: "Marketing",
                    headline: "Digital\nCampaigns.",
                    title: "Digital Marketing Services",
                    cat: "Meta Ads · Social · Video",
                    overlay: "from-rose-900/65",
                  },
                ].map((card, i) => (
                  <div key={i} className="group relative rounded-[16px] overflow-hidden aspect-[4/3] cursor-default">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${card.overlay} to-transparent`} />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-sm bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-[6px] font-black leading-none">MT</span>
                      </div>
                      <span className="text-white/70 text-[9px] font-mono tracking-widest uppercase">{card.brand}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white font-bold text-sm leading-tight whitespace-pre-line drop-shadow-lg">
                        {card.headline}
                      </p>
                    </div>
                  </div>
                ))}

                {/* CTA + remaining services card */}
                <div className="rounded-[16px] overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/8 flex flex-col items-center justify-between p-5 hover:scale-[1.02] transition-transform duration-300 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-[#3a8cd7] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-white/55 text-[11px] leading-snug">
                      Automation, QA Testing &amp; more.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
      {/* 5. FEATURED WORKS SECTION */}
      <section className="w-full bg-white text-black relative overflow-hidden py-24 px-6 sm:px-12 md:px-20 border-t border-black/8">

        {/* ── Centered headline ── */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 border border-black/12 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1 h-1 rounded-full bg-[#3a8cd7] inline-block" />
            Selected Works
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.0] text-black">
            We've built digital<br />
            <span className="text-black/25">products clients love</span>
          </h2>
        </div>

        {/* ── Row 1: 3 cards ── */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* Card 1 — Pure screenshot card (dark frame) */}
          <a
            href="https://aghoraengineeringconsultants.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-[24px] overflow-hidden bg-[#111a10] flex flex-col min-h-[460px] decoration-none cursor-pointer hover:scale-[1.015] transition-transform duration-300"
          >
            <div className="flex-1 m-3 mb-0 rounded-[16px] overflow-hidden">
              <img
                src="/website/AEC.png"
                alt="Aghora Engineering Consultants"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex-shrink-0 flex items-center justify-center group-hover:bg-[#bfff00] group-hover:border-[#bfff00] transition-all duration-300">
                <ArrowUpRight size={14} className="text-white group-hover:text-black transition-colors" />
              </div>
            </div>
          </a>

          {/* Card 2 — Pure screenshot card (lime bg frame) */}
          <a
            href="https://lishansarees.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-[24px] overflow-hidden bg-[#bfff00] flex flex-col min-h-[460px] decoration-none cursor-pointer hover:scale-[1.015] transition-transform duration-300"
          >
            {/* screenshot fills most of card */}
            <div className="flex-1 m-3 mb-0 rounded-[16px] overflow-hidden">
              <img
                src="/website/Lishan sarees.png"
                alt="Lishan Sarees Store"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* clean label strip */}
            <div className="flex items-center justify-between px-5 py-4">
              <div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center">
                <ArrowUpRight size={14} className="text-[#bfff00]" />
              </div>
            </div>
          </a>

          {/* Card 3 — Pure screenshot card (light grey frame) */}
          <a
            href="https://ieltshorizon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-[24px] overflow-hidden bg-[#f0f0ee] flex flex-col min-h-[460px] decoration-none cursor-pointer hover:scale-[1.015] transition-transform duration-300"
          >
            <div className="flex-1 m-3 mb-0 rounded-[16px] overflow-hidden">
              <img
                src="/website/ielts.png"
                alt="IELTS Horizon Training"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center group-hover:bg-[#3a8cd7] transition-colors duration-300">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </div>
          </a>

        </div>

        {/* ── Row 2: 3 cards ── */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 4 — Pure screenshot (light grey) */}
          <a
            href="https://medaithestage.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-[24px] overflow-hidden bg-[#f0f0ee] flex flex-col min-h-[420px] decoration-none cursor-pointer hover:scale-[1.015] transition-transform duration-300"
          >
            <div className="flex-1 m-3 mb-0 rounded-[16px] overflow-hidden">
              <img
                src="/website/medai.png"
                alt="Medai The Stage"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center group-hover:bg-[#bfff00] transition-colors duration-300">
                <ArrowUpRight size={14} className="text-white group-hover:text-black transition-colors" />
              </div>
            </div>
          </a>

          {/* Card 5 — Pure screenshot (dark frame) */}
          <a
            href="https://kinngsnetwork.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-[24px] overflow-hidden bg-[#111111] flex flex-col min-h-[420px] decoration-none cursor-pointer hover:scale-[1.015] transition-transform duration-300"
          >
            <div className="flex-1 m-3 mb-0 rounded-[16px] overflow-hidden">
              <img
                src="/website/kinngs.png"
                alt="Kinngs Network"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex-shrink-0 flex items-center justify-center group-hover:bg-[#bfff00] group-hover:border-[#bfff00] transition-all duration-300">
                <ArrowUpRight size={14} className="text-white group-hover:text-black transition-colors" />
              </div>
            </div>
          </a>

          {/* Card 6 — Pure screenshot (light grey) */}
          <a
            href="https://aerosafetours.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-[24px] overflow-hidden bg-[#f0f0ee] flex flex-col min-h-[420px] decoration-none cursor-pointer hover:scale-[1.015] transition-transform duration-300"
          >
            <div className="flex-1 m-3 mb-0 rounded-[16px] overflow-hidden">
              <img
                src="/website/Aerosafe.png"
                alt="Aero Safe Tours"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center group-hover:bg-[#3a8cd7] transition-colors duration-300">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </div>
          </a>

        </div>

        {/* ── View More CTA ── */}
        <div className="max-w-7xl mx-auto flex justify-center mt-14">
          <Link
            to="/works"
            className="group inline-flex items-center gap-3 bg-black hover:bg-zinc-800 text-white text-sm font-bold px-10 py-4 rounded-full tracking-wider uppercase decoration-none cursor-pointer transition-all duration-300"
          >
            View More Works
            <div className="w-6 h-6 rounded-full bg-white/15 group-hover:bg-[#bfff00] flex items-center justify-center transition-all duration-300">
              <ArrowUpRight size={13} className="text-white group-hover:text-black transition-colors" />
            </div>
          </Link>
        </div>

      </section>

      {/* 6. TECH STACK SECTION */}
      <section className="w-full bg-white py-20 px-6 sm:px-12 md:px-20 border-t border-black/8 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black">
            Technologies We Use
          </h2>
          <p className="text-black/40 text-sm mt-3 leading-relaxed">
            Modern stack powering every project we build
          </p>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="relative overflow-hidden mb-3">
          {/* fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div
            className="flex gap-3 w-max"
            style={{ animation: "techScroll1 35s linear infinite" }}
          >
            {[
              { name: "React.js",      color: "#61dafb", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#61dafb"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="#61dafb" strokeWidth="1.2"/><ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="#61dafb" strokeWidth="1.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="#61dafb" strokeWidth="1.2" transform="rotate(120 12 12)"/></svg> },
              { name: "Next.js",       color: "#000000", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5V8l7 8.5H10.5z"/></svg> },
              { name: "TypeScript",    color: "#3178c6", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#3178c6"><rect width="24" height="24" rx="3"/><path d="M3 3h18v18H3z" fill="#3178c6"/><text x="4" y="18" fontSize="10" fontWeight="bold" fill="white">TS</text></svg> },
              { name: "Node.js",       color: "#339933", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#339933"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/></svg> },
              { name: "Tailwind CSS",  color: "#06b6d4", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#06b6d4"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 17.85 9.5 19 12 19c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/></svg> },
              { name: "PostgreSQL",    color: "#4169e1", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4169e1"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="#4169e1" strokeWidth="1.5"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="#4169e1" strokeWidth="1.5"/></svg> },
              { name: "MongoDB",       color: "#47a248", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#47a248"><path d="M12 2C9 2 7 6 7 10c0 3.5 2 6 5 7v3h1v-3c3-1 5-3.5 5-7 0-4-2-8-6-8z"/></svg> },
              { name: "Express.js",    color: "#888888", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#888"><path d="M3 12h18M3 6h18M3 18h12"/></svg> },
              { name: "React Native",  color: "#61dafb", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#61dafb" strokeWidth="1.5"><rect x="7" y="2" width="10" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="#61dafb"/></svg> },
              { name: "Firebase",      color: "#ffca28", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#ffca28"><path d="M5 21L8.5 3l4.5 8L17 8l2 13H5z"/></svg> },
              { name: "MySQL",         color: "#00758f", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#00758f"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="#00758f" strokeWidth="1.5"/></svg> },
              { name: "Vite",          color: "#646cff", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#646cff"><path d="M12 2l10 18H2L12 2z"/></svg> },
              // duplicate for seamless loop
              { name: "React.js",      color: "#61dafb", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#61dafb"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="#61dafb" strokeWidth="1.2"/><ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="#61dafb" strokeWidth="1.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="#61dafb" strokeWidth="1.2" transform="rotate(120 12 12)"/></svg> },
              { name: "Next.js",       color: "#000000", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5V8l7 8.5H10.5z"/></svg> },
              { name: "TypeScript",    color: "#3178c6", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#3178c6"><rect width="24" height="24" rx="3"/><path d="M3 3h18v18H3z" fill="#3178c6"/><text x="4" y="18" fontSize="10" fontWeight="bold" fill="white">TS</text></svg> },
              { name: "Node.js",       color: "#339933", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#339933"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/></svg> },
              { name: "Tailwind CSS",  color: "#06b6d4", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#06b6d4"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 17.85 9.5 19 12 19c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/></svg> },
              { name: "PostgreSQL",    color: "#4169e1", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4169e1"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="#4169e1" strokeWidth="1.5"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="#4169e1" strokeWidth="1.5"/></svg> },
            ].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-white border border-black/10 rounded-full px-4 py-2.5 shadow-sm hover:shadow-md hover:border-black/20 transition-all duration-200 flex-shrink-0 cursor-default"
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: `${tech.color}18` }}>
                  {tech.icon}
                </div>
                <span className="text-[13px] font-semibold text-black/80 whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reverse) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div
            className="flex gap-3 w-max"
            style={{ animation: "techScroll2 40s linear infinite" }}
          >
            {[
              { name: "PHP",           color: "#777bb4", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#777bb4"><ellipse cx="12" cy="12" rx="10" ry="6" fill="none" stroke="#777bb4" strokeWidth="1.5"/><text x="7" y="16" fontSize="7" fontWeight="bold" fill="#777bb4">PHP</text></svg> },
              { name: "WordPress",     color: "#21759b", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#21759b"><circle cx="12" cy="12" r="10" fill="none" stroke="#21759b" strokeWidth="1.5"/><path d="M4 12h16M12 4v16" stroke="#21759b" strokeWidth="1.2"/></svg> },
              { name: "Angular",       color: "#dd0031", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#dd0031"><path d="M12 2L3 6l1.5 12L12 22l7.5-4L21 6 12 2z"/></svg> },
              { name: "Vue.js",        color: "#42b883", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#42b883"><path d="M12 21L2 4h4l6 10 6-10h4L12 21z"/></svg> },
              { name: "AWS",           color: "#ff9900", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#ff9900"><path d="M12 2L2 8v8l10 6 10-6V8L12 2z"/></svg> },
              { name: "Docker",        color: "#2496ed", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#2496ed"><rect x="2" y="10" width="3" height="3" rx="0.5"/><rect x="6" y="10" width="3" height="3" rx="0.5"/><rect x="10" y="10" width="3" height="3" rx="0.5"/><rect x="10" y="6" width="3" height="3" rx="0.5"/><rect x="14" y="10" width="3" height="3" rx="0.5"/><path d="M2 15c3 3 9 3 12 0" fill="none" stroke="#2496ed" strokeWidth="1.2"/></svg> },
              { name: "Redis",         color: "#dc382d", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#dc382d"><ellipse cx="12" cy="8" rx="9" ry="3"/><path d="M3 8v4c0 1.66 4 3 9 3s9-1.34 9-3V8" fill="none" stroke="#dc382d" strokeWidth="1.4"/></svg> },
              { name: "GraphQL",       color: "#e10098", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#e10098"><polygon points="12,2 20,7 20,17 12,22 4,17 4,7"/></svg> },
              { name: "REST APIs",     color: "#6366f1", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#6366f1" strokeWidth="1.5"><path d="M4 12h16M12 4l8 8-8 8"/></svg> },
              { name: "Stripe",        color: "#635bff", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#635bff"><rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="#635bff" strokeWidth="1.5"/><path d="M2 10h20" stroke="#635bff" strokeWidth="1.5"/></svg> },
              { name: "Supabase",      color: "#3ecf8e", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#3ecf8e"><path d="M4 20l9-16v9h7L11 20v-9H4z"/></svg> },
              { name: "Prisma",        color: "#2d3748", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#2d3748"><path d="M3 22L12 2l9 15-9 3-9-3z"/></svg> },
              // duplicate
              { name: "PHP",           color: "#777bb4", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#777bb4"><ellipse cx="12" cy="12" rx="10" ry="6" fill="none" stroke="#777bb4" strokeWidth="1.5"/><text x="7" y="16" fontSize="7" fontWeight="bold" fill="#777bb4">PHP</text></svg> },
              { name: "WordPress",     color: "#21759b", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#21759b"><circle cx="12" cy="12" r="10" fill="none" stroke="#21759b" strokeWidth="1.5"/><path d="M4 12h16M12 4v16" stroke="#21759b" strokeWidth="1.2"/></svg> },
              { name: "Angular",       color: "#dd0031", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#dd0031"><path d="M12 2L3 6l1.5 12L12 22l7.5-4L21 6 12 2z"/></svg> },
              { name: "Vue.js",        color: "#42b883", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#42b883"><path d="M12 21L2 4h4l6 10 6-10h4L12 21z"/></svg> },
              { name: "AWS",           color: "#ff9900", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#ff9900"><path d="M12 2L2 8v8l10 6 10-6V8L12 2z"/></svg> },
              { name: "Docker",        color: "#2496ed", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#2496ed"><rect x="2" y="10" width="3" height="3" rx="0.5"/><rect x="6" y="10" width="3" height="3" rx="0.5"/><rect x="10" y="10" width="3" height="3" rx="0.5"/><rect x="10" y="6" width="3" height="3" rx="0.5"/><rect x="14" y="10" width="3" height="3" rx="0.5"/><path d="M2 15c3 3 9 3 12 0" fill="none" stroke="#2496ed" strokeWidth="1.2"/></svg> },
            ].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-white border border-black/10 rounded-full px-4 py-2.5 shadow-sm hover:shadow-md hover:border-black/20 transition-all duration-200 flex-shrink-0 cursor-default"
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: `${tech.color}18` }}>
                  {tech.icon}
                </div>
                <span className="text-[13px] font-semibold text-black/80 whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes techScroll1 {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes techScroll2 {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="w-full bg-[#f5f6fa] text-black relative overflow-hidden py-20 px-6 sm:px-12 md:px-20 border-t border-black/8">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── LEFT COLUMN: headline + description + CTAs ── */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <p className="text-black/40 text-xs font-mono uppercase tracking-[0.25em] mb-3">What they say about us</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.1] text-black">
                Reviews from<br />our clients
              </h2>
            </div>
            <p className="text-black/50 text-sm leading-relaxed max-w-xs">
              Join our growing roster of satisfied clients who've built smarter, faster digital products. From websites to automation — they're loving the results.
            </p>

            {/* Floating reviewer card — light box */}
            <div className="bg-white rounded-[18px] p-5 flex flex-col gap-3 max-w-[220px] shadow-md border border-black/8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"
                    alt="Reviewer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-black font-bold text-sm leading-tight">Priya Sharma</p>
                  <p className="text-black/40 text-[10px]">priya@business.com</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/40 text-[9px] uppercase tracking-wider font-mono">Grade</p>
                  <p className="text-black font-black text-lg leading-none">5.0</p>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 mt-2">
              <Link
                to="/contact"
                className="bg-black text-white text-xs font-bold px-6 py-3 rounded-full tracking-wider uppercase decoration-none cursor-pointer inline-flex items-center gap-2 hover:bg-zinc-800 transition-all"
              >
                Get Started <ArrowUpRight size={13} />
              </Link>
              <a
                href="mailto:mirastratech@gmail.com"
                className="text-black/50 text-xs font-semibold hover:text-black transition-colors cursor-pointer decoration-none"
              >
                Give review
              </a>
            </div>
          </div>

          {/* ── CENTER COLUMN: big portrait photo + review text + name ── */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Large portrait card */}
            <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] w-full max-w-[340px] mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Client"
                className="w-full h-full object-cover"
              />
              {/* Small nav arrow on the photo */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </div>

            {/* Review text */}
            <div className="max-w-[420px]">
              <p className="text-black/60 text-sm leading-relaxed">
                "I've been using Mirastra's services for several months now, and I'm genuinely impressed. The{" "}
                <span className="text-black font-semibold">work is clean and delivered fast,</span>{" "}
                making it easier to manage my entire digital presence from one partnership. I especially love the attention to detail — my project now runs like a well-oiled machine!"
              </p>
            </div>

            {/* Name + rating row */}
            <div className="flex items-center gap-6">
              <div>
                <p className="text-black font-bold text-base">Aisha Mohammed</p>
                <p className="text-black/35 text-xs">aisha.m@startup.com</p>
              </div>
              <div className="h-8 w-px bg-black/10" />
              <div>
                <p className="text-black/35 text-[9px] uppercase tracking-wider font-mono">Grade</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-black font-black text-lg leading-none">5.0</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="ml-auto w-8 h-8 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                <ArrowUpRight size={13} className="text-black/40" />
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: second photo card + floating card + bottom text ── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Second portrait card — shorter */}
            <div className="relative rounded-[24px] overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=450&q=80"
                alt="Client"
                className="w-full h-full object-cover"
              />
              {/* Floating name chip at bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-[14px] px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">Rajan Mehta</p>
                  <p className="text-white/50 text-[10px]">CEO, Ventures Co.</p>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Extra review snippet */}
            <div className="bg-white border border-black/8 rounded-[18px] p-5 shadow-sm">
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                ))}
              </div>
              <p className="text-black/70 text-sm leading-relaxed">
                "Outstanding results. The team understood our vision perfectly and delivered beyond what we expected."
              </p>
              <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-black/8">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">SK</div>
                <div>
                  <p className="text-black text-xs font-semibold">Suresh Kumar</p>
                  <p className="text-black/35 text-[10px]">Director, MSME Business</p>
                </div>
              </div>
            </div>

            {/* Bottom tagline */}
            <p className="text-black/25 text-xs leading-relaxed text-right font-mono">
              Take full control of your digital presence — anytime,<br />anywhere. <span className="text-black/45">Available for all businesses worldwide.</span>
            </p>
          </div>

        </div>
      </section>
      {/* 8. CTA SECTION */}
      <section className="w-full bg-black px-6 sm:px-12 md:px-20 py-12 relative z-10">
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
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
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
                <p className="text-black/60 text-[10px] font-medium">On-Time Delivery</p>
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
                <p className="text-black/40 text-[9px] mt-1">Est. May 2026</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-black relative overflow-hidden">

        {/* ── Giant brand name ── */}
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

        {/* ── Bottom info bar ── */}
        <div className="relative z-10 border-t border-white/6 px-8 sm:px-12 md:px-16 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* Col 1: logo + address + status + socials */}
            <div className="md:col-span-3 flex flex-col gap-5">
              {/* Logo */}
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
                  <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em]">{col.heading}</p>
                  {col.links.map((link, li) => (
                    <a key={li} href="#" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Right: two icon buttons */}
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


