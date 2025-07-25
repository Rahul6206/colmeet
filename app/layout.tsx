import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ContextClearkProvider from "@/components/Provider/ContextClearkProvider";
import "./globals.css";


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
    <html lang="en"  crosspilot="true">
      <body >
        {children}
      </body>
    </html>
    </ContextClearkProvider>
  );
}
