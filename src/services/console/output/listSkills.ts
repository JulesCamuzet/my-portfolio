import { skillsCardsData as skills } from "../../../data"
import { headline } from "../../../pages/parts/Console/constants"

export const outputListSkills = (input: string) => {
  let output = `
      ${headline}${input.replaceAll(' ', '&thinsp;')}<br>
    `

  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i]
    
    output += `- ${skill.name}<br>`

    output += '<br>'
  }

  return output
}
