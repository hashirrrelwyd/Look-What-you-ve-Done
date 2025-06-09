import React from "react";
import HeroSection from "../components/Common/HeroSection";
import WhoWeAre from "../components/Career/WhoWeAre";

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
    </>
  );
}
