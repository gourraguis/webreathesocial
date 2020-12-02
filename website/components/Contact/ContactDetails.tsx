import React, { FunctionComponent } from 'react'
import { phoneNumber } from '../../utils/constants/companyDetails'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export const ContactDetails: FunctionComponent = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column content">
            <h2 className="title has-text-primary">Office</h2>
            <p>
              17, 3rd Floor, Building A, Kamal Park Business Center,
              <br />
              Mohammedia, 28800, Morocco
            </p>

            <p>
              <span className="has-text-primary has-text-weight-bold">Phone</span>
              <br />
              {phoneNumber}
            </p>
            <p>
              <span className="has-text-primary has-text-weight-bold">Email</span>
              <br />
              letstalk@webreathesocial.com
            </p>
          </div>

          <div className="column">
            <h2 className="title has-text-primary">{`Hours Of Operation`}</h2>
            {days.map((day) => (
              <div key={day}>
                <div
                  className="columns is-mobile"
                  style={{ justifyContent: 'space-between', marginBottom: 0 }}
                >
                  <div className="column is-narrow has-text-primary has-text-weight-bold">
                    {day}
                  </div>
                  <div className="column is-narrow">9:00 am - 6:00 pm</div>
                </div>
                <hr style={{ marginTop: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
