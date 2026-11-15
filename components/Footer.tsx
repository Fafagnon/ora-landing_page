import Image from "next/image";
import { site } from "@/lib/site.config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#" aria-label="ORA Groupe, retour en haut de page">
              <Image src="/logo-ora.png" alt="ORA Groupe" width={92} height={40} className="footer__logo" />
            </a>
            <p>
              Entreprise de gestion de projets agricoles. Conseil, études, gestion d&apos;exploitations et formation, et le logiciel de suivi utilisé par nos équipes.
            </p>
          </div>

          <div>
            <h3 className="footer__title">Navigation</h3>
            <ul className="footer__list">
              <li><a href="#services">Nos services</a></li>
              <li><a href="#logiciel">Logiciel</a></li>
              <li><a href="#tarifs">Tarifs et comparatif</a></li>
              <li><a href="#contact">Demander un essai ou un service</a></li>
              {site.appUrl ? <li><a href={site.appUrl}>Espace client</a></li> : null}
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__list footer__list--contact">
              <li>
                <span>Siège</span>
                <span>Ouagadougou, Burkina Faso</span>
              </li>
              <li>
                <span>Téléphone</span>
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
