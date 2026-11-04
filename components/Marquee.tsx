export default function Marquee() {
  const items = [
    "Saisie quotidienne sans connexion au poulailler",
    "Synchronisation automatique dès détection du réseau",
    "Contrôle strict des stocks d'aliments et provenderie",
    "Détection des anomalies et seuils de mortalité",
    "Calcul de la rentabilité nette par bande au FCFA",
    "Présence locale au Togo et au Burkina Faso",
    "1 mois d'essai gratuit sans engagement",
  ];

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {items.concat(items).map((item, index) => (
          <span key={index}>
            <span>{item}</span>
            <span className="marquee-sep">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
