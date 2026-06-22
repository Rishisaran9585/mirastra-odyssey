"use client";
import React from "react";
import CTAButton from "../CTAButton";
import ScrollReveal from "../reactbits/ScrollReveal";
import CountUp from "../reactbits/CountUp";

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Discovery",
    desc: "Understanding goals, target audience, challenges, and requirements.",
  },
  {
    n: "02",
    title: "Planning",
    desc: "Defining scope, features, timelines, and architecture strategy.",
  },
  {
    n: "03",
    title: "Design",
    desc: "Creating intuitive, user-friendly, and visually appealing interfaces.",
  },
  {
    n: "04",
    title: "Development",
    desc: "Building scalable, secure solutions using modern technologies.",
  },
  {
    n: "05",
    title: "Testing",
    desc: "Performing comprehensive QA to ensure reliability and performance.",
  },
  {
    n: "06",
    title: "Deployment",
    desc: "Launching and configuring solutions in the production environment.",
  },
  {
    n: "07",
    title: "Support",
    desc: "Providing continuous updates, improvements, and technical support.",
  },
];

export default function ProcessSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="process"
      className="relative min-h-screen w-full bg-white text-black py-32 border-t border-black/10 flex flex-col justify-center animate-fade-in"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        {/* Title */}
        <ScrollReveal y={30} delay={0.05} duration={0.8}>
          <h1
            className="text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal leading-[0.95] text-black font-instrument"
            style={{ letterSpacing: "-2.46px" }}
          >
            Beyond <span className="italic text-black/60 font-playfair">limits,</span> we simplify{" "}
            <span className="italic text-black/60 font-playfair">the complex.</span>
          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal y={30} delay={0.15} duration={0.8}>
          <p className="text-base sm:text-lg text-black/75 max-w-2xl mt-8 leading-relaxed font-light">
            At Mirastra Tech, we follow a structured development methodology to empower businesses
            with innovative technology solutions that improve efficiency, enhance customer
            engagement, and accelerate growth. Reaching worldwide, serving with precision.
          </p>
        </ScrollReveal>

        {/* Call to action */}
        <ScrollReveal y={20} delay={0.25} duration={0.8} className="mt-12">
          <CTAButton theme="white" onClick={() => handleScrollTo("contact")}>
            Start Project
          </CTAButton>
        </ScrollReveal>

        {/* Statistics Counters */}
        <ScrollReveal
          y={40}
          delay={0.3}
          duration={0.9}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20 w-full text-center border-t border-black/10 pt-12"
        >
          <div className="space-y-1">
            <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-black block">
              <CountUp to={14} duration={1500} suffix="+" />
            </span>
            <p className="text-[10px] uppercase tracking-widest text-black/55 font-bold">
              // Clients Launched
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-black block">
              <CountUp to={7} duration={1200} />
            </span>
            <p className="text-[10px] uppercase tracking-widest text-black/55 font-bold">
              // Development Stages
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-black block">
              <CountUp to={100} duration={1800} suffix="%" />
            </span>
            <p className="text-[10px] uppercase tracking-widest text-black/55 font-bold">
              // Remote Accuracy
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-black block">
              <CountUp to={2026} duration={1500} separator="" />
            </span>
            <p className="text-[10px] uppercase tracking-widest text-black/55 font-bold">
              // Established May
            </p>
          </div>
        </ScrollReveal>

        {/* 7-Step Development Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-8 max-w-7xl mx-auto mt-24 text-left border-t border-black/10 pt-16 w-full">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal
              key={idx}
              y={25}
              delay={0.05 * idx}
              duration={0.6}
              className="space-y-3 group hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[10px] tracking-widest text-black/55 font-bold block">
                // {step.n} STAGE
              </span>
              <h4 className="font-instrument text-2xl font-normal text-black">{step.title}</h4>
              <p className="text-[11px] text-black/75 leading-relaxed font-light">{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
