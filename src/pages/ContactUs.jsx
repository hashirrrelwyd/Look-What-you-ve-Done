import Footer from "../components/Common/Footer";
import HeroSection from "../components/Common/HeroSection";
import ContactForm from "../components/Contact/ContactForm";

export default function ContactUs() {
  return (
    <>
      <HeroSection
        heroImg="hero-3.avif"
        heroText1="Get in"
        heroText2="Touch"
        heroDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
        linkText="Contact Us"
        link="/contact-us"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
