import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "../components/Nav";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mirastra Tech" },
      {
        name: "description",
        content:
          "Learn about Mirastra Tech — an MSME-registered technology solutions company. Discover our mission, vision, and 7-stage development process.",
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
    <main className="w-full bg-[#eeeeec] text-black min-h-screen relative font-sans overflow-hidden">
      {/* Navigation */}
      <Nav />

      {/* 1. HERO SECTION — mountain style */}
      <div className="w-full h-screen relative overflow-hidden flex flex-col bg-[#eeeeec]">

        {/* TOP: text content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-6 max-w-3xl mx-auto w-full flex-shrink-0">

          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 border border-black/10 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3a8cd7] animate-pulse flex-shrink-0" />
            <span className="text-black/50 text-[11px] font-mono tracking-[0.15em]">Welcome to Mirastra Tech</span>
          </div>

          {/* Headline — 2 lines */}
          <h1 className="text-5xl sm:text-6xl md:text-[64px] font-black tracking-tight text-black leading-[1.06] mb-4">
            We craft digital<br />
            experiences that last.
          </h1>

          {/* Subtitle */}
          <p className="text-black/45 text-sm sm:text-base max-w-md leading-relaxed mb-6">
            Elevate your business with bespoke digital systems, performance-driven web development, and intelligent workflow automations.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              to="/contact"
              className="bg-black hover:bg-zinc-800 text-white text-sm font-bold px-8 py-3 rounded-full inline-flex items-center gap-2 transition-all decoration-none cursor-pointer shadow-lg"
            >
              Start a Project →
            </Link>
            <Link
              to="/services"
              className="bg-white/70 hover:bg-white text-black/65 hover:text-black text-sm font-semibold px-8 py-3 rounded-full border border-black/10 inline-flex items-center gap-2 transition-all decoration-none cursor-pointer"
            >
              Our Services ›
            </Link>
          </div>
        </div>

        {/* BOTTOM: mountain fills remaining height */}
        <div className="relative flex-1 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&h=900&q=85"
            alt="Mountain emerging from clouds"
            className="absolute inset-0 w-full h-full select-none pointer-events-none"
            style={{
              objectFit: "cover",
              objectPosition: "center 25%",
              filter: "grayscale(100%) contrast(0.82) brightness(1.02)",
              maskImage: "radial-gradient(ellipse 95% 90% at 50% 100%, black 35%, transparent 88%)",
              WebkitMaskImage: "radial-gradient(ellipse 95% 90% at 50% 100%, black 35%, transparent 88%)",
            }}
          />
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#eeeeec] to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#eeeeec] to-transparent pointer-events-none z-10" />
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
                  Your Trusted Partner in Building the Future
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
                Mirastra Tech is an MSME-registered technology solutions company dedicated to helping businesses grow through innovative digital solutions. Established in May 2026, we specialize in website development, software development, mobile applications, browser extensions, automation systems, digital marketing, and QA services. Operating remotely, serving clients worldwide.
              </p>
              <div className="mt-8 flex flex-col gap-5 max-w-xl">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[#3a8cd7] text-[10px] font-semibold uppercase tracking-[0.2em] font-mono">Our Mission</span>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    To empower businesses with innovative technology solutions that improve efficiency, enhance customer engagement, and accelerate growth.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[#3a8cd7] text-[10px] font-semibold uppercase tracking-[0.2em] font-mono">Our Vision</span>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    To become a trusted global technology partner known for delivering impactful digital solutions that help businesses thrive in the digital world.
                  </p>
                </div>
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-white text-sm font-bold px-7 py-3 rounded-full transition-all decoration-none cursor-pointer shadow-md self-start"
              >
                About Us →
              </Link>
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

      {/* FEATURE GRID SECTION — 2×2 bento cards */}
      <section className="w-full bg-[#eeeeec] py-16 px-6 sm:px-12 md:px-20">
        <div className="max-w-5xl mx-auto">

          {/* Left-aligned headline like reference */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight text-black leading-[1.1] mb-10 max-w-xl">
            Build. Launch. Scale.<br />
            Wherever your business grows.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Card 1 — Website Development */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col gap-5 border border-black/6 hover:shadow-lg transition-all duration-300 min-h-[320px]">
              {/* Visual mockup */}
              <div className="flex-1 flex flex-col items-center justify-center gap-3 bg-[#f5f5f3] rounded-[14px] p-5 relative overflow-hidden">
                {/* Browser bar */}
                <div className="w-full bg-white rounded-xl px-4 py-2.5 shadow-sm border border-black/6 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/70" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                    <div className="w-2 h-2 rounded-full bg-green-400/70" />
                  </div>
                  <div className="bg-black text-white text-[9px] font-bold px-3 py-1 rounded-full">Book a Call ›</div>
                </div>
                {/* Nav icons row */}
                <div className="flex items-center gap-3 self-start px-1 text-black/25 text-xl">
                  <span>⌂</span><span>□</span><span>✕</span>
                </div>
                {/* Skeleton lines */}
                <div className="w-full space-y-2 px-1">
                  <div className="h-2 bg-black/8 rounded-full w-3/4" />
                  <div className="h-2 bg-black/5 rounded-full w-full" />
                  <div className="h-2 bg-black/5 rounded-full w-5/6" />
                </div>
                <div className="self-start pl-1 text-black/15 text-2xl select-none">↩</div>
              </div>
              <div>
                <h3 className="text-black font-bold text-lg leading-tight mb-1.5">Website Development</h3>
                <p className="text-black/45 text-xs leading-relaxed">Responsive, fast-loading websites built for conversion — static, dynamic, animated, and SEO-ready. Delivered to timeline.</p>
              </div>
            </div>

            {/* Card 2 — Mobile App Development */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col gap-5 border border-black/6 hover:shadow-lg transition-all duration-300 min-h-[320px]">
              {/* Visual: feature list rows */}
              <div className="flex-1 flex flex-col gap-2.5 justify-center">
                {[
                  { icon: "📱", label: "Android & iOS", sub: "Cross-platform native builds" },
                  { icon: "⚡", label: "React Native", sub: "High-performance mobile UI" },
                  { icon: "🔗", label: "API Integrations", sub: "Backend connected & synced" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#f5f5f3] rounded-[12px] px-4 py-3 border border-black/5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-black/8 flex items-center justify-center text-base flex-shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-black font-semibold text-xs leading-tight">{item.label}</p>
                      <p className="text-black/35 text-[10px] mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-black font-bold text-lg leading-tight mb-1.5">Mobile App Development</h3>
                <p className="text-black/45 text-xs leading-relaxed">Android and iOS apps built with React Native — performant, intuitive, and ready for the Play Store &amp; App Store.</p>
              </div>
            </div>

            {/* Card 3 — Custom Software */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col gap-5 border border-black/6 hover:shadow-lg transition-all duration-300 min-h-[320px]">
              {/* Visual: stacked pill arc */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-48 h-36 flex items-end justify-center">
                  {[
                    { label: "CRM System",    bg: "#111", w: "160px", bottom: "0px"  },
                    { label: "ERP Platform",  bg: "#2a2a2e", w: "124px", bottom: "26px" },
                    { label: "HRM Module",    bg: "#444",   w: "88px",  bottom: "52px" },
                  ].map((pill, i) => (
                    <div key={i} className="absolute h-10 rounded-full flex items-center justify-center shadow-md"
                      style={{ background: pill.bg, width: pill.w, bottom: pill.bottom }}>
                      <span className="text-white text-[11px] font-bold tracking-wide">{pill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-black font-bold text-lg leading-tight mb-1.5">Custom Software Development</h3>
                <p className="text-black/45 text-xs leading-relaxed">Tailor-made CRM, ERP, HRM, and billing systems built to fit your exact workflow and scale with your business.</p>
              </div>
            </div>

            {/* Card 4 — Automation & Digital Marketing */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col gap-5 border border-black/6 hover:shadow-lg transition-all duration-300 min-h-[320px]">
              {/* Visual: concentric orbit diagram */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rounded-full border border-black/8" />
                  <div className="absolute inset-5 rounded-full border border-black/6" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">⚙️</span>
                    </div>
                  </div>
                  {/* Orbit dots */}
                  {[0, 120, 240].map((deg, i) => (
                    <div key={i} className="absolute w-3 h-3 rounded-full bg-black/15 border-2 border-white shadow"
                      style={{
                        top:  `calc(50% + ${Math.sin(deg * Math.PI / 180) * 56}px - 6px)`,
                        left: `calc(50% + ${Math.cos(deg * Math.PI / 180) * 56}px - 6px)`,
                      }} />
                  ))}
                  {/* Floating labels */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">Responsive</div>
                  <div className="absolute -bottom-5 right-0 bg-black text-white text-[9px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">Under 3s</div>
                </div>
              </div>
              <div>
                <h3 className="text-black font-bold text-lg leading-tight mb-1.5">Automation &amp; Digital Marketing</h3>
                <p className="text-black/45 text-xs leading-relaxed">Workflow bots, lead scrapers, Meta Ads, social media handling, and automation pipelines — always running, always live.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── GROWTH SECTION — light bg, centered headline + bento stats ── */}
      <section className="w-full bg-[#f0f0ee] py-20 px-6 sm:px-12 md:px-20">
        <div className="max-w-5xl mx-auto">

          {/* Centered headline */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-[58px] font-black tracking-tight text-black leading-[1.06] mb-4">
              We drive growth to<br />
              your business{" "}
              <span className="inline-block align-middle text-3xl sm:text-4xl">↗</span>
            </h2>
            <p className="text-black/45 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8">
              Unlock your brand's potential with our proven technology expertise. From strategy to execution, we build and ship what matters.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#bfff00] hover:bg-[#aee600] text-black text-sm font-bold px-7 py-3 rounded-full transition-all decoration-none cursor-pointer shadow-md"
            >
              Book a call
              <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight size={12} className="text-[#bfff00]" />
              </div>
            </Link>
          </div>

          {/* 3-col bento row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* Card 1 — Services tag cloud */}
            <div className="bg-white rounded-[20px] p-6 border border-black/6 flex flex-col gap-5 min-h-[260px]">
              <p className="text-black font-semibold text-sm">Services</p>
              <div className="flex-1 flex flex-wrap gap-2 content-center">
                {[
                  { label: "Web Design",      bg: "#111", color: "white" },
                  { label: "Social Media",    bg: "transparent", color: "black", border: true },
                  { label: "Marketing",       bg: "#111", color: "white" },
                  { label: "Paid Ads",        bg: "transparent", color: "black", border: true },
                  { label: "Branding",        bg: "#111", color: "white" },
                  { label: "Content Creation",bg: "transparent", color: "black", border: true },
                  { label: "SEO",             bg: "#bfff00", color: "black" },
                  { label: "Automation",      bg: "transparent", color: "black", border: true },
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-semibold px-3 py-1.5 rounded-full cursor-default"
                    style={{
                      background: tag.bg,
                      color: tag.color,
                      border: tag.border ? "1.5px solid rgba(0,0,0,0.15)" : "none",
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2 — Stats */}
            <div className="flex flex-col gap-4">
              <div className="bg-black rounded-[20px] p-6 flex flex-col gap-1 flex-1">
                <span className="text-4xl font-black text-white leading-none">14+</span>
                <span className="text-white/50 text-xs leading-relaxed mt-1">clients have interacted with digital products built by us</span>
              </div>
              <div className="bg-white border border-black/6 rounded-[20px] p-6 flex flex-col gap-1 flex-1">
                <span className="text-4xl font-black text-black leading-none">100%</span>
                <span className="text-black/45 text-xs leading-relaxed mt-1">on-time delivery across all projects shipped</span>
              </div>
            </div>

            {/* Card 3 — Testimonial */}
            <div className="bg-white rounded-[20px] p-6 border border-black/6 flex flex-col justify-between min-h-[260px]">
              <div className="text-3xl text-black/20 font-serif leading-none mb-3">"</div>
              <div className="flex-1">
                <p className="text-black font-semibold text-base leading-snug mb-1">
                  The final product exceeded my expectations.
                </p>
                <p className="text-black/50 text-sm">Impressed with the results!</p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-black/6">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-white flex-shrink-0" />
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 border-2 border-white flex-shrink-0" />
                </div>
                <span className="text-black/35 text-[10px] font-mono">Client Review</span>
                <div className="flex text-amber-400 ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US — dark bg, 2×2 reasons grid ── */}
      <section className="w-full bg-black text-white py-20 px-6 sm:px-12 md:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* Left: headline */}
          <div className="md:col-span-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-[1.15]">
              Why our clients<br />choose us as<br />partners
            </h2>
          </div>

          {/* Right: 2×2 reasons */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="0"  y="0"  width="12" height="12" rx="2" fill="#bfff00"/>
                    <rect x="16" y="0"  width="12" height="12" rx="2" fill="#bfff00"/>
                    <rect x="0"  y="16" width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                    <rect x="16" y="16" width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                  </svg>
                ),
                title: "Expertise & Specialisation",
                desc: "Access a team with capabilities across web, mobile, software, and automation — ensuring your projects are well-rounded and effective.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="0"  y="0"  width="12" height="12" rx="2" fill="#bfff00"/>
                    <rect x="16" y="0"  width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                    <rect x="0"  y="16" width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                    <rect x="16" y="16" width="12" height="12" rx="2" fill="#bfff00"/>
                  </svg>
                ),
                title: "Fresh Perspectives",
                desc: "We bring an outsider's perspective to your brand. This fresh viewpoint helps you stay ahead of competitors and adapt to changing digital trends.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="0"  y="0"  width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                    <rect x="16" y="0"  width="12" height="12" rx="2" fill="#bfff00"/>
                    <rect x="0"  y="16" width="12" height="12" rx="2" fill="#bfff00"/>
                    <rect x="16" y="16" width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                  </svg>
                ),
                title: "Scalability & Flexibility",
                desc: "Whether you're a small startup or a large corporation, we scale our services to meet your needs — adapting as your business grows.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="4"  y="4"  width="8"  height="8"  rx="2" fill="#bfff00"/>
                    <rect x="16" y="4"  width="8"  height="8"  rx="2" fill="#bfff00" opacity="0.6"/>
                    <rect x="4"  y="16" width="8"  height="8"  rx="2" fill="#bfff00" opacity="0.6"/>
                    <rect x="16" y="16" width="8"  height="8"  rx="2" fill="#bfff00"/>
                  </svg>
                ),
                title: "Resource Optimisation",
                desc: "Instead of hiring and training an in-house team, you gain top-tier expertise without the overhead — saving both time and money.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div>{item.icon}</div>
                <h3 className="text-white font-bold text-base leading-tight">{item.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. OPERATIONAL FLOW: PUSHPIN ROADMAP */}
      <section className="w-full bg-[#f0f4f8] text-slate-900 py-24 px-6 sm:px-12 md:px-20 z-10 relative overflow-hidden border-t border-slate-200/50">
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1/2 rounded-full bg-[#3a8cd7]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-[#3a8cd7] text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-3 block">How We Work</span>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight max-w-2xl mx-auto">
              Our Development Process
            </h3>
            <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto leading-relaxed">
              A structured 7-stage methodology ensuring every project is delivered on time, on spec, and beyond expectations.
            </p>
          </div>

          {/* Zigzag cards — alternating left / right */}
          <div className="relative flex flex-col gap-0">

            {/* Vertical connector line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-px border-l-2 border-dashed border-slate-300 hidden md:block pointer-events-none z-0" />

            {[
              { num: "01", phase: "Phase 01", title: "Discovery",           rot: "rotate-[1.5deg]",  side: "right",
                desc: "Understanding business goals, target audience, challenges, and project requirements before any planning begins." },
              { num: "02", phase: "Phase 02", title: "Planning",            rot: "rotate-[-1.5deg]", side: "left",
                desc: "Defining scope, features, timelines, architecture, and implementation strategy to set a clear path forward." },
              { num: "03", phase: "Phase 03", title: "Design",              rot: "rotate-[1deg]",    side: "right",
                desc: "Creating intuitive, user-friendly, and visually appealing interfaces that align with your brand and goals." },
              { num: "04", phase: "Phase 04", title: "Development",         rot: "rotate-[-2deg]",   side: "left",
                desc: "Building scalable, secure, high-performance solutions using modern technologies and clean coding practices." },
              { num: "05", phase: "Phase 05", title: "Testing",             rot: "rotate-[1.5deg]",  side: "right",
                desc: "Performing comprehensive quality assurance to ensure reliability, performance, and security across all platforms." },
              { num: "06", phase: "Phase 06", title: "Deployment",          rot: "rotate-[-1deg]",   side: "left",
                desc: "Launching and configuring the solution in production with proper domain, hosting, SSL, and security setup." },
              { num: "07", phase: "Phase 07", title: "Support & Maintenance", rot: "rotate-[1deg]",  side: "right",
                desc: "Providing continuous updates, improvements, and technical support to keep your solution running at its best." },
            ].map((step, i) => (
              <div key={i} className="relative flex items-center py-6 md:py-8">

                {/* Center dot on the line */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-slate-300 shadow-sm z-10 hidden md:flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3a8cd7]" />
                </div>

                {/* Card — alternates side */}
                <div className={`w-full md:w-[46%] ${step.side === "right" ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"}`}>
                  <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transform ${step.rot} hover:rotate-0 hover:shadow-md transition-all duration-300`}>
                    {/* Pin dot */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 border border-zinc-400 shadow-sm" />
                    </div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#3a8cd7]/70">{step.phase}</span>
                      <span className="text-xl font-black text-black/8">{step.num}</span>
                    </div>
                    <h4 className="text-xl font-black tracking-tight text-black mb-2">{step.title}</h4>
                    <p className="text-black/55 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>

              </div>
            ))}

            {/* End label */}
            <div className="flex justify-center pt-4">
              <div className="flex items-center gap-2 text-[#3a8cd7] font-mono text-xs uppercase tracking-widest font-semibold animate-pulse">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                Ready to be delivered!
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* 5. CTA SECTION */}
      <section className="w-full bg-black px-6 sm:px-12 md:px-20 py-12 relative z-10 mt-6">
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
      <footer className="w-full bg-black relative overflow-hidden border-t border-white/5">
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

