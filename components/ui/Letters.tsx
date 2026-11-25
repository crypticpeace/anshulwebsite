"use client";
import { motion } from "framer-motion";
import { ease } from "@/lib/ease";

// The in-view trigger sits on the visible wrapper. The letters start translated outside the
// wrapper's clipped box, so observing them directly would never fire.
const letter = {
  hidden: { y: "110%", rotate: 8 },
  show: (d: number) => ({ y: 0, rotate: 0, transition: { duration: 0.8, delay: d, ease } }),
};

export default function Letters({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span className={`inline-flex overflow-hidden ${className}`} aria-label={text}
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}>
      {text.split("").map((c, i) => (
        <motion.span key={i} custom={delay + i * 0.05} variants={letter} className="inline-block" aria-hidden>
          {c === " " ? " " : c}
        </motion.span>
      ))}
    </motion.span>
  );
}
