import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { phoneNumber } from '../../../utils/constants/companyDetails'
import { services } from '../../../utils/constants/services'
import { socialMediaLinks } from '../../../utils/constants/socialMedialLinks'
import style from './footer.module.scss'

export const Footer: FunctionComponent = () => {
  return (
    <footer className="footer has-background-primary" style={{ paddingBottom: '3rem' }}>
      <div className="columns">
        <div className="column is-4">
          <h2 className="title is-4 has-text-white">SERVICES</h2>
          <ul>
            {services.map(({ title, href }) => (
              <li className={style.service} key={title}>
                <Link href={href}>
                  <a className="has-text-white">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="column is-4">
          <h2 className="title is-4 has-text-white">CONTACT</h2>
          <div className="content has-text-white">
            <p className="has-text-weight-bold">We Breathe Social</p>
            <p>17, 3rd Floor, Building A, Kamal Park Business Center, Mohammedia, 28800, Morocco</p>
            <p>
              <span className="has-text-weight-bold">Phone :</span> {phoneNumber}
            </p>
            <p>
              <span className="has-text-weight-bold">Email :</span> letstalk@webreathesocial.com
            </p>
          </div>
        </div>

        <div className="column is-4">
          <h2 className="title is-4 has-text-white">FOLLOW US</h2>

          <div className={classNames('columns is-mobile', style.socialMediaLinks)}>
            {socialMediaLinks.map(({ link, icon }) => (
              <div key={link} className="column">
                <a href={link} target="_blank" rel="noreferrer">
                  <span className="icon is-large has-text-white">
                    <FontAwesomeIcon icon={icon as any} size="3x" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="has-text-white has-text-centered">
        Copyright © {new Date().getFullYear()} We Breathe Social.
      </p>
    </footer>
  )
}
