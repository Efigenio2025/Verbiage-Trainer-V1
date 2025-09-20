"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Flow", href: "/flow" },
  { label: "Employee", href: "/employee" },
  { label: "Manager", href: "/manager" },
  { label: "Admin", href: "/admin" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="border-t border-white/15 bg-white/10 px-4 py-3 backdrop-blur-lg">
      <div className="grid grid-cols-5 gap-2 text-[11px] font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-2 py-2 text-center uppercase tracking-[0.2em] transition ${
                isActive
                  ? "bg-sky-600 text-white shadow-glow"
                  : "text-white/70 hover:text-white"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
