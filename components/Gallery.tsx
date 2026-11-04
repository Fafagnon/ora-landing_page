import Image from "next/image";

export default function Gallery() {
  const photos = [
    {
      src: "/pexels-gonuldenbirkare-2148244190-37006636.jpg",
      alt: "Volailles saines et vigoureuses dans un élevage suivi par ORA",
      caption: "🐔 Suivi régulier des lots & maîtrise des taux de mortalité",
      tag: "Santé du Cheptel",
    },
    {
      src: "/pexels-tivasee-17374727-6430988.jpg",
      alt: "Basse-cour et exploitation agricole au quotidien",
      caption: "🌾 Bâtiments propres, alimentation rationnée et hygiène maîtrisée",
      tag: "Gestion Terrain",
    },
  ];

  return (
    <section id="galerie" className="gallery-section" aria-labelledby="gallery-title">
      <div className="wrap">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-tag">Ancrage &amp; Terroir</span>
          <h2 id="gallery-title">Des Fermes Vivantes &amp; Rentables</h2>
          <p className="lead" style={{ marginInline: "auto", marginTop: 12 }}>
            Chaque jour sur le terrain au Togo et au Burkina Faso, ORA accompagne les éleveurs pour transformer leurs fermes en entreprises prospères.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((p, idx) => (
            <figure key={idx} className="gallery-card">
              <div style={{ position: "relative" }}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={800}
                  height={600}
                  className="gallery-card__img"
                />
                <span className="path-card__badge" style={{ top: 12, left: 12 }}>
                  {p.tag}
                </span>
              </div>
              <figcaption className="gallery-card__caption">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

