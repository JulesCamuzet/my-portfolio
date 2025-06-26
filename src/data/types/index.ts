export enum Skills {
  JAVASCRIPT = 'JavaScript',
  TYPESCRIPT = 'TypeScript',
  REACT = 'React',
  WORDPRESS = 'Wordpress',
  PHP = 'PHP',
  C = 'C',
  LARAVEL = 'Laravel',
  DJANGO = 'Django',
  PYTHON = 'Python'
}

export type Project = {
  id: string
  name: string
  pictureUrl: string
  description: string
  githubLink?: string
  viewLink?: string
  skills: Skills[]
}

export type SkillCard = {
  id: string
  name: string
  img: string
}

export type SkillsData = SkillCard[]
