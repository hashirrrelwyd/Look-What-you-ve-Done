import HeroSection from '../components/Home/HeroSection'
import AboutUsSection from '../components/Home/AboutUsSection'
import ServiceSection from '../components/Home/ServiceSection'
import TeamSection from '../components/Home/TeamSection'
import Footer from '../components/Common/Footer'
import WorksSection from '../components/Home/WorksSection'

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutUsSection />
    <ServiceSection/>
    <WorksSection/>
    {/* <TeamSection/> */}
    <Footer />
    </>
  )
}
