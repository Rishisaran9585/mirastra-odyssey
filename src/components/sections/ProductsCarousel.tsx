"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CTAButton from "../CTAButton";
import TiltedCard from "../reactbits/TiltedCard";

const PROJECTS = [
  {
    bg: "#000000",
    text: "text-white",
    mutedText: "text-white/60",
    border: "border-white/20",
    title: "FocusFlow",
    subtitle: "SaaS SOLUTIONS",
    initials: "FF",
    tech: "React.js // Node.js // MongoDB",
    desc: "Workflow management and automation platform built to streamline business operations, automate communications, and improve general productivity.",
  },
  {
    bg: "#FFFFFF",
    text: "text-black",
    mutedText: "text-black/60",
    border: "border-black/20",
    title: "Mugai Tech",
    subtitle: "CLIENT PORTFOLIO",
    initials: "MT",
    tech: "HTML5 // CSS3 // JavaScript",
    desc: "A premium corporate web platform designed to establish a sleek digital footprint and display technology solutions to clients.",
  },
  {
    bg: "#000000",
    text: "text-white",
    mutedText: "text-white/60",
    border: "border-white/20",
    title: "S.S. Matrimony",
    subtitle: "CLIENT PORTFOLIO",
    initials: "SM",
    tech: "React.js // Node.js // MongoDB",
    desc: "Custom matchmaking portal featuring advanced user registration flows, matching query logic, and subscription management.",
  },
  {
    bg: "#FFFFFF",
    text: "text-black",
    mutedText: "text-black/60",
    border: "border-black/20",
    title: "Lishan Sarees",
    subtitle: "E-COMMERCE PLATFORM",
    initials: "LS",
    tech: "Custom UI // Web Dev // E-Commerce",
    desc: "Modern online store interface designed to showcase luxury sarees and capture client bookings with absolute speed.",
  },
];

export default function ProductsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navigate = (direction: "next" | "prev") => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (direction === "next") {
      setActiveIndex((prev) => (prev + 1) % 4);
    } else {
      setActiveIndex((prev) => (prev + 3) % 4);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  };

  const centerIndex = activeIndex;
  const leftIndex = (activeIndex + 3) % 4;
  const rightIndex = (activeIndex + 1) % 4;

  const getItemStyles = (index: number) => {
    if (index === centerIndex) {
      return {
        transform: `translateX(-50%) scale(${isMobile ? 1.15 : 1.45})`,
        filter: "blur(0px)",
        opacity: 1,
        zIndex: 20,
        left: "50%",
        height: isMobile ? "50%" : "75%",
        bottom: isMobile ? "26%" : "8%",
      };
    }
    if (index === leftIndex) {
      return {
        transform: "translateX(-50%) scale(1)",
        filter: "blur(2px)",
        opacity: 0.5,
        zIndex: 10,
        left: isMobile ? "15%" : "25%",
        height: isMobile ? "16%" : "28%",
        bottom: isMobile ? "34%" : "16%",
      };
    }
    if (index === rightIndex) {
      return {
        transform: "translateX(-50%) scale(1)",
        filter: "blur(2px)",
        opacity: 0.5,
        zIndex: 10,
        left: isMobile ? "85%" : "75%",
        height: isMobile ? "16%" : "28%",
        bottom: isMobile ? "34%" : "16%",
      };
    }
    return {
      transform: "translateX(-50%) scale(1)",
      filter: "blur(4px)",
      opacity: 0.25,
      zIndex: 5,
      left: "50%",
      height: isMobile ? "13%" : "22%",
      bottom: isMobile ? "34%" : "16%",
    };
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const current = PROJECTS[activeIndex];
  const isDark = current.bg === "#000000";

  return (
    <div
      id="toonhub"
      className="relative w-full overflow-hidden transition-colors duration-[650ms]"
      style={{
        backgroundColor: current.bg,
        fontFamily: "'Inter', sans-serif",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="relative w-full h-screen overflow-hidden">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 z-50 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23g)' opacity='0.08'/></svg>")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Brand label */}
        <div className="absolute top-6 left-4 sm:left-8 z-50 select-none">
          <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${current.text}`}>
            Featured Showcases
          </span>
        </div>

        {/* Giant ghost text */}
        <div className="absolute inset-x-0 top-[18%] flex items-center justify-center pointer-events-none select-none z-10">
          <h2
            className={`font-instrument select-none uppercase tracking-[-0.02em] leading-none text-center opacity-[0.04]`}
            style={{ fontSize: "clamp(90px, 25vw, 300px)", fontWeight: 900 }}
          >
            {current.title}
          </h2>
        </div>

        {/* Carousel slide items layer */}
        <div className="absolute inset-0 z-20">
          {PROJECTS.map((proj, index) => {
            const roleStyle = getItemStyles(index);
            const slideIsDark = proj.bg === "#000000";
            return (
              <div
                key={proj.title}
                className="absolute transition-all duration-[650ms] px-4"
                style={{
                  ...roleStyle,
                  aspectRatio: "0.6 / 1",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "transform, filter, opacity, left, bottom, height",
                }}
              >
                {/* Modern Solid-Color Placeholder Card with TiltedCard on Active Slide */}
                <TiltedCard
                  maxTilt={index === activeIndex ? 12 : 0}
                  scale={index === activeIndex ? 1.05 : 1}
                  glare={index === activeIndex}
                  glareOpacity={index === activeIndex ? 0.15 : 0}
                  className="w-full h-full"
                >
                  <div
                    className={`w-full h-full rounded-[24px] border flex flex-col items-center justify-center p-6 text-center select-none shadow-2xl relative overflow-hidden ${
                      slideIsDark
                        ? "bg-black/80 border-white/20 text-white"
                        : "bg-white/80 border-black/20 text-black"
                    }`}
                  >
                    <div className="absolute inset-x-0 top-6 text-[10px] tracking-[0.25em] opacity-40 select-none">
                      PROJECT // 0{index + 1}
                    </div>

                    {/* Initials */}
                    <div className="font-playfair italic text-6xl sm:text-7xl md:text-8xl select-none leading-none">
                      {proj.initials}
                    </div>

                    {/* Tech stack */}
                    <div className="absolute inset-x-0 bottom-6 text-[9px] tracking-widest opacity-60 uppercase truncate px-4 font-mono select-none">
                      {proj.tech}
                    </div>
                  </div>
                </TiltedCard>
              </div>
            );
          })}
        </div>

        {/* Bottom-left description + nav buttons */}
        <div className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24 z-40 max-w-[320px] flex flex-col items-start">
          <p className={`text-xs tracking-widest uppercase mb-1 opacity-70 ${current.text}`}>
            {current.subtitle}
          </p>
          <p
            className={`font-bold uppercase tracking-widest mb-2 sm:mb-3 text-base sm:text-[22px] ${current.text}`}
          >
            {current.title}
          </p>
          <p
            className={`text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 h-20 overflow-hidden opacity-90 ${current.text}`}
          >
            {current.desc}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("prev")}
              disabled={isAnimating}
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center hover:scale-[1.08] transition-all duration-150 cursor-pointer active:scale-95 disabled:opacity-50 ${
                isDark
                  ? "border-white text-white hover:bg-white/10"
                  : "border-black text-black hover:bg-black/10"
              }`}
            >
              <ArrowLeft size={24} strokeWidth={2} />
            </button>
            <button
              onClick={() => navigate("next")}
              disabled={isAnimating}
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center hover:scale-[1.08] transition-all duration-150 cursor-pointer active:scale-95 disabled:opacity-50 ${
                isDark
                  ? "border-white text-white hover:bg-white/10"
                  : "border-black text-black hover:bg-black/10"
              }`}
            >
              <ArrowRight size={24} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Bottom-right link using standard CTAButton */}
        <div className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-40">
          <CTAButton theme={isDark ? "black" : "white"} onClick={() => handleScrollTo("contact")}>
            Start Project
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
