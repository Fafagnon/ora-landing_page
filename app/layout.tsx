import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/figtree";
import "./main.css";

export const metadata: Metadata = {
  title: "ORA : Logiciel et gestion d'élevage au Togo et au Burkina Faso",
  description:
    "Gérez votre élevage vous-même avec le logiciel ORA, utilisable même sans internet, ou confiez-le aux équipes ORA. 1 mois d'essai gratuit.",
  openGraph: {
    title: "ORA : Votre élevage, suivi au jour le jour",
    description: "Logiciel de suivi d'élevage et gestion déléguée.",
    locale: "fr_FR",
    type: "website",
  },
};
export const viewport: Viewport = { themeColor: "#094C36", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a className="skip" href="#contenu">Aller au contenu</a>
        {children}
      </body>
    </html>
  );
}
