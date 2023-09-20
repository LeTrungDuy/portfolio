import Navbar from "@/components/organism/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portfolio",
  description: "portfolio DuyLT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="portfolio-page">{children}</div>
      </body>
    </html>
  );
}
