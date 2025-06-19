import React from 'react'

import { Theme } from '../../hoc/Theme/types'
import { Project } from '../../data/types'
import Text from '../Text'
import Tag from '../Tag'
import {
  StyledImg,
  StyledLinksContainer,
  StyledMain,
  StyledSkillsContainer,
  StyledWrapper,
} from './styles'
import GithubLink from './GithubLink'
import ViewLink from './ViewLink'

type PropsType = {
  theme: Theme
  data: Project
}

const ProjectCard = ({ theme, data }: PropsType) => {
  return (
    <StyledWrapper $theme={theme}>
      <StyledMain>
        <StyledImg src={data.pictureUrl} srcSet={data.pictureUrl} />
        <Text big bold>{data.name}</Text>
        <Text>{data.description}</Text>
        <StyledSkillsContainer>
          {data.skills.map((skill) => {
            return <Tag theme={theme} key={skill} label={skill} />
          })}
        </StyledSkillsContainer>
      </StyledMain>
      <StyledLinksContainer>
        {data.githubLink && <GithubLink link={data.githubLink} theme={theme} />}
        {data.viewLink && <ViewLink link={data.viewLink} theme={theme} />}
      </StyledLinksContainer>
    </StyledWrapper>
  )
}

export default ProjectCard
