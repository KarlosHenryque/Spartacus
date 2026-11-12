import { Header, Footer, WhatsAppFab } from "@/components/Chrome";
import Hero from "@/components/Hero";
import { About, Modalities, Structure, Team, Gallery, CTA, Location } from "@/components/Sections";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Modalities />
        <Structure />
        <Team />
        <Gallery />
        <CTA />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
