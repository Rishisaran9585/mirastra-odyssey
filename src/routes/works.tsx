import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "../components/Nav";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Our Works — Mirastra Tech" },
      { name: "description", content: "Browse our portfolio of custom software, websites, SaaS projects, and mobile applications built by Mirastra Tech." },
    ],
  }),
  component: Works,
});

const PROJECTS = [
  { title: "Aghora Engineering", category: "Corporate", url: "https://aghoraengineeringconsultants.com/", img: new URL("../wesbite/AEC.png", import.meta.url).href },
  { title: "Aero Safe Tours", category: "Travel", url: "https://aerosafetours.com/", img: new URL("../wesbite/Aerosafe tours.png", import.meta.url).href },
  { title: "Aerosafe", category: "Travel", url: "#", img: new URL("../wesbite/Aerosafe.png", import.meta.url).href },
  { title: "Automate Commentor", category: "Automation", url: "#", img: new URL("../wesbite/Automate Commentor.png", import.meta.url).href },
  { title: "Autopost Authority", category: "SaaS", url: "#", img: new URL("../wesbite/Autopost Authority.png", import.meta.url).href },
  { title: "Facebook Lead Builder", category: "Growth", url: "#", img: new URL("../wesbite/Facebook lead builder.png", import.meta.url).href },
  { title: "Find You Counselling", category: "Health", url: "#", img: new URL("../wesbite/find you cousnelling center.png", import.meta.url).href },
  { title: "FocusFlow", category: "Productivity", url: "#", img: new URL("../wesbite/focusflow.png", import.meta.url).href },
  { title: "Friend Disconnector", category: "Utility", url: "#", img: new URL("../wesbite/Friend Disconnector.png", import.meta.url).href },
  { title: "Group Chimp", category: "Social", url: "#", img: new URL("../wesbite/group chimp.png", import.meta.url).href },
  { title: "IELTS Horizon", category: "Education", url: "https://ieltshorizon.com/", img: new URL("../wesbite/ielts.png", import.meta.url).href },
  { title: "InstaLeads", category: "Marketing", url: "#", img: new URL("../wesbite/instaleads.png", import.meta.url).href },
  { title: "KleanKlub CRM", category: "CRM", url: "#", img: new URL("../wesbite/KleanKlub crm.png", import.meta.url).href },
  { title: "Lishan Sarees", category: "E-Commerce", url: "https://lishansarees.com/", img: new URL("../wesbite/Lishan sarees.png", import.meta.url).href },
  { title: "Matrimony Platform", category: "Matrimony", url: "#", img: new URL("../wesbite/matrimony.png", import.meta.url).href },
  { title: "Medai The Stage", category: "Events", url: "https://medaithestage.com/", img: new URL("../wesbite/medai.png", import.meta.url).href },
  { title: "Mugai Technology", category: "Agency", url: "#", img: new URL("../wesbite/Mugai Technology.png", import.meta.url).href },
  { title: "News Portal", category: "Media", url: "#", img: new URL("../wesbite/news.png", import.meta.url).href },
  { title: "Porko Construction", category: "Construction", url: "#", img: new URL("../wesbite/Porko.png", import.meta.url).href },
  { title: "Tamil Oviyam", category: "Lifestyle", url: "#", img: new URL("../wesbite/tamil oviyam.png", import.meta.url).href },
];

const FEATURE_CARDS = [
  { title: "Branding Strategy", label: "Plan the story", img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&h=700&q=80" },
  { title: "Visual Identity", label: "Design systems", img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&h=700&q=80" },
  { title: "Creative Direction", label: "Execute with precision", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&h=700&q=80" },
  { title: "Art Direction", label: "Own the moment", img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&h=700&q=80" },
];

const BRAND_IMAGES = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=520&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=520&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=520&q=80",
];

function Works() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <main className="w-full bg-[#f0f0ee] text-black min-h-screen font-sans overflow-hidden">
      <Nav theme="dark" />

      <section className="w-full min-h-[85vh] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] bg-[#111] relative overflow-hidden">
        <div className="relative min-h-[60vw] md:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&h=900&q=85"
            alt="Portfolio hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.75) contrast(1.05)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 z-10">
            <div className="bg-black/70 backdrop-blur-md border border-white/15 rounded-[14px] p-4 max-w-[220px]">
              <p className="text-white/40 text-[9px] font-mono uppercase tracking-widest mb-1">Source of Bold Ideas</p>
              <p className="text-[#bfff00] font-black text-3xl leading-none tracking-tight">14+</p>
              <p className="text-white/40 text-[9px] mt-1">Projects Delivered</p>
            </div>
          </div>

          <div className="absolute bottom-6 left-[120px] z-10 bg-[#bfff00] rounded-full px-5 py-2 flex items-center gap-3">
            <span className="text-black font-black text-sm">85%</span>
            <span className="text-black/60 text-[10px] font-semibold">Client Retention</span>
          </div>
        </div>

        <div className="flex flex-col justify-between p-8 sm:p-12 md:p-14 relative z-10">
          <div className="flex justify-end">
            <span className="text-white/35 text-[10px] font-mono uppercase tracking-[0.2em]">Portfolio 2026</span>
          </div>
          <div>
            <h1 className="text-white font-black leading-[0.92] uppercase" style={{ fontSize: "clamp(36px,5.5vw,72px)", letterSpacing: "-1px" }}>
              CREATIVE<br />BRANDING<br />AGENCY
            </h1>
            <p className="text-white/40 text-xs leading-relaxed mt-5 max-w-[260px]">
              We create immersive brand systems and digital experiences for ambitious companies who want to be remembered.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {["Works","Services","About","Contact"].map((item, i) => (
                <span key={i} className="text-white/35 text-[10px] font-mono uppercase tracking-wider hover:text-white cursor-pointer transition-colors">{item}</span>
              ))}
            </div>
            <Link to="/contact" className="self-start inline-flex items-center gap-2 bg-[#3a8cd7] text-white text-xs font-black px-6 py-3 rounded-full transition-all decoration-none cursor-pointer hover:bg-[#2b7abf]" style={{ boxShadow: "0 4px 16px rgba(58,140,215,0.25)" }}>
              Start a Project <ArrowUpRight size={12} />
            </Link>
          </div>

          <div className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
            <ArrowUpRight size={14} className="text-white/50" />
          </div>
        </div>
      </section>


      <section className="w-full bg-white py-16 border-t border-black/6">
        <div className="text-center mb-10 px-6">
          <h2 className="font-black uppercase text-black" style={{ fontSize: "clamp(28px,4vw,64px)", letterSpacing: "-1.2px", lineHeight: "0.95" }}>
            EVERYTHING YOUR BRAND NEEDS TO GROW
          </h2>
          <p className="mx-auto mt-4 text-[11px] uppercase tracking-[0.32em] text-black/40" style={{ maxWidth: "34rem", letterSpacing: "0.18em", lineHeight: "1.8" }}>
            Reload offers strategic branding, visual identity, and creative direction built to cut through noise and deliver results. From storytelling to execution, we design systems that grow with your business.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          <div className="flex gap-6 px-6 sm:px-10 md:px-14 overflow-x-auto pb-6" style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
            {FEATURE_CARDS.map((card, idx) => (
              <article key={idx} className="snap-start min-w-[320px] sm:min-w-[360px] lg:min-w-[420px] rounded-[30px] overflow-hidden border border-black/10 bg-[#1b0706] shadow-[0_30px_80px_rgba(0,0,0,0.18)]" style={{ scrollSnapAlign: "start" }}>
                <div className="relative h-[420px] overflow-hidden bg-slate-900">
                  <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: "brightness(0.65) contrast(1.1)" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm">
                    {card.label}
                  </div>
                </div>
                <div className="p-6 pb-8">
                  <p className="text-white/50 text-[11px] uppercase tracking-[0.28em] mb-4">{card.label}</p>
                  <h3 className="text-white font-black text-3xl" style={{ lineHeight: "0.95" }}>{card.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative w-full bg-white text-black overflow-hidden border-t border-black/10">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-24">
          <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] items-start">
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#22c55e]/90">Featured Works</p>
              <div>
                <h2 className="font-black uppercase tracking-[-0.04em] text-black" style={{ fontSize: "clamp(3rem,5vw,5rem)", lineHeight: "0.92" }}>
                  WE TURN IDEAS INTO VISUAL<br />STATEMENTS
                </h2>
                <p className="mt-4 text-black/60 uppercase tracking-[0.28em] leading-[1.4] text-sm">
                  FROM VISION TO DELIVERY —<br />IMPACT THAT LASTS
                </p>
              </div>

              <p className="max-w-xl text-black/60 leading-7">
                Every website and platform shown here is crafted with a crisp black, white, and green palette — designed to feel premium, modern, and instantly memorable.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Branding",
                  "UI/UX",
                  "SaaS",
                  "E-Commerce",
                ].map((tag) => (
                  <span key={tag} className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-black/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <img
                  src={PROJECTS[0].img}
                  alt={PROJECTS[0].title}
                  className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute left-6 bottom-6 right-6 rounded-[24px] border border-white/20 bg-black/70 p-6 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">{PROJECTS[0].category}</p>
                  <h3 className="mt-3 text-2xl font-black text-white leading-tight">{PROJECTS[0].title}</h3>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#f2fdf6] shadow-[0_20px_60px_rgba(34,38,49,0.06)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_30%)]" />
                  <div className="relative flex min-h-[250px] flex-col justify-center p-8 text-center">
                    <span className="text-[10px] uppercase tracking-[0.32em] text-black/50">Explore the world’s</span>
                    <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-black">leading designers</h3>
                    <p className="mt-4 text-sm text-black/60">A premium showcase of clean digital work for ambitious brands.</p>
                    <span className="mt-6 inline-flex w-full justify-center rounded-full border border-[#d1fae5] bg-[#dcfce7] px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#166534] transition hover:bg-[#bbf7d0]">
                      Explore Now
                    </span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(34,38,49,0.06)]">
                  <img
                    src={PROJECTS[7].img}
                    alt={PROJECTS[7].title}
                    className="h-[250px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute left-6 bottom-6 right-6 rounded-[20px] border border-white/80 bg-black/70 p-4 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">{PROJECTS[7].category}</p>
                    <h4 className="mt-2 text-xl font-black text-white leading-tight">{PROJECTS[7].title}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {PROJECTS.map((proj, idx) => (
              <a
                key={idx}
                href={proj.url}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_40px_rgba(34,38,49,0.05)] transition hover:border-[#22c55e]/40 hover:shadow-[0_30px_80px_rgba(34,197,94,0.12)]"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4 rounded-full bg-white/90 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-black shadow-sm">
                    {proj.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-black">{proj.title}</h3>
                </div>
              </a>
            ))}
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
                  <div className="mt-1 h-12 bg-[#bfff00]/10 rounded-lg border border-white/5" />
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
                  <div className="w-8 h-8 rounded-full bg-[#bfff00] flex items-center justify-center text-black text-[10px] font-bold flex-shrink-0">MT</div>
                  <div>
                    <p className="text-black font-bold text-xs leading-tight">Mirastra Tech</p>
                    <p className="text-black/40 text-[9px]">MSME Registered</p>
                  </div>
                </div>
                <div className="flex text-[#bfff00]">
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
