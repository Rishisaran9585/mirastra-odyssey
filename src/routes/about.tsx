import { createFileRoute } from "@tanstack/react-router";
import Nav from "../components/Nav";
import React, { useState } from "react";
import {
  ArrowDown,
  Mail,
  Cpu,
  Globe,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Quote,
  Heart,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mirastra Tech" },
      {
        name: "description",
        content:
          "Learn about Mirastra Tech, our mission to help businesses grow with technology solutions, and our 7-stage development methodology.",
      },
    ],
  }),
  component: About,
});

function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Mirastra built a gorgeous digital catalog for our luxury saree collection that captures client bookings effortlessly. Our operational speed increased by 80%.",
      author: "Lishan Sarees Team",
      role: "E-Commerce Client",
    },
    {
      quote:
        "The student registration and scheduling portal simplified our student intake. Excellent communication and highly professional remote development.",
      author: "Dr. Sandeep Patel",
      role: "IELTS Horizon Academy",
    },
    {
      quote:
        "Outstanding design aesthetics and solid backend logic. Our stage workshop booking workflows run smoothly without a single glitch.",
      author: "Director of Medai Stage",
      role: "Media & Arts Client",
    },
  ];

  const industries = [
    "Education & E-Learning",
    "Healthcare & Wellness",
    "Legal & Associations",
    "Travel & Tourism",
    "Matrimony Platforms",
    "Media & Entertainment",
    "Retail & E-Commerce",
    "Consulting & Professional Services",
    "Startups & SaaS Products",
    "Small & Medium Businesses (SMEs)",
  ];

  const processSteps = [
    {
      title: "Discovery",
      desc: "Understanding customer goals, analyzing current systems, and mapping scope bottlenecks.",
    },
    {
      title: "Planning",
      desc: "Detailing technology choices (React, Node, databases), server hosting, and API schemas.",
    },
    {
      title: "Design",
      desc: "Wireframing custom UI/UX elements, styling glassmorphism shapes, and review checkpoints.",
    },
    {
      title: "Development",
      desc: "Writing clean, scalable code in TypeScript, configuring automations, and database schemas.",
    },
    {
      title: "Testing",
      desc: "Rigorous manual reviews, automated scripts execution, performance testing, and QA audits.",
    },
    {
      title: "Deployment",
      desc: "Configuring domain DNS parameters, VPS servers, SSL certification, and final staging setup.",
    },
    {
      title: "Support & Maintenance",
      desc: "Providing long-term technology support, backing up files, and monitoring code load times.",
    },
  ];

  return (
    <main className="w-full bg-black text-white min-h-screen relative font-sans p-3 sm:p-5 md:p-6 overflow-hidden">
      {/* Navigation */}
      <Nav />

      {/* Background Glowing Lights */}
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-purple-900/15 blur-[120px] pointer-events-none" />
      <div
        className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-magenta-900/10 blur-[150px] pointer-events-none"
        style={{ backgroundColor: "rgba(255, 0, 128, 0.05)" }}
      />

      {/* Outer Panel Container (Cosmic Bezel) */}
      <div
        className="w-full min-h-[92vh] rounded-[24px] md:rounded-[40px] border border-white/10 relative overflow-hidden flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 md:px-20"
        style={{
          background: "linear-gradient(to bottom, #090311 0%, #030107 100%)",
        }}
      >
        {/* Starfield overlay */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20px 30px, #fff, transparent), radial-gradient(1.5px 1.5px at 150px 100px, #fff, transparent), radial-gradient(1px 1px at 300px 360px, #fff, transparent), radial-gradient(1.5px 1.5px at 50px 240px, #fff, transparent), radial-gradient(1px 1px at 450px 80px, #fff, transparent)",
            backgroundSize: "500px 500px",
          }}
        />

        {/* Desktop guide lines */}
        <div className="absolute inset-0 hidden md:grid grid-cols-3 pointer-events-none z-0">
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="h-full" />
        </div>

        {/* 1. HERO SHIELD: Razc Aesthetic */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10 relative py-12">
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <span className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-2 font-mono">
              About Mirastra Tech
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none font-mono">
              MIRASTRA
            </h1>
            <p className="text-white/50 text-xs font-medium tracking-wide mt-4 uppercase max-w-[280px]">
              MSME Registered Technology solutions company establishing next-generation digital
              products.
            </p>

            <div className="flex gap-4 mt-8 text-white/50 text-xs font-mono">
              <span>F</span>
              <span>INSTAGRAM</span>
              <span>X</span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center relative">
            <div className="absolute z-20 top-[40%] flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-white/20 bg-black/60 flex items-center justify-center text-white/90 text-xs font-bold font-mono tracking-wider animate-pulse hover:scale-105 transition-transform cursor-pointer">
                EST. 2026
              </div>
            </div>

            <div className="relative w-full max-w-[320px] aspect-[4/5] overflow-hidden rounded-[20px] z-10 flex items-center justify-center">
              <img
                src="/assets/about_cosmic_hood.png"
                alt="Cosmic Identity"
                className="w-full h-full object-cover scale-105"
              />
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right">
            <span className="text-[#a855f7] text-xs font-mono tracking-widest uppercase mb-2 flex items-center gap-1.5 justify-end">
              <Cpu size={14} /> Mission Driven
            </span>
            <p className="text-white/70 text-sm leading-relaxed max-w-[300px] mt-2">
              We work with startups, organizations, and entrepreneurs to create scalable, efficient,
              and future-ready software.
            </p>

            <div className="mt-12 flex items-center gap-2 text-white/40 text-xs font-mono select-none">
              <ArrowDown size={14} className="animate-bounce" />
              <span>Scroll to Explore</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE DETAILS: Who We Are & Mission */}
      <section className="w-full mt-16 md:mt-24 px-4 sm:px-8 md:px-12 py-10 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 border-l-2 border-[#a855f7]/30 pl-6">
            <h3 className="text-white font-bold text-lg font-mono">Who We Are</h3>
            <p className="text-white/60 text-xs sm:text-sm mt-3 leading-relaxed">
              Established in May 2026, Mirastra Tech is an MSME-registered technology solutions
              company serving clients worldwide. Our mission is to simplify technology, automate
              operations, and help organizations achieve sustainable growth through bespoke digital
              solutions.
            </p>
          </div>

          <div className="md:col-span-4 border-l-2 border-fuchsia-500/30 pl-6">
            <h3 className="text-white font-bold text-lg font-mono">Our Mission</h3>
            <p className="text-white/60 text-xs sm:text-sm mt-3 leading-relaxed">
              To empower businesses with innovative technology solutions that improve operational
              efficiency, enhance customer engagement, and accelerate sustainable growth in a
              rapidly changing digital world.
            </p>
          </div>

          <div className="md:col-span-4 border-l-2 border-sky-400/30 pl-6">
            <h3 className="text-white font-bold text-lg font-mono">Our Vision</h3>
            <p className="text-white/60 text-xs sm:text-sm mt-3 leading-relaxed">
              To become a trusted global technology partner known for delivering highly impactful,
              custom digital solutions that help businesses thrive and lead in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING ETHOS SECTION */}
      <section className="w-full mt-16 md:mt-24 px-4 sm:px-8 md:px-12 py-10 border-t border-white/10 z-10 relative">
        <span className="text-[#a855f7] text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-4 block">
          Corporate Principles
        </span>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-white font-mono leading-tight">
              Our Technology Ethos
            </h2>
            <p className="text-white/50 text-xs mt-4 leading-relaxed max-w-sm">
              We focus on building future-ready custom products using state-of-the-art programming
              architectures. We believe in transparency and absolute scalability.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Bespoke Custom Engineering",
                desc: "We write clean, lightweight code. No restrictive boxed layout models. All logic is engineered around your workflow.",
              },
              {
                title: "Automation First",
                desc: "If a workflow is repetitive, it should be automated. We write scripts to save administrative hours.",
              },
              {
                title: "MSME-Registered Reliability",
                desc: "A certified technology solutions firm serving corporate clients, agencies, and global entrepreneurs.",
              },
              {
                title: "Worldwide Remote Architecture",
                desc: "Operating fully remotely, giving us access to global talent and facilitating worldwide service delivery.",
              },
            ].map((eth, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-[#a855f7]/25 transition-all"
              >
                <h4 className="text-white font-bold text-sm tracking-tight font-mono">
                  {eth.title}
                </h4>
                <p className="text-white/55 text-xs mt-2 leading-relaxed">{eth.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS TIMELINE */}
      <section className="w-full mt-16 md:mt-24 px-4 sm:px-8 md:px-12 py-12 border-t border-white/10 z-10 relative">
        <span className="text-[#a855f7] text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-4 block">
          Operational Flow
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
          Development Process
        </h2>

        <div className="mt-12 flex flex-col gap-6 md:grid md:grid-cols-7 relative">
          <div className="hidden md:block absolute left-4 right-4 top-[18px] h-0.5 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-sky-400 opacity-20 pointer-events-none z-0" />

          {processSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex md:flex-col items-start gap-4 md:gap-0">
              <div className="w-9 h-9 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-xs font-bold font-mono text-[#a855f7] hover:border-[#a855f7] hover:bg-[#a855f7]/20 transition-all flex-shrink-0">
                0{idx + 1}
              </div>
              <div className="mt-0 md:mt-4">
                <h4 className="text-white font-bold text-sm font-mono">{step.title}</h4>
                <p className="text-white/50 text-[11px] leading-relaxed mt-2 max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="w-full mt-16 md:mt-24 px-4 sm:px-8 md:px-12 py-10 border-t border-white/10 z-10 relative">
        <span className="text-[#a855f7] text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-4 block">
          Domain Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-10">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 hover:border-[#a855f7]/30 hover:bg-[#a855f7]/5 rounded-xl p-4 flex flex-col justify-between min-h-[100px] transition-all cursor-pointer group"
            >
              <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white/70 group-hover:bg-[#a855f7]/20 group-hover:text-white transition-colors">
                <Globe size={12} />
              </div>
              <h4 className="text-white font-bold text-xs mt-3 leading-snug tracking-tight font-mono">
                {ind}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER SECTION (Cosmic Glow Quote) */}
      <section className="w-full mt-16 md:mt-24 px-4 sm:px-8 md:px-12 py-12 border-t border-white/10 z-10 relative">
        <span className="text-[#a855f7] text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-4 block text-center">
          Feedback
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono text-center mb-12">
          Client Testimonials
        </h2>

        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Nebula icon glow */}
          <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-fuchsia-500/10 blur-xl pointer-events-none" />

          <div className="flex flex-col items-center text-center animate-fade-in relative z-10">
            <Quote size={32} className="text-[#a855f7]/40 mb-6" />
            <p className="text-white/80 text-sm sm:text-base leading-relaxed italic max-w-2xl">
              "{testimonials[activeTestimonial].quote}"
            </p>
            <h4 className="text-white font-bold text-sm tracking-tight font-mono mt-6">
              {testimonials[activeTestimonial].author}
            </h4>
            <span className="text-white/50 text-[10px] uppercase font-mono tracking-wider mt-1">
              {testimonials[activeTestimonial].role}
            </span>

            {/* Slider Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx ? "bg-[#a855f7] w-6" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
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
