"use client";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Stat({ n, l, i }: { n: string; l: string; i: number }) {
  const ref = useRef(null); const inV = useInView(ref, { once: true });
  const num = parseInt(n); const suffix = n.replace(/^\d+/, ""); const [v, setV] = useState(0);
  useEffect(() => { if (!inV) return; let c = 0; const t = setInterval(() => { c++; setV(Math.round((num * c) / 30)); if (c >= 30) clearInterval(t); }, 40 + i * 5); return () => clearInterval(t); }, [inV, num, i]);
  return <div ref={ref} className="rounded-2xl bg-ink p-4 text-center text-cream"><div className="font-display text-4xl text-lime">{v}{suffix}</div><div className="text-xs">{l}</div></div>;
}
