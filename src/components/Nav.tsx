import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home",     to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Works",    to: "/works" },
    { label: "Contact",  to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100]">

      {/* ── DEFAULT (not scrolled): logo left · menu center · CTA right ── */}
      <div
        className={`transition-all duration-300 px-6 sm:px-12 flex items-center justify-between ${
          isScrolled
            ? "opacity-0 pointer-events-none h-0 overflow-hidden"
            : "opacity-100 py-5"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 decoration-none cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/mirastra_logo.png" alt="Mirastra Tech" className="w-auto object-contain" style={{ height: 25 }} />
        </Link>

        {/* Center menu capsule — dark text on light bg */}
        <div className="hidden md:flex bg-black/5 backdrop-blur-md border border-black/10 rounded-full px-2 py-1 items-center gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-black/50 hover:text-black hover:bg-black/5 transition-all cursor-pointer decoration-none"
              activeProps={{
                style: {
                  backgroundColor: "rgba(0,0,0,0.08)",
                  color: "#000",
                },
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-black text-white hover:bg-zinc-800 text-xs font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer uppercase tracking-wider decoration-none"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-black hover:opacity-60 p-2 cursor-pointer bg-transparent border-none outline-none"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── SCROLLED: floating dark capsule only, centered ── */}
      <div
        className={`transition-all duration-300 flex justify-center ${
          isScrolled
            ? "opacity-100 py-3"
            : "opacity-0 pointer-events-none h-0 overflow-hidden"
        }`}
      >
        <div className="hidden md:flex bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1 items-center gap-1 shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-white hover:bg-white/8 transition-all cursor-pointer decoration-none"
              activeProps={{
                style: {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                },
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger (scrolled) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:opacity-80 p-2 cursor-pointer bg-transparent border-none outline-none"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile full-screen drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 z-[105]">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl font-light hover:text-white/60 tracking-widest uppercase cursor-pointer transition-colors decoration-none"
              activeProps={{ style: { fontWeight: "600", borderBottom: "2px solid white" } }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-white text-black text-sm font-semibold px-8 py-3 rounded-full hover:bg-white/90 cursor-pointer mt-4 uppercase tracking-wider decoration-none"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
