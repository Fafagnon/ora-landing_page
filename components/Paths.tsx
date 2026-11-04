import Image from "next/image";
import { site } from "@/lib/site.config";

export default function Paths() {
  const comparisonRows = [
    {
      critere: "Profil de l'exploitant",
      logiciel: "Éleveur ou gérant présent au quotidien sur la ferme",
      services: "Propriétaire non-résident, cadre en ville ou investisseur de la diaspora",
    },
    {
      critere: "Temps d'implication",
      logiciel: "5 à 10 minutes par jour pour enregistrer les opérations sur mobile",
      services: "Zéro temps requis : nos techniciens assurent l'intégralité des tâches",
    },
    {
      critere: "Présence sur l'exploitation",
      logiciel: "Vous assurez vous-même les tournées dans les bâtiments",
      services: "Visites régulières, audits et interventions sur site par nos équipes ORA",
    },
    {
      critere: "Connexion internet",
      logiciel: "Saisie hors-ligne au poulailler, synchronisation dès détection du réseau",
      services: "Prise en charge complète sans aucune dépendance à la connectivité",
    },
    {
      critere: "Santé & Prophylaxie",
      logiciel: "Calendrier vaccinal automatisé avec alertes avant chaque date critique",
      services: "Protocoles sanitaires appliqués et vérifiés directement par nos spécialistes",
    },
    {
      critere: "Alimentation & Provenderie",
      logiciel: "Calcul de l'autonomie en jours et formulation de vos recettes à la ferme",
      services: "Sécurisation des intrants, contrôle du coulage et optimisation des rations",
    },
    {
      critere: "Visibilité & Rapports",
      logiciel: "Tableaux de bord, courbes de ponte et marges calculées dans l'application",
      services: "Bilans hebdomadaires chiffrés et photographies transmis sur WhatsApp",
    },
    {
      critere: "Tarification",
      logiciel: `${site.price} par mois (${site.trial} sans engagement)`,
      services: "Sur contrat et devis personnalisé selon la taille de votre cheptel",
    },
  ];

  return (
    <>
      {/* Diptyque des Formules */}
      <section id="formules" className="solutions" aria-labelledby="solutions-title">
        <div className="wrap">
          <div className="section-meta">
            <span className="section-meta__num">Deux modèles d&apos;intervention</span>
            <h2 id="solutions-title">Deux façons de travailler avec ORA</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              Une même exigence de rigueur économique. Choisissez la formule qui correspond à votre présence sur le terrain.
            </p>
          </div>

          <div className="solutions__diptych">
            {/* Formule 1 : Logiciel */}
            <article className="solution-panel">
              <div className="solution-panel__media">
                <Image
                  src="/ora-technicien-poulailler.png"
                  alt="Technicien avicole au travail avec la tablette ORA"
                  width={700}
                  height={400}
                />
              </div>

              <div className="solution-panel__body">
                <div className="solution-panel__meta">
                  <span className="solution-panel__tag">Autonomie de gestion</span>
                  <span className="solution-panel__price">{site.price} <small style={{ fontSize: "0.85rem", color: "var(--ink-muted)" }}>/ mois</small></span>
                </div>

                <div>
                  <h3>ORA Logiciel</h3>
                  <p style={{ color: "var(--ink-light)", marginTop: 6, fontSize: "0.95rem" }}>
                    Pour l&apos;éleveur qui gère son cheptel lui-même et veut maîtriser chaque poste de dépense.
                  </p>
                </div>

                <ul className="solution-panel__list">
                  <li>Saisie au fond du poulailler sans aucune connexion internet requise.</li>
                  <li>Synchronisation automatique des données dès que le téléphone capte le réseau.</li>
                  <li>Calcul de l&apos;autonomie d&apos;aliment en jours et alertes de seuil critique.</li>
                  <li>Suivi des pontes, tri des œufs déclassés et calendrier vaccinal automatique.</li>
                  <li>Module de provenderie pour fabriquer son aliment et réduire ses charges.</li>
                  <li>{site.trial} sans carte bancaire ni engagement.</li>
                </ul>

                <a className="btn btn-primary" href="#contact">
                  Démarrer l&apos;essai du logiciel
                </a>
              </div>
            </article>

            {/* Formule 2 : Services */}
            <article className="solution-panel">
              <div className="solution-panel__media">
                <Image
                  src="/ora-partenariat-poignee-de-main.png"
                  alt="Accord de gestion déléguée ORA Services entre partenaires"
                  width={700}
                  height={400}
                />
              </div>

              <div className="solution-panel__body">
                <div className="solution-panel__meta">
                  <span className="solution-panel__tag">Délégation intégrale</span>
                  <span className="solution-panel__price">Sur mesure</span>
                </div>

                <div>
                  <h3>ORA Services</h3>
                  <p style={{ color: "var(--ink-light)", marginTop: 6, fontSize: "0.95rem" }}>
                    Pour les propriétaires non-résidents et investisseurs qui confient la conduite de leur exploitation.
                  </p>
                </div>

                <ul className="solution-panel__list">
                  <li>Présence sur site : techniciens et agronomes ORA détachés sur votre exploitation.</li>
                  <li>Audit technique complet, suivi sanitaire rigoureux et application des traitements.</li>
                  <li>Sécurisation des intrants pour stopper le vol et le gaspillage d&apos;aliment.</li>
                  <li>Pointage objectif des ouvriers pour éliminer les contestations de paie.</li>
                  <li>Rapports hebdomadaires WhatsApp avec chiffres de ponte, photos et comptabilité.</li>
                  <li>Idéal pour la diaspora togolaise et burkinabè ou les cadres en ville.</li>
                </ul>

                <a className="btn btn-secondary" href="#contact">
                  Demander un diagnostic de ferme
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Matrice Comparative Sobre */}
      <section id="comparatif" className="matrix-section" aria-labelledby="matrix-title">
        <div className="wrap">
          <div className="section-meta">
            <span className="section-meta__num">Arbitrage objectif</span>
            <h2 id="matrix-title">Tableau comparatif des deux solutions</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              Pour déterminer rapidement l&apos;option la plus adaptée à vos contraintes de temps et de localisation.
            </p>
          </div>

          <div className="matrix-wrapper">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th scope="col">Critère d&apos;arbitrage</th>
                  <th scope="col">ORA Logiciel</th>
                  <th scope="col">ORA Services</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={i}>
                    <th scope="row">{r.critere}</th>
                    <td>{r.logiciel}</td>
                    <td>{r.services}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
