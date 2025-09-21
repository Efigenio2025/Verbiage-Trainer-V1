import React from "react";
import type { Size } from "./atoms";
import { ASHWOOD, cn } from "./atoms";

export function ToggleChip({ label, pressed, onToggle, size = "sm" }: {
  label: string; pressed: boolean; onToggle: (v: boolean) => void; size?: Size
}) {
  return (
    <button
      aria-pressed={pressed}
      onClick={() => onToggle(!pressed)}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl font-medium active:scale-[0.98] transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#4b5563]",
        size === 'lg' ? 'h-12 px-5 text-[16px]' : size === 'md' ? 'h-11 px-4 text-[15px]' : 'h-10 px-3 text-[14px]',
        pressed ? "bg-[var(--btn-bg,#9ca3af)] text-[var(--btn-ink,#111827)] border border-white/10" : "border border-[var(--btn-border,#9ca3af)] text-[var(--btn-border,#9ca3af)]"
      )}
      style={{ ["--btn-bg" as any]: ASHWOOD.primary, ["--btn-ink" as any]: ASHWOOD.inkDark, ["--btn-border" as any]: ASHWOOD.primary }}
    >
      {label}
    </button>
  );
}
