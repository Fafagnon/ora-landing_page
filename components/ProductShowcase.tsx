import Image from "next/image";

export default function ProductShowcase() {
  const screens = [
    {
      category: "Supervision d'élevage 360°",
      title: "Un tableau de bord qui anticipe les crises sanitaires",
      desc: "L'application compare chaque jour vos données aux normes biologiques de la race. Dès qu'un seuil de mortalité dépasse la normale, une alerte s'affiche pour vous permettre d'intervenir avant qu'une pathologie ne s'étende à l'ensemble du bâtiment.",
      image: "/app/dashboard-cockpit.png",
      caption: "Tableau de bord Cockpit · Alerte mortalité et courbe de ponte sur 7 jours",
      points: [
        "Détection automatique des écarts par rapport au standard biologique",
        "Courbe d'évolution de la ponte quotidienne avec pic de récolte",
        "Calendrier sanitaire intégré avec validation immédiate des vaccins",
      ],
      reverse: false,
    },
    {
      category: "Approvisionnement & Sécurité",
      title: "L'autonomie d'aliment calculée en jours réels",
      desc: "Connaître le tonnage restant en magasin ne suffit pas. ORA traduit automatiquement vos réserves en nombre de jours d'autonomie restant pour nourrir votre cheptel, et déclenche une alerte dès qu'une référence passe sous le stock de sécurité.",
      image: "/app/stocks-autonomie.png",
      caption: "Gestion des stocks · Calcul de l'autonomie en jours et seuils d'alerte",
      points: [
        "Conversion instantanée du stock en jours d'autonomie selon l'effectif",
        "Gestion séparée des œufs de table conformes et des œufs déclassés ou fêlés",
        "Suivi différencié des aliments démarrage, croissance et ponte",
      ],
      reverse: true,
    },
    {
      category: "Exclusivité Ouest-Africaine",
      title: "Fabrication d'aliment et formulation sur mesure",
      desc: "En Afrique de l'Ouest, mélanger sa propre provende à la ferme permet de baisser les coûts de 20 à 30 %. ORA intègre un module de provenderie unique : enregistrez vos formules (maïs, tourteau de soja, son, coquilles, prémix) et laissez l'outil calculer les proportions exactes.",
      image: "/app/provenderie-formules.png",
      caption: "Module provenderie · Production d'aliments à partir de formules réutilisables",
      points: [
        "Création de recettes personnalisées adaptées à chaque stade d'âge",
        "Calcul automatique du dosage des matières premières par fournée",
        "Traçabilité intégrale dans le journal des productions de la ferme",
      ],
      reverse: false,
    },
    {
      category: "Trésorerie & Marges",
      title: "Suivi rigoureux des ventes et des créances clients",
      desc: "En aviculture, les revendeurs et demi-grossistes prennent fréquemment des plateaux d'œufs à crédit. ORA consigne chaque vente, les encaissements en espèces, les acomptes versés et le solde restant à recouvrer pour ne plus jamais égarer un paiement.",
      image: "/app/finances-creances.png",
      caption: "Finances · Ventes d'œufs, règlements en espèces et créances clients",
      points: [
        "Onglet dédié aux créances pour suivre les revendeurs débiteurs",
        "Historique des règlements en espèces (Cash) et des acomptes par client",
        "Chiffre d'affaires net consolidé sans calcul manuel",
      ],
      reverse: true,
    },
  ];

  return (
      <section id="logiciel" className="screens-section" aria-labelledby="screens-title">
        <div className="wrap">
              <div className="section-meta">
                <span className="section-meta__num">Au cœur de l&apos;application</span>
                <h2 id="screens-title">Des écrans conçus pour la réalité du terrain</h2>
                <p className="lead" style={{ marginTop: 12 }}>
                  Chaque module répond à une décision critique de votre exploitation. Saisissez vos chiffres en deux minutes au poulailler, ORA structure vos opérations.
                </p>
              </div>

                <div className="screens-flow">
                  {screens.map((s, idx) => (
                    <article key={idx} className={`screen-item ${s.reverse ? "screen-item--reverse" : ""}`}>
                      <div className="screen-item__visual">
                        <Image
                          src={s.image}
                          alt={s.title}
                          width={1100}
                          height={700}
                          priority={idx === 0}
                        />
                        <div className="screen-item__caption-bar">
                          <span>{s.caption}</span>
                          <strong>ORA</strong>
                        </div>
                      </div>

                          <div className="screen-item__info">
                            <span className="screen-item__category">{s.category}</span>
                            <h3>{s.title}</h3>
                            <p style={{ color: "var(--ink-light)", fontSize: "1.025rem", lineHeight: 1.6 }}>
                              {s.desc}
                            </p>

                        <ul className="screen-item__points">
                          {s.points.map((pt, i) => (
                            <li key={i}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                </article>
          ))}
              </div>
          </div>
      </section>
      );
}
