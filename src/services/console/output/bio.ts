import { headline } from '../../../pages/parts/Console/constants'

export const outputBio = (input: string) => {
  const output = `
      ${headline}${input.replaceAll(' ', '&thinsp;')}<br>
      I’m passionate about computer science and development. I enjoy
      designing solutions that combine creativity and structured logic to
      meet real-world needs. What drives me is the opportunity to build
      useful, well-crafted applications that have a positive impact.
      <br />
      I’m currently working in a startup as part of a work-study program,
      where I contribute to real projects and continue developing my skills
      in a dynamic environment. In addition to that, I also work as a
      freelance developer, taking on various projects that help me grow
      professionally and collaborate with different clients.
    `

  return output
}
