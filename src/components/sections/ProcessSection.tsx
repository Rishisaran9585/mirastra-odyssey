"use client";
import React from "react";
import ScrollReveal from "../reactbits/ScrollReveal";

interface Step {
  n: string;
  title: string;
  desc: string;
  side: "left" | "right";
}

const PROCESS_STEPS: Step[] = [
  {
    n: "01",
    title: "Define",
    desc: "We start by deeply understanding your goals, target audience, and business challenges. Every great product begins with clarity — who it's for, what problem it solves, and what success looks like.",
    side: "right",
  },
  {
    n: "02",
    title: "Design",
    desc: "Our designers craft intuitive, visually compelling interfaces tailored to your brand. We iterate with wireframes and prototypes until the experience feels exactly right before a single line of code is written.",
    side: "left",
  },
  {
    n: "03",
    title: "Build",
    desc: "Using modern, scalable technologies, we bring the design to life. Our engineers write clean, maintainable code with performance and security baked in from the ground up.",
    side: "right",
  },
  {
    n: "04",
    title: "Launch",
    desc: "We handle deployment, QA, and go-live with precision. Post-launch, we monitor, iterate, and support — ensuring your product performs reliably in the real world from day one.",
    side: "left",
  },
];

/** Sticky-note style card */
function StepCard({ step }: { step: Step }) {
  return (
    <div
      className="relative bg-white rounded-[20px] p-7 hover:scale-[1.02] transition-transform duration-300 cursor-default"
      style={{
        boxShadow:
          "3px 6px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(0,0,0,0.055)",
      }}
    >
      {/* Step number */}
      <span className="block text-xs font-semibold text-black/30 tracking-widest mb-3 font-mono">
        {step.n}
      </span>

      {/* Title */}
      <h3
        className="text-2xl sm:text-3xl font-bold text-black mb-4 leading-tight"
        style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.5px" }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-black/50 leading-relaxed font-light">{step.desc}</p>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <div
      id="process"
      className="relative w-full bg-[#f7f7f5] text-black py-24 md:py-36 border-t border-black/10 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Section header ── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <ScrollReveal y={20} delay={0} duration={0.7}>
          {/* Label pill */}
          <div className="inline-flex items-center border border-black/20 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-widest text-black/55 uppercase mb-8">
            How we work
          </div>
        </ScrollReveal>

        <ScrollReveal y={25} delay={0.08} duration={0.8}>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.6rem] font-bold leading-[1.05] text-black max-w-xl"
            style={{ letterSpacing: "-1.8px" }}
          >
            Let us show you how we drive your brand to new heights
          </h2>
        </ScrollReveal>

        <ScrollReveal y={10} delay={0.15} duration={0.6}>
          <div className="flex items-start gap-6 mt-6">
            <p className="text-sm text-black/50 leading-relaxed max-w-xs">
              A focused, four-stage process designed to take your idea from concept to a fully
              launched digital product — on time and built to scale.
            </p>
            {/* Squiggle arrow */}
            <svg
              className="w-16 h-10 mt-1 opacity-40 shrink-0"
              viewBox="0 0 80 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 8 C18 2, 22 20, 36 14 C50 8, 54 26, 68 20"
                stroke="black"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M62 14 L68 20 L60 24"
                stroke="black"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Zigzag steps ── */}
      <div className="relative max-w-4xl mx-auto px-6 sm:px-12 mt-20 md:mt-28">
        {/*
          Vertical dashed spine — desktop only.
          Uses a CSS background trick for a pure-CSS dashed line.
        */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-px top-10 bottom-10 w-px z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 6px, transparent 6px, transparent 13px)",
          }}
          aria-hidden="true"
        />

        {PROCESS_STEPS.map((step, idx) => {
          const isRight = step.side === "right";

          return (
            <div key={step.n} className="relative mb-16 md:mb-24">
              {/* Pin dot on the spine — desktop */}
              <div
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center"
                style={{ top: "36px" }}
                aria-hidden="true"
              >
                <div className="w-[18px] h-[18px] rounded-full bg-[#1a1a1a] shadow-lg flex items-center justify-center ring-4 ring-[#f7f7f5]">
                  <div className="w-[7px] h-[7px] rounded-full bg-white/70" />
                </div>
              </div>

              {/*
                Two-column grid: [card half] [spacer 60px] [empty half]
                For left-side cards we reverse via flex-row-reverse.
              */}
              <div
                className={`hidden md:flex items-start gap-0 ${isRight ? "" : "flex-row-reverse"}`}
              >
                {/* Card — takes up ~48% of width */}
                <div className="w-[calc(50%-40px)]">
                  <ScrollReveal
                    y={28}
                    x={isRight ? -16 : 16}
                    delay={0.06 + idx * 0.1}
                    duration={0.75}
                  >
                    {/* Horizontal dashed branch from spine to card */}
                    <div className="relative">
                      {/* The branch line */}
                      <div
                        className={`absolute top-[46px] ${isRight ? "right-0 left-auto" : "left-0 right-auto"} w-10 h-px z-10`}
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(to right, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 5px, transparent 5px, transparent 10px)",
                        }}
                        aria-hidden="true"
                      />
                      <StepCard step={step} />
                    </div>
                  </ScrollReveal>
                </div>

                {/* Centre gap */}
                <div className="w-20 shrink-0" />

                {/* Empty opposite half */}
                <div className="flex-1" />
              </div>

              {/* Mobile: full-width stacked cards with top pin */}
              <div className="md:hidden relative pt-4">
                {/* Mobile pin */}
                <div
                  className="absolute left-6 top-0 z-20 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-[18px] h-[18px] rounded-full bg-[#1a1a1a] shadow-lg flex items-center justify-center">
                    <div className="w-[7px] h-[7px] rounded-full bg-white/70" />
                  </div>
                </div>
                {/* Mobile connector line */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div
                    className="absolute left-[30px] top-[18px] bottom-[-64px] w-px z-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 5px, transparent 5px, transparent 11px)",
                    }}
                    aria-hidden="true"
                  />
                )}
                <ScrollReveal y={24} delay={0.05 + idx * 0.08} duration={0.7}>
                  <div className="ml-10">
                    <StepCard step={step} />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          );
        })}

        {/* "Ready to be delivered!" sign-off */}
        <ScrollReveal y={16} delay={0.1} duration={0.7}>
          <p
            className="text-right text-2xl sm:text-3xl text-black/60 font-light italic pr-2 mt-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            *Ready to be delivered!
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
