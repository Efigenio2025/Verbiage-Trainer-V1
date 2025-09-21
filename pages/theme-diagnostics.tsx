export default function ThemeDiagnostics() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4b5563] to-[#6b7280] text-white p-6 space-y-6">
      <h1 className="text-lg font-semibold">Theme Diagnostics</h1>
      <div className="card-ash p-4">If you see glassy card styling, Tailwind + tokens are working.</div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
        Inline card (no token class) — should also appear glassy.
      </div>
      <div>
        <p className="text-sm opacity-80">Utility test:</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 bg-white/10 rounded"></div>
          <div className="h-10 bg-white/20 rounded"></div>
          <div className="h-10 bg-white/30 rounded"></div>
        </div>
      </div>
    </div>
  );
}
