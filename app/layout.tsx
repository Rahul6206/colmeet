import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ContextClearkProvider from "@/components/Provider/ContextClearkProvider";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/ThemProvider";
import Navebar from "@/components/ui/Navebar";

export const metadata: Metadata = {
  title: "ColMeet",
  description: "Video Conferencing interview platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextClearkProvider>
    <html lang="en"  suppressHydrationWarning>
      <body className="" >
      <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              <div className="min-h-screen">
                <Navebar />
                <main className="" >

              {children}
                </main>
              </div>
      </ThemeProvider>
      </body>
    </html>
    </ContextClearkProvider>
  );
}
// bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950