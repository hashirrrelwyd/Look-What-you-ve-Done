import AboutUsSection from "../components/About/AboutUsSection";
import HeroSection from "../components/About/HeroSection";
import LwydTeam from "../components/About/LwydTeam";
import WhatDrivesUs from "../components/About/WhatDrivesUs";
import ContactUsSection from "../components/About/ContactUsSection";
import Footer from "../components/Common/Footer";

export default function About() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <WhatDrivesUs />
      <LwydTeam />
      <ContactUsSection />
      <Footer />
    </>
  );
}
