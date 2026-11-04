import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site.config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-dark" role="contentinfo">
      <div className="wrap">
        <div className="footer-dark__grid">
          {/* Colonne 1 : Marque & Mission */}
          <div className="footer-dark__brand">
            <Link href="#" className="footer-dark__logo-link" aria-label="ORA, retour en haut de page">
              <Image
                src="/logo-ora.png"
                alt="ORA"
                width={120}
                height={38}
                className="footer-dark__logo"
              />
            </Link>
            <p className="footer-dark__desc">
              Cabinet de conseil et de gestion d&apos;élevage au Togo et au Burkina Faso. Solutions logicielles terrain et gestion déléguée pour exploitations avicoles et agricoles.
            </p>
            <div className="footer-dark__cities">
              <span className="footer-dark__city-badge">Lomé, Togo</span>
              <span className="footer-dark__city-badge">Ouagadougou, Burkina Faso</span>
            </div>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div className="footer-dark__nav">
            <h3 className="footer-dark__col-title">Navigation</h3>
            <ul className="footer-dark__links">
              <li>
                <a href="#solutions" className="footer-dark__link">Solutions d&apos;élevage</a>
              </li>
              <li>
                <a href="#tarifs" className="footer-dark__link">Tarifs et comparatif</a>
              </li>
              <li>
                <a href="#contact" className="footer-dark__link">Demander un essai gratuit</a>
              </li>
              <li>
                <a href={site.appUrl || "#"} className="footer-dark__link">Espace client</a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact direct */}
          <div className="footer-dark__contact">
            <h3 className="footer-dark__col-title">Contact</h3>
            <ul className="footer-dark__contact-list">
              <li>
                <span className="footer-dark__contact-label">Togo :</span>
                <a href={`tel:${site.phoneTogo.replace(/\s+/g, "")}`} className="footer-dark__contact-val">
                  {site.phoneTogo}
                </a>
              </li>
              <li>
                <span className="footer-dark__contact-label">Burkina Faso :</span>
                <a href={`tel:${site.phoneBurkina.replace(/\s+/g, "")}`} className="footer-dark__contact-val">
                  {site.phoneBurkina}
                </a>
              </li>
              <li className="footer-dark__email-item">
                <span className="footer-dark__contact-label">E-mail :</span>
                <a href={`mailto:${site.email}`} className="footer-dark__contact-val">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre inférieure : Mentions légales et copyright */}
        <div className="footer-dark__bottom">
          <p className="footer-dark__copy">
            © {currentYear} {site.name}. Tous droits réservés.
          </p>

          <div className="footer-dark__legal">
            <a href="#" className="footer-dark__legal-link">
              Conditions d&apos;utilisation
            </a>
            <span className="footer-dark__legal-sep" aria-hidden="true">·</span>
            <a href="#" className="footer-dark__legal-link">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
