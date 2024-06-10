"use client";
import { useEffect, useRef } from "react";
import "./index.scss";

const Cursor = () => {
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorInner = cursorInnerRef.current;
    const cursorOuter = cursorOuterRef.current;

    if (!cursorInner || !cursorOuter) return;

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (event: MouseEvent) => {
      if (!isHovering) {
        cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
      cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseEnter = () => {
      cursorInner.classList.add("cursor-hover");
      cursorOuter.classList.add("cursor-hover");
    };

    const handleMouseLeave = () => {
      cursorInner.classList.remove("cursor-hover");
      cursorOuter.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a, button, .cursor-pointer").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button, .cursor-pointer").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-inner" ref={cursorInnerRef}></div>
      <div className="mouse-cursor cursor-outer" ref={cursorOuterRef}></div>
    </>
  );
};

export default Cursor;
