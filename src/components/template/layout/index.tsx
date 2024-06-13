"use client";

import Navbar from "@/components/organism/navbar";
import Preloader from "@/components/organism/preloader";
import Cursor from "@/components/atom/cursor";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isPreloaded, setIsPreloaded] = useState(true);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    );

    if (!isMobile) {
      setTimeout(() => {
        setIsPreloaded(false);
      }, 1300);
    } else {
      setIsPreloaded(false);
    }
  }, []);
  return (
    <>
      {isPreloaded ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <div className="portfolio-page">
            <div className="portfolio-page__content">{children}</div>
          </div>
          <Cursor />
        </>
      )}
    </>
  );
}
