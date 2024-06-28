import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import SearchPopup from "@/components/headers/component/SearchPopup";
import Blogs from "@/components/homes/common/Blogs";
import About from "@/components/homes/home-1/About";
import Faq from "@/components/homes/home-1/Faq";

import MarqueeComponent from "@/components/common/Marquee";
import Contact from "@/components/homes/common/Contact";
import Testimonials from "@/components/homes/common/Testimonials";
import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Features2 from "@/components/service/Features2";
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
      <Features2 />
      <Portfolio />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer1 />
    </>
  );
}
