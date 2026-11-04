import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Paths from "@/components/Paths";
import VideoSection from "@/components/VideoSection";
import ProductShowcase from "@/components/ProductShowcase";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <Marquee />
        <Paths />
        <VideoSection />
        <ProductShowcase />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
