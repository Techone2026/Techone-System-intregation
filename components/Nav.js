"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoMark from "@/public/images/logo-mark.png";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/commercial", label: "Commercial" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap">
        <nav>
          <Link
            className="logo"
            href="/"
            aria-label="TechOne Installers — Systems Integration"
          >
            <Image src={logoMark} alt="" className="logo-icon" priority />
            <span className="logo-text">
              <span className="logo-name">TECHONE INSTALLERS</span>
              <span className="logo-sub">SYSTEMS INTEGRATION</span>
            </span>
          </Link>
          <ul className="navlinks">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn-solid" href="/contact">
            Request Assessment
          </Link>
          <button
            type="button"
            className={`menu-toggle ${open ? "open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${open ? "open" : ""}`}>
        <div className="wrap">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
