import MarqueeComponent from "@/components/common/Marquee";
import Header1 from "@/components/headers/Header1";
import SearchPopup from "@/components/headers/component/SearchPopup";
import Contact from "@/components/homes/common/Contact";
import Testimonials from "@/components/homes/common/Testimonials";
import About from "@/components/homes/home-1/About";
import Faq from "@/components/homes/home-1/Faq";
import Hero from "@/components/homes/home-1/Hero";
import Features2 from "@/components/service/Features2";
import Steps from "@/components/homes/home-5/Steps";
import Footer3 from "@/components/footers/Footer3";
import Projects from "@/components/homes/home-4/Projects";
import Cta from "@/components/homes/home-3/Cta";

export const metadata = {
  title: "Banana Web Solutions",
};

export default function HomePage1() {
  return (
    <>
      <SearchPopup />
      <Header1 />
      <Hero />
      <About />
      <MarqueeComponent />
      <Faq />
      <Steps />
      <Features2 />
      <Projects />
      <Testimonials />
      <Contact />
      <Cta />
      <Footer3 />
    </>
  );
}
