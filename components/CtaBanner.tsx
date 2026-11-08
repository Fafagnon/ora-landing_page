"use client";

import { useState } from "react";

export default function CtaBanner() {
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [farmName, setFarmName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" aria-labelledby="form-heading">
      <div className="wrap">
        <div className="form-card">
          <h2 id="form-heading" className="h2 h2--sm">Demander un essai ou un diagnostic</h2>
          <p className="form-card__sub">
            Remplissez le formulaire, nous vous répondrons par e-mail ou par téléphone sous 24 heures ouvrées.
          </p>

          {submitted ? (
            <div className="form-success" role="status">
              <h3>Demande envoyée</h3>
              <p>Merci {fullName}. Un conseiller ORA vous recontactera sous 24 heures ouvrées.</p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
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
      </div>
    </section>
  );
}
