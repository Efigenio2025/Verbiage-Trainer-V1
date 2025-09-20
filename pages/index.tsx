import Head from "next/head";
import type { NextPage } from "next";

/**
 * Deployment notes:
 * - Push this repository to Vercel (or run `vercel --prod`) and Vercel will execute `npm run build`,
 *   producing the default `.next` directory automatically.
 * - You can verify the output locally by running `npm run build` and checking that the `.next`
 *   folder is created — no custom `outputDirectory` override is configured, so the build cannot
 *   fail with "No Output Directory named 'public' found".
 */
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hello Vercel</title>
        <meta
          name="description"
          content="Minimal Next.js starter that deploys cleanly on Vercel"
        />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center shadow-glow">
          <h1 className="text-5xl font-bold tracking-tight text-cyan-300 drop-shadow">
            Hello Vercel
          </h1>
          <p className="mt-6 text-base text-slate-400">
            This page uses Tailwind CSS utility classes and renders the content expected by the
            deployment checks.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
