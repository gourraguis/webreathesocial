import classNames from 'classnames'
import React, { FunctionComponent } from 'react'
import { CtaButton } from './CtaButton'
import style from './ctaSection.module.scss'

export const CtaSection: FunctionComponent = () => {
  return (
    <div className={classNames('section has-background-info', style.section)}>
      <div className="container">
        <p className={classNames('title has-text-centered has-text-white', style.title)}>
          {`Notre expertise s'étend sur divers domaines afin que votre marque soit au mieux de ses capacités et bénéficie de tous les aspects d'une activité digitale prospère`}
        </p>

        <CtaButton />
      </div>
    </div>
  )
}
