import React, { useContext } from 'react'
import { Link } from 'react-router'

import Text from '../../../components/Text'
import { colors } from '../../../constants/colors'
import { themeContext } from '../../../contexts/theme'
import { Theme } from '../../../hoc/Theme/types'
import { Margins } from '../../../constants/margins'
import GithubIcon from '../../../components/icons/Github'
import useMediaQuery from '../../../hooks/useMediaQuery'
import LinkedinIcon from '../../../components/icons/Linkedin'
import BaseSection from '../BaseSection'
import { StyledLogoContainer } from './styles'

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
        gap: Margins.M3,
      }}
    >
      <Text noMargin big>
        💖 Let's connect and build something amazing together!
      </Text>
      <StyledLogoContainer>
        <Link to={'https://linktr.ee/julescamuzet'} target="_blank">
          <GithubIcon
            color={
              theme === Theme.DARK ? colors.white[50] : colors.mainColor[800]
            }
            pointer
          />
        </Link>
        <Link
          to={'https://www.linkedin.com/in/jules-camuzet-616805258/'}
          target="_blank"
        >
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
