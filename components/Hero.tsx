import { site } from "@/lib/site.config";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=Bonjour%20ORA,%20je%20souhaite%20des%20renseignements.`;

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="wrap hero__grid">
        <div className="hero__content">
          <h1 id="hero-heading" className="hero__title rise" style={{ ["--i" as string]: 0 }}>
            Votre élevage, suivi au jour le jour
          </h1>

          <p className="hero__lead rise" style={{ ["--i" as string]: 1 }}>
            ORA est un logiciel pour suivre vous-même vos pontes, vos aliments et vos vaccins, et un cabinet
            qui gère votre ferme à votre place avec ce même logiciel. En Afrique.
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

          <p className="hero__meta rise" style={{ ["--i" as string]: 3 }}>
            <span>1 mois d&apos;essai offert</span>
            <span>Sans engagement ni carte bancaire</span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Écrire sur WhatsApp</a>
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
