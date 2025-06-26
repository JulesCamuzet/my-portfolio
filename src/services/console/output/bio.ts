import { headline } from '../../../pages/parts/Console/constants'

export const outputBio = (input: string) => {
  const output = `
      ${headline}${input.replaceAll(' ', '&thinsp;')}<br>
      Passionate about computer science and development, I am seeking a
      work-study opportunity starting in October to further enhance my
      skills and contribute meaningfully to innovative and impactful
      projects.
      <br />I see computer science as the ideal mix of creative thinking
      and structured logic. While I’ve spent more time with high-level
      tools like React, I’m also interested in low-level programming as it
      offers a deeper understanding of how everything works beneath the
      surface. At the same time, I truly enjoy working with high-level
      frameworks for the speed, flexibility, and creative freedom they
      offer when building user-facing applications.
    `

  return output
}
