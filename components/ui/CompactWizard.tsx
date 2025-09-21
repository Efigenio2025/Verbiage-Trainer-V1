import React, { useEffect, useState } from "react";
import type { Size, Anim } from "./atoms";
import { animPresets, padBySize, cn, clamp } from "./atoms";
import { motion } from "framer-motion";

export function CompactWizard({
  size = 'md',
  anim = 'slide',
  steps = ["Gate","Push","Taxi","Takeoff"],
  index = 0,
  behavior = 'clamp',
  onChange,
}: {
  size?: Size;
  anim?: Anim;
  steps?: string[];
  index?: number;
  behavior?: 'clamp' | 'wrap';
  onChange?: (i: number) => void;
}) {
  const [i, setI] = useState(index);
  useEffect(() => setI(index), [index]);
  const last = Math.max(0, steps.length - 1);
  const safeI = clamp(i, 0, last);
  const preset = animPresets[anim];
  function go(delta: number) {
    const raw = i + delta;
    const v = behavior === 'wrap' ? (raw > last ? 0 : raw < 0 ? last : raw) : clamp(raw, 0, last);
    setI(v); onChange?.(v);
  }
  return (
    <motion.div {...preset} className={cn("rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl", padBySize[size])}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/80">Pre-flight Wizard</p>
        <span className="text-xs text-white/60">Step {safeI + 1} / {steps.length}</span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        {steps.map((s, idx) => <div key={s} className={cn("h-2 flex-1 rounded", idx <= safeI ? "bg-white" : "bg-white/20")} />)}
      </div>
      <p className="mt-3 text-white font-medium">{steps[safeI]}</p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => go(-1)} className="px-3 py-2 rounded-xl bg-white/10 border border-white/15 active:scale-95">Back</button>
        <button onClick={() => go(+1)} className="px-3 py-2 rounded-xl bg-white/20 border border-white/15 active:scale-95">Next</button>
      </div>
    </motion.div>
  );
}
