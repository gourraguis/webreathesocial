import classNames from 'classnames'
import React, { FunctionComponent, ReactNode } from 'react'
import { Header } from '../../common/HeaderSection/Header/Header'
import style from './headerSection.module.scss'

export interface HeaderSection {
  className?: string
  children?: ReactNode
}

export const HeaderSection: FunctionComponent<HeaderSection> = ({ className, children }) => {
  return (
    <section className={classNames(style.section, className)}>
      <Header />

      <main className={classNames('section', style.mainContent)}>
        <div className="container">{children && React.Children.map(children, (c) => c)}</div>
      </main>
    </section>
  )
}
