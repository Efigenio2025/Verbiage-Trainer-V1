import React from "react";

export type Size = "sm" | "md" | "lg";
export type Anim = "fade" | "slide" | "scale" | "pulse";
export type Tone = "neutral" | "success" | "warning" | "info";

export const ASHWOOD = {
  from: "#4b5563",
  to:   "#6b7280",
  primary: "#9ca3af",
  accent:  "#d1d5db",
  ink:     "#f8fafc",
  inkDark: "#111827",
};

export const cn = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(" ");
export const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

export const animPresets: Record<Anim, { initial: any; animate: any; transition: any }> = {
  fade:  { initial: { opacity: 0 },             animate: { opacity: 1 },                        transition: { duration: 0.35 } },
  slide: { initial: { opacity: 0, y: 12 },       animate: { opacity: 1, y: 0 },                  transition: { duration: 0.35 } },
  scale: { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 },              transition: { duration: 0.28 } },
  pulse: { initial: { opacity: 0 },              animate: { opacity: 1 },                        transition: { duration: 0.30 } },
};

export const padBySize: Record<Size,string>   = { sm: "p-3", md: "p-4", lg: "p-5" };
export const titleBySize: Record<Size,string> = { sm: "text-base", md: "text-lg", lg: "text-xl" };
export const subBySize: Record<Size,string>   = { sm: "text-xs",  md: "text-sm", lg: "text-base" };

export function Pill({ children, tone = "neutral" as Tone, size = "sm" as Size }:{
  children: React.ReactNode;
  tone?: Tone;
  size?: Size;
}) {
  const tones: Record<Tone,string> = {
    neutral: "bg-white/10 text-white border border-white/15",
    success: "bg-emerald-500/15 text-emerald-100 border border-emerald-400/30",
    warning: "bg-amber-500/15 text-amber-100 border border-amber-400/30",
    info:    "bg-blue-500/15 text-blue-100 border border-blue-400/30",
  };
  const sz = size === "lg" ? "px-3 py-1.5 text-sm" : size === "md" ? "px-2.5 py-1 text-xs" : "px-2 py-1 text-[11px]";
  return React.createElement("span", { className: ["rounded-xl", tones[tone], sz].join(" ") }, children);
}
