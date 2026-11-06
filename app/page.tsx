import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ValueProps from "@/components/ValueProps";
import VideoSection from "@/components/VideoSection";
import ProductShowcase from "@/components/ProductShowcase";
import Paths from "@/components/Paths";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <Marquee />
        <ValueProps />
        <VideoSection />
        <ProductShowcase />
        <Paths />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
