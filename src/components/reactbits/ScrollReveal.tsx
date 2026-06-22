import React from "react";
import { motion, Variants, Easing } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  opacity?: [number, number];
  ease?: Easing | Easing[];
  once?: boolean;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  y = 40,
  x = 0,
  opacity = [0, 1],
  ease = [0.22, 1, 0.36, 1],
  once = true,
  threshold = 0.15,
}) => {
  const variants: Variants = {
    hidden: {
      opacity: opacity[0],
      y,
      x,
    },
    visible: {
      opacity: opacity[1],
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
