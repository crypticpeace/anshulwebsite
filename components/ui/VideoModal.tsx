"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { drivePlayer, type VideoItem } from "@/app/data";

const stop = (e: React.MouseEvent) => e.stopPropagation();

export default function VideoModal({ list, index, onClose, onIndex }: {
  list: VideoItem[]; index: number | null; onClose: () => void; onIndex: (i: number) => void;
}) {
  const open = index !== null;
  const v = open ? list[index!] : null;
  const [loaded, setLoaded] = useState(false);

  const go = useCallback((d: number) => { if (index !== null) onIndex((index + d + list.length) % list.length); }, [index, list.length, onIndex]);

  useEffect(() => { setLoaded(false); }, [index]);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !document.fullscreenElement) onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", key);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", key); document.body.style.overflow = prev; };
  }, [open, onClose, go]);

  const portrait = !v?.landscape;
  const many = list.length > 1;
  return (
    <AnimatePresence>
      {v && (
        // Three stacked rows (title bar / player / controls) so nothing is drawn over the video.
        <motion.div key="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
          className="vp fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm">
          <div className="flex shrink-0 items-center justify-between gap-3 px-4 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-6 md:pt-5">
            <p className="min-w-0 truncate text-sm font-bold capitalize text-white">
              {v.title} <span className="ml-1 font-semibold text-white/50">{index! + 1} / {list.length}</span>
            </p>
            <button onClick={(e) => { stop(e); onClose(); }} aria-label="Close" data-hover
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime font-bold text-ink">✕</button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center gap-3 px-4">
            {many && (
              <button onClick={(e) => { stop(e); go(-1); }} aria-label="Previous" data-hover
                className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-lime hover:text-ink md:flex">‹</button>
            )}
            <motion.div onClick={stop} initial={{ scale: 0.92, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 30 }}
              className={`relative overflow-hidden rounded-2xl bg-black shadow-2xl ${portrait ? "vp-portrait" : "vp-landscape"}`}>
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-lime" />
                </div>
              )}
              <iframe key={v.id} src={drivePlayer(v.id)} title={v.title} onLoad={() => setLoaded(true)}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowFullScreen
                className="absolute inset-0 h-full w-full border-0" />
            </motion.div>
            {many && (
              <button onClick={(e) => { stop(e); go(1); }} aria-label="Next" data-hover
                className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-lime hover:text-ink md:flex">›</button>
            )}
          </div>

          <div className="flex shrink-0 justify-center gap-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 md:h-6 md:pb-0 md:pt-0" onClick={stop}>
            {many && (
              <>
                <button onClick={() => go(-1)} className="rounded-full bg-white/15 px-6 py-2.5 text-sm font-bold text-white active:bg-lime active:text-ink md:hidden">‹ Prev</button>
                <button onClick={() => go(1)} className="rounded-full bg-white/15 px-6 py-2.5 text-sm font-bold text-white active:bg-lime active:text-ink md:hidden">Next ›</button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
