import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "../components/Nav";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  Globe,
  Send,
  CheckCircle2,
  User,
  Landmark,
  HelpCircle,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Mirastra Tech" },
      {
        name: "description",
        content:
          "Get in touch with Mirastra Tech. Submit a request for web development, software apps, browser extensions, or automations.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Website",
    budget: "₹10,000 - ₹25,000",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }
    setStatus("sending");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        projectType: "Website",
        budget: "₹10,000 - ₹25,000",
        message: "",
      });
    }, 1800);
  };

  return (
    <main className="w-full bg-black text-white min-h-screen relative font-sans p-3 sm:p-5 md:p-6 overflow-hidden">
      {/* Navigation */}
      <Nav />

      {/* Background Glowing Lights */}
      <div className="absolute top-[30%] right-[20%] w-[350px] h-[350px] rounded-full bg-sky-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      {/* Outer Panel Container (Contact Panel) */}
      <div className="w-full min-h-[92vh] rounded-[24px] md:rounded-[40px] border border-white/10 relative overflow-hidden flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 md:px-20 bg-[#060608]">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative py-10">
          {/* Left Column: Info Cards & Title */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] font-mono mb-3">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-none uppercase font-light">
              Connect With <br />
              <span className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30">
                Mirastra
              </span>
            </h1>
            <p className="text-white/60 text-xs sm:text-sm font-mono mt-6 leading-relaxed max-w-sm">
              We serve clients worldwide, building high-performance websites, browser extensions,
              and workflow automations. Drop us a line to discuss your requirements.
            </p>

            {/* Interactive Contact Info Cards */}
            <div className="w-full flex flex-col gap-4 mt-8 max-w-sm">
              {/* Card 1: Email */}
              <a
                href="mailto:mirastratech@gmail.com"
                className="bg-white/5 border border-white/10 hover:border-sky-500/30 hover:bg-sky-500/5 rounded-2xl p-4 flex items-center gap-4 transition-all group decoration-none text-white cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] text-white/40 uppercase font-mono tracking-wider">
                    Email Us
                  </h4>
                  <p className="text-xs sm:text-sm font-bold mt-0.5 font-mono">
                    mirastratech@gmail.com
                  </p>
                </div>
              </a>

              {/* Card 2: Phone */}
              <a
                href="tel:+919047432540"
                className="bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 rounded-2xl p-4 flex items-center gap-4 transition-all group decoration-none text-white cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] text-white/40 uppercase font-mono tracking-wider">
                    Call Us
                  </h4>
                  <p className="text-xs sm:text-sm font-bold mt-0.5 font-mono">+91 90474 32540</p>
                </div>
              </a>

              {/* Card 3: Worldwide */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Globe size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] text-white/40 uppercase font-mono tracking-wider">
                    Coverage
                  </h4>
                  <p className="text-xs sm:text-sm font-bold mt-0.5 font-mono">
                    Serving Clients Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphism Contact Form & Globe Animation */}
          <div className="lg:col-span-7 relative">
            {/* Background Network Graphic Overlay */}
            <div className="absolute -right-20 -top-20 opacity-[0.03] pointer-events-none select-none z-0">
              <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="40" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="20" strokeWidth="0.5" strokeDasharray="1 1" />
                <line x1="50" y1="10" x2="50" y2="90" strokeWidth="0.5" />
                <line x1="10" y1="50" x2="90" y2="50" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Form Container */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 relative z-10 shadow-2xl">
              {status === "success" ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-mono text-white">
                    Message Sent!
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mt-3 max-w-[280px] leading-relaxed">
                    Thank you for reaching out. We will review your project scope and get back to
                    you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 bg-white text-black text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-white/90 cursor-pointer border-none outline-none"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Title */}
                  <div className="border-b border-white/5 pb-4 mb-2 flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
                      <User size={14} className="text-sky-400" /> Let's Start A Project
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">* Required fields</span>
                  </div>

                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-white/50 uppercase font-mono tracking-widest">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Liam Parker"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:border-sky-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-white/50 uppercase font-mono tracking-widest">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. liam@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:border-sky-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-white/50 uppercase font-mono tracking-widest">
                        Project Type
                      </label>
                      <select
                        value={formState.projectType}
                        onChange={(e) =>
                          setFormState({ ...formState, projectType: e.target.value })
                        }
                        className="bg-[#0e0e11] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:border-sky-500 focus:outline-none transition-colors"
                      >
                        <option value="Website">Website Development</option>
                        <option value="Web App">Web Application</option>
                        <option value="Mobile App">Mobile Application</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Browser Extension">Browser Extension</option>
                        <option value="Automation">Automation Script</option>
                        <option value="Marketing">Digital Marketing</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-white/50 uppercase font-mono tracking-widest">
                        Budget Target
                      </label>
                      <select
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="bg-[#0e0e11] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:border-sky-500 focus:outline-none transition-colors"
                      >
                        <option value="Under ₹10,000">Under ₹10,000</option>
                        <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                        <option value="₹1,00,000+">₹1,00,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-white/50 uppercase font-mono tracking-widest">
                      Project Requirements *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what you want to build and the business goals you want to achieve..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:border-sky-500 focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="text-xs text-rose-400 font-mono mt-1">
                      * Please fill out all required fields (*).
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-white hover:bg-white/90 disabled:opacity-50 text-black text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-xl flex items-center justify-center gap-2 mt-2 transition-all cursor-pointer border-none outline-none font-mono"
                  >
                    <span>{status === "sending" ? "Sending Request..." : "Send Message"}</span>
                    <Send size={12} className={status === "sending" ? "animate-pulse" : ""} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

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
