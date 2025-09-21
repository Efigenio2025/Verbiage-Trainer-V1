import React from "react";
import type { Size, Anim } from "./atoms";
import { animPresets, padBySize, cn } from "./atoms";
import { motion } from "framer-motion";

export function AlertNote({
  title = 'Safety Reminder',
  message = 'Verify cones and chocks placement before pushback.',
  icon: Icon,
  size = 'md',
  anim = 'fade',
}: {
  title?: string;
  message?: string;
  icon: any;
  size?: Size;
  anim?: Anim;
}) {
  const preset = animPresets[anim];
  return (
    <motion.div {...preset} className={cn("rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-start gap-3", padBySize[size])}>
      <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 grid place-items-center"><Icon className="h-5 w-5"/></div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-sm text-white/80">{message}</p>
      </div>
    </motion.div>
  );
}
