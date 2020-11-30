import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Link from 'next/link'
import React, { FunctionComponent, useState } from 'react'
import { phoneNumber } from '../../../../../utils/constants/companyDetails'
import { ContactModal } from '../../../ContactModal/ContactModal'
import style from './mainMenu.module.scss'

export const MainMenu: FunctionComponent = () => {
  const [isBugerActive, setBurgerActive] = useState(false)
  const [isModalActive, setModalActive] = useState(false)

  const toggleBurger = () => {
    setBurgerActive(!isBugerActive)
  }

  const toggleModal = () => {
    setModalActive(!isModalActive)
  }

  return (
    <nav
      className={classNames('navbar is-transparent', style.navbar)}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img className={style.logo} src="/logo-white.png" />
          </a>
        </Link>

        <a
          role="button"
          className={classNames('navbar-burger burger has-text-white', {
            'is-active': isBugerActive,
          })}
          onClick={toggleBurger}
          aria-label="menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <a className="navbar-call has-text-white is-hidden-desktop" href={`tel:${phoneNumber}`}>
          <span className="icon">
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          </span>
        </a>
      </div>

      <div className={classNames('navbar-menu', { 'is-active': isBugerActive })}>
        <div className="navbar-end">
          <Link href="/">
            <a className={classNames('navbar-item', style.navItem)}>HOME</a>
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className={classNames('navbar-item', style.navItem)}>SERVICES</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Service 1</a>
              <a className="navbar-item">Service 2</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Service 3</a>
            </div>
          </div>

          <Link href="/blog">
            <a className={classNames('navbar-item', style.navItem)}>BLOG</a>
          </Link>

          <Link href="/about">
            <a className={classNames('navbar-item', style.navItem)}>ABOUT US</a>
          </Link>

          <Link href="/contact">
            <a className={classNames('navbar-item', style.navItem)}>CONTACT</a>
          </Link>

          <div className="navbar-item">
            <a className="button is-bold is-info" onClick={toggleModal}>
              GET FREE QUOTE
            </a>
          </div>
        </div>
      </div>
      {isModalActive && <ContactModal toggleModal={toggleModal} />}
    </nav>
  )
}
