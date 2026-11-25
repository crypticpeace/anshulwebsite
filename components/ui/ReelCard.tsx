"use client";
import { motion } from "framer-motion";
import { driveThumb, type VideoItem } from "@/app/data";
import Reveal from "@/components/ui/Reveal";

const COLORS = ["#FF8A00", "#111111", "#6FBF2A", "#4A8FD6"];

export default function ReelCard({ v, i, onOpen }: { v: VideoItem; i: number; onOpen: () => void }) {
  return (
    <Reveal delay={(i % 4) * 0.12}>
      <motion.button type="button" onClick={onOpen} data-hover aria-label={`Play ${v.title}`}
        whileHover={{ y: -14, rotate: i % 2 ? 2 : -2, scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }}
        className="group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl text-left shadow-xl" style={{ background: COLORS[i % 4] }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={driveThumb(v.id)} alt={v.title} loading="lazy" referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/30">
          <span className="flex h-12 w-12 items-center md:h-16 md:w-16 justify-center rounded-full bg-lime text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-current md:h-7 md:w-7"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-cream md:p-4">
          <span className="rounded-full bg-lime px-3 py-0.5 text-[10px] font-bold text-ink">Video</span>
          <p className="mt-1 line-clamp-2 text-xs font-bold capitalize leading-snug md:text-sm">{v.title}</p>
        </div>
      </motion.button>
    </Reveal>
  );
}
