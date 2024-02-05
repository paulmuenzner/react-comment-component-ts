import { Fragment } from 'react'
import { InputFieldTypes } from './interfaces'
import { Input, Label } from './styles'

export const InputField = ({
  maxLength,
  spellCheck,
  autoComplete,
  type,
  name,
  label,
  placeholder,
  item,
  updateChange,
}: InputFieldTypes) => {
  return (
    <Fragment>
      <Label htmlFor={name}>{label}</Label>
      <form autoComplete={autoComplete}>
        <Input
          maxLength={maxLength}
          id={name}
          name={name}
          spellCheck={spellCheck}
          type={type}
          placeholder={placeholder}
          onChange={({ target }: { target: EventTarget & HTMLInputElement }) =>
            updateChange({ ...item, [name]: target.value })
          }
        />
      </form>
    </Fragment>
  )
}
