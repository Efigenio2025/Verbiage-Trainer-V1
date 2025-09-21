import React from "react";
import { motion } from "framer-motion";
import type { Size, Anim, Tone } from "./atoms";
import { Pill, animPresets, padBySize, titleBySize, subBySize, cn } from "./atoms";

export function FlowCover({
  icon: Icon,
  title,
  subtitle,
  pills = [],
  cta,
  tone = 'neutral',
  size = 'md',
  anim = 'slide'
}: {
  icon: any;
  title: string;
  subtitle?: string;
  pills?: Array<{ label: string; tone?: Tone }>;
  cta?: React.ReactNode;
  tone?: Tone;
  size?: Size;
  anim?: Anim;
}) {
  const toneRing: Record<Tone, string> = {
    neutral: "ring-white/15",
    success: "ring-emerald-400/30",
    warning: "ring-amber-400/30",
    info:    "ring-blue-400/30",
  };
  const iconBox = size === 'lg' ? 'h-12 w-12' : size === 'sm' ? 'h-10 w-10' : 'h-11 w-11';
  const iconSz  = size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';
  const preset  = animPresets[anim];
  return (
    <motion.div {...preset} className={cn("rounded-2xl border backdrop-blur-xl text-white", padBySize[size], "bg-white/6 border-white/12 ring-1", toneRing[tone])}>
      <div className="flex items-start gap-3">
        <div className={cn("shrink-0 rounded-xl bg-white/10 border border-white/15 grid place-items-center", iconBox)}>
          <Icon className={iconSz}/>
        </div>
        <div className="flex-1">
          <h2 className={cn("font-semibold leading-tight", titleBySize[size])}>{title}</h2>
          {subtitle && <p className={cn("text-white/80 mt-0.5", subBySize[size])}>{subtitle}</p>}
          {!!pills.length && (
            <div className="flex flex-wrap gap-2 mt-2">
              {pills.map((p, i) => <Pill key={i} tone={p.tone || 'neutral'} size={size}>{p.label}</Pill>)}
            </div>
          )}
        </div>
        {cta}
      </div>
    </motion.div>
  );
}
