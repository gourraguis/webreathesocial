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
          <h2>Une solution 360°</h2>
          <p>Nous accompagnons les marques dans chaque étape de leur transformation digitale.</p>
          <p>
            {`Du conseil stratégique et de la recherche à l'idéation et la production de concepts, en
            passant par l’achat d’espaces publicitaires.`}
          </p>
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
