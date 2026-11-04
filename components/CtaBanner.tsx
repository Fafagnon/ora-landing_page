"use client";

import { useState } from "react";
import { site } from "@/lib/site.config";

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

  const whatsappAdvisorUrl = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=Bonjour%20ORA,%20je%20souhaite%20%C3%A9changer%20avec%20un%20conseiller%20d%27%C3%A9levage.`
    : "https://wa.me/?text=Bonjour%20ORA,%20je%20souhaite%20%C3%A9changer%20avec%20un%20conseiller.";

  return (
    <section id="contact" className="contact-form-section" aria-labelledby="form-heading">
      <div className="wrap">
        <div className="contact-dual-layout">
          {/* Bloc CTA 1 : Parler avec un conseiller */}
          <div className="contact-advisor-card">
            <div className="contact-advisor-header">
              <span className="contact-advisor-pill">Échange direct</span>
              <h2 className="contact-advisor-title">
                Parler avec un conseiller
              </h2>
              <p className="contact-advisor-subtitle">
                Vous avez un projet d&apos;élevage ou souhaitez faire auditer la conduite de votre cheptel ? Nos agronomes et spécialistes de terrain sont à votre disposition pour vous orienter.
              </p>
            </div>

            <ul className="contact-advisor-benefits">
              <li>
                <div className="contact-advisor-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <strong>Diagnostic sans engagement</strong>
                  <p>Évaluation personnalisée de votre exploitation et de vos charges d&apos;aliment.</p>
                </div>
              </li>
              <li>
                <div className="contact-advisor-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <strong>Réponse sous 24h ouvrées</strong>
                  <p>Prise de contact rapide par téléphone ou messagerie WhatsApp selon votre préférence.</p>
                </div>
              </li>
              <li>
                <div className="contact-advisor-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <strong>Équipes locales de proximité</strong>
                  <p>Techniciens déployés sur le terrain à Lomé (Togo) et Ouagadougou (Burkina Faso).</p>
                </div>
              </li>
            </ul>

            <div className="contact-advisor-actions">
              <a
                href={whatsappAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-advisor-whatsapp"
                aria-label="Échanger directement avec un conseiller ORA sur WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3" />
                </svg>
                <span>Échanger sur WhatsApp</span>
              </a>

              <div className="contact-advisor-direct-phones">
                <span className="contact-advisor-phone-label">Lignes directes :</span>
                <div className="contact-advisor-phone-links">
                  <a href={`tel:${site.phoneTogo.replace(/\s+/g, "")}`} className="contact-advisor-phone-tag">
                    Togo : {site.phoneTogo}
                  </a>
                  <a href={`tel:${site.phoneBurkina.replace(/\s+/g, "")}`} className="contact-advisor-phone-tag">
                    Burkina : {site.phoneBurkina}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bloc Formulaire : Demander un essai gratuit */}
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
              <span>Essai 1 mois gratuit</span>
              <span className="contact-form-footer-sep" aria-hidden="true">·</span>
              <span>Sans engagement ni carte bancaire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
