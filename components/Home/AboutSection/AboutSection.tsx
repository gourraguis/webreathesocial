import React, { FunctionComponent } from 'react'

const paragraphs = [
  `Chez We Breathe Social, notre passion est de fournir des services de marketingdigital de pointe qui ont un impact réel et tangible sur les revenus de l’entreprise.Notre approche perspicace, basée sur les données, a aidé des dizaines à fairecroître leur marque jusqu'à son plein potentiel.`,
  `Toute société de marketing digital peut prétendre stimuler vos pistes, vos venteset votre trafic sur le web, mais elle utilisera les mêmes stratégies que cellesqu'elle a mises en œuvre pour tous les autres clients avant vous. La différence principale est que lorsque nous nous associons avec vous, nous faisons tout cequi est en notre pouvoir pour comprendre pleinement votre niche. Chaque stratégie digitale que nous produisons est spécifiquement adaptée à votre business.`,
  `Chaque campagne que nous déployons a été élaborée à la perfection à partir desdonnées collectées sur votre public cible idéale, chaque stratégie étant mesurée,analysée et ajustée jusqu'à ce qu'elle soit la plus performante possible. Nouspositionnons votre business de manière à ce qu'il soit là où votre public cibleregarde déjà, et c'est là que la magie opère.`,
  `Notre agence digitale à Mohammedia sait qu'il n'existe pas d'approche unique enmatière de marketing digital, et nous aimons approfondir les données pourobtenir des résultats réels pour votre business. Que vous optiez pour nos servicesde consulting digital , nos stratégies professionnelles de PPC ou notre publicitésur les réseaux sociaux pour mettre votre business sous les feux de la rampe,vous pouvez être sûr que We Breathe Social dépassera vos attentes.`,
]

export const AboutSection: FunctionComponent = () => {
  return (
    <div className="section has-background-primary">
      <div className="container">
        <div className="content">
          <h2 className="has-text-centered has-text-white">
            A digital agency in Morocco with a difference
          </h2>
          <div className="columns is-multiline">
            {paragraphs.map((paragraph) => (
              <div className="column is-6" key={paragraph}>
                <p className="has-text-white has-text-centered">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
