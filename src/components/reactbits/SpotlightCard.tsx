import React, { useRef, useCallback } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number; // px
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255,255,255,0.06)",
  spotlightSize = 300,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const spot = spotRef.current;
    if (!card || !spot) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spot.style.left = `${x}px`;
    spot.style.top = `${y}px`;
    spot.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    const spot = spotRef.current;
    if (spot) spot.style.opacity = "0";
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight glow element */}
      <div
        ref={spotRef}
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          width: spotlightSize,
          height: spotlightSize,
          borderRadius: "50%",
          background: `radial-gradient(circle at center, ${spotlightColor} 0%, transparent 70%)`,
          transform: "translate(-50%, -50%)",
          opacity: 0,
          zIndex: 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightCard;
