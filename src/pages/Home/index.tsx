import React, { useContext } from 'react'

import { themeContext } from '../../contexts/theme'
import { colors } from '../../constants/colors'
import Console from '../parts/Console'
import { Hero } from './Hero'
import Projects from './Projects'
import Wave from '../parts/Wave'
import { StyledWrapper } from './styles'
import { Theme } from '../../hoc/Theme/types'
import Skills from './Skills'
import Contact from './Contact'

const HomePage = () => {
  const { theme } = useContext(themeContext)

  return (
    <StyledWrapper>
      <Hero />
      <Wave
        topColor={'transparent'}
        bottomColor={
          theme === Theme.DARK ? colors.mainColor[900] : colors.mainColor[300]
        }
        style={{ transform: 'translateY(10px)' }}
      />
      <Projects />
      <Skills />
      <Wave
        topColor={'transparent'}
        bottomColor={
          theme === Theme.DARK ? colors.mainColor[600] : colors.mainColor[600]
        }
        style={{ transform: 'translateY(-10px) rotate(180deg)' }}
      />
      <Contact />
      <Console />
    </StyledWrapper>
  )
}

export default HomePage
