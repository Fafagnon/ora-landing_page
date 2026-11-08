import Image from "next/image";
import { site } from "@/lib/site.config";

const navLinks = [
  { href: "#logiciel", label: "Logiciel" },
  { href: "#gestion", label: "Gestion déléguée" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="wrap header__bar">
        <a href="#" className="header__brand" aria-label="ORA, retour en haut de page">
          <Image src="/logo-ora.png" alt="ORA" width={82} height={36} className="header__logo" priority />
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
          {site.appUrl ? (
            <a className="header__login" href={site.appUrl}>Se connecter</a>
          ) : null}
          <a className="btn btn--primary btn--sm" href="#contact">Essai gratuit</a>

          <details className="menu">
            <summary className="menu__toggle">Menu</summary>
            <ul className="menu__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="menu__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </header>
  );
}
