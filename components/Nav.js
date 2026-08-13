"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoMark from "@/public/images/logo-mark.png";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/commercial", label: "Commercial" },
];

function handleHashNavClick(event, href, pathname) {
  const [path, hash] = href.split("#");
  if (!hash) return;
  const targetPath = path || "/";
  if (pathname === targetPath) {
    event.preventDefault();
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

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
            onClick={() => {
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setOpen(false);
            }}
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
                  onClick={(event) =>
                    handleHashNavClick(event, link.href, pathname)
                  }
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
                  onClick={(event) => {
                    handleHashNavClick(event, link.href, pathname);
                    setOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="btn btn-solid"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Request Assessment
          </Link>
        </div>
      </div>
    </header>
  );
}
