import MarqueeComponent from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import SearchPopup from "@/components/headers/component/SearchPopup";
// import Blogs from "@/components/homes/common/Blogs";
import Portfolio from "@/components/homes/home-2/Portfolio";
import Contact from "@/components/homes/common/Contact";
import Testimonials from "@/components/homes/common/Testimonials";
import About from "@/components/homes/home-1/About";
import Faq from "@/components/homes/home-1/Faq";
import Hero from "@/components/homes/home-1/Hero";
import Features2 from "@/components/service/Features2";
import Steps from "@/components/homes/home-5/Steps";

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
      <Portfolio />
      <Testimonials />
      {/* <Blogs /> */}
      <Contact />
      <Footer1 />
    </>
  );
}
