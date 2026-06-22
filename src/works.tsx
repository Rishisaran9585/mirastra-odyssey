import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "../components/Nav";
import React, { useState } from "react";
import {
  ArrowUpRight,
  FolderGit,
  Link as LinkIcon,
  Compass,
  Sparkles,
  Activity,
  ShieldCheck,
  Heart,
} from "lucide-react";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Our Works — Mirastra Tech" },
      {
        name: "description",
        content:
          "Browse our portfolio of custom software, business portals, SaaS projects, e-commerce, and mobile applications.",
      },
    ],
  }),
  component: Works,
});

const PROJECT_CATEGORIES = [
  { id: "all", name: "All Projects" },
  { id: "corporate", name: "Corporate" },
  { id: "education", name: "Education" },
  { id: "media", name: "Media & Creative" },
  { id: "ecommerce", name: "E-Commerce & Matrimony" },
  { id: "travel", name: "Travel & Tourism" },
  { id: "saas", name: "SaaS & Products" },
];

const PROJECTS = [
  // Corporate
  {
    title: "Aghora Engineering Consultants",
    category: "corporate",
    url: "https://aghoraengineeringconsultants.com/",
    description:
      "Premium engineering consultancy web portal showing projects and client portfolios.",
    bgGradient: "from-zinc-900 to-zinc-950",
    initials: "AE",
    metrics: [
      { label: "Lighthouse Speed", value: "98%" },
      { label: "Page Load Time", value: "0.4s" },
      { label: "SEO Optimization", value: "100%" },
    ],
  },
  {
    title: "AliceBlue Tiger Hosting",
    category: "corporate",
    url: "https://aliceblue-tiger-698743.hostingersite.com/",
    description: "Futuristic corporate hosting showcase with custom UI and speed optimization.",
    bgGradient: "from-zinc-800 to-black",
    initials: "AB",
    metrics: [
      { label: "Uptime Target", value: "99.9%" },
      { label: "Response Time", value: "180ms" },
      { label: "SEO Score", value: "98%" },
    ],
  },
  {
    title: "Hotpink Wasp Agency",
    category: "corporate",
    url: "https://hotpink-wasp-145065.hostingersite.com/",
    description: "Modern digital strategy showcase with glassmorphism layouts and custom UI.",
    bgGradient: "from-rose-950 to-black",
    initials: "HW",
    metrics: [
      { label: "Layout Animation", value: "60 FPS" },
      { label: "Speed Index", value: "0.6s" },
      { label: "Page Weight", value: "1.1MB" },
    ],
  },
  {
    title: "Lavender Bear Corp",
    category: "corporate",
    url: "https://lavender-bear-754863.hostingersite.com/",
    description: "Professional corporate directory and digital solutions landing platform.",
    bgGradient: "from-indigo-950 to-black",
    initials: "LB",
    metrics: [
      { label: "Conversion Index", value: "+45%" },
      { label: "Load Time", value: "0.5s" },
      { label: "SEO Rating", value: "99%" },
    ],
  },
  // Education
  {
    title: "IELTS Horizon Training",
    category: "education",
    url: "https://ieltshorizon.com/",
    description:
      "Immersive training portal with class schedules, student intake registration, and course details.",
    bgGradient: "from-sky-950 to-zinc-950",
    initials: "IH",
    metrics: [
      { label: "Intake Automation", value: "100%" },
      { label: "Student Registries", value: "+180%" },
      { label: "Speed Score", value: "97%" },
    ],
  },
  {
    title: "Lime Spoonbill Academy",
    category: "education",
    url: "https://lime-spoonbill-743959.hostingersite.com/",
    description: "Futuristic learning platform showcasing student custom tools and schedules.",
    bgGradient: "from-emerald-950 to-black",
    initials: "LS",
    metrics: [
      { label: "Asset Loading", value: "0.3s" },
      { label: "Interaction Index", value: "99%" },
      { label: "SEO Grade", value: "A+" },
    ],
  },
  // Matrimony & E-Commerce
  {
    title: "Lishan Sarees Store",
    category: "ecommerce",
    url: "https://lishansarees.com/",
    description:
      "A premium luxury sarees online catalog featuring booking integrations and custom displays.",
    bgGradient: "from-yellow-950/40 to-black",
    initials: "LSS",
    metrics: [
      { label: "Bookings Boost", value: "+240%" },
      { label: "Mobile Speed", value: "99%" },
      { label: "Image Weights", value: "0.8MB" },
    ],
  },
  {
    title: "Limegreen Antelope Matrimony",
    category: "ecommerce",
    url: "https://limegreen-antelope-183177.hostingersite.com/",
    description:
      "Next-gen custom matchmaking platform with advanced user registries and security flows.",
    bgGradient: "from-teal-950 to-black",
    initials: "LAM",
    metrics: [
      { label: "Profile Match Speed", value: "0.2s" },
      { label: "Database Encryption", value: "AES-256" },
      { label: "Uptime Rating", value: "99.9%" },
    ],
  },
  // Media & Creative
  {
    title: "Medai The Stage",
    category: "media",
    url: "https://medaithestage.com/",
    description:
      "Creative stage booking portal displaying theatrical workshops and artist profiles.",
    bgGradient: "from-red-950 to-zinc-950",
    initials: "MTS",
    metrics: [
      { label: "Booking Speed", value: "0.5s" },
      { label: "Audience Conversions", value: "+140%" },
      { label: "SEO Index", value: "99%" },
    ],
  },
  {
    title: "Kinngs Network Platform",
    category: "media",
    url: "https://kinngsnetwork.com/",
    description:
      "Corporate digital network showcasing creator assets, events, and portfolio layouts.",
    bgGradient: "from-amber-950/45 to-black",
    initials: "KN",
    metrics: [
      { label: "Network Bandwidth", value: "0.2s" },
      { label: "Creator Onboarding", value: "100%" },
      { label: "Lighthouse Score", value: "98%" },
    ],
  },
  {
    title: "Grey Boar Media",
    category: "media",
    url: "https://grey-boar-606830.hostingersite.com/",
    description: "Next-generation media portal displaying video shoots and social handling assets.",
    bgGradient: "from-zinc-900 to-black",
    initials: "GB",
    metrics: [
      { label: "Video Buffering", value: "0.3s" },
      { label: "Asset Compress", value: "90%" },
      { label: "SEO Index", value: "97%" },
    ],
  },
  // Travel
  {
    title: "Aero Safe Tours",
    category: "travel",
    url: "https://aerosafetours.com/",
    description:
      "International flight ticketing and custom tour packages portal built for reliability.",
    bgGradient: "from-blue-950/40 to-zinc-950",
    initials: "AST",
    metrics: [
      { label: "Ticketing Speed", value: "0.4s" },
      { label: "Form Optimization", value: "100%" },
      { label: "Uptime Index", value: "99.9%" },
    ],
  },
  {
    title: "First Dream Destinations",
    category: "travel",
    url: "https://www.firstdreamdestinations.com/",
    description: "Modern travel registry with booking inquiries and travel guidelines.",
    bgGradient: "from-cyan-950/40 to-black",
    initials: "FDD",
    metrics: [
      { label: "Load Speed Index", value: "0.5s" },
      { label: "User Interaction", value: "98%" },
      { label: "SEO Score", value: "99%" },
    ],
  },
  // SaaS & Products
  {
    title: "Cornflower Blue Grasshopper",
    category: "saas",
    url: "https://cornflowerblue-grasshopper-952998.hostingersite.com/",
    description:
      "Advanced SaaS tool dashboard showcasing customer analytics, metrics, and automation modules.",
    bgGradient: "from-indigo-950 to-zinc-950",
    initials: "CBG",
    metrics: [
      { label: "Pipeline Auto", value: "100%" },
      { label: "Data Sync Speed", value: "250ms" },
      { label: "Security Audit", value: "PASSED" },
    ],
  },
];

const PRODUCT_HIGHLIGHTS = [
  { title: "FocusFlow", desc: "SaaS Workflow automation platform targeting daily tasks." },
  { title: "CRM System", desc: "Custom administrative pipeline tracking leads and contracts." },
  {
    title: "InstaLeads",
    desc: "Chrome extension to scrape lead lists based on search parameters.",
  },
  { title: "GroupChimp", desc: "Automation tool for managing high-volume community updates." },
  {
    title: "AutoPost Authority",
    desc: "Social media automations for scheduling and content pipelines.",
  },
  {
    title: "Automate Commentor",
    desc: "Targeted customer engagement script automating notifications.",
  },
  { title: "SaaS Dashboard", desc: "Beautiful analytics tool visualizing platform actions." },
  { title: "Extensions Suite", desc: "Collection of custom productivity tools served in-browser." },
];

function Works() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <main className="w-full bg-black text-white min-h-screen relative font-sans p-3 sm:p-5 md:p-6 overflow-hidden">
      {/* Navigation */}
      <Nav />

      {/* Outer Panel Container (Kontra Minimal Frame) */}
      <div className="w-full min-h-[92vh] rounded-[24px] md:rounded-[40px] border border-white/10 relative overflow-hidden flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 md:px-20 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

        {/* 1. HERO SHIELD: Kontra Architectural Language */}
        <div className="flex-1 flex flex-col justify-center py-16 relative z-10">
          <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase font-mono mb-4">
            PORTFOLIO SHOWCASE
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif tracking-tight leading-[1.05] max-w-[800px] uppercase font-light">
              Mirastra Builds <br />
              <span className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                Bold Visions
              </span>{" "}
              <br />
              For the Future
            </h1>

            <div className="text-right max-w-xs">
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-mono">
                MSME-registered tech partner serving startups, SaaS products, and small business
                portfolios globally.
              </p>
            </div>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 mt-12 pb-2 border-b border-white/10">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border outline-none cursor-pointer ${activeCategory === cat.id
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/60 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 2. PROJECT LIVE PREVIEW GRID */}
        <div className="w-full z-20 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <a
              key={idx}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all flex flex-col justify-between shadow-2xl group cursor-pointer text-white decoration-none"
            >
              {/* Chrome Browser Top bar mockup */}
              <div className="bg-zinc-900 px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <span className="text-[9px] font-mono text-white/40 truncate max-w-[180px]">
                  {proj.url.replace("https://", "").replace("www.", "")}
                </span>
                <LinkIcon
                  size={10}
                  className="text-white/30 group-hover:text-white transition-colors"
                />
              </div>

              {/* Card Body Display */}
              <div
                className={`p-6 bg-gradient-to-br ${proj.bgGradient} aspect-video flex flex-col justify-between relative`}
              >
                {/* Large Background Letters */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                  <span className="text-[8vw] font-black opacity-[0.03] tracking-tighter text-white uppercase font-sans">
                    {proj.initials}
                  </span>
                </div>

                <div className="flex justify-between items-start z-10 relative">
                  <span className="text-[10px] bg-white/10 text-white/70 border border-white/10 rounded px-2 py-0.5 uppercase tracking-widest font-mono">
                    {proj.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-105 transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <div className="z-10 relative mt-4">
                  <h3 className="text-white font-bold text-base leading-tight tracking-tight font-serif group-hover:text-[#ffffff] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-white/50 text-[11px] mt-2 leading-relaxed h-12 overflow-hidden">
                    {proj.description}
                  </p>
                </div>

                {/* Expanded Performance Metrics (Futuristic UI overlay inside browser mockup) */}
                <div className="border-t border-white/10 pt-3 mt-4 z-10 relative grid grid-cols-3 gap-2 text-center bg-black/35 backdrop-blur-sm rounded-xl p-2.5">
                  {proj.metrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-[8px] uppercase tracking-wider text-white/40 block">
                        {metric.label}
                      </span>
                      <span className="text-xs font-bold text-white font-mono mt-0.5 block">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 3. PRODUCT & SOLUTIONS SECTION */}
      <section className="w-full mt-16 md:mt-24 px-4 sm:px-8 md:px-12 py-12 border-t border-white/10 z-10 relative">
        <span className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-4 block">
          In-House Solutions
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif uppercase tracking-tight text-white mb-12">
          Product Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {PRODUCT_HIGHLIGHTS.map((prod, idx) => (
            <div
              key={idx}
              className="border border-white/10 bg-[#0e0e0e] rounded-xl p-6 flex flex-col justify-between min-h-[140px] hover:border-white/20 transition-colors"
            >
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white/50 mb-4">
                <FolderGit size={14} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm font-mono">{prod.title}</h4>
                <p className="text-white/50 text-[11px] leading-relaxed mt-2">{prod.desc}</p>
              </div>
            </div>
          ))}
        </div>
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
