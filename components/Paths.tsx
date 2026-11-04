import { site } from "@/lib/site.config";
import SpotlightCard from "@/components/SpotlightCard";

export default function Paths() {
  const whatsappAdvisorUrl = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=Bonjour%20ORA,%20je%20souhaite%20%C3%A9changer%20avec%20un%20conseiller.`
    : "https://wa.me/?text=Bonjour%20ORA,%20je%20souhaite%20%C3%A9changer%20avec%20un%20conseiller.";

  const comparisonRows = [
    {
      critere: "Profil visé",
      logiciel: "Éleveur ou gérant présent au quotidien",
      services: "Propriétaire non-résident, cadre urbain, diaspora",
    },
    {
      critere: "Temps requis",
      logiciel: "5 minutes par jour sur smartphone",
      services: "Zéro temps requis, gestion 100% déléguée",
    },
    {
      critere: "Présence terrain",
      logiciel: "Assurée par vos soins au bâtiment",
      services: "Techniciens ORA déployés sur votre ferme",
    },
    {
      critere: "Connexion internet",
      logiciel: "Saisie des données journalières même hors ligne",
      services: "Prise en charge intégrale sans dépendance",
    },
    {
      critere: "Suivi des résultats",
      logiciel: "Tableaux de bord et alertes en direct",
      services: "Bilans hebdomadaires et photos sur WhatsApp",
    },
    {
      critere: "Tarification",
      logiciel: "5 000 F CFA / mois (1 mois d'essai offert)",
      services: "Sur devis personnalisé selon cheptel",
    },
  ];

  return (
    <>
      {/* Section 1 : Deux formules adaptées à votre réalité */}
      <section id="solutions" className="solutions-editorial" aria-labelledby="solutions-title">
        <div className="wrap">
          <div className="solutions-editorial__header">
            <h2 id="solutions-title" className="editorial-section-title">
              Deux formules adaptées à votre réalité
            </h2>
            <p className="editorial-lead">
              Que vous pilotiez vous-même au poulailler ou que vous déléguiez l&apos;intégralité des opérations.
            </p>
          </div>

          <div className="solutions-cards-grid">
            {/* Carte 1 : ORA Logiciel */}
            <SpotlightCard
              as="article"
              className="solution-card"
              spotlightColor="#094C36"
              intensity={0.25}
              spotlightSize={360}
            >
              <div className="solution-card__badge-row">
                <span className="solution-card__pill">Autonomie de gestion</span>
              </div>

              <div className="solution-card__heading">
                <h3 className="solution-card__title">ORA Logiciel</h3>
                <p className="solution-card__pitch">
                  Prenez le contrôle total de vos coûts, de la ponte et des stocks au quotidien.
                </p>
              </div>

              <div className="solution-card__price-box">
                <div className="solution-card__amount">
                  <span className="solution-card__figure">{site.price}</span>
                  <span className="solution-card__unit">/ mois</span>
                </div>
                <span className="solution-card__trial-badge">1 mois d&apos;essai offert</span>
              </div>

              <ul className="solution-card__keypoints">
                <li>
                  <svg className="solution-card__check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Saisie des données journalières même hors ligne</span>
                </li>
                <li>
                  <svg className="solution-card__check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Gestion des stocks d&apos;aliment et autonomie en jours</span>
                </li>
                <li>
                  <svg className="solution-card__check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Suivi des ventes, des dépenses et de la trésorerie</span>
                </li>
                <li>
                  <svg className="solution-card__check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Pointage de présence des employés et calcul automatique des salaires</span>
                </li>
                <li>
                  <svg className="solution-card__check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Suivi des équipements et alertes sanitaires du cheptel</span>
                </li>
              </ul>

              <div className="solution-card__action">
                <a className="btn-solution btn-solution--outline" href="#contact">
                  <span>Démarrer l&apos;essai gratuit</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </SpotlightCard>

            {/* Carte 2 : ORA Gestion déléguée */}
            <SpotlightCard
              as="article"
              className="solution-card solution-card--featured"
              spotlightColor="#094C36"
              intensity={0.35}
              spotlightSize={400}
            >
              <div className="solution-card__badge-row">
                <span className="solution-card__pill solution-card__pill--emerald">Prise en main totale</span>
              </div>

              <div className="solution-card__heading">
                <h3 className="solution-card__title">ORA Gestion déléguée</h3>
                <p className="solution-card__pitch">
                  Confiez l&apos;exploitation à nos spécialistes sans subir le stress du terrain.
                </p>
              </div>

              <div className="solution-card__price-box">
                <div className="solution-card__amount">
                  <span className="solution-card__figure">Sur devis</span>
                </div>
                <span className="solution-card__trial-badge">Accompagnement sur mesure</span>
              </div>

              <ul className="solution-card__keypoints">
                <li>
                  <svg className="solution-card__check solution-card__check--emerald" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Techniciens avicoles qualifiés détachés directement sur votre exploitation</span>
                </li>
                <li>
                  <svg className="solution-card__check solution-card__check--emerald" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Contrôle rigoureux des intrants et de la provenderie pour stopper les pertes</span>
                </li>
                <li>
                  <svg className="solution-card__check solution-card__check--emerald" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Suivi vétérinaire préventif et application stricte des protocoles sanitaires</span>
                </li>
                <li>
                  <svg className="solution-card__check solution-card__check--emerald" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Bilans hebdomadaires détaillés et photographies d&apos;avancement sur WhatsApp</span>
                </li>
                <li>
                  <svg className="solution-card__check solution-card__check--emerald" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Audit de fin de bande et analyse approfondie de la rentabilité financière</span>
                </li>
              </ul>

              <div className="solution-card__action">
                <a className="btn-solution btn-solution--solid" href="#contact">
                  <span>Demander un diagnostic de ferme</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Section 2 : Arbitrage objectif (Tableau comparatif épuré) */}
      <section id="tarifs" className="matrix-editorial" aria-labelledby="matrix-title">
        <div className="wrap">
          <div className="matrix-editorial__header">
            <h2 id="matrix-title" className="editorial-section-title">
              Quelle formule choisir pour votre exploitation ?
            </h2>
            <p className="editorial-lead">
              Un comparatif direct pour identifier en quelques secondes la solution adaptée à votre disponibilité et vos objectifs.
            </p>
          </div>

          <div className="matrix-editorial__card">
            <div className="matrix-editorial__table-wrap">
              <table className="matrix-editorial__table">
                <thead>
                  <tr>
                    <th scope="col" className="matrix-col-critere">Critère clé</th>
                    <th scope="col" className="matrix-col-solution">
                      <strong className="matrix-col-name">ORA Logiciel</strong>
                    </th>
                    <th scope="col" className="matrix-col-solution matrix-col-solution--featured">
                      <strong className="matrix-col-name">ORA Gestion déléguée</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((r, i) => (
                    <tr key={i}>
                      <th scope="row" className="matrix-cell-critere">
                        {r.critere}
                      </th>
                      <td className="matrix-cell-content">
                        {r.logiciel}
                      </td>
                      <td className="matrix-cell-content matrix-cell-content--featured">
                        {r.services}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Petit CTA simple en bas de la section */}
          <div className="matrix-advisor-cta">
            <span className="matrix-advisor-cta__text">Parler à un conseiller</span>
            <a
              href={whatsappAdvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="matrix-advisor-cta__btn"
              aria-label="Échanger sur WhatsApp avec un conseiller ORA"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3" />
              </svg>
              <span>Échanger sur WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
