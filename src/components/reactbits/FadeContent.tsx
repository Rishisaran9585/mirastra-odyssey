import React from "react";
import { motion, Variants } from "framer-motion";

interface FadeContentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  blur?: boolean;
  y?: number;
  once?: boolean;
  threshold?: number;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  blur = true,
  y = 24,
  once = true,
  threshold = 0.1,
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y,
      filter: blur ? "blur(8px)" : "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
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

export default FadeContent;
