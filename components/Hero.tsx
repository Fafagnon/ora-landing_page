import Image from "next/image";
import { site } from "@/lib/site.config";

export default function Hero() {
  return (
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero__grid">
          <div className="hero__text">
            <span className="hero__eyebrow-text">
              Gestion d&apos;élevage avicole · Togo &amp; Burkina Faso
            </span>

              <h1 id="hero-title" className="hero__title">
                Votre élevage au quotidien. <br />
                <span className="serif-italic">Par vous, ou par nos équipes.</span>
              </h1>

              <p className="lead">
                Un outil de suivi conçu pour la réalité des exploitations en Afrique de l&apos;Ouest, utilisable même au fond du poulailler sans réseau internet. Ou la prise en charge complète de vos opérations par des techniciens d&apos;élevage ORA.
              </p>

              <div className="hero__actions">
                  <a className="btn btn-primary" href="#formules">
                    Démarrer l&apos;essai du logiciel
                  </a>
                    <a className="btn btn-secondary" href="#contact">
                      Confier la gestion de ma ferme
                    </a>
                  </div>

                    <div className="hero__specs">
                      <span><strong>{site.trial}</strong> sans carte bancaire</span>
                      <span>·</span>
                      <span>Abonnement : <strong>{site.price} / mois</strong></span>
                      <span>·</span>
                      <span>Saisie hors-ligne &amp; synchro cloud</span>
                    </div>
                  </div>

                      <div className="hero__media">
                        <Image
                          src="/ora-technicien-poulailler.png"
                          alt="Technicien avicole utilisant une tablette au milieu des pondeuses dans un poulailler suivi par ORA"
                          width={900}
                          height={600}
                          priority
                        />
                        <div className="hero__media-caption">
                          <span>Saisie quotidienne sur le terrain</span>
                          <strong>ORA Logiciel</strong>
                        </div>
                      </div>
                    </div>
                  </section>
                  );
}
