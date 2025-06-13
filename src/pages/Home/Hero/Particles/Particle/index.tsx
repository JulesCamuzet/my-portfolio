import React from 'react'

import { Theme } from '../../../../../hoc/Theme/types'
import { StyledWrapper } from './styles'
import { colors } from '../../../../../constants/colors'

type PropsType = {
  colorIndex: string
  size: number
  top: number
  left: number
  theme: Theme
}

const Particle = ({ colorIndex, size, top, left, theme }: PropsType) => {
  const color =
    theme === Theme.LIGHT
      ? colors.blueViolet[colorIndex]
      : colors.white[colorIndex]

  return <StyledWrapper $color={color} $size={size} $left={left} $top={top} />
}

export default Particle
