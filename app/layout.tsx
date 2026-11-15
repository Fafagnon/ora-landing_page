import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/figtree";
import "./main.css";

export const metadata: Metadata = {
  title: "ORA Groupe : Gestion de projets agricoles et logiciel de suivi d'élevage",
  description:
    "ORA Groupe étudie, aménage et gère votre projet agricole. Son logiciel de suivi d'élevage, utilisé par ses techniciens sur le terrain, est aussi disponible en abonnement. 1 mois d'essai gratuit.",
  openGraph: {
    title: "ORA Groupe : Votre projet agricole, notre expertise",
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
