import React from 'react'

import { Theme } from '../../../hoc/Theme/types'
import GithubIcon from '../../icons/Github'
import ExternalLinkIcon from '../../icons/ExternalLink'
import { colors } from '../../../constants/colors'
import { StyledLinkContainer } from '../styles'

type PropsType = {
  link: string
  theme: Theme
}

const GithubLink = ({
  link,
  theme
}: PropsType) => {
  return (
    <StyledLinkContainer href={link} target="_blank">
      <GithubIcon
        color={theme === Theme.DARK ? colors.white[50] : colors.mainColor[800]}
        pointer
      />
      <ExternalLinkIcon
        color={theme === Theme.DARK ? colors.white[50] : colors.mainColor[800]}
        pointer
        width="10px"
        height="10px"
      />
    </StyledLinkContainer>
  )
}

export default GithubLink
