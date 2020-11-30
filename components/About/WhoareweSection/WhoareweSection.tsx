import React, { FunctionComponent } from 'react'
import { CtaButton } from '../../common/CtaSection/CtaButton'

export const WhoareweSection: FunctionComponent = () => {
  return (
    <section className="section has-background-info">
      <div className="container is-small">
        <div className="content has-text-centered has-text-white">
          <h2 className="has-text-white">Qui sommes-nous ?</h2>
          <p>
            Soyons clairs : les réseaux sociaux sont la dernière frontière en matière de marketing
            numérique. Les marques ont des possibilités infinies de s'engager auprès de leurs
            communautés par le biais de contenus créatifs, et c'est là que nous intervenons.
          </p>
          <p>
            {`Parce que nous nous épanouissons dans la créativité, que nous brillons sous le talent,
            le génie et l'imagination, nous nous attachons à développer des campagnes de réseaux
            sociaux innovantes, divertissantes et audacieuses pour vous permettre de vous
            DISTINGUER.`}
          </p>
          <p>
            We Breathe Social est née de l’envie de notre équipe de mettre son savoir faire
            inégalable au service des entreprises en quête d’accroître et de faire prospérer leur
            business en ligne.
          </p>
          <h3 className="has-text-white">
            En résumé : nous sommes faits pour vous et nous savons déjà que vous êtes faits pour
            nous.
          </h3>
        </div>

        <CtaButton />
      </div>
    </section>
  )
}
