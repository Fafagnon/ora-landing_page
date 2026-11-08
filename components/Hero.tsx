"use client";

import { site } from "@/lib/site.config";

export default function Hero() {
  const whatsappBurkinaUrl = `https://wa.me/${site.whatsappBurkina}?text=Bonjour%20ORA,%20je%20souhaite%20des%20renseignements.`;

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="wrap hero__grid">
        <div className="hero__content">
          <h1 id="hero-heading" className="hero__title rise" style={{ ["--i" as string]: 0 }}>
            Votre élevage, suivi au jour le jour
          </h1>

          <p className="hero__lead rise" style={{ ["--i" as string]: 1 }}>
            <strong>ORA</strong> est un logiciel qui facilite le suivi global de votre élevage, et un cabinet dont les techniciens gèrent votre ferme à votre place avec ce même logiciel.
          </p>

          <div className="hero__fork rise" style={{ ["--i" as string]: 2 }}>
            <a className="fork" href="#logiciel">
              <span className="fork__when">Je suis sur place</span>
              <span className="fork__what">Je suis ma ferme moi-même avec le logiciel</span>
            </a>
            <a className="fork" href="#gestion">
              <span className="fork__when">Je ne suis pas sur place</span>
              <span className="fork__what">Je confie ma ferme aux techniciens ORA</span>
            </a>
          </div>

          <div className="hero__actions rise" style={{ ["--i" as string]: 3 }}>
            <a
              className="btn btn--primary"
              href="#contact"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("ora:select-formule", { detail: "logiciel" }));
                }
              }}
            >
              Essayer maintenant
            </a>
            <a
              className="btn btn--secondary"
              href={whatsappBurkinaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Nous contacter
            </a>
          </div>

          <p className="hero__meta rise" style={{ ["--i" as string]: 4 }}>
            <span>1 mois d&apos;essai offert</span>
            <span>Sans engagement ni carte bancaire</span>
          </p>
        </div>

        <div className="hero__visual">
          <img
            src="/illustrations/ora-hero.svg"
            width={730}
            height={380}
            alt="Un technicien ORA consulte l'élevage sur sa tablette, dans le poulailler, et le bilan part vers le propriétaire"
          />
        </div>
      </div>
    </section>
  );
}
