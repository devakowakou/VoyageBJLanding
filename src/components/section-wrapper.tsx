"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={cn("container py-16 md:py-24", className)}
    >
      {children}
    </motion.section>
  );
}
