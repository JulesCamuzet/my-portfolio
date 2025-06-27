import React, { useContext, useMemo } from 'react'

import { themeContext } from '../../../../contexts/theme'
import useMediaQuery from '../../../../hooks/useMediaQuery'
import { StyledWrapper } from './styles'
import Particle from './Particle'

const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const getRandomColorIndex = () => {
  const possibleIndexs = ['50', '100', '200', '300', '400']

  return possibleIndexs[Math.round(Math.random() * possibleIndexs.length - 1)]
}

const Particles = () => {
  const { theme } = useContext(themeContext)

  const isMobile = useMediaQuery('(max-width: 768px)')

  const blobs = useMemo<
    { colorIndex: string; size: number; top: number; left: number }[]
  >(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        colorIndex: getRandomColorIndex(),
        size: getRandom(100, 300),
        top: getRandom(0, 100),
        left: getRandom(0, 100),
      })),
    [1]
  )

  return (
    <StyledWrapper $theme={theme}>
      {blobs.map((blob, index) => (
        <Particle
          key={index}
          colorIndex={blob.colorIndex}
          size={blob.size}
          top={blob.top}
          left={blob.left}
          theme={theme}
          isMobile={isMobile}
        />
      ))}
    </StyledWrapper>
  )
}

export default Particles
