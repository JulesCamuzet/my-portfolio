import React, { ChangeEvent } from 'react'

import { Theme } from '../../hoc/Theme/types'
import Text from '../Text'
import {
  StyledErrorMessage,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from './styles'

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

const Textarea = ({
  id,
  label,
  value,
  error,
  placeholder,
  name,
  handleChange,
  theme,
}: PropsType) => {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
        $hasError={!!error}
      ></StyledInput>
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </StyledWrapper>
  )
}

export default Textarea
