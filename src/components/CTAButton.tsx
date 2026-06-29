import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  theme: "black" | "white";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function CTAButton({ children, theme, onClick, type = "button", disabled }: CTAButtonProps) {
  const isDark = theme === "black";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-4 text-sm font-medium tracking-wide border transition-transform duration-300 hover:scale-[1.02] cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${
        isDark
          ? "border-white text-white hover:bg-white hover:text-black"
          : "border-black text-black hover:bg-black hover:text-white"
      }`}
      style={{ willChange: "transform" }}
    >
      {children}
    </button>
  );
}
