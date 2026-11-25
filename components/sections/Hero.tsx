"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/lib/ease";
import { INFO } from "@/app/data";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const op = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="noise relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink px-6">
      <div className="absolute left-[8%] top-[18%] h-24 w-24 animate-float rounded-full border-4 border-lime" />
      <div className="absolute bottom-[20%] right-[10%] h-20 w-20 animate-float rounded-2xl bg-lime/90 [animation-delay:1.5s]" />
      <svg className="absolute right-[18%] top-[12%] h-20 w-20 animate-float text-lime [animation-delay:3s]" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 10l15 10-15 10 15 10M30 10l15 10-15 10 15 10" /></svg>
      <motion.div style={{ y, opacity: op }} className="relative text-center">
        <motion.p initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-2 text-left font-display text-3xl uppercase text-lime md:ml-[8vw] md:text-5xl">Video Editor</motion.p>
        <h1 className="flex justify-center font-display text-[22vw] uppercase leading-[0.85] md:text-[17vw]">
          <motion.span initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease }} className="text-cream">PORT</motion.span>
          <motion.span initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.15, ease }} className="text-lime">FOLIO</motion.span>
        </h1>
        <motion.p initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-1 text-right font-display text-3xl uppercase text-cream md:mr-[8vw] md:text-5xl">Motion Designer <span className="text-lime">2026</span></motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-10">
          <p className="font-script text-5xl text-cream md:text-7xl">{INFO.name}</p>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.4, duration: 1 }} className="mx-auto mt-2 h-[3px] w-64 origin-left bg-lime" />
        </motion.div>
      </motion.div>
      <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="absolute bottom-8 text-xs font-bold uppercase tracking-[0.3em] text-lime">Scroll ↓</motion.div>
    </section>
  );
}
