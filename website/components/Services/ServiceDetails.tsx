import classNames from 'classnames'
import React, { FunctionComponent } from 'react'
import { MyImage } from '../common/MyImage'
import style from './serviceDetails.module.scss'

export interface ServiceDetailsProps {
  content: {
    title: string
    text: string[]
    image: string
  }[]
}

export const ServiceDetails: FunctionComponent<ServiceDetailsProps> = ({ content }) => {
  return (
    <section className="section">
      <div className="container">
        {content.map(({ title, text, image }, index) => (
          <div
            key={index}
            className={classNames('columns is-centered is-vcentered', {
              [style['reverse-direction']]: index % 2,
            })}
          >
            <div className="column is-6">
              <MyImage src={image} classname={style.image} />
            </div>

            <div className="column is-6 content">
              <h2 className="title has-text-primary is-uppercase">{title}</h2>
              {text.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
