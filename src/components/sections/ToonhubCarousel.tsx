'use client'
import React, { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const IMAGES = [
  { 
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png', 
    bg: '#F4845F', 
    panel: '#F79B7F',
    title: 'FocusFlow',
    subtitle: 'WORKFLOW PLATFORM',
    desc: 'Workflow management and automation platform built to streamline business operations and improve productivity. Technologies: React.js, Node.js, MongoDB.'
  },
  { 
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png', 
    bg: '#6BBF7A', 
    panel: '#85CC92',
    title: 'InstaLeads',
    subtitle: 'OUTREACH AUTOMATION',
    desc: 'Instagram lead generation and outreach automation platform designed to help businesses acquire quality leads organically and scale campaigns.'
  },
  { 
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png', 
    bg: '#E882B4', 
    panel: '#ED9DC4',
    title: 'AutoPost',
    subtitle: 'SOCIAL SCHEDULER',
    desc: 'Advanced social media scheduling and automation solution for multi-platform management. Autopost commentator and scheduled queues.'
  },
  { 
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png', 
    bg: '#6EB5FF', 
    panel: '#8DC4FF',
    title: 'Extensions',
    subtitle: 'AUTOMATION SUITE',
    desc: 'Collection of browser extensions developed for automation, lead generation, and workflow optimization. Custom browser extensions.'
  },
];

export default function ToonhubCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    IMAGES.forEach((img) => {
      const imageEl = new Image();
      imageEl.src = img.src;
    });

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (direction === 'next') {
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
  const backIndex = (activeIndex + 2) % 4;

  const getItemStyles = (index: number) => {
    if (index === centerIndex) {
      return {
        transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`,
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 20,
        left: '50%',
        height: isMobile ? '60%' : '92%',
        bottom: isMobile ? '22%' : 0,
      };
    }
    if (index === leftIndex) {
      return {
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? '20%' : '30%',
        height: isMobile ? '16%' : '28%',
        bottom: isMobile ? '32%' : '12%',
      };
    }
    if (index === rightIndex) {
      return {
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? '80%' : '70%',
        height: isMobile ? '16%' : '28%',
        bottom: isMobile ? '32%' : '12%',
      };
    }
    return {
      transform: 'translateX(-50%) scale(1)',
      filter: 'blur(4px)',
      opacity: 1,
      zIndex: 5,
      left: '50%',
      height: isMobile ? '13%' : '22%',
      bottom: isMobile ? '32%' : '12%',
    };
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="toonhub"
      className="relative w-full overflow-hidden transition-colors duration-[650ms]"
      style={{
        backgroundColor: IMAGES[activeIndex].bg,
        fontFamily: "'Inter', sans-serif",
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="relative w-full h-screen overflow-hidden">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 z-50 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23g)' opacity='0.08'/></svg>")`,
            backgroundSize: '200px 200px'
          }}
        />

        {/* Brand label "TOONHUB" */}
        <div className="absolute top-6 left-4 sm:left-8 z-50 select-none">
          <span className="text-xs font-semibold uppercase text-white opacity-90 tracking-[0.18em]">
            Mirastra Products
          </span>
        </div>

        {/* Giant ghost text "3D SHAPE" */}
        <div className="absolute inset-x-0 top-[18%] flex items-center justify-center pointer-events-none select-none z-10">
          <h2 className="font-grotesk text-white opacity-30 select-none uppercase tracking-[-0.02em] leading-none text-center" style={{ fontSize: 'clamp(90px, 28vw, 380px)', fontWeight: 900 }}>
            {IMAGES[activeIndex].title}
          </h2>
        </div>

        {/* Carousel images layer */}
        <div className="absolute inset-0 z-20">
          {IMAGES.map((img, index) => {
            const roleStyle = getItemStyles(index);
            return (
              <div
                key={img.src}
                className="absolute transition-all duration-[650ms]"
                style={{
                  ...roleStyle,
                  aspectRatio: '0.6 / 1',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'transform, filter, opacity, left, bottom, height'
                }}
              >
                <img
                  src={img.src}
                  alt={`Mirastra product ${img.title}`}
                  className="w-full h-full object-contain object-bottom select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom-left description + nav buttons */}
        <div className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24 z-40 max-w-[320px] flex flex-col items-start text-white">
          <p
            className="text-xs tracking-widest uppercase text-white/70 mb-1"
          >
            {IMAGES[activeIndex].subtitle}
          </p>
          <p
            className="font-bold uppercase tracking-widest mb-2 sm:mb-3 text-base sm:text-[22px] text-white opacity-95"
            style={{ letterSpacing: '0.02em' }}
          >
            {IMAGES[activeIndex].title}
          </p>
          <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-4 sm:mb-5 h-20 overflow-hidden">
            {IMAGES[activeIndex].desc}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('prev')}
              disabled={isAnimating}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/10 hover:scale-[1.08] transition-all duration-150 cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <ArrowLeft size={26} strokeWidth={2.25} />
            </button>
            <button
              onClick={() => navigate('next')}
              disabled={isAnimating}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/10 hover:scale-[1.08] transition-all duration-150 cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <ArrowRight size={26} strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* Bottom-right link "DISCOVER IT" */}
        <div className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-40">
          <button
            onClick={() => handleScrollTo('contact')}
            className="group flex items-center gap-2 font-grotesk text-white opacity-95 hover:opacity-100 hover:scale-[1.02] active:scale-95 transition-all duration-200 uppercase tracking-[-0.02em] leading-none cursor-pointer bg-transparent border-none"
            style={{ fontSize: 'clamp(20px, 4vw, 56px)' }}
          >
            Request Demo
            <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </div>
  )
}
