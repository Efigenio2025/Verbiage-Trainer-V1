import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";

import {
  hasAuthorizedUsersConfigured,
  isAuthorizedUser,
} from "@/config/authorizedUsers";

/**
 * Deployment notes:
 * - Push this repository to Vercel (or run `vercel --prod`) and Vercel will execute `npm run build`,
 *   producing the default `.next` directory automatically.
 * - You can verify the output locally by running `npm run build` and checking that the `.next`
 *   folder is created — no custom `outputDirectory` override is configured, so the build cannot
 *   fail with "No Output Directory named 'public' found".
 */
const Home: NextPage = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmployeeId = employeeId.trim();

    if (!trimmedEmployeeId) {
      setStatus("error");
      setFeedbackMessage("Enter your Ramp ID to request access.");
      return;
    }

    if (!hasAuthorizedUsersConfigured) {
      setStatus("error");
      setFeedbackMessage(
        "No authorized IDs are configured. Update NEXT_PUBLIC_AUTHORIZED_USERS to continue.",
      );
      return;
    }

    if (isAuthorizedUser(trimmedEmployeeId)) {
      setStatus("success");
      setFeedbackMessage(
        "Access granted! Launch the Verbiage Trainer to continue.",
      );
      return;
    }

    setStatus("error");
    setFeedbackMessage(
      "Employee ID " +
        trimmedEmployeeId +
        " is not authorized for the trainer.",
    );
  };

  return (
    <>
      <Head>
        <title>Ramp Verbiage trainer</title>
        <meta
          name="description"
          content="Authenticate with your Ramp employee ID to unlock the Verbiage Trainer experience."
        />
      </Head>
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1f2b] via-[#102c3c] to-[#1a516a] p-6 text-slate-100">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/10 blur-[180px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04)_0%,_rgba(255,255,255,0)_60%)]" />
        </div>
        <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-white/10 p-10 shadow-[0_30px_70px_-15px_rgba(12,40,60,0.55)] backdrop-blur-xl">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-200/70">Polar access</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white drop-shadow-sm">
              Ramp Verbiage trainer
            </h1>
            <p className="mt-3 text-sm text-slate-200/80">
              Sign in with your Ramp employee credentials to continue your verbal mastery journey.
            </p>
          </div>
          <form className="space-y-7" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="employeeId" className="block text-sm font-medium text-slate-100/80">
                Employee ID
              </label>
              <input
                id="employeeId"
                name="employeeId"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="username"
                required
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/50 shadow-inner focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="Enter your Ramp ID"
                value={employeeId}
                onChange={(event) => {
                  setEmployeeId(event.target.value);
                  setStatus("idle");
                }}
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-slate-100/80">
                  Polar password
                </label>
                <a
                  href="#"
                  className="text-xs font-medium text-cyan-200 transition hover:text-cyan-100"
                >
                  Forgot access?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/50 shadow-inner focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="••••••••"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setStatus("idle");
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 px-4 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_40px_-12px_rgba(15,70,90,0.65)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-200/60"
            >
              Enter Polar workspace
            </button>
            {status !== "idle" && (
              <p
                className={
                  "text-sm " +
                  (status === "success" ? "text-emerald-200" : "text-rose-200")
                }
                role="status"
                aria-live="polite"
              >
                {feedbackMessage}
              </p>
            )}
          </form>
          <p className="mt-10 text-center text-xs text-slate-200/70">
            Need help? Reach out in #polar-support for quick verification assistance.
          </p>
          {!hasAuthorizedUsersConfigured && (
            <p className="mt-3 text-center text-xs text-rose-200/80" role="alert">
              Configure allowed IDs via NEXT_PUBLIC_AUTHORIZED_USERS to enable access checks.
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
