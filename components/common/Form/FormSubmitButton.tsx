import classNames from 'classnames'
import React, { FunctionComponent } from 'react'

export interface FormSubmitButtonProps {
  text: string
  className?: string
  disabled?: boolean
  loading?: boolean
}

export const FormSubmitButton: FunctionComponent<FormSubmitButtonProps> = ({
  text,
  className,
  disabled = false,
  loading = false,
}: FormSubmitButtonProps) => (
  <div className="field">
    <div className="control">
      <button
        className={classNames(
          'button is-primary is-fullwidth',
          { 'is-loading': loading },
          className
        )}
        disabled={disabled || loading}
      >
        {text}
      </button>
    </div>
  </div>
)
