import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import WhyUs from "@/components/WhyUs";
import B2BPromo from "@/components/B2BPromo";
import Industries from "@/components/Industries";
import Featured from "@/components/Featured";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Categories />
      <WhyUs />
      <B2BPromo />
      <Industries />
      <Featured />
      <Gallery />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
