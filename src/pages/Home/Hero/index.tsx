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
            Passionate about computer science and development, I am seeking a
            work-study opportunity starting in October to further enhance my
            skills and contribute meaningfully to innovative and impactful
            projects.
            <br />I see computer science as the ideal mix of creative thinking
            and structured logic. While I’ve spent more time with high-level
            tools like React, I’m also interested in low-level programming as it
            offers a deeper understanding of how everything works beneath the
            surface. At the same time, I truly enjoy working with high-level
            frameworks for the speed, flexibility, and creative freedom they
            offer when building user-facing applications.
          </Text>
          <StyledNetworksContainer $theme={theme}>
            <Link target="_blank" to={'https://github.com'}>
              <GithubIcon
                color={
                  theme === Theme.DARK
                    ? colors.white[50]
                    : colors.mainColor[800]
                }
                pointer
              />
            </Link>
            <Link target="_blank" to={'https://linkedin.com'}>
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
          <CallToAction style={{ marginTop: Margins.M8 }} onClick={() => {}}>
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
