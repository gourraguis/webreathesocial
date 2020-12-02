import React, { FormEvent, FunctionComponent } from 'react'

export interface FormInputProps {
  value: string | number
  onChange: (event: FormEvent<HTMLInputElement>) => void
  label?: string
  required?: boolean
  disabled?: boolean
  type?: string
  placeholder?: string
  className?: string
}

export const FormInput: FunctionComponent<FormInputProps> = ({
  value,
  onChange,
  label,
  required = true,
  disabled = false,
  type = 'text',
  placeholder,
}: FormInputProps) => (
  <div className="field">
    {label && <label className="label">{label}</label>}
    <div className="control">
      <input
        className="input"
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
      />
    </div>
  </div>
)
