import React from "react";
import { PlaneTakeoff, Gauge } from "lucide-react";
import { FlowCover, MetricCard, CompactWizard, InlineProgress, ToggleChip } from "@/components/ui";

export function AshwoodSmoke() {
  const [step, setStep] = React.useState(1);
  const [pressed, setPressed] = React.useState(false);
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#111827] via-[#1f2937] to-[#111827] text-white p-6 space-y-6">
      <FlowCover
        icon={PlaneTakeoff}
        title="Ashwood Operations"
        subtitle="Gate 34A · Boarding in 12 minutes"
        pills={[
          { label: "Crew Ready" },
          { label: "Wx Check", tone: "info" },
          { label: "Ramp Clear", tone: "success" }
        ]}
        cta={<ToggleChip label="Auto-sync" pressed={pressed} onToggle={setPressed} size="sm" />}
        tone="info"
        anim="slide"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <MetricCard label="Fuel Uplift" value={7.8} unit="kl" trend="+0.2 vs plan" size="md" anim="fade" />
        <MetricCard label="On-Time Score" value={92} unit="%" trend="Stable" size="md" anim="fade" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-white/80">
          <Gauge className="h-4 w-4" aria-hidden="true" />
          <span>Taxi readiness 72%</span>
        </div>
        <InlineProgress value={72} anim="scale" />
        <CompactWizard
          steps={["Crew Briefing", "Load Sheet", "Fuel Check", "Cabin Ready"]}
          index={step}
          behavior="wrap"
          onChange={setStep}
          size="md"
          anim="slide"
        />
      </div>
    </div>
  );
}

// simple render helper for manual smoke testing
export function renderAshwoodSmoke() {
  return <AshwoodSmoke />;
}
