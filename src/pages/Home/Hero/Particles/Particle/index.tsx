import React from 'react'

import { Theme } from '../../../../../hoc/Theme/types'
import { colors } from '../../../../../constants/colors'
import { StyledWrapper } from './styles'

type PropsType = {
  colorIndex: string
  size: number
  top: number
  left: number
  theme: Theme
  isMobile: boolean
}

const Particle = ({
  colorIndex,
  size,
  top,
  left,
  theme,
  isMobile,
}: PropsType) => {
  const color =
    theme === Theme.LIGHT
      ? colors.mainColor[colorIndex]
      : colors.white[colorIndex]

  return (
    <StyledWrapper
      $isMobile={isMobile}
      $color={color}
      $size={size}
      $left={left}
      $top={top}
    />
  )
}

export default Particle
