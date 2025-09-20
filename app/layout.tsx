import type { ReactNode } from "react";
import "./globals.css";

export const metadata = { title: "Endfield Lab", description: "Endfield Lab site" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}