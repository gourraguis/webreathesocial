import { NextPage } from 'next'
import React from 'react'
import { CtaSection } from '../../components/common/CtaSection/CtaSection'
import { Footer } from '../../components/common/Footer/Footer'
import { HomeHeader } from '../../components/Home/HomeHeader/HomeHeader'
import { ServiceDetails } from '../../components/Services/ServiceDetails'
import { serviceContent } from '../../utils/constants/service'

export interface DigitalStrategyPageProps {
  initialService: string
  content: {
    title: string
    text: string[]
    image: string
  }[]
}

const DigitalStrategyPage: NextPage<DigitalStrategyPageProps> = ({ content, initialService }) => {
  return (
    <div>
      <HomeHeader image="/img/services-header-ceo.png" initialService={initialService} />
      <ServiceDetails content={content} />
      <CtaSection />
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      'digital-strategy',
      'community-management',
      'social-media',
      'google-campaign',
      'email-campaign',
      'lead-generation',
      'web-dev',
      'ecommerce',
    ].map((path) => ({ params: { serviceName: path } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: any }) {
  const serviceName: string = params.serviceName

  return {
    props: {
      //@ts-ignore
      initialService: serviceContent[serviceName].title,
      //@ts-ignore
      content: serviceContent[serviceName].content,
    },
  }
}

export default DigitalStrategyPage
