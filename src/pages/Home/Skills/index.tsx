import React, { useContext } from 'react'

import { skillsCardsData } from '../../../data'
import Title from '../../../components/Title'
import { colors } from '../../../constants/colors'
import { downloadResumeApi } from '../../../services/api/downloadResume'
import { themeContext } from '../../../contexts/theme'
import { Theme } from '../../../hoc/Theme/types'
import Text from '../../../components/Text'
import CallToAction from '../../../components/CallToAction'
import { Margins } from '../../../constants/margins'
import { downloadBlob } from '../../../helpers/downloadBlob'
import BaseSection from '../../parts/BaseSection'
import {
  StyledSkillCard,
  StyledSkillPicture,
  StyledSkillsCardsContainer,
} from './styles'

const Skills = () => {
  const { theme } = useContext(themeContext)

  const handleClickDownload = async () => {
    const result = await downloadResumeApi()

    if (result !== null) {
      downloadBlob(result, 'resume_Jules_Camuzet.pdf')
    }
  }

  return (
    <BaseSection
      tall
      background={`linear-gradient(180deg, ${
        theme === Theme.LIGHT ? colors.mainColor[300] : colors.mainColor[900]
      }, ${colors.mainColor[600]})`}
    >
      <Title type="h2">My main skills</Title>
      <StyledSkillsCardsContainer>
        {skillsCardsData.map((skill, index) => {
          return (
            <StyledSkillCard key={skill.id} $theme={theme}>
              <StyledSkillPicture
                $index={index}
                src={skill.img}
                srcSet={skill.img}
              />
              <Text noMargin big bold>
                {skill.name}
              </Text>
            </StyledSkillCard>
          )
        })}
      </StyledSkillsCardsContainer>
      <Title
        style={{
          color: colors.mainColor[200],
          textAlign: 'center',
          marginTop: Margins.M10,
        }}
        type="h3"
      >
        If you want to discover more about me and my experiences, you can also download my resume !
      </Title>
      <CallToAction
        onClick={handleClickDownload}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: Margins.M9,
        }}
      >
        Get my resume
      </CallToAction>
    </BaseSection>
  )
}

export default Skills
