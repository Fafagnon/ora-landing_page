const piliers = [
  {
    cat: "Production",
    title: "Ponte et suivi du troupeau",
    desc: "Saisissez vos données au poulailler, même sans connexion. Elles se synchronisent avec le cloud dès que vous retrouvez du réseau",
    points: ["Taux de ponte par bande", "Alerte précoce sur les mortalités", "Suivi des équipements"],
  },
  {
    cat: "Alimentation",
    title: "Stocks et autonomie en jours",
    desc: "Comparez la ration théorique à la consommation réelle pour repérer les pertes",
    points: ["Consommation réelle par sujet", "Autonomie restante en jours", "Alerte de réapprovisionnement en provende"],
  },
  {
    cat: "Sanitaire",
    title: "Calendrier vaccinal et soins",
    desc: "Générez le protocole prophylactique de votre cheptel et recevez une alerte avant chaque échéance",
    points: ["Rappels Newcastle, Gumboro et autres vaccins", "Traçabilité des traitements vétérinaires"],
  },
  {
    cat: "Ressources humaines",
    title: "Pointage et paie des ouvriers",
    desc: "Suivez la présence de vos ouvriers chaque jour et calculez salaires et avances",
    points: ["Pointage journalier des présences", "Salaires et avances calculés automatiquement", "Historique par employé"],
  },
  {
    cat: "Finances",
    title: "Trésorerie et marge nette en FCFA",
    desc: "Centralisez les ventes d'œufs et de poulets et les achats d'intrants pour connaître votre bénéfice net",
    points: ["Recettes et dépenses", "Coût de revient par sujet ou par plateau", "Bénéfice net consolidé en FCFA"],
  },
];

export default function Piliers() {
  return (
    <section id="logiciel" className="section" aria-labelledby="logiciel-title">
      <div className="wrap">
        <div className="split">
          <div className="split__text">
            <p className="eyebrow">Pour l&apos;éleveur sur place</p>
            <h2 id="logiciel-title" className="h2">Le logiciel pour suivre votre ferme vous-même</h2>
            <p className="lead">
              Du poulailler au bilan financier, ORA regroupe vos opérations au même endroit, sans carnets ni feuilles de calcul.
            </p>
          </div>
          <div className="split__visual">
            <img
              src="/illustrations/ora-logiciel.svg"
              width={730}
              height={380}
              alt="Un éleveur devant son poulailler suit la ponte sur son téléphone, près d'un plateau d'œufs"
              loading="lazy"
            />
          </div>
        </div>

        <ol className="registre" aria-label="Les cinq piliers du logiciel">
          {piliers.map((p, i) => (
            <li key={p.title} className="registre__row">
              <span className="registre__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="registre__head">
                <span className="registre__cat">{p.cat}</span>
                <h3 className="registre__title">{p.title}</h3>
              </div>
              <div className="registre__body">
                <p className="registre__desc">{p.desc}</p>
                <ul className="points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
