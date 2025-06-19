import React, { ChangeEvent } from 'react'

import Text from '../Text'
import {
  StyledErrorMessage,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from './styles'
import { Theme } from '../../hoc/Theme/types'

type PropsType = {
  id: string
  label: string
  value: string
  error: string
  placeholder: string
  name: string
  theme: Theme
  handleChange: (val: string) => void
}

const TextInput = ({
  id,
  label,
  value,
  error,
  placeholder,
  name,
  handleChange,
  theme,
}: PropsType) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    handleChange(e.currentTarget.value)
  }

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={id}>
        <Text noMargin>
          {label}
        </Text>
      </StyledLabel>
      <StyledInput
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name={name}
        $theme={theme}
      />
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </StyledWrapper>
  )
}

export default TextInput
