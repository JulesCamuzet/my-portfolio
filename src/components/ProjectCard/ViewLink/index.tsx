import React from 'react'

import { Theme } from '../../../hoc/Theme/types'
import { colors } from '../../../constants/colors'
import EyeIcon from '../../icons/EyeIcon'
import ExternalLinkIcon from '../../icons/ExternalLink'
import { StyledLinkContainer } from '../styles'

type PropsType = {
  link: string
  theme: Theme
}

const ViewLink = ({ link, theme }: PropsType) => {
  return (
    <StyledLinkContainer href={link} target="_blank">
      <EyeIcon
        color={theme === Theme.DARK ? colors.white[50] : colors.mainColor[800]}
        pointer
      />
      <ExternalLinkIcon
        color={theme === Theme.DARK ? colors.white[50] : colors.mainColor[800]}
        pointer
        width="12px"
        height="12px"
      />
    </StyledLinkContainer>
  )
}

export default ViewLink
