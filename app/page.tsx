import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Piliers from "@/components/Piliers";
import Gestion from "@/components/Gestion";
import Tarifs from "@/components/Tarifs";
import VideoSection from "@/components/VideoSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <Piliers />
        <Gestion />
        <Tarifs />
        <VideoSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
