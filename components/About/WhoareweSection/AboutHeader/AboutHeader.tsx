import React, { FunctionComponent, useState } from 'react'
import { ContactModal } from '../../../common/ContactModal/ContactModal'
import { HeaderSection } from '../../../common/HeaderSection/HeaderSection'
import style from './aboutHeader.module.scss'

export const AboutHeader: FunctionComponent = () => {
  const [isModalActive, setModalActive] = useState(false)

  const toggleModal = () => {
    setModalActive(!isModalActive)
  }
  return (
    <HeaderSection className={style.section}>
      <div className="columns is-vcentered">
        <div className="column is-narrow">
          <div className="content">
            <h1 className="title is-capitalized has-text-white">
              Vous voulez faire <br /> nous pouvons mieux faire
            </h1>
            <p className="subtitle has-text-white">Guidés par la passion, Axés solutions</p>
          </div>

          <button className="button is-info is-medium is-bold" onClick={toggleModal}>
            PRENDRE UN RDV
          </button>
        </div>
      </div>
      {isModalActive && <ContactModal toggleModal={toggleModal} />}
    </HeaderSection>
  )
}
