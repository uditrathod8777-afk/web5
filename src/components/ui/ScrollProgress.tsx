"use client";
import { useScroll, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[100] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(to right, #75472F, #A66C45, #D69A69)",
      }}
    />
  );
}
