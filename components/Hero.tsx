import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-editorial" aria-labelledby="hero-heading">
      {/* Arrière-plan panoramique avec brume et fondus atmosphériques */}
      <div className="hero-editorial__backdrop" aria-hidden="true">
        <Image
          src="/hero-landscape.jpg"
          alt=""
          fill
          priority
          quality={92}
          className="hero-editorial__img"
        />
        <div className="hero-editorial__fade-top" />
        <div className="hero-editorial__fade-bottom" />
        <div className="hero-editorial__ambient-light" />
      </div>

      <div className="wrap hero-editorial__wrap">
        <div className="hero-editorial__content">
          {/* Badge pilule d'introduction */}
          <div className="hero-editorial__pill">
            <span className="hero-editorial__pill-dot" aria-hidden="true" />
            <span>Cabinet de conseil et de gestion d&apos;élevage au Togo et au Burkina Faso</span>
          </div>

          {/* Titre éditorial noble */}
          <h1 id="hero-heading" className="hero-editorial__title">
            La référence en gestion et conseil pour votre élevage.
          </h1>

          {/* Paragraphe d'accroche centré sur les deux profils */}
          <p className="hero-editorial__lead">
            Que vous soyez exploitant sur le terrain ou investisseur à distance, ORA structure vos opérations, élimine les pertes et assure le suivi rigoureux de votre ferme.
          </p>

          {/* Bouton d'action pilule vert émeraude */}
          <div className="hero-editorial__actions">
            <a className="hero-editorial__cta" href="#contact">
              <span>Demander un essai gratuit</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Bandeau d'ancrage terrain sobre */}
          <div className="hero-editorial__proof">
            <span className="hero-editorial__proof-label">
              Conçu pour les réalités du terrain
            </span>
            <div className="hero-editorial__proof-items">
              <span className="hero-editorial__proof-tag">1 mois d&apos;essai gratuit</span>
              <span className="hero-editorial__proof-sep" aria-hidden="true">·</span>
              <span className="hero-editorial__proof-tag">Saisie 100% hors-ligne</span>
              <span className="hero-editorial__proof-sep" aria-hidden="true">·</span>
              <span className="hero-editorial__proof-tag">Accompagnement par des techniciens ORA</span>
              <span className="hero-editorial__proof-sep" aria-hidden="true">·</span>
              <span className="hero-editorial__proof-tag">Abonnement à 5 000 F CFA / mois</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
