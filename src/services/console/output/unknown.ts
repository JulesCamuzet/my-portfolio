import { headline } from '../../../pages/parts/Console/constants'

export const outputUnknown = (input: string) => {
  const output = `
      ${headline}${input.replaceAll(' ', '&thinsp;')}
      <br>command not found: ${input.replaceAll(' ', '&thinsp;')}
    `

  return output
}
