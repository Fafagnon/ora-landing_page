import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/figtree";
import "./main.css";

export const metadata: Metadata = {
  title: "ORA Groupe : Logiciel et gestion d'élevage avicole en Afrique",
  description:
    "Gérez votre élevage vous-même avec le logiciel ORA Groupe, utilisable même sans internet, ou confiez-le aux équipes ORA Groupe en Afrique. 1 mois d'essai gratuit.",
  openGraph: {
    title: "ORA Groupe : Votre élevage, suivi au jour le jour en Afrique",
    description: "Logiciel de suivi d'élevage et gestion déléguée en Afrique.",
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
