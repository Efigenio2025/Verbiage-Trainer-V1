import React from "react";
import type { Anim } from "./atoms";
import { animPresets, clamp } from "./atoms";
import { motion } from "framer-motion";

export function InlineProgress({ value, anim = 'scale' }:{ value: number; anim?: Anim }) {
  const v = clamp(value, 0, 100);
  const preset = animPresets[anim];
  return (
    <motion.div {...preset} className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
      <motion.div className="h-full bg-white/70" initial={{ width: 0 }} animate={{ width: `${v}%` }} transition={{ duration: 0.6 }} />
    </motion.div>
  );
}
