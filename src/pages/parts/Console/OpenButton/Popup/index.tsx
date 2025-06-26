import React from 'react'

import Text from '../../../../../components/Text'
import { Theme } from '../../../../../hoc/Theme/types'
import { StyledWrapper } from './styles'
import CrossIcon from '../../../../../components/icons/Cross'
import CloseButton from './CloseButton'

type PropsType = {
  theme: Theme
  handleClose: () => void
}

const Popup = ({ theme, handleClose }: PropsType) => {
  return (
    <StyledWrapper $theme={theme}>
      <CloseButton handleClick={handleClose} />
      <Text>
        You are a linux addict and don't see the point of having an interface ?...
      </Text>
      <Text style={{ textAlign: 'right' }} noMargin big bold>
        Try the console !
      </Text>
    </StyledWrapper>
  )
}

export default Popup
