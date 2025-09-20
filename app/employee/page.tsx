import PhoneShell from "@/components/PhoneShell";

export default function EmployeePage() {
  return (
    <PhoneShell>
      <div className="space-y-6">
        <header className="space-y-3 text-center">
          <div className="mx-auto w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[10px] uppercase tracking-[0.4em] text-white/70">
            Polar Ops Access
          </div>
          <h1 className="text-2xl font-semibold">Employee Mission Brief</h1>
          <p className="text-sm text-white/70">
            Your personalized operations summary for today&apos;s shift. Review assignments, verify security reminders, and stay synchronized with the field team.
          </p>
        </header>

        <section className="rounded-2xl border border-white/15 bg-white/10 p-4 text-left backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Security Reminder</p>
          <p className="mt-3 text-sm text-white/80">
            Keep your employee number private. Contact the operations supervisor if you need roster updates or profile assistance.
          </p>
        </section>

        <section className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Assignment Credentials</p>
          <div className="mt-3 space-y-2">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80">
              Employee Number · <span className="tracking-[0.3em]">50731</span>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80">
              Entry Gate · 04 — Badge scan required at 05:45
            </div>
          </div>
          <button className="mt-4 w-full rounded-xl bg-sky-600 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-glow transition hover:bg-sky-500">
            Confirm Check-In
          </button>
        </section>

        <section className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-sky-700/90 p-4 text-left">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Shift Block</p>
            <p className="mt-3 text-lg font-semibold">Delta Watch</p>
            <p className="text-xs text-white/70">0600 – 1400</p>
          </div>
          <div className="rounded-2xl bg-sky-700/90 p-4 text-left">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Mission Focus</p>
            <p className="mt-3 text-lg font-semibold">Runway Escort</p>
            <p className="text-xs text-white/70">Secure cargo inbound</p>
          </div>
        </section>
      </div>
    </PhoneShell>
  );
}
