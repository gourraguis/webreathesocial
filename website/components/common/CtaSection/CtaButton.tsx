import React, { FunctionComponent, useState } from 'react'
import { ContactModal } from '../ContactModal/ContactModal'

export const CtaButton: FunctionComponent = () => {
  const [isModalActive, setModalActive] = useState(false)

  const toggleModal = () => {
    setModalActive(!isModalActive)
  }
  return (
    <>
      <div className="columns is-centered is-mobile">
        <div className="column is-narrow">
          <button className="button is-bold is-info is-medium is-inverted" onClick={toggleModal}>
            FREE AUDIT FROM AN EXPERT
          </button>
        </div>
      </div>
      {isModalActive && <ContactModal toggleModal={toggleModal} />}
    </>
  )
}
