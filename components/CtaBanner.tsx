import { site } from "@/lib/site.config";

export default function CtaBanner() {
  const whatsappUrl = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=Bonjour%20ORA,%20je%20souhaite%20des%20renseignements%20sur%20vos%20solutions`
    : "#contact";

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact-card">
          <div>
            <h2 id="contact-title">Échanger avec un conseiller ORA</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              Que vous souhaitiez démarrer votre essai gratuit du logiciel ou évaluer la prise en charge complète de votre élevage au {site.countries}, notre équipe technique est disponible pour analyser vos besoins.
            </p>
          </div>

          <div className="contact-actions">
            <a className="btn btn-contact-light" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Contacter sur WhatsApp
            </a>
            <a className="btn btn-contact-ghost" href="mailto:contact@ora-elevage.com">
              Envoyer une demande par email
            </a>
          </div>

          <div className="contact-meta">
            <span>{site.trial} sur le logiciel</span>
            <span>·</span>
            <span>Sans engagement ni carte bancaire</span>
            <span>·</span>
            <span>Intervention technique au Togo et au Burkina Faso</span>
          </div>
        </div>
      </div>
    </section>
  );
}
