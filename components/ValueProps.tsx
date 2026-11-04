export default function ValueProps() {
  const benefits = [
    {
      icon: "vaccines",
      title: "Zéro Retard Vaccinal",
      desc: "Les épidémies (Newcastle, Gumboro...) sont la 1ère cause de pertes en élevage. ORA génère le calendrier sanitaire automatique de votre lot et vous alerte avant chaque échéance.",
    },
    {
      icon: "inventory_2",
      title: "Finis les Sacs Volatilisés",
      desc: "L'aliment représente jusqu'à 70% de vos coûts. ORA compare la ration théorique et la consommation réelle par sujet pour stopper net tout gaspillage ou coulage anormal.",
    },
    {
      icon: "payments",
      title: "Votre Bénéfice Net au FCFA",
      desc: "Ne gérez plus votre élevage à l'aveugle. À la vente de chaque bande ou lot d'œufs, vous connaissez immédiatement votre coût de revient exact et votre bénéfice net réel.",
    },
  ];

  return (
    <section id="garanties" className="benefits-section" aria-labelledby="benefits-title">
      <div className="wrap">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-tag">Garanties &amp; Efficacité</span>
          <h2 id="benefits-title">Les 3 Vrais Problèmes que Nous Réglons</h2>
          <p className="lead" style={{ marginInline: "auto", marginTop: 12 }}>
            Conçu à partir des réalités vécues au quotidien sur les exploitations avicoles au Togo et au Burkina Faso.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="benefit-card">
              <div className="benefit-card__icon-box">
                <span className="g-icon" style={{ fontSize: "1.75rem" }}>{b.icon}</span>
              </div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

