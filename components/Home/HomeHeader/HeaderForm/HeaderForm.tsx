import classNames from 'classnames'
import React, { FunctionComponent, useState } from 'react'
import { services } from '../../../../utils/constants/services'
import { handleChangeHelper } from '../../../../utils/forms'
import { MyImage } from '../../../common/MyImage'
import { ContactForm } from '../../../Contact/ContactForm/ContactForm'
import style from './headerForm.module.scss'

const badges = [
  '/badges/google.png',
  '/badges/seo.png',
  '/badges/campasia.png',
  '/badges/award.png',
]

export interface HeaderFormProps {
  image: string
  initialService?: string
}

export const HeaderForm: FunctionComponent<HeaderFormProps> = ({ image, initialService }) => {
  const [isFormActive, setFormActive] = useState(false)
  const [service, setService] = useState(initialService || services[0].title)

  return isFormActive ? (
    <ContactForm />
  ) : (
    <>
      <div className={classNames(style.content)}>
        <h1 className="title is-capitalized has-text-white">
          Vous voulez faire <br /> nous pouvons mieux faire
        </h1>
        <p className="subtitle has-text-white">Guidés par la passion, Axés solutions</p>
      </div>

      <div className="is-hidden-desktop is-paddingless" style={{ marginTop: '2rem' }}>
        <MyImage src={image} />
      </div>

      <div className={classNames('field has-addons', style.selectField)}>
        <div className="control">
          <div className="select is-large">
            <select value={service} onChange={handleChangeHelper(setService)}>
              {services.map(({ title }) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="control">
          <button
            type="button"
            className="button is-large is-fullwidth is-info"
            onClick={() => setFormActive(true)}
          >
            Get a quote
          </button>
        </div>
      </div>

      <div className={classNames('columns is-mobile is-multiline', style.badges)}>
        {badges.map((badge) => (
          <div key={badge} className="column is-6-mobile">
            <MyImage src={badge} />
          </div>
        ))}
      </div>
      <p className="has-text-white has-text-centered">
        <strong className="has-text-white">#1 fastest growing digital agency</strong> in Morocco
      </p>
    </>
  )
}
