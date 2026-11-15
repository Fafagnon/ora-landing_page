"use client";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="wrap hero__grid">
        <div className="hero__content">
          <h1 id="hero-heading" className="hero__title rise" style={{ ["--i" as string]: 0 }}>
            Votre projet agricole, notre expertise !
          </h1>

          <p className="hero__lead rise" style={{ ["--i" as string]: 1 }}>
            <strong>ORA Groupe</strong> étudie, aménage et gère votre projet agricole, où que vous soyez. Le logiciel que nos techniciens utilisent chaque jour sur le terrain, vous pouvez aussi l&apos;utiliser vous-même, en abonnement.
          </p>

          <div className="hero__fork rise" style={{ ["--i" as string]: 2 }}>
            <a className="fork" href="#services">
              <span className="fork__when">Je confie mon projet</span>
              <span className="fork__what">Conseil, études, gestion et formation par nos équipes</span>
            </a>
            <a className="fork" href="#logiciel">
              <span className="fork__when">Je pilote moi-même</span>
              <span className="fork__what">Le logiciel de suivi, en abonnement</span>
            </a>
          </div>

          <div className="hero__actions rise" style={{ ["--i" as string]: 3 }}>
            <a
              className="btn btn--primary"
              href="#contact"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("ora:select-formule", { detail: "gestion" }));
                }
              }}
            >
              Demander un service
            </a>
            <a
              className="btn btn--secondary"
              href="#contact"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("ora:select-formule", { detail: "logiciel" }));
                }
              }}
            >
              Essayer le logiciel
            </a>
          </div>

          <p className="hero__meta rise" style={{ ["--i" as string]: 4 }}>
            <span>1 mois d&apos;essai offert</span>
            <span>Sans engagement ni carte bancaire</span>
          </p>
        </div>

        <div className="hero__visual">
          <img
            src="/illustrations/projet-hero.svg"
            width={730}
            height={380}
            alt="Un technicien ORA Groupe consulte sa tablette face à un enclos avec un bœuf, une poule et un lapin, pendant qu'un bâtiment d'élevage se construit et qu'un plan apparaît au-dessus"
          />
        </div>
      </div>
    </section>
  );
}
