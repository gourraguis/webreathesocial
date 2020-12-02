import classNames from 'classnames'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import style from './languageSwitch.module.scss'

export const LanguageSwitch: FunctionComponent = () => {

  return (
    <ul className={classNames(style.switch)}>
      <li className={classNames('column is-narrow', style.active)}>
        <Link href='/'>
        <a lang='en' hrefLang='en' className='has-text-white'>
          EN
        </a></Link>
      </li>

      <li className='column is-narrow'>
        <Link href='/fr'>
        <a lang='fr' hrefLang='fr' className='has-text-white'>
          FR
        </a></Link>
      </li>
    </ul>
  )
}