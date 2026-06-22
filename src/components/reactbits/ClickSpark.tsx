import React, { useRef, useCallback, useEffect } from "react";

interface Spark {
  x: number;
  y: number;
  angle: number;
  speed: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

interface ClickSparkProps {
  children: React.ReactNode;
  sparkCount?: number;
  sparkRadius?: number;
  duration?: number; // ms
  colors?: string[];
  className?: string;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
  children,
  sparkCount = 12,
  sparkRadius = 80,
  duration = 600,
  colors = ["#ffffff"],
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const rafRef = useRef<number>(0);
  const activeRef = useRef(false);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    sparksRef.current = sparksRef.current.filter((s) => s.life > 0);

    for (const s of sparksRef.current) {
      const progress = 1 - s.life / s.maxLife;
      const eased = 1 - Math.pow(1 - progress, 3);
      const x = s.x + Math.cos(s.angle) * s.speed * eased * sparkRadius;
      const y = s.y + Math.sin(s.angle) * s.speed * eased * sparkRadius;
      const alpha = s.life / s.maxLife;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(x, y, s.size * (1 - eased * 0.5), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      s.life -= 16;
    }

    if (sparksRef.current.length > 0) {
      rafRef.current = requestAnimationFrame(render);
    } else {
      activeRef.current = false;
    }
  }, [sparkRadius]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      for (let i = 0; i < sparkCount; i++) {
        const angle = (i / sparkCount) * Math.PI * 2;
        sparksRef.current.push({
          x,
          y,
          angle,
          speed: 0.7 + Math.random() * 0.6,
          life: duration,
          maxLife: duration,
          size: 2 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      if (!activeRef.current) {
        activeRef.current = true;
        rafRef.current = requestAnimationFrame(render);
      }
    },
    [sparkCount, duration, colors, render],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const obs = new ResizeObserver(() => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    });
    obs.observe(container);
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    return () => {
      obs.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`} onClick={handleClick}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-50" />
      {children}
    </div>
  );
};

export default ClickSpark;
