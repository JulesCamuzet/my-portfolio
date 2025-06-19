import React from 'react'

import Text from '../../../../components/Text'
import { SkillCard } from '../../../../data/types'
import { Theme } from '../../../../hoc/Theme/types'
import Title from '../../../../components/Title'
import {
  StyledSkillCard,
  StyledSkillImg,
  StyledSkillsCardsContainer,
  StyledSkillsSection,
} from './styles'

type PropsType = {
  cardsData: SkillCard[]
  theme: Theme
  title: string
}

const SkillsCategory = ({ cardsData, theme, title }: PropsType) => {
  return (
    <StyledSkillsSection $theme={theme}>
      <Title type="h3">{title}</Title>
      <StyledSkillsCardsContainer>
        {cardsData.map((data) => {
          return (
            <StyledSkillCard key={data.id}>
              <StyledSkillImg src={data.img} srcSet={data.img} />
              <Text>{data.name}</Text>
            </StyledSkillCard>
          )
        })}
      </StyledSkillsCardsContainer>
    </StyledSkillsSection>
  )
}

export default SkillsCategory
