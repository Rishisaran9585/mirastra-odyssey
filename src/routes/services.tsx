import { createFileRoute } from "@tanstack/react-router";
import Nav from "../components/Nav";
import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Infinity as InfinityIcon,
  FastForward,
  Play,
  Award,
  Terminal,
  Code,
  Database,
  Cloud,
  ToggleRight,
  HelpCircle,
  ChevronDown,
  CheckSquare,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Mirastra Tech" },
      {
        name: "description",
        content:
          "Explore our technology solutions: website development, web apps, custom software, browser extensions, automation solutions, QA, and digital marketing.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const features = [
    {
      title: "Unlimited Requests",
      desc: "Submit as many custom software requests as needed. We prioritize and execute them systematically.",
      icon: <InfinityIcon size={18} />,
    },
    {
      title: "Launch Fast",
      desc: "Agile delivery cycles mean your websites and browser tools get launched in days, not months.",
      icon: <FastForward size={18} />,
    },
    {
      title: "Start Today",
      desc: "No long procurement bottlenecks. Jump right into scoping and coding your project immediately.",
      icon: <Play size={18} />,
    },
    {
      title: "Pause Or Cancel Anytime",
      desc: "Flexible subscription and package support matching your active operational budgets.",
      icon: <ToggleRight size={18} />,
    },
    {
      title: "Affordable Pricing",
      desc: "Customized quotes aligned with requirements. Premium tech made affordable.",
      icon: <Award size={18} />,
    },
  ];

  const packages = [
    {
      title: "Static Websites",
      price: "₹5,000+",
      desc: "Clean, fast-loading informational corporate websites with custom designs.",
    },
    {
      title: "Dynamic Websites",
      price: "₹7,000 - ₹10,000+",
      desc: "Interactive pages, custom database entries, blogs, and backend control portals.",
    },
    {
      title: "Animated Websites",
      price: "₹10,000+",
      desc: "Premium immersive visual animations, scroll-triggered designs, and micro-interactions.",
    },
  ];

  const marketingPackages = [
    {
      title: "Package 1",
      price: "₹25,000 / Month",
      features: ["Video Shoot", "Video Editing", "Social Media Handling", "Meta Ads Management"],
    },
    {
      title: "Package 2",
      price: "₹18,000 / Month",
      features: ["Video Editing", "Social Media Handling", "Meta Ads Management"],
    },
    {
      title: "Package 3",
      price: "₹15,000 / Month",
      features: ["Social Media Handling", "Meta Ads Management"],
    },
    { title: "Package 4", price: "₹7,000 / Month", features: ["Meta Ads Management Only"] },
  ];

  const faqs = [
    {
      q: "Why do static websites start at ₹5,000?",
      a: "Static sites are perfect for small businesses needing a clean digital presence. This package covers custom UI layout, contact form setup, domain mapping, hosting config, and WhatsApp buttons.",
    },
    {
      q: "How long does a custom web application take?",
      a: "Typically 3 to 6 weeks depending on scale. Basic admin portals or SaaS dashboards take around 2-3 weeks, while complex ERP solutions take 6+ weeks.",
    },
    {
      q: "Do you offer post-deployment support?",
      a: "Yes. All projects include 30 days of complimentary monitoring, backup checkups, and bug fixes. We also offer affordable monthly support retainers.",
    },
    {
      q: "Can we pause digital marketing packages?",
      a: "Absolutely. Marketing works on month-to-month contracts. You can pause or cancel at any month-end to match your active budget allocations.",
    },
  ];

  return (
    <main className="w-full bg-black text-white min-h-screen relative font-sans p-3 sm:p-5 md:p-6 overflow-hidden">
      {/* Navigation */}
      <Nav />

      {/* Outer Panel Container (Wen Launch Bezel) */}
      <div
        className="w-full min-h-[92vh] rounded-[24px] md:rounded-[40px] border border-white/10 relative overflow-hidden flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 md:px-20"
        style={{
          backgroundColor: "#0a0a0a",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

        {/* 1. HERO SECTION: Wen Launch Style */}
        <div className="flex-1 flex flex-col justify-center py-16 relative z-10">
          <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase font-mono mb-4">
            CREATIVE TECHNOLOGY STUDIO
          </p>

          <div className="flex justify-between items-start w-full">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif tracking-tight leading-[1.05] max-w-[800px] uppercase font-light">
              We Are <br />
              <span className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                Full-Service
              </span>{" "}
              <br />
              Agency
            </h1>
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-rose-500 hover:border-rose-500/40 hover:bg-rose-500/5 transition-all cursor-pointer flex-shrink-0">
              <ArrowUpRight size={24} />
            </div>
          </div>

          <p className="text-white/60 text-xs sm:text-sm font-mono mt-8 max-w-[420px] leading-relaxed">
            The first full-stack digital agency integrating advanced automation and modern
            programming to deliver best-in-class user experiences globally.
          </p>
        </div>

        {/* 2. FEATURES GRID (Wen Launch Grid Layout) */}
        <div className="w-full mt-12 border-t border-white/10 pt-12 z-20">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white/90 mb-8 font-mono">
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#0e0e0e] p-6 flex flex-col justify-between min-h-[200px] hover:bg-[#121212] transition-colors relative group"
              >
                <div className="absolute top-4 right-4 text-rose-500/30 group-hover:text-rose-500 transition-colors">
                  {feat.icon}
                </div>
                <div>
                  <span className="text-[10px] text-white/30 font-bold font-mono">0{idx + 1}</span>
                  <h4 className="text-white font-bold text-sm tracking-tight mt-4 font-mono group-hover:text-rose-500 transition-colors">
                    {feat.title}
                  </h4>
                </div>
                <p className="text-[11px] text-white/50 leading-relaxed mt-4">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. CORE SERVICES DETAILED SECTION */}
      <section className="w-full mt-20 px-4 sm:px-8 md:px-12 py-10 z-10 relative">
        <h2 className="text-3xl sm:text-4xl font-serif uppercase tracking-tight text-white mb-12">
          Core Services & Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="md:col-span-6 flex flex-col gap-8">
            {/* Website Development block */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-6 sm:p-8">
              <span className="text-[10px] bg-rose-500/10 border border-rose-500/30 text-rose-500 font-bold rounded px-2.5 py-1 uppercase tracking-wider font-mono">
                Website Development
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-4 font-mono">
                Pricing Packages
              </h3>

              <div className="flex flex-col gap-4 mt-6">
                {packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start border-b border-white/5 pb-3"
                  >
                    <div>
                      <h4 className="text-white font-bold text-sm">{pkg.title}</h4>
                      <p className="text-[11px] text-white/50 mt-1">{pkg.desc}</p>
                    </div>
                    <span className="text-rose-400 font-bold text-sm font-mono flex-shrink-0">
                      {pkg.price}
                    </span>
                  </div>
                ))}
              </div>

              <h4 className="text-xs font-bold text-white uppercase tracking-wider mt-8 mb-3 font-mono">
                Features Included:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Responsive Design",
                  "Mobile Friendly Layout",
                  "WhatsApp Integration",
                  "Contact Forms",
                  "SEO-Friendly Structure",
                  "Fast Loading Performance",
                  "Custom UI/UX Design",
                  "Secure Hosting Support",
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-white/70">
                    <Check size={12} className="text-rose-500" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Software Development */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-6 sm:p-8">
              <span className="text-[10px] bg-rose-500/10 border border-rose-500/30 text-rose-500 font-bold rounded px-2.5 py-1 uppercase tracking-wider font-mono">
                Custom Software Development
              </span>
              <p className="text-xs text-white/60 mt-4 leading-relaxed">
                Bespoke systems mapped to your administrative processes to automate workflows and
                minimize administrative errors.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  "CRM Systems",
                  "HRM Systems",
                  "ERP Solutions",
                  "Inventory Management",
                  "Billing Software",
                  "Lead Management Systems",
                  "Business Process Automation",
                  "Workflow Systems",
                ].map((sft, idx) => (
                  <div
                    key={idx}
                    className="border border-white/5 bg-black/45 rounded-lg p-3 text-xs text-white/80 font-mono hover:border-rose-500/20 transition-all"
                  >
                    {sft}
                  </div>
                ))}
              </div>
            </div>

            {/* QA Testing block */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-6 sm:p-8">
              <span className="text-[10px] bg-rose-500/10 border border-rose-500/30 text-rose-500 font-bold rounded px-2.5 py-1 uppercase tracking-wider font-mono">
                Quality Assurance & Testing
              </span>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  "Manual Testing",
                  "Automation Testing",
                  "Functional Testing",
                  "Regression Testing",
                  "Performance Testing",
                  "Quality Audits",
                ].map((qa, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                    <Check size={12} className="text-rose-500" />
                    <span>{qa}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-6 flex flex-col gap-8">
            {/* Web Application Development */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-6 sm:p-8">
              <span className="text-[10px] bg-rose-500/10 border border-rose-500/30 text-rose-500 font-bold rounded px-2.5 py-1 uppercase tracking-wider font-mono">
                Web Application Development
              </span>
              <p className="text-xs text-white/60 mt-4 leading-relaxed">
                Scalable and robust portals built with custom databases and analytical capabilities.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-6">
                {[
                  "SaaS Platforms",
                  "Admin Dashboards",
                  "Customer Portals",
                  "Booking Systems",
                  "Workflow Management",
                  "Business Management Platforms",
                  "Automation Portals",
                  "Analytics Dashboards",
                ].map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                    <Check size={12} className="text-rose-500" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Applications */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-6 sm:p-8">
              <span className="text-[10px] bg-rose-500/10 border border-rose-500/30 text-rose-500 font-bold rounded px-2.5 py-1 uppercase tracking-wider font-mono">
                Mobile Applications
              </span>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {[
                  "Android Applications",
                  "iOS Applications",
                  "Cross-Platform Apps",
                  "Enterprise Applications",
                  "Business Apps",
                  "Customer Service Apps",
                ].map((mob, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-white/80 font-mono bg-black p-2 border border-white/5 rounded block"
                  >
                    {mob}
                  </span>
                ))}
              </div>
            </div>

            {/* Browser Extensions & Automation */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-6 sm:p-8">
              <span className="text-[10px] bg-rose-500/10 border border-rose-500/30 text-rose-500 font-bold rounded px-2.5 py-1 uppercase tracking-wider font-mono">
                Extensions & Automation
              </span>
              <h4 className="text-white font-bold text-sm tracking-tight mt-4 font-mono">
                Browser Extensions
              </h4>
              <p className="text-xs text-white/50 mt-1 leading-relaxed">
                Chrome extensions, lead-gen scripts, productivity utilities.
              </p>

              <h4 className="text-white font-bold text-sm tracking-tight mt-6 font-mono">
                Automation Solutions
              </h4>
              <p className="text-xs text-white/50 mt-1 leading-relaxed">
                Lead pipelines, social automations, customer workflow scripts.
              </p>
            </div>

            {/* Digital Marketing block */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-6 sm:p-8">
              <span className="text-[10px] bg-rose-500/10 border border-rose-500/30 text-rose-500 font-bold rounded px-2.5 py-1 uppercase tracking-wider font-mono">
                Digital Marketing Services
              </span>

              <div className="flex flex-col gap-4 mt-6">
                {marketingPackages.map((mpkg, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-4 last:border-none">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-bold text-sm font-mono">{mpkg.title}</h4>
                      <span className="text-rose-400 font-bold text-sm font-mono">
                        {mpkg.price}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {mpkg.features.map((f, i) => (
                        <span
                          key={i}
                          className="text-[9px] bg-white/5 text-white/70 rounded-full px-2 py-0.5 border border-white/5"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CODE QUALITY & COMPARISON GRID */}
      <section className="w-full mt-16 md:mt-24 px-4 sm:px-8 md:px-12 py-12 border-t border-white/10 z-10 relative">
        <h2 className="text-3xl sm:text-4xl font-serif uppercase tracking-tight text-white mb-12">
          Custom Code vs. Template SaaS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Custom Code */}
          <div className="bg-[#0e0e0e] border border-[#rose-500]/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              Bespoke Code Architecture
            </h3>
            <p className="text-white/50 text-xs mt-3 leading-relaxed">
              We write custom algorithms uniquely tailored to your project. This guarantees absolute
              flexibility, lightweight execution, and seamless integration with your existing
              services.
            </p>
            <ul className="flex flex-col gap-2 mt-6">
              {[
                "100% custom database integrations",
                "Lightweight bundles (Vite + TypeScript)",
                "Full ownership of your source code repository",
                "Absolute freedom in styling (no templates limits)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-white/80">
                  <CheckSquare size={14} className="text-rose-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Template SaaS */}
          <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl p-6 sm:p-8 opacity-70">
            <h3 className="text-lg font-bold text-white/80 font-mono flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              Off-the-Shelf SaaS
            </h3>
            <p className="text-white/40 text-xs mt-3 leading-relaxed">
              Off-the-shelf software models often impose restrictions, heavy dependencies, and
              monthly recurring licensing costs that scale unfavorably as your database grows.
            </p>
            <ul className="flex flex-col gap-2 mt-6">
              {[
                "Locked vendor API ecosystems",
                "Heavy boilerplate codes affecting loading speeds",
                "No direct database access or manual control",
                "Unfavorable scaling cost parameters",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-white/50">
                  <CheckSquare size={14} className="text-zinc-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY EXPERTISE */}
      <section className="w-full mt-16 md:mt-24 px-4 sm:px-8 md:px-12 py-12 border-t border-white/10 z-10 relative">
        <h2 className="text-3xl sm:text-4xl font-serif uppercase tracking-tight text-white mb-12">
          Technology Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            {
              title: "Frontend",
              icon: <Code size={16} />,
              tags: [
                "React.js",
                "Next.js",
                "Angular",
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
              ],
            },
            {
              title: "Backend",
              icon: <Terminal size={16} />,
              tags: ["Node.js", "Express.js", "PHP", "REST APIs", "Custom APIs", "Auth Systems"],
            },
            {
              title: "Database",
              icon: <Database size={16} />,
              tags: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Real-Time DB"],
            },
            {
              title: "Cloud & Devops",
              icon: <Cloud size={16} />,
              tags: [
                "Cloud Deploy",
                "VPS Management",
                "DNS Configuration",
                "SSL Setup",
                "Optimization",
                "Security",
              ],
            },
            {
              title: "Automation",
              icon: <InfinityIcon size={16} />,
              tags: [
                "Chrome Extensions",
                "Browser Automation",
                "Lead Pipelines",
                "Workflow Scripts",
                "Process Automation",
              ],
            },
          ].map((stack, idx) => (
            <div key={idx} className="bg-[#0e0e0e] border border-white/10 rounded-xl p-5">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest font-mono flex items-center gap-2 pb-3 border-b border-white/5">
                <span className="text-rose-500">{stack.icon}</span>
                {stack.title}
              </h4>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {stack.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold bg-white/5 hover:bg-[#rose-500]/10 text-white/80 hover:text-white rounded-full px-3 py-1 border border-white/5 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ SECTION (Wen Launch Accordion Layout) */}
      <section className="w-full mt-16 md:mt-24 px-4 sm:px-8 md:px-12 py-12 border-t border-white/10 z-10 relative">
        <h2 className="text-3xl sm:text-4xl font-serif uppercase tracking-tight text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#0e0e0e] border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center text-white bg-transparent border-none outline-none cursor-pointer"
              >
                <span className="font-bold text-sm sm:text-base font-mono flex items-center gap-3">
                  <HelpCircle size={16} className="text-rose-500" />
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-white/60 transition-transform duration-300 ${activeFaq === idx ? "rotate-180 text-rose-500" : ""}`}
                />
              </button>

              {activeFaq === idx && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-white/60 leading-relaxed border-t border-white/5 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full mt-24 border-t border-white/10 pt-12 pb-8 px-6 sm:px-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-base font-bold tracking-wider uppercase text-white font-mono">
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
