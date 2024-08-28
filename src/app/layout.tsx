import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

import { TopbarContextProviderWrapper } from "@/app/components/topbar/topbar";
import Home from "@/app/page"

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary">
      <body className={`${robotoCondensed.className}`}>
        <TopbarContextProviderWrapper>
          {children}
        </TopbarContextProviderWrapper>
      </body>
    </html>
  );
}
