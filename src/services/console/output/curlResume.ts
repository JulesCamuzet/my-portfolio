import { downloadBlob } from '../../../helpers/downloadBlob'
import { headline } from '../../../pages/parts/Console/constants'

import { downloadResumeApi } from '../../api/downloadResume'

export const outputCurlResume = (input: string) => {
  ;(async () => {
    const result = await downloadResumeApi()

    result && downloadBlob(result, 'resume_Jules_Camuzet.pdf')
  })()

  const output = `
              ${headline}${input.replaceAll(' ', '&thinsp;')}<br>
              Download finished !
            `

  return output
}
