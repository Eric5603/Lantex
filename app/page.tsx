import Hero from "./components/ui/Hero";
import Features from "./components/ui/Feature";
import CTA from "./components/ui/CTA";
import LogoGrid from "./components/ui/LogoGrid";
import Testimonials from "./components/ui/Testimonial";
import Banner from "./components/ui/Banner";

export default function Home() {
  return (
      <>
          <Hero />
          <LogoGrid/>
          <Features />
          <Banner/>
          <Testimonials/>
          <CTA />
          
      </>
  );
}
