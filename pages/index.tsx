import Head from "next/head";
import EmployeeApp from "../demo/index";

export default function HomePage() {
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
