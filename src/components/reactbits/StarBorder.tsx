import React, { useRef, useEffect } from "react";

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string; // star/trail color
  speed?: number; // animation duration (seconds)
  borderRadius?: string;
  borderWidth?: number; // px
  thickness?: number; // glow thickness px
}

/**
 * StarBorder – animated rotating gradient border using conic-gradient + clip.
 * Works on any background: wraps children in a container with animated
 * pseudo-style via inline keyframes injected once per component instance.
 */
const StarBorder: React.FC<StarBorderProps> = ({
  children,
  className = "",
  color = "#ffffff",
  speed = 4,
  borderRadius = "24px",
  borderWidth = 1,
  thickness = 24,
}) => {
  const idRef = useRef(`sb-${Math.random().toString(36).slice(2, 8)}`);
  const id = idRef.current;

  useEffect(() => {
    if (document.getElementById(`style-${id}`)) return;

    const style = document.createElement("style");
    style.id = `style-${id}`;
    style.textContent = `
      @keyframes ${id}-spin {
        0%   { --${id}-angle: 0deg; }
        100% { --${id}-angle: 360deg; }
      }
      @property --${id}-angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
      }
      .${id}-wrapper {
        animation: ${id}-spin ${speed}s linear infinite;
        background: conic-gradient(
          from var(--${id}-angle),
          transparent 0%,
          ${color} 8%,
          transparent 16%
        );
      }
    `;
    document.head.appendChild(style);
    return () => {
      const el = document.getElementById(`style-${id}`);
      if (el) el.remove();
    };
  }, [id, color, speed]);

  return (
    <div className={`relative ${className}`} style={{ borderRadius, padding: borderWidth }}>
      {/* Animated conic border layer */}
      <div className={`${id}-wrapper absolute inset-0`} style={{ borderRadius, zIndex: 0 }} />
      {/* Inset content mask */}
      <div
        className="relative z-10"
        style={{
          borderRadius: `calc(${borderRadius} - ${borderWidth}px)`,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default StarBorder;
