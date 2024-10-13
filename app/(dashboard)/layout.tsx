import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "Created by Miguel Fortuna",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
