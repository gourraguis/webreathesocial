import React, { FunctionComponent } from 'react'
import { MainMenu } from './MainMenu/MainMenu'
import { TopMenu } from './TopMenu/TopMenu'

export const Header: FunctionComponent = () => {
  return (
    <header className="section is-paddingless">
      <div className="container">
        <TopMenu />
        <MainMenu />
        <hr
          className="is-marginless is-hidden-desktop"
          style={{
            opacity: 0.25,
          }}
        />
      </div>
    </header>
  )
}
