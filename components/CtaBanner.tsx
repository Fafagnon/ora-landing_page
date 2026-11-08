"use client";

import { useState, useEffect } from "react";

export default function CtaBanner() {
  const [submitted, setSubmitted] = useState(false);
  const [formule, setFormule] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [farmName, setFarmName] = useState("");

  useEffect(() => {
    const handleSelect = (e: Event) => {
      const custom = e as CustomEvent<string>;
      if (custom.detail === "logiciel" || custom.detail === "gestion") {
        setFormule(custom.detail);
      }
    };
    window.addEventListener("ora:select-formule", handleSelect);

    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.includes("formule=logiciel")) setFormule("logiciel");
      if (hash.includes("formule=gestion")) setFormule("gestion");
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("ora:select-formule", handleSelect);
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section section--band" aria-labelledby="form-heading">
      <div className="wrap">
        <div className="split">
          {/* Colonne 1 : Formulaire en premier */}
          <div className="form-card">
            <h2 id="form-heading" className="h2 h2--sm">Demander un essai ou un diagnostic</h2>
            <p className="form-card__sub">
              Remplissez le formulaire, nous vous répondrons par e-mail ou par téléphone sous 24 heures ouvrées.
            </p>

            {submitted ? (
              <div className="form-success" role="status">
                <h3>Demande envoyée</h3>
                <p>Merci {fullName}. Un conseiller ORA vous recontactera sous 24 heures ouvrées concernant votre demande ({formule === "gestion" ? "Gestion déléguée" : "Logiciel ORA"}).</p>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="formule">Formule souhaitée</label>
                  <select
                    id="formule"
                    required
                    value={formule}
                    onChange={(e) => setFormule(e.target.value)}
                  >
                    <option value="" disabled>Sélectionnez une formule</option>
                    <option value="logiciel">Logiciel ORA (autonomie sur place)</option>
                    <option value="gestion">Gestion déléguée (techniciens ORA sur place)</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="fullname">Nom complet</label>
                  <input id="fullname" type="text" required autoComplete="name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>

                <div className="field">
                  <label htmlFor="email">Adresse e-mail</label>
                  <input id="email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="field">
                  <label htmlFor="phone-number">Téléphone</label>
                  <div className="field__phone">
                    <select
                      id="phone-country"
                      aria-label="Indicatif du pays"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="" disabled>Indicatif</option>
                      <option value="+228">Togo (+228)</option>
                      <option value="+226">Burkina Faso (+226)</option>
                      <option value="+225">Côte d&apos;Ivoire (+225)</option>
                      <option value="+229">Bénin (+229)</option>
                      <option value="+223">Mali (+223)</option>
                      <option value="+221">Sénégal (+221)</option>
                      <option value="+33">France (+33)</option>
                      <option value="+1">Autre</option>
                    </select>
                    <input id="phone-number" type="tel" required autoComplete="tel-national" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="farmname">Nom de la ferme</label>
                  <input id="farmname" type="text" required value={farmName} onChange={(e) => setFarmName(e.target.value)} />
                </div>

                <button type="submit" className="btn btn--primary btn--block">Envoyer ma demande</button>
              </form>
            )}

            <p className="form-card__meta">
              <span>1 mois d&apos;essai offert</span>
              <span>Sans engagement ni carte bancaire</span>
            </p>
          </div>

          {/* Colonne 2 : Visuel et accompagnement en second */}
          <div className="split__visual">
            <img
              src="/illustrations/ora-logiciel.svg"
              width={730}
              height={380}
              alt="Un éleveur devant son poulailler suit la ponte sur son téléphone, près d'un plateau d'œufs"
              loading="lazy"
            />
            <div className="contact-aside">
              <h3 className="h3" style={{ fontSize: 24, lineHeight: "30px", fontFamily: "var(--font-display)", fontWeight: 400, marginTop: 24 }}>
                Un accompagnement dédié dès votre premier jour
              </h3>
              <p className="lead" style={{ fontSize: 16, lineHeight: "24px", marginTop: 12 }}>
                Que vous choisissiez d&apos;utiliser le logiciel ORA en autonomie ou de confier votre élevage à nos techniciens, notre équipe vous aide à structurer vos opérations sans interruption d&apos;activité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
