import { site } from "@/lib/site.config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <span className="footer__name">{site.name}</span>
          <p className="footer__sub">
            Logiciel d&apos;élevage avicole et gestion déléguée d&apos;exploitation agricole.
          </p>
        </div>

        <div className="footer__locations">
          <p>
            <strong>Togo :</strong> Lomé · Assistance et suivi d&apos;exploitation
          </p>
          <p>
            <strong>Burkina Faso :</strong> Ouagadougou · Équipes techniques de terrain
          </p>
        </div>

        <div style={{ fontSize: "0.85rem", color: "var(--ink-muted)" }}>
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
