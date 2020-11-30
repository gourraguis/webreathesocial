import { NextPage } from 'next'
import React from 'react'
import { AboutHeader } from '../components/About/WhoareweSection/AboutHeader/AboutHeader'
import { WhoareweSection } from '../components/About/WhoareweSection/WhoareweSection'
import { Footer } from '../components/common/Footer/Footer'
import { VideoSection } from '../components/common/VideoSection/VideoSection'

const AboutPage: NextPage = () => {
  return (
    <div>
      <AboutHeader />
      <WhoareweSection />
      <VideoSection />
      <Footer />
    </div>
  )
}

export default AboutPage
