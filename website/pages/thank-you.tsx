import { NextPage } from 'next'
import React from 'react'
import { CtaSection } from '../components/common/CtaSection/CtaSection'
import { Footer } from '../components/common/Footer/Footer'
import { HeaderSection } from '../components/common/HeaderSection/HeaderSection'
import { ContactDetails } from '../components/Contact/ContactDetails'
import { ContactMap } from '../components/Contact/ContactMap'
import { ThankYouSection } from '../components/ThankYouSection'

const ThankYouPage: NextPage = () => {
  return (
    <div>
      <HeaderSection>
        <div style={{ paddingBottom: '3rem' }}>
          <ThankYouSection />
        </div>
      </HeaderSection>
      <ContactDetails />
      <ContactMap />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default ThankYouPage
