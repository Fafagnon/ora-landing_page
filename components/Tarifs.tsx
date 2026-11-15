"use client";

import { site } from "@/lib/site.config";

const lignes = [
  { critere: "Profil visé", logiciel: "Éleveur ou gérant présent au quotidien", gestion: "Porteur de projet, propriétaire ou investisseur agricole" },
  { critere: "Temps requis", logiciel: "Une saisie quotidienne sur smartphone", gestion: "Aucun, nos équipes interviennent pour vous" },
  { critere: "Présence terrain", logiciel: "Assurée par vos soins au bâtiment", gestion: "Techniciens ORA Groupe sur votre exploitation" },
  { critere: "Connexion internet", logiciel: "Saisie des données journalières même hors ligne", gestion: "Aucune connexion requise de votre part" },
  { critere: "Suivi des résultats", logiciel: "Tableaux de bord et alertes en direct", gestion: "Bilans, rapports et photos, selon la mission" },
  { critere: "Tarification", logiciel: `${site.price} / mois, 1 mois d'essai offert`, gestion: "Sur devis, selon votre besoin" },
];

export default function Tarifs() {
  const whatsappAdvisorUrl = `https://wa.me/${site.whatsappBurkina}?text=Bonjour%20ORA%20Groupe,%20je%20souhaite%20%C3%A9changer%20avec%20un%20conseiller.`;

  return (
    <section id="tarifs" className="section" aria-labelledby="tarifs-title">
      <div className="wrap">
        <div className="split split--reverse">
          <div className="split__visual">
            <img
              src="/illustrations/elevage-suivi.svg"
              width={640}
              height={420}
              alt="Un technicien ORA Groupe suit un élevage de bovins et d'ovins sur sa tablette, courbe de progression en hausse"
              loading="lazy"
            />
          </div>
          <div className="split__text">
            <h2 id="tarifs-title" className="h2">Tarifs et comparatif</h2>
            <p className="lead">Le logiciel en abonnement, les services sur devis. Choisissez selon votre besoin.</p>
          </div>
        </div>

        <div className="prices">
          <div className="price">
            <p className="price__name">Logiciel</p>
            <p className="price__amount">
              <span className="price__figure">{site.price}</span>
              <span className="price__unit">/ mois</span>
            </p>
            <p className="price__note">1 mois d&apos;essai offert</p>
            <a
              className="btn btn--primary"
              href="#contact"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("ora:select-formule", { detail: "logiciel" }));
                }
              }}
            >
              Démarrer l&apos;essai gratuit
            </a>
          </div>
          <div className="price">
            <p className="price__name">Demande de service</p>
            <p className="price__amount">
              <span className="price__figure">Sur devis</span>
            </p>
            <p className="price__note">Conseil, études, gestion et formation</p>
            <a
              className="btn btn--secondary"
              href="#contact"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("ora:select-formule", { detail: "gestion" }));
                }
              }}
            >
              Demander un service
            </a>
          </div>
        </div>

        <table className="compare">
          <thead>
            <tr>
              <th scope="col"><span className="sr-only">Critère</span></th>
              <th scope="col">Logiciel</th>
              <th scope="col">Services</th>
            </tr>
          </thead>
          <tbody>
            {lignes.map((r) => (
              <tr key={r.critere}>
                <th scope="row">{r.critere}</th>
                <td data-label="Logiciel">{r.logiciel}</td>
                <td data-label="Services">{r.gestion}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="advisor">
          <div>
            <h3 className="advisor__title">Parler à un conseiller</h3>
            <p className="advisor__note">Réponse sous 24 heures ouvrées</p>
          </div>
          <a className="btn btn--secondary" href={whatsappAdvisorUrl} target="_blank" rel="noopener noreferrer">
            Échanger sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
