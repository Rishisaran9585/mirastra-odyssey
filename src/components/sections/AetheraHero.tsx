'use client'
import React, { useEffect, useRef, useState } from 'react'

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

const PROCESS_STEPS = [
  { n: '01', title: 'Discovery', desc: 'Understanding goals, target audience, challenges, and requirements.' },
  { n: '02', title: 'Planning', desc: 'Defining scope, features, timelines, and architecture strategy.' },
  { n: '03', title: 'Design', desc: 'Creating intuitive, user-friendly, and visually appealing interfaces.' },
  { n: '04', title: 'Development', desc: 'Building scalable, secure solutions using modern technologies.' },
  { n: '05', title: 'Testing', desc: 'Performing comprehensive QA to ensure reliability and performance.' },
  { n: '06', title: 'Deployment', desc: 'Launching and configuring solutions in the production environment.' },
  { n: '07', title: 'Support', desc: 'Providing continuous updates, improvements, and technical support.' },
];

export default function AetheraHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const monitorVideo = () => {
      if (video && video.duration) {
        const cur = video.currentTime;
        const dur = video.duration;
        const fadeDuration = 0.5;

        if (cur < fadeDuration) {
          const progress = cur / fadeDuration;
          setOpacity(Math.min(1, Math.max(0, progress)));
        } else if (dur - cur < fadeDuration) {
          const progress = (dur - cur) / fadeDuration;
          setOpacity(Math.min(1, Math.max(0, progress)));
        } else {
          setOpacity(1);
        }
      }
      rafId = requestAnimationFrame(monitorVideo);
    };

    rafId = requestAnimationFrame(monitorVideo);

    const handleEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch((err) => console.log("Video playback error", err));
        }
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    video.play().catch((err) => console.log("Autoplay blocked or interrupted", err));

    return () => {
      cancelAnimationFrame(rafId);
      if (video) {
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="aethera" className="relative min-h-screen w-full overflow-hidden bg-white text-[#000000]" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Background Video Layer */}
      <div 
        className="absolute z-0 w-full overflow-hidden transition-opacity duration-300 pointer-events-none select-none"
        style={{ 
          top: '300px', 
          inset: '300px 0 0 0', 
          opacity: opacity,
          willChange: 'opacity'
        }}
      >
        <video
          ref={videoRef}
          src={VIDEO_URL}
          muted
          playsInline
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute z-10 w-full pointer-events-none"
        style={{
          top: '300px',
          inset: '300px 0 0 0'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <span 
            onClick={() => handleScrollTo('hero')}
            className="text-3xl tracking-tight font-instrument text-[#000000] select-none cursor-pointer"
          >
            Mirastra Tech<sup>®</sup>
          </span>

          <div className="hidden sm:flex items-center gap-8">
            <button onClick={() => handleScrollTo('hero')} className="text-sm font-medium text-[#000000] hover:text-black cursor-pointer bg-transparent border-none">Home</button>
            {[
              { label: 'Products', id: 'toonhub' },
              { label: 'Process', id: 'aethera' },
              { label: 'Services', id: 'orbis-services' },
              { label: 'Portfolio', id: 'orbis-portfolio' }
            ].map((item) => (
              <button 
                key={item.label} 
                onClick={() => handleScrollTo(item.id)} 
                className="text-sm font-medium text-[#6F6F6F] hover:text-black cursor-pointer bg-transparent border-none"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div>
            <button 
              onClick={() => handleScrollTo('contact')}
              className="bg-[#000000] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:scale-[1.03] transition-transform duration-200 cursor-pointer active:scale-95 shadow-sm"
            >
              Start Project
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content Section */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
      >
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal leading-[0.95] text-[#000000] font-instrument animate-fade-rise"
          style={{ letterSpacing: '-2.46px' }}
        >
          Beyond <span className="italic text-[#6F6F6F]">limits,</span> we simplify <span className="italic text-[#6F6F6F]">the complex.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#6F6F6F] max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
          To empower businesses with innovative technology solutions that improve efficiency, enhance customer engagement, and accelerate growth. Reaching worldwide, serving with precision.
        </p>

        <div>
          <button 
            onClick={() => handleScrollTo('orbis-services')}
            className="bg-[#000000] text-[#FFFFFF] font-medium text-base rounded-full px-14 py-5 mt-12 hover:scale-[1.03] transition-transform duration-200 cursor-pointer active:scale-95 animate-fade-rise-delay-2 shadow-lg hover:shadow-black/10"
          >
            Explore Services
          </button>
        </div>

        {/* 7-Step Development Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-6 max-w-7xl mx-auto mt-32 text-left border-t border-black/10 pt-16 z-20">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="space-y-3">
              <span className="text-[10px] tracking-widest text-[#6F6F6F] font-bold block">{step.n} // PROCESS</span>
              <h4 className="font-instrument text-2xl font-normal text-[#000000]">{step.title}</h4>
              <p className="text-[11px] text-[#6F6F6F] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
