import type { ReactNode } from "react";
import BottomNav from "@/components/BottomNav";

interface PhoneShellProps {
  children: ReactNode;
  contentClassName?: string;
}

export default function PhoneShell({ children, contentClassName }: PhoneShellProps) {
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="flex h-[720px] flex-col overflow-hidden rounded-[28px] border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl">
          <div className={`flex-1 overflow-y-auto px-6 py-8 ${contentClassName ?? ""}`}>
            {children}
          </div>
          <BottomNav />
        </div>
      </div>
    </main>
  );
}
