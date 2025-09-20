import PhoneShell from "@/components/PhoneShell";

export default function AdminPage() {
  return (
    <PhoneShell>
      <div className="space-y-6">
        <header className="space-y-3 text-center">
          <div className="mx-auto w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[10px] uppercase tracking-[0.4em] text-white/70">
            Polar Ops Access
          </div>
          <h1 className="text-2xl font-semibold">Admin Oversight Hub</h1>
          <p className="text-sm text-white/70">
            Review system integrity, facility status, and compliance logs for all operations.
          </p>
        </header>

        <section className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">System Health</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-sky-700/90 p-4 text-left">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Network</p>
              <p className="mt-3 text-xl font-semibold">Operational</p>
              <p className="text-xs text-white/70">Latency 21ms</p>
            </div>
            <div className="rounded-2xl bg-sky-700/90 p-4 text-left">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Security</p>
              <p className="mt-3 text-xl font-semibold">Synchronized</p>
              <p className="text-xs text-white/70">Last sweep 04:50</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Access Log Highlights</p>
          <ul className="mt-3 space-y-3 text-sm text-white/80">
            <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span>04:42 · Manager override accepted</span>
              <span className="text-emerald-300">OK</span>
            </li>
            <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span>05:12 · Drone bay audit queued</span>
              <span className="text-amber-200">Review</span>
            </li>
            <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span>05:24 · Employee badge retry</span>
              <span className="text-rose-200">Flag</span>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Protocol Actions</p>
          <div className="mt-3 space-y-3 text-sm text-white/80">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">Authorize maintenance window</p>
                <p className="text-xs text-white/60">Hangar C — 06:30</p>
              </div>
              <button className="rounded-xl bg-sky-600 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white shadow-glow transition hover:bg-sky-500">
                Approve
              </button>
            </div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">Archive overnight logs</p>
                <p className="text-xs text-white/60">Security cluster</p>
              </div>
              <button className="rounded-xl bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/70 transition hover:bg-white/20">
                Schedule
              </button>
            </div>
          </div>
        </section>
      </div>
    </PhoneShell>
  );
}
