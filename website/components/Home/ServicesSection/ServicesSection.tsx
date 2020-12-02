import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { services } from '../../../utils/constants/services'
import { MyImage } from '../../common/MyImage'
import style from './servicesSection.module.scss'

export const ServicesSection: FunctionComponent = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="content has-text-centered">
          <h2>Our Services</h2>
          <p>Our digital agency in Morocco enjoys a vigorous reputation for delivering powerful, captivating and successful digital solutions</p>
        </div>

        <div className="columns is-multiline is-mobile">
          {services.map(({ title, image, href }) => (
            <Link href={href} key={title}>
              <a className="column is-3-tablet is-6-mobile has-text-centered has-text-black">
                <MyImage src={image} classname={style.serviceImage} />
                <h3 className="is-size-6 has-text-weight-bold is-uppercase">{title}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
