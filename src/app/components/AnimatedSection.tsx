import { useRef, type ReactNode, type CSSProperties } from "react";
import { motion, useInView } from "motion/react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** How much of the element must be visible before triggering. 0–1 */
  amount?: number;
  /** Animate upward ('up'), left ('left'), right ('right'), or just fade ('fade') */
  direction?: "up" | "left" | "right" | "fade";
  style?: CSSProperties;
}

/**
 * Reusable scroll-triggered entrance animation wrapper.
 * Wraps children in a motion.div that fades + slides in when scrolled into view.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  amount = 0.1,
  direction = "up",
  style,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  // amount: 0 ensures elements at the very top of the page always trigger
  const isInView = useInView(ref, { once: true, amount: 0 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 28 : 0,
      x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      style={{
        // KEY FIX: invisible elements must not intercept touch/click events
        pointerEvents: isInView ? "auto" : "none",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}