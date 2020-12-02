import React, { FunctionComponent, useState } from 'react'
import { handleChangeHelper, handleSubmitHelper } from '../../../utils/forms'
import { FormInput } from '../../common/Form/FormInput'
import { FormSubmitButton } from '../../common/Form/FormSubmitButton'
import { FormTextarea } from '../../common/Form/FormTextarea'

export const ContactForm: FunctionComponent = () => {
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [message, setMessage] = useState('')

  const clearForm = () => {
    setName('')
    setPhone('')
    setEmail('')
    setWebsite('')
    setMessage('')
  }

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDisabled(true)
      clearForm()
    }, 1500)
  }

  return (
    <div
      className="container is-small"
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <h1 className="title has-text-centered has-text-white">
        FREE PROPOSAL FROM ONE OF OUR EXPERTS
      </h1>
      <form onSubmit={handleSubmitHelper(handleSubmit)}>
        <div className="columns">
          <div className="column">
            <FormInput
              value={name}
              onChange={handleChangeHelper(setName)}
              placeholder="Full Name*"
              required
            />
          </div>

          <div className="column">
            <FormInput
              value={phone}
              onChange={handleChangeHelper(setPhone)}
              placeholder="Phone*"
              required
            />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <FormInput value={email} onChange={handleChangeHelper(setEmail)} placeholder="Email" />
          </div>

          <div className="column">
            <FormInput
              value={website}
              onChange={handleChangeHelper(setWebsite)}
              placeholder="Website/Company Name"
            />
          </div>
        </div>

        <FormTextarea
          value={message}
          onChange={handleChangeHelper(setMessage)}
          placeholder="Message*"
          required
        />

        <FormSubmitButton
          text={disabled ? 'Thank you, message sent!' : 'GET PROPOSAL'}
          loading={loading}
          disabled={disabled}
          className="is-info"
        />
      </form>
    </div>
  )
}
