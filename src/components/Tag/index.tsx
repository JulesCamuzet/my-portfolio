import React = require('react')

import { Theme } from '../../hoc/Theme/types'
import { StyledWrapper } from './styles'

type PropsType = {
  label: string
  theme: Theme
}

const Tag = ({ label, theme }: PropsType) => {
  return <StyledWrapper $theme={theme}>{label}</StyledWrapper>
}

export default Tag
