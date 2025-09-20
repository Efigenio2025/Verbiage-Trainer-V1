import PhoneShell from "@/components/PhoneShell";

export default function ManagerPage() {
  return (
    <PhoneShell>
      <div className="space-y-6">
        <header className="space-y-3 text-center">
          <div className="mx-auto w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[10px] uppercase tracking-[0.4em] text-white/70">
            Polar Ops Access
          </div>
          <h1 className="text-2xl font-semibold">Manager Control Deck</h1>
          <p className="text-sm text-white/70">
            Monitor field readiness, shift coverage, and tactical updates across all teams in real time.
          </p>
        </header>

        <section className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Operations Briefing</p>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span>Team Check-ins</span>
              <span className="rounded-full bg-sky-600 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white">12 / 12</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span>Equipment Clearance</span>
              <span className="text-sky-300">All green</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span>Weather Advisory</span>
              <span className="text-amber-200">Crosswinds @ 18kt</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-sky-700/90 p-4 text-left">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Launch Window</p>
            <p className="mt-3 text-xl font-semibold">05:45</p>
            <p className="text-xs text-white/70">Runway 2 cleared</p>
          </div>
          <div className="rounded-2xl bg-sky-700/90 p-4 text-left">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Reserve Crew</p>
            <p className="mt-3 text-xl font-semibold">4 Standby</p>
            <p className="text-xs text-white/70">Hangar North</p>
          </div>
        </section>

        <section className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Action Queue</p>
          <ul className="mt-3 space-y-3 text-sm text-white/80">
            <li className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">Update flight line briefing</p>
                <p className="text-xs text-white/60">Due 05:30</p>
              </div>
              <span className="rounded-full border border-white/30 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
                Pending
              </span>
            </li>
            <li className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">Verify crew rotations</p>
                <p className="text-xs text-white/60">Due 06:10</p>
              </div>
              <span className="rounded-full border border-white/30 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
                In Review
              </span>
            </li>
          </ul>
        </section>
      </div>
    </PhoneShell>
  );
}
