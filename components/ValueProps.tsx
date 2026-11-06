export default function ValueProps() {
  const benefits = [
    {
      title: "Zéro retard vaccinal",
      desc: "Les épidémies (Newcastle, Gumboro...) sont la 1ère cause de pertes en élevage. ORA génère le calendrier sanitaire automatique de votre lot et vous alerte avant chaque échéance.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <rect x="14" y="6" width="14" height="7" rx="2" fill="#094C36" />
          <rect x="16" y="13" width="10" height="12" rx="2" fill="#0D6348" />
          <path d="M19 25 L14 32 M21 25 L26 32" stroke="#094C36" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 30 L12 24" stroke="#C1881C" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="5" cy="31" r="2" fill="#C1881C" />
        </svg>
      ),
    },
    {
      title: "Stop aux pertes d'aliment",
      desc: "L'aliment représente jusqu'à 70% de vos coûts. ORA compare la ration théorique et la consommation réelle par sujet pour stopper net tout gaspillage ou coulage anormal.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M10 10 h16 l-2.5 18 a3 3 0 0 1 -3 2.5 h-5 a3 3 0 0 1 -3 -2.5 z" fill="#E9D9A6" stroke="#094C36" strokeWidth="1.8" />
          <path d="M10 10 h16 l-1.8 -5 h-12.4 z" fill="#C9A86A" stroke="#094C36" strokeWidth="1.8" />
          <circle cx="18" cy="20" r="4.5" fill="#094C36" />
          <path d="M18 17.5 v5 M15.5 20 h5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Votre bénéfice net au FCFA",
      desc: "Ne gérez plus votre élevage à l'aveugle. À la vente de chaque bande ou lot d'œufs, vous connaissez immédiatement votre coût de revient exact et votre bénéfice net réel.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <ellipse cx="18" cy="26" rx="11" ry="4.5" fill="#C1881C" stroke="#094C36" strokeWidth="1.8" />
          <ellipse cx="18" cy="20" rx="11" ry="4.5" fill="#E9C46A" stroke="#094C36" strokeWidth="1.8" />
          <ellipse cx="18" cy="14" rx="11" ry="4.5" fill="#F5D98A" stroke="#094C36" strokeWidth="1.8" />
          <text x="18" y="17" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#094C36">F</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="garanties" className="benefits-section" aria-labelledby="benefits-title">
      <div className="wrap">
        <div className="section-header" style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="editorial-eyebrow">Garanties &amp; Efficacité</span>
          <h2 id="benefits-title" className="editorial-section-title">
            Les 3 vrais problèmes que nous réglons
          </h2>
          <p className="editorial-lead">
            Conçu à partir des réalités vécues au quotidien sur les exploitations avicoles au Togo et au Burkina Faso.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="benefit-card">
              <div className="benefit-card__icon-box">{b.icon}</div>
              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
