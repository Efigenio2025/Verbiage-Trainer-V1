import { type ReactNode, useState } from "react";
import Head from "next/head";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  IdCard,
  LogOut,
  Plane,
  Shield,
  TrendingDown,
  TrendingUp,
  Type,
  User,
} from "lucide-react";

const card = "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Category = "All" | "Phonetic" | "De-ice" | "Movement";
type ModuleCategory = Exclude<Category, "All">;

type Module = {
  id: string;
  name: string;
  category: ModuleCategory;
  description: string;
  progress: number;
  icon: LucideIcon;
};

type View = "login" | "home" | "library" | "profile" | "detail";
type PrimaryView = "home" | "library" | "profile";

const trainingModules: Module[] = [
  {
    id: "phonetic",
    name: "Phonetic Alphabet",
    category: "Phonetic",
    description: "NATO letters A–Z drills",
    progress: 0.6,
    icon: Type,
  },
  {
    id: "deice",
    name: "De-ice Verbiage",
    category: "De-ice",
    description: "Callouts & confirmations",
    progress: 0.35,
    icon: BookOpen,
  },
  {
    id: "movement",
    name: "Aircraft Movement",
    category: "Movement",
    description: "Tow & Pushback wording",
    progress: 0.1,
    icon: Plane,
  },
];

export default function EmployeeAppPage() {
  return (
    <>
      <Head>
        <title>EmployeeApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <EmployeeApp />
    </>
  );
}

function EmployeeApp() {
  const [view, setView] = useState<View>("login");
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const showBottomBar = view === "home" || view === "library" || view === "profile";

  const handleNavigate = (next: PrimaryView) => {
    setSelectedModule(null);
    setView(next);
  };

  let content: JSX.Element | null = null;

  if (view === "login") {
    content = (
      <LoginScreen
        onLogin={() => {
          setSelectedModule(null);
          setView("home");
        }}
      />
    );
  }

  if (view === "home") {
    content = <EmployeeDashboardHome />;
  }

  if (view === "library") {
    content = (
      <TrainingLibrary
        onBack={() => handleNavigate("home")}
        onOpen={(module) => {
          setSelectedModule(module);
          setView("detail");
        }}
      />
    );
  }

  if (view === "profile") {
    content = <ProfileScreen onBack={() => handleNavigate("home")} />;
  }

  if (view === "detail" && selectedModule) {
    content = (
      <TrainingDetail
        module={selectedModule}
        onBack={() => {
          setView("library");
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4b5563] to-[#6b7280] text-white">
      <div
        className={cn(
          "mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8",
          showBottomBar ? "pb-32" : "pb-12"
        )}
      >
        {content}
      </div>
      {showBottomBar && (
        <BottomBar view={view as PrimaryView} onChange={handleNavigate} />
      )}
    </div>
  );
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-1 flex-col items-center justify-center space-y-10">
        <div className="flex flex-col items-center space-y-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
            <Shield className="h-8 w-8" aria-hidden="true" />
          </div>
          <div className="space-y-1 text-center">
            <h1 className="text-xl font-semibold">Piedmont Ops Training</h1>
            <p className="text-sm text-white/80">
              Employee login to practice critical verbiage
            </p>
          </div>
        </div>
        <div className={cn(card, "w-full space-y-5 p-6")}> 
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/90" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@airline.com"
              className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/70"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/90" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/70"
            />
          </div>
          <button
            type="button"
            onClick={onLogin}
            className="h-12 w-full rounded-xl border border-white/15 bg-white/20 text-sm font-semibold transition-transform active:scale-95"
          >
            Login
          </button>
        </div>
      </div>
      <p className="mt-12 text-center text-xs text-white/70">
        By continuing you agree to company training policies.
      </p>
    </div>
  );
}

function EmployeeDashboardHome() {
  return (
    <div className="flex flex-1 flex-col space-y-6">
      <header className="space-y-1 text-center">
        <p className="text-xs text-white/70">Welcome back</p>
        <h2 className="text-lg font-semibold">Employee Dashboard</h2>
      </header>
      <Section title="Assigned Training">
        <div className="space-y-3 text-sm">
          <AssignedRow title="De-ice Verbiage – Level 1" due="Due Fri" />
          <AssignedRow title="Phonetic Alphabet – Accuracy" due="Due Today" />
          <AssignedRow title="Aircraft Movement – Tow & Push" due="Due Mon" />
        </div>
      </Section>
      <Section title="Recent Scores">
        <div className="space-y-3 text-sm">
          <ScoreRow label="De-ice Callouts Drill" score="92%" when="Yesterday 14:20" />
          <ScoreRow label="Phonetic Alphabet Speed" score="88%" when="2 days ago" />
          <ScoreRow label="Pushback Script" score="95%" when="Last week" />
        </div>
      </Section>
      <Section title="Personal Coaching Tips">
        <PersonalCoachingTips />
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-medium text-white/80">{title}</h3>
      <div className={cn(card, "p-4", className)}>{children}</div>
    </section>
  );
}

function AssignedRow({ title, due }: { title: string; due: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="font-medium text-white">{title}</span>
      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
        {due}
      </span>
    </div>
  );
}

function ScoreRow({
  label,
  score,
  when,
}: {
  label: string;
  score: string;
  when: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-medium text-white">{label}</p>
        <p className="text-xs text-white/70">{when}</p>
      </div>
      <span className="text-sm font-semibold text-white">{score}</span>
    </div>
  );
}

function PersonalCoachingTips() {
  const sessions = [
    { module: "Phonetic Alphabet", accuracy: 86, responseSec: 4.4 },
    { module: "De-ice Callouts", accuracy: 90, responseSec: 4.7 },
    { module: "Pushback Script", accuracy: 92, responseSec: 4.5 },
  ];

  const latest = sessions[0];
  const oldest = sessions[sessions.length - 1];
  const accuracyDelta = latest.accuracy - oldest.accuracy;
  const responseDelta = latest.responseSec - oldest.responseSec;

  const accuracyIcon =
    accuracyDelta > 0 ? TrendingUp : accuracyDelta < 0 ? TrendingDown : Activity;
  const accuracyText =
    accuracyDelta > 0
      ? `Accuracy trending up (+${accuracyDelta.toFixed(0)} pts) — reinforce correct phrasing.`
      : accuracyDelta < 0
      ? `Accuracy dipping (${accuracyDelta.toFixed(0)} pts) — review key callouts.`
      : `Accuracy holding steady at ${latest.accuracy}% — keep reps consistent.`;

  const responseImproving = responseDelta < 0;
  const responseIcon = responseImproving
    ? TrendingUp
    : responseDelta > 0
    ? TrendingDown
    : Activity;
  const responseText = responseImproving
    ? `Getting faster (${Math.abs(responseDelta).toFixed(1)} s quicker) — great pacing.`
    : responseDelta > 0
    ? `Responses slower (+${responseDelta.toFixed(1)} s) — rebuild cadence.`
    : `Response speed steady (${latest.responseSec.toFixed(1)} s) — maintain rhythm.`;

  const focusText = `Focus next on ${latest.module} — convert gains into certified performance.`;

  const tips = [
    { icon: accuracyIcon, text: accuracyText },
    { icon: responseIcon, text: responseText },
    { icon: Activity, text: focusText },
  ];

  return (
    <ul className="space-y-3 text-sm text-white/80">
      {tips.map((tip, index) => {
        const Icon = tip.icon;
        return (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-0.5 rounded-lg bg-white/10 p-1">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="leading-5">{tip.text}</span>
          </li>
        );
      })}
    </ul>
  );
}

function TrainingLibrary({
  onBack,
  onOpen,
}: {
  onBack: () => void;
  onOpen: (module: Module) => void;
}) {
  const [filter, setFilter] = useState<Category>("All");

  const modules =
    filter === "All"
      ? trainingModules
      : trainingModules.filter((module) => module.category === filter);

  return (
    <div className="flex flex-1 flex-col space-y-6">
      <header className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to home"
          className="rounded-xl border border-white/15 bg-white/10 p-2"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <h2 className="flex-1 text-center text-lg font-semibold">
          Training Library
        </h2>
        <span className="w-9" />
      </header>
      <FilterChips value={filter} onChange={setFilter} />
      <div className="space-y-4">
        {modules.map((module) => (
          <ModuleCard key={module.id} m={module} onOpen={onOpen} />
        ))}
      </div>
      {modules.length === 0 && (
        <div className={cn(card, "p-4 text-sm text-white/70")}>No results for this filter.</div>
      )}
    </div>
  );
}

function FilterChips({
  value,
  onChange,
}: {
  value: Category;
  onChange: (value: Category) => void;
}) {
  const chips: Category[] = ["All", "Phonetic", "De-ice", "Movement"];
  return (
    <div className="-mx-2 flex gap-2 overflow-x-auto px-2 pb-1">
      {chips.map((chip) => {
        const active = chip === value;
        return (
          <button
            key={chip}
            type="button"
            onClick={() => onChange(chip)}
            className={cn(
              "whitespace-nowrap rounded-full px-4 py-2 text-sm transition",
              active ? "bg-white/25 text-white" : "bg-white/10 text-white/80"
            )}
          >
            {chip}
          </button>
        );
      })}
    </div>
  );
}

function ModuleCard({
  m,
  onOpen,
}: {
  m: Module;
  onOpen: (module: Module) => void;
}) {
  const Icon = m.icon;
  return (
    <button
      type="button"
      onClick={() => onOpen(m)}
      className={cn(
        card,
        "w-full space-y-4 p-4 text-left transition hover:bg-white/10"
      )}
      aria-label={`Open ${m.name}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="rounded-xl bg-white/10 p-2">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="space-y-1">
            <p className="font-semibold text-white">{m.name}</p>
            <p className="text-sm text-white/70">{m.description}</p>
          </div>
        </div>
        <span className="text-sm text-white/70">{Math.round(m.progress * 100)}%</span>
      </div>
      <ProgressBar value={m.progress} />
    </button>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-white/70"
        style={{ width: `${Math.min(100, Math.max(0, Math.round(value * 100)))}%` }}
      />
    </div>
  );
}

function ProfileScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-1 flex-col space-y-6">
      <header className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to home"
          className="rounded-xl border border-white/15 bg-white/10 p-2"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <h2 className="flex-1 text-center text-lg font-semibold">Profile</h2>
        <span className="w-9" />
      </header>
      <div
        className={cn(
          card,
          "flex items-center justify-between gap-4 p-4"
        )}
      >
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-white/10 p-2">
            <User className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-semibold text-white">Employee Name</p>
            <p className="text-sm text-white/70">Ramp Operations • OMA</p>
          </div>
        </div>
        <span className="rounded-xl bg-white/10 p-2">
          <IdCard className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-white/80">Badges</h3>
        <div className="flex flex-wrap gap-2">
          {["De-ice Pro", "Phonetic Sprinter", "Safety First"].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
            >
              <BadgeCheck className="h-3 w-3" aria-hidden="true" />
              {badge}
            </span>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-white/80">Certifications</h3>
        <div className={cn(card, "space-y-3 p-4")}> 
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-medium text-white">De-ice Procedures</p>
              <p className="text-xs text-white/70">Valid • 2026-02</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-medium text-white">Aircraft Movement</p>
              <p className="text-xs text-white/70">Valid • 2025-12</p>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-white/80">Preferences</h3>
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 text-sm font-semibold text-white transition-transform active:scale-95"
        >
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Sign out
        </button>
      </section>
    </div>
  );
}

function TrainingDetail({
  module,
  onBack,
}: {
  module: Module;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col space-y-6">
      <header className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to library"
          className="rounded-xl border border-white/15 bg-white/10 p-2"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <h2 className="flex-1 text-center text-lg font-semibold">{module.name}</h2>
        <span className="w-9" />
      </header>
      <div className={cn(card, "space-y-3 p-5")}> 
        <h3 className="text-sm font-medium text-white/80">Training Detail</h3>
        <p className="text-sm text-white/70">
          Coming soon: choose level and start/resume.
        </p>
      </div>
    </div>
  );
}

function BottomBar({
  view,
  onChange,
}: {
  view: PrimaryView;
  onChange: (view: PrimaryView) => void;
}) {
  const items: Array<{ key: PrimaryView; label: string; icon: LucideIcon }> = [
    { key: "home", label: "Home", icon: User },
    { key: "library", label: "Library", icon: BookOpen },
    { key: "profile", label: "Profile", icon: IdCard },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="pointer-events-none fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className={cn(card, "pointer-events-auto flex w-full max-w-md items-center gap-2 px-2 py-2")}> 
        {items.map((item) => {
          const active = item.key === view;
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onChange(item.key)}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition", 
                active ? "bg-white/20 text-white" : "text-white/80"
              )}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
