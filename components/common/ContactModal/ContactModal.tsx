import classNames from 'classnames'
import React, { FunctionComponent } from 'react'
import { ContactForm } from '../../Contact/ContactForm/ContactForm'
import style from './contactModal.module.scss'

export interface ContactModalProps {
  toggleModal: () => void
}

export const ContactModal: FunctionComponent<ContactModalProps> = ({ toggleModal }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={toggleModal}></div>
      <div className="modal-content">
        <div className={classNames('box has-background-primary', style.box)}>
          <ContactForm />
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={toggleModal}></button>
    </div>
  )
}
