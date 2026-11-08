import Image from "next/image";
import { site } from "@/lib/site.config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#" aria-label="ORA, retour en haut de page">
              <Image src="/logo-ora.png" alt="ORA" width={92} height={40} className="footer__logo" />
            </a>
            <p>
              Cabinet de conseil et de gestion d&apos;élevage au Togo et au Burkina Faso. Logiciel de suivi et gestion déléguée pour exploitations avicoles et agricoles.
            </p>
          </div>

          <div>
            <h3 className="footer__title">Navigation</h3>
            <ul className="footer__list">
              <li><a href="#logiciel">Logiciel</a></li>
              <li><a href="#gestion">Gestion déléguée</a></li>
              <li><a href="#tarifs">Tarifs et comparatif</a></li>
              <li><a href="#contact">Demander un essai</a></li>
              {site.appUrl ? <li><a href={site.appUrl}>Espace client</a></li> : null}
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__list footer__list--contact">
              <li>
                <span>Togo</span>
                <a href={`tel:${site.phoneTogo.replace(/\s+/g, "")}`}>{site.phoneTogo}</a>
              </li>
              <li>
                <span>Burkina Faso</span>
                <a href={`tel:${site.phoneBurkina.replace(/\s+/g, "")}`}>{site.phoneBurkina}</a>
              </li>
              <li>
                <span>E-mail</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} {site.name}. Tous droits réservés.</p>
          <p className="footer__legal">
            <a href="#">Conditions d&apos;utilisation</a>
            <a href="#">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
