import { FormEvent } from 'react'

export const handleChangeHelper = (fn: (value: string) => void) => (
  event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
): void => fn(event.currentTarget.value)

export const handleCheckboxChangeHelper = (fn: (value: boolean) => void) => (event: any): void =>
  fn(event.target.checked)

export const handleSubmitHelper = (fn: () => void) => (event: FormEvent): void => {
  event.preventDefault()
  fn()
}
