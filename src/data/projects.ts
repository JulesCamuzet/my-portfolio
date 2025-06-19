import { Project, Skills } from './types'

const projects: Project[] = [
  {
    id: 'test',
    name: 'Test',
    description:
      'My super project My super project My super project My super project My super project ',
    githubLink: 'https://github.com',
    pictureUrl:
      'https://miro.medium.com/v2/resize:fit:1400/1*_LlsV_vVS-X_2cPufxjHoA.png',
    viewLink: 'https://google.com',
    skills: [Skills.JAVASCRIPT, Skills.PHP, Skills.REACT],
  },
  {
    id: 'test2',
    name: 'Tes 2',
    description:
      'My super project',
    pictureUrl:
      'https://nextformation.com/app/uploads/2022/04/UxUidesigner_mobile.jpg',
    viewLink: 'https://google.com',
    skills: [Skills.JAVASCRIPT, Skills.PHP, Skills.REACT],
  },
]

export default projects
