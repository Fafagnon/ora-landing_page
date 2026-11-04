import Image from "next/image";

export default function VideoSection() {
  const chapters = [
    {
      time: "00:00",
      title: "La réalité du terrain",
      desc: "Contraintes de connectivité, biosécurité et maîtrise rigoureuse des intrants en Afrique de l'Ouest.",
    },
    {
      time: "00:45",
      title: "Le logiciel ORA",
      desc: "Saisie des données journalières même hors ligne, suivi des pontes, autonomie d'aliment et alertes sanitaires.",
    },
    {
      time: "01:30",
      title: "La gestion déléguée",
      desc: "Déploiement de techniciens qualifiés sur votre ferme et transmission des bilans réguliers sur WhatsApp.",
    },
  ];

  return (
    <section id="video" className="video-editorial-section" aria-labelledby="video-title">
      <div className="wrap">
        <div className="video-editorial-header">
          <h2 id="video-title" className="editorial-section-title">
            Comprendre ORA en deux minutes
          </h2>
          <p className="editorial-lead">
            Une vue d&apos;ensemble animée pour visualiser concrètement le fonctionnement de la plateforme, de la saisie quotidienne au poulailler jusqu&apos;aux bilans financiers de fin de bande.
          </p>
        </div>

        {/* Cadre de présentation vidéo élégant */}
        <div className="video-showcase-card">
          <div className="video-showcase-media">
            <Image
              src="/ora-technicien-poulailler.png"
              alt="Technicien avicole ORA assurant le suivi d'un bâtiment d'élevage"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="video-showcase-bg"
            />
            <div className="video-showcase-overlay" />

            <div className="video-showcase-content">
              <div className="video-showcase-badge">
                <span className="video-showcase-dot" aria-hidden="true" />
                <span>Motion design en production</span>
              </div>

              <div className="video-play-button" aria-hidden="true">
                <div className="video-play-pulse" />
                <div className="video-play-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="video-showcase-meta">
                <h3 className="video-showcase-headline">Découvrir le parcours ORA en 2 minutes</h3>
                <span className="video-showcase-subtext">Visionnez le fonctionnement du logiciel et l&apos;intervention terrain</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapitres du parcours */}
        <div className="video-chapters-grid">
          {chapters.map((ch, idx) => (
            <div key={idx} className="video-chapter-card">
              <span className="video-chapter-time">{ch.time}</span>
              <div className="video-chapter-body">
                <h3 className="video-chapter-title">{ch.title}</h3>
                <p className="video-chapter-desc">{ch.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
