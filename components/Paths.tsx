import { site } from "@/lib/site.config";

export default function Paths() {
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
      logiciel: "Saisie 100% hors-ligne au poulailler",
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
      {/* Section 1 : Deux modèles d'intervention */}
      <section id="solutions" className="solutions-editorial" aria-labelledby="solutions-title">
        <div className="wrap">
          <div className="solutions-editorial__header">
            <span className="editorial-eyebrow">Modèles d&apos;intervention</span>
            <h2 id="solutions-title" className="editorial-section-title">
              Deux formules adaptées à votre réalité
            </h2>
            <p className="editorial-lead">
              Que vous pilotiez vous-même au poulailler ou que vous déléguiez l&apos;intégralité des opérations depuis la ville ou l&apos;étranger.
            </p>
          </div>

          <div className="solutions-cards-grid">
            {/* Carte 1 : ORA Logiciel */}
            <article className="solution-card">
              <div className="solution-card__badge-row">
                <span className="solution-card__pill">Autonomie de gestion</span>
                <span className="solution-card__target">Pour l&apos;exploitant sur place</span>
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
                  <span>Saisie 100% hors-ligne au fond du bâtiment</span>
                </li>
                <li>
                  <svg className="solution-card__check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Alertes de mortalité et calendrier vaccinal automatique</span>
                </li>
                <li>
                  <svg className="solution-card__check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Calcul d&apos;autonomie d&apos;aliment et formulation provende</span>
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
            </article>

            {/* Carte 2 : ORA Gestion déléguée */}
            <article className="solution-card solution-card--featured">
              <div className="solution-card__badge-row">
                <span className="solution-card__pill solution-card__pill--emerald">Prise en main totale</span>
                <span className="solution-card__target">Pour la diaspora et non-résidents</span>
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
                  <span className="solution-card__unit">selon cheptel</span>
                </div>
                <span className="solution-card__trial-badge solution-card__trial-badge--soft">Diagnostic initial inclus</span>
              </div>

              <ul className="solution-card__keypoints">
                <li>
                  <svg className="solution-card__check solution-card__check--emerald" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Techniciens ORA expérimentés détachés sur votre exploitation</span>
                </li>
                <li>
                  <svg className="solution-card__check solution-card__check--emerald" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Contrôle strict des intrants pour stopper le vol et le coulage</span>
                </li>
                <li>
                  <svg className="solution-card__check solution-card__check--emerald" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Bilans hebdomadaires chiffrés et photographies sur WhatsApp</span>
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
            </article>
          </div>
        </div>
      </section>

      {/* Section 2 : Arbitrage objectif (Tableau comparatif épuré) */}
      <section id="tarifs" className="matrix-editorial" aria-labelledby="matrix-title">
        <div className="wrap">
          <div className="matrix-editorial__header">
            <span className="editorial-eyebrow">Arbitrage objectif</span>
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
                      <span className="matrix-col-tag">Autonomie</span>
                      <strong className="matrix-col-name">ORA Logiciel</strong>
                    </th>
                    <th scope="col" className="matrix-col-solution matrix-col-solution--featured">
                      <span className="matrix-col-tag matrix-col-tag--emerald">Prise en main</span>
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
        </div>
      </section>
    </>
  );
}
