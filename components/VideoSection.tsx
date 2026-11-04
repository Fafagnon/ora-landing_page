export default function VideoSection() {
  return (
    <section id="video" className="video-section" aria-labelledby="video-title">
      <div className="wrap">
        <div className="section-meta">
          <span className="section-meta__num">Présentation en mouvement</span>
          <h2 id="video-title">Comprendre ORA en deux minutes</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            Une vue d&apos;ensemble animée pour visualiser concrètement le fonctionnement de la plateforme, de la saisie quotidienne au poulailler jusqu&apos;aux bilans financiers de fin de bande.
          </p>
        </div>

        <div className="video-frame-wrap">
          <video
            className="video-player"
            controls
            playsInline
            preload="metadata"
            poster="/ora-technicien-poulailler.png"
            aria-label="Vidéo de présentation motion design du logiciel et des services ORA"
          >
            <source src="/video-presentation.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
          </video>
        </div>

        <div className="video-chapters">
          <div className="video-chapter">
            <span className="video-chapter__time">00:00</span>
            <div className="video-chapter__desc">
              <strong>La réalité du terrain :</strong> contraintes de réseau, prévention des épidémies et maîtrise des charges en Afrique de l&apos;Ouest.
            </div>
          </div>

          <div className="video-chapter">
            <span className="video-chapter__time">00:45</span>
            <div className="video-chapter__desc">
              <strong>Le logiciel ORA :</strong> saisie des pontes sans internet, calcul de l&apos;autonomie d&apos;aliment en jours et alertes de mortalité.
            </div>
          </div>

          <div className="video-chapter">
            <span className="video-chapter__time">01:30</span>
            <div className="video-chapter__desc">
              <strong>La gestion déléguée :</strong> intervention sur site de nos techniciens et transmission des bilans réguliers sur WhatsApp.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

