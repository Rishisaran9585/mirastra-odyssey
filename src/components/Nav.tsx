import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "About Us", to: "/about" },
    { label: "Works", to: "/works" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-350 px-6 py-4 sm:px-12 flex items-center justify-between border-b ${
        isScrolled
          ? "bg-black/60 backdrop-blur-lg border-white/10 shadow-lg py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      {/* Brand Wordmark & Icon */}
      <Link
        to="/"
        className="flex items-center gap-2 select-none hover:scale-102 transition-transform cursor-pointer text-white decoration-none"
      >
        <div className="w-6 h-6 border border-white/60 rounded flex items-center justify-center bg-white/5">
          <div className="w-3 h-3 bg-white rotate-45 rounded-2xs" />
        </div>
        <span className="text-lg font-bold tracking-wider uppercase text-white font-sans">
          Mirastra
        </span>
      </Link>

      {/* Center Links (Desktop Glassmorphic Capsule) */}
      <div className="hidden md:flex bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1 items-center gap-1">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-white transition-all cursor-pointer decoration-none"
            activeProps={{
              style: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#ffffff",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1)",
              },
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right Action Button (Desktop) */}
      <div className="hidden md:block">
        <Link
          to="/contact"
          className="bg-white text-black hover:bg-white/90 text-xs font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer uppercase tracking-wider border-none outline-none decoration-none"
        >
          Let's Talk
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-white hover:opacity-80 p-2 z-[110] cursor-pointer bg-transparent border-none outline-none"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Full-Screen Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 z-[105] animate-fade-in">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl font-light hover:text-white/60 tracking-widest uppercase cursor-pointer transition-colors decoration-none"
              activeProps={{
                style: {
                  fontWeight: "600",
                  borderBottom: "2px solid white",
                },
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-white text-black text-sm font-semibold px-8 py-3 rounded-full hover:bg-white/90 cursor-pointer mt-4 uppercase tracking-wider border-none outline-none decoration-none"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
