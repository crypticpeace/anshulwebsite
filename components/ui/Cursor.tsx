"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 30 }), sy = useSpring(y, { stiffness: 500, damping: 30 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    const m = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); setBig(!!(e.target as HTMLElement).closest("a,button,[data-hover]")); };
    window.addEventListener("mousemove", m); return () => window.removeEventListener("mousemove", m);
  }, [x, y]);
  return (
    <motion.div className="cur pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime mix-blend-difference"
      style={{ x: sx, y: sy }} animate={{ width: big ? 70 : 18, height: big ? 70 : 18 }} />
  );
}
