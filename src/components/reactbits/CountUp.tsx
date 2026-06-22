import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number; // ms
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  separator?: string;
  once?: boolean;
  threshold?: number;
}

const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  duration = 1800,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  separator = ",",
  once = true,
  threshold = 0.3,
}) => {
  const [value, setValue] = useState(from);
  const startTime = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const hasRun = useRef(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const formatNumber = (n: number) => {
    const fixed = n.toFixed(decimals);
    if (!separator) return fixed;
    const parts = fixed.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(".");
  };

  const runAnimation = () => {
    if (once && hasRun.current) return;
    hasRun.current = true;
    startTime.current = null;

    const tick = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + (to - from) * eased);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          if (once) obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [to, from, duration, once, threshold]);

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      {formatNumber(value)}
      {suffix}
    </span>
  );
};

export default CountUp;
