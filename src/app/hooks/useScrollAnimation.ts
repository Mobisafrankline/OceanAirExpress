import { useRef } from "react";
import { useInView } from "motion/react";

/**
 * Returns a ref and animation styles for scroll-triggered fade-up effects.
 * Attach `ref` to the container and spread `animStyle` on it (or use `isInView`
 * to drive a motion.div manually).
 */
export function useScrollAnimation(threshold: number = 0.12, delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const animStyle: React.CSSProperties = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0px)" : "translateY(28px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  };

  return { ref, isInView, animStyle };
}
