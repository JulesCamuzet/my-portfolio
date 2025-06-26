import React, { useContext } from 'react'

import Title from '../../../components/Title'
import { colors } from '../../../constants/colors'
import { themeContext } from '../../../contexts/theme'
import { Theme } from '../../../hoc/Theme/types'
import { projects } from '../../../data'
import ProjectCard from '../../../components/ProjectCard'
import BaseSection from '../../parts/BaseSection'
import { StyledProjectsGrid } from './styles'

const Projects = () => {
  const { theme } = useContext(themeContext)

  return (
    <BaseSection
      tall
      background={`${
        theme === Theme.DARK ? colors.mainColor[900] : colors.mainColor[300]
      }`}
    >
      <Title type="h2">Projects</Title>
      <StyledProjectsGrid>
        {projects.map((project) => {
          return <ProjectCard key={project.id} data={project} theme={theme} />
        })}
      </StyledProjectsGrid>
    </BaseSection>
  )
}

export default Projects
