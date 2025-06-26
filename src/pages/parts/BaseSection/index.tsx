import React, { CSSProperties, ReactNode } from 'react'

import { StyledContent, StyledWrapper } from './styles'

type PropsType = {
  children: ReactNode
  tall?: boolean
  background?: string
  style?: CSSProperties
  contentStyle?: CSSProperties
  htmlId?: string
}

const BaseSection = ({
  children,
  background,
  style,
  tall,
  contentStyle,
  htmlId,
}: PropsType) => {
  return (
    <StyledWrapper
      id={htmlId}
      style={style}
      $background={background}
      $tall={tall}
    >
      <StyledContent style={contentStyle}>{children}</StyledContent>
    </StyledWrapper>
  )
}

export default BaseSection
