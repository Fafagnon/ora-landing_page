import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Piliers from "@/components/Piliers";
import Interlude from "@/components/Interlude";
import Tarifs from "@/components/Tarifs";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <Services />
        <Piliers />
        <Interlude />
        <Tarifs />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
