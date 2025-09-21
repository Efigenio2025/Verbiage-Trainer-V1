import React from "react";
import type { Size } from "./atoms";
import { ASHWOOD, cn } from "./atoms";

export function IconButton({
  icon: Icon,
  ariaLabel,
  size = "md",
  variant = "tonal",
  onClick,
}: {
  icon: any;
  ariaLabel: string;
  size?: Size;
  variant?: "tonal" | "solid" | "outline" | "glow" | "ghost";
  onClick?: () => void;
}) {
  const sizeMap = { sm: "h-11 w-11", md: "h-12 w-12", lg: "h-14 w-14" } as const;
  const variantMap: Record<string, string> = {
    tonal:   "bg-white/10 text-white border border-white/10",
    solid:   "bg-[var(--btn-bg,#9ca3af)] text-[var(--btn-ink,#111827)] border border-white/10 shadow",
    outline: "border border-[var(--btn-border,#9ca3af)] text-[var(--btn-border,#9ca3af)]",
    glow:    "bg-white/15 text-white border border-white/10 shadow-[0_0_24px_rgba(209,213,219,0.25)]",
    ghost:   "bg-transparent text-white/90",
  };
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(
        "relative inline-grid place-items-center rounded-2xl active:scale-[0.98] transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#4b5563]",
        sizeMap[size],
        variantMap[variant]
      )}
      style={{ ["--btn-bg" as any]: ASHWOOD.primary, ["--btn-ink" as any]: ASHWOOD.inkDark, ["--btn-border" as any]: ASHWOOD.primary }}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
