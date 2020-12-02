import { NextPage } from 'next'
import React from 'react'
import { CtaSection } from '../components/common/CtaSection/CtaSection'
import { Footer } from '../components/common/Footer/Footer'
import { VideoSection } from '../components/common/VideoSection/VideoSection'
import { AboutSection } from '../components/Home/AboutSection/AboutSection'
import { HomeHeader } from '../components/Home/HomeHeader/HomeHeader'
import { ServicesSection } from '../components/Home/ServicesSection/ServicesSection'

const HomePage: NextPage = () => {
  return (
    <div>
      <HomeHeader image="/img/home-header-ceo.png" />
      <ServicesSection />
      <VideoSection />
      <AboutSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default HomePage
