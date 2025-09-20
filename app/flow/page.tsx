import Link from "next/link";
import PhoneShell from "@/components/PhoneShell";

const flowScreens = [
  {
    title: "Employee",
    route: "/employee",
    bullets: ["Mission brief", "Security reminder", "Shift tiles"],
  },
  {
    title: "Manager",
    route: "/manager",
    bullets: ["Operations briefing", "Readiness tiles", "Action queue"],
  },
  {
    title: "Admin",
    route: "/admin",
    bullets: ["System health", "Access log", "Protocol actions"],
  },
];

const Arrow = () => (
  <div className="flex min-w-[3rem] items-center justify-center gap-1">
    <div className="h-px flex-1 bg-white/30" />
    <div className="h-2 w-2 rotate-45 border-r border-t border-white/50" />
  </div>
);

export default function FlowPage() {
  return (
    <PhoneShell>
      <div className="space-y-6">
        <header className="space-y-3 text-center">
          <div className="mx-auto w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[10px] uppercase tracking-[0.4em] text-white/70">
            Polar Ops Access
          </div>
          <h1 className="text-2xl font-semibold">Screen Flow Board</h1>
          <p className="text-sm text-white/70">
            Visual map of the primary role dashboards. Tap a thumbnail to open the full experience.
          </p>
        </header>

        <div className="overflow-x-auto">
          <div className="flex min-w-full items-center gap-4 pb-2">
            {flowScreens.map((screen, index) => (
              <div key={screen.route} className="flex items-center gap-4">
                <Link
                  href={screen.route}
                  className="block w-40 shrink-0 rounded-[20px] border border-white/20 bg-white/10 p-4 text-left backdrop-blur-md transition hover:border-white/30 hover:bg-white/20"
                >
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">{screen.title}</p>
                  <div className="mt-3 space-y-2">
                    {screen.bullets.map((item) => (
                      <div key={item} className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-[11px] text-white/75">
                        {item}
                      </div>
                    ))}
                  </div>
                </Link>
                {index < flowScreens.length - 1 && <Arrow />}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-white/70 backdrop-blur-md">
          The flow follows an employee escalation path: employees surface needs, managers coordinate responses, and admins finalize system-wide actions.
        </div>
      </div>
    </PhoneShell>
  );
}
