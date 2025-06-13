import React, { CSSProperties, ReactNode } from 'react'

import { StyledContent, StyledWrapper } from './styles'

type PropsType = {
  children: ReactNode
  tall?: boolean
  background?: string
  style?: CSSProperties
}

const BaseSection = ({ children, background, style, tall }: PropsType) => {
  return (
    <StyledWrapper style={style} $background={background} $tall={tall}>
      <StyledContent>{children}</StyledContent>
    </StyledWrapper>
  )
}

export default BaseSection
