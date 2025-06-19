import React, { useState } from 'react'

import { Theme } from '../../hoc/Theme/types'
import { StyledCircle, StyledWrapper } from './styles'
import LightIcon from '../icons/Light'
import { colors } from '../../constants/colors'
import DarkIcon from '../icons/Dark'

type PropsType = {
  theme: Theme
  handleClick: () => void
}

const ThemeSwitch = ({ theme, handleClick }: PropsType) => {
  const [circleWidth, setCircleWidth] = useState(40)

  const wait = async (ms: number) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, ms)
    })
  }

  const onClick = async () => {
    setCircleWidth(90)
    await wait(200)
    handleClick()
    setCircleWidth(40)
  }

  return (
    <StyledWrapper $theme={theme} onClick={() => onClick()}>
      <LightIcon
        color={theme === Theme.LIGHT ? colors.white[50] : colors.white[400]}
        style={{
          transition: 'transform.2s',
          transform: `scale(${
            theme === Theme.LIGHT ? 1 : 1
          }) translate(50%, 50%) rotate(${theme === Theme.LIGHT ? 360 : 0}deg)`,
          width: '20px',
          height: '20px',
          position: 'absolute',
          zIndex: '200',
          top: 0,
          left: 0,
        }}
        pointer
      />
      <DarkIcon
        color={theme === Theme.LIGHT ? colors.white[400] : colors.white[50]}
        style={{
          transition: 'transform.2s',
          transform: `scale(${
            theme === Theme.LIGHT ? 1 : 1
          }) translate(-50%, 50%) rotate(${
            theme === Theme.LIGHT ? 360 : 0
          }deg)`,
          width: '20px',
          height: '20px',
          position: 'absolute',
          zIndex: '200',
          top: 0,
          right: 0,
        }}
        pointer
      />
      <StyledCircle $theme={theme} $width={circleWidth} />
    </StyledWrapper>
  )
}

export default ThemeSwitch
