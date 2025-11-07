import AboutUsSection from "../components/About/AboutUsSection";
import HeroSection from "../components/Common/HeroSection";
import LwydTeam from "../components/About/LwydTeam";
import WhatDrivesUs from "../components/About/WhatDrivesUs";
import ContactUsSection from "../components/Common/ContactUsSection";
import Footer from "../components/Common/Footer";

export default function About() {
  return (
    <>
      <HeroSection
        heroImg="hero-3.avif"
        heroText1="The Story Behind the"
        heroText2="Vision"
        heroDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
        linkText="Start a Project"
        link="/contact-us" />
      <AboutUsSection />
      <WhatDrivesUs />
      <LwydTeam />
      <ContactUsSection />
      <Footer />
    </>
  );
}
