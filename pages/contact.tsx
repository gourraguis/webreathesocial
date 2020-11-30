import { NextPage } from 'next'
import React from 'react'
import { CtaSection } from '../components/common/CtaSection/CtaSection'
import { Footer } from '../components/common/Footer/Footer'
import { HeaderSection } from '../components/common/HeaderSection/HeaderSection'
import { ContactDetails } from '../components/Contact/ContactDetails'
import { ContactForm } from '../components/Contact/ContactForm/ContactForm'
import { ContactMap } from '../components/Contact/ContactMap'

const ContactPage: NextPage = () => {
  return (
    <div>
      <HeaderSection>
        <div style={{ paddingBottom: '3rem' }}>
          <ContactForm />
        </div>
      </HeaderSection>
      <ContactDetails />
      <ContactMap />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default ContactPage
