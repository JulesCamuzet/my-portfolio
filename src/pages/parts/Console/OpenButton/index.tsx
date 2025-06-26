import React, { useState } from 'react'

import ConsoleIcon from '../../../../components/icons/Console'
import { colors } from '../../../../constants/colors'
import CrossIcon from '../../../../components/icons/Cross'
import { StyledButton, StyledWrapper } from './styles'
import Popup from './Popup'
import { Theme } from '../../../../hoc/Theme/types'

type PropsType = {
  handleClick: () => void
  isOpen: boolean
  theme: Theme
}

const OpenButton = ({ handleClick, isOpen, theme }: PropsType) => {
  const [isPopupVisible, setIsPopupVisible] = useState(true)

  const onClick = () => {
    handleClick()
    setIsPopupVisible(false)
  }

  const handleClosePopup = () => {
    setIsPopupVisible(false)
  }

  return (
    <StyledWrapper>
      {isPopupVisible && <Popup theme={theme} handleClose={handleClosePopup} />}
      <StyledButton onClick={onClick}>
        {isOpen ? (
          <CrossIcon pointer color={colors.mainColor[900]} />
        ) : (
          <ConsoleIcon pointer color={colors.mainColor[900]} />
        )}
      </StyledButton>
    </StyledWrapper>
  )
}

export default OpenButton
