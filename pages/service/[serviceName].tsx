import { NextPage } from 'next'
import React from 'react'
import { CtaSection } from '../../components/common/CtaSection/CtaSection'
import { Footer } from '../../components/common/Footer/Footer'
import { HomeHeader } from '../../components/Home/HomeHeader/HomeHeader'
import { ServiceDetails } from '../../components/Services/ServiceDetails'
import { serviceContent } from '../../utils/constants/service'

// const content = [
//   {
//     title: `POURQUOI CHOISIR NOTRE AGENCE?`,
//     text: [
//       `Définir une stratégie, établir un plan de communication, comprendre comment atteindre vos clients, lier le marketing direct et le marketing web, et passer au digital : tout cela demande, bien sûr, de la réflexion et du temps, mais c'est aussiune étape inévitable pour créer une base solide pour tout développement commercial.`,
//       `Pour cela, les technologies, les méthodes de gestion et d'organisation sont nombreuses. We Breathe Social vous assistera dans cette étape clé qui est un facteur décisif pour le succès de votre entreprise.`,
//     ],
//     image: `/icons/digital-strategy.png`,
//   },
//   {
//     title: `COMMENT METTRE EN PLACE UNE STRATÉGIE DE MARKETING EFFICACE ?`,
//     text: [
//       `Les experts de notre agence vous apportent leur savoir-faire pour permettre à votre entreprise de dynamiser son modèle économique, de développer ses parts de marché, de définir son positionnement de marque et d'élargir son portefeuille clients.`,
//       `Pour atteindre vos objectifs, vous ne pouvez pas vous limiter à une succession de décisions sans une approche unie et solide.`,
//       `C'est pourquoi chez We Breathe Social, nous analysons votre marché afin d'identifier toutes les opportunités, les ressources et les actions nécessaires à votre succès. Nous définissons votre positionnement en fonction de vos objectifs et de votre public cible afin de promouvoir votre marque et de fidéliser votre clientèle.`,
//     ],
//     image: '/icons/community-management.png',
//   },
//   {
//     title: `RÉUSSISSEZ VOTRE PLAN MARKETING GRÂCE A We Breathe Social`,
//     text: [
//       `Tout d'abord, une analyse est nécessaire pour définir votre potentiel en termes de ventes et comprendre votre style de gestion. Il est donc impératif d'établir un diagnostic de votre marché cible, une étape qui demande beaucoup de recherche.`,
//       `Notre agence vous aidera à réaliser un plan stratégique réussi en vous fournissant un rapport qui décrit au mieux votre environnement commercial.`,
//       `Il est impératif d'être constamment en interaction avec votre environnement interne et externe pour effectuer une veille active sur votre marché et l'activité de vos concurrents afin de ne pas prendre de retard.`,
//       `Il est ensuite essentiel de prendre une décision conduisant à un ciblage précis qui inclut votre cible au sens large, votre cible principale et vos cibles primaires et secondaires. Il s'agit également de définir le positionnement de votre marque et l'image que vous souhaitez véhiculer dans vos différentes actions de communication.`,
//     ],
//     image: '/icons/social-media-marketing.png',
//   },
// ]

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
