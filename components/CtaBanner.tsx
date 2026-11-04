"use client";

import { useState } from "react";

export default function CtaBanner() {
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState("+228");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [farmName, setFarmName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-form-section" aria-labelledby="form-heading">
      <div className="wrap">
        <div className="contact-form-card">
          <div className="contact-form-header">
            <h2 id="form-heading" className="contact-form-title">
              Demander un essai gratuit
            </h2>
            <p className="contact-form-subtitle">
              Remplissez ce formulaire, nous vous répondrons par e-mail ou par téléphone.
            </p>
          </div>

          {submitted ? (
            <div className="contact-form-success" role="status">
              <div className="contact-form-success-icon" aria-hidden="true">✓</div>
              <h3>Demande envoyée avec succès</h3>
              <p>
                Merci {fullName}. Notre conseiller d&apos;élevage au Togo et au Burkina Faso vous recontactera sous 24 heures ouvrées.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Nom complet */}
              <div className="contact-form-group">
                <label htmlFor="fullname" className="contact-form-label">
                  Nom complet
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  placeholder="Nom complet"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="contact-form-input"
                />
              </div>

              {/* Adresse e-mail */}
              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Adresse e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="contact-form-input"
                />
              </div>

              {/* Téléphone */}
              <div className="contact-form-group">
                <label htmlFor="phone-number" className="contact-form-label">
                  Téléphone
                </label>
                <div className="contact-form-phone-row">
                  <select
                    id="phone-country"
                    aria-label="Choisir un pays"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="contact-form-select"
                  >
                    <option value="+228">Togo (+228)</option>
                    <option value="+226">Burkina Faso (+226)</option>
                    <option value="+225">Côte d&apos;Ivoire (+225)</option>
                    <option value="+229">Bénin (+229)</option>
                    <option value="+223">Mali (+223)</option>
                    <option value="+221">Sénégal (+221)</option>
                    <option value="+33">France (+33)</option>
                    <option value="+1">Autre pays</option>
                  </select>

                  <input
                    id="phone-number"
                    type="tel"
                    required
                    placeholder="Numéro de téléphone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="contact-form-input contact-form-input--phone"
                  />
                </div>
              </div>

              {/* Nom de la ferme */}
              <div className="contact-form-group">
                <label htmlFor="farmname" className="contact-form-label">
                  Nom de la ferme
                </label>
                <input
                  id="farmname"
                  type="text"
                  required
                  placeholder="Nom de la ferme"
                  value={farmName}
                  onChange={(e) => setFarmName(e.target.value)}
                  className="contact-form-input"
                />
              </div>

              {/* Bouton d'action */}
              <div className="contact-form-submit-wrap">
                <button type="submit" className="contact-form-submit">
                  Envoyer ma demande
                </button>
              </div>
            </form>
          )}

          <div className="contact-form-footer-meta">
            <span>Essai 1 mois gratuit sur le logiciel</span>
            <span className="contact-form-footer-sep" aria-hidden="true">·</span>
            <span>Sans engagement ni carte bancaire</span>
            <span className="contact-form-footer-sep" aria-hidden="true">·</span>
            <span>Conseillers disponibles au Togo et au Burkina Faso</span>
          </div>
        </div>
      </div>
    </section>
  );
}
