import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutUsSection'
import ServiceSection from '../components/ServiceSection'
import WorksSection2 from '../components/WorksSection2'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'
import ScrollLinked from '../components/ScrollLinked'
import WorksSection from '../components/WorksSection'

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutUsSection />
    <ServiceSection/>
    <WorksSection/>
    {/* <WorksSection2/> */}
    {/* <ScrollLinked/> */}
    {/* <TeamSection/> */}
    <Footer />
    </>
  )
}
