import React, { ReactNode, useContext } from 'react'

import { themeContext } from '../../contexts/theme'
import { StyledH1, StyledH2 } from './styles'

type PropsType = {
  type?: 'h1' | 'h2'
  children: ReactNode
}

const Title = ({ type = 'h1', children }: PropsType) => {
  const { theme } = useContext(themeContext)

  switch (type) {
    case 'h1':
      return <StyledH1 $theme={theme}>{children}</StyledH1>
      
    case 'h2':
      return <StyledH2 $theme={theme}>{children}</StyledH2>
  }
}

export default Title
