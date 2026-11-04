import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Paths from "@/components/Paths";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <VideoSection />
        <Paths />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
