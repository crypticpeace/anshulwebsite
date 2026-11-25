"use client";
import { motion } from "framer-motion";
import { ease } from "@/lib/ease";
import { MOTION } from "@/app/data";
import Reveal from "@/components/ui/Reveal";
import Heading from "@/components/ui/Heading";

export default function MotionGraphics() {
  return (
    <section id="motion" className="scroll-mt-16 bg-ink px-6 py-16 text-cream md:py-24">
      <div className="mx-auto max-w-6xl">
        <Heading white="Motion" lime="Graphics" sub="Animation that brings brands to life" />
        <div className="grid gap-5 md:grid-cols-3">
          {MOTION.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 0.12}>
              <motion.div data-hover whileHover="hover" className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl" style={{ background: m.color }}>
                <motion.div variants={{ hover: { scale: 6, opacity: 0.25 } }} transition={{ duration: 0.6, ease }} className="absolute h-20 w-20 rounded-full bg-lime" />
                <motion.span variants={{ hover: { y: -6, letterSpacing: "0.1em" } }} className={`relative z-10 font-display text-3xl uppercase ${m.color === "#D6DE23" ? "text-ink" : "text-white"}`}>{m.title}</motion.span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
