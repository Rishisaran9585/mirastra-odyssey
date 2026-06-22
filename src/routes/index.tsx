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

      {/* 1. HERO SECTION (Aeline Sky-Blue Panel) */}
      <div
        className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between pt-32 pb-8 px-6 sm:px-12 md:px-20"
        style={{
          background: "radial-gradient(circle at 75% 35%, #8fc1e8 0%, #3a8cd7 50%, #1555a5 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10 relative mt-4 md:mt-8">
          {/* Hero Left Column */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-[620px]">
              Building the future with AI and strategy
            </h1>
            <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium mt-6 max-w-[520px] leading-relaxed">
              We help organizations unlock growth and efficiency through data-driven consulting and
              intelligent automation.
            </p>

            {/* Lime CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
              <Link
                to="/services"
                className="bg-[#bfff00] hover:bg-[#aee600] text-black text-xs sm:text-sm font-bold uppercase tracking-widest py-4 px-8 rounded-full inline-flex items-center gap-3 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl decoration-none cursor-pointer"
              >
                <span>Get Started</span>
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white">
                  <ArrowUpRight size={14} />
                </div>
              </Link>

              {/* Stars review */}
              <div className="flex flex-col items-start gap-1">
                <span className="text-xs font-semibold text-white/80 tracking-wider">
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
          <div className="md:col-span-5 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-[380px] aspect-square sm:aspect-[4/5] md:aspect-square flex items-center justify-center z-10">
              <img
                src="/assets/home_consulting_hero.png"
                alt="Consulting Hero"
                className="w-full h-full object-contain scale-110 sm:scale-120 md:scale-125"
                style={{
                  maskImage: "radial-gradient(circle, black 65%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(circle, black 65%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Feature Cards Carousel */}
        <div className="w-full mt-10 md:mt-6 z-20 overflow-x-auto no-scrollbar pb-2">
          <div className="flex gap-4 min-w-[850px] md:min-w-0 md:grid md:grid-cols-5">
            {/* Tag Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-4 flex flex-col justify-between shadow-lg h-36">
              <div className="flex flex-wrap gap-1">
                {homeTags.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-semibold bg-white/20 text-white rounded-full px-2 py-0.5 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-white/50">
                  Clients Launched
                </p>
                <h4 className="text-xl font-bold text-white leading-none mt-1">14+ Projects</h4>
              </div>
            </div>

            {/* Client Snapshot Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-4 flex items-center gap-3 shadow-lg h-36">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/30 flex-shrink-0 bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none select-none">MT</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-white leading-none">Mugai Technologies</p>
                <p className="text-[9px] text-white/60 mt-1 uppercase">Business &amp; Corporate</p>
                <div className="flex justify-between mt-3 text-[10px] font-mono">
                  <div>
                    <span className="text-white/40 block">STATUS</span>
                    <span className="text-emerald-300 font-bold">Live</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">TYPE</span>
                    <span className="text-sky-300 font-bold">Website</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Expertise Card */}
            <div className="bg-black/40 border border-white/10 rounded-[20px] p-4 flex flex-col justify-between shadow-lg h-36">
              <div className="w-5 h-5 rounded-full bg-[#bfff00]/20 flex items-center justify-center text-[#bfff00]">
                <Zap size={10} />
              </div>
              <div>
                <p className="text-xs font-medium text-white/90 leading-tight">
                  Code That Scales. Designs That Convert. Results That Matter.
                </p>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-4 flex flex-col justify-between shadow-lg h-36">
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-white/50">
                  Project Success Rate
                </p>
                <h4 className="text-lg font-bold text-white mt-1">
                  100% <span className="text-xs text-white/40 font-normal">On-Time Delivery</span>
                </h4>
              </div>
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#bfff00] h-full" style={{ width: "100%" }} />
              </div>
            </div>

            {/* Notification Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-4 flex flex-col justify-between shadow-lg h-36">
              <div className="flex justify-between items-center">
                <span className="text-[9px] bg-sky-400 text-white rounded-full px-2 py-0.5 uppercase tracking-wide">
                  MSME Registered
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Est. May 2026</p>
                <p className="text-[10px] text-white/60 leading-tight mt-1 font-mono">
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
          <h3 className="text-3xl sm:text-5xl font-instrument text-slate-950 tracking-tight leading-tight max-w-2xl mx-auto">
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

      {/* 3. SERVICES PREVIEW SECTION */}
      <section className="w-full bg-black text-white py-24 px-6 sm:px-12 md:px-20 border-t border-white/10 z-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[#bfff00] text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-3">
                Services
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Everything You Need<br />
                <span className="text-white/40">To Build & Grow</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="self-start md:self-end bg-white hover:bg-white/90 text-black text-xs font-bold px-6 py-3 rounded-full transition-all tracking-wider uppercase decoration-none cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
            >
              View All Services
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: "01",
                title: "Website Development",
                desc: "Static, dynamic & animated websites — responsive, fast, and conversion-focused.",
                tags: ["Static Sites", "Dynamic Sites", "Animated", "SEO-Ready"],
                accent: "from-blue-900/40",
              },
              {
                num: "02",
                title: "Web Applications",
                desc: "SaaS platforms, dashboards, booking systems, and admin portals built to scale.",
                tags: ["SaaS Platforms", "Dashboards", "Booking Systems", "Analytics"],
                accent: "from-violet-900/40",
              },
              {
                num: "03",
                title: "Mobile App Development",
                desc: "Cross-platform Android & iOS apps built for performance and engagement.",
                tags: ["Android", "iOS", "Cross-Platform", "Business Apps"],
                accent: "from-sky-900/40",
              },
              {
                num: "04",
                title: "Custom Software",
                desc: "CRM, HRM, ERP and tailor-made systems integrated with your workflows.",
                tags: ["CRM Systems", "ERP Solutions", "HRM", "Billing Software"],
                accent: "from-emerald-900/40",
              },
              {
                num: "05",
                title: "Browser Extensions",
                desc: "Chrome extensions for workflow automation, lead gen, and productivity boosts.",
                tags: ["Chrome Extensions", "Lead Gen Tools", "Workflow Automation"],
                accent: "from-amber-900/40",
              },
              {
                num: "06",
                title: "Automation Solutions",
                desc: "Reduce manual workflows with lead pipelines, scrapers, and process scripts.",
                tags: ["Lead Pipelines", "Data Processing", "Social Automation"],
                accent: "from-orange-900/40",
              },
              {
                num: "07",
                title: "Digital Marketing",
                desc: "Meta Ads, social media handling, and video shoot & editing from ₹7,000/month.",
                tags: ["Meta Ads", "Social Media", "Video Editing", "Lead Campaigns"],
                accent: "from-rose-900/40",
              },
              {
                num: "08",
                title: "QA Testing & Audits",
                desc: "Manual, automation, and regression testing to ensure reliability before launch.",
                tags: ["Manual Testing", "Automation QA", "Performance Audits"],
                accent: "from-teal-900/40",
              },
            ].map((srv, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-b ${srv.accent} to-zinc-950 border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4 hover:border-white/25 hover:scale-[1.02] transition-all duration-300 group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-white/30 font-mono tracking-widest">
                      // {srv.num}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-base leading-tight tracking-tight mb-2">
                    {srv.title}
                  </h4>
                  <p className="text-white/50 text-[11px] leading-relaxed">{srv.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {srv.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-semibold bg-white/5 text-white/60 rounded-full px-2.5 py-1 border border-white/8 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED WORKS SECTION */}
      <section className="w-full mt-16 md:mt-24 px-4 sm:px-8 md:px-12 z-10 relative">
        {/* Top Row: 2-col split header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-12">
          {/* Left: Label + Headline */}
          <div>
            <p className="text-[#3a8cd7] text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-4">
              Works
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Work That<br />
              <span className="text-white/40">Speaks for Itself</span>
            </h2>
          </div>

          {/* Right: Description + CTA */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-sm md:text-right">
              From corporate portals to e-commerce stores and SaaS platforms — we build digital
              products that are fast, scalable, and built to last.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-white/40 text-xs font-mono leading-snug">
                Let's build something<br />meaningful together.
              </p>
              <Link
                to="/works"
                className="bg-[#3a8cd7] hover:bg-[#2b72bd] text-white text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105 decoration-none cursor-pointer whitespace-nowrap"
              >
                <span>View All Works</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight size={11} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 browser-mockup project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Aghora Engineering Consultants",
              url: "https://aghoraengineeringconsultants.com/",
              category: "Corporate Website",
              description: "Premium engineering consultancy portal with project showcase and client portfolios.",
              screenshot: "/assets/aghora_thumb.jpg",
            },
            {
              title: "Lishan Sarees Store",
              url: "https://lishansarees.com/",
              category: "E-Commerce",
              description: "Luxury sarees online catalog with booking integrations and custom product displays.",
              screenshot: "/assets/lishan_thumb.jpg",
            },
            {
              title: "IELTS Horizon Training",
              url: "https://ieltshorizon.com/",
              category: "Education Portal",
              description: "Immersive training portal with class schedules and student intake registration.",
              screenshot: "/assets/ielts_thumb.jpg",
            },
            {
              title: "Medai The Stage",
              url: "https://medaithestage.com/",
              category: "Media & Creative",
              description: "Creative stage booking portal displaying theatrical workshops and artist profiles.",
              screenshot: "/assets/medai_thumb.jpg",
            },
            {
              title: "Kinngs Network",
              url: "https://kinngsnetwork.com/",
              category: "Media & Networking",
              description: "Corporate digital network showcasing creator assets, events, and portfolio layouts.",
              screenshot: "/assets/kinngs_thumb.jpg",
            },
            {
              title: "Aero Safe Tours",
              url: "https://aerosafetours.com/",
              category: "Travel & Tourism",
              description: "International flight ticketing and custom tour packages portal built for reliability.",
              screenshot: "/assets/aerosafe_thumb.jpg",
            },
          ].map((proj, idx) => (
            <a
              key={idx}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all flex flex-col shadow-2xl group cursor-pointer text-white decoration-none"
            >
              {/* Chrome browser top bar */}
              <div className="bg-zinc-900 px-4 py-2 border-b border-white/5 flex items-center justify-between flex-shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <span className="text-[9px] font-mono text-white/40 truncate max-w-[180px]">
                  {proj.url.replace("https://", "").replace("www.", "")}
                </span>
                <ArrowUpRight size={10} className="text-white/30 group-hover:text-white transition-colors" />
              </div>

              {/* Screenshot preview */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900">
                <img
                  src={proj.screenshot}
                  alt={`${proj.title} screenshot`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Card footer */}
              <div className="p-5 bg-zinc-950 border-t border-white/5 flex items-end justify-between gap-3">
                <div>
                  <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono block mb-1">
                    {proj.category}
                  </span>
                  <h3 className="text-white font-bold text-sm leading-tight tracking-tight group-hover:text-white/80 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-white/45 text-[11px] mt-1.5 leading-relaxed">{proj.description}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/20 group-hover:scale-110 transition-all flex-shrink-0">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 7. CLIENT LOGOS BAND */}
      <section className="w-full mt-12 md:mt-20 border-t border-b border-white/5 py-8 flex overflow-x-auto no-scrollbar items-center justify-around gap-8 opacity-45">
        {["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"].map(
          (logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-white/50 font-bold tracking-wider text-sm select-none"
            >
              <div className="w-4 h-4 rounded bg-white/40 rotate-45" />
              <span>{logo}</span>
            </div>
          ),
        )}
      </section>

      {/* FOOTER */}
      <footer className="w-full mt-24 border-t border-white/10 pt-12 pb-8 px-6 sm:px-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-base font-bold tracking-wider uppercase text-white font-sans">
            Mirastra Tech
          </span>
          <p className="text-xs text-white/40 mt-2 font-mono">
            Building the Future. Beyond Limits.
          </p>
        </div>
        <p className="text-xs text-white/30 font-mono">
          &copy; 2026 Mirastra Tech. MSME-registered. Serving Clients Worldwide.
        </p>
      </footer>
    </main>
  );
}
