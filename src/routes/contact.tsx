import { createFileRoute } from "@tanstack/react-router";
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
