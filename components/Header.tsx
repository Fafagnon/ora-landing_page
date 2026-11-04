import Image from "next/image";

const navLinks = [
  { href: "#solutions", label: "Solutions" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="wrap header__bar">
        <a href="#" className="header__brand" aria-label="ORA, retour en haut de page">
          <Image
            src="/logo-ora.png"
            alt="ORA"
            width={110}
            height={36}
            className="header__logo"
            priority
          />
        </a>

        <nav className="nav" aria-label="Navigation principale">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__cta">
          <a className="header__btn" href="#contact">
            Demander un essai
          </a>
        </div>
      </div>
    </header>
  );
}
