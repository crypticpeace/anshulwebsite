"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Cursor from "@/components/ui/Cursor";
import Marquee from "@/components/ui/Marquee";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import MotionGraphics from "@/components/sections/MotionGraphics";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <main>
      <Cursor />
      <motion.div style={{ scaleX: w }} className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-lime" />
      <Nav />
      <Hero />
      <Marquee items={["Video Editing", "Motion Graphics", "Reels", "Color Grading", "Sound Design"]} />
      <About />
      <Work />
      <Marquee dark items={["Animate", "Edit", "Create", "Repeat"]} />
      <MotionGraphics />
    </main>
  );
}
