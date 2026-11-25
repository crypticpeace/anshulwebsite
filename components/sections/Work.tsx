"use client";
import { useState } from "react";
import { VIDEOS } from "@/app/data";
import Heading from "@/components/ui/Heading";
import ReelCard from "@/components/ui/ReelCard";
import VideoModal from "@/components/ui/VideoModal";

export default function Work() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-6 pb-16 pt-6 md:pb-24 md:pt-10">
      <Heading white="Video" lime="Editing" sub="Tap any video to play it" />
      {VIDEOS.length === 0 ? (
        <p className="text-center text-sm font-semibold opacity-60">Add video IDs to <code>VIDEOS</code> in app/data.ts.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">{VIDEOS.map((v, i) => <ReelCard key={v.id} v={v} i={i} onOpen={() => setActive(i)} />)}</div>
      )}
      <VideoModal list={VIDEOS} index={active} onClose={() => setActive(null)} onIndex={setActive} />
    </section>
  );
}
