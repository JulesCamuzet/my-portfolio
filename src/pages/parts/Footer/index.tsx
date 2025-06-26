import React, { useContext } from 'react'
import { Link } from 'react-router'

import Text from '../../../components/Text'
import { colors } from '../../../constants/colors'
import { themeContext } from '../../../contexts/theme'
import { Theme } from '../../../hoc/Theme/types'
import { Margins } from '../../../constants/margins'
import GithubIcon from '../../../components/icons/Github'
import LinkedinIcon from '../../../components/icons/Linkedin'
import BaseSection from '../BaseSection'
import { StyledLogoContainer } from './styles'
import useMediaQuery from '../../../hooks/useMediaQuery'

const Footer = () => {
  const { theme } = useContext(themeContext)
  const isMobile = useMediaQuery('(max-width: 768px')

  return (
    <BaseSection
      style={{
        backgroundColor:
          theme === Theme.DARK ? colors.mainColor[900] : colors.mainColor[300],
      }}
      contentStyle={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: Margins.M3
      }}
    >
      <Text noMargin big>
        💖 Let's connect and build something amazing together!
      </Text>
      <StyledLogoContainer>
        <Link to={'github.com'} target="_blank">
          <GithubIcon
            color={
              theme === Theme.DARK ? colors.white[50] : colors.mainColor[800]
            }
            pointer
          />
        </Link>
        <Link to={'linkedin.com'} target="_blank">
          <LinkedinIcon
            color={
              theme === Theme.DARK ? colors.white[50] : colors.mainColor[800]
            }
            pointer
          />
        </Link>
      </StyledLogoContainer>
      <Text noMargin big>
        © {new Date().getFullYear()} Jules Camuzet. All rights reserved.
      </Text>
    </BaseSection>
  )
}

export default Footer
