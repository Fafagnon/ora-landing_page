"use client";

const lignes = [
  { quand: "Sur place", texte: "Techniciens avicoles qualifiés détachés directement sur votre exploitation" },
  { quand: "Chaque semaine", texte: "Bilan détaillé avec photos, envoyé sur WhatsApp" },
  { quand: "Au quotidien", texte: "Gestion de l'exploitation à votre place" },
];

export default function Gestion() {
  return (
    <section id="gestion" className="section section--band" aria-labelledby="gestion-title">
      <div className="wrap">
        <div className="split split--reverse">
          <div className="split__visual">
            <img
              src="/illustrations/ora-gestion.svg"
              width={730}
              height={380}
              alt="Un propriétaire à son bureau consulte le bilan de sa ferme, pendant qu'un technicien ORA travaille sur place"
              loading="lazy"
            />
          </div>
          <div className="split__text">
            <h2 id="gestion-title" className="h2">Vous n&apos;êtes pas sur place, nos techniciens le sont</h2>
            <p className="lead">
              ORA gère votre ferme à votre place. Nos techniciens travaillent avec le logiciel ORA et vous envoient le bilan chaque semaine.
            </p>

            <dl className="ledger">
              {lignes.map((l) => (
                <div key={l.quand} className="ledger__row">
                  <dt>{l.quand}</dt>
                  <dd>{l.texte}</dd>
                </div>
              ))}
            </dl>

            <a
              className="btn btn--primary"
              href="#contact"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("ora:select-formule", { detail: "gestion" }));
                }
              }}
            >
              Demander un diagnostic de ferme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
