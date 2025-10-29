"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

type AnimatedCounterProps = {
  from?: number;
  to: number;
  animationOptions?: object;
  className?: string;
};

export function AnimatedCounter({
  from = 0,
  to,
  animationOptions,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
    ...animationOptions,
  });

  useEffect(() => {
    if (inView) {
      animate(from, to, {
        duration: 2,
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toLocaleString("fr-FR");
          }
        },
      });
    }
  }, [inView, to, from]);

  return <span ref={ref} className={className} />;
}
