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
  image?: string
  initialService?: string
  hasBadges?: boolean
}

export const HeaderForm: FunctionComponent<HeaderFormProps> = ({
  image,
  initialService,
  hasBadges,
}) => {
  const [isFormActive, setFormActive] = useState(false)
  const [service, setService] = useState(initialService || services[0].title)

  return isFormActive ? (
    <ContactForm />
  ) : (
    <>
      <div className={style.content}>
        <h1 className="title is-capitalized has-text-white">
          Grow Your Revenue Online <br />
        </h1>
        <p className="subtitle has-text-white">#1 Fastest Growing Digital Agency in Morocco</p>
      </div>

      {image && (
        <div className="is-hidden-desktop is-paddingless">
          <MyImage src={image} />
        </div>
      )}

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
            Get Proposal
          </button>
        </div>
      </div>

      {hasBadges && (
        <div className={classNames('columns is-mobile is-multiline', style.badges)}>
          {badges.map((badge) => (
            <div key={badge} className="column is-6-mobile">
              <MyImage src={badge} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
