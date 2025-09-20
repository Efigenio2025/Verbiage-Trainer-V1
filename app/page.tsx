import Link from "next/link";
import PhoneShell from "@/components/PhoneShell";

const roleCards = [
  {
    title: "Employee Dashboard",
    description: "View mission assignments, shift timing, and security checkpoints.",
    href: "/employee",
    accent: "Mission Ready",
  },
  {
    title: "Manager Dashboard",
    description: "Coordinate teams, monitor readiness, and push mid-shift updates.",
    href: "/manager",
    accent: "Command",
  },
  {
    title: "Admin Dashboard",
    description: "Oversee systems, audit access, and manage facility protocols.",
    href: "/admin",
    accent: "Oversight",
  },
];

export default function HomePage() {
  return (
    <PhoneShell>
      <div className="space-y-6">
        <header className="space-y-3 text-center">
          <div className="mx-auto w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[10px] uppercase tracking-[0.4em] text-white/70">
            Polar Ops Access
          </div>
          <h1 className="text-2xl font-semibold">Choose Your Mission Role</h1>
          <p className="text-sm text-white/70">
            Jump into the tailored control center for your duties today. Navigation is instant—no additional authentication required.
          </p>
        </header>
        <div className="space-y-3">
          {roleCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="block rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition hover:border-white/25 hover:bg-white/20"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="space-y-1 text-left">
                  <h2 className="text-lg font-semibold text-white">{card.title}</h2>
                  <p className="text-xs text-white/70">{card.description}</p>
                </div>
                <span className="rounded-full bg-sky-600 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white shadow-glow">
                  {card.accent}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-white/70 backdrop-blur-md">
          Tap a role card to launch the mobile dashboard inside this device frame. Use the bottom navigation to hop between experiences at any time.
        </div>
      </div>
    </PhoneShell>
  );
}
