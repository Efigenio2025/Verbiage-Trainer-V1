import React from "react";
import { motion } from "framer-motion";
import type { Size, Anim } from "./atoms";
import { animPresets, padBySize, cn } from "./atoms";

export function MetricCard({
  label, value, unit, trend, size = 'md', anim = 'fade'
}: { label: string; value: string | number; unit?: string; trend?: string; size?: Size; anim?: Anim; }) {
  const titleSz = size === 'lg' ? 'text-base' : size === 'sm' ? 'text-xs' : 'text-sm';
  const valueSz = size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-xl' : 'text-2xl';
  const preset  = animPresets[anim];
  return (
    <motion.div {...preset} className={cn("rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl", padBySize[size])}>
      <div className="flex items-center justify-between">
        <p className={cn("text-white/80", titleSz)}>{label}</p>
        {trend && <span className="text-xs text-white/60">{trend}</span>}
      </div>
      <div className="mt-1 flex items-end gap-1">
        <span className={cn("font-semibold text-white", valueSz)}>{value}</span>
        {unit && <span className="text-white/70 text-sm">{unit}</span>}
      </div>
    </motion.div>
  );
}
