import React, {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  useContext,
} from 'react'

import { themeContext } from '../../contexts/theme'
import { StyledText, StyledWrapper } from './styles'

type PropsType = {
  children: ReactNode
  onClick: () => void
  style?: CSSProperties
  disabled?: boolean
}

const CallToAction = ({ children, onClick, disabled, style }: PropsType) => {
  const { theme } = useContext(themeContext)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    !disabled && onClick()
  }

  return (
    <StyledWrapper
      $disabled={disabled}
      style={style}
      $theme={theme}
      onClick={handleClick}
    >
      <StyledText $theme={theme}>{children}</StyledText>
    </StyledWrapper>
  )
}

export default CallToAction
