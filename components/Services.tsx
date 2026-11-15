"use client";

const services = [
  {
    cat: "Conseil",
    title: "Conseil et expertise",
    desc: "Des conseils avisés pour de meilleures décisions.",
    points: [
      "Consultation et conseils agricoles",
      "Visite technique et diagnostic d'exploitation",
      "Audit technique d'une exploitation",
    ],
  },
  {
    cat: "Études",
    title: "Études et conception de projets",
    desc: "Des projets solides pour une agriculture rentable.",
    points: [
      "Élaboration d'un projet agricole",
      "Étude de faisabilité agricole",
      "Élaboration d'un business plan agricole",
      "Accompagnement à la création d'une ferme",
    ],
  },
  {
    cat: "Gestion",
    title: "Gestion et suivi des exploitations",
    desc: "Une gestion rigoureuse pour des résultats durables.",
    points: [
      "Suivi technique d'une exploitation",
      "Gestion complète d'une ferme",
      "Bilan hebdomadaire avec photos",
    ],
  },
  {
    cat: "Formation",
    title: "Formation et accompagnement",
    desc: "Renforcer vos compétences, booster vos performances.",
    points: [
      "Formation du personnel agricole",
      "Montage et accompagnement de projets",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section section--band" aria-labelledby="services-title">
      <div className="wrap">
        <div className="split split--reverse">
          <div className="split__visual">
            <img
              src="/illustrations/projet-etude.svg"
              width={640}
              height={420}
              alt="Un technicien ORA Groupe prépare l'étude d'un projet agricole sur sa tablette, plans, graphiques et parcelle"
              loading="lazy"
            />
          </div>
          <div className="split__text">
            <h2 id="services-title" className="h2">Nos services</h2>
            <p className="lead">
              Quatre façons de travailler avec nous, du conseil ponctuel à la gestion complète de votre exploitation. Une équipe d&apos;experts qualifiés, un accompagnement personnalisé, des solutions adaptées à vos besoins.
            </p>
          </div>
        </div>

        <ol className="registre" aria-label="Les quatre services ORA Groupe">
          {services.map((s, i) => (
            <li key={s.title} className="registre__row">
              <span className="registre__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="registre__head">
                <span className="registre__cat">{s.cat}</span>
                <h3 className="registre__title">{s.title}</h3>
              </div>
              <div className="registre__body">
                <p className="registre__desc">{s.desc}</p>
                <ul className="points">
                  {s.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="section__cta">
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
        </div>
      </div>
    </section>
  );
}
