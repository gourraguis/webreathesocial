import React, { FunctionComponent } from 'react'
import { phoneNumber } from '../utils/constants/companyDetails'

export const ThankYouSection: FunctionComponent = () => {
  return (
    <div
      className="container is-small"
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <h1 className="title is-1 has-text-centered has-text-white" style={{ marginBottom: '3rem' }}>
        {`Yes! Welcome to more leads, sales & success online.`}
      </h1>
      <h2 className="subtitle is-4 has-text-centered has-text-white">
        Your Digital Growth Specialist will be in touch within 24 hours. Alternatively, for an
        instant chat, please call <strong className="has-text-white">{phoneNumber}</strong>
      </h2>
    </div>
  )
}
