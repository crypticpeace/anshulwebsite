"use client";
import { motion } from "framer-motion";

export default function Nav() {
  // The wrapper does the centring. Framer Motion writes its own inline transform on the
  // animated element, which would wipe out a -translate-x-1/2 class and push the bar off-screen.
  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 md:top-4">
      <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
        className="pointer-events-auto flex max-w-full gap-0.5 rounded-full bg-ink/90 p-1 text-[11px] font-bold text-cream backdrop-blur md:gap-1 md:p-1.5 md:text-xs">
        {["about", "work", "motion"].map((s) => (
          <a key={s} href={`#${s}`} className="rounded-full px-3.5 py-2 uppercase transition hover:bg-lime hover:text-ink md:px-4">{s}</a>
        ))}
      </motion.nav>
    </div>
  );
}
