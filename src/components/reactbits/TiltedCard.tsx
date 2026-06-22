import React, { useRef, useCallback } from "react";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // degrees
  scale?: number;
  perspective?: number; // px
  transitionDuration?: number; // ms
  glare?: boolean;
  glareOpacity?: number;
}

const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.02,
  perspective = 800,
  transitionDuration = 400,
  glare = true,
  glareOpacity = 0.12,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card || !isHovered.current) return;

      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const rotateY = dx * maxTilt;
      const rotateX = -dy * maxTilt;

      card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.transition = "transform 80ms linear";

      if (glare && glareRef.current) {
        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}), transparent 70%)`;
        glareRef.current.style.opacity = "1";
      }
    },
    [maxTilt, scale, perspective, glare, glareOpacity],
  );

  const handleMouseEnter = useCallback(() => {
    isHovered.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHovered.current = false;
    const card = cardRef.current;
    if (card) {
      card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
      card.style.transition = `transform ${transitionDuration}ms cubic-bezier(0.22,1,0.36,1)`;
    }
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  }, [perspective, transitionDuration, glare]);

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300"
          style={{ opacity: 0, zIndex: 10 }}
        />
      )}
      {children}
    </div>
  );
};

export default TiltedCard;
