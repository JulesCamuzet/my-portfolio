import React, { CSSProperties, ReactNode, useContext } from 'react'

import { themeContext } from '../../contexts/theme'
import { StyledText, StyledWrapper } from './styles'

type PropsType = {
  children: ReactNode
  onClick: () => void
  style?: CSSProperties
}

const CallToAction = ({ children, onClick, style }: PropsType) => {
  const { theme } = useContext(themeContext)

  return (
    <StyledWrapper style={style} $theme={theme} onClick={onClick}>
      <StyledText $theme={theme}>{children}</StyledText>
    </StyledWrapper>
  )
}

export default CallToAction
