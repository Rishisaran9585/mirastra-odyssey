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

      <footer className="w-full bg-black relative overflow-hidden border-t border-white/5">
        <div className="relative w-full overflow-hidden select-none" style={{ lineHeight: 0.85 }}>
          <h2 className="font-black text-center w-full px-4" style={{ fontSize: "clamp(72px, 18vw, 260px)", letterSpacing: "-0.03em", paddingBottom: "0.05em", background: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.02) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Mirastra
          </h2>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 border-t border-white/6 px-8 sm:px-12 md:px-16 py-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <img src="/mirastra_wlogo.png" alt="Mirastra Tech" className="h-8 w-auto object-contain" />
            <div className="flex items-center gap-6">
              {["Works","Services","About","Contact"].map((item, i) => (
                <Link key={i} to={`/${item.toLowerCase()}`} className="text-white/30 text-xs hover:text-white transition-colors decoration-none">{item}</Link>
              ))}
            </div>
            <p className="text-white/20 text-[10px] font-mono">© 2026 Mirastra Tech — MSME Registered</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
