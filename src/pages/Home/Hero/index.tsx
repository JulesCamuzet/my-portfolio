import React, { useContext } from 'react'
import { Link } from 'react-router'

import GithubIcon from '../../../components/icons/Github'
import LinkedinIcon from '../../../components/icons/Linkedin'
import { Theme } from '../../../hoc/Theme/types'
import { colors } from '../../../constants/colors'
import Title from '../../../components/Title'
import Text from '../../../components/Text'
import CallToAction from '../../../components/CallToAction'
import { Margins } from '../../../constants/margins'
import { themeContext } from '../../../contexts/theme'
import BaseSection from '../../parts/BaseSection'
import {
  StyledContainer,
  StyledImg,
  StyledNetworksContainer,
  StyledPicturePart,
  StyledTextPart,
} from './styles'
import Particles from './Particles'

export const Hero = () => {
  const { theme } = useContext(themeContext)

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView()
  }

  const pictureUrl = `${process.env.API_URL}/images/jules-camuzet.jpeg`

  return (
    <BaseSection
      tall
      background={'transparent'}
      style={{ position: 'relative' }}
    >
      <Particles />
      <StyledContainer>
        <StyledTextPart>
          <Title>Jules Camuzet</Title>
          <Title type="h2">Developer</Title>
          <Text big>
            I’m passionate about computer science and development. I enjoy
            designing solutions that combine creativity and structured logic to
            meet real-world needs. What drives me is the opportunity to build
            useful, well-crafted applications that have a positive impact.
            <br />
            I’m currently working as a freelance developer, taking on projects
            that allow me to strengthen my skills and collaborate with others.
            At the same time, I’m looking for a work-study opportunity, where I
            can continue learning and contribute to meaningful and innovative
            projects.
          </Text>
          <StyledNetworksContainer $theme={theme}>
            <Link target="_blank" to={'https://linktr.ee/julescamuzet'}>
              <GithubIcon
                color={
                  theme === Theme.DARK
                    ? colors.white[50]
                    : colors.mainColor[800]
                }
                pointer
              />
            </Link>
            <Link
              target="_blank"
              to={'https://www.linkedin.com/in/jules-camuzet-616805258/'}
            >
              <LinkedinIcon
                color={
                  theme === Theme.DARK
                    ? colors.white[50]
                    : colors.mainColor[800]
                }
                pointer
              />
            </Link>
          </StyledNetworksContainer>
          <CallToAction
            style={{ marginTop: Margins.M8 }}
            onClick={handleScrollToContact}
          >
            Get in touch
          </CallToAction>
        </StyledTextPart>
        <StyledPicturePart>
          <StyledImg src={pictureUrl} srcSet={pictureUrl} alt="Jules Camuzet" />
        </StyledPicturePart>
      </StyledContainer>
    </BaseSection>
  )
}
