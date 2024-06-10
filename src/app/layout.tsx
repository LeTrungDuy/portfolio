import Navbar from "@/components/organism/navbar";
import Preloader from "@/components/organism/preloader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./animation.css";
import "./layout.scss";
import Cursor from "@/components/atom/cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LTD",
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
        <Preloader />
        <Navbar />
        <div className="portfolio-page">
          <div className="portfolio-page__content">{children}</div>
        </div>
        <Cursor />
      </body>
    </html>
  );
}
