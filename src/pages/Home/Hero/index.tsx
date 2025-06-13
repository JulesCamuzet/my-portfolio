import React, { useContext } from 'react'

import Title from '../../../components/Title'
import Text from '../../../components/Text'
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

import picture from 'url:../../../../public/assets/images/jules-camuzet.jpeg'

export const Hero = () => {
  const { theme } = useContext(themeContext)

  return (
    <BaseSection tall background={'transparent'} style={{ position: 'relative' }}>
      <Particles />
      <StyledContainer>
        <StyledTextPart>
          <Title>Jules Camuzet</Title>
          <Title type="h2">Developer</Title>
          <Text light>
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

          </StyledNetworksContainer>
        </StyledTextPart>
        <StyledPicturePart>
          <StyledImg src={picture} srcSet={picture} alt="Jules Camuzet" />
        </StyledPicturePart>
      </StyledContainer>
    </BaseSection>
  )
}
