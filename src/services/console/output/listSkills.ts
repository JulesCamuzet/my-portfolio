import { skillsCardsData as skills } from "../../../data"
import { SkillCard, SkillsData } from "../../../data/types"
import { headline } from "../../../pages/parts/Console/constants"

export const outputListSkills = (input: string) => {
  let output = `
      ${headline}${input.replaceAll(' ', '&thinsp;')}<br>
    `

  for (let i = 0; i < Object.keys(skills).length; i++) {
    const key = Object.keys(skills)[i] as keyof SkillsData
    const currentSkills = skills[key] as SkillCard[]
    
    output += `${key} : `

    for (let j = 0; j < currentSkills.length; j++) {
      output += currentSkills[j].name

      if (j !== currentSkills.length - 1) {
        output += ' - '
      }
    }

    output += '<br>'
  }

  return output
}
