import Image from "next/image";
import { site } from "@/lib/site.config";
import StarBorder from "@/components/StarBorder";

export default function Hero() {
  const whatsappUrl = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=Bonjour%20ORA,%20je%20souhaite%20des%20renseignements%20sur%20vos%20solutions%20d%27%C3%A9levage.`
    : "https://wa.me/?text=Bonjour%20ORA,%20je%20souhaite%20des%20renseignements";

  return (
    <section className="hero-editorial" aria-labelledby="hero-heading">
      {/* Arrière-plan panoramique avec brume et fondus atmosphériques */}
      <div className="hero-editorial__backdrop" aria-hidden="true">
        <Image
          src="/hero-ora.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-editorial__img"
        />
        <div className="hero-editorial__fade-top" />
        <div className="hero-editorial__fade-bottom" />
        <div className="hero-editorial__ambient-light" />
      </div>

      <div className="wrap hero-editorial__wrap">
        <div className="hero-editorial__content">
          {/* Titre éditorial noble et lisible */}
          <h1 id="hero-heading" className="hero-editorial__title">
            La référence en gestion et conseil pour votre élevage.
          </h1>

          {/* Paragraphe d'accroche centré avec verbes d'action clés */}
          <p className="hero-editorial__lead">
            <strong>Suivez</strong> vos pontes, <strong>maîtrisez</strong> vos aliments, <strong>planifiez</strong> vos vaccins et <strong>sécurisez</strong> votre bénéfice net au FCFA. L&apos;outil tout-en-un conçu pour le terrain au Togo et au Burkina Faso.
          </p>

          {/* Double action : Bouton StarBorder principal + Bouton WhatsApp */}
          <div className="hero-editorial__actions">
            <StarBorder
              as="a"
              href="#contact"
              color="#F5B84B"
              backgroundColor="#094C36"
              textColor="#FFFFFF"
              radius={9999}
              thickness={1.5}
              duration={7.5}
              glow={0.8}
              sparkle={true}
              className="hero-editorial__cta-star"
            >
              <span>Demander un essai gratuit</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </StarBorder>

            <a
              className="hero-editorial__btn-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter ORA sur WhatsApp"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="hero-editorial__whatsapp-icon"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Ligne de réassurance sobre style Réa */}
          <div className="hero-editorial__reassurance">
            <span className="hero-editorial__reassurance-item">✓ 1 mois d&apos;essai offert</span>
            <span className="hero-editorial__reassurance-sep" aria-hidden="true">·</span>
            <span className="hero-editorial__reassurance-item">✓ Sans engagement ni carte bancaire</span>
            <span className="hero-editorial__reassurance-sep" aria-hidden="true">·</span>
            <span className="hero-editorial__reassurance-item">✓ Smartphone &amp; ordinateur</span>
          </div>
        </div>
      </div>
    </section>
  );
}
