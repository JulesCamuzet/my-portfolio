import React, { CSSProperties, ReactNode, useContext } from 'react'

import { themeContext } from '../../contexts/theme'
import { StyledH1, StyledH2, StyledH3 } from './styles'

type PropsType = {
  type?: 'h1' | 'h2' | 'h3'
  children: ReactNode
  style?: CSSProperties
}

const Title = ({ type = 'h1', children, style }: PropsType) => {
  const { theme } = useContext(themeContext)

  switch (type) {
    case 'h1':
      return (
        <StyledH1 style={style} $theme={theme}>
          {children}
        </StyledH1>
      )

    case 'h2':
      return (
        <StyledH2 style={style} $theme={theme}>
          {children}
        </StyledH2>
      )

    case 'h3':
      return (
        <StyledH3 style={style} $theme={theme}>
          {children}
        </StyledH3>
      )
  }
}

export default Title
