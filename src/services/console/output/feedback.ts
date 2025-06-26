import { headline } from "../../../pages/parts/Console/constants"
import { sendFeedbackEmailApi } from "../../api/sendFeedbackEmail"

export const outputFeedback = (input: string) => {
  const message = input.split('-m')[1].trim()

  sendFeedbackEmailApi({ message })

  const output = `
        ${headline}${input.replaceAll(' ', '&thinsp;')}<br>
        Message sent ! Thanks for your feedback.
  `

  return output
}
