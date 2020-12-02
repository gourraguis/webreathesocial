import React, { FormEvent, FunctionComponent } from 'react'

export interface FormTextareaProps {
  value: string
  onChange: (event: FormEvent<HTMLTextAreaElement>) => void
  label?: string
  placeholder?: string
  required?: boolean
}

export const FormTextarea: FunctionComponent<FormTextareaProps> = ({
  value,
  onChange,
  label,
  placeholder,
  required = false,
}: FormTextareaProps) => (
  <div className="field">
    {label && <label className="label">{label}</label>}
    <div className="control">
      <textarea
        className="textarea"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  </div>
)
