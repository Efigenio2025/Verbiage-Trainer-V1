import React from "react";
import { cn } from "./atoms";

export function SegmentedToolbar({
  options, value, onChange
}: {
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex w-full rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            "flex-1 h-11 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.98]",
            value === opt.value ? "bg-white/20 text-white" : "text-white/80"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
