import { headline } from "../../../pages/parts/Console/constants"

export const outputHelp = (input: string) => {
  const output = `
    ${headline}${input.replaceAll(' ', '&thinsp;')}<br>
    Here is a list of the commands that you can use :<br>
    <br>
    &thinsp;list-projects -> Display the list of my projects<br>
    <br>
    &thinsp;list-skills -> Display the list of my skills<br>
    <br>
    &thinsp;bio -> Get my bio<br>
    <br>
    &thinsp;clear -> Clear the console<br>
    <br>
    &thinsp;exit -> Close the console
    <br>
  `

  return output
}
