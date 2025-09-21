import * as React from "react";
import {
  Activity,
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  IdCard,
  LogOut,
  Plane,
  TrendingDown,
  TrendingUp,
  Type,
  UserIcon
} from "lucide-react";

export type ViewState = "login" | "home" | "library" | "profile" | "detail";
type PrimaryView = "home" | "library" | "profile";

type ModuleCategory = "Phonetic" | "De-ice" | "Movement";
type ModuleFilter = "All" | ModuleCategory;

type Module = {
  id: string;
  name: string;
  category: ModuleCategory;
  description: string;
  progress: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const card = "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-white/80">{title}</h2>
      </div>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

type AssignedRowProps = {
  title: string;
  due: string;
};

function AssignedRow({ title, due }: AssignedRowProps) {
  return (
    <div className={cn(card, "flex items-center justify-between px-4 py-3 text-sm text-white/90")}> 
      <div className="font-medium">{title}</div>
      <div className="text-xs text-white/70">Due {due}</div>
    </div>
  );
}

type ScoreRowProps = {
  label: string;
  score: string;
  when: string;
};

function ScoreRow({ label, score, when }: ScoreRowProps) {
  return (
    <div className={cn(card, "flex flex-col gap-1 px-4 py-3 text-sm text-white/90")}> 
      <div className="flex items-center justify-between">
        <span className="font-medium">{label}</span>
        <span className="text-base font-semibold text-white">{score}</span>
      </div>
      <span className="text-xs text-white/60">{when}</span>
    </div>
  );
}

function formatPointDelta(value: number) {
  const rounded = Math.round(value);
  const sign = rounded > 0 ? "+" : "";
  return `${sign}${rounded} pts`;
}

function formatSecondDelta(value: number) {
  const absolute = Math.abs(value);
  const formatted = absolute.toFixed(1).replace(/\.0$/, "");
  return `${formatted}s`;
}

type TrendItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
};

function PersonalCoachingTips() {
  const sessions = [
    { module: "Phonetic Alphabet", accuracy: 86, responseSec: 4.4 },
    { module: "De-ice Callouts", accuracy: 90, responseSec: 4.7 },
    { module: "Pushback Script", accuracy: 92, responseSec: 4.5 }
  ];

  const accuracyDelta = sessions[0].accuracy - sessions[1].accuracy;
  const longAccuracyDelta = sessions[0].accuracy - sessions[2].accuracy;
  const responseDelta = sessions[0].responseSec - sessions[1].responseSec;

  const accuracyIcon = accuracyDelta > 0 ? TrendingUp : accuracyDelta < 0 ? TrendingDown : Activity;
  const responseIcon = responseDelta < 0 ? TrendingUp : responseDelta > 0 ? TrendingDown : Activity;
  const longIcon = longAccuracyDelta > 0 ? TrendingUp : longAccuracyDelta < 0 ? TrendingDown : Activity;

  const tips: TrendItem[] = [
    {
      icon: accuracyIcon,
      text:
        accuracyDelta > 0
          ? `Accuracy trending up (${formatPointDelta(accuracyDelta)}) — keep reinforcing correct phrasing.`
          : accuracyDelta < 0
          ? `Accuracy dipped (${formatPointDelta(accuracyDelta)}) — refresh the tricky callouts.`
          : "Accuracy holding steady — stay consistent with your scripts."
    },
    {
      icon: responseIcon,
      text:
        responseDelta < 0
          ? `Getting faster (${formatSecondDelta(responseDelta)} quicker) — nice pacing on callouts.`
          : responseDelta > 0
          ? `Responses slowing (${formatSecondDelta(responseDelta)} longer) — tighten cues to stay sharp.`
          : "Response timing steady — maintain the current cadence."
    },
    {
      icon: Activity,
      text: `Focus next on ${sessions[0].module} to lock in confident delivery.`
    }
  ];

  if (longAccuracyDelta !== 0) {
    tips.push({
      icon: longIcon,
      text:
        longAccuracyDelta > 0
          ? `Overall gain of ${formatPointDelta(longAccuracyDelta)} since ${sessions[2].module} — momentum is building.`
          : `Down ${Math.abs(Math.round(longAccuracyDelta))} pts compared with ${sessions[2].module} — revisit the fundamentals.`
    });
  }

  return (
    <div className={cn(card, "space-y-3 px-4 py-4 text-sm text-white/85")}>
      <h3 className="text-sm font-semibold text-white">Personal Coaching Tips</h3>
      <ul className="space-y-3">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <li key={index} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-4 w-4 text-white/80" aria-hidden="true" />
              <span>{tip.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type FilterChipsProps = {
  value: ModuleFilter;
  onChange: (value: ModuleFilter) => void;
};

const filters: ModuleFilter[] = ["All", "Phonetic", "De-ice", "Movement"];

function FilterChips({ value, onChange }: FilterChipsProps) {
  return (
    <div className="overflow-x-auto pb-1">
      <div className="flex gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={cn(
              "whitespace-nowrap rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium transition",
              value === filter ? "bg-white/20 text-white" : "text-white/75 hover:bg-white/10"
            )}
            aria-pressed={value === filter}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

type ProgressBarProps = {
  value: number;
};

function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="h-[2px] w-full rounded-full bg-white/10">
      <div className="h-full rounded-full bg-white/70" style={{ width: `${value}%` }} />
    </div>
  );
}

type ModuleCardProps = {
  m: Module;
  onOpen: (module: Module) => void;
};

function ModuleCard({ m, onOpen }: ModuleCardProps) {
  const Icon = m.icon;
  return (
    <button
      type="button"
      onClick={() => onOpen(m)}
      className={cn(
        card,
        "flex w-full items-center gap-4 px-4 py-4 text-left text-white/90 transition hover:bg-white/10"
      )}
    >
      <Icon className="h-10 w-10 text-white" aria-hidden="true" />
      <div className="flex flex-1 flex-col gap-2">
        <div>
          <div className="text-base font-semibold text-white">{m.name}</div>
          <p className="text-xs text-white/70">{m.description}</p>
        </div>
        <ProgressBar value={m.progress} />
      </div>
      <span className="text-xs font-medium text-white/70">{m.progress}%</span>
    </button>
  );
}

type EmployeeLoginProps = {
  onLogin: () => void;
};

function EmployeeLogin({ onLogin }: EmployeeLoginProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [touched, setTouched] = React.useState(false);

  const hasEmailError = touched && email.trim().length === 0;
  const hasPasswordError = touched && password.trim().length === 0;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim() && password.trim()) {
      onLogin();
      return;
    }
    setTouched(true);
  };

  const emailErrorId = hasEmailError ? "login-email-error" : undefined;
  const passwordErrorId = hasPasswordError ? "login-password-error" : undefined;

  return (
    <div className="flex flex-1 flex-col justify-center gap-8 pb-16 pt-12">
      <div className="flex flex-col items-center gap-4 text-center text-white">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <UserIcon className="h-8 w-8" aria-hidden="true" />
        </div>
        <h1 className="text-lg font-semibold">Employee Login</h1>
      </div>

      <form
        className={cn(card, "space-y-4 px-5 py-6 text-white/90")}
        onSubmit={handleSubmit}
        aria-label="Employee login form"
      >
        <div className="space-y-1">
          <label className="text-xs font-medium text-white/70" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={cn(
              "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40",
              hasEmailError && "border-red-400/70"
            )}
            placeholder="you@example.com"
            aria-invalid={hasEmailError || undefined}
            aria-describedby={emailErrorId}
            autoComplete="email"
          />
          {hasEmailError && (
            <p id={emailErrorId} className="text-xs text-red-200">
              Enter your email to continue.
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-white/70" htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={cn(
              "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40",
              hasPasswordError && "border-red-400/70"
            )}
            placeholder="••••••••"
            aria-invalid={hasPasswordError || undefined}
            aria-describedby={passwordErrorId}
            autoComplete="current-password"
          />
          {hasPasswordError && (
            <p id={passwordErrorId} className="text-xs text-red-200">
              Enter your password to continue.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-xl border border-white/15 bg-white/20 px-4 py-3 text-sm font-medium text-white transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          Login
        </button>

        <button
          type="button"
          className="text-center text-xs font-medium text-white/70 hover:text-white/90"
        >
          Forgot password?
        </button>
      </form>
    </div>
  );
}

type BottomBarProps = {
  view: PrimaryView;
  onChange: (view: PrimaryView) => void;
};

const bottomTabs: Array<{ key: PrimaryView; label: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }> = [
  { key: "home", label: "Home", icon: UserIcon },
  { key: "library", label: "Library", icon: BookOpen },
  { key: "profile", label: "Profile", icon: IdCard }
];

function BottomBar({ view, onChange }: BottomBarProps) {
  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="pointer-events-auto fixed inset-x-0 bottom-4 flex justify-center px-4"
    >
      <div className="w-full max-w-[420px] rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
        <div className="grid grid-cols-3 gap-1">
          {bottomTabs.map(({ key, label, icon: Icon }) => {
            const active = view === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => onChange(key)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition",
                  active ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10"
                )}
                aria-label={label}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function EmployeeDashboardHome() {
  return (
    <div className="space-y-6 pb-6">
      <header className="text-center">
        <p className="text-xs text-white/70">Welcome back</p>
        <h1 className="text-lg font-semibold text-white">Employee Dashboard</h1>
      </header>

      <Section title="Assigned Training">
        <AssignedRow title="De-ice Verbiage – Level 1" due="Fri" />
        <AssignedRow title="Phonetic Alphabet – Accuracy" due="Today" />
        <AssignedRow title="Aircraft Movement – Tow & Push" due="Mon" />
      </Section>

      <Section title="Recent Scores">
        <ScoreRow label="De-ice Callouts Drill" score="92%" when="Yesterday 14:20" />
        <ScoreRow label="Phonetic Alphabet Speed" score="88%" when="2 days ago" />
        <ScoreRow label="Pushback Script" score="95%" when="Last week" />
      </Section>

      <PersonalCoachingTips />
    </div>
  );
}

type TrainingLibraryProps = {
  modules: Module[];
  onBack: () => void;
  onOpenModule: (module: Module) => void;
};

function TrainingLibrary({ modules, onBack, onOpenModule }: TrainingLibraryProps) {
  const [filter, setFilter] = React.useState<ModuleFilter>("All");

  const visibleModules = React.useMemo(
    () => (filter === "All" ? modules : modules.filter((m) => m.category === filter)),
    [filter, modules]
  );

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5"
          aria-label="Back to home"
        >
          <ArrowLeft className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
        <h1 className="text-lg font-semibold text-white">Training Library</h1>
      </div>

      <FilterChips value={filter} onChange={setFilter} />

      <div className="space-y-3">
        {visibleModules.map((module) => (
          <ModuleCard key={module.id} m={module} onOpen={onOpenModule} />
        ))}
      </div>
    </div>
  );
}

type ProfileScreenProps = {
  onBack: () => void;
};

function ProfileScreen({ onBack }: ProfileScreenProps) {
  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5"
          aria-label="Back to home"
        >
          <ArrowLeft className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
        <h1 className="text-lg font-semibold text-white">Profile</h1>
      </div>

      <div className={cn(card, "flex items-center gap-4 px-4 py-4")}> 
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <UserIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <div className="text-base font-semibold text-white">Employee Name</div>
          <div className="text-xs text-white/70">Ramp Operations • OMA</div>
        </div>
        <IdCard className="h-6 w-6 text-white/80" aria-hidden="true" />
      </div>

      <div className={cn(card, "px-4 py-4")}> 
        <h2 className="text-sm font-semibold text-white">Badges</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {["De-ice Pro", "Phonetic Sprinter", "Safety First"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              <BadgeCheck className="h-4 w-4 text-white" aria-hidden="true" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={cn(card, "space-y-3 px-4 py-4")}> 
        <h2 className="text-sm font-semibold text-white">Certifications</h2>
        <div className="space-y-3 text-sm text-white/85">
          <div className="flex items-center justify-between">
            <span>De-ice Procedures</span>
            <span className="text-xs text-white/60">Valid • 2026-02</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Aircraft Movement</span>
            <span className="text-xs text-white/60">Valid • 2025-12</span>
          </div>
        </div>
      </div>

      <div className={cn(card, "px-4 py-4")}> 
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Sign out
        </button>
      </div>
    </div>
  );
}

type TrainingDetailProps = {
  module: Module | null;
  onBack: () => void;
};

function TrainingDetail({ module, onBack }: TrainingDetailProps) {
  if (!module) {
    return null;
  }

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5"
          aria-label="Back to library"
        >
          <ArrowLeft className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
        <h1 className="text-lg font-semibold text-white">{module.name}</h1>
      </div>

      <div className={cn(card, "px-4 py-6 text-center text-sm text-white/80")}> 
        Coming soon: choose level and start/resume.
      </div>
    </div>
  );
}

const modules: Module[] = [
  {
    id: "phonetic",
    name: "Phonetic Alphabet",
    category: "Phonetic",
    description: "NATO letters A–Z drills",
    progress: 60,
    icon: Type
  },
  {
    id: "deice",
    name: "De-ice Verbiage",
    category: "De-ice",
    description: "Callouts & confirmations",
    progress: 35,
    icon: BookOpen
  },
  {
    id: "movement",
    name: "Aircraft Movement",
    category: "Movement",
    description: "Tow & Pushback wording",
    progress: 10,
    icon: Plane
  }
];

function isPrimaryView(view: ViewState): view is PrimaryView {
  return view === "home" || view === "library" || view === "profile";
}

export default function EmployeeApp() {
  const [view, setView] = React.useState<ViewState>("login");
  const [selectedModule, setSelectedModule] = React.useState<Module | null>(null);

  const handleNavigate = React.useCallback((next: ViewState) => {
    setView(next);
    if (next !== "detail") {
      setSelectedModule(null);
    }
  }, []);

  const openModule = React.useCallback((module: Module) => {
    setSelectedModule(module);
    setView("detail");
  }, []);

  const handleLogin = React.useCallback(() => {
    setView("home");
  }, []);

  const navigatePrimary = React.useCallback(
    (next: PrimaryView) => {
      handleNavigate(next);
    },
    [handleNavigate]
  );

  const showBottomBar = isPrimaryView(view);

  return (
    <div className="flex min-h-screen w-full justify-center bg-gradient-to-b from-[#4b5563] to-[#6b7280] text-white">
      <div className="relative flex min-h-screen w-full max-w-[430px] flex-col px-5 pb-24 pt-8">
        {view === "login" && <EmployeeLogin onLogin={handleLogin} />}
        {view === "home" && <EmployeeDashboardHome />}
        {view === "library" && (
          <TrainingLibrary modules={modules} onBack={() => handleNavigate("home")} onOpenModule={openModule} />
        )}
        {view === "profile" && <ProfileScreen onBack={() => handleNavigate("home")} />}
        {view === "detail" && (
          <TrainingDetail module={selectedModule} onBack={() => handleNavigate("library")} />
        )}

        {showBottomBar && <BottomBar view={view} onChange={navigatePrimary} />}
      </div>
    </div>
  );
}

export function renderEmployeeApp() {
  return <EmployeeApp />;
}