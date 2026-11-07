export default function Piliers() {
  const piliers = [
    {
      badge: "Production",
      title: "Ponte & Suivi du troupeau",
      desc: "Marche même hors ligne au poulailler. Vos données sont enregistrées localement et se synchronisent avec le cloud dès votre reconnexion.",
      points: [
        "Marche même hors ligne au poulailler",
        "Suivi du taux de ponte par bande",
        "Alerte précoce sur les mortalités",
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#094C36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
        </svg>
      ),
    },
    {
      badge: "Alimentation",
      title: "Stocks & Autonomie en jours",
      desc: "L'aliment pèse 70% de vos dépenses. Comparez la ration théorique à la consommation réelle pour stopper net les pertes.",
      points: [
        "Consommation réelle par sujet",
        "Autonomie restante calculée en jours",
        "Alerte réapprovisionnement provende",
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#094C36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      badge: "Sanitaire",
      title: "Calendrier vaccinal & Soins",
      desc: "Générez automatiquement le protocole prophylactique de votre cheptel et recevez des alertes avant chaque échéance critique.",
      points: [
        "Rappels Newcastle, Gumboro & vaccins",
        "Traçabilité des traitements vétérinaires",
        "Prévention des épidémies dévastatrices",
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#094C36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m18 2 4 4" />
          <path d="m17 7 3-3" />
          <path d="M19 9 8.7 19.3c-.4.4-1 .6-1.6.6H3v-4.1c0-.6.2-1.2.6-1.6L14 3.9" />
          <path d="m9 11 4 4" />
          <path d="m5 19-3 3" />
        </svg>
      ),
    },
    {
      badge: "Ressources humaines",
      title: "Pointage & Paie ouvriers",
      desc: "Suivez la présence de vos ouvriers agricoles au quotidien et calculez automatiquement les salaires sans erreurs ni litiges.",
      points: [
        "Pointage journalier des présences",
        "Calcul automatisé des salaires et avances",
        "Historique clair pour chaque employé",
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#094C36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      badge: "Finances",
      title: "Trésorerie & Marge nette en FCFA",
      desc: "Centralisez les ventes d'œufs, de poulets et les achats d'intrants. Connaissez votre bénéfice net réel au centime près.",
      points: [
        "Suivi des recettes et des dépenses",
        "Coût de revient exact par sujet ou plateau",
        "Bénéfice net consolidé en FCFA",
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#094C36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="piliers" className="piliers-section" aria-labelledby="piliers-title">
      <div className="wrap">
        <div className="piliers-header">
          <span className="editorial-eyebrow">Une solution tout-en-un</span>
          <h2 id="piliers-title" className="editorial-section-title">
            Une seule solution pour les 5 piliers de votre élevage
          </h2>
          <p className="editorial-lead">
            Du poulailler au bilan financier, ORA regroupe l&apos;intégralité de vos opérations sans multiplier les carnets ni les feuilles de calcul.
          </p>
        </div>

        <div className="piliers-grid">
          {piliers.map((p, idx) => (
            <article key={idx} className={`pilier-card ${idx >= 3 ? "pilier-card--wide" : ""}`}>
              <div className="pilier-card__top">
                <div className="pilier-card__icon-box">{p.icon}</div>
                <span className="pilier-card__badge">{p.badge}</span>
              </div>

              <h3 className="pilier-card__title">{p.title}</h3>
              <p className="pilier-card__desc">{p.desc}</p>

              <ul className="pilier-card__points">
                {p.points.map((pt, pIdx) => (
                  <li key={pIdx}>
                    <svg className="pilier-card__check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

