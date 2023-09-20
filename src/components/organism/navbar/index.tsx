"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NavItem from "@/components/atom/link";
import Avatar from "@/components/atom/avatar";
import Social from "@/components/molecules/social";
import Hambuger from "@/components/atom/hambuger";
import "./index.scss";

import logo from "../../../../public/images/logo.jpg";
import logoMobi from "../../../../public/images/logo-mobi.png";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Project", href: "/project" },
  { text: "Contact", href: "/contact" },
];

const SOCIAL_LIST = [
  { social: "facebook", href: "facebook.com" },
  { social: "linkedin", href: "linkedin.com" },
  { social: "telegram", href: "telegram.com" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const pathName = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const onOpenHambuger = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <header>
      <nav className="nav-portfolio">
        <Avatar imgUrl={logo} />
        <ul className="nav-portfolio__menu">
          {MENU_LIST.map((item) => (
            <li key={item.text} className="nav-portfolio__link">
              <NavItem
                href={item.href}
                text={item.text}
                active={pathName === item.href}
              />
            </li>
          ))}
        </ul>
        <div className="nav-portfolio__copy-right">
          <ul className="nav-portfolio__socials">
            {SOCIAL_LIST.map((item) => (
              <li key={item.social}>
                <Social href={item.href} iconName={item.social} />
              </li>
            ))}
          </ul>
          <span className="nav-portfolio__text">Copyright © 2023 DuyLT</span>
        </div>
      </nav>
      <div className="nav-portfolio-topbar">
        <div className="nav-portfolio-topbar__inner">
          <div className="nav-portfolio-topbar__logo">
            <Link href="/">
              <Image src={logoMobi} alt="logo-mobi" width={100} height={30} />
            </Link>
          </div>
          <div ref={ref} className="nav-portfolio-topbar__trigger">
            <div
              className={`nav-portfolio-topbar__hambuger ${open ? "open" : ""}`}
              onClick={onOpenHambuger}
            >
              <Hambuger active={open} />
            </div>
          </div>
        </div>
      </div>
      <nav className={`nav-portfolio-menumobi ${open ? "open" : ""}`}>
        <div className="nav-portfolio-menumobi__menu">
          <ul className="nav-portfolio-menumobi__list">
            {MENU_LIST.map((item) => (
              <li key={item.text} className="nav-portfolio__link">
                <NavItem
                  href={item.href}
                  text={item.text}
                  active={pathName === item.href}
                />
              </li>
            ))}
          </ul>
          <div className="nav-portfolio__copy-right">
            <ul className="nav-portfolio__socials">
              {SOCIAL_LIST.map((item) => (
                <li key={item.social}>
                  <Social href={item.href} iconName={item.social} />
                </li>
              ))}
            </ul>
            <span className="nav-portfolio__text">Copyright © 2023</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
