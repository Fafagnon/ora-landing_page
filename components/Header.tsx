"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site.config";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#logiciel", label: "Logiciel" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open ]);

  return (
    <header className="header" role="banner">
      <div className="wrap header__bar">
        <a href="#" className="header__brand" aria-label="ORA Groupe, retour en haut de page">
          <Image src="/logo-ora.png" alt="ORA Groupe" width={82} height={36} className="header__logo" priority />
        </a>

        <nav className="nav" aria-label="Navigation principale">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav__link">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a className="btn btn--primary btn--sm" href={site.appUrl}>Se connecter</a>

          <div className="menu" ref={menuRef}>
            <button
              type="button"
              className="menu__toggle"
              aria-expanded={open}
              aria-controls="menu-list"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="menu__bar" aria-hidden="true" />
              <span className="menu__bar" aria-hidden="true" />
              <span className="menu__bar" aria-hidden="true" />
            </button>
            {open && (
              <ul className="menu__list" id="menu-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="menu__link" onClick={() => setOpen(false)}>{link.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
