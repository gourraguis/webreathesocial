import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { FunctionComponent } from 'react'
import { phoneNumber } from '../../../../../utils/constants/companyDetails'
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch'
import style from './topMenu.module.scss'

export const TopMenu: FunctionComponent = () => {
  return (
    <div className={classNames('columns is-hidden-touch is-vcenter', style.columns)}>
      <div className="column is-narrow">
        <a className="has-text-white" href={`tel:${phoneNumber}`}>
          <span className="icon">
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          </span>{' '}
          <span className="has-text-weight-bold">{phoneNumber}</span>
        </a>
      </div>

      <div className="column is-narrow">
        <LanguageSwitch />
      </div>
    </div>
  )
}
