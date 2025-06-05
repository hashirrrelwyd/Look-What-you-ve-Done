import Footer from "../components/Common/Footer";
import HeroSection from "../components/Common/HeroSection";
import Services from "../components/Service/Services";

export default function Service() {
  return (
    <>
      <HeroSection
        heroImg="hero-2.jpg"
        heroText1="Let's Work Your"
        heroText2="Dream"
        heroDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
        linkText="Start a Project"
        link="/careers"
      />
      <Services />
      <Footer />
    </>
  );
}
