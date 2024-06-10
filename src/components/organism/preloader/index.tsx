"use client";

import { useEffect, useState } from "react";
import "./index.scss";

const Preloader = () => {
  const [isPreloaded, setIsPreloaded] = useState(false);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    );

    if (!isMobile) {
      setTimeout(() => {
        setIsPreloaded(true);
      }, 800);
      setTimeout(() => {
        setIsPreloaded(false);
      }, 2000);
    } else {
      setIsPreloaded(false);
    }
  }, []);
  return (
    <>
      {isPreloaded && (
        <div id="preloader" className="preloaded">
          <div className="loader_line"></div>
        </div>
      )}
    </>
  );
};

export default Preloader;
