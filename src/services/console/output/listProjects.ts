import { headline } from "../../../pages/parts/Console/constants"
import { projects } from "../../../data"

export const outputListProjects = (input: string) => {
  let output = `
      ${headline}${input.replaceAll(' ', '&thinsp;')}<br>
    `

  for (let i = 0; i < projects.length; i++) {
    const currentProject = projects[i]

    output += `${i + 1} - ${currentProject.name} : ${currentProject.description}<br>
    &thinsp;&thinsp;&thinsp;&thinsp;-> github : ${currentProject.githubLink ? `<a href="${currentProject.githubLink}" target="_blank">${currentProject.githubLink}</a>` : 'null'}<br>
    &thinsp;&thinsp;&thinsp;&thinsp;-> view : ${currentProject.viewLink ? `<a href="${currentProject.viewLink}" target="_blank">${currentProject.viewLink}</a>` : 'null'}<br>
    ${i === projects.length - 1 ? '' : '<br>'}
    `
  }

  return output
}
