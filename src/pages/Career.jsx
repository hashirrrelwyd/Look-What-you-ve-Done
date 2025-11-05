import HeroSection from "../components/Common/HeroSection";
import WhoWeAre from "../components/Career/WhoWeAre";
import WhyBrandsChooseUs from "../components/Service/WhyBrandsChooseUs"
import OpenRoles from "../components/Career/OpenRoles";
import FAQs from "../components/Career/FAQs";
import Footer from "../components/Common/Footer";

export default function Career() {
  return (
    <>
      <HeroSection
        heroImg="hero.jpg"
        heroText1="The Story Behind the"
        heroText2="Vision"
        heroDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
        linkText="Start a Project"
        link="/careers"
      />
      <WhoWeAre />
      <WhyBrandsChooseUs/>
      <OpenRoles/>
      <FAQs />
      <Footer/>
    </>
  );
}
