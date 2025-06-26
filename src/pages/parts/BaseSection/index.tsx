import React, { CSSProperties, ReactNode } from 'react'

import { StyledContent, StyledWrapper } from './styles'

type PropsType = {
  children: ReactNode
  tall?: boolean
  background?: string
  style?: CSSProperties
  contentStyle?: CSSProperties
}

const BaseSection = ({
  children,
  background,
  style,
  tall,
  contentStyle,
}: PropsType) => {
  return (
    <StyledWrapper style={style} $background={background} $tall={tall}>
      <StyledContent style={contentStyle}>{children}</StyledContent>
    </StyledWrapper>
  )
}

export default BaseSection
