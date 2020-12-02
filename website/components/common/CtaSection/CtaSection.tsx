import classNames from 'classnames'
import React, { FunctionComponent } from 'react'
import { CtaButton } from './CtaButton'
import style from './ctaSection.module.scss'

export const CtaSection: FunctionComponent = () => {
  return (
    <div className={classNames('section has-background-info', style.section)}>
      <div className="container">
        <p className={classNames('title has-text-centered has-text-white', style.title)}>
          {`Planning to take your business online? Make sure that its first social breath is a successful one. Get in touch with our talented team at We Breathe Social now!`}
        </p>

        <CtaButton />
      </div>
    </div>
  )
}
