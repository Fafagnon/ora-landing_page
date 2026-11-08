import Image from "next/image";

export default function VideoSection() {
  return (
    <section id="video" className="section section--band" aria-labelledby="video-title">
      <div className="wrap">
        <div className="section__head">
          <h2 id="video-title" className="h2">ORA en vidéo</h2>
          <p className="lead">
            Une vue d&apos;ensemble animée, de la saisie quotidienne au poulailler jusqu&apos;au bilan financier de fin de bande.
          </p>
        </div>

        <div className="video">
          <Image
            src="/ora-technicien-poulailler.png"
            alt="Technicien avicole ORA assurant le suivi d'un bâtiment d'élevage"
            fill
            sizes="(max-width: 1200px) 100vw, 1136px"
            className="video__img"
          />
          <div className="video__scrim" />
          <p className="video__status">Motion design en production</p>
          <div className="video__play" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <div className="video__meta">
            <h3 className="video__title">Découvrir le parcours ORA en 2 minutes</h3>
            <p className="video__sub">Le fonctionnement du logiciel et l&apos;intervention terrain</p>
          </div>
        </div>
      </div>
    </section>
  );
}
