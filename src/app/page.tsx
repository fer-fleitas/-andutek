import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technologies } from "@/components/sections/Technologies";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/effects/Marquee";
import { SpotlightTracker } from "@/components/effects/SpotlightTracker";
import { services } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Marquee items={services.map((s) => s.title)} />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Portfolio />
        <Faq />
        <Contact />
        <Technologies />
      </main>
      <Footer />
      <SpotlightTracker />
    </>
  );
}
