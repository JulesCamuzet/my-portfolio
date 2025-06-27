import { SkillsData } from './types'

const skillsCards: SkillsData = [
  {
    id: 'typescript',
    name: 'Typescript',
    img: `${process.env.API_URL}/images/typescript.png`,
  },
  {
    id: 'react',
    name: 'React',
    img: `${process.env.API_URL}/images/react.png`,
  },
  {
    id: 'node',
    name: 'NodeJS',
    img: `${process.env.API_URL}/images/node-js.png`,
  },
  {
    id: 'git',
    name: 'Git',
    img: `${process.env.API_URL}/images/git.png`,
  },
]

export default skillsCards
