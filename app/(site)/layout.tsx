import type { ReactNode } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import RightRail from "@/components/RightRail";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[1200px] px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr_300px] gap-4">
          <Sidebar />
          <main className="space-y-4 min-w-0">{children}</main>
          <RightRail />
        </div>
        <footer className="text-center text-xs text-neutral-500 mt-8">© 2025 Endfield Lab</footer>
      </div>
    </>
  );
}