import React, { useContext } from 'react'

import { themeContext } from '../../contexts/theme'
import { colors } from '../../constants/colors'
import Console from '../parts/Console'
import Footer from '../parts/Footer'
import Wave from '../parts/Wave'
import { Hero } from './Hero'
import Projects from './Projects'
import { Theme } from '../../hoc/Theme/types'
import Skills from './Skills'
import Contact from './Contact'
import { StyledWrapper } from './styles'

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
      <Footer />
    </StyledWrapper>
  )
}

export default HomePage
