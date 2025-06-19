import React, { useContext } from 'react'

import { skillsCardsData } from '../../../data'
import Title from '../../../components/Title'
import { colors } from '../../../constants/colors'
import { themeContext } from '../../../contexts/theme'
import { Theme } from '../../../hoc/Theme/types'
import BaseSection from '../../parts/BaseSection'
import SkillsCategory from './SkillsCategory'

const Skills = () => {
  const { theme } = useContext(themeContext)

  return (
    <BaseSection
      tall
      background={`linear-gradient(180deg, ${
        theme === Theme.LIGHT ? colors.mainColor[300] : colors.mainColor[900]
      }, ${colors.mainColor[600]})`}
    >
      <Title type="h2">My skills</Title>
      <SkillsCategory
        theme={theme}
        cardsData={skillsCardsData.primaries}
        title="Primaries"
      />
      <SkillsCategory
        theme={theme}
        cardsData={skillsCardsData.secondaries}
        title="Secondaries"
      />
      <SkillsCategory
        theme={theme}
        cardsData={skillsCardsData.tertiaries}
        title="Tertiaries"
      />
    </BaseSection>
  )
}

export default Skills
