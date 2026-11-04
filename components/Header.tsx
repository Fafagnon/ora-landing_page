import Image from "next/image";
import { site } from "@/lib/site.config";

const links = [
  { href: "#formules", label: "Formules" },
  { href: "#video", label: "Présentation" },
  { href: "#logiciel", label: "Écrans du logiciel" },
  { href: "#comparatif", label: "Comparatif" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__bar">
        <a href="#" className="header__brand" aria-label="ORA, retour au début">
          <Image src="/logo-ora.png" alt="ORA" width={110} height={40} className="header__logo" priority />
          <span className="header__location">Togo · Burkina Faso</span>
        </a>

        <nav className="nav" aria-label="Navigation principale">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a className="btn btn-primary btn-sm" href="#contact">
            Essai 1 mois gratuit
          </a>
        </div>
      </div>
    </header>
  );
}
