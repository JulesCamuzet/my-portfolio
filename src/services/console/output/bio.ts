import { headline } from '../../../pages/parts/Console/constants'

export const outputBio = (input: string) => {
  const output = `
      ${headline}${input.replaceAll(' ', '&thinsp;')}<br>
      I’m passionate about computer science and development. I enjoy
      designing solutions that combine creativity and structured logic to
      meet real-world needs. What drives me is the opportunity to build
      useful, well-crafted applications that have a positive impact.
      <br />
      I’m currently working as a freelance developer, taking on projects
      that allow me to strengthen my skills and collaborate with others.
      At the same time, I’m looking for a work-study opportunity, where I
      can continue learning and contribute to meaningful and innovative
      projects.
    `

  return output
}
