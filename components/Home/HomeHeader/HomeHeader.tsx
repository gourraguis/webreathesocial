import classNames from 'classnames'
import React, { FunctionComponent } from 'react'
import { HeaderSection } from '../../common/HeaderSection/HeaderSection'
import { MyImage } from '../../common/MyImage'
import { HeaderForm } from './HeaderForm/HeaderForm'
import style from './homeHeader.module.scss'

export interface HomeHeaderProps {
  image: string
  initialService?: string
}

export const HomeHeader: FunctionComponent<HomeHeaderProps> = ({ image, initialService }) => {
  return (
    <HeaderSection>
      <div className={classNames('columns', style.columns)}>
        <div className="column is-6-desktop is-9-tablet" style={{ paddingBottom: '1.5rem' }}>
          <HeaderForm image={image} initialService={initialService} />
        </div>
      </div>
      <MyImage src={image} classname={classNames('is-hidden-touch', style.heroImage)} />
    </HeaderSection>
  )
}
