import React, { ReactNode, useContext } from 'react'

import { themeContext } from '../../contexts/theme'
import { StyledWrapper } from './styles'

type PropsType = {
  children: ReactNode
  light?: boolean
  bold?: boolean
}

const Text = ({ children, light, bold }: PropsType) => {
  const { theme } = useContext(themeContext)

  return (
    <StyledWrapper $theme={theme} $bold={bold} $light={light}>
      {children}
    </StyledWrapper>
  )
}

export default Text
