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
      <div className="columns is-vcentered is-centered is-mobile" style={{ height: '100%' }}>
        <div
          className="column is-narrow has-text-centered"
          style={{
            background: 'rgb(0, 0, 0, 0.5)',
            padding: '1rem',
            borderRadius: 36,
            maxWidth: '80%',
          }}
        >
          <div className="content">
            <h1 className="title is-capitalized has-text-white">Grow Your Revenue Online</h1>
            <p className="subtitle has-text-white">#1 Fastest Growing Digital Agency in Morocco</p>
          </div>

          <button className="button is-info is-medium is-bold is-fullwidth" onClick={toggleModal}>
            GET A FREE PROPOSAL
          </button>
        </div>
      </div>
      {isModalActive && <ContactModal toggleModal={toggleModal} />}
    </HeaderSection>
  )
}
