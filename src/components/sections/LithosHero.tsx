'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";
const SPOTLIGHT_R = 260;

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
}

function RevealLayer({ image, cursorX, cursorY }: RevealLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [maskData, setMaskData] = useState<string>('');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Draw masking radial gradient at cursor coordinates
    const grad = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, SPOTLIGHT_R);
    grad.addColorStop(0, 'rgba(255,255,255,1.0)');
    grad.addColorStop(0.4, 'rgba(255,255,255,1.0)');
    grad.addColorStop(0.6, 'rgba(255,255,255,0.75)');
    grad.addColorStop(0.75, 'rgba(255,255,255,0.4)');
    grad.addColorStop(0.88, 'rgba(255,255,255,0.12)');
    grad.addColorStop(1.0, 'rgba(255,255,255,0.0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();

    try {
      const dataUrl = canvas.toDataURL();
      setMaskData(dataUrl);
    } catch (e) {
      console.error("Failed to generate mask data URL", e);
    }
  }, [cursorX, cursorY, dimensions]);

  const maskStyle: React.CSSProperties = maskData ? {
    maskImage: `url(${maskData})`,
    WebkitMaskImage: `url(${maskData})`,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%'
  } : {
    opacity: 0
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: 'none' }}
      />
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage: `url(${image})`,
          ...maskStyle
        }}
      />
    </>
  );
}

export default function LithosHero() {
  const mouseRef = useRef({ x: -999, y: -999 });
  const smoothRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (smoothRef.current.x === -999) {
        smoothRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateSpotlight = () => {
      if (smoothRef.current.x !== -999) {
        smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.1;
        smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.1;
        setCursorPos({ x: smoothRef.current.x, y: smoothRef.current.y });
      }
      rafRef.current = requestAnimationFrame(updateSpotlight);
    };

    rafRef.current = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white tracking-[-0.02em] relative" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 mix-blend-difference pointer-events-auto">
        {/* Left Logo */}
        <div 
          onClick={() => handleScrollTo('hero')}
          className="flex items-center gap-2 select-none cursor-pointer"
        >
          <svg className="w-[26px] h-[26px]" viewBox="0 0 256 256" fill="#ffffff">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className="text-white text-2xl font-playfair italic font-bold">Mirastra</span>
        </div>

        {/* Center Pill */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
          <button 
            onClick={() => handleScrollTo('hero')}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-white bg-white/20 cursor-pointer"
          >
            Home
          </button>
          {[
            { label: 'Products', id: 'toonhub' },
            { label: 'Process', id: 'aethera' },
            { label: 'Services', id: 'orbis-services' },
            { label: 'Portfolio', id: 'orbis-portfolio' }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => handleScrollTo(item.id)}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-white/80 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Action */}
        <div className="hidden md:block">
          <button 
            onClick={() => handleScrollTo('contact')}
            className="bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-gray-300 p-2 z-[110] cursor-pointer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 flex flex-col justify-center items-center gap-8 z-[105]">
            <button
              onClick={() => handleScrollTo('hero')}
              className="text-white text-2xl font-light hover:text-gray-300 cursor-pointer"
            >
              Home
            </button>
            {[
              { label: 'Products', id: 'toonhub' },
              { label: 'Process', id: 'aethera' },
              { label: 'Services', id: 'orbis-services' },
              { label: 'Portfolio', id: 'orbis-portfolio' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.id)}
                className="text-white text-2xl font-light hover:text-gray-300 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleScrollTo('contact')}
              className="bg-white text-gray-900 text-lg font-semibold px-8 py-3 rounded-full hover:bg-gray-100 cursor-pointer mt-4"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Main Lithos Hero Section */}
      <section
        id="hero"
        className="relative w-full overflow-hidden h-screen bg-black"
        style={{ height: '100dvh' }}
      >
        {/* Base Image Layer (z-10) with Ken Burns zoom-out */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
          style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
        />

        {/* Reveal Spotlight Mask Layer (z-30) */}
        <RevealLayer
          image={BG_IMAGE_2}
          cursorX={cursorPos.x}
          cursorY={cursorPos.y}
        />

        {/* Heading (z-50) */}
        <div className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
          <h1 className="text-white leading-[0.95]">
            <span
              className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
              style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
            >
              Building the future.
            </span>
            <span
              className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
              style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
            >
              Beyond limits.
            </span>
          </h1>
        </div>

        {/* Bottom-left Paragraph (z-50) */}
        <div
          className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] hero-anim hero-fade z-50"
          style={{ animationDelay: '0.7s' }}
        >
          <p className="text-sm text-white/80 leading-relaxed">
            Mirastra Tech is an MSME-registered technology solutions company dedicated to helping businesses grow through innovative digital solutions. Established in May 2026.
          </p>
        </div>

        {/* Bottom-right Block (z-50) */}
        <div
          className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[280px] flex flex-col items-start gap-4 sm:gap-5 hero-anim hero-fade z-50"
          style={{ animationDelay: '0.85s' }}
        >
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Operating remotely and serving clients worldwide, our mission is to simplify technology, automate business processes, and accelerate sustainable growth.
          </p>
          <button 
            onClick={() => handleScrollTo('contact')}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer pointer-events-auto"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  )
}
