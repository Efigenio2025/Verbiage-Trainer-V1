import Head from "next/head";
import EmployeeApp from "../demo/index";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4b5563] to-[#6b7280] text-white">
      <Head>
        <title>EmployeeApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <EmployeeApp />
    </div>
  );
}
