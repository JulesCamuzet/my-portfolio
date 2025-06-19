import React, { ReactNode, useContext } from 'react'

import { themeContext } from '../../contexts/theme'
import { StyledWrapper } from './styles'

type PropsType = {
  children: ReactNode
  light?: boolean
  bold?: boolean
  small?: boolean
  big?: boolean
  noMargin?: boolean
}

const Text = ({ children, light, bold, big, small, noMargin }: PropsType) => {
  const { theme } = useContext(themeContext)

  return (
    <StyledWrapper
      $big={big}
      $theme={theme}
      $bold={bold}
      $light={light}
      $noMargin={noMargin}
    >
      {children}
    </StyledWrapper>
  )
}

export default Text
