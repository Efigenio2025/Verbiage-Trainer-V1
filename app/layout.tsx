import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polar Ops Dashboards",
  description: "Mobile glassmorphism dashboards for Employee, Manager, and Admin roles.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-gradient-to-b from-[#001B3A] via-[#012B5B] to-[#023D7A] text-white">
        {children}
      </body>
    </html>
  );
}
