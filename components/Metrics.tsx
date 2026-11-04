import { site } from "@/lib/site.config";

export default function Metrics() {
  const stats = [
    {
      num: "1",
      suffix: " Mois",
      label: "Essai 100% Gratuit",
      sub: "Sans engagement ni carte bancaire requise.",
    },
    {
      num: "5 000",
      suffix: " F",
      label: "CFA / mois",
      sub: "Tarif unique et transparent pour toute l'exploitation.",
    },
    {
      num: "Hors",
      suffix: "-Ligne",
      label: "Au quotidien à la ferme",
      sub: "Saisie sans internet au poulailler, synchro dès connexion.",
    },
    {
      num: "2",
      suffix: " Pays",
      label: "Présence locale",
      sub: "Équipes et support dédiés au Togo & Burkina Faso.",
    },
  ];

  return (
    <section id="chiffres" className="metrics-section" aria-labelledby="metrics-title">
      <div className="wrap">
        <div className="section-header">
          <span className="section-tag">Transparence &amp; Efficacité</span>
          <h2 id="metrics-title">Les Chiffres Parlent d&apos;Eux-Mêmes</h2>
          <p className="lead" style={{ marginInline: "auto", marginTop: 12 }}>
            Une solution pensée pour la réalité économique et les contraintes de connectivité des élevages avicoles locaux.
          </p>
        </div>

        <div className="metrics-grid">
          {stats.map((s, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-card__num">
                {s.num}
                <span>{s.suffix}</span>
              </div>
              <div className="metric-card__label">{s.label}</div>
              <p className="metric-card__sub">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
